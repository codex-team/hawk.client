/*!
 * Hawk JS Catcher.js
 * 
 * @version 2.0.0
 * 
 * @licence Apache-2.0
 * @author CodeX <https://codex.so>
 * 
 * @see https://hawk.so
 * @see https://github.com/codex-team/hawk.javascript
 */
var HawkCatcher=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=3)}([function(t,e,r){var n,o,i;!function(a,u){"use strict";o=[r(2)],void 0===(i="function"==typeof(n=function(t){var e=/(^|@)\S+\:\d+/,r=/^\s*at .*(\S+\:\d+|\(native\))/m,n=/^(eval@)?(\[native code\])?$/;return{parse:function(t){if(void 0!==t.stacktrace||void 0!==t["opera#sourceloc"])return this.parseOpera(t);if(t.stack&&t.stack.match(r))return this.parseV8OrIE(t);if(t.stack)return this.parseFFOrSafari(t);throw new Error("Cannot parse given Error object")},extractLocation:function(t){if(-1===t.indexOf(":"))return[t];var e=/(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(t.replace(/[\(\)]/g,""));return[e[1],e[2]||void 0,e[3]||void 0]},parseV8OrIE:function(e){var n=e.stack.split("\n").filter(function(t){return!!t.match(r)},this);return n.map(function(e){e.indexOf("(eval ")>-1&&(e=e.replace(/eval code/g,"eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g,""));var r=e.replace(/^\s+/,"").replace(/\(eval code/g,"("),n=r.match(/ (\((.+):(\d+):(\d+)\)$)/),o=(r=n?r.replace(n[0],""):r).split(/\s+/).slice(1),i=this.extractLocation(n?n[1]:o.pop()),a=o.join(" ")||void 0,u=["eval","<anonymous>"].indexOf(i[0])>-1?void 0:i[0];return new t({functionName:a,fileName:u,lineNumber:i[1],columnNumber:i[2],source:e})},this)},parseFFOrSafari:function(e){var r=e.stack.split("\n").filter(function(t){return!t.match(n)},this);return r.map(function(e){if(e.indexOf(" > eval")>-1&&(e=e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g,":$1")),-1===e.indexOf("@")&&-1===e.indexOf(":"))return new t({functionName:e});var r=/((.*".+"[^@]*)?[^@]*)(?:@)/,n=e.match(r),o=n&&n[1]?n[1]:void 0,i=this.extractLocation(e.replace(r,""));return new t({functionName:o,fileName:i[0],lineNumber:i[1],columnNumber:i[2],source:e})},this)},parseOpera:function(t){return!t.stacktrace||t.message.indexOf("\n")>-1&&t.message.split("\n").length>t.stacktrace.split("\n").length?this.parseOpera9(t):t.stack?this.parseOpera11(t):this.parseOpera10(t)},parseOpera9:function(e){for(var r=/Line (\d+).*script (?:in )?(\S+)/i,n=e.message.split("\n"),o=[],i=2,a=n.length;i<a;i+=2){var u=r.exec(n[i]);u&&o.push(new t({fileName:u[2],lineNumber:u[1],source:n[i]}))}return o},parseOpera10:function(e){for(var r=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,n=e.stacktrace.split("\n"),o=[],i=0,a=n.length;i<a;i+=2){var u=r.exec(n[i]);u&&o.push(new t({functionName:u[3]||void 0,fileName:u[2],lineNumber:u[1],source:n[i]}))}return o},parseOpera11:function(r){var n=r.stack.split("\n").filter(function(t){return!!t.match(e)&&!t.match(/^Error created at/)},this);return n.map(function(e){var r,n=e.split("@"),o=this.extractLocation(n.pop()),i=n.shift()||"",a=i.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^\)]*\)/g,"")||void 0;i.match(/\(([^\)]*)\)/)&&(r=i.replace(/^[^\(]+\(([^\)]*)\)$/,"$1"));var u=void 0===r||"[arguments not available]"===r?void 0:r.split(",");return new t({functionName:a,args:u,fileName:o[0],lineNumber:o[1],columnNumber:o[2],source:e})},this)}}})?n.apply(e,o):n)||(t.exports=i)}()},function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return F()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=O(a,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=s(t,e,r);if("normal"===c.type){if(n=r.done?p:f,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function m(){}function d(){}function g(){}var y={};y[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(C([])));b&&b!==r&&n.call(b,i)&&(y=b);var k=g.prototype=m.prototype=Object.create(y);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){var e;this._invoke=function(r,o){function i(){return new Promise(function(e,i){!function e(r,o,i,a){var u=s(t[r],t,o);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(u.arg)}(r,o,e,i)})}return e=e?e.then(i,i):i()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function C(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:F}}function F(){return{value:e,done:!0}}return d.prototype=k.constructor=g,g.constructor=d,g[u]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},x(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o){var i=new E(c(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},x(k),k[u]="Generator",k[i]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){var n,o,i;!function(r,a){"use strict";o=[],void 0===(i="function"==typeof(n=function(){function t(t){return!isNaN(parseFloat(t))&&isFinite(t)}function e(t){return t.charAt(0).toUpperCase()+t.substring(1)}function r(t){return function(){return this[t]}}var n=["isConstructor","isEval","isNative","isToplevel"],o=["columnNumber","lineNumber"],i=["fileName","functionName","source"],a=n.concat(o,i,["args"]);function u(t){if(t instanceof Object)for(var r=0;r<a.length;r++)t.hasOwnProperty(a[r])&&void 0!==t[a[r]]&&this["set"+e(a[r])](t[a[r]])}u.prototype={getArgs:function(){return this.args},setArgs:function(t){if("[object Array]"!==Object.prototype.toString.call(t))throw new TypeError("Args must be an Array");this.args=t},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(t){if(t instanceof u)this.evalOrigin=t;else{if(!(t instanceof Object))throw new TypeError("Eval Origin must be an Object or StackFrame");this.evalOrigin=new u(t)}},toString:function(){var e=this.getFunctionName()||"{anonymous}",r="("+(this.getArgs()||[]).join(",")+")",n=this.getFileName()?"@"+this.getFileName():"",o=t(this.getLineNumber())?":"+this.getLineNumber():"",i=t(this.getColumnNumber())?":"+this.getColumnNumber():"";return e+r+n+o+i}};for(var c=0;c<n.length;c++)u.prototype["get"+e(n[c])]=r(n[c]),u.prototype["set"+e(n[c])]=function(t){return function(e){this[t]=Boolean(e)}}(n[c]);for(var s=0;s<o.length;s++)u.prototype["get"+e(o[s])]=r(o[s]),u.prototype["set"+e(o[s])]=function(e){return function(r){if(!t(r))throw new TypeError(e+" must be a Number");this[e]=Number(r)}}(o[s]);for(var l=0;l<i.length;l++)u.prototype["get"+e(i[l])]=r(i[l]),u.prototype["set"+e(i[l])]=function(t){return function(e){this[t]=String(e)}}(i[l]);return u})?n.apply(e,o):n)||(t.exports=i)}()},function(t,e,r){"use strict";r.r(e);r(1);function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log",r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"color: inherit";if("console"in window&&window.console[e]){var o="Hawk JavaScript.js ".concat("2.0.0"),i="line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";try{["time","timeEnd"].includes(e)?console[e]("( ".concat(o," ) ").concat(t)):r?console[e]("%c".concat(o,"%c ").concat(t," %o"),i,n,r):console[e]("%c".concat(o,"%c ").concat(t),i,n)}catch(t){}}}function o(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise(function(n,i){var a=t.apply(e,r);function u(t){o(a,n,i,u,c,"next",t)}function c(t){o(a,n,i,u,c,"throw",t)}u(void 0)})}}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=function(){function t(e){var r=this,o=e.collectorEndpoint,i=e.onMessage,a=void 0===i?function(t){}:i,u=e.onClose,c=void 0===u?function(){}:u,s=e.onOpen,l=void 0===s?function(){}:s,f=e.reconnectionAttempts,h=void 0===f?5:f,p=e.reconnectionTimeout,v=void 0===p?1e4:p;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.url=o,this.onMessage=a,this.onClose=c,this.onOpen=l,this.reconnectionTimeout=v,this.reconnectionAttempts=h,this.eventsQueue=[],this.ws=null,this.init().then(function(){r.sendQueue()}).catch(function(t){n("WebSocket error","error",t)})}var e,r,o,u,c;return e=t,(r=[{key:"send",value:(c=i(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==this.ws){t.next=3;break}return this.eventsQueue.push(e),t.abrupt("return",this.init());case 3:t.t0=this.ws.readyState,t.next=t.t0===WebSocket.OPEN?6:t.t0===WebSocket.CLOSED?7:t.t0===WebSocket.CONNECTING?9:t.t0===WebSocket.CLOSING?9:11;break;case 6:return t.abrupt("return",this.ws.send(JSON.stringify(e)));case 7:return this.eventsQueue.push(e),t.abrupt("return",this.reconnect());case 9:return this.eventsQueue.push(e),t.abrupt("return");case 11:case"end":return t.stop()}},t,this)})),function(t){return c.apply(this,arguments)})},{key:"init",value:function(){var t=this;return new Promise(function(e,r){t.ws=new WebSocket(t.url),"function"==typeof t.onMessage&&(t.ws.onmessage=t.onMessage),t.ws.onclose=function(e){"function"==typeof t.onClose&&t.onClose(e)},t.ws.onerror=function(t){r(t)},t.ws.onopen=function(r){"function"==typeof t.onOpen&&t.onOpen(r),e()}})}},{key:"reconnect",value:(u=i(regeneratorRuntime.mark(function t(){var e,r=this,o=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=o.length>0&&void 0!==o[0]&&o[0],!this.reconnectionTimer||e){t.next=3;break}return t.abrupt("return");case 3:return this.reconnectionTimer=null,t.prev=4,t.next=7,this.init();case 7:n("Successfully reconnected.","info"),t.next=16;break;case 10:if(t.prev=10,t.t0=t.catch(4),this.reconnectionAttempts--,0!==this.reconnectionAttempts){t.next=15;break}return t.abrupt("return");case 15:this.reconnectionTimer=setTimeout(function(){r.reconnect(!0)},this.reconnectionTimeout);case 16:case"end":return t.stop()}},t,this,[[4,10]])})),function(){return u.apply(this,arguments)})},{key:"sendQueue",value:function(){for(;this.eventsQueue.length;)this.send(this.eventsQueue.shift()).catch(function(t){n("WebSocket sending error","error",t)})}}])&&a(e.prototype,r),o&&a(e,o),t}(),c=r(0),s=r.n(c);function l(t,e){var r=new AbortController,o=r.signal,i=fetch(t,{signal:o}),a=setTimeout(function(){r.abort(),n("Request is too long, aborting...","log",t)},e);return i.then(function(t){return clearTimeout(a),t})}function f(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function h(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(t){f(i,n,o,a,u,"next",t)}function u(t){f(i,n,o,a,u,"throw",t)}a(void 0)})}}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var v=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.sourceFilesCache={}}var e,r,o,i,a,u;return e=t,(r=[{key:"parse",value:(u=h(regeneratorRuntime.mark(function t(e){var r,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.a.parse(e),t.abrupt("return",Promise.all(r.map(function(){var t=h(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e.fileName,t.t1=e.lineNumber,t.t2=e.columnNumber,t.next=5,n.extractSourceCode(e);case 5:return t.t3=t.sent,t.t4=e.functionName,t.t5=e.args,t.abrupt("return",{file:t.t0,line:t.t1,column:t.t2,sourceCode:t.t3,function:t.t4,arguments:t.t5});case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())));case 2:case"end":return t.stop()}},t)})),function(t){return u.apply(this,arguments)})},{key:"extractSourceCode",value:(a=h(regeneratorRuntime.mark(function t(e){var r,n,o,i,a,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,this.isValidUrl(e.fileName)){t.next=3;break}return t.abrupt("return",null);case 3:if(!(e.columnNumber>200)){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,this.loadSourceFile(e.fileName);case 7:if(r=t.sent){t.next=10;break}return t.abrupt("return",null);case 10:return n=r.split("\n"),o=e.lineNumber-1,5,i=Math.max(0,o-5),a=Math.min(n.length-1,o+5+1),u=n.slice(i,a),t.abrupt("return",u.map(function(t,e){return{line:i+e+1,content:t}}));case 19:return t.prev=19,t.t0=t.catch(0),t.abrupt("return",null);case 22:case"end":return t.stop()}},t,this,[[0,19]])})),function(t){return a.apply(this,arguments)})},{key:"isValidUrl",value:function(t){try{return!!new URL(t)}catch(t){return!1}}},{key:"loadSourceFile",value:(i=h(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.sourceFilesCache[e]){t.next=2;break}return t.abrupt("return",this.sourceFilesCache[e]);case 2:return t.prev=2,this.sourceFilesCache[e]=l(e,2e3).then(function(t){return t.text()}),Object.keys(this.sourceFilesCache).length>10&&(r=this.sourceFilesCache[e],this.sourceFilesCache={},this.sourceFilesCache[e]=r),t.next=7,this.sourceFilesCache[e];case 7:return t.abrupt("return",t.sent);case 10:return t.prev=10,t.t0=t.catch(2),n("Can not load source file. Skipping..."),t.abrupt("return",null);case 14:case"end":return t.stop()}},t,this,[[2,10]])})),function(t){return i.apply(this,arguments)})}])&&p(e.prototype,r),o&&p(e,o),t}();function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function g(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(t){d(i,n,o,a,u,"next",t)}function u(t){d(i,n,o,a,u,"throw",t)}a(void 0)})}}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var w=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.version="2.0.0",this.type="errors/javascript",this.stackParser=new v,"string"==typeof e&&(e={token:e}),this.token=e.token,this.release=e.release,this.user=e.user,this.token?(this.transport=new u({collectorEndpoint:e.collectorEndpoint||"wss://kepler.codex.so:443/ws",reconnectionAttempts:e.reconnectionAttempts,reconnectionTimeout:e.reconnectionTimeout,onClose:function(){n("Connection lost. Connection will be restored when new errors occurred","info")}}),this.initGlobalHandlers()):n("Integration Token is missed. You can get it on https://hawk.so at Project Settings.","warn")}var e,r,o,i,a;return e=t,(r=[{key:"initGlobalHandlers",value:function(){var t=this;window.addEventListener("error",function(e){return t.handleEvent(e)}),window.addEventListener("unhandledrejection",function(e){return t.handleEvent(e)})}},{key:"test",value:function(){var t=new Error("Hawk JavaScript Catcher test message.");this.catchError(t)}},{key:"catchError",value:function(t){var e=this;this.prepareErrorFormatted(t).then(function(t){e.sendErrorFormatted(t)})}},{key:"handleEvent",value:function(t){var e=this,r=t.error||t.reason;this.prepareErrorFormatted(r).then(function(t){e.sendErrorFormatted(t)}).catch(function(t){n("Internal error ლ(´ڡ`ლ)","error",t)})}},{key:"sendErrorFormatted",value:function(t){this.transport.send(t).catch(function(t){n("WebSocket sending error","error",t)})}},{key:"prepareErrorFormatted",value:(a=g(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this.token,t.t1=this.type,t.t2=this.getTitle(e),t.t3=this.getRelease(),t.t4=this.getTime(),t.t5=this.getContext(),t.t6=this.getUser(),t.t7=this.getGetParams(),t.next=10,this.getBacktrace(e);case 10:return t.t8=t.sent,t.t9={title:t.t2,release:t.t3,timestamp:t.t4,context:t.t5,user:t.t6,get:t.t7,backtrace:t.t8},t.abrupt("return",{token:t.t0,catcherType:t.t1,payload:t.t9});case 13:case"end":return t.stop()}},t,this)})),function(t){return a.apply(this,arguments)})},{key:"getTitle",value:function(t){return!(t instanceof Error)?t.toString():t.message}},{key:"getRelease",value:function(){return this.release||null}},{key:"getTime",value:function(){var t=(new Date).getTime();return t/=1e3}},{key:"getContext",value:function(){return{}}},{key:"getUser",value:function(){return this.user||null}},{key:"getGetParams",value:function(){var t=window.location.search.substr(1);return t?t.split("&").reduce(function(t,e){var r=m(e.split("="),2),n=r[0],o=r[1];return t[n]=o,t},{}):null}},{key:"getBacktrace",value:(i=g(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!!(e instanceof Error)){t.next=3;break}return t.abrupt("return",null);case 3:return t.abrupt("return",this.stackParser.parse(e));case 4:case"end":return t.stop()}},t,this)})),function(t){return i.apply(this,arguments)})}])&&y(e.prototype,r),o&&y(e,o),t}();e.default=w}]).default;