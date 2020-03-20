/*!
 * Hawk JS Catcher.js
 * 
 * @version 2.1.0
 * 
 * @licence Apache-2.0
 * @author CodeX <https://codex.so>
 * 
 * @see https://hawk.so
 * @see https://github.com/codex-team/hawk.javascript
 */
var HawkCatcher=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){var n,o,i;!function(a,u){"use strict";o=[r(2)],void 0===(i="function"==typeof(n=function(e){var t=/(^|@)\S+\:\d+/,r=/^\s*at .*(\S+\:\d+|\(native\))/m,n=/^(eval@)?(\[native code\])?$/;return{parse:function(e){if(void 0!==e.stacktrace||void 0!==e["opera#sourceloc"])return this.parseOpera(e);if(e.stack&&e.stack.match(r))return this.parseV8OrIE(e);if(e.stack)return this.parseFFOrSafari(e);throw new Error("Cannot parse given Error object")},extractLocation:function(e){if(-1===e.indexOf(":"))return[e];var t=/(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g,""));return[t[1],t[2]||void 0,t[3]||void 0]},parseV8OrIE:function(t){var n=t.stack.split("\n").filter(function(e){return!!e.match(r)},this);return n.map(function(t){t.indexOf("(eval ")>-1&&(t=t.replace(/eval code/g,"eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g,""));var r=t.replace(/^\s+/,"").replace(/\(eval code/g,"("),n=r.match(/ (\((.+):(\d+):(\d+)\)$)/),o=(r=n?r.replace(n[0],""):r).split(/\s+/).slice(1),i=this.extractLocation(n?n[1]:o.pop()),a=o.join(" ")||void 0,u=["eval","<anonymous>"].indexOf(i[0])>-1?void 0:i[0];return new e({functionName:a,fileName:u,lineNumber:i[1],columnNumber:i[2],source:t})},this)},parseFFOrSafari:function(t){var r=t.stack.split("\n").filter(function(e){return!e.match(n)},this);return r.map(function(t){if(t.indexOf(" > eval")>-1&&(t=t.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g,":$1")),-1===t.indexOf("@")&&-1===t.indexOf(":"))return new e({functionName:t});var r=/((.*".+"[^@]*)?[^@]*)(?:@)/,n=t.match(r),o=n&&n[1]?n[1]:void 0,i=this.extractLocation(t.replace(r,""));return new e({functionName:o,fileName:i[0],lineNumber:i[1],columnNumber:i[2],source:t})},this)},parseOpera:function(e){return!e.stacktrace||e.message.indexOf("\n")>-1&&e.message.split("\n").length>e.stacktrace.split("\n").length?this.parseOpera9(e):e.stack?this.parseOpera11(e):this.parseOpera10(e)},parseOpera9:function(t){for(var r=/Line (\d+).*script (?:in )?(\S+)/i,n=t.message.split("\n"),o=[],i=2,a=n.length;i<a;i+=2){var u=r.exec(n[i]);u&&o.push(new e({fileName:u[2],lineNumber:u[1],source:n[i]}))}return o},parseOpera10:function(t){for(var r=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,n=t.stacktrace.split("\n"),o=[],i=0,a=n.length;i<a;i+=2){var u=r.exec(n[i]);u&&o.push(new e({functionName:u[3]||void 0,fileName:u[2],lineNumber:u[1],source:n[i]}))}return o},parseOpera11:function(r){var n=r.stack.split("\n").filter(function(e){return!!e.match(t)&&!e.match(/^Error created at/)},this);return n.map(function(t){var r,n=t.split("@"),o=this.extractLocation(n.pop()),i=n.shift()||"",a=i.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^\)]*\)/g,"")||void 0;i.match(/\(([^\)]*)\)/)&&(r=i.replace(/^[^\(]+\(([^\)]*)\)$/,"$1"));var u=void 0===r||"[arguments not available]"===r?void 0:r.split(",");return new e({functionName:a,args:u,fileName:o[0],lineNumber:o[1],columnNumber:o[2],source:t})},this)}}})?n.apply(t,o):n)||(e.exports=i)}()},function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(e,t,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=O(a,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=s(e,t,r);if("normal"===c.type){if(n=r.done?p:f,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(e,r,a),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function d(){}function m(){}function g(){}var y={};y[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(C([])));b&&b!==r&&n.call(b,i)&&(y=b);var k=g.prototype=d.prototype=Object.create(y);function x(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function E(e){var t;this._invoke=function(r,o){function i(){return new Promise(function(t,i){!function t(r,o,i,a){var u=s(e[r],e,o);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then(function(e){t("next",e,i,a)},function(e){t("throw",e,i,a)}):Promise.resolve(l).then(function(e){c.value=e,i(c)},function(e){return t("throw",e,i,a)})}a(u.arg)}(r,o,t,i)})}return t=t?t.then(i,i):i()}}function O(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function C(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:j}}function j(){return{value:t,done:!0}}return m.prototype=k.constructor=g,g.constructor=m,g[u]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},x(E.prototype),E.prototype[a]=function(){return this},e.AsyncIterator=E,e.async=function(t,r,n,o){var i=new E(c(t,r,n,o));return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},x(k),k[u]="Generator",k[i]=function(){return this},k.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=C,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},function(e,t,r){var n,o,i;!function(r,a){"use strict";o=[],void 0===(i="function"==typeof(n=function(){function e(e){return!isNaN(parseFloat(e))&&isFinite(e)}function t(e){return e.charAt(0).toUpperCase()+e.substring(1)}function r(e){return function(){return this[e]}}var n=["isConstructor","isEval","isNative","isToplevel"],o=["columnNumber","lineNumber"],i=["fileName","functionName","source"],a=n.concat(o,i,["args"]);function u(e){if(e instanceof Object)for(var r=0;r<a.length;r++)e.hasOwnProperty(a[r])&&void 0!==e[a[r]]&&this["set"+t(a[r])](e[a[r]])}u.prototype={getArgs:function(){return this.args},setArgs:function(e){if("[object Array]"!==Object.prototype.toString.call(e))throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof u)this.evalOrigin=e;else{if(!(e instanceof Object))throw new TypeError("Eval Origin must be an Object or StackFrame");this.evalOrigin=new u(e)}},toString:function(){var t=this.getFunctionName()||"{anonymous}",r="("+(this.getArgs()||[]).join(",")+")",n=this.getFileName()?"@"+this.getFileName():"",o=e(this.getLineNumber())?":"+this.getLineNumber():"",i=e(this.getColumnNumber())?":"+this.getColumnNumber():"";return t+r+n+o+i}};for(var c=0;c<n.length;c++)u.prototype["get"+t(n[c])]=r(n[c]),u.prototype["set"+t(n[c])]=function(e){return function(t){this[e]=Boolean(t)}}(n[c]);for(var s=0;s<o.length;s++)u.prototype["get"+t(o[s])]=r(o[s]),u.prototype["set"+t(o[s])]=function(t){return function(r){if(!e(r))throw new TypeError(t+" must be a Number");this[t]=Number(r)}}(o[s]);for(var l=0;l<i.length;l++)u.prototype["get"+t(i[l])]=r(i[l]),u.prototype["set"+t(i[l])]=function(e){return function(t){this[e]=String(t)}}(i[l]);return u})?n.apply(t,o):n)||(e.exports=i)}()},function(e,t,r){"use strict";r.r(t);r(1);function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log",r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"color: inherit";if("console"in window&&window.console[t]){var o="Hawk JavaScript.js ".concat("2.1.0"),i="line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";try{["time","timeEnd"].includes(t)?console[t]("( ".concat(o," ) ").concat(e)):r?console[t]("%c".concat(o,"%c ").concat(e," %o"),i,n,r):console[t]("%c".concat(o,"%c ").concat(e),i,n)}catch(e){}}}function o(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function i(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function u(e){o(a,n,i,u,c,"next",e)}function c(e){o(a,n,i,u,c,"throw",e)}u(void 0)})}}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(){function e(t){var r=this,o=t.collectorEndpoint,i=t.onMessage,a=void 0===i?function(e){}:i,u=t.onClose,c=void 0===u?function(){}:u,s=t.onOpen,l=void 0===s?function(){}:s,f=t.reconnectionAttempts,h=void 0===f?5:f,p=t.reconnectionTimeout,v=void 0===p?1e4:p;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=o,this.onMessage=a,this.onClose=c,this.onOpen=l,this.reconnectionTimeout=v,this.reconnectionAttempts=h,this.eventsQueue=[],this.ws=null,this.init().then(function(){r.sendQueue()}).catch(function(e){n("WebSocket error","error",e)})}var t,r,o,u,c;return t=e,(r=[{key:"send",value:(c=i(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==this.ws){e.next=3;break}return this.eventsQueue.push(t),e.abrupt("return",this.init());case 3:e.t0=this.ws.readyState,e.next=e.t0===WebSocket.OPEN?6:e.t0===WebSocket.CLOSED?7:e.t0===WebSocket.CONNECTING?9:e.t0===WebSocket.CLOSING?9:11;break;case 6:return e.abrupt("return",this.ws.send(JSON.stringify(t)));case 7:return this.eventsQueue.push(t),e.abrupt("return",this.reconnect());case 9:return this.eventsQueue.push(t),e.abrupt("return");case 11:case"end":return e.stop()}},e,this)})),function(e){return c.apply(this,arguments)})},{key:"init",value:function(){var e=this;return new Promise(function(t,r){e.ws=new WebSocket(e.url),"function"==typeof e.onMessage&&(e.ws.onmessage=e.onMessage),e.ws.onclose=function(t){"function"==typeof e.onClose&&e.onClose(t)},e.ws.onerror=function(e){r(e)},e.ws.onopen=function(r){"function"==typeof e.onOpen&&e.onOpen(r),t()}})}},{key:"reconnect",value:(u=i(regeneratorRuntime.mark(function e(){var t,r=this,o=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.length>0&&void 0!==o[0]&&o[0],!this.reconnectionTimer||t){e.next=3;break}return e.abrupt("return");case 3:return this.reconnectionTimer=null,e.prev=4,e.next=7,this.init();case 7:n("Successfully reconnected.","info"),e.next=16;break;case 10:if(e.prev=10,e.t0=e.catch(4),this.reconnectionAttempts--,0!==this.reconnectionAttempts){e.next=15;break}return e.abrupt("return");case 15:this.reconnectionTimer=setTimeout(function(){r.reconnect(!0)},this.reconnectionTimeout);case 16:case"end":return e.stop()}},e,this,[[4,10]])})),function(){return u.apply(this,arguments)})},{key:"sendQueue",value:function(){for(;this.eventsQueue.length;)this.send(this.eventsQueue.shift()).catch(function(e){n("WebSocket sending error","error",e)})}}])&&a(t.prototype,r),o&&a(t,o),e}(),c=r(0),s=r.n(c);function l(e,t){var r=new AbortController,o=r.signal,i=fetch(e,{signal:o}),a=setTimeout(function(){r.abort(),n("Request is too long, aborting...","log",e)},t);return i.then(function(e){return clearTimeout(a),e})}function f(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function h(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var i=e.apply(t,r);function a(e){f(i,n,o,a,u,"next",e)}function u(e){f(i,n,o,a,u,"throw",e)}a(void 0)})}}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var v=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sourceFilesCache={}}var t,r,o,i,a,u;return t=e,(r=[{key:"parse",value:(u=h(regeneratorRuntime.mark(function e(t){var r,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.a.parse(t),e.abrupt("return",Promise.all(r.map(function(){var e=h(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.fileName,e.t1=t.lineNumber,e.t2=t.columnNumber,e.next=5,n.extractSourceCode(t);case 5:return e.t3=e.sent,e.t4=t.functionName,e.t5=t.args,e.abrupt("return",{file:e.t0,line:e.t1,column:e.t2,sourceCode:e.t3,function:e.t4,arguments:e.t5});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())));case 2:case"end":return e.stop()}},e)})),function(e){return u.apply(this,arguments)})},{key:"extractSourceCode",value:(a=h(regeneratorRuntime.mark(function e(t){var r,n,o,i,a,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.isValidUrl(t.fileName)){e.next=3;break}return e.abrupt("return",null);case 3:if(!(t.columnNumber>200)){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,this.loadSourceFile(t.fileName);case 7:if(r=e.sent){e.next=10;break}return e.abrupt("return",null);case 10:return n=r.split("\n"),o=t.lineNumber-1,5,i=Math.max(0,o-5),a=Math.min(n.length-1,o+5+1),u=n.slice(i,a),e.abrupt("return",u.map(function(e,t){return{line:i+t+1,content:e}}));case 19:return e.prev=19,e.t0=e.catch(0),e.abrupt("return",null);case 22:case"end":return e.stop()}},e,this,[[0,19]])})),function(e){return a.apply(this,arguments)})},{key:"isValidUrl",value:function(e){try{return!!new URL(e)}catch(e){return!1}}},{key:"loadSourceFile",value:(i=h(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.sourceFilesCache[t]){e.next=2;break}return e.abrupt("return",this.sourceFilesCache[t]);case 2:return e.prev=2,this.sourceFilesCache[t]=l(t,2e3).then(function(e){return e.text()}),Object.keys(this.sourceFilesCache).length>10&&(r=this.sourceFilesCache[t],this.sourceFilesCache={},this.sourceFilesCache[t]=r),e.next=7,this.sourceFilesCache[t];case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(2),n("Can not load source file. Skipping..."),e.abrupt("return",null);case 14:case"end":return e.stop()}},e,this,[[2,10]])})),function(e){return i.apply(this,arguments)})}])&&p(t.prototype,r),o&&p(t,o),e}();function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var g=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.vue=t,this.existedHandler=t.config.errorHandler,this.callback=r,this.setupHandler()}var t,r,n;return t=e,(r=[{key:"setupHandler",value:function(){var e=this;this.vue.config.errorHandler=function(t,r,n){"function"==typeof e.existedHandler&&e.existedHandler.call(e.vue,t,r,n);var o=e.spoilAddons(r,n);e.callback(t,o),e.printError(t,n,o.component)}}},{key:"spoilAddons",value:function(e,t){var r={lifecycle:t,component:null};return e.$root===e?r.component=e.$el.outerHTML.replace(/>.*/,">")+" (root)":r.component="<"+(e._isVue?e.$options.name||e.$options._componentTag:e.name)+">",e.$options&&e.$options.propsData&&(r.props=e.$options.propsData),e._data&&(r.data={},Object.entries(e._data).forEach(function(e){var t=d(e,2),n=t[0],o=t[1];r.data[n]=o})),e._computedWatchers&&(r.computed={},Object.entries(e._computedWatchers).forEach(function(e){var t=d(e,2),n=t[0],o=t[1];r.computed[n]=o.value})),r}},{key:"printError",value:function(e,t,r){console.error("".concat(r," @ ").concat(t),e)}}])&&m(t.prototype,r),n&&m(t,n),e}();function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function w(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function b(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var i=e.apply(t,r);function a(e){w(i,n,o,a,u,"next",e)}function u(e){w(i,n,o,a,u,"throw",e)}a(void 0)})}}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.version="2.1.0",this.type="errors/javascript",this.stackParser=new v,"string"==typeof t&&(t={token:t}),this.token=t.token,this.release=t.release,this.user=t.user,this.token?(this.transport=new u({collectorEndpoint:t.collectorEndpoint||"wss://k1.hawk.so:443/ws",reconnectionAttempts:t.reconnectionAttempts,reconnectionTimeout:t.reconnectionTimeout,onClose:function(){n("Connection lost. Connection will be restored when new errors occurred","info")}}),this.initGlobalHandlers(),t.vue&&this.connectVue(t.vue)):n("Integration Token is missed. You can get it on https://hawk.so at Project Settings.","warn")}var t,r,o,i,a,c,s,l;return t=e,(r=[{key:"test",value:function(){var e=new Error("Hawk JavaScript Catcher test message.");this.catchError(e)}},{key:"catchError",value:(l=b(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.formatAndSend(t);case 1:case"end":return e.stop()}},e,this)})),function(e){return l.apply(this,arguments)})},{key:"connectVue",value:function(e){var t=this;new g(e,function(e,r){t.formatAndSend(e,{vue:r})})}},{key:"initGlobalHandlers",value:function(){var e=this;window.addEventListener("error",function(t){return e.handleEvent(t)}),window.addEventListener("unhandledrejection",function(t){return e.handleEvent(t)})}},{key:"handleEvent",value:(s=b(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t.error||t.reason,t instanceof ErrorEvent&&void 0===r&&(r=t.message),this.formatAndSend(r);case 3:case"end":return e.stop()}},e,this)})),function(e){return s.apply(this,arguments)})},{key:"formatAndSend",value:(c=b(regeneratorRuntime.mark(function e(t,r){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.prepareErrorFormatted(t);case 3:o=e.sent,r&&this.appendIntegrationAddons(o,r),this.sendErrorFormatted(o),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n("Internal error ლ(´ڡ`ლ)","error",e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])})),function(e,t){return c.apply(this,arguments)})},{key:"sendErrorFormatted",value:function(e){this.transport.send(e).catch(function(e){n("WebSocket sending error","error",e)})}},{key:"prepareErrorFormatted",value:(a=b(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this.token,e.t1=this.type,e.t2=this.getTitle(t),e.t3=this.getType(t),e.t4=this.getRelease(),e.t5=this.getContext(),e.t6=this.getUser(),e.t7=this.getGetParams(),e.t8=this.getAddons(),e.next=11,this.getBacktrace(t);case 11:return e.t9=e.sent,e.t10={title:e.t2,type:e.t3,release:e.t4,context:e.t5,user:e.t6,get:e.t7,addons:e.t8,backtrace:e.t9},e.abrupt("return",{token:e.t0,catcherType:e.t1,payload:e.t10});case 14:case"end":return e.stop()}},e,this)})),function(e){return a.apply(this,arguments)})},{key:"getTitle",value:function(e){return!(e instanceof Error)?e.toString():e.message}},{key:"getType",value:function(e){return!(e instanceof Error)?null:e.name}},{key:"getRelease",value:function(){return this.release||null}},{key:"getContext",value:function(){return{}}},{key:"getUser",value:function(){return this.user||null}},{key:"getGetParams",value:function(){var e=window.location.search.substr(1);return e?e.split("&").reduce(function(e,t){var r=y(t.split("="),2),n=r[0],o=r[1];return e[n]=o,e},{}):null}},{key:"getBacktrace",value:(i=b(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!!(t instanceof Error)){e.next=3;break}return e.abrupt("return",null);case 3:return e.prev=3,e.next=6,this.stackParser.parse(t);case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(3),n("Can not parse stack:","warn",e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}},e,this,[[3,9]])})),function(e){return i.apply(this,arguments)})},{key:"getAddons",value:function(){var e=window;return{window:{innerWidth:e.innerWidth,innerHeight:e.innerHeight},userAgent:window.navigator.userAgent}}},{key:"appendIntegrationAddons",value:function(e,t){Object.assign(e.payload.addons,t)}}])&&k(t.prototype,r),o&&k(t,o),e}();t.default=x}]).default;