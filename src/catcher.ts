import Socket from './modules/socket';
import Sanitizer from './modules/sanitizer';
import log from './modules/logger';
import StackParser from './modules/stackParser';
import {HawkInitialSettings} from '../types/hawk-initial-settings';
import {BacktraceFrame, HawkEvent, HawkUser} from '../types/hawk-event';
import {VueIntegration, VueIntegrationAddons} from './integrations/vue';
import {generateRandomId} from "./utils";

/**
 * Allow to use global VERSION, that will be overwritten by Webpack
 */
declare const VERSION: string;

/**
 * Hawk JavaScript Catcher
 * Module for errors and exceptions tracking
 *
 * @copyright CodeX
 */
export default class Catcher {
  /**
   * JS Catcher version
   */
  public readonly version: string = VERSION;

  /**
   * Catcher Type
   */
  private readonly type: string = 'errors/javascript';

  /**
   * User project's Integration Token
   */
  private readonly token: string;

  /**
   * Current bundle version
   */
  private readonly release: string;

  /**
   * Current authenticated user
   */
  private readonly user: HawkUser;

  /**
   * Transport for dialog between Catcher and Collector
   * (WebSocket decorator)
   */
  private readonly transport: Socket;

  /**
   * Module for parsing backtrace
   */
  private readonly stackParser: StackParser = new StackParser();

  /**
   * Catcher constructor
   *
   * @param {HawkInitialSettings|string} settings - If settings is a string, it means an Integration Token
   */
  constructor(settings: HawkInitialSettings | string) {
    if (typeof settings === 'string') {
      settings = {
        token: settings,
      } as HawkInitialSettings;
    }

    this.token = settings.token;
    this.release = settings.release;
    this.user = settings.user || Catcher.getGeneratedUser();

    if (!this.token) {
      log(
        'Integration Token is missed. You can get it on https://hawk.so at Project Settings.',
        'warn'
      );

      return;
    }

    /**
     * Init transport
     */
    this.transport = new Socket({
      collectorEndpoint: settings.collectorEndpoint || 'wss://k1.hawk.so:443/ws',
      reconnectionAttempts: settings.reconnectionAttempts,
      reconnectionTimeout: settings.reconnectionTimeout,
      onClose(): void {
        log(
          'Connection lost. Connection will be restored when new errors occurred',
          'info'
        );
      },
    });

    /**
     * Set handlers
     */
    this.initGlobalHandlers();

    if (settings.vue) {
      this.connectVue(settings.vue);
    }
  }

  /**
   * Send test event from client
   */
  public test(): void {
    const fakeEvent = new Error('Hawk JavaScript Catcher test message.');

    this.catchError(fakeEvent);
  }

  /**
   * This method prepares and sends an Error to Hawk
   * User can fire it manually on try-catch
   *
   * @param error - error to catch
   */
  public catchError(error: Error): void {
    this.formatAndSend(error);
  }

  /**
   * Add error handing to the passed Vue app
   *
   * @param vue - Vue app
   */
  public connectVue(vue): void {
    // eslint-disable-next-line no-new
    new VueIntegration(vue, (error: Error, addons: VueIntegrationAddons) => {
      this.formatAndSend(error, {
        vue: addons,
      });
    });
  }

  /**
   * Init global errors handler
   */
  private initGlobalHandlers(): void {
    window.addEventListener('error', (event: ErrorEvent) => this.handleEvent(event));
    window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => this.handleEvent(event));
  }

  /**
   * Handles the event and sends it to the server
   *
   * @param {ErrorEvent|PromiseRejectionEvent} event — (!) both for Error and Promise Rejection
   */
  private async handleEvent(event: ErrorEvent | PromiseRejectionEvent): Promise<void> {
    /**
     * Promise rejection reason is recommended to be an Error, but it can be a string:
     * - Promise.reject(new Error('Reason message')) ——— recommended
     * - Promise.reject('Reason message')
     */
    let error = (event as ErrorEvent).error || (event as PromiseRejectionEvent).reason;

    /**
     * Case when error triggered in external script
     * We can't access event error object because of CORS
     * Event message will be 'Script error.'
     */
    if (event instanceof ErrorEvent && error === undefined) {
      error = (event as ErrorEvent).message;
    }

    this.formatAndSend(error);
  }

  /**
   * Format and send an error
   *
   * @param error - error to send
   * @param {object} integrationAddons - addons spoiled by Integration
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async formatAndSend(error: Error | string, integrationAddons?: { [key: string]: any }): Promise<void> {
    try {
      const errorFormatted = await this.prepareErrorFormatted(error);

      /**
       * If this event catched by integration (Vue or other), it can pass extra addons
       */
      if (integrationAddons) {
        this.appendIntegrationAddons(errorFormatted, integrationAddons);
      }

      this.sendErrorFormatted(errorFormatted);
    } catch (formattingError) {
      log('Internal error ლ(´ڡ`ლ)', 'error', formattingError);
    }
  }

  /**
   * Sends formatted HawkEvent to the Collector
   *
   * @param errorFormatted - formatted error to send
   */
  private sendErrorFormatted(errorFormatted: HawkEvent): void {
    this.transport.send(errorFormatted)
      .catch((sendingError) => {
        log('WebSocket sending error', 'error', sendingError);
      });
  }

  /**
   * Formats the event
   *
   * @param error - error to format
   */
  private async prepareErrorFormatted(error: Error | string): Promise<HawkEvent> {
    return {
      token: this.token,
      catcherType: this.type,
      payload: {
        title: this.getTitle(error),
        type: this.getType(error),
        release: this.getRelease(),
        context: this.getContext(),
        user: this.getUser(),
        get: this.getGetParams(),
        addons: this.getAddons(),
        backtrace: await this.getBacktrace(error),
      },
    };
  }

  /**
   * Return event title
   *
   * @param error - event from which to get the title
   */
  private getTitle(error: Error | string): string {
    const notAnError = !(error instanceof Error);

    /**
     * Case when error is 'reason' of PromiseRejectionEvent
     * and reject() provided with text reason instead of Error()
     */
    if (notAnError) {
      return error.toString() as string;
    }

    return (error as Error).message;
  }

  /**
   * Return event type: TypeError, ReferenceError etc
   *
   * @param error - catched error
   */
  private getType(error: Error | string): string {
    const notAnError = !(error instanceof Error);

    /**
     * Case when error is 'reason' of PromiseRejectionEvent
     * and reject() provided with text reason instead of Error()
     */
    if (notAnError) {
      return null;
    }

    return (error as Error).name;
  }

  /**
   * Release version
   */
  private getRelease(): string | null {
    return this.release || null;
  }

  /**
   * Collects additional information
   */
  private getContext(): object {
    return Sanitizer.sanitize({});
  }

  /**
   * Current authenticated user
   */
  private getUser(): HawkUser | null {
    return this.user || null;
  }

  /**
   * Generates user if no one provided via HawkCatcher settings
   * After generating, stores user for feature requests
   */
  private static getGeneratedUser(): HawkUser {
    let userId: string;
    const LOCAL_STORAGE_KEY = 'hawk-user-id';

    if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
      userId = localStorage.getItem('hawk-user-id');
    } else {
      userId = generateRandomId();
      localStorage.setItem(LOCAL_STORAGE_KEY, userId);
    }

    return {
      id: userId,
    };
  }

  /**
   * Get parameters
   */
  private getGetParams(): object | null {
    const searchString = window.location.search.substr(1);

    if (!searchString) {
      return null;
    }

    /**
     * Create object from get-params string
     */
    const pairs = searchString.split('&');

    return pairs.reduce((accumulator, pair) => {
      const [key, value] = pair.split('=');

      accumulator[key] = value;

      return accumulator;
    }, {});
  }

  /**
   * Return parsed backtrace information
   *
   * @param error - event from which to get backtrace
   */
  private async getBacktrace(error: Error | string): Promise<BacktraceFrame[] | null> {
    const notAnError = !(error instanceof Error);

    /**
     * Case when error is 'reason' of PromiseRejectionEvent
     * and reject() provided with text reason instead of Error()
     */
    if (notAnError) {
      return null;
    }

    try {
      return await this.stackParser.parse(error as Error);
    } catch (e) {
      log('Can not parse stack:', 'warn', e);

      return null;
    }
  }

  /**
   * Return some details
   */
  private getAddons(): object {
    const {innerWidth, innerHeight} = window;
    const userAgent = window.navigator.userAgent;
    const location = window.location.href;

    return {
      window: {
        innerWidth,
        innerHeight,
      },
      userAgent,
      url: location,
    };
  }

  /**
   * Extend addons object with addons spoiled by integreation
   * This method mutates original event
   *
   * @param errorFormatted - Hawk event prepared for sending
   * @param integrationAddons - extra addons
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private appendIntegrationAddons(errorFormatted: HawkEvent, integrationAddons: { [key: string]: any }): void {
    Object.assign(errorFormatted.payload.addons, integrationAddons);
  }
}
