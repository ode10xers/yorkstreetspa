!function(){var e={266:function(e,t,r){var n=r(38).default;function o(){"use strict";e.exports=o=function(){return r},e.exports.__esModule=!0,e.exports.default=e.exports;var t,r={},a=Object.prototype,i=a.hasOwnProperty,s=Object.defineProperty||function(e,t,r){e[t]=r.value},d="function"==typeof Symbol?Symbol:{},c=d.iterator||"@@iterator",u=d.asyncIterator||"@@asyncIterator",l=d.toStringTag||"@@toStringTag";function p(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{p({},"")}catch(t){p=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof b?t:b,a=Object.create(o.prototype),i=new k(n||[]);return s(a,"_invoke",{value:E(e,r,i)}),a}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var g="suspendedStart",y="suspendedYield",_="executing",h="completed",v={};function b(){}function C(){}function P(){}var I={};p(I,c,(function(){return this}));var F=Object.getPrototypeOf,w=F&&F(F(A([])));w&&w!==a&&i.call(w,c)&&(I=w);var S=P.prototype=b.prototype=Object.create(I);function M(e){["next","throw","return"].forEach((function(t){p(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(o,a,s,d){var c=m(e[o],e,a);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==n(l)&&i.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,s,d)}),(function(e){r("throw",e,s,d)})):t.resolve(l).then((function(e){u.value=e,s(u)}),(function(e){return r("throw",e,s,d)}))}d(c.arg)}var o;s(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}})}function E(e,r,n){var o=g;return function(a,i){if(o===_)throw Error("Generator is already running");if(o===h){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var s=n.delegate;if(s){var d=O(s,n);if(d){if(d===v)continue;return d}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===g)throw o=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=_;var c=m(e,r,n);if("normal"===c.type){if(o=n.done?h:y,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=h,n.method="throw",n.arg=c.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=m(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(n(e)+" is not iterable")}return C.prototype=P,s(S,"constructor",{value:P,configurable:!0}),s(P,"constructor",{value:C,configurable:!0}),C.displayName=p(P,l,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===C||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,P):(e.__proto__=P,p(e,l,"GeneratorFunction")),e.prototype=Object.create(S),e},r.awrap=function(e){return{__await:e}},M(x.prototype),p(x.prototype,u,(function(){return this})),r.AsyncIterator=x,r.async=function(e,t,n,o,a){void 0===a&&(a=Promise);var i=new x(f(e,t,n,o),a);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},M(S),p(S,l,"Generator"),p(S,c,(function(){return this})),p(S,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=A,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var d=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(d&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(d){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},r}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},38:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},509:function(e,t,r){var n=r(266)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";function e(e,t,r,n,o,a,i){try{var s=e[a](i),d=s.value}catch(e){return void r(e)}s.done?t(d):Promise.resolve(d).then(n,o)}function t(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function s(t){e(i,o,a,s,d,"next",t)}function d(t){e(i,o,a,s,d,"throw",t)}s(void 0)}))}}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var o=r(509),a=r.n(o);function i(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:t+""}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i(n.key),n)}}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){var n,o,a;n=e,o=t,a=r[t],(o=i(o))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(){return e=function e(t,r){for(var n in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.state={},this.prevState=c({},t),this.markedDirty=[],this.timeoutID=0,this.stateChangeCallback=r,this.isInitialChange=!0,t)this.set(n,t[n])},(t=[{key:"get",value:function(e){return this.state[e]}},{key:"set",value:function(e,t){(this.state[e]!==t||this.markedDirty.includes(e))&&(this._maybeClearTimeout(),this.state[e]=t,this.timeoutID=setTimeout(this._invokeStateChanged.bind(this),200))}},{key:"setDirty",value:function(e){this.markedDirty.push(e)}},{key:"_reset",value:function(){this.prevState=c({},this.state),this.timeoutID=0,this.isInitialChange=!1}},{key:"_invokeStateChanged",value:function(){var e=this._getDirtyProps();this.markedDirty=[],this.stateChangeCallback(this.isInitialChange,e,this.state,this.prevState),this._reset()}},{key:"_maybeClearTimeout",value:function(){0!=this.timeoutID&&(clearTimeout(this.timeoutID),this.timeoutID=0)}},{key:"_getDirtyProps",value:function(){var e=[];for(var t in this.state)(this.state[t]!=this.prevState[t]||this.markedDirty.includes(t))&&e.push(t);return e}}])&&s(e.prototype,t),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}();function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}window.GFPPCP=null,gform.extensions=gform.extensions||{},gform.extensions.styles=gform.extensions.styles||{},gform.extensions.styles.gravityformsppcp=gform.extensions.styles.gravityformsppcp||{},function(e){var r=window.gform||{};r.ppcp=r.ppcp||{},r.ppcp.stateManager=[],window.__gforms_hf=[],window.GFPPCP=function(o){for(var i in o)o.hasOwnProperty(i)&&(this[i]=o[i]);this.cardStyle=this.cardStyle||{},r.extensions.styles.gravityformsppcp[this.formId]=r.extensions.styles.gravityformsppcp[this.formId]||{};var s=r.extensions.styles.gravityformsppcp[this.formId][this.pageInstance]||{};this.setComponentStyleValue=function(e,t,r,n){var o="";if(0===t.indexOf("--")){var a=r.getPropertyValue(t);if(a)o=a;else o=(n?getComputedStyle(n):r).getPropertyValue(e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())}else o=t;return o.trim()},this.setComponentStyles=function(e,t,r){var o=this;if(0!==Object.keys(e).length){var a=document.getElementById("gform_"+this.formId),i=getComputedStyle(a),d=a.querySelector(".gfield input");Object.keys(e).forEach((function(a){if("object"!==n(e[a])){if("object"!==n(e[a])){var c="";r?t&&t!==r?(c=o.setComponentStyleValue(a,s[r][t][a],i,d))&&(o.cardStyle[r][t][a]=c):(c=o.setComponentStyleValue(a,s[r][a],i,d))&&(o.cardStyle[r][a]=c):(c=o.setComponentStyleValue(a,s[a],i,d))&&(o.cardStyle[a]=c)}}else{r||(o.cardStyle[a]={}),r&&(o.cardStyle[r][a]={});var u=r||a;o.setComponentStyles(e[a],a,u)}}))}},this.setComponentStyles(s);var d=this;d.init=function(){d.paypalButtonInstances=[],d.paymentAmount=0,d.countryCode="",d.form="#gform_"+d.formId,d.GFCCField="#field_"+d.formId+"_"+d.ccFieldId,d.submitButtonId="#gform_submit_button_"+d.formId,d.paypalButtons=e("#gform_ppcp_smart_payment_buttons_"+d.formId),d.orderIdField=e("#gf_ppcp_order_id_"+d.formId),d.subscriptionIdField=e("#gf_"+d.formId+"_ppcp_subscription_id"),d.paymentMethodField=e("#gform_wrapper_"+d.formId+" .gform_ppcp_payment_method select"),d.PayPalFunding=paypal.FUNDING.PAYPAL,document.addEventListener("gfcf/conversational/navigate/next",d.handleConversationalNavigation),document.addEventListener("gfcf/conversational/navigate/prev",d.handleConversationalNavigation),d.applyPriceClass();var t={currency:d.currency,paymentMethod:d.paymentMethodField.val(),fieldVisible:!0,submitVisible:!0};r.ppcp.stateManager[d.formId]=new u(t,d.handleStateChange.bind(this)),d.bindStateEvents(),e(d.form).on("submit",d.handleFormSubmission)},d.handleStateChange=function(e,t,r,n){r.activeFeed?(d.paymentAmount=d.getPaymentAmount(r.activeFeed,r.total),t.includes("currency")?d.handleCurrencyChange(e,r,n):t.includes("activeFeed")?d.handleFeedChange(r):t.includes("total")?d.handleTotalChange(r):d.handleVisibilityChange(r)):d.showHideFields(r,0)},d.handleCurrencyChange=function(e,t,r){d.resetPayPalScript(t.currency,(function(){d.renderPayPalFields(t.activeFeed,d.paymentAmount),d.showHideFields(t,d.paymentAmount),d.enableForm(),d.hideFormSpinner()}))},d.handleFeedChange=function(e){d.resetCardErrors(),d.renderPayPalFields(e.activeFeed,d.paymentAmount),d.showHideFields(e,d.paymentAmount)},d.handleVisibilityChange=function(e){d.ensurePayPalFieldsRendered(e.activeFeed,d.paymentAmount),d.showHideFields(e,d.paymentAmount)},d.handleTotalChange=function(e){d.ensurePayPalFieldsRendered(e.activeFeed,d.paymentAmount),d.showHideFields(e,d.paymentAmount),d.renderCreditMessage(d.paymentAmount)},d.handleConversationalNavigation=function(t){var n=t.detail.target.id,o=e("#gform_wrapper_"+d.formId+" .gform_ppcp_custom_card_fields").attr("id"),a=r.ppcp.stateManager[d.formId].state;n===o&&"Credit Card"!==a.paymentMethod?d.paypalButtons.css("display","inline-block"):d.paypalButtons.css("display","none")},d.getPaymentMethods=function(e){if(!e.supportedPaymentMethods)return[];var t=[];return Object.values(e.supportedPaymentMethods).forEach((function(e){var r=e.value?e.value:e;Object.values(d.paymentMethods).includes(r)&&t.push(r)})),t},d.showHideFields=function(t,n){var o=t.activeFeed?d.getPaymentMethods(t.activeFeed):[],a=e("#gform_wrapper_"+d.formId+" .gform_ppcp_custom_card_fields").attr("id"),i=d.showHidePaymentMethodSelector(o),s=d.isCreditCardEnabled(t.activeFeed),c=i||"Credit Card"===t.paymentMethod&&s,u=!t.fieldVisible||0==n||!c?"none":"block";d.isConversationalForm()&&d.determineConversationalFormsVisibility(t,n,a),d.showHidePayPalField(u);var l=e("#gform_wrapper_"+d.formId+" .ginput_container_custom_card_fields");if("Credit Card"===t.paymentMethod)l.addClass("ginput_container_custom_card_fields--is-active"),d.paypalButtons.css("display","none"),t.submitVisible&&d.showHideSubmitButton("visible");else{l.removeClass("ginput_container_custom_card_fields--is-active");var p,f=!t.fieldVisible||0==n||!d.isPayPalButtonsEnabled(t.activeFeed);if(d.isConversationalForm()){var m=document.querySelector('[data-field-class="gform_ppcp_custom_card_fields"]').classList.contains("active-step")&&d.isConversationalForm();p=!f&&t.submitVisible&&m?"inline-block":"none"}else p=f||!t.submitVisible?"none":"inline-block";d.paypalButtons.css("display",p);var g=f&&t.submitVisible?"visible":"hidden";d.showHideSubmitButton(g)}var y=parseInt(gf_get_input_id_by_html_id(a));r.utils.trigger({event:"gform/conditionalLogic/applyRules/end",native:!1,data:{formId:d.formId,fields:[y],isInit:!1}})},d.showHidePayPalField=function(t){var n=e("#gform_wrapper_"+d.formId+" .gform_ppcp_custom_card_fields");n.css("display")!=t&&(n.css("display",t),r.ppcp.stateManager[d.formId].setDirty("fieldVisible"))},d.showHideSubmitButton=function(t){var r=e(d.submitButtonId);r.css("visibility",t),"hidden"===t?(r.css("position","absolute"),r.css("left","-9999em")):(r.css("position","static"),r.css("left","0"))},d.renderPayPalFields=function(t,r){var n=e(d.form).data("ppcp-card-rendered");d.isCreditCardEnabled(t)&&!n&&d.renderCardFields();var o=document.querySelector("[data-paypal-smart-button-version]");d.isPayPalButtonsEnabled(t)&&!o&&jQuery("#gform_ppcp_smart_payment_buttons_"+d.formId).length&&d.renderPayPalButtons(t.intent,r)},d.isCreditCardEnabled=function(e){var t=d.getPaymentMethods(e);return"undefined"!=typeof paypal&&paypal.HostedFields.isEligible()&&t.includes("Credit Card")},d.isPayPalButtonsEnabled=function(e){return d.getPaymentMethods(e).includes("PayPal Checkout")},d.ensurePayPalFieldsRendered=function(e,t){d.isPayPalButtonsRendered()||d.renderPayPalFields(e,t)},d.determineConversationalFormsVisibility=function(t,n,o){var a=!t.fieldVisible||0==n;"Credit Card"===t.paymentMethod&&"subscription"==r.ppcp.stateManager[d.formId].get("activeFeed").intent&&function(e){throw new TypeError('"'+e+'" is read-only')}("hideInConvoForms"),a?e("#"+o).attr("data-conditional-logic","hidden"):e("#"+o).attr("data-conditional-logic","visible")},d.handleProductTotalFilter=function(e,t){return t!=d.formId||r.ppcp.stateManager[d.formId].set("total",e),e},d.handleFrontendFeedsEvaluated=function(e,t){if(t===d.formId){var n=d.getActiveFeed(e);r.ppcp.stateManager[d.formId].set("activeFeed",n);var o=d.getPaymentMethods(n);o.length>0&&!o.includes(d.paymentMethodField.val())&&(d.paymentMethodField.find('option[value="'+o[0]+'"]').prop("selected",!0),r.ppcp.stateManager[d.formId].set("paymentMethod",o[0]))}},d.handlePostConditionalLogic=function(e,t,n,o,a){e!=d.formId||(n==d.GFCCField?r.ppcp.stateManager[d.formId].set("fieldVisible","show"==t):n==d.submitButtonId&&r.ppcp.stateManager[d.formId].set("submitVisible","show"==t))},d.bindStateEvents=function(){r.addFilter("gform_product_total",d.handleProductTotalFilter,51),r.addAction("gform_frontend_feeds_evaluated",d.handleFrontendFeedsEvaluated),r.addAction("gform_post_conditional_logic_field_action",d.handlePostConditionalLogic),r.addFilter("gform_abort_conditional_logic_do_action",(function(e,t,n,o,a,i,s,c){return s==d.formId&&n==d.GFCCField&&r.ppcp.stateManager[d.formId].get("total")<=0&&(e=!0),e})),e(d.form).on("select change",(function(){r.ppcp.stateManager[d.formId].set("currency",d.getCurrentCurrencyCode())})),d.paymentMethodField.on("change",(function(){r.ppcp.stateManager[d.formId].set("paymentMethod",d.paymentMethodField.val()),d.resetCardErrors()}))},d.isPayPalButtonsRendered=function(){return d.paypalButtonInstances.length>0},d.renderCreditMessage=function(t){if(d.displayCreditMessages){var r=e("#gform_wrapper_"+d.formId+" #paypal_credit_messages");r.length?r.attr("data-pp-amount",t):e('<div id="paypal_credit_messages" data-pp-message data-pp-style-layout="text" data-pp-style-logo-type="inline" data-pp-style-color="black" data-pp-amount="'+t+'"></div>').prependTo(d.paypalButtons)}},d.renderPayPalButtons=function(e,t){d.closePayPalButtons();var r=d.getPayPalButtonArgs(e);d.updatePayPalScriptIntent(e);var n=paypal.Buttons(r);n.render("#gform_ppcp_smart_payment_buttons_"+d.formId),d.paypalButtonInstances.push(n),d.renderCreditMessage(t)},d.getPaymentAmount=function(e,t){var r=t;if("form_total"!==e.paymentAmount){var n=GFMergeTag.getMergeTagValue(d.formId,e.paymentAmount,":price"),o=GFMergeTag.getMergeTagValue(d.formId,e.paymentAmount,":qty");"string"==typeof n&&(n=GFMergeTag.getMergeTagValue(d.formId,e.paymentAmount+".2",":price"),o=GFMergeTag.getMergeTagValue(d.formId,e.paymentAmount+".3",":qty")),r=n*o}return r},d.renderCardFields=function(){var t=e("#input_"+d.formId+"_"+d.ccFieldId+"_1").text(),r=e("#input_"+d.formId+"_"+d.ccFieldId+"_2").text(),n=e("#input_"+d.formId+"_"+d.ccFieldId+"_3").text();e("#input_"+d.formId+"_"+d.ccFieldId+"_1, #input_"+d.formId+"_"+d.ccFieldId+"_2, #input_"+d.formId+"_"+d.ccFieldId+"_3").text(""),paypal.HostedFields.render({createOrder:d.createOrder,styles:d.cardStyle,fields:{number:{selector:"#input_"+d.formId+"_"+d.ccFieldId+"_1",placeholder:t},cvv:{selector:"#input_"+d.formId+"_"+d.ccFieldId+"_3",placeholder:n},expirationDate:{selector:"#input_"+d.formId+"_"+d.ccFieldId+"_2",placeholder:r}}}).then((function(t){window.__gforms_hf[d.formId]=t,e(d.form).attr("data-ppcp-card-rendered",!0),t.on("focus",(function(t){"number"===t.emittedBy&&wp.a11y.speak(e("#field_"+d.formId+"_"+d.ccFieldId+"_supported_creditcards").text())})),t.on("cardTypeChange",(function(t){var r,n=e("#input_"+d.formId+"_"+d.ccFieldId+"_1").parents(".gfield").find(".gform_card_icon_container");1!==t.cards.length?r=null:"american express"===(r=t.cards[0].niceType.toLowerCase())&&(r="amex"),r?(e(n).find(".gform_card_icon").removeClass("gform_card_icon_selected").addClass("gform_card_icon_inactive"),e(n).find(".gform_card_icon_"+r).removeClass("gform_card_icon_inactive").addClass("gform_card_icon_selected"),t.cards[0].type=r,d.isCardSupported(t.cards[0])):e(n).find(".gform_card_icon").removeClass("gform_card_icon_selected gform_card_icon_inactive");var o=e("#ppcp_credit_card_type_"+d.formId);o.length?o.val(t.cards[0].niceType):e(d.form).append(e('<input type="hidden" name="ppcp_credit_card_type" id="ppcp_credit_card_type_'+d.formId+'" />').val(t.cards[0].niceType))}))}))},d.handleFormSubmission=function(t){if(d.isGoPrevPage())d.removeIdFields();else if("Credit Card"==r.ppcp.stateManager[d.formId].get("paymentMethod")&&"subscription"==r.ppcp.stateManager[d.formId].get("activeFeed").intent)return d.displayCardError(gforms_ppcp_frontend_strings.card_info_error),d.resetPayPalStatus(),t.preventDefault(),!1;if(!r.ppcp.stateManager[d.formId].get("activeFeed")||"Credit Card"!==r.ppcp.stateManager[d.formId].get("paymentMethod")||"1"===e("#gform_save_"+d.formId).val()||e(d.form).data("gfppcpsubmitting")||d.paymentAmount<=0||!d.isCreditCardOnPage()||!r.ppcp.stateManager[d.formId].get("fieldVisible")||d.isGoPrevPage()||"undefined"!=typeof gformIsRecaptchaPending&&gformIsRecaptchaPending(e(d.form)))return!0;t.preventDefault(),gformAddSpinner(d.formId),e(d.form).data("gfppcpsubmitting",!0);var n=window.__gforms_hf[d.formId],o=n.getState();if(!Object.keys(o.fields).every((function(e){return o.fields[e].isValid})))return d.displayCardError(gforms_ppcp_frontend_strings.card_info_error),d.resetPayPalStatus(),!1;d.resetCardErrors();var a={contingencies:["SCA_WHEN_REQUIRED"]};e("#input_"+d.formId+"_"+d.ccFieldId+"_5").length&&(a.cardholderName=e("#input_"+d.formId+"_"+d.ccFieldId+"_5").val()),n.submit(a).then((function(t){if(void 0===t.liabilityShifted)e(d.form).submit();else if(t.liabilityShifted)e(d.form).submit();else if("SKIPPED_BY_BUYER"===t.authenticationReason){confirm(gforms_ppcp_frontend_strings.skipped_by_buyer)&&e(d.form).submit()}else d.displayCardError(gforms_ppcp_frontend_strings.threed_secure_error),d.resetPayPalStatus()})).catch((function(e){d.resetPayPalStatus(),e.hasOwnProperty("details")&&d.displayCardError(e.details[0].description)}))},d.resetPayPalScript=function(t,r){var n=e("#gform_paypal_sdk-js");if(n.length&&!d.updatingCurrencyInProgress){d.updatingCurrencyInProgress=!0,gformAddSpinner(d.formId),d.disableForm();var o=n.attr("src").replace(/currency=\w{3}/,"currency="+t),a=n.attr("data-partner-attribution-id");n.remove(),d.destroyPayPalButtons(),e("<script>").attr("id","gform_paypal_sdk-js").appendTo("head"),(n=e("#gform_paypal_sdk-js"))[0].onload=function(){n.attr("data-identifier","gform_ppcp_js_sdk").attr("data-partner-attribution-id",a),d.updatingCurrencyInProgress=!1,r()},n.attr("src",o)}},d.getActiveFeed=function(e){var t=e.filter((function(e){return"gravityformsppcp"===e.addonSlug&&e.isActivated}));if(0==t.length)return!1;var r=Object.values(d.feeds).filter((function(e){return e.feedId==t[0].feedId}));return!!r.length&&r[0]},d.showHidePaymentMethodSelector=function(e){return e.length<=1?(d.paymentMethodField.hide(),!1):(d.paymentMethodField.show(),!0)},d.getPayPalButtonArgs=function(e){var t={style:{layout:d.smartPaymentButtons.buttonsLayout,color:d.smartPaymentButtons.buttonsColor,shape:d.smartPaymentButtons.buttonsShape},onInit:function(e){d.enableForm()},onError:function(e){}};return"authorize"===e||"capture"===e?(t.onApprove=d.onOrderApprove,t.createOrder=d.createOrder):"subscription"===e&&(t.createSubscription=d.createSubscription,t.onApprove=d.onSubscriptionApprove,t.onError=d.onSubscriptionError,t.onCancel=d.onSubscriptionCancel,t.fundingSource=d.PayPalFunding),t},d.updatePayPalScriptIntent=function(t){var r=e('script[data-identifier="gform_ppcp_js_sdk"]');if(!(r.length<=0)){var n=r.attr("src");n=n.replace("&intent=authorize","").replace("&intent=subscription","").replace("&vault=true","").replace("&vault=false","").replace("&intent=capture",""),"authorize"===t||"capture"===t?n+="&intent="+t:"subscription"===t&&(n=n.replace("&vault=false",""),n+="&vault=true&intent=subscription"),r.attr("src",n)}},d.applyPriceClass=function(){if(void 0!==window.gf_form_conditional_logic&&void 0!==window.gf_form_conditional_logic[d.formId]){for(var t=Object.keys(window.gf_form_conditional_logic[d.formId].fields),r=Object.values(window.gf_form_conditional_logic[d.formId].fields),n=[],o=0;o<r.length;o++)r[o].length&&n.push(t[o]);for(var a=0;a<n.length;a++)e("#field_"+d.formId+"_"+n[a]).not(".gfield_price").addClass("gform_ppcp_field_price")}},d.getDiscountTotal=function(){return gformRoundPrice(Math.abs(r.applyFilters("gform_ppcp_discount_total",gformRoundPrice(d.discountTotal),d.formId,gformRoundPrice(d.paymentAmount))))},d.getOrderData=function(){d.items=[],d.subTotal=d.shipping=0,d.total=0,d.discountTotal=0,e.ajax({async:!1,url:gforms_ppcp_frontend_strings.ajaxurl,dataType:"json",method:"POST",data:{action:"gfppcp_get_order_data",nonce:gforms_ppcp_frontend_strings.create_order_nonce,form_id:d.formId,feed_id:r.ppcp.stateManager[d.formId].get("activeFeed").feedId,data:e(d.form).serialize()},success:function(e){e.success&&(d.items=e.data.items,d.subTotal=gformRoundPrice(e.data.subTotal),d.total=gformRoundPrice(e.data.total),d.discountTotal=Math.abs(gformRoundPrice(e.data.discountTotal)),d.shipping=gformRoundPrice(e.data.shipping))}})},d.getMergeTagValue=function(e){return""===e?"":GFMergeTag.replaceMergeTags(d.formId,"{:"+e+"}")},d.updateOrderDetails=function(){var e=r.ppcp.stateManager[d.formId].get("activeFeed"),t={name:{given_name:d.getMergeTagValue(e.first_name),surname:d.getMergeTagValue(e.last_name)}};""!==d.countryCode&&(t.address={address_line_1:d.getMergeTagValue(e.address_line1),address_line_2:d.getMergeTagValue(e.address_line2),admin_area_2:d.getMergeTagValue(e.address_city),admin_area_1:d.getMergeTagValue(e.address_state),postal_code:d.getMergeTagValue(e.address_zip),country_code:d.countryCode}),""!==d.getMergeTagValue(e.email)&&(t.email_address=d.getMergeTagValue(e.email));var n="1"===e.no_shipping?"NO_SHIPPING":"GET_FROM_FILE",o="0"===e.no_shipping?{name:{full_name:d.getMergeTagValue(e.first_name)+" "+d.getMergeTagValue(e.last_name)}}:{};"NO_SHIPPING"!==n&&""!==d.countryCode&&(o.address=t.address);var a={item_total:{value:gformRoundPrice(d.subTotal).toString(),currency_code:d.getCurrentCurrencyCode()},shipping:{value:gformRoundPrice(d.shipping).toString(),currency_code:d.getCurrentCurrencyCode()}},i=d.getDiscountTotal();i>0&&(a.discount={value:Math.abs(i).toString(),currency_code:d.getCurrentCurrencyCode()});var s,c=l(d.items);try{for(c.s();!(s=c.n()).done;){s.value.unit_amount.currency_code=d.getCurrentCurrencyCode()}}catch(e){c.e(e)}finally{c.f()}var u=[{amount:{value:gformRoundPrice(d.paymentAmount).toString(),currency_code:d.getCurrentCurrencyCode(),breakdown:a},description:e.feedName,items:d.items}];return"NO_SHIPPING"!==n&&(u[0].shipping=o),{payer:t,purchase_units:u,application_context:{shipping_preference:n}}},d.createOrder=t(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n="",!d.orderIdField.length){t.next=3;break}return t.abrupt("return",d.orderIdField.val());case 3:if(d.countryCode=d.getMergeTagValue(r.ppcp.stateManager[d.formId].get("activeFeed").address_country),""===d.countryCode){t.next=7;break}return t.next=7,d.getCountryCode(d.countryCode);case 7:return t.next=9,d.getOrderData();case 9:return t.next=11,fetch(gforms_ppcp_frontend_strings.ajaxurl+"?action=gfppcp_create_order",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nonce:gforms_ppcp_frontend_strings.create_order_nonce,data:d.updateOrderDetails(),form_id:d.formId,feed_id:r.ppcp.stateManager[d.formId].get("activeFeed").feedId})}).then((function(e){return e.json()})).then((function(t){if(!t.success)return d.displayCardError(t.data.message),d.resetPayPalStatus(),!1;n=t.data.orderID,e(d.form).append(e('<input type="hidden" id="gf_ppcp_order_id_'+d.formId+'" name="ppcp_order_id" />').val(n)),d.resetCardErrors()}));case 11:return t.abrupt("return",n);case 12:case"end":return t.stop()}}),t)}))),d.onOrderApprove=function(t,r){gformAddSpinner(d.formId),e(d.form).submit()},d.disableForm=function(){e(d.form).data("gform-disabled")||e(d.form).data("gform-disabled",!0).find("input, select, textarea").each((function(){e(this).data("gform-disabled-initial-value",e(this).prop("disabled")),e(this).prop("disabled",!0)}))},d.enableForm=function(){e(d.form).data("gform-disabled")&&e(d.form).data("gform-disabled",!1).find("input, select, textarea").each((function(){e(this).prop("disabled",e(this).data("gform-disabled-initial-value")),e(this).removeAttr("gform-disabled-initial-value")}))},d.createSubscription=function(){var n=t(a().mark((function t(n,o){var i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return gformAddSpinner(d.formId),d.subscriptionIdField.length&&e(d.form).submit(),i="",t.next=5,fetch(gforms_ppcp_frontend_strings.ajaxurl+"?action=gfppcp_create_subscription",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nonce:gforms_ppcp_frontend_strings.create_subscription_nonce,form_data:e(d.form).serialize(),form_id:d.formId,feed_id:r.ppcp.stateManager[d.formId].get("activeFeed").feedId})}).then((function(e){return e.json()})).then((function(e){if(!e.success)return d.displayCardError(e.data.message),d.resetPayPalStatus(),!1;i=e.data,d.resetCardErrors()}));case 5:return t.abrupt("return",i.id);case 6:case"end":return t.stop()}}),t)})));return function(e,t){return n.apply(this,arguments)}}(),d.onSubscriptionApprove=function(t,r){0===d.subscriptionIdField.length&&e(d.form).append(e('<input type="hidden" id="gf_'+d.formId+'_ppcp_subscription_id" name="ppcp_subscription_id" />').val(t.subscriptionID)),e(d.form).submit()},d.onSubscriptionError=function(){d.displayCardError(gforms_ppcp_frontend_strings.catch_all_error)},d.onSubscriptionCancel=function(){d.resetCardErrors(),d.hideFormSpinner()},d.getCountryCode=function(t){return e.ajax({async:!1,url:gforms_ppcp_frontend_strings.ajaxurl,dataType:"json",method:"POST",data:{action:"gfppcp_get_country_code",nonce:gforms_ppcp_frontend_strings.on_approve_nonce,country:t,feed_id:r.ppcp.stateManager[d.formId].get("activeFeed").feedId},success:function(e){e.success&&(d.countryCode=e.data.code)}})},d.isCreditCardOnPage=function(){var e=d.getCurrentPageNumber();return!(d.ccPage&&e&&!d.isConversationalForm())||d.ccPage===e},d.isConversationalForm=function(){return"undefined"!=typeof gfcf_theme_config&&(void 0!==gfcf_theme_config.data&&gfcf_theme_config.data.is_conversational_form)},d.getCurrentPageNumber=function(){var t=e("#gform_source_page_number_"+d.formId);return t.length>0&&parseInt(t.val(),10)},d.isLastPage=function(){var t=e("#gform_target_page_number_"+d.formId);return!(t.length>0)||"0"===t.val()},d.isCardSupported=function(t){-1===e.inArray(t.type,Object.keys(window.gf_cc_rules))?d.displayCardError(t.niceType+" "+gforms_ppcp_frontend_strings.card_not_supported):d.resetCardErrors()},d.displayCardError=function(t){void 0===t&&(t="");var r=d.getMessageContainerSelector();e(r).find(".validation_message").length||e(r).append('<div class="gfield_description validation_message gfield_validation_message"></div>');var n=d.getCardErrors();""!==t&&(e(r).addClass("gfield_error"),e(n[0]).html(t).show(),wp.a11y.speak(t,"assertive"),d.hideFormSpinner(),d.showHidePayPalField("block"))},d.resetCardErrors=function(){var t=d.getMessageContainerSelector(),r=d.getCardErrors();e(t).removeClass("gfield_error"),e(r[0]).html("").hide()},d.getMessageContainerSelector=function(){return d.GFCCField},d.getCardErrors=function(){var t=d.getMessageContainerSelector();return e(t).find(".validation_message")},d.hideFormSpinner=function(){e("#gform_ajax_spinner_"+d.formId).length>0&&e("#gform_ajax_spinner_"+d.formId).remove()},d.resetPayPalStatus=function(){e(d.form).data("gfppcpsubmitting",!1),d.hideFormSpinner(),d.isLastPage()&&(window["gf_submitting_"+d.formId]=!1)},d.isGoPrevPage=function(){var t=parseInt(e("#gform_source_page_number_"+d.formId).val(),10),r=parseInt(e("#gform_target_page_number_"+d.formId).val(),10);return t>r&&0!==r},d.removeIdFields=function(){d.orderIdField.remove(),d.subscriptionIdField.remove()},d.getCurrentCurrencyCode=function(){var e="",t=new Currency(gf_global.gf_currency_config);if("getCode"in t==!1||"function"!=typeof t.getCode)for(var r=gforms_ppcp_frontend_strings.currencies,n=0,o=Object.keys(r);n<o.length;n++){var a=o[n];if(r[a].name===gf_global.gf_currency_config.name){e=a;break}}else e=t.getCode();return e||d.currency},d.destroyPayPalButtons=function(){try{for(var e=!1;!1===e;)e=d.closePayPalButtons();Object.keys(window).forEach((function(e){/paypal|zoid|post_robot/.test(e)&&delete window[e]})),d.paypalButtons.html("")}catch(e){}},d.closePayPalButtons=function(){if(0==d.paypalButtonInstances.length)return!0;var e,t=l(d.paypalButtonInstances);try{for(t.s();!(e=t.n()).done;){var r=e.value;try{r.close()}catch(e){return!1}}}catch(e){t.e(e)}finally{t.f()}return!0},d.init()}}(jQuery)}()}();