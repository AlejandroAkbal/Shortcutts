/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(t,e,n){"use strict";n.d(e,"i",(function(){return p})),n.d(e,"j",(function(){return l})),n.d(e,"a",(function(){return f})),n.d(e,"o",(function(){return h})),n.d(e,"e",(function(){return d})),n.d(e,"f",(function(){return m})),n.d(e,"c",(function(){return v})),n.d(e,"n",(function(){return b})),n.d(e,"h",(function(){return y})),n.d(e,"p",(function(){return x})),n.d(e,"k",(function(){return _})),n.d(e,"m",(function(){return O})),n.d(e,"d",(function(){return C})),n.d(e,"b",(function(){return $})),n.d(e,"g",(function(){return j})),n.d(e,"l",(function(){return k}));n(87),n(40);var r=n(35),o=(n(126),n(127),n(128),n(23)),i=(n(88),n(89),n(131),n(134),n(90),n(33),n(5)),a=(n(52),n(34),n(17),n(61),n(62),n(50)),s=n(1);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t){s.a.config.errorHandler&&s.a.config.errorHandler(t)}function l(t){return t.then((function(t){return t.default||t}))}function f(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var r=n.call(this,this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),c({},r,{},e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function h(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function d(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"components";return Array.prototype.concat.apply([],t.matched.map((function(t,r){return Object.keys(t[n]).map((function(o){return e&&e.push(r),t[n][o]}))})))}function m(t){return d(t,arguments.length>1&&void 0!==arguments[1]&&arguments[1],"instances")}function v(t,e){return Array.prototype.concat.apply([],t.matched.map((function(t,n){return Object.keys(t.components).reduce((function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r}),[])})))}function b(t,e){return Promise.all(v(t,function(){var t=Object(i.a)(regeneratorRuntime.mark((function t(n,r,o,i){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return o.components[i]=n=h(n),t.abrupt("return","function"==typeof e?e(n,r,o,i):n);case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function y(t){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,b(e);case 4:return t.abrupt("return",c({},e,{meta:d(e).map((function(t,n){return c({},t.options.meta,{},(e.matched[n]||{}).meta)}))}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,e){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(regeneratorRuntime.mark((function t(e,n){var i,a,s,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),n.ssrContext&&(e.context.ssrContext=n.ssrContext),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var i=Object(o.a)(n);if("number"==typeof t||"undefined"!==i&&"object"!==i||(r=n||{},n=t,i=Object(o.a)(n),t=302),"object"===i&&(n=e.router.resolve(n).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=A(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),t.next=3,Promise.all([y(n.route),y(n.from)]);case 3:i=t.sent,a=Object(r.a)(i,2),s=a[0],u=a[1],n.route&&(e.context.route=s),n.from&&(e.context.from=u),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!1,e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{};case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():O(t[0],e).then((function(){return _(t.slice(1),e)}))}function O(t,e){var n;return(n=2===t.length?new Promise((function(n){t(e,(function(t,r){t&&e.error(t),n(r=r||{})}))})):t(e))&&n instanceof Promise&&"function"==typeof n.then?n:Promise.resolve(n)}function C(t,e){var n=decodeURI(window.location.pathname);return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function $(t,e){return function(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===Object(o.a)(t[r])&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",P(e)));return function(e,r){for(var o="",i=e||{},a=(r||{}).pretty?R:encodeURIComponent,s=0;s<t.length;s++){var u=t[s];if("string"!=typeof u){var c=i[u.name||"pathMatch"],p=void 0;if(null==c){if(u.optional){u.partial&&(o+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(Array.isArray(c)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(c)+"`");if(0===c.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var l=0;l<c.length;l++){if(p=a(c[l]),!n[s].test(p))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===l?u.prefix:u.delimiter)+p}}else{if(p=u.asterisk?R(c,!0):a(c),!n[s].test(p))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+p+'"');o+=u.prefix+p}}else o+=u}return o}}(function(t,e){var n,r=[],o=0,i=0,a="",s=e&&e.delimiter||"/";for(;null!=(n=E.exec(t));){var u=n[0],c=n[1],p=n.index;if(a+=t.slice(i,p),i=p+u.length,c)a+=c[1];else{var l=t[i],f=n[2],h=n[3],d=n[4],m=n[5],v=n[6],b=n[7];a&&(r.push(a),a="");var y=null!=f&&null!=l&&l!==f,g="+"===v||"*"===v,x="?"===v||"*"===v,w=n[2]||s,_=d||m;r.push({name:h||o++,prefix:f||"",delimiter:w,optional:x,repeat:g,partial:y,asterisk:Boolean(b),pattern:_?T(_):b?".*":"[^"+S(w)+"]+?"})}}i<t.length&&(a+=t.substr(i));a&&r.push(a);return r}(t,e),e)}function j(t,e){var n={},r=c({},t,{},e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function k(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return c({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var E=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function R(t,e){var n=e?/[?#]/g:/[/?#]/g;return encodeURI(t).replace(n,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function S(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function T(t){return t.replace(/([=!:$/()])/g,"\\$1")}function P(t){return t&&t.sensitive?"":"i"}function A(t,e){var n,o=t.indexOf("://");-1!==o?(n=t.substring(0,o),t=t.substring(o+3)):t.startsWith("//")&&(t=t.substring(2));var i,a=t.split("/"),s=(n?n+"://":"//")+a.shift(),u=a.filter(Boolean).join("/");if(2===(a=u.split("#")).length){var c=a,p=Object(r.a)(c,2);u=p[0],i=p[1]}return s+=u?"/"+u:"",e&&"{}"!==JSON.stringify(e)&&(s+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map((function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map((function(t){return[e,"=",t].join("")})).join("&"):e+"="+n})).filter(Boolean).join("&")}(e)),s+=i?"#"+i:""}},12:function(t,e,n){"use strict";n(33),n(87),n(40),n(34),n(17),n(61);var r=n(5),o=n(50),i=(n(62),n(1)),a=n(92),s=n(65),u=n.n(s),c=n(24),p=n.n(c),l=n(36),f=n(0);"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",(function(){window.history.scrollRestoration="auto"})),window.addEventListener("load",(function(){window.history.scrollRestoration="manual"})));var h=function(){},d=l.a.prototype.push;l.a.prototype.push=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h,n=arguments.length>2?arguments[2]:void 0;return d.call(this,t,e,n)},i.a.use(l.a);var m={mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,n){var r=!1,o=Object(f.e)(t);o.length<2&&o.every((function(t){return!1!==t.options.scrollToTop}))?r={x:0,y:0}:o.some((function(t){return t.options.scrollToTop}))&&(r={x:0,y:0}),n&&(r=n);var i=window.$nuxt;return t.path===e.path&&t.hash!==e.hash&&i.$nextTick((function(){return i.$emit("triggerScroll")})),new Promise((function(e){i.$once("triggerScroll",(function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){}}e(r)}))}))},routes:[{path:"/",component:function(){return Object(f.j)(n.e(2).then(n.bind(null,143)))},name:"index"}],fallback:!1};var v,b={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var i=n,a=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=a[u]||s,p={};y.forEach((function(t){void 0!==c[t]&&(p[t]=c[t])}));var l={};g.forEach((function(t){"function"==typeof c[t]&&(l[t]=c[t].bind(i))}));var f=l.beforeEnter;if(l.beforeEnter=function(t){if(window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")})),f)return f.call(i,t)},!1===c.css){var h=l.leave;(!h||h.length<2)&&(l.leave=function(t,e){h&&h.call(i,t),i.$nextTick(e)})}var d=t("routerView",r);return o.keepAlive&&(d=t("keep-alive",{props:o.keepAliveProps},[d])),t("transition",{props:p,on:l},[d])}},y=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],g=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],x={name:"NuxtError",props:{error:{type:Object,default:null}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}}},w=(n(139),n(22)),_=Object(w.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,O=(n(88),n(89),n(90),n(35)),C={name:"Nuxt",components:{NuxtChild:b,NuxtError:_},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},errorCaptured:function(t){this.displayingNuxtError&&(this.errorFromNuxtError=t,this.$forceUpdate())},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(f.b)(this.$route.matched[0].path)(this.$route.params);var t=Object(O.a)(this.$route.matched,1)[0];if(!t)return this.$route.path;var e=t.components.default;if(e&&e.options){var n=e.options;if(n.key)return"function"==typeof n.key?n.key(this.$route):n.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate:function(){i.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){var e=this;return this.nuxt.err?this.errorFromNuxtError?(this.$nextTick((function(){return e.errorFromNuxtError=!1})),t("div",{},[t("h2","An error occured while showing the error page"),t("p","Unfortunately an error occured and while showing the error page another error occured"),t("p","Error details: ".concat(this.errorFromNuxtError.toString())),t("nuxt-link",{props:{to:"/"}},"Go back to home")])):(this.displayingNuxtError=!0,this.$nextTick((function(){return e.displayingNuxtError=!1})),t(_,{props:{error:this.nuxt.err}})):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},$=(n(52),{name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout((function(){return t.startTimer()}),this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout((function(){t.show=!1,t.$nextTick((function(){t.percent=0,t.reversed=!1}))}),500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval((function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))}),100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}}),j=(n(140),Object(w.a)($,void 0,void 0,!1,null,null,null).exports),k=(n(141),{name:"DefaultLayout",head:function(){return{bodyAttrs:{class:"bg-background"}}}}),E={_default:Object(w.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dark"},[e("main",[e("nuxt")],1)])}),[],!1,null,null,null).exports},R={head:{title:"Shortcutts",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Learning shortcuts made easy"},{hid:"mobile-web-app-capable",name:"mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-capable",name:"apple-mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-status-bar-style",name:"apple-mobile-web-app-status-bar-style",content:"default"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"Shortcutts"},{hid:"author",name:"author",content:"Alejandro Akbal"},{hid:"theme-color",name:"theme-color",content:"#181a1b"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"},{hid:"og:title",name:"og:title",property:"og:title",content:"Shortcutts"},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"Shortcutts"},{hid:"og:description",name:"og:description",property:"og:description",content:"Learning shortcuts made easy"},{hid:"og:url",name:"og:url",property:"og:url",content:"https://shortcutts.app"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"manifest",href:"/_nuxt/manifest.3c7603b8.json"}],style:[],script:[],htmlAttrs:{lang:"en"}},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),i=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")}))}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,i])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){i.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){i.a.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error,this.context=this.$options.context},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},refresh:(v=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((e=Object(f.f)(this.$route)).length){t.next=3;break}return t.abrupt("return");case 3:return this.$loading.start(),n=e.map((function(t){var e=[];return t.$options.fetch&&e.push(Object(f.m)(t.$options.fetch,r.context)),t.$options.asyncData&&e.push(Object(f.m)(t.$options.asyncData,r.context).then((function(e){for(var n in e)i.a.set(t.$data,n,e[n])}))),Promise.all(e)})),t.prev=5,t.next=8,Promise.all(n);case 8:t.next=15;break;case 10:t.prev=10,t.t0=t.catch(5),this.$loading.fail(),Object(f.i)(t.t0),this.error(t.t0);case 15:this.$loading.finish();case 16:case"end":return t.stop()}}),t,this,[[5,10]])}))),function(){return v.apply(this,arguments)}),errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&E["_"+t]||(t="default"),this.layoutName=t,this.layout=E["_"+t],this.layout},loadLayout:function(t){return t&&E["_"+t]||(t="default"),Promise.resolve(E["_"+t])}},components:{NuxtLoading:j}};function S(){return(S=Object(r.a)(regeneratorRuntime.mark((function t(){var e,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(!1 in navigator)){t.next=2;break}throw new Error("serviceWorker is not supported in current browser!");case 2:return t.next=4,n.e(4).then(n.bind(null,142));case 4:return e=t.sent,r=e.Workbox,o=new r("/sw.js",{scope:"/"}),t.next=9,o.register();case 9:return t.abrupt("return",o);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}window.$workbox=function(){return S.apply(this,arguments)}().catch((function(t){})),n.d(e,"b",(function(){return N})),n.d(e,"a",(function(){return _})),i.a.component(u.a.name,u.a),i.a.component(p.a.name,P({},p.a,{render:function(t,e){return p.a._warned||(p.a._warned=!0),p.a.render(t,e)}})),i.a.component(b.name,b),i.a.component("NChild",b),i.a.component(C.name,C),i.a.use(a.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var A={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function N(t){return L.apply(this,arguments)}function L(){return(L=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,a,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new l.a(m);case 2:return n=t.sent,r=P({router:n,nuxt:{defaultTransition:A,transitions:[A],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map((function(t){return t=t?"string"==typeof t?Object.assign({},A,{name:t}):Object.assign({},A,t):A})),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=Boolean(t),t=t?Object(f.l)(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},R),o=e?e.next:function(t){return r.router.push(t)},e?a=n.resolve(e.url).route:(s=Object(f.d)(n.options.base,n.options.mode),a=n.resolve(s).route),t.next=8,Object(f.p)(r,{route:a,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});case 8:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";i.a[n]||(i.a[n]=!0,i.a.use((function(){Object.prototype.hasOwnProperty.call(i.a,t)||Object.defineProperty(i.a.prototype,t,{get:function(){return this.$root.$options[t]}})})))}),t.next=12;break;case 12:t.next=15;break;case 15:return t.abrupt("return",{app:r,router:n});case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},139:function(t,e,n){"use strict";var r=n(48);n.n(r).a},140:function(t,e,n){"use strict";var r=n(49);n.n(r).a},141:function(t,e,n){},24:function(t,e,n){"use strict";var r={name:"NoSsr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var n=e.parent,r=e.slots,o=e.props,i=r(),a=i.default;void 0===a&&(a=[]);var s=i.placeholder;return n._isMounted?a:(n.$once("hook:mounted",(function(){n.$forceUpdate()})),o.placeholderTag&&(o.placeholder||s)?t(o.placeholderTag,{class:["no-ssr-placeholder"]},o.placeholder||s):a.length>0?a.map((function(){return t(!1)})):t(!1))}};t.exports=r},48:function(t,e,n){},49:function(t,e,n){},51:function(t,e,n){"use strict";n(17),n(74),n(40),n(34),n(77),n(79);var r=n(1),o=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})}),1)},i=window.cancelIdleCallback||function(t){clearTimeout(t)},a=window.IntersectionObserver&&new window.IntersectionObserver((function(t){t.forEach((function(t){var e=t.intersectionRatio,n=t.target;e<=0||n.__prefetch()}))}));e.a={name:"NuxtLink",extends:r.a.component("RouterLink"),props:{prefetch:{type:Boolean,default:!0},noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.prefetch&&!this.noPrefetch&&(this.handleId=o(this.observe,{timeout:2e3}))},beforeDestroy:function(){i(this.handleId),this.__observed&&(a.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){a&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetchLink.bind(this),a.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map((function(t){return t.components.default})).filter((function(t){return"function"==typeof t&&!t.options&&!t.__prefetched}))},prefetchLink:function(){if(this.canPrefetch()){a.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,i=t[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var s=o.value,u=s();u instanceof Promise&&u.catch((function(){})),s.__prefetched=!0}}catch(t){n=!0,r=t}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}}}}}},64:function(t,e,n){"use strict";e.a={}},65:function(t,e,n){"use strict";var r={name:"ClientOnly",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var n=e.parent,r=e.slots,o=e.props,i=r(),a=i.default;void 0===a&&(a=[]);var s=i.placeholder;return n._isMounted?a:(n.$once("hook:mounted",(function(){n.$forceUpdate()})),o.placeholderTag&&(o.placeholder||s)?t(o.placeholderTag,{class:["client-only-placeholder"]},o.placeholder||s):a.length>0?a.map((function(){return t(!1)})):t(!1))}};t.exports=r},91:function(t,e,n){"use strict";e.a=function(t,e){return e=e||{},new Promise((function(n,r){var o=new XMLHttpRequest,i=[],a=[],s={},u=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:u,headers:{keys:function(){return i},entries:function(){return a},get:function(t){return s[t.toLowerCase()]},has:function(t){return t.toLowerCase()in s}}}};for(var c in o.open(e.method||"get",t,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(t,e,n){i.push(e=e.toLowerCase()),a.push([e,n]),s[e]=s[e]?s[e]+","+n:n})),n(u())},o.onerror=r,o.withCredentials="include"==e.credentials,e.headers)o.setRequestHeader(c,e.headers[c]);o.send(e.body||null)}))}},93:function(t,e,n){"use strict";var r=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===o}(t)}(t)};var o="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function i(t,e){return!1!==e.clone&&e.isMergeableObject(t)?p((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function a(t,e,n){return t.concat(e).map((function(t){return i(t,n)}))}function s(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return t.propertyIsEnumerable(e)})):[]}(t))}function u(t,e){try{return e in t}catch(t){return!1}}function c(t,e,n){var r={};return n.isMergeableObject(t)&&s(t).forEach((function(e){r[e]=i(t[e],n)})),s(e).forEach((function(o){(function(t,e){return u(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,o)||(u(t,o)&&n.isMergeableObject(e[o])?r[o]=function(t,e){if(!e.customMerge)return p;var n=e.customMerge(t);return"function"==typeof n?n:p}(o,n)(t[o],e[o],n):r[o]=i(e[o],n))})),r}function p(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||a,n.isMergeableObject=n.isMergeableObject||r,n.cloneUnlessOtherwiseSpecified=i;var o=Array.isArray(e);return o===Array.isArray(t)?o?n.arrayMerge(t,e,n):c(t,e,n):i(e,n)}p.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,n){return p(t,n,e)}),{})};var l=p;t.exports=l},94:function(t,e,n){t.exports=n(95)},95:function(t,e,n){"use strict";n.r(e),function(t){n(52),n(74),n(40);var e=n(23),r=(n(33),n(105),n(5)),o=(n(77),n(79),n(34),n(17),n(61),n(62),n(82),n(109),n(121),n(123),n(1)),i=n(91),a=n(64),s=n(0),u=n(12),c=n(51);o.a.component(c.a.name,c.a),o.a.component("NLink",c.a),t.fetch||(t.fetch=i.a);var p,l,f=[],h=window.__NUXT__||{};Object.assign(o.a.config,{silent:!0,performance:!1});var d=o.a.config.errorHandler||console.error;function m(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map((function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter((function(t){return o[t]&&t.toLowerCase().includes("leave")})).forEach((function(t){e[t]=o[t]}))}return e}))}function v(t,e,n){return b.apply(this,arguments)}function b(){return(b=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o,i,a,u,c=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this._pathChanged=Boolean(p.nuxt.err)||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?Object(s.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,this._pathChanged||!this._queryChanged){t.next=11;break}return t.next=8,Object(s.n)(e,(function(t,e){return{Component:t,instance:e}}));case 8:o=t.sent,o.some((function(t){var r=t.Component,o=t.instance,i=r.options.watchQuery;return!0===i||(Array.isArray(i)?i.some((function(t){return c._diffQuery[t]})):"function"==typeof i&&i.apply(o,[e.query,n.query]))}))&&this.$loading.start&&!this.$loading.manual&&this.$loading.start();case 11:r(),t.next=25;break;case 14:if(t.prev=14,t.t0=t.catch(4),i=t.t0||{},a=i.statusCode||i.status||i.response&&i.response.status||500,u=i.message||"",!/^Loading( CSS)? chunk (\d)+ failed\./.test(u)){t.next=22;break}return window.location.reload(!0),t.abrupt("return");case 22:this.error({statusCode:a,message:u}),this.$nuxt.$emit("routeChanged",e,n,i),r();case 25:case"end":return t.stop()}}),t,this,[[4,14]])})))).apply(this,arguments)}function y(t,e){return h.serverRendered&&e&&Object(s.a)(t,e),t._Ctor=t,t}function g(t){var e=Object(s.d)(t.options.base,t.options.mode);return Object(s.c)(t.match(e),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r,o,i){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return a=y(Object(s.o)(e),h.data?h.data[i]:null),r.components[o]=a,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e,n,r,o,i){return t.apply(this,arguments)}}())}function x(t,e,n){var r=this,o=[],i=!1;if(void 0!==n&&(o=[],(n=Object(s.o)(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach((function(t){t.options.middleware&&(o=o.concat(t.options.middleware))}))),o=o.map((function(t){return"function"==typeof t?t:("function"!=typeof a.a[t]&&(i=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),a.a[t])})),!i)return Object(s.k)(o,e)}function w(t,e,n){return _.apply(this,arguments)}function _(){return(_=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o,i,a,c,l,h,d,v,b,y,g,w,_,O,C,$,j,k,E=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return e===n?f=[]:(o=[],f=Object(s.e)(n,o).map((function(t,e){return Object(s.b)(n.matched[o[e]].path)(n.params)}))),i=!1,a=function(t){n.path===t.path&&E.$loading.finish&&E.$loading.finish(),n.path!==t.path&&E.$loading.pause&&E.$loading.pause(),i||(i=!0,r(t))},t.next=7,Object(s.p)(p,{route:e,from:n,next:a.bind(this)});case 7:if(this._dateLastError=p.nuxt.dateErr,this._hadError=Boolean(p.nuxt.err),c=[],(l=Object(s.e)(e,c)).length){t.next=26;break}return t.next=14,x.call(this,l,p.context);case 14:if(!i){t.next=16;break}return t.abrupt("return");case 16:return h=(u.a.options||u.a).layout,t.next=19,this.loadLayout("function"==typeof h?h.call(u.a,p.context):h);case 19:return d=t.sent,t.next=22,x.call(this,l,p.context,d);case 22:if(!i){t.next=24;break}return t.abrupt("return");case 24:return p.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 26:return l.forEach((function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)})),this.setTransitions(m(l,e,n)),t.prev=28,t.next=31,x.call(this,l,p.context);case 31:if(!i){t.next=33;break}return t.abrupt("return");case 33:if(!p.context._errored){t.next=35;break}return t.abrupt("return",r());case 35:return"function"==typeof(v=l[0].options.layout)&&(v=v(p.context)),t.next=39,this.loadLayout(v);case 39:return v=t.sent,t.next=42,x.call(this,l,p.context,v);case 42:if(!i){t.next=44;break}return t.abrupt("return");case 44:if(!p.context._errored){t.next=46;break}return t.abrupt("return",r());case 46:b=!0,t.prev=47,y=!0,g=!1,w=void 0,t.prev=51,_=l[Symbol.iterator]();case 53:if(y=(O=_.next()).done){t.next=65;break}if("function"==typeof(C=O.value).options.validate){t.next=57;break}return t.abrupt("continue",62);case 57:return t.next=59,C.options.validate(p.context);case 59:if(b=t.sent){t.next=62;break}return t.abrupt("break",65);case 62:y=!0,t.next=53;break;case 65:t.next=71;break;case 67:t.prev=67,t.t0=t.catch(51),g=!0,w=t.t0;case 71:t.prev=71,t.prev=72,y||null==_.return||_.return();case 74:if(t.prev=74,!g){t.next=77;break}throw w;case 77:return t.finish(74);case 78:return t.finish(71);case 79:t.next=85;break;case 81:return t.prev=81,t.t1=t.catch(47),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 85:if(b){t.next=88;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 88:return t.next=90,Promise.all(l.map((function(t,r){if(t._path=Object(s.b)(e.matched[c[r]].path)(e.params),t._dataRefresh=!1,E._pathChanged&&E._queryChanged||t._path!==f[r])t._dataRefresh=!0;else if(!E._pathChanged&&E._queryChanged){var o=t.options.watchQuery;!0===o?t._dataRefresh=!0:Array.isArray(o)?t._dataRefresh=o.some((function(t){return E._diffQuery[t]})):"function"==typeof o&&($||($=Object(s.f)(e)),t._dataRefresh=o.apply($[r],[e.query,n.query]))}if(E._hadError||!E._isMounted||t._dataRefresh){var i=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,u=Boolean(t.options.fetch),l=a&&u?30:45;if(a){var h=Object(s.m)(t.options.asyncData,p.context).then((function(e){Object(s.a)(t,e),E.$loading.increase&&E.$loading.increase(l)}));i.push(h)}if(E.$loading.manual=!1===t.options.loading,u){var d=t.options.fetch(p.context);d&&(d instanceof Promise||"function"==typeof d.then)||(d=Promise.resolve(d)),d.then((function(t){E.$loading.increase&&E.$loading.increase(l)})),i.push(d)}return Promise.all(i)}})));case 90:i||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=107;break;case 93:if(t.prev=93,t.t2=t.catch(28),"ERR_REDIRECT"!==(j=t.t2||{}).message){t.next=98;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,j));case 98:return f=[],Object(s.i)(j),"function"==typeof(k=(u.a.options||u.a).layout)&&(k=k(p.context)),t.next=104,this.loadLayout(k);case 104:this.error(j),this.$nuxt.$emit("routeChanged",e,n,j),r();case 107:case"end":return t.stop()}}),t,this,[[28,93],[47,81],[51,67,71,79],[72,,74,78]])})))).apply(this,arguments)}function O(t,n){Object(s.c)(t,(function(t,n,r,i){return"object"!==Object(e.a)(t)||t.options||((t=o.a.extend(t))._Ctor=t,r.components[i]=t),t}))}function C(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?(u.a.options||u.a).layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(p.context)),this.setLayout(e)}function $(t,e){var n=this;if(!1!==this._pathChanged||!1!==this._queryChanged){var r=Object(s.f)(t),i=Object(s.e)(t);o.a.nextTick((function(){r.forEach((function(t,e){if(t&&!t._isDestroyed&&t.constructor._dataRefresh&&i[e]===t.constructor&&!0!==t.$vnode.data.keepAlive&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)o.a.set(t.$data,r,n[r]);window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")}))}})),C.call(n,t)}))}}function j(t){window.onNuxtReadyCbs.forEach((function(e){"function"==typeof e&&e(t)})),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),l.afterEach((function(e,n){o.a.nextTick((function(){return t.$nuxt.$emit("routeChanged",e,n)}))}))}function k(){return(k=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,i,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p=e.app,l=e.router,n=new o.a(p),r=function(){n.$mount("#__nuxt"),l.afterEach(O),l.afterEach($.bind(n)),o.a.nextTick((function(){j(n)}))},t.next=6,Promise.all(g(l));case 6:if(i=t.sent,n.setTransitions=n.$options.nuxt.setTransitions.bind(n),i.length&&(n.setTransitions(m(i,l.currentRoute)),f=l.currentRoute.matched.map((function(t){return Object(s.b)(t.path)(l.currentRoute.params)}))),n.$loading={},h.error&&n.error(h.error),l.beforeEach(v.bind(n)),l.beforeEach(w.bind(n)),!h.serverRendered){t.next=16;break}return r(),t.abrupt("return");case 16:a=function(){O(l.currentRoute,l.currentRoute),C.call(n,l.currentRoute),r()},w.call(n,l.currentRoute,l.currentRoute,(function(t){if(t){var e=l.afterEach((function(t,n){e(),a()}));l.push(t,void 0,(function(t){t&&d(t)}))}else a()}));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(u.b)().then((function(t){return k.apply(this,arguments)})).catch(d)}.call(this,n(25))}},[[94,3,1]]]);