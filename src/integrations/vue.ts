/**
 * Errors fired inside Vue components are not dispatched by global handlers.
 * This integration allow us to set up own error handler
 */
export class VueIntegration {
  /**
   * Vue application to handle errors in it
   */
  private readonly vue;

  /**
   * User can set up own vue error handler,
   * we should save and call it at the end
   */
  private readonly existedHandler: () => {};

  /**
   * Callback that should be triggered with catched error.
   * This callback is used by parent class to format and send an event.
   */
  private callback: (error: Error, addons: {[key: string]: any}) => {};

  /**
   * Set up a new vue app
   * @param vue - Vue app to handle
   * @param callback - callback that accepts new error
   */
  constructor(vue, callback) {
    this.vue = vue;
    this.existedHandler = vue.config.errorHandler;
    this.callback = callback;

    this.setupHandler();
  }

  private setupHandler() {
    this.vue.config.errorHandler =
      /**
       * Vue app error handler
       * @see https://vuejs.org/v2/api/#errorHandler
       * @param err - error thrown
       * @param vm - vue VM
       * @param info - a Vue-specific error info, e.g. which lifecycle hook the error was found in.
       */
      (err: Error, vm: { [key: string]: any }, info: string) => {
        console.log('err', err);
        console.log('vm', vm);
        console.log('info', info);

        if (typeof this.existedHandler === 'function') {
          this.existedHandler.call(this.vue, err, vm, info);
        }

        const addons: VueIntegrationAddons = this.spoilAddons(vm, info);

        this.callback(err, addons);

        this.printError(err, info, addons.component);
    };
  }

  /**
   * Extract additional useful information from the Vue app
   * @param vm - vue VM
   * @param info - a Vue-specific error info, e.g. which lifecycle hook the error was found in.
   */
  private spoilAddons(vm: {[key: string]: any}, info: string): VueIntegrationAddons {
    const addons: VueIntegrationAddons = {
      lifecycle: info,
      component: '',
    };

    /**
     * Get component name
     */
    if (vm.$root === vm) {
      addons.component = 'root instance';
    } else {
      /**
       * @todo check
       */
      addons.component = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;
    }

    return addons;
  }

  /**
   * Write error to the console
   * @param err - error to print
   * @param info - a Vue-specific error info, e.g. which lifecycle hook the error was found in.
   * @param component - where error was occurred
   */
  private printError(err: Error, info: string, component: string): void {
    console.error(`[${component}][${info}]`, err);
  }

}

export interface VueIntegrationAddons {
  /**
   * A Vue-specific error info, e.g. which lifecycle hook the error was found in.
   */
  lifecycle: string;

  /**
   * Component name where error occurred
   */
  component: string;
}
