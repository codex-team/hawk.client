/*!
 * Hawk JS Catcher.js
 * 
 * @version 2.2.0
 * 
 * @licence Apache-2.0
 * @author CodeX <https://codex.so>
 * 
 * @see https://hawk.so
 * @see https://github.com/codex-team/hawk.javascript
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.HawkCatcher=e():t.HawkCatcher=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){var r,o,i;!function(a,u){"use strict";o=[n(2)],void 0===(i="function"==typeof(r=function(t){var e=/(^|@)\S+\:\d+/,n=/^\s*at .*(\S+\:\d+|\(native\))/m,r=/^(eval@)?(\[native code\])?$/;return{parse:function(t){if(void 0!==t.stacktrace||void 0!==t["opera#sourceloc"])return this.parseOpera(t);if(t.stack&&t.stack.match(n))return this.parseV8OrIE(t);if(t.stack)return this.parseFFOrSafari(t);throw new Error("Cannot parse given Error object")},extractLocation:function(t){if(-1===t.indexOf(":"))return[t];var e=/(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(t.replace(/[\(\)]/g,""));return[e[1],e[2]||void 0,e[3]||void 0]},parseV8OrIE:function(e){var r=e.stack.split("\n").filter(function(t){return!!t.match(n)},this);return r.map(function(e){e.indexOf("(eval ")>-1&&(e=e.replace(/eval code/g,"eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g,""));var n=e.replace(/^\s+/,"").replace(/\(eval code/g,"("),r=n.match(/ (\((.+):(\d+):(\d+)\)$)/),o=(n=r?n.replace(r[0],""):n).split(/\s+/).slice(1),i=this.extractLocation(r?r[1]:o.pop()),a=o.join(" ")||void 0,u=["eval","<anonymous>"].indexOf(i[0])>-1?void 0:i[0];return new t({functionName:a,fileName:u,lineNumber:i[1],columnNumber:i[2],source:e})},this)},parseFFOrSafari:function(e){var n=e.stack.split("\n").filter(function(t){return!t.match(r)},this);return n.map(function(e){if(e.indexOf(" > eval")>-1&&(e=e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g,":$1")),-1===e.indexOf("@")&&-1===e.indexOf(":"))return new t({functionName:e});var n=/((.*".+"[^@]*)?[^@]*)(?:@)/,r=e.match(n),o=r&&r[1]?r[1]:void 0,i=this.extractLocation(e.replace(n,""));return new t({functionName:o,fileName:i[0],lineNumber:i[1],columnNumber:i[2],source:e})},this)},parseOpera:function(t){return!t.stacktrace||t.message.indexOf("\n")>-1&&t.message.split("\n").length>t.stacktrace.split("\n").length?this.parseOpera9(t):t.stack?this.parseOpera11(t):this.parseOpera10(t)},parseOpera9:function(e){for(var n=/Line (\d+).*script (?:in )?(\S+)/i,r=e.message.split("\n"),o=[],i=2,a=r.length;i<a;i+=2){var u=n.exec(r[i]);u&&o.push(new t({fileName:u[2],lineNumber:u[1],source:r[i]}))}return o},parseOpera10:function(e){for(var n=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,r=e.stacktrace.split("\n"),o=[],i=0,a=r.length;i<a;i+=2){var u=n.exec(r[i]);u&&o.push(new t({functionName:u[3]||void 0,fileName:u[2],lineNumber:u[1],source:r[i]}))}return o},parseOpera11:function(n){var r=n.stack.split("\n").filter(function(t){return!!t.match(e)&&!t.match(/^Error created at/)},this);return r.map(function(e){var n,r=e.split("@"),o=this.extractLocation(r.pop()),i=r.shift()||"",a=i.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^\)]*\)/g,"")||void 0;i.match(/\(([^\)]*)\)/)&&(n=i.replace(/^[^\(]+\(([^\)]*)\)$/,"$1"));var u=void 0===n||"[arguments not available]"===n?void 0:n.split(",");return new t({functionName:a,args:u,fileName:o[0],lineNumber:o[1],columnNumber:o[2],source:e})},this)}}})?r.apply(e,o):r)||(t.exports=i)}()},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=E(a,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=s(t,e,n);if("normal"===c.type){if(r=n.done?h:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l="suspendedStart",f="suspendedYield",p="executing",h="completed",v={};function d(){}function m(){}function y(){}var g={};g[i]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(C([])));w&&w!==n&&r.call(w,i)&&(g=w);var k=y.prototype=d.prototype=Object.create(g);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){var e;this._invoke=function(n,o){function i(){return new Promise(function(e,i){!function e(n,o,i,a){var u=s(t[n],t,o);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(u.arg)}(n,o,e,i)})}return e=e?e.then(i,i):i()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function C(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:L}}function L(){return{value:e,done:!0}}return m.prototype=k.constructor=y,y.constructor=m,y[u]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},x(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(e,n,r,o){var i=new O(c(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},x(k),k[u]="Generator",k[i]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){var r,o,i;!function(n,a){"use strict";o=[],void 0===(i="function"==typeof(r=function(){function t(t){return!isNaN(parseFloat(t))&&isFinite(t)}function e(t){return t.charAt(0).toUpperCase()+t.substring(1)}function n(t){return function(){return this[t]}}var r=["isConstructor","isEval","isNative","isToplevel"],o=["columnNumber","lineNumber"],i=["fileName","functionName","source"],a=r.concat(o,i,["args"]);function u(t){if(t instanceof Object)for(var n=0;n<a.length;n++)t.hasOwnProperty(a[n])&&void 0!==t[a[n]]&&this["set"+e(a[n])](t[a[n]])}u.prototype={getArgs:function(){return this.args},setArgs:function(t){if("[object Array]"!==Object.prototype.toString.call(t))throw new TypeError("Args must be an Array");this.args=t},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(t){if(t instanceof u)this.evalOrigin=t;else{if(!(t instanceof Object))throw new TypeError("Eval Origin must be an Object or StackFrame");this.evalOrigin=new u(t)}},toString:function(){var e=this.getFunctionName()||"{anonymous}",n="("+(this.getArgs()||[]).join(",")+")",r=this.getFileName()?"@"+this.getFileName():"",o=t(this.getLineNumber())?":"+this.getLineNumber():"",i=t(this.getColumnNumber())?":"+this.getColumnNumber():"";return e+n+r+o+i}};for(var c=0;c<r.length;c++)u.prototype["get"+e(r[c])]=n(r[c]),u.prototype["set"+e(r[c])]=function(t){return function(e){this[t]=Boolean(e)}}(r[c]);for(var s=0;s<o.length;s++)u.prototype["get"+e(o[s])]=n(o[s]),u.prototype["set"+e(o[s])]=function(e){return function(n){if(!t(n))throw new TypeError(e+" must be a Number");this[e]=Number(n)}}(o[s]);for(var l=0;l<i.length;l++)u.prototype["get"+e(i[l])]=n(i[l]),u.prototype["set"+e(i[l])]=function(t){return function(e){this[t]=String(e)}}(i[l]);return u})?r.apply(e,o):r)||(t.exports=i)}()},function(t,e,n){"use strict";n.r(e);n(1);function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log",n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"color: inherit";if("console"in window&&window.console[e]){var o="Hawk JavaScript.js ".concat("2.2.0"),i="line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";try{["time","timeEnd"].includes(e)?console[e]("( ".concat(o," ) ").concat(t)):n?console[e]("%c".concat(o,"%c ").concat(t," %o"),i,r,n):console[e]("%c".concat(o,"%c ").concat(t),i,r)}catch(t){}}}function o(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function u(t){o(a,r,i,u,c,"next",t)}function c(t){o(a,r,i,u,c,"throw",t)}u(void 0)})}}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(e){var n=this,o=e.collectorEndpoint,i=e.onMessage,a=void 0===i?function(t){}:i,u=e.onClose,c=void 0===u?function(){}:u,s=e.onOpen,l=void 0===s?function(){}:s,f=e.reconnectionAttempts,p=void 0===f?5:f,h=e.reconnectionTimeout,v=void 0===h?1e4:h;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.url=o,this.onMessage=a,this.onClose=c,this.onOpen=l,this.reconnectionTimeout=v,this.reconnectionAttempts=p,this.eventsQueue=[],this.ws=null,this.init().then(function(){n.sendQueue()}).catch(function(t){r("WebSocket error","error",t)})}var e,n,o,u,c;return e=t,(n=[{key:"send",value:(c=i(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==this.ws){t.next=3;break}return this.eventsQueue.push(e),t.abrupt("return",this.init());case 3:t.t0=this.ws.readyState,t.next=t.t0===WebSocket.OPEN?6:t.t0===WebSocket.CLOSED?7:t.t0===WebSocket.CONNECTING?9:t.t0===WebSocket.CLOSING?9:11;break;case 6:return t.abrupt("return",this.ws.send(JSON.stringify(e)));case 7:return this.eventsQueue.push(e),t.abrupt("return",this.reconnect());case 9:return this.eventsQueue.push(e),t.abrupt("return");case 11:case"end":return t.stop()}},t,this)})),function(t){return c.apply(this,arguments)})},{key:"init",value:function(){var t=this;return new Promise(function(e,n){t.ws=new WebSocket(t.url),"function"==typeof t.onMessage&&(t.ws.onmessage=t.onMessage),t.ws.onclose=function(e){"function"==typeof t.onClose&&t.onClose(e)},t.ws.onerror=function(t){n(t)},t.ws.onopen=function(n){"function"==typeof t.onOpen&&t.onOpen(n),e()}})}},{key:"reconnect",value:(u=i(regeneratorRuntime.mark(function t(){var e,n=this,o=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=o.length>0&&void 0!==o[0]&&o[0],!this.reconnectionTimer||e){t.next=3;break}return t.abrupt("return");case 3:return this.reconnectionTimer=null,t.prev=4,t.next=7,this.init();case 7:r("Successfully reconnected.","info"),t.next=16;break;case 10:if(t.prev=10,t.t0=t.catch(4),this.reconnectionAttempts--,0!==this.reconnectionAttempts){t.next=15;break}return t.abrupt("return");case 15:this.reconnectionTimer=setTimeout(function(){n.reconnect(!0)},this.reconnectionTimeout);case 16:case"end":return t.stop()}},t,this,[[4,10]])})),function(){return u.apply(this,arguments)})},{key:"sendQueue",value:function(){for(;this.eventsQueue.length;)this.send(this.eventsQueue.shift()).catch(function(t){r("WebSocket sending error","error",t)})}}])&&a(e.prototype,n),o&&a(e,o),t}();function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,r=[{key:"sanitizeObject",value:function(e){for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];t.isElement(r)?e[n]=t.formatElement(r):t.isClassPrototype(r)?e[n]=t.formatClassPrototype(r):t.isClassInstance(r)?e[n]=t.formatClassInstance(r):t.isObject(r)?t.isBigObject(r)?e[n]=t.formatBigObject(r):e[n]=t.sanitizeObject(r):t.isString(r)&&(e[n]=t.trimString(r))}return e}},{key:"isObject",value:function(t){return"object"===c(t)}},{key:"isClassPrototype",value:function(t){if(!t||!t.constructor)return!1;var e=t.constructor.toString();return e.includes("[native code]")&&e.includes("Function")}},{key:"isClassInstance",value:function(t){return t&&t.constructor&&/^class \S+ {/.test(t.constructor.toString())}},{key:"isString",value:function(t){return"string"==typeof t}},{key:"isElement",value:function(t){return t instanceof Element}},{key:"isBigObject",value:function(t){return JSON.stringify(t).length>this.maxObjectLen}},{key:"getClassNameByPrototype",value:function(t){return t.name}},{key:"getClassNameByInstance",value:function(e){return t.getClassNameByPrototype(e.constructor)}},{key:"trimString",value:function(e){return e.length>t.maxStringLen?e.substr(0,t.maxStringLen)+"…":e}},{key:"formatElement",value:function(t){return t.innerHTML?t.outerHTML.replace(t.innerHTML,"…"):t.outerHTML}},{key:"formatClassPrototype",value:function(e){var n=t.getClassNameByPrototype(e);return"<instance of ".concat(n,">")}},{key:"formatClassInstance",value:function(e){var n=t.getClassNameByInstance(e);return"<class ".concat(n,">")}},{key:"formatBigObject",value:function(t){return"<big object>"}}],(n=null)&&s(e.prototype,n),r&&s(e,r),t}();l.maxStringLen=200,l.maxObjectLen=500;var f=n(0),p=n.n(f);function h(t,e){var n=new AbortController,o=n.signal,i=fetch(t,{signal:o}),a=setTimeout(function(){n.abort(),r("Request is too long, aborting...","log",t)},e);return i.then(function(t){return clearTimeout(a),t})}function v(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function d(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t){v(i,r,o,a,u,"next",t)}function u(t){v(i,r,o,a,u,"throw",t)}a(void 0)})}}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var y=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.sourceFilesCache={}}var e,n,o,i,a,u;return e=t,(n=[{key:"parse",value:(u=d(regeneratorRuntime.mark(function t(e){var n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.a.parse(e),t.abrupt("return",Promise.all(n.map(function(){var t=d(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e.fileName,t.t1=e.lineNumber,t.t2=e.columnNumber,t.next=5,r.extractSourceCode(e);case 5:return t.t3=t.sent,t.t4=e.functionName,t.t5=e.args,t.abrupt("return",{file:t.t0,line:t.t1,column:t.t2,sourceCode:t.t3,function:t.t4,arguments:t.t5});case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())));case 2:case"end":return t.stop()}},t)})),function(t){return u.apply(this,arguments)})},{key:"extractSourceCode",value:(a=d(regeneratorRuntime.mark(function t(e){var n,r,o,i,a,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,this.isValidUrl(e.fileName)){t.next=3;break}return t.abrupt("return",null);case 3:if(!(e.columnNumber>200)){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,this.loadSourceFile(e.fileName);case 7:if(n=t.sent){t.next=10;break}return t.abrupt("return",null);case 10:return r=n.split("\n"),o=e.lineNumber-1,5,i=Math.max(0,o-5),a=Math.min(r.length-1,o+5+1),u=r.slice(i,a),t.abrupt("return",u.map(function(t,e){return{line:i+e+1,content:t}}));case 19:return t.prev=19,t.t0=t.catch(0),t.abrupt("return",null);case 22:case"end":return t.stop()}},t,this,[[0,19]])})),function(t){return a.apply(this,arguments)})},{key:"isValidUrl",value:function(t){try{return!!new URL(t)}catch(t){return!1}}},{key:"loadSourceFile",value:(i=d(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.sourceFilesCache[e]){t.next=2;break}return t.abrupt("return",this.sourceFilesCache[e]);case 2:return t.prev=2,this.sourceFilesCache[e]=h(e,2e3).then(function(t){return t.text()}),Object.keys(this.sourceFilesCache).length>10&&(n=this.sourceFilesCache[e],this.sourceFilesCache={},this.sourceFilesCache[e]=n),t.next=7,this.sourceFilesCache[e];case 7:return t.abrupt("return",t.sent);case 10:return t.prev=10,t.t0=t.catch(2),r("Can not load source file. Skipping..."),t.abrupt("return",null);case 14:case"end":return t.stop()}},t,this,[[2,10]])})),function(t){return i.apply(this,arguments)})}])&&m(e.prototype,n),o&&m(e,o),t}();function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var w=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.vue=e,this.existedHandler=e.config.errorHandler,this.callback=n,this.setupHandler()}var e,n,r;return e=t,(n=[{key:"setupHandler",value:function(){var t=this;this.vue.config.errorHandler=function(e,n,r){"function"==typeof t.existedHandler&&t.existedHandler.call(t.vue,e,n,r);var o=t.spoilAddons(n,r);t.callback(e,o),t.printError(e,r,o.component)}}},{key:"spoilAddons",value:function(t,e){var n={lifecycle:e,component:null};return t.$root===t?n.component=t.$el.outerHTML.replace(/>.*/,">")+" (root)":n.component="<"+(t._isVue?t.$options.name||t.$options._componentTag:t.name)+">",t.$options&&t.$options.propsData&&(n.props=t.$options.propsData),t._data&&(n.data={},Object.entries(t._data).forEach(function(t){var e=g(t,2),r=e[0],o=e[1];n.data[r]=o})),t._computedWatchers&&(n.computed={},Object.entries(t._computedWatchers).forEach(function(t){var e=g(t,2),r=e[0],o=e[1];n.computed[r]=o.value})),n}},{key:"printError",value:function(t,e,n){console.error("".concat(n," @ ").concat(e),t)}}])&&b(e.prototype,n),r&&b(e,r),t}();function k(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function x(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function O(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t){x(i,r,o,a,u,"next",t)}function u(t){x(i,r,o,a,u,"throw",t)}a(void 0)})}}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var S=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.version="2.2.0",this.type="errors/javascript",this.stackParser=new y,"string"==typeof e&&(e={token:e}),this.token=e.token,this.release=e.release,this.user=e.user,this.token?(this.transport=new u({collectorEndpoint:e.collectorEndpoint||"wss://k1.hawk.so:443/ws",reconnectionAttempts:e.reconnectionAttempts,reconnectionTimeout:e.reconnectionTimeout,onClose:function(){r("Connection lost. Connection will be restored when new errors occurred","info")}}),this.initGlobalHandlers(),e.vue&&this.connectVue(e.vue)):r("Integration Token is missed. You can get it on https://hawk.so at Project Settings.","warn")}var e,n,o,i,a,c,s,f;return e=t,(n=[{key:"test",value:function(){var t=new Error("Hawk JavaScript Catcher test message.");this.catchError(t)}},{key:"catchError",value:(f=O(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.formatAndSend(e);case 1:case"end":return t.stop()}},t,this)})),function(t){return f.apply(this,arguments)})},{key:"connectVue",value:function(t){var e=this;new w(t,function(t,n){n=e.sanitize(n),e.formatAndSend(t,{vue:n})})}},{key:"initGlobalHandlers",value:function(){var t=this;window.addEventListener("error",function(e){return t.handleEvent(e)}),window.addEventListener("unhandledrejection",function(e){return t.handleEvent(e)})}},{key:"handleEvent",value:(s=O(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e.error||e.reason,e instanceof ErrorEvent&&void 0===n&&(n=e.message),this.formatAndSend(n);case 3:case"end":return t.stop()}},t,this)})),function(t){return s.apply(this,arguments)})},{key:"formatAndSend",value:(c=O(regeneratorRuntime.mark(function t(e,n){var o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.prepareErrorFormatted(e);case 3:o=t.sent,n&&this.appendIntegrationAddons(o,n),this.sendErrorFormatted(o),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),r("Internal error ლ(´ڡ`ლ)","error",t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])})),function(t,e){return c.apply(this,arguments)})},{key:"sendErrorFormatted",value:function(t){this.transport.send(t).catch(function(t){r("WebSocket sending error","error",t)})}},{key:"prepareErrorFormatted",value:(a=O(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this.token,t.t1=this.type,t.t2=this.getTitle(e),t.t3=this.getType(e),t.t4=this.getRelease(),t.t5=this.getContext(),t.t6=this.getUser(),t.t7=this.getGetParams(),t.t8=this.getAddons(),t.next=11,this.getBacktrace(e);case 11:return t.t9=t.sent,t.t10={title:t.t2,type:t.t3,release:t.t4,context:t.t5,user:t.t6,get:t.t7,addons:t.t8,backtrace:t.t9},t.abrupt("return",{token:t.t0,catcherType:t.t1,payload:t.t10});case 14:case"end":return t.stop()}},t,this)})),function(t){return a.apply(this,arguments)})},{key:"getTitle",value:function(t){return!(t instanceof Error)?t.toString():t.message}},{key:"getType",value:function(t){return!(t instanceof Error)?null:t.name}},{key:"getRelease",value:function(){return this.release||null}},{key:"getContext",value:function(){return this.sanitize({})}},{key:"getUser",value:function(){return this.user||null}},{key:"getGetParams",value:function(){var t=window.location.search.substr(1);return t?t.split("&").reduce(function(t,e){var n=k(e.split("="),2),r=n[0],o=n[1];return t[r]=o,t},{}):null}},{key:"getBacktrace",value:(i=O(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!!(e instanceof Error)){t.next=3;break}return t.abrupt("return",null);case 3:return t.prev=3,t.next=6,this.stackParser.parse(e);case 6:return t.abrupt("return",t.sent);case 9:return t.prev=9,t.t0=t.catch(3),r("Can not parse stack:","warn",t.t0),t.abrupt("return",null);case 13:case"end":return t.stop()}},t,this,[[3,9]])})),function(t){return i.apply(this,arguments)})},{key:"getAddons",value:function(){var t=window;return{window:{innerWidth:t.innerWidth,innerHeight:t.innerHeight},userAgent:window.navigator.userAgent,url:window.location.href}}},{key:"appendIntegrationAddons",value:function(t,e){Object.assign(t.payload.addons,e)}},{key:"sanitize",value:function(t){return l.sanitizeObject(t)}}])&&E(e.prototype,n),o&&E(e,o),t}();e.default=S}]).default});