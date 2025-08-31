(()=>{"use strict"
function e(t){var n,r=u[t]
return void 0!==r?r.exports:(n=u[t]={exports:{}},o[t](n,n.exports,e),n.exports)}function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,n,r){return(n=function(e){var n=function(e){var n,r
if("object"!=t(e)||!e)return e
if(void 0!==(n=e[Symbol.toPrimitive])){if("object"!=t(r=n.call(e,"string")))return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return e+""}(e)
return"symbol"==t(n)?n:n+""}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function r(e,t){var n,r=Object.keys(e)
return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function i(e){var t,i
for(t=1;arguments.length>t;t++)i=null!=arguments[t]?arguments[t]:{},t%2?r(Object(i),!0).forEach(function(t){n(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})
return e}var l,o={43(e,t,n){e.exports=n(202)},153(e,t,n){function r(e,t,n){var r,i={},o=null,c=null
for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)u.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r])
if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r])
return{$$typeof:l,type:e,key:o,ref:c,props:i,t:a.current}}var i=n(43),l=Symbol.for("react.element"),o=Symbol.for("react.fragment"),u={}.hasOwnProperty,a=i.i.ReactCurrentOwner,s={key:!0,ref:!0,l:!0,o:!0}
t.Fragment=o,t.jsx=r,t.jsxs=r},202(e,t){function n(e,t,n){this.props=e,this.context=t,this.refs=A,this.updater=n||D}function r(){}function i(e,t,n){this.props=e,this.context=t,this.refs=A,this.updater=n||D}function l(e,t,n){var r,i,l,o,u={},a=null,s=null
if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)h.call(t,r)&&!v.hasOwnProperty(r)&&(u[r]=t[r])
if(1==(i=arguments.length-2))u.children=n
else if(i>1){for(l=Array(i),o=0;i>o;o++)l[o]=arguments[o+2]
u.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===u[r]&&(u[r]=i[r])
return{$$typeof:w,type:e,key:a,ref:s,props:u,t:m.current}}function o(e){return"object"==typeof e&&null!==e&&e.$$typeof===w}function u(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"}
return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function a(e,t,n,r,i){var l,s,c,d=typeof e
if("undefined"!==d&&"boolean"!==d||(e=null),l=!1,null===e)l=!0
else switch(d){case"string":case"number":l=!0
break
case"object":switch(e.$$typeof){case w:case k:l=!0}}if(l)return i=i(l=e),e=""===r?"."+u(l,0):r,p(i)?(n="",null!=e&&(n=e.replace(y,"$&/")+"/"),a(i,t,n,"",function(e){return e})):null!=i&&(o(i)&&(i=function(e,t){return{$$typeof:w,type:e.type,key:t,ref:e.ref,props:e.props,t:e.t}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(y,"$&/")+"/")+e)),t.push(i)),1
if(l=0,r=""===r?".":r+":",p(e))for(s=0;s<e.length;s++)l+=a(d=e[s],t,n,c=r+u(d,s),i)
else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=O&&e[O]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),s=0;!(d=e.next()).done;)l+=a(d=d.value,t,n,c=r+u(d,s++),i)
else if("object"===d)throw Error("Objects are not valid as a React child (found: "+("[object Object]"==(t=e+"")?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")
return l}function s(e,t,n){if(null==e)return e
var r=[],i=0
return a(e,r,"","",function(e){return t.call(n,e,i++)}),r}function c(e){if(-1===e.u){var t=e.p;(t=t()).then(function(t){0!==e.u&&-1!==e.u||(e.u=1,e.p=t)},function(t){0!==e.u&&-1!==e.u||(e.u=2,e.p=t)}),-1===e.u&&(e.u=0,e.p=t)}if(1===e.u)return e.p.default
throw e.p}function d(){throw Error("act(...) is not supported in production builds of React.")}var f,p,h,m,v,y,b,g,x,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),C=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),P=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),O=Symbol.iterator,D={isMounted(){return!1},enqueueForceUpdate(){},enqueueReplaceState(){},enqueueSetState(){}},z=Object.assign,A={}
n.prototype.isReactComponent={},n.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.")
this.updater.enqueueSetState(this,e,t,"setState")},n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},r.prototype=n.prototype,(f=i.prototype=new r).constructor=i,z(f,n.prototype),f.isPureReactComponent=!0,p=Array.isArray,h={}.hasOwnProperty,v={key:!0,ref:!0,l:!0,o:!0},y=/\/+/g,x={ReactCurrentDispatcher:b={current:null},ReactCurrentBatchConfig:g={transition:null},ReactCurrentOwner:m={current:null}},t.Children={map:s,forEach(e,t,n){s(e,function(){t.apply(this,arguments)},n)},count(e){var t=0
return s(e,function(){t++}),t},toArray(e){return s(e,function(e){return e})||[]},only(e){if(!o(e))throw Error("React.Children.only expected to receive a single React element child.")
return e}},t.Component=n,t.Fragment=_,t.Profiler=M,t.PureComponent=i,t.StrictMode=N,t.Suspense=T,t.i=x,t.act=d,t.cloneElement=function(e,t,n){var r,i,l,o,u,a,s
if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".")
if(r=z({},e.props),i=e.key,l=e.ref,o=e.t,null!=t)for(a in void 0!==t.ref&&(l=t.ref,o=m.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps&&(u=e.type.defaultProps),t)h.call(t,a)&&!v.hasOwnProperty(a)&&(r[a]=void 0===t[a]&&void 0!==u?u[a]:t[a])
if(1==(a=arguments.length-2))r.children=n
else if(a>1){for(u=Array(a),s=0;a>s;s++)u[s]=arguments[s+2]
r.children=u}return{$$typeof:w,type:e.type,key:i,ref:l,props:r,t:o}},t.createContext=function(e){return(e={$$typeof:C,h:e,m:e,v:0,Provider:null,Consumer:null,k:null,_:null}).Provider={$$typeof:E,N:e},e.Consumer=e},t.createElement=l,t.createFactory=function(e){var t=l.bind(null,e)
return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:S,render:e}},t.isValidElement=o,t.lazy=function(e){return{$$typeof:I,M:{u:-1,p:e},C:c}},t.memo=function(e,t){return{$$typeof:P,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=g.transition
g.transition={}
try{e()}finally{g.transition=t}},t.unstable_act=d,t.useCallback=function(e,t){return b.current.useCallback(e,t)},t.useContext=function(e){return b.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return b.current.useDeferredValue(e)},t.useEffect=function(e,t){return b.current.useEffect(e,t)},t.useId=function(){return b.current.useId()},t.useImperativeHandle=function(e,t,n){return b.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return b.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return b.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return b.current.useMemo(e,t)},t.useReducer=function(e,t,n){return b.current.useReducer(e,t,n)},t.useRef=function(e){return b.current.useRef(e)},t.useState=function(e){return b.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return b.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return b.current.useTransition()},t.version="18.3.1"},234(e,t){function n(e,t){var n,r,i=e.length
for(e.push(t);i>0&&l(r=e[n=i-1>>>1],t)>0;)e[n]=t,e[i]=r,i=n}function r(e){return 0===e.length?null:e[0]}function i(e){var t,n,r,i,o,u,a,s,c
if(0===e.length)return null
if(t=e[0],(n=e.pop())!==t){e[0]=n
e:for(r=0,i=e.length,o=i>>>1;o>r;)if(a=e[u=2*(r+1)-1],c=e[s=u+1],0>l(a,n))i>s&&0>l(c,a)?(e[r]=c,e[s]=n,r=s):(e[r]=a,e[u]=n,r=u)
else{if(s>=i||l(c,n)>=0)break e
e[r]=c,e[s]=n,r=s}}return t}function l(e,t){var n=e.sortIndex-t.sortIndex
return 0!==n?n:e.id-t.id}function o(e){for(var t=r(y);null!==t;){if(null===t.callback)i(y)
else{if(t.startTime>e)break
i(y),t.sortIndex=t.expirationTime,n(v,t)}t=r(y)}}function u(e){if(_=!1,o(e),!k)if(null!==r(v))k=!0,d(a)
else{var t=r(y)
null!==t&&f(u,t.startTime-e)}}function a(e,n){var l,a,c,d,p
k=!1,_&&(_=!1,M(T),T=-1),w=!0,l=x
try{for(o(n),g=r(v);null!==g&&(g.expirationTime<=n||e&&!s());)"function"==typeof(a=g.callback)?(g.callback=null,x=g.priorityLevel,c=a(g.expirationTime<=n),n=t.unstable_now(),"function"==typeof c?g.callback=c:g===r(v)&&i(v),o(n)):i(v),g=r(v)
return null!==g?d=!0:(null!==(p=r(y))&&f(u,p.startTime-n),d=!1),d}finally{g=null,x=l,w=!1}}function s(){return t.unstable_now()-I>=P}function c(){var e,n
if(null!==S){e=t.unstable_now(),I=e,n=!0
try{n=S(!0,e)}finally{n?O():(C=!1,S=null)}}else C=!1}function d(e){S=e,C||(C=!0,O())}function f(e,n){T=N(function(){e(t.unstable_now())},n)}var p,h,m,v,y,b,g,x,w,k,_,N,M,E,C,S,T,P,I,O,D,z
"object"==typeof performance&&"function"==typeof performance.now?(p=performance,t.unstable_now=function(){return p.now()}):(m=(h=Date).now(),t.unstable_now=function(){return h.now()-m}),v=[],y=[],b=1,g=null,x=3,w=!1,k=!1,_=!1,N="function"==typeof setTimeout?setTimeout:null,M="function"==typeof clearTimeout?clearTimeout:null,E="undefined"!=typeof setImmediate?setImmediate:null,"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling),C=!1,S=null,T=-1,P=5,I=-1,"function"==typeof E?O=function(){E(c)}:"undefined"!=typeof MessageChannel?(D=new MessageChannel,z=D.port2,D.port1.onmessage=c,O=function(){z.postMessage(null)}):O=function(){N(c,0)},t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){k||w||(k=!0,d(a))},t.unstable_forceFrameRate=function(e){0>e||e>125||(P=e>0?Math.floor(1e3/e):5)},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_getFirstCallbackNode=function(){return r(v)},t.unstable_next=function(e){var t,n
switch(x){case 1:case 2:case 3:t=3
break
default:t=x}n=x,x=t
try{return e()}finally{x=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break
default:e=3}var n=x
x=e
try{return t()}finally{x=n}},t.unstable_scheduleCallback=function(e,i,l){var o,s=t.unstable_now()
switch(l="object"==typeof l&&null!==l&&"number"==typeof(l=l.delay)&&l>0?s+l:s,e){case 1:o=-1
break
case 2:o=250
break
case 5:o=1073741823
break
case 4:o=1e4
break
default:o=5e3}return e={id:b++,callback:i,priorityLevel:e,startTime:l,expirationTime:o=l+o,sortIndex:-1},l>s?(e.sortIndex=l,n(y,e),null===r(v)&&e===r(y)&&(_?(M(T),T=-1):_=!0,f(u,l-s))):(e.sortIndex=o,n(v,e),k||w||(k=!0,d(a))),e},t.unstable_shouldYield=s,t.unstable_wrapCallback=function(e){var t=x
return function(){var n=x
x=t
try{return e.apply(this,arguments)}finally{x=n}}}},391(e,t,n){var r=n(950)
t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579(e,t,n){e.exports=n(153)},730(e,t,n){function r(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;arguments.length>n;n++)t+="&args[]="+encodeURIComponent(arguments[n])
return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(e,t){l(e,t),l(e+"Capture",t)}function l(e,t){for(ic[e]=t,e=0;e<t.length;e++)rc.add(t[e])}function o(e,t,n,r,i,l,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}function u(e){return e[1].toUpperCase()}function a(e,t,n,r){var i=cc.hasOwnProperty(t)?cc[t]:null;(null!==i?0!==i.type:r||2>=t.length||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1
switch(typeof t){case"function":case"symbol":return!0
case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e)
default:return!1}}(e,t,n,r))return!0
if(r)return!1
if(null!==n)switch(n.type){case 3:return!t
case 4:return!1===t
case 5:return isNaN(t)
case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!oc.call(sc,e)||!oc.call(ac,e)&&(uc.test(e)?sc[e]=!0:(ac[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}function s(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=_l&&e[_l]||e["@@iterator"])?e:null}function c(e){if(void 0===Ml)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/)
Ml=t&&t[1]||""}return"\n"+Ml+e}function d(e,t){var n,r,i,l,o,u,a
if(!e||El)return""
El=!0,n=Error.prepareStackTrace,Error.prepareStackTrace=void 0
try{if(t)if(Object.defineProperty((t=function(){throw Error()}).prototype,"props",{set(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(i=t.stack.split("\n"),l=r.stack.split("\n"),o=i.length-1,u=l.length-1;o>=1&&u>=0&&i[o]!==l[u];)u--
for(;o>=1&&u>=0;o--,u--)if(i[o]!==l[u]){if(1!==o||1!==u)do{if(o--,0>--u||i[o]!==l[u])return a="\n"+i[o].replace(" at new "," at "),e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(o>=1&&u>=0)
break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?c(e):""}function f(e){switch(e.tag){case 5:return c(e.type)
case 16:return c("Lazy")
case 13:return c("Suspense")
case 19:return c("SuspenseList")
case 0:case 2:case 15:return d(e.type,!1)
case 11:return d(e.type.render,!1)
case 1:return d(e.type,!0)
default:return""}}function p(e){if(null==e)return null
if("function"==typeof e)return e.displayName||e.name||null
if("string"==typeof e)return e
switch(e){case fl:return"Fragment"
case dl:return"Portal"
case hl:return"Profiler"
case pl:return"StrictMode"
case bl:return"Suspense"
case gl:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case vl:return(e.displayName||"Context")+".Consumer"
case ml:return(e.N.displayName||"Context")+".Provider"
case yl:var t=e.render
return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e
case xl:return null!==(t=e.displayName||null)?t:p(e.type)||"Memo"
case wl:t=e.M,e=e.C
try{return p(e(t))}catch(e){}}return null}function h(e){var t=e.type
switch(e.tag){case 24:return"Cache"
case 9:return(t.displayName||"Context")+".Consumer"
case 10:return(t.N.displayName||"Context")+".Provider"
case 18:return"DehydratedFragment"
case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef")
case 7:return"Fragment"
case 5:return t
case 4:return"Portal"
case 3:return"Root"
case 6:return"Text"
case 16:return p(t)
case 8:return t===pl?"StrictMode":"Mode"
case 22:return"Offscreen"
case 12:return"Profiler"
case 21:return"Scope"
case 13:return"Suspense"
case 19:return"SuspenseList"
case 25:return"TracingMarker"
case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null
if("string"==typeof t)return t}return null}function m(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e
default:return""}}function v(e){var t=e.type
return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function y(e){e.S||(e.S=function(e){var t,n,r=v(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),l=""+e[r]
if(!e.hasOwnProperty(r)&&void 0!==i&&"function"==typeof i.get&&"function"==typeof i.set)return t=i.get,n=i.set,Object.defineProperty(e,r,{configurable:!0,get(){return t.call(this)},set(e){l=""+e,n.call(this,e)}}),Object.defineProperty(e,r,{enumerable:i.enumerable}),{getValue:()=>l,setValue(e){l=""+e},stopTracking(){e.S=null,delete e[r]}}}(e))}function b(e){var t,n,r
return!(!e||(t=e.S)&&(n=t.getValue(),r="",e&&(r=v(e)?e.checked?"true":"false":e.value),(e=r)===n||(t.setValue(e),0)))}function g(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null
try{return e.activeElement||e.body}catch(t){return e.body}}function x(e,t){var n=t.checked
return Nl({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e.T.initialChecked})}function w(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked
n=m(null!=t.value?t.value:n),e.T={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function k(e,t){null!=(t=t.checked)&&a(e,"checked",t,!1)}function _(e,t){k(e,t)
var n=m(t.value),r=t.type
if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n)
else if("submit"===r||"reset"===r)return void e.removeAttribute("value")
t.hasOwnProperty("value")?M(e,t.type,n):t.hasOwnProperty("defaultValue")&&M(e,t.type,m(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function N(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type
if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return
t=""+e.T.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e.T.initialChecked,""!==n&&(e.name=n)}function M(e,t,n){"number"===t&&g(e.ownerDocument)===e||(null==n?e.defaultValue=""+e.T.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function E(e,t,n,r){if(e=e.options,t){t={}
for(var i=0;i<n.length;i++)t["$"+n[i]]=!0
for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+m(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0))
null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function C(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(r(91))
return Nl({},t,{value:void 0,defaultValue:void 0,children:""+e.T.initialValue})}function S(e,t){var n=t.value
if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(r(92))
if(Cl(n)){if(n.length>1)throw Error(r(93))
n=n[0]}t=n}null==t&&(t=""),n=t}e.T={initialValue:m(n)}}function T(e,t){var n=m(t.value),r=m(t.defaultValue)
null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function P(e){var t=e.textContent
t===e.T.initialValue&&""!==t&&null!==t&&(e.value=t)}function I(e){switch(e){case"svg":return"http://www.w3.org/2000/svg"
case"math":return"http://www.w3.org/1998/Math/MathML"
default:return"http://www.w3.org/1999/xhtml"}}function O(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?I(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}function D(e,t){if(t){var n=e.firstChild
if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}function z(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Pl.hasOwnProperty(e)&&Pl[e]?(""+t).trim():t+"px"}function A(e,t){var n,r,i
for(n in e=e.style,t)t.hasOwnProperty(n)&&(r=0===n.indexOf("--"),i=z(n,t[n],r),"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i)}function j(e,t){if(t){if(Ol[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(r(137,e))
if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(r(60))
if("object"!=typeof t.dangerouslySetInnerHTML||!("P"in t.dangerouslySetInnerHTML))throw Error(r(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(r(62))}}function R(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is
switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1
default:return!0}}function F(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function L(e){if(e=gt(e)){if("function"!=typeof zl)throw Error(r(280))
var t=e.stateNode
t&&(t=wt(t),zl(e.stateNode,e.type,t))}}function V(e){Al?jl?jl.push(e):jl=[e]:Al=e}function B(){if(Al){var e=Al,t=jl
if(jl=Al=null,L(e),t)for(e=0;e<t.length;e++)L(t[e])}}function U(e,t){return e(t)}function $(){}function X(e,t,n){if(Rl)return e(t,n)
Rl=!0
try{return U(e,t,n)}finally{Rl=!1,(null!==Al||null!==jl)&&($(),B())}}function H(e,t){var n,i=e.stateNode
if(null===i)return null
if(null===(n=wt(i)))return null
i=n[t]
e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n
break e
default:e=!1}if(e)return null
if(i&&"function"!=typeof i)throw Error(r(231,t,typeof i))
return i}function W(e,t,n,r,i,l,o,u,a){var s=[].slice.call(arguments,3)
try{t.apply(n,s)}catch(e){this.onError(e)}}function Y(e,t,n,r,i,l,o,u,a){Vl=!1,Bl=null,W.apply(Xl,arguments)}function K(e,t,n,i,l,o,u,a,s){if(Y.apply(this,arguments),Vl){if(!Vl)throw Error(r(198))
var c=Bl
Vl=!1,Bl=null,Ul||(Ul=!0,$l=c)}}function Z(e){var t=e,n=e
if(e.alternate)for(;t.return;)t=t.return
else{e=t
do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function G(e){if(13===e.tag){var t=e.memoizedState
if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function J(e){if(Z(e)!==e)throw Error(r(188))}function q(e){return null!==(e=function(e){var t,n,i,l,o,u,a=e.alternate
if(!a){if(null===(a=Z(e)))throw Error(r(188))
return a!==e?null:e}for(t=e,n=a;null!==(i=t.return);){if(null===(l=i.alternate)){if(null!==(n=i.return)){t=n
continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return J(i),e
if(l===n)return J(i),a
l=l.sibling}throw Error(r(188))}if(t.return!==n.return)t=i,n=l
else{for(o=!1,u=i.child;u;){if(u===t){o=!0,t=i,n=l
break}if(u===n){o=!0,n=i,t=l
break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===t){o=!0,t=l,n=i
break}if(u===n){o=!0,n=l,t=i
break}u=u.sibling}if(!o)throw Error(r(189))}}if(t.alternate!==n)throw Error(r(190))}if(3!==t.tag)throw Error(r(188))
return t.stateNode.current===t?e:a}(e))?Q(e):null}function Q(e){if(5===e.tag||6===e.tag)return e
for(e=e.child;null!==e;){var t=Q(e)
if(null!==t)return t
e=e.sibling}return null}function ee(e){switch(e&-e){case 1:return 1
case 2:return 2
case 4:return 4
case 8:return 8
case 16:return 16
case 32:return 32
case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e
case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e
case 134217728:return 134217728
case 268435456:return 268435456
case 536870912:return 536870912
case 1073741824:return 1073741824
default:return e}}function te(e,t){var n,r,i,l,o,u=e.pendingLanes
if(0===u)return 0
if(n=0,r=e.suspendedLanes,i=e.pingedLanes,0!=(l=268435455&u)?0!==(o=l&~r)?n=ee(o):0!==(i&=l)&&(n=ee(i)):0!==(l=u&~r)?n=ee(l):0!==i&&(n=ee(i)),0===n)return 0
if(0!==t&&t!==n&&0===(t&r)&&((r=n&-n)>=(i=t&-t)||16===r&&4194240&i))return t
if(4&n&&(n|=16&u),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;t>0;)r=1<<(u=31-io(t)),n|=e[u],t&=~r
return n}function ne(e,t){switch(e){case 1:case 2:case 4:return t+250
case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3
default:return-1}}function re(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ie(){var e=uo
return!(4194240&(uo<<=1))&&(uo=64),e}function le(e){for(var t=[],n=0;31>n;n++)t.push(e)
return t}function oe(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-io(t)]=n}function ue(e,t){var n,r,i=e.entangledLanes|=t
for(e=e.entanglements;i;)(r=1<<(n=31-io(i)))&t|e[n]&t&&(e[n]|=t),i&=~r}function ae(e){return(e&=-e)>1?e>4?268435455&e?16:536870912:4:1}function se(e,t){switch(e){case"focusin":case"focusout":bo=null
break
case"dragenter":case"dragleave":go=null
break
case"mouseover":case"mouseout":xo=null
break
case"pointerover":case"pointerout":wo.delete(t.pointerId)
break
case"gotpointercapture":case"lostpointercapture":ko.delete(t.pointerId)}}function ce(e,t,n,r,i,l){return null===e||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},null!==t&&null!==(t=gt(t))&&fo(t),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function de(e){var t,n=bt(e.target)
if(null!==n&&null!==(t=Z(n)))if(13===(n=t.tag)){if(null!==(n=G(t)))return e.blockedOn=n,void mo(e.priority,function(){po(t)})}else if(3===n&&t.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===t.tag?t.stateNode.containerInfo:null)
e.blockedOn=null}function fe(e){var t,n,r
if(null!==e.blockedOn)return!1
for(t=e.targetContainers;t.length>0;){if(null!==(n=xe(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent)))return null!==(t=gt(n))&&fo(t),e.blockedOn=n,!1
r=new(n=e.nativeEvent).constructor(n.type,n),Dl=r,n.target.dispatchEvent(r),Dl=null,t.shift()}return!0}function pe(e,t,n){fe(e)&&n.delete(t)}function he(){vo=!1,null!==bo&&fe(bo)&&(bo=null),null!==go&&fe(go)&&(go=null),null!==xo&&fe(xo)&&(xo=null),wo.forEach(pe),ko.forEach(pe)}function me(e,t){e.blockedOn===t&&(e.blockedOn=null,vo||(vo=!0,nc.unstable_scheduleCallback(nc.unstable_NormalPriority,he)))}function ve(e){function t(t){return me(t,e)}var n,r
if(yo.length>0)for(me(yo[0],e),n=1;n<yo.length;n++)(r=yo[n]).blockedOn===e&&(r.blockedOn=null)
for(null!==bo&&me(bo,e),null!==go&&me(go,e),null!==xo&&me(xo,e),wo.forEach(t),ko.forEach(t),n=0;n<_o.length;n++)(r=_o[n]).blockedOn===e&&(r.blockedOn=null)
for(;_o.length>0&&null===(n=_o[0]).blockedOn;)de(n),null===n.blockedOn&&_o.shift()}function ye(e,t,n,r){var i=so,l=Mo.transition
Mo.transition=null
try{so=1,ge(e,t,n,r)}finally{so=i,Mo.transition=l}}function be(e,t,n,r){var i=so,l=Mo.transition
Mo.transition=null
try{so=4,ge(e,t,n,r)}finally{so=i,Mo.transition=l}}function ge(e,t,n,r){var i,l
if(Eo)if(null===(i=xe(e,t,n,r)))lt(e,t,r,Co,n),se(e,r)
else if(function(e,t,n,r,i){switch(t){case"focusin":return bo=ce(bo,e,t,n,r,i),!0
case"dragenter":return go=ce(go,e,t,n,r,i),!0
case"mouseover":return xo=ce(xo,e,t,n,r,i),!0
case"pointerover":var l=i.pointerId
return wo.set(l,ce(wo.get(l)||null,e,t,n,r,i)),!0
case"gotpointercapture":return l=i.pointerId,ko.set(l,ce(ko.get(l)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation()
else if(se(e,r),4&t&&No.indexOf(e)>-1){for(;null!==i&&(null!==(l=gt(i))&&co(l),null===(l=xe(e,t,n,r))&&lt(e,t,r,Co,n),l!==i);)i=l
null!==i&&r.stopPropagation()}else lt(e,t,r,null,n)}function xe(e,t,n,r){if(Co=null,null!==(e=bt(e=F(r))))if(null===(t=Z(e)))e=null
else if(13===(n=t.tag)){if(null!==(e=G(t)))return e
e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null
e=null}else t!==e&&(e=null)
return Co=e,null}function we(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1
case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4
case"message":switch(Gl()){case Jl:return 1
case ql:return 4
case Ql:case eo:return 16
case to:return 536870912
default:return 16}default:return 16}}function ke(){var e,t,n,r,i,l,o
if(Po)return Po
n=(t=To).length,l=(i="value"in So?So.value:So.textContent).length
for(e=0;n>e&&t[e]===i[e];e++);for(o=n-e,r=1;o>=r&&t[n-r]===i[l-r];r++);return Po=i.slice(e,r>1?1-r:void 0)}function _e(e){var t=e.keyCode
return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32>e&&13!==e?0:e}function Ne(){return!0}function Me(){return!1}function Ee(e){function t(t,n,r,i,l){for(var o in this.I=t,this.O=r,this.type=n,this.nativeEvent=i,this.target=l,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o])
return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?Ne:Me,this.isPropagationStopped=Me,this}return Nl(t.prototype,{preventDefault(){this.defaultPrevented=!0
var e=this.nativeEvent
e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Ne)},stopPropagation(){var e=this.nativeEvent
e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Ne)},persist(){},isPersistent:Ne}),t}function Ce(e){var t=this.nativeEvent
return t.getModifierState?t.getModifierState(e):!!(e=qo[e])&&!!t[e]}function Se(){return Ce}function Te(e,t){switch(e){case"keyup":return-1!==su.indexOf(t.keyCode)
case"keydown":return 229!==t.keyCode
case"keypress":case"mousedown":case"focusout":return!0
default:return!1}}function Pe(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}function Ie(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return"input"===t?!!yu[e.type]:"textarea"===t}function Oe(e,t,n,r){V(r),(t=ut(t,"onChange")).length>0&&(n=new Oo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}function De(e){et(e,0)}function ze(e){if(b(xt(e)))return e}function Ae(e,t){if("change"===e)return t}function je(){bu&&(bu.detachEvent("onpropertychange",Re),gu=bu=null)}function Re(e){if("value"===e.propertyName&&ze(gu)){var t=[]
Oe(t,gu,e,F(e)),X(De,t)}}function Fe(e,t,n){"focusin"===e?(je(),gu=n,(bu=t).attachEvent("onpropertychange",Re)):"focusout"===e&&je()}function Le(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return ze(gu)}function Ve(e,t){if("click"===e)return ze(t)}function Be(e,t){if("input"===e||"change"===e)return ze(t)}function Ue(e,t){var n,r,i
if(Nu(e,t))return!0
if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1
if(n=Object.keys(e),r=Object.keys(t),n.length!==r.length)return!1
for(r=0;r<n.length;r++)if(i=n[r],!oc.call(t,i)||!Nu(e[i],t[i]))return!1
return!0}function $e(e){for(;e&&e.firstChild;)e=e.firstChild
return e}function Xe(e,t){var n,r=$e(e)
for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,t>=e&&n>=t)return{node:r,offset:t-e}
e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling
break e}r=r.parentNode}r=void 0}r=$e(r)}}function He(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?He(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function We(){var e,t,n
for(e=window,t=g();t instanceof e.HTMLIFrameElement;){try{n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break
t=g((e=t.contentWindow).document)}return t}function Ye(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Ke(e){var t,n,r,i=We(),l=e.focusedElem,o=e.selectionRange
if(i!==l&&l&&l.ownerDocument&&He(l.ownerDocument.documentElement,l)){null!==o&&Ye(l)&&(i=o.start,void 0===(e=o.end)&&(e=i),"selectionStart"in l?(l.selectionStart=i,l.selectionEnd=Math.min(e,l.value.length)):(e=(i=l.ownerDocument||document)&&i.defaultView||window).getSelection&&(e=e.getSelection(),t=l.textContent.length,n=Math.min(o.start,t),o=void 0===o.end?n:Math.min(o.end,t),!e.extend&&n>o&&(t=o,o=n,n=t),t=Xe(l,n),r=Xe(l,o),t&&r&&(1!==e.rangeCount||e.anchorNode!==t.node||e.anchorOffset!==t.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&((i=i.createRange()).setStart(t.node,t.offset),e.removeAllRanges(),n>o?(e.addRange(i),e.extend(r.node,r.offset)):(i.setEnd(r.node,r.offset),e.addRange(i))))),i=[]
for(e=l;e=e.parentNode;)1===e.nodeType&&i.push({element:e,left:e.scrollLeft,top:e.scrollTop})
for("function"==typeof l.focus&&l.focus(),l=0;l<i.length;l++)(e=i[l]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}function Ze(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument
Tu||null==Eu||Eu!==g(r)||(r="selectionStart"in(r=Eu)&&Ye(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Su&&Ue(Su,r)||(Su=r,(r=ut(Cu,"onSelect")).length>0&&(t=new Oo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Eu)))}function Ge(e,t){var n={}
return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}function Je(e){if(Iu[e])return Iu[e]
if(!Pu[e])return e
var t,n=Pu[e]
for(t in n)if(n.hasOwnProperty(t)&&t in Ou)return Iu[e]=n[t]
return e}function qe(e,t){Ru.set(e,t),i(t,[e])}function Qe(e,t,n){var r=e.type||"unknown-event"
e.currentTarget=n,K(r,t,void 0,e),e.currentTarget=null}function et(e,t){var n,r,i,l,o,u,a,s
for(t=!!(4&t),n=0;n<e.length;n++){i=(r=e[n]).event,r=r.listeners
e:if(l=void 0,t)for(o=r.length-1;o>=0;o--){if(a=(u=r[o]).instance,s=u.currentTarget,u=u.listener,a!==l&&i.isPropagationStopped())break e
Qe(i,u,s),l=a}else for(o=0;o<r.length;o++){if(a=(u=r[o]).instance,s=u.currentTarget,u=u.listener,a!==l&&i.isPropagationStopped())break e
Qe(i,u,s),l=a}}if(Ul)throw e=$l,Ul=!1,$l=null,e}function tt(e,t){var n,r=t[na]
void 0===r&&(r=t[na]=new Set),n=e+"__bubble",r.has(n)||(it(t,e,2,!1),r.add(n))}function nt(e,t,n){var r=0
t&&(r|=4),it(n,e,r,t)}function rt(e){if(!e[$u]){e[$u]=!0,rc.forEach(function(t){"selectionchange"!==t&&(Uu.has(t)||nt(t,!1,e),nt(t,!0,e))})
var t=9===e.nodeType?e:e.ownerDocument
null===t||t[$u]||(t[$u]=!0,nt("selectionchange",!1,t))}}function it(e,t,n,r){switch(we(t)){case 1:var i=ye
break
case 4:i=be
break
default:i=ge}n=i.bind(null,t,n,e),i=void 0,!Fl||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function lt(e,t,n,r,i){var l,o,u,a=r
if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return
if(3===(l=r.tag)||4===l){if((o=r.stateNode.containerInfo)===i||8===o.nodeType&&o.parentNode===i)break
if(4===l)for(l=r.return;null!==l;){if((3===(u=l.tag)||4===u)&&((u=l.stateNode.containerInfo)===i||8===u.nodeType&&u.parentNode===i))return
l=l.return}for(;null!==o;){if(null===(l=bt(o)))return
if(5===(u=l.tag)||6===u){r=a=l
continue e}o=o.parentNode}}r=r.return}X(function(){var r,i,l,o,u,s,c,d,f,p,h,m,v,y=a,b=F(n),g=[]
e:if(void 0!==(r=Ru.get(e))){switch(i=Oo,l=e,e){case"keypress":if(0===_e(n))break e
case"keydown":case"keyup":i=eu
break
case"focusin":l="focus",i=$o
break
case"focusout":l="blur",i=$o
break
case"beforeblur":case"afterblur":i=$o
break
case"click":if(2===n.button)break e
case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":i=Lo
break
case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":i=Bo
break
case"touchcancel":case"touchend":case"touchmove":case"touchstart":i=iu
break
case Du:case zu:case Au:i=Ho
break
case ju:i=ou
break
case"scroll":i=zo
break
case"wheel":i=au
break
case"copy":case"cut":case"paste":i=Yo
break
case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":i=nu}for(u=!(o=!!(4&t))&&"scroll"===e,s=o?null!==r?r+"Capture":null:r,o=[],c=y;null!==c&&(f=(d=c).stateNode,5===d.tag&&null!==f&&(d=f,null!==s&&null!=(f=H(c,s))&&o.push(ot(c,f,d))),!u);)c=c.return
o.length>0&&(r=new i(r,l,null,n,b),g.push({event:r,listeners:o}))}if(!(7&t)){if(i="mouseout"===e||"pointerout"===e,(!(r="mouseover"===e||"pointerover"===e)||n===Dl||!(l=n.relatedTarget||n.fromElement)||!bt(l)&&!l[ta])&&(i||r)&&(r=b.window===b?b:(r=b.ownerDocument)?r.defaultView||r.parentWindow:window,i?(i=y,null!==(l=(l=n.relatedTarget||n.toElement)?bt(l):null)&&(l!==(u=Z(l))||5!==l.tag&&6!==l.tag)&&(l=null)):(i=null,l=y),i!==l)){if(o=Lo,f="onMouseLeave",s="onMouseEnter",c="mouse","pointerout"!==e&&"pointerover"!==e||(o=nu,f="onPointerLeave",s="onPointerEnter",c="pointer"),u=null==i?r:xt(i),d=null==l?r:xt(l),(r=new o(f,c+"leave",i,n,b)).target=u,r.relatedTarget=d,f=null,bt(b)===y&&((o=new o(s,c+"enter",l,n,b)).target=d,o.relatedTarget=u,f=o),u=f,i&&l)e:{for(s=l,c=0,d=o=i;d;d=at(d))c++
for(d=0,f=s;f;f=at(f))d++
for(;c-d>0;)o=at(o),c--
for(;d-c>0;)s=at(s),d--
for(;c--;){if(o===s||null!==s&&o===s.alternate)break e
o=at(o),s=at(s)}o=null}else o=null
null!==i&&st(g,r,i,o,!1),null!==l&&null!==u&&st(g,u,l,o,!0)}switch("select"===(i=(r=y?xt(y):window).nodeName&&r.nodeName.toLowerCase())||"input"===i&&"file"===r.type?p=Ae:Ie(r)?xu?p=Be:(p=Le,h=Fe):(i=r.nodeName)&&"input"===i.toLowerCase()&&("checkbox"===r.type||"radio"===r.type)&&(p=Ve),p&&(p=p(e,y))?Oe(g,p,n,b):(h&&h(e,r,y),"focusout"===e&&(h=r.T)&&h.controlled&&"number"===r.type&&M(r,"number",r.value)),h=y?xt(y):window,e){case"focusin":(Ie(h)||"true"===h.contentEditable)&&(Eu=h,Cu=y,Su=null)
break
case"focusout":Su=Cu=Eu=null
break
case"mousedown":Tu=!0
break
case"contextmenu":case"mouseup":case"dragend":Tu=!1,Ze(g,n,b)
break
case"selectionchange":if(Mu)break
case"keydown":case"keyup":Ze(g,n,b)}if(cu)e:{switch(e){case"compositionstart":v="onCompositionStart"
break e
case"compositionend":v="onCompositionEnd"
break e
case"compositionupdate":v="onCompositionUpdate"
break e}v=void 0}else vu?Te(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart")
v&&(pu&&"ko"!==n.locale&&(vu||"onCompositionStart"!==v?"onCompositionEnd"===v&&vu&&(m=ke()):(To="value"in(So=b)?So.value:So.textContent,vu=!0)),(h=ut(y,v)).length>0&&(v=new Zo(v,e,null,n,b),g.push({event:v,listeners:h}),(m||null!==(m=Pe(n)))&&(v.data=m))),(m=fu?function(e,t){switch(e){case"compositionend":return Pe(t)
case"keypress":return 32!==t.which?null:(mu=!0,hu)
case"textInput":return(e=t.data)===hu&&mu?null:e
default:return null}}(e,n):function(e,t){if(vu)return"compositionend"===e||!cu&&Te(e,t)?(e=ke(),Po=To=So=null,vu=!1,e):null
switch(e){case"paste":default:return null
case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&t.char.length>1)return t.char
if(t.which)return String.fromCharCode(t.which)}return null
case"compositionend":return pu&&"ko"!==t.locale?null:t.data}}(e,n))&&(y=ut(y,"onBeforeInput")).length>0&&(b=new Zo("onBeforeInput","beforeinput",null,n,b),g.push({event:b,listeners:y}),b.data=m)}et(g,t)})}function ot(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ut(e,t){var n,r,i,l
for(n=t+"Capture",r=[];null!==e;)l=(i=e).stateNode,5===i.tag&&null!==l&&(i=l,null!=(l=H(e,n))&&r.unshift(ot(e,l,i)),null!=(l=H(e,t))&&r.push(ot(e,l,i))),e=e.return
return r}function at(e){if(null===e)return null
do{e=e.return}while(e&&5!==e.tag)
return e||null}function st(e,t,n,r,i){var l,o,u,a,s
for(l=t.I,o=[];null!==n&&n!==r&&(a=(u=n).alternate,s=u.stateNode,null===a||a!==r);)5===u.tag&&null!==s&&(u=s,i?null!=(a=H(n,l))&&o.unshift(ot(n,a,u)):i||null!=(a=H(n,l))&&o.push(ot(n,a,u))),n=n.return
0!==o.length&&e.push({event:t,listeners:o})}function ct(e){return("string"==typeof e?e:""+e).replace(Xu,"\n").replace(Hu,"")}function dt(e,t,n){if(t=ct(t),ct(e)!==t&&n)throw Error(r(425))}function ft(){}function pt(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.P}function ht(e){setTimeout(function(){throw e})}function mt(e,t){var n,r=t,i=0
do{if(n=r.nextSibling,e.removeChild(r),n&&8===n.nodeType)if("/$"===(r=n.data)){if(0===i)return e.removeChild(n),void ve(t)
i--}else"$"!==r&&"$?"!==r&&"$!"!==r||i++
r=n}while(r)
ve(t)}function vt(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType
if(1===t||3===t)break
if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break
if("/$"===t)return null}}return e}function yt(e){var t,n
for(e=e.previousSibling,t=0;e;){if(8===e.nodeType)if("$"===(n=e.data)||"$!"===n||"$?"===n){if(0===t)return e
t--}else"/$"===n&&t++
e=e.previousSibling}return null}function bt(e){var t,n=e[Qu]
if(n)return n
for(t=e.parentNode;t;){if(n=t[ta]||t[Qu]){if(t=n.alternate,null!==n.child||null!==t&&null!==t.child)for(e=yt(e);null!==e;){if(t=e[Qu])return t
e=yt(e)}return n}t=(e=t).parentNode}return null}function gt(e){return!(e=e[Qu]||e[ta])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xt(e){if(5===e.tag||6===e.tag)return e.stateNode
throw Error(r(33))}function wt(e){return e[ea]||null}function kt(e){return{current:e}}function _t(e){0>oa||(e.current=la[oa],la[oa]=null,oa--)}function Nt(e,t){oa++,la[oa]=e.current,e.current=t}function Mt(e,t){var n,r,i,l=e.type.contextTypes
if(!l)return ua
if((n=e.stateNode)&&n.D===t)return n.A
for(i in r={},l)r[i]=t[i]
return n&&((e=e.stateNode).D=t,e.A=r),r}function Et(e){return null!=e.childContextTypes}function Ct(){_t(sa),_t(aa)}function St(e,t,n){if(aa.current!==ua)throw Error(r(168))
Nt(aa,t),Nt(sa,n)}function Tt(e,t,n){var i,l=e.stateNode
if(t=t.childContextTypes,"function"!=typeof l.getChildContext)return n
for(i in l=l.getChildContext())if(!(i in t))throw Error(r(108,h(e)||"Unknown",i))
return Nl({},n,l)}function Pt(e){return e=(e=e.stateNode)&&e.j||ua,ca=aa.current,Nt(aa,e),Nt(sa,sa.current),!0}function It(e,t,n){var i=e.stateNode
if(!i)throw Error(r(169))
n?(e=Tt(e,t,ca),i.j=e,_t(sa),_t(aa),Nt(aa,e)):_t(sa),Nt(sa,n)}function Ot(e){null===da?da=[e]:da.push(e)}function Dt(){var e,t,n,r
if(!pa&&null!==da){pa=!0,e=0,t=so
try{for(n=da,so=1;e<n.length;e++){r=n[e]
do{r=r(!0)}while(null!==r)}da=null,fa=!1}catch(t){throw null!==da&&(da=da.slice(e+1)),Hl(Jl,Dt),t}finally{so=t,pa=!1}}return null}function zt(e,t){ha[ma++]=ya,ha[ma++]=va,va=e,ya=t}function At(e,t,n){var r,i,l,o
ba[ga++]=wa,ba[ga++]=ka,ba[ga++]=xa,xa=e,r=wa,e=ka,r&=~(1<<(i=32-io(r)-1)),n+=1,(l=32-io(t)+i)>30?(l=(r&(1<<(o=i-i%5))-1).toString(32),r>>=o,i-=o,wa=1<<32-io(t)+i|n<<i|r,ka=l+e):(wa=1<<l|n<<i|r,ka=e)}function jt(e){null!==e.return&&(zt(e,1),At(e,1,0))}function Rt(e){for(;e===va;)va=ha[--ma],ha[ma]=null,ya=ha[--ma],ha[ma]=null
for(;e===xa;)xa=ba[--ga],ba[ga]=null,ka=ba[--ga],ba[ga]=null,wa=ba[--ga],ba[ga]=null}function Ft(e,t){var n=Vi(5,null,null,0)
n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function Lt(e,t){switch(e.tag){case 5:var n=e.type
return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,_a=e,Na=vt(t.firstChild),!0)
case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,_a=e,Na=null,!0)
case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==xa?{id:wa,overflow:ka}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Vi(18,null,null,0)).stateNode=t,n.return=e,e.child=n,_a=e,Na=null,!0)
default:return!1}}function Vt(e){return!(!(1&e.mode)||128&e.flags)}function Bt(e){var t,n,i
if(Ma)if(t=Na){if(n=t,!Lt(e,t)){if(Vt(e))throw Error(r(418))
t=vt(n.nextSibling),i=_a,t&&Lt(e,t)?Ft(i,n):(e.flags=-4097&e.flags|2,Ma=!1,_a=e)}}else{if(Vt(e))throw Error(r(418))
e.flags=-4097&e.flags|2,Ma=!1,_a=e}}function Ut(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return
_a=e}function $t(e){var t,n
if(e!==_a)return!1
if(!Ma)return Ut(e),Ma=!0,!1
if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!pt(e.type,e.memoizedProps)),t&&(t=Na)){if(Vt(e))throw Xt(),Error(r(418))
for(;t;)Ft(e,t),t=vt(t.nextSibling)}if(Ut(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(r(317))
e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType)if("/$"===(n=e.data)){if(0===t){Na=vt(e.nextSibling)
break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++
e=e.nextSibling}Na=null}}else Na=_a?vt(e.stateNode.nextSibling):null
return!0}function Xt(){for(var e=Na;e;)e=vt(e.nextSibling)}function Ht(){Na=_a=null,Ma=!1}function Wt(e){null===Ea?Ea=[e]:Ea.push(e)}function Yt(e,t,n){var i,l,o
if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n.t){if(n=n.t){if(1!==n.tag)throw Error(r(309))
i=n.stateNode}if(!i)throw Error(r(147,e))
return l=i,o=""+e,null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref.R===o?t.ref:(t=function(e){var t=l.refs
null===e?delete t[o]:t[o]=e},t.R=o,t)}if("string"!=typeof e)throw Error(r(284))
if(!n.t)throw Error(r(290,e))}return e}function Kt(e,t){throw e={}.toString.call(t),Error(r(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zt(e){return(0,e.C)(e.M)}function Gt(e){function t(t,n){if(e){var r=t.deletions
null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null
for(;null!==r;)t(n,r),r=r.sibling
return null}function i(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling
return e}function l(e,t){return(e=Ui(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?n>(r=r.index)?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function u(t){return e&&null===t.alternate&&(t.flags|=2),t}function a(e,t,n,r){return null===t||6!==t.tag?((t=Wi(n,e.mode,r)).return=e,t):((t=l(t,n)).return=e,t)}function c(e,t,n,r){var i=n.type
return i===fl?f(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"==typeof i&&null!==i&&i.$$typeof===wl&&Zt(i)===t.type)?((r=l(t,n.props)).ref=Yt(e,t,n),r.return=e,r):((r=$i(n.type,n.key,n.props,null,e.mode,r)).ref=Yt(e,t,n),r.return=e,r)}function d(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Yi(n,e.mode,r)).return=e,t):((t=l(t,n.children||[])).return=e,t)}function f(e,t,n,r,i){return null===t||7!==t.tag?((t=Xi(n,e.mode,r,i)).return=e,t):((t=l(t,n)).return=e,t)}function p(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Wi(""+t,e.mode,n)).return=e,t
if("object"==typeof t&&null!==t){switch(t.$$typeof){case cl:return(n=$i(t.type,t.key,t.props,null,e.mode,n)).ref=Yt(e,null,t),n.return=e,n
case dl:return(t=Yi(t,e.mode,n)).return=e,t
case wl:return p(e,(0,t.C)(t.M),n)}if(Cl(t)||s(t))return(t=Xi(t,e.mode,n,null)).return=e,t
Kt(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null
if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:a(e,t,""+n,r)
if("object"==typeof n&&null!==n){switch(n.$$typeof){case cl:return n.key===i?c(e,t,n,r):null
case dl:return n.key===i?d(e,t,n,r):null
case wl:return h(e,t,(i=n.C)(n.M),r)}if(Cl(n)||s(n))return null!==i?null:f(e,t,n,r,null)
Kt(e,n)}return null}function m(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return a(t,e=e.get(n)||null,""+r,i)
if("object"==typeof r&&null!==r){switch(r.$$typeof){case cl:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i)
case dl:return d(t,e=e.get(null===r.key?n:r.key)||null,r,i)
case wl:return m(e,t,n,(0,r.C)(r.M),i)}if(Cl(r)||s(r))return f(t,e=e.get(n)||null,r,i,null)
Kt(t,r)}return null}function v(r,l,u,a){var s,c,d,f,v,y
for(s=null,c=null,d=l,f=l=0,v=null;null!==d&&f<u.length;f++){if(d.index>f?(v=d,d=null):v=d.sibling,null===(y=h(r,d,u[f],a))){null===d&&(d=v)
break}e&&d&&null===y.alternate&&t(r,d),l=o(y,l,f),null===c?s=y:c.sibling=y,c=y,d=v}if(f===u.length)return n(r,d),Ma&&zt(r,f),s
if(null===d){for(;f<u.length;f++)null!==(d=p(r,u[f],a))&&(l=o(d,l,f),null===c?s=d:c.sibling=d,c=d)
return Ma&&zt(r,f),s}for(d=i(r,d);f<u.length;f++)null!==(v=m(d,r,f,u[f],a))&&(e&&null!==v.alternate&&d.delete(null===v.key?f:v.key),l=o(v,l,f),null===c?s=v:c.sibling=v,c=v)
return e&&d.forEach(function(e){return t(r,e)}),Ma&&zt(r,f),s}function y(l,u,a,c){var d,f,v,y,b,g,x=s(a)
if("function"!=typeof x)throw Error(r(150))
if(null==(a=x.call(a)))throw Error(r(151))
for(d=x=null,f=u,v=u=0,y=null,b=a.next();null!==f&&!b.done;v++,b=a.next()){if(f.index>v?(y=f,f=null):y=f.sibling,null===(g=h(l,f,b.value,c))){null===f&&(f=y)
break}e&&f&&null===g.alternate&&t(l,f),u=o(g,u,v),null===d?x=g:d.sibling=g,d=g,f=y}if(b.done)return n(l,f),Ma&&zt(l,v),x
if(null===f){for(;!b.done;v++,b=a.next())null!==(b=p(l,b.value,c))&&(u=o(b,u,v),null===d?x=b:d.sibling=b,d=b)
return Ma&&zt(l,v),x}for(f=i(l,f);!b.done;v++,b=a.next())null!==(b=m(f,l,v,b.value,c))&&(e&&null!==b.alternate&&f.delete(null===b.key?v:b.key),u=o(b,u,v),null===d?x=b:d.sibling=b,d=b)
return e&&f.forEach(function(e){return t(l,e)}),Ma&&zt(l,v),x}return function e(r,i,o,a){if("object"==typeof o&&null!==o&&o.type===fl&&null===o.key&&(o=o.props.children),"object"==typeof o&&null!==o){switch(o.$$typeof){case cl:e:{for(var c=o.key,d=i;null!==d;){if(d.key===c){if((c=o.type)===fl){if(7===d.tag){n(r,d.sibling),(i=l(d,o.props.children)).return=r,r=i
break e}}else if(d.elementType===c||"object"==typeof c&&null!==c&&c.$$typeof===wl&&Zt(c)===d.type){n(r,d.sibling),(i=l(d,o.props)).ref=Yt(r,d,o),i.return=r,r=i
break e}n(r,d)
break}t(r,d),d=d.sibling}o.type===fl?((i=Xi(o.props.children,r.mode,a,o.key)).return=r,r=i):((a=$i(o.type,o.key,o.props,null,r.mode,a)).ref=Yt(r,i,o),a.return=r,r=a)}return u(r)
case dl:e:{for(d=o.key;null!==i;){if(i.key===d){if(4===i.tag&&i.stateNode.containerInfo===o.containerInfo&&i.stateNode.implementation===o.implementation){n(r,i.sibling),(i=l(i,o.children||[])).return=r,r=i
break e}n(r,i)
break}t(r,i),i=i.sibling}(i=Yi(o,r.mode,a)).return=r,r=i}return u(r)
case wl:return e(r,i,(d=o.C)(o.M),a)}if(Cl(o))return v(r,i,o,a)
if(s(o))return y(r,i,o,a)
Kt(r,o)}return"string"==typeof o&&""!==o||"number"==typeof o?(o=""+o,null!==i&&6===i.tag?(n(r,i.sibling),(i=l(i,o)).return=r,r=i):(n(r,i),(i=Wi(o,r.mode,a)).return=r,r=i),u(r)):n(r,i)}}function Jt(){Da=Oa=Ia=null}function qt(e){var t=Pa.current
_t(Pa),e.h=t}function Qt(e,t,n){for(;null!==e;){var r=e.alternate
if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break
e=e.return}}function en(e,t){Ia=e,Da=Oa=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(ls=!0),e.firstContext=null)}function tn(e){var t=e.h
if(Da!==e)if(e={context:e,memoizedValue:t,next:null},null===Oa){if(null===Ia)throw Error(r(308))
Oa=e,Ia.dependencies={lanes:0,firstContext:e}}else Oa=Oa.next=e
return t}function nn(e){null===za?za=[e]:za.push(e)}function rn(e,t,n,r){var i=t.interleaved
return null===i?(n.next=n,nn(t)):(n.next=i.next,i.next=n),t.interleaved=n,ln(e,r)}function ln(e,t){e.lanes|=t
var n=e.alternate
for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return
return 3===n.tag?n.stateNode:null}function on(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function un(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function an(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sn(e,t,n){var r,i=e.updateQueue
return null===i?null:(i=i.shared,2&ks?(null===(r=i.pending)?t.next=t:(t.next=r.next,r.next=t),i.pending=t,ln(e,n)):(null===(r=i.interleaved)?(t.next=t,nn(i)):(t.next=r.next,r.next=t),i.interleaved=t,ln(e,n)))}function cn(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var r=t.lanes
n|=r&=e.pendingLanes,t.lanes=n,ue(e,n)}}function dn(e,t){var n,r,i,l=e.updateQueue,o=e.alternate
if(null!==o&&l===(o=o.updateQueue)){if(n=null,r=null,null!==(l=l.firstBaseUpdate)){do{i={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===r?n=r=i:r=r.next=i,l=l.next}while(null!==l)
null===r?n=r=t:r=r.next=t}else n=r=t
return l={baseState:o.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:o.shared,effects:o.effects},void(e.updateQueue=l)}null===(e=l.lastBaseUpdate)?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}function fn(e,t,n,r){var i,l,o,u,a,s,c,d,f,p,h,m=e.updateQueue
if(Aa=!1,i=m.firstBaseUpdate,l=m.lastBaseUpdate,null!==(o=m.shared.pending)&&(m.shared.pending=null,a=(u=o).next,u.next=null,null===l?i=a:l.next=a,l=u,null!==(s=e.alternate)&&(o=(s=s.updateQueue).lastBaseUpdate)!==l&&(null===o?s.firstBaseUpdate=a:o.next=a,s.lastBaseUpdate=u)),null!==i){for(c=m.baseState,l=0,s=a=u=null,o=i;;){if(d=o.lane,f=o.eventTime,(r&d)===d){null!==s&&(s=s.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null})
e:switch(p=e,d=t,f=n,(h=o).tag){case 1:if("function"==typeof(p=h.payload)){c=p.call(f,c,d)
break e}c=p
break e
case 3:p.flags=-65537&p.flags|128
case 0:if(null==(d="function"==typeof(p=h.payload)?p.call(f,c,d):p))break e
c=Nl({},c,d)
break e
case 2:Aa=!0}null!==o.callback&&0!==o.lane&&(e.flags|=64,null===(d=m.effects)?m.effects=[o]:d.push(o))}else f={eventTime:f,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===s?(a=s=f,u=c):s=s.next=f,l|=d
if(null===(o=o.next)){if(null===(o=m.shared.pending))break
o=(d=o).next,d.next=null,m.lastBaseUpdate=d,m.shared.pending=null}}if(null===s&&(u=c),m.baseState=u,m.firstBaseUpdate=a,m.lastBaseUpdate=s,null!==(t=m.shared.interleaved)){m=t
do{l|=m.lane,m=m.next}while(m!==t)}else null===i&&(m.shared.lanes=0)
Ps|=l,e.lanes=l,e.memoizedState=c}}function pn(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var i=e[t],l=i.callback
if(null!==l){if(i.callback=null,i=n,"function"!=typeof l)throw Error(r(191,l))
l.call(i)}}}function hn(e){if(e===ja)throw Error(r(174))
return e}function mn(e,t){switch(Nt(La,t),Nt(Fa,e),Nt(Ra,ja),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:O(null,"")
break
default:t=O(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}_t(Ra),Nt(Ra,t)}function vn(){_t(Ra),_t(Fa),_t(La)}function yn(e){var t,n
hn(La.current),(t=hn(Ra.current))!==(n=O(t,e.type))&&(Nt(Fa,e),Nt(Ra,n))}function bn(e){Fa.current===e&&(_t(Ra),_t(Fa))}function gn(e){var t,n
for(t=e;null!==t;){if(13===t.tag){if(null!==(n=t.memoizedState)&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child
continue}if(t===e)break
for(;null===t.sibling;){if(null===t.return||t.return===e)return null
t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function xn(){for(var e=0;e<Ba.length;e++)Ba[e].F=null
Ba.length=0}function wn(){throw Error(r(321))}function kn(e,t){if(null===t)return!1
for(var n=0;n<t.length&&n<e.length;n++)if(!Nu(e[n],t[n]))return!1
return!0}function _n(e,t,n,i,l,o){if(Xa=o,Ha=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ua.current=null===e||null===e.memoizedState?Qa:es,e=n(i,l),Za){o=0
do{if(Za=!1,Ga=0,o>=25)throw Error(r(301))
o+=1,Ya=Wa=null,t.updateQueue=null,Ua.current=ts,e=n(i,l)}while(Za)}if(Ua.current=qa,t=null!==Wa&&null!==Wa.next,Xa=0,Ya=Wa=Ha=null,Ka=!1,t)throw Error(r(300))
return e}function Nn(){var e=0!==Ga
return Ga=0,e}function Mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null}
return null===Ya?Ha.memoizedState=Ya=e:Ya=Ya.next=e,Ya}function En(){var e,t
if(e=null===Wa?null!==(e=Ha.alternate)?e.memoizedState:null:Wa.next,null!==(t=null===Ya?Ha.memoizedState:Ya.next))Ya=t,Wa=e
else{if(null===e)throw Error(r(310))
e={memoizedState:(Wa=e).memoizedState,baseState:Wa.baseState,baseQueue:Wa.baseQueue,queue:Wa.queue,next:null},null===Ya?Ha.memoizedState=Ya=e:Ya=Ya.next=e}return Ya}function Cn(e,t){return"function"==typeof t?t(e):t}function Sn(e){var t,n,i,l,o,u,a,s,c,d=En(),f=d.queue
if(null===f)throw Error(r(311))
if(f.lastRenderedReducer=e,n=(t=Wa).baseQueue,null!==(i=f.pending)&&(null!==n&&(l=n.next,n.next=i.next,i.next=l),t.baseQueue=n=i,f.pending=null),null!==n){i=n.next,t=t.baseState,o=l=null,u=null,a=i
do{s=a.lane,(Xa&s)===s?(null!==u&&(u=u.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),t=a.hasEagerState?a.eagerState:e(t,a.action)):(c={lane:s,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null},null===u?(o=u=c,l=t):u=u.next=c,Ha.lanes|=s,Ps|=s),a=a.next}while(null!==a&&a!==i)
null===u?l=t:u.next=o,Nu(t,d.memoizedState)||(ls=!0),d.memoizedState=t,d.baseState=l,d.baseQueue=u,f.lastRenderedState=t}if(null!==(e=f.interleaved)){n=e
do{i=n.lane,Ha.lanes|=i,Ps|=i,n=n.next}while(n!==e)}else null===n&&(f.lanes=0)
return[d.memoizedState,f.dispatch]}function Tn(e){var t,n,i,l,o=En(),u=o.queue
if(null===u)throw Error(r(311))
if(u.lastRenderedReducer=e,t=u.dispatch,n=u.pending,i=o.memoizedState,null!==n){u.pending=null,l=n=n.next
do{i=e(i,l.action),l=l.next}while(l!==n)
Nu(i,o.memoizedState)||(ls=!0),o.memoizedState=i,null===o.baseQueue&&(o.baseState=i),u.lastRenderedState=i}return[i,t]}function Pn(){}function In(e,t){var n=Ha,i=En(),l=t(),o=!Nu(i.memoizedState,l)
if(o&&(i.memoizedState=l,ls=!0),i=i.queue,$n(zn.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||null!==Ya&&1&Ya.memoizedState.tag){if(n.flags|=2048,Fn(9,Dn.bind(null,n,i,l,t),void 0,null),null===_s)throw Error(r(349))
30&Xa||On(n,t,l)}return l}function On(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Ha.updateQueue)?(t={lastEffect:null,stores:null},Ha.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Dn(e,t,n,r){t.value=n,t.getSnapshot=r,An(t)&&jn(e)}function zn(e,t,n){return n(function(){An(t)&&jn(e)})}function An(e){var t,n=e.getSnapshot
e=e.value
try{return t=n(),!Nu(e,t)}catch(e){return!0}}function jn(e){var t=ln(e,1)
null!==t&&di(t,e,1,-1)}function Rn(e){var t=Mn()
return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cn,lastRenderedState:e},t.queue=e,e=e.dispatch=tr.bind(null,Ha,e),[t.memoizedState,e]}function Fn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=Ha.updateQueue)?(t={lastEffect:null,stores:null},Ha.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ln(){return En().memoizedState}function Vn(e,t,n,r){var i=Mn()
Ha.flags|=e,i.memoizedState=Fn(1|t,n,void 0,void 0===r?null:r)}function Bn(e,t,n,r){var i,l,o=En()
r=void 0===r?null:r,i=void 0,null!==Wa&&(i=(l=Wa.memoizedState).destroy,null!==r&&kn(r,l.deps))?o.memoizedState=Fn(t,n,i,r):(Ha.flags|=e,o.memoizedState=Fn(1|t,n,i,r))}function Un(e,t){return Vn(8390656,8,e,t)}function $n(e,t){return Bn(2048,8,e,t)}function Xn(e,t){return Bn(4,2,e,t)}function Hn(e,t){return Bn(4,4,e,t)}function Wn(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Yn(e,t,n){return n=null!=n?n.concat([e]):null,Bn(4,4,Wn.bind(null,t,e),n)}function Kn(){}function Zn(e,t){var n,r=En()
return t=void 0===t?null:t,null!==(n=r.memoizedState)&&null!==t&&kn(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Gn(e,t){var n,r=En()
return t=void 0===t?null:t,null!==(n=r.memoizedState)&&null!==t&&kn(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Jn(e,t,n){return 21&Xa?(Nu(n,t)||(n=ie(),Ha.lanes|=n,Ps|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ls=!0),e.memoizedState=n)}function qn(e,t){var n,r=so
so=0!==r&&4>r?r:4,e(!0),n=$a.transition,$a.transition={}
try{e(!1),t()}finally{so=r,$a.transition=n}}function Qn(){return En().memoizedState}function er(e,t,n){var r=ci(e)
n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nr(e)?rr(t,n):null!==(n=rn(e,t,n,r))&&(di(n,e,r,si()),ir(n,t,r))}function tr(e,t,n){var r,i,l,o,u=ci(e),a={lane:u,action:n,hasEagerState:!1,eagerState:null,next:null}
if(nr(e))rr(t,a)
else{if(r=e.alternate,0===e.lanes&&(null===r||0===r.lanes)&&null!==(r=t.lastRenderedReducer))try{if(l=r(i=t.lastRenderedState,n),a.hasEagerState=!0,a.eagerState=l,Nu(l,i))return null===(o=t.interleaved)?(a.next=a,nn(t)):(a.next=o.next,o.next=a),void(t.interleaved=a)}catch(e){}null!==(n=rn(e,t,a,u))&&(di(n,e,u,a=si()),ir(n,t,u))}}function nr(e){var t=e.alternate
return e===Ha||null!==t&&t===Ha}function rr(e,t){Za=Ka=!0
var n=e.pending
null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ir(e,t,n){if(4194240&n){var r=t.lanes
n|=r&=e.pendingLanes,t.lanes=n,ue(e,n)}}function lr(e,t){if(e&&e.defaultProps){for(var n in t=Nl({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n])
return t}return t}function or(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:Nl({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}function ur(e,t,n,r,i,l,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,l,o):!(t.prototype&&t.prototype.isPureReactComponent&&Ue(n,r)&&Ue(i,l))}function ar(e,t,n){var r=!1,i=ua,l=t.contextType
return"object"==typeof l&&null!==l?l=tn(l):(i=Et(t)?ca:aa.current,l=(r=null!=(r=t.contextTypes))?Mt(e,i):ua),t=new t(n,l),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ns,e.stateNode=t,t.L=e,r&&((e=e.stateNode).D=i,e.A=l),t}function sr(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ns.enqueueReplaceState(t,t.state,null)}function cr(e,t,n,r){var i,l=e.stateNode
l.props=n,l.state=e.memoizedState,l.refs={},on(e),"object"==typeof(i=t.contextType)&&null!==i?l.context=tn(i):(i=Et(t)?ca:aa.current,l.context=Mt(e,i)),l.state=e.memoizedState,"function"==typeof(i=t.getDerivedStateFromProps)&&(or(e,t,i,n),l.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof l.getSnapshotBeforeUpdate||"function"!=typeof l.UNSAFE_componentWillMount&&"function"!=typeof l.componentWillMount||(t=l.state,"function"==typeof l.componentWillMount&&l.componentWillMount(),"function"==typeof l.UNSAFE_componentWillMount&&l.UNSAFE_componentWillMount(),t!==l.state&&ns.enqueueReplaceState(l,l.state,null),fn(e,n,l,r),l.state=e.memoizedState),"function"==typeof l.componentDidMount&&(e.flags|=4194308)}function dr(e,t){var n,r,i
try{n="",r=t
do{n+=f(r),r=r.return}while(r)
i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function fr(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function pr(e,t,n){(n=an(-1,n)).tag=3,n.payload={element:null}
var r=t.value
return n.callback=function(){Fs||(Fs=!0,Ls=r)},n}function hr(e,t,n){var r,i,l
return(n=an(-1,n)).tag=3,"function"==typeof(r=e.type.getDerivedStateFromError)&&(i=t.value,n.payload=function(){return r(i)},n.callback=function(){}),null!==(l=e.stateNode)&&"function"==typeof l.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===Vs?Vs=new Set([this]):Vs.add(this))
var e=t.stack
this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function mr(e,t,n){var r,i=e.pingCache
null===i?(i=e.pingCache=new rs,r=new Set,i.set(t,r)):void 0===(r=i.get(t))&&(r=new Set,i.set(t,r)),r.has(n)||(r.add(n),e=zi.bind(null,e,t,n),t.then(e,e))}function vr(e){do{var t
if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e
e=e.return}while(null!==e)
return null}function yr(e,t,n,r,i){return 1&e.mode?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=an(-1,1)).tag=2,sn(n,t,1))),n.lanes|=1),e)}function br(e,t,n,r){t.child=null===e?Ta(t,null,n,r):Sa(t,e.child,n,r)}function gr(e,t,n,r,i){n=n.render
var l=t.ref
return en(t,i),r=_n(e,t,n,r,l,i),n=Nn(),null===e||ls?(Ma&&n&&jt(t),t.flags|=1,br(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rr(e,t,i))}function xr(e,t,n,r,i){var l,o
return null===e?"function"!=typeof(l=n.type)||Bi(l)||void 0!==l.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=$i(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=l,wr(e,t,l,r,i)):(l=e.child,0===(e.lanes&i)&&(o=l.memoizedProps,(n=null!==(n=n.compare)?n:Ue)(o,r)&&e.ref===t.ref)?Rr(e,t,i):(t.flags|=1,(e=Ui(l,r)).ref=t.ref,e.return=t,t.child=e))}function wr(e,t,n,r,i){if(null!==e){var l=e.memoizedProps
if(Ue(l,r)&&e.ref===t.ref){if(ls=!1,t.pendingProps=r=l,0===(e.lanes&i))return t.lanes=e.lanes,Rr(e,t,i)
131072&e.flags&&(ls=!0)}}return Nr(e,t,n,r,i)}function kr(e,t,n){var r=t.pendingProps,i=r.children,l=null!==e?e.memoizedState:null
if("hidden"===r.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==l?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Nt(Cs,Es),Es|=e,null
t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==l?l.baseLanes:n,Nt(Cs,Es),Es|=r}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(Cs,Es),Es|=n
else null!==l?(r=l.baseLanes|n,t.memoizedState=null):r=n,Nt(Cs,Es),Es|=r
return br(e,t,i,n),t.child}function _r(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Nr(e,t,n,r,i){var l=Et(n)?ca:aa.current
return l=Mt(t,l),en(t,i),n=_n(e,t,n,r,l,i),r=Nn(),null===e||ls?(Ma&&r&&jt(t),t.flags|=1,br(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rr(e,t,i))}function Mr(e,t,n,r,i){var l,o,u,a,s,c,d,f,p,h
return Et(n)?(l=!0,Pt(t)):l=!1,en(t,i),null===t.stateNode?(jr(e,t),ar(t,n,r),cr(t,n,r,i),r=!0):null===e?(o=t.stateNode,u=t.memoizedProps,o.props=u,a=o.context,s="object"==typeof(s=n.contextType)&&null!==s?tn(s):Mt(t,s=Et(n)?ca:aa.current),(d="function"==typeof(c=n.getDerivedStateFromProps)||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(u!==r||a!==s)&&sr(t,o,r,s),Aa=!1,f=t.memoizedState,o.state=f,fn(t,r,o,i),a=t.memoizedState,u!==r||f!==a||sa.current||Aa?("function"==typeof c&&(or(t,n,c,r),a=t.memoizedState),(u=Aa||ur(t,n,u,r,f,a,s))?(d||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=s,r=u):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)):(o=t.stateNode,un(e,t),u=t.memoizedProps,s=t.type===t.elementType?u:lr(t.type,u),o.props=s,d=t.pendingProps,f=o.context,a="object"==typeof(a=n.contextType)&&null!==a?tn(a):Mt(t,a=Et(n)?ca:aa.current),(c="function"==typeof(p=n.getDerivedStateFromProps)||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(u!==d||f!==a)&&sr(t,o,r,a),Aa=!1,f=t.memoizedState,o.state=f,fn(t,r,o,i),h=t.memoizedState,u!==d||f!==h||sa.current||Aa?("function"==typeof p&&(or(t,n,p,r),h=t.memoizedState),(s=Aa||ur(t,n,s,r,f,h,a)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,a),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,a)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=a,r=s):("function"!=typeof o.componentDidUpdate||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)),Er(e,t,n,r,l,i)}function Er(e,t,n,r,i,l){var o,u
return _r(e,t),o=!!(128&t.flags),r||o?(r=t.stateNode,is.current=t,u=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render(),t.flags|=1,null!==e&&o?(t.child=Sa(t,e.child,null,l),t.child=Sa(t,null,u,l)):br(e,t,u,l),t.memoizedState=r.state,i&&It(t,n,!0),t.child):(i&&It(t,n,!1),Rr(e,t,l))}function Cr(e){var t=e.stateNode
t.pendingContext?St(0,t.pendingContext,t.pendingContext!==t.context):t.context&&St(0,t.context,!1),mn(e,t.containerInfo)}function Sr(e,t,n,r,i){return Ht(),Wt(i),t.flags|=256,br(e,t,n,r),t.child}function Tr(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pr(e,t,n){var i,l,o=t.pendingProps,u=Va.current,a=!1,s=!!(128&t.flags)
return(i=s)||(i=(null===e||null!==e.memoizedState)&&!!(2&u)),i?(a=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(u|=1),Nt(Va,1&u),null===e?(Bt(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=o.children,e=o.fallback,a?(o=t.mode,a=t.child,s={mode:"hidden",children:s},1&o||null===a?a=Hi(s,o,0,null):(a.childLanes=0,a.pendingProps=s),e=Xi(e,o,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Tr(n),t.memoizedState=os,e):Ir(t,s))):null!==(u=e.memoizedState)&&null!==(i=u.dehydrated)?function(e,t,n,i,l,o,u){if(n)return 256&t.flags?(t.flags&=-257,Or(e,t,u,i=fr(Error(r(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=i.fallback,l=t.mode,i=Hi({mode:"visible",children:i.children},l,0,null),(o=Xi(o,l,u,null)).flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,1&t.mode&&Sa(t,e.child,null,u),t.child.memoizedState=Tr(u),t.memoizedState=os,o)
if(!(1&t.mode))return Or(e,t,u,null)
if("$!"===l.data){if(i=l.nextSibling&&l.nextSibling.dataset)var a=i.dgst
return i=a,Or(e,t,u,i=fr(o=Error(r(419)),i,void 0))}if(a=0!==(u&e.childLanes),ls||a){if(null!==(i=_s)){switch(u&-u){case 4:l=2
break
case 16:l=8
break
case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32
break
case 536870912:l=268435456
break
default:l=0}0!==(l=0!==(l&(i.suspendedLanes|u))?0:l)&&l!==o.retryLane&&(o.retryLane=l,ln(e,l),di(i,e,l,-1))}return Ni(),Or(e,t,u,i=fr(Error(r(421))))}return"$?"===l.data?(t.flags|=128,t.child=e.child,t=ji.bind(null,e),l.V=t,null):(e=o.treeContext,Na=vt(l.nextSibling),_a=t,Ma=!0,Ea=null,null!==e&&(ba[ga++]=wa,ba[ga++]=ka,ba[ga++]=xa,wa=e.id,ka=e.overflow,xa=t),(t=Ir(t,i.children)).flags|=4096,t)}(e,t,s,o,i,u,n):a?(a=o.fallback,s=t.mode,i=(u=e.child).sibling,l={mode:"hidden",children:o.children},1&s||t.child===u?(o=Ui(u,l)).subtreeFlags=14680064&u.subtreeFlags:((o=t.child).childLanes=0,o.pendingProps=l,t.deletions=null),null!==i?a=Ui(i,a):(a=Xi(a,s,n,null)).flags|=2,a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,s=null===(s=e.child.memoizedState)?Tr(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=os,o):(e=(a=e.child).sibling,o=Ui(a,{mode:"visible",children:o.children}),!(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o)}function Ir(e,t){return(t=Hi({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Or(e,t,n,r){return null!==r&&Wt(r),Sa(t,e.child,null,n),(e=Ir(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Dr(e,t,n){e.lanes|=t
var r=e.alternate
null!==r&&(r.lanes|=t),Qt(e.return,t,n)}function zr(e,t,n,r,i){var l=e.memoizedState
null===l?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Ar(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail
if(br(e,t,r.children,n),2&(r=Va.current))r=1&r|2,t.flags|=128
else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Dr(e,n,t)
else if(19===e.tag)Dr(e,n,t)
else if(null!==e.child){e.child.return=e,e=e.child
continue}if(e===t)break e
for(;null===e.sibling;){if(null===e.return||e.return===t)break e
e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Nt(Va,r),1&t.mode)switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===gn(e)&&(i=n),n=n.sibling
null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),zr(t,!1,i,n,l)
break
case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===gn(e)){t.child=i
break}e=i.sibling,i.sibling=n,n=i,i=e}zr(t,!0,n,null,l)
break
case"together":zr(t,!1,null,null,void 0)
break
default:t.memoizedState=null}else t.memoizedState=null
return t.child}function jr(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rr(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ps|=t.lanes,0===(n&t.childLanes))return null
if(null!==e&&t.child!==e.child)throw Error(r(153))
if(null!==t.child){for(n=Ui(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ui(e,e.pendingProps)).return=t
n.sibling=null}return t.child}function Fr(e,t){var n,r
if(!Ma)switch(e.tailMode){case"hidden":for(t=e.tail,n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling
null===n?e.tail=null:n.sibling=null
break
case"collapsed":for(n=e.tail,r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling
null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Lr(e){var t,n=null!==e.alternate&&e.alternate.child===e.child,r=0,i=0
if(n)for(t=e.child;null!==t;)r|=t.lanes|t.childLanes,i|=14680064&t.subtreeFlags,i|=14680064&t.flags,t.return=e,t=t.sibling
else for(t=e.child;null!==t;)r|=t.lanes|t.childLanes,i|=t.subtreeFlags,i|=t.flags,t.return=e,t=t.sibling
return e.subtreeFlags|=i,e.childLanes=r,n}function Vr(e,t,n){var i,l,o,u,s,c=t.pendingProps
switch(Rt(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lr(t),null
case 1:case 17:return Et(t.type)&&Ct(),Lr(t),null
case 3:return c=t.stateNode,vn(),_t(sa),_t(aa),xn(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==e&&null!==e.child||($t(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==Ea&&(mi(Ea),Ea=null))),as(e,t),Lr(t),null
case 5:if(bn(t),i=hn(La.current),n=t.type,null!==e&&null!=t.stateNode)ss(e,t,n,c,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152)
else{if(!c){if(null===t.stateNode)throw Error(r(166))
return Lr(t),null}if(e=hn(Ra.current),$t(t)){switch(c=t.stateNode,n=t.type,l=t.memoizedProps,c[Qu]=t,c[ea]=l,e=!!(1&t.mode),n){case"dialog":tt("cancel",c),tt("close",c)
break
case"iframe":case"object":case"embed":tt("load",c)
break
case"video":case"audio":for(i=0;i<Bu.length;i++)tt(Bu[i],c)
break
case"source":tt("error",c)
break
case"img":case"image":case"link":tt("error",c),tt("load",c)
break
case"details":tt("toggle",c)
break
case"input":w(c,l),tt("invalid",c)
break
case"select":c.T={wasMultiple:!!l.multiple},tt("invalid",c)
break
case"textarea":S(c,l),tt("invalid",c)}for(o in j(n,l),i=null,l)l.hasOwnProperty(o)&&(u=l[o],"children"===o?"string"==typeof u?c.textContent!==u&&(!0!==l.suppressHydrationWarning&&dt(c.textContent,u,e),i=["children",u]):"number"==typeof u&&c.textContent!==""+u&&(!0!==l.suppressHydrationWarning&&dt(c.textContent,u,e),i=["children",""+u]):ic.hasOwnProperty(o)&&null!=u&&"onScroll"===o&&tt("scroll",c))
switch(n){case"input":y(c),N(c,l,!0)
break
case"textarea":y(c),P(c)
break
case"select":case"option":break
default:"function"==typeof l.onClick&&(c.onclick=ft)}c=i,t.updateQueue=c,null!==c&&(t.flags|=4)}else{o=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=I(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=o.createElement("div")).innerHTML="<script></script>",e=e.removeChild(e.firstChild)):"string"==typeof c.is?e=o.createElement(n,{is:c.is}):(e=o.createElement(n),"select"===n&&(o=e,c.multiple?o.multiple=!0:c.size&&(o.size=c.size))):e=o.createElementNS(e,n),e[Qu]=t,e[ea]=c,us(e,t,!1,!1),t.stateNode=e
e:{switch(o=R(n,c),n){case"dialog":tt("cancel",e),tt("close",e),i=c
break
case"iframe":case"object":case"embed":tt("load",e),i=c
break
case"video":case"audio":for(i=0;i<Bu.length;i++)tt(Bu[i],e)
i=c
break
case"source":tt("error",e),i=c
break
case"img":case"image":case"link":tt("error",e),tt("load",e),i=c
break
case"details":tt("toggle",e),i=c
break
case"input":w(e,c),i=x(e,c),tt("invalid",e)
break
case"option":default:i=c
break
case"select":e.T={wasMultiple:!!c.multiple},i=Nl({},c,{value:void 0}),tt("invalid",e)
break
case"textarea":S(e,c),i=C(e,c),tt("invalid",e)}for(l in j(n,i),u=i)u.hasOwnProperty(l)&&(s=u[l],"style"===l?A(e,s):"dangerouslySetInnerHTML"===l?null!=(s=s?s.P:void 0)&&Tl(e,s):"children"===l?"string"==typeof s?("textarea"!==n||""!==s)&&D(e,s):"number"==typeof s&&D(e,""+s):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ic.hasOwnProperty(l)?null!=s&&"onScroll"===l&&tt("scroll",e):null!=s&&a(e,l,s,o)))
switch(n){case"input":y(e),N(e,c,!1)
break
case"textarea":y(e),P(e)
break
case"option":null!=c.value&&e.setAttribute("value",""+m(c.value))
break
case"select":e.multiple=!!c.multiple,null!=(l=c.value)?E(e,!!c.multiple,l,!1):null!=c.defaultValue&&E(e,!!c.multiple,c.defaultValue,!0)
break
default:"function"==typeof i.onClick&&(e.onclick=ft)}switch(n){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus
break e
case"img":c=!0
break e
default:c=!1}}c&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Lr(t),null
case 6:if(e&&null!=t.stateNode)cs(e,t,e.memoizedProps,c)
else{if("string"!=typeof c&&null===t.stateNode)throw Error(r(166))
if(n=hn(La.current),hn(Ra.current),$t(t)){if(c=t.stateNode,n=t.memoizedProps,c[Qu]=t,(l=c.nodeValue!==n)&&null!==(e=_a))switch(e.tag){case 3:dt(c.nodeValue,n,!!(1&e.mode))
break
case 5:!0!==e.memoizedProps.suppressHydrationWarning&&dt(c.nodeValue,n,!!(1&e.mode))}l&&(t.flags|=4)}else(c=(9===n.nodeType?n:n.ownerDocument).createTextNode(c))[Qu]=t,t.stateNode=c}return Lr(t),null
case 13:if(_t(Va),c=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(Ma&&null!==Na&&1&t.mode&&!(128&t.flags))Xt(),Ht(),t.flags|=98560,l=!1
else if(l=$t(t),null!==c&&null!==c.dehydrated){if(null===e){if(!l)throw Error(r(318))
if(!(l=null!==(l=t.memoizedState)?l.dehydrated:null))throw Error(r(317))
l[Qu]=t}else Ht(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4
Lr(t),l=!1}else null!==Ea&&(mi(Ea),Ea=null),l=!0
if(!l)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=n,t):((c=null!==c)!=(null!==e&&null!==e.memoizedState)&&c&&(t.child.flags|=8192,1&t.mode&&(null===e||1&Va.current?0===Ss&&(Ss=3):Ni())),null!==t.updateQueue&&(t.flags|=4),Lr(t),null)
case 4:return vn(),as(e,t),null===e&&rt(t.stateNode.containerInfo),Lr(t),null
case 10:return qt(t.type.N),Lr(t),null
case 19:if(_t(Va),null===(l=t.memoizedState))return Lr(t),null
if(c=!!(128&t.flags),null===(o=l.rendering))if(c)Fr(l,!1)
else{if(0!==Ss||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(o=gn(e))){for(t.flags|=128,Fr(l,!1),null!==(c=o.updateQueue)&&(t.updateQueue=c,t.flags|=4),t.subtreeFlags=0,c=n,n=t.child;null!==n;)e=c,(l=n).flags&=14680066,null===(o=l.alternate)?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling
return Nt(Va,1&Va.current|2),t.child}e=e.sibling}null!==l.tail&&Zl()>js&&(t.flags|=128,c=!0,Fr(l,!1),t.lanes=4194304)}else{if(!c)if(null!==(e=gn(o))){if(t.flags|=128,c=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Fr(l,!0),null===l.tail&&"hidden"===l.tailMode&&!o.alternate&&!Ma)return Lr(t),null}else 2*Zl()-l.renderingStartTime>js&&1073741824!==n&&(t.flags|=128,c=!0,Fr(l,!1),t.lanes=4194304)
l.isBackwards?(o.sibling=t.child,t.child=o):(null!==(n=l.last)?n.sibling=o:t.child=o,l.last=o)}return null!==l.tail?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Zl(),t.sibling=null,n=Va.current,Nt(Va,c?1&n|2:1&n),t):(Lr(t),null)
case 22:case 23:return xi(),c=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==c&&(t.flags|=8192),c&&1&t.mode?!!(1073741824&Es)&&(Lr(t),6&t.subtreeFlags&&(t.flags|=8192)):Lr(t),null
case 24:case 25:return null}throw Error(r(156,t.tag))}function Br(e,t){switch(Rt(t),t.tag){case 1:return Et(t.type)&&Ct(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null
case 3:return vn(),_t(sa),_t(aa),xn(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null
case 5:return bn(t),null
case 13:if(_t(Va),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(r(340))
Ht()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null
case 19:return _t(Va),null
case 4:return vn(),null
case 10:return qt(t.type.N),null
case 22:case 23:return xi(),null
default:return null}}function Ur(e,t){var n=e.ref
if(null!==n)if("function"==typeof n)try{n(null)}catch(n){Di(e,t,n)}else n.current=null}function $r(e,t,n){try{n()}catch(n){Di(e,t,n)}}function Xr(e,t,n){var r,i,l=t.updateQueue
if(null!==(l=null!==l?l.lastEffect:null)){r=l=l.next
do{(r.tag&e)===e&&(i=r.destroy,r.destroy=void 0,void 0!==i&&$r(t,n,i)),r=r.next}while(r!==l)}}function Hr(e,t){var n,r
if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){n=t=t.next
do{(n.tag&e)===e&&(r=n.create,n.destroy=r()),n=n.next}while(n!==t)}}function Wr(e){var t,n=e.ref
null!==n&&(t=e.stateNode,e.tag,e=t,"function"==typeof n?n(e):n.current=e)}function Yr(e){var t=e.alternate
null!==t&&(e.alternate=null,Yr(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&null!==(t=e.stateNode)&&(delete t[Qu],delete t[ea],delete t[na],delete t[ra],delete t[ia]),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kr(e){return 5===e.tag||3===e.tag||4===e.tag}function Zr(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Kr(e.return))return null
e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e
if(null===e.child||4===e.tag)continue e
e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Gr(e,t,n){var r=e.tag
if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n.B)||null!==t.onclick||(t.onclick=ft))
else if(4!==r&&null!==(e=e.child))for(Gr(e,t,n),e=e.sibling;null!==e;)Gr(e,t,n),e=e.sibling}function Jr(e,t,n){var r=e.tag
if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e)
else if(4!==r&&null!==(e=e.child))for(Jr(e,t,n),e=e.sibling;null!==e;)Jr(e,t,n),e=e.sibling}function qr(e,t,n){for(n=n.child;null!==n;)Qr(e,t,n),n=n.sibling}function Qr(e,t,n){var r,i,l,o
if(ro&&"function"==typeof ro.onCommitFiberUnmount)try{ro.onCommitFiberUnmount(no,n)}catch(e){}switch(n.tag){case 5:fs||Ur(n,t)
case 6:r=vs,i=ys,vs=null,qr(e,t,n),ys=i,null!==(vs=r)&&(ys?(e=vs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):vs.removeChild(n.stateNode))
break
case 18:null!==vs&&(ys?(e=vs,n=n.stateNode,8===e.nodeType?mt(e.parentNode,n):1===e.nodeType&&mt(e,n),ve(e)):mt(vs,n.stateNode))
break
case 4:r=vs,i=ys,vs=n.stateNode.containerInfo,ys=!0,qr(e,t,n),vs=r,ys=i
break
case 0:case 11:case 14:case 15:if(!fs&&null!==(r=n.updateQueue)&&null!==(r=r.lastEffect)){i=r=r.next
do{o=(l=i).destroy,l=l.tag,void 0!==o&&(2&l||4&l)&&$r(n,t,o),i=i.next}while(i!==r)}qr(e,t,n)
break
case 1:if(!fs&&(Ur(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Di(n,t,e)}qr(e,t,n)
break
case 21:qr(e,t,n)
break
case 22:1&n.mode?(fs=(r=fs)||null!==n.memoizedState,qr(e,t,n),fs=r):qr(e,t,n)
break
default:qr(e,t,n)}}function ei(e){var t,n=e.updateQueue
null!==n&&(e.updateQueue=null,null===(t=e.stateNode)&&(t=e.stateNode=new ps),n.forEach(function(n){var r=Ri.bind(null,e,n)
t.has(n)||(t.add(n),n.then(r,r))}))}function ti(e,t){var n,i,l,o,u,a,s=t.deletions
if(null!==s)for(n=0;n<s.length;n++){i=s[n]
try{l=e,u=o=t
e:for(;null!==u;){switch(u.tag){case 5:vs=u.stateNode,ys=!1
break e
case 3:case 4:vs=u.stateNode.containerInfo,ys=!0
break e}u=u.return}if(null===vs)throw Error(r(160))
Qr(l,o,i),vs=null,ys=!1,null!==(a=i.alternate)&&(a.return=null),i.return=null}catch(e){Di(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)ni(t,e),t=t.sibling}function ni(e,t){var n,i,l,o,u,s,c,d,f,p,h,m=e.alternate,v=e.flags
switch(e.tag){case 0:case 11:case 14:case 15:if(ti(t,e),ri(e),4&v){try{Xr(3,e,e.return),Hr(3,e)}catch(t){Di(e,e.return,t)}try{Xr(5,e,e.return)}catch(t){Di(e,e.return,t)}}break
case 1:ti(t,e),ri(e),512&v&&null!==m&&Ur(m,m.return)
break
case 5:if(ti(t,e),ri(e),512&v&&null!==m&&Ur(m,m.return),32&e.flags){n=e.stateNode
try{D(n,"")}catch(t){Di(e,e.return,t)}}if(4&v&&null!=(n=e.stateNode)&&(i=e.memoizedProps,l=null!==m?m.memoizedProps:i,o=e.type,u=e.updateQueue,e.updateQueue=null,null!==u))try{for("input"===o&&"radio"===i.type&&null!=i.name&&k(n,i),R(o,l),s=R(o,i),l=0;l<u.length;l+=2)c=u[l],d=u[l+1],"style"===c?A(n,d):"dangerouslySetInnerHTML"===c?Tl(n,d):"children"===c?D(n,d):a(n,c,d,s)
switch(o){case"input":_(n,i)
break
case"textarea":T(n,i)
break
case"select":f=n.T.wasMultiple,n.T.wasMultiple=!!i.multiple,null!=(p=i.value)?E(n,!!i.multiple,p,!1):f!==!!i.multiple&&(null!=i.defaultValue?E(n,!!i.multiple,i.defaultValue,!0):E(n,!!i.multiple,i.multiple?[]:"",!1))}n[ea]=i}catch(t){Di(e,e.return,t)}break
case 6:if(ti(t,e),ri(e),4&v){if(null===e.stateNode)throw Error(r(162))
n=e.stateNode,i=e.memoizedProps
try{n.nodeValue=i}catch(t){Di(e,e.return,t)}}break
case 3:if(ti(t,e),ri(e),4&v&&null!==m&&m.memoizedState.isDehydrated)try{ve(t.containerInfo)}catch(t){Di(e,e.return,t)}break
case 4:default:ti(t,e),ri(e)
break
case 13:ti(t,e),ri(e),8192&(n=e.child).flags&&(i=null!==n.memoizedState,n.stateNode.isHidden=i,!i||null!==n.alternate&&null!==n.alternate.memoizedState||(As=Zl())),4&v&&ei(e)
break
case 22:if(c=null!==m&&null!==m.memoizedState,1&e.mode?(fs=(s=fs)||c,ti(t,e),fs=s):ti(t,e),ri(e),8192&v){if(s=null!==e.memoizedState,(e.stateNode.isHidden=s)&&!c&&1&e.mode)for(hs=e,c=e.child;null!==c;){for(d=hs=c;null!==hs;){switch(p=(f=hs).child,f.tag){case 0:case 11:case 14:case 15:Xr(4,f,f.return)
break
case 1:if(Ur(f,f.return),"function"==typeof(h=f.stateNode).componentWillUnmount){v=f,m=f.return
try{t=v,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Di(v,m,e)}}break
case 5:Ur(f,f.return)
break
case 22:if(null!==f.memoizedState){ui(d)
continue}}null!==p?(p.return=f,hs=p):ui(d)}c=c.sibling}e:for(c=null,d=e;;){if(5===d.tag){if(null===c){c=d
try{n=d.stateNode,s?"function"==typeof(i=n.style).setProperty?i.setProperty("display","none","important"):i.display="none":(o=d.stateNode,l=null!=(u=d.memoizedProps.style)&&u.hasOwnProperty("display")?u.display:null,o.style.display=z("display",l))}catch(t){Di(e,e.return,t)}}}else if(6===d.tag){if(null===c)try{d.stateNode.nodeValue=s?"":d.memoizedProps}catch(t){Di(e,e.return,t)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child
continue}if(d===e)break e
for(;null===d.sibling;){if(null===d.return||d.return===e)break e
c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break
case 19:ti(t,e),ri(e),4&v&&ei(e)
case 21:}}function ri(e){var t,n,i,l,o=e.flags
if(2&o){try{e:{for(t=e.return;null!==t;){if(Kr(t)){n=t
break e}t=t.return}throw Error(r(160))}switch(n.tag){case 5:i=n.stateNode,32&n.flags&&(D(i,""),n.flags&=-33),Jr(e,Zr(e),i)
break
case 3:case 4:l=n.stateNode.containerInfo,Gr(e,Zr(e),l)
break
default:throw Error(r(161))}}catch(t){Di(e,e.return,t)}e.flags&=-3}4096&o&&(e.flags&=-4097)}function ii(e,t,n){hs=e,li(e,t,n)}function li(e,t,n){var r,i,l,o,u,a,s
for(r=!!(1&e.mode);null!==hs;)if(l=(i=hs).child,22===i.tag&&r){if(!(o=null!==i.memoizedState||ds)){if(a=null!==(u=i.alternate)&&null!==u.memoizedState||fs,u=ds,s=fs,ds=o,(fs=a)&&!s)for(hs=i;null!==hs;)a=(o=hs).child,22===o.tag&&null!==o.memoizedState?ai(i):null!==a?(a.return=o,hs=a):ai(i)
for(;null!==l;)hs=l,li(l,t,n),l=l.sibling
hs=i,ds=u,fs=s}oi(e)}else 8772&i.subtreeFlags&&null!==l?(l.return=i,hs=l):oi(e)}function oi(e){for(var t,n,i,l,o,u,a,s,c,d,f;null!==hs;){if(8772&(t=hs).flags){n=t.alternate
try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:fs||Hr(5,t)
break
case 1:i=t.stateNode,4&t.flags&&!fs&&(null===n?i.componentDidMount():(l=t.elementType===t.type?n.memoizedProps:lr(t.type,n.memoizedProps),i.componentDidUpdate(l,n.memoizedState,i.U))),null!==(o=t.updateQueue)&&pn(t,o,i)
break
case 3:if(null!==(u=t.updateQueue)){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}pn(t,u,n)}break
case 5:if(a=t.stateNode,null===n&&4&t.flags)switch(n=a,s=t.memoizedProps,t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus()
break
case"img":s.src&&(n.src=s.src)}break
case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break
case 13:null===t.memoizedState&&null!==(c=t.alternate)&&null!==(d=c.memoizedState)&&null!==(f=d.dehydrated)&&ve(f)
break
default:throw Error(r(163))}fs||512&t.flags&&Wr(t)}catch(e){Di(t,t.return,e)}}if(t===e){hs=null
break}if(null!==(n=t.sibling)){n.return=t.return,hs=n
break}hs=t.return}}function ui(e){for(var t,n;null!==hs;){if((t=hs)===e){hs=null
break}if(null!==(n=t.sibling)){n.return=t.return,hs=n
break}hs=t.return}}function ai(e){for(var t,n,r,i,l,o,u;null!==hs;){t=hs
try{switch(t.tag){case 0:case 11:case 15:n=t.return
try{Hr(4,t)}catch(e){Di(t,n,e)}break
case 1:if("function"==typeof(r=t.stateNode).componentDidMount){i=t.return
try{r.componentDidMount()}catch(e){Di(t,i,e)}}l=t.return
try{Wr(t)}catch(e){Di(t,l,e)}break
case 5:o=t.return
try{Wr(t)}catch(e){Di(t,o,e)}}}catch(e){Di(t,t.return,e)}if(t===e){hs=null
break}if(null!==(u=t.sibling)){u.return=t.return,hs=u
break}hs=t.return}}function si(){return 6&ks?Zl():-1!==Ws?Ws:Ws=Zl()}function ci(e){return 1&e.mode?2&ks&&0!==Ms?Ms&-Ms:null!==Ca.transition?(0===Ys&&(Ys=ie()),Ys):0!==(e=so)?e:e=void 0===(e=window.event)?16:we(e.type):1}function di(e,t,n,i){if(Xs>50)throw Xs=0,Hs=null,Error(r(185))
oe(e,n,i),2&ks&&e===_s||(e===_s&&(!(2&ks)&&(Is|=n),4===Ss&&vi(e,Ms)),fi(e,i),1===n&&0===ks&&!(1&t.mode)&&(js=Zl()+500,fa&&Dt()))}function fi(e,t){var n,r=e.callbackNode
if(function(e,t){var n,r,i,l,o,u,a
for(n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;l>0;)u=1<<(o=31-io(l)),-1===(a=i[o])?0!==(u&n)&&0===(u&r)||(i[o]=ne(u,t)):t>=a&&(e.expiredLanes|=u),l&=~u}(e,t),0===(n=te(e,e===_s?Ms:0)))null!==r&&Wl(r),e.callbackNode=null,e.callbackPriority=0
else if(t=n&-n,e.callbackPriority!==t){if(null!=r&&Wl(r),1===t)0===e.tag?function(e){fa=!0,Ot(e)}(yi.bind(null,e)):Ot(yi.bind(null,e)),Ju(function(){!(6&ks)&&Dt()}),r=null
else{switch(ae(n)){case 1:r=Jl
break
case 4:r=ql
break
case 16:default:r=Ql
break
case 536870912:r=to}r=Fi(r,pi.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function pi(e,t){var n,i,l,o,u
if(Ws=-1,Ys=0,6&ks)throw Error(r(327))
if(n=e.callbackNode,Ii()&&e.callbackNode!==n)return null
if(0===(i=te(e,e===_s?Ms:0)))return null
if(30&i||0!==(i&e.expiredLanes)||t)t=Mi(e,i)
else{for(t=i,l=ks,ks|=2,o=_i(),_s===e&&Ms===t||(Rs=null,js=Zl()+500,wi(e,t));;)try{Ci()
break}catch(t){ki(e,t)}Jt(),gs.current=o,ks=l,null!==Ns?t=0:(_s=null,Ms=0,t=Ss)}if(0!==t){if(2===t&&0!==(l=re(e))&&(i=l,t=hi(e,l)),1===t)throw n=Ts,wi(e,0),vi(e,i),fi(e,Zl()),n
if(6===t)vi(e,i)
else{if(l=e.current.alternate,!(30&i||function(e){var t,n,r,i,l
for(t=e;;){if(16384&t.flags&&null!==(n=t.updateQueue)&&null!==(n=n.stores))for(r=0;r<n.length;r++){l=(i=n[r]).getSnapshot,i=i.value
try{if(!Nu(l(),i))return!1}catch(e){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n
else{if(t===e)break
for(;null===t.sibling;){if(null===t.return||t.return===e)return!0
t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(l)||(t=Mi(e,i),2===t&&(o=re(e),0!==o&&(i=o,t=hi(e,o))),1!==t)))throw n=Ts,wi(e,0),vi(e,i),fi(e,Zl()),n
switch(e.finishedWork=l,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345))
case 2:case 5:Pi(e,zs,Rs)
break
case 3:if(vi(e,i),(130023424&i)===i&&(t=As+500-Zl())>10){if(0!==te(e,0))break
if(((l=e.suspendedLanes)&i)!==i){si(),e.pingedLanes|=e.suspendedLanes&l
break}e.timeoutHandle=Ku(Pi.bind(null,e,zs,Rs),t)
break}Pi(e,zs,Rs)
break
case 4:if(vi(e,i),(4194240&i)===i)break
for(t=e.eventTimes,l=-1;i>0;)o=1<<(u=31-io(i)),(u=t[u])>l&&(l=u),i&=~o
if(i=l,(i=(120>(i=Zl()-i)?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*bs(i/1960))-i)>10){e.timeoutHandle=Ku(Pi.bind(null,e,zs,Rs),i)
break}Pi(e,zs,Rs)
break
default:throw Error(r(329))}}}return fi(e,Zl()),e.callbackNode===n?pi.bind(null,e):null}function hi(e,t){var n=Ds
return e.current.memoizedState.isDehydrated&&(wi(e,t).flags|=256),2!==(e=Mi(e,t))&&(t=zs,zs=n,null!==t&&mi(t)),e}function mi(e){null===zs?zs=e:zs.push.apply(zs,e)}function vi(e,t){for(t&=~Os,t&=~Is,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;t>0;){var n=31-io(t),r=1<<n
e[n]=-1,t&=~r}}function yi(e){var t,n,i
if(6&ks)throw Error(r(327))
if(Ii(),!(1&(t=te(e,0))))return fi(e,Zl()),null
if(n=Mi(e,t),0!==e.tag&&2===n&&0!==(i=re(e))&&(t=i,n=hi(e,i)),1===n)throw n=Ts,wi(e,0),vi(e,t),fi(e,Zl()),n
if(6===n)throw Error(r(345))
return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pi(e,zs,Rs),fi(e,Zl()),null}function bi(e,t){var n=ks
ks|=1
try{return e(t)}finally{0===(ks=n)&&(js=Zl()+500,fa&&Dt())}}function gi(e){var t,n,r
null!==Us&&0===Us.tag&&!(6&ks)&&Ii(),t=ks,ks|=1,n=ws.transition,r=so
try{if(ws.transition=null,so=1,e)return e()}finally{so=r,ws.transition=n,!(6&(ks=t))&&Dt()}}function xi(){Es=Cs.current,_t(Cs)}function wi(e,t){var n,r,i,l,o
if(e.finishedWork=null,e.finishedLanes=0,-1!==(n=e.timeoutHandle)&&(e.timeoutHandle=-1,Zu(n)),null!==Ns)for(n=Ns.return;null!==n;){switch(Rt(r=n),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Ct()
break
case 3:vn(),_t(sa),_t(aa),xn()
break
case 5:bn(r)
break
case 4:vn()
break
case 13:case 19:_t(Va)
break
case 10:qt(r.type.N)
break
case 22:case 23:xi()}n=n.return}if(_s=e,Ns=e=Ui(e.current,null),Ms=Es=t,Ss=0,Ts=null,Os=Is=Ps=0,zs=Ds=null,null!==za){for(t=0;t<za.length;t++)null!==(r=(n=za[t]).interleaved)&&(n.interleaved=null,i=r.next,null!==(l=n.pending)&&(o=l.next,l.next=i,r.next=o),n.pending=r)
za=null}return e}function ki(e,t){for(var n,i,l,o,u,a,s,c,d,f,p,h,m,v,y,b,g;;){n=Ns
try{if(Jt(),Ua.current=qa,Ka){for(i=Ha.memoizedState;null!==i;)null!==(l=i.queue)&&(l.pending=null),i=i.next
Ka=!1}if(Xa=0,Ya=Wa=Ha=null,Za=!1,Ga=0,xs.current=null,null===n||null===n.return){Ss=1,Ts=t,Ns=null
break}e:{if(o=e,u=n.return,s=t,t=Ms,(a=n).flags|=32768,null!==s&&"object"==typeof s&&"function"==typeof s.then){if(c=s,f=(d=a).tag,1&d.mode||0!==f&&11!==f&&15!==f||((p=d.alternate)?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)),null!==(h=vr(u))){h.flags&=-257,yr(h,u,a,0,t),1&h.mode&&mr(o,c,t),s=c,null===(m=(t=h).updateQueue)?((v=new Set).add(s),t.updateQueue=v):m.add(s)
break e}if(!(1&t)){mr(o,c,t),Ni()
break e}s=Error(r(426))}else if(Ma&&1&a.mode&&null!==(y=vr(u))){!(65536&y.flags)&&(y.flags|=256),yr(y,u,a,0,t),Wt(dr(s,a))
break e}o=s=dr(s,a),4!==Ss&&(Ss=2),null===Ds?Ds=[o]:Ds.push(o),o=u
do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,dn(o,pr(0,s,t))
break e
case 1:if(a=s,b=o.type,g=o.stateNode,!(128&o.flags||"function"!=typeof b.getDerivedStateFromError&&(null===g||"function"!=typeof g.componentDidCatch||null!==Vs&&Vs.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t,dn(o,hr(o,a,t))
break e}}o=o.return}while(null!==o)}Ti(n)}catch(e){t=e,Ns===n&&null!==n&&(Ns=n=n.return)
continue}break}}function _i(){var e=gs.current
return gs.current=qa,null===e?qa:e}function Ni(){0!==Ss&&3!==Ss&&2!==Ss||(Ss=4),null===_s||!(268435455&Ps)&&!(268435455&Is)||vi(_s,Ms)}function Mi(e,t){var n,i=ks
for(ks|=2,n=_i(),_s===e&&Ms===t||(Rs=null,wi(e,t));;)try{Ei()
break}catch(t){ki(e,t)}if(Jt(),ks=i,gs.current=n,null!==Ns)throw Error(r(261))
return _s=null,Ms=0,Ss}function Ei(){for(;null!==Ns;)Si(Ns)}function Ci(){for(;null!==Ns&&!Yl();)Si(Ns)}function Si(e){var t=Ks(e.alternate,e,Es)
e.memoizedProps=e.pendingProps,null===t?Ti(e):Ns=t,xs.current=null}function Ti(e){var t,n=e
do{if(t=n.alternate,e=n.return,32768&n.flags){if(null!==(t=Br(t,n)))return t.flags&=32767,void(Ns=t)
if(null===e)return Ss=6,void(Ns=null)
e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(t=Vr(t,n,Es)))return void(Ns=t)
if(null!==(n=n.sibling))return void(Ns=n)
Ns=n=e}while(null!==n)
0===Ss&&(Ss=5)}function Pi(e,t,n){var i=so,l=ws.transition
try{ws.transition=null,so=1,function(e,t,n,i){var l,o,u,a
do{Ii()}while(null!==Us)
if(6&ks)throw Error(r(327))
if(n=e.finishedWork,l=e.finishedLanes,null===n)return null
if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177))
if(e.callbackNode=null,e.callbackPriority=0,function(e,t){var n,r,i,l=e.pendingLanes&~t
for(e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements,n=e.eventTimes,e=e.expirationTimes;l>0;)i=1<<(r=31-io(l)),t[r]=0,n[r]=-1,e[r]=-1,l&=~i}(e,o=n.lanes|n.childLanes),e===_s&&(Ns=_s=null,Ms=0),!(2064&n.subtreeFlags)&&!(2064&n.flags)||Bs||(Bs=!0,Fi(Ql,function(){return Ii(),null})),o=!!(15990&n.flags),15990&n.subtreeFlags||o?(o=ws.transition,ws.transition=null,u=so,so=1,a=ks,ks|=4,xs.current=null,function(e,t){var n,i,l,o,u,a,s,c,d,f,p,h,m,v,y,b,g,x
if(Wu=Eo,Ye(e=We())){if("selectionStart"in e)n={start:e.selectionStart,end:e.selectionEnd}
else e:if((i=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection())&&0!==i.rangeCount){n=i.anchorNode,l=i.anchorOffset,o=i.focusNode,i=i.focusOffset
try{n.nodeType,o.nodeType}catch(e){n=null
break e}u=0,a=-1,s=-1,c=0,d=0,f=e,p=null
t:for(;;){for(;f!==n||0!==l&&3!==f.nodeType||(a=u+l),f!==o||0!==i&&3!==f.nodeType||(s=u+i),3===f.nodeType&&(u+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h
for(;;){if(f===e)break t
if(p===n&&++c===l&&(a=u),p===o&&++d===i&&(s=u),null!==(h=f.nextSibling))break
p=(f=p).parentNode}f=h}n=-1===a||-1===s?null:{start:a,end:s}}else n=null
n=n||{start:0,end:0}}else n=null
for(Yu={focusedElem:e,selectionRange:n},Eo=!1,hs=t;null!==hs;)if(e=(t=hs).child,1028&t.subtreeFlags&&null!==e)e.return=t,hs=e
else for(;null!==hs;){t=hs
try{if(m=t.alternate,1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break
case 1:null!==m&&(v=m.memoizedProps,y=m.memoizedState,g=(b=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?v:lr(t.type,v),y),b.U=g)
break
case 3:1===(x=t.stateNode.containerInfo).nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement)
break
default:throw Error(r(163))}}catch(e){Di(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,hs=e
break}hs=t.return}m=ms,ms=!1}(e,n),ni(n,e),Ke(Yu),Eo=!!Wu,Yu=Wu=null,e.current=n,ii(n,e,l),Kl(),ks=a,so=u,ws.transition=o):e.current=n,Bs&&(Bs=!1,Us=e,$s=l),0===(o=e.pendingLanes)&&(Vs=null),function(e){if(ro&&"function"==typeof ro.onCommitFiberRoot)try{ro.onCommitFiberRoot(no,e,void 0,!(128&~e.current.flags))}catch(e){}}(n.stateNode),fi(e,Zl()),null!==t)for(i=e.onRecoverableError,n=0;n<t.length;n++)i((l=t[n]).value,{componentStack:l.stack,digest:l.digest})
if(Fs)throw Fs=!1,e=Ls,Ls=null,e
!!(1&$s)&&0!==e.tag&&Ii(),1&(o=e.pendingLanes)?e===Hs?Xs++:(Xs=0,Hs=e):Xs=0,Dt()}(e,t,n,i)}finally{ws.transition=l,so=i}return null}function Ii(){var e,t,n,i,l,o,u,a,s,c,d,f,p,h,m,v,y,b,g,x,w
if(null!==Us){e=ae($s),t=ws.transition,n=so
try{if(ws.transition=null,so=16>e?16:e,null===Us)i=!1
else{if(e=Us,Us=null,$s=0,6&ks)throw Error(r(331))
for(l=ks,ks|=4,hs=e.current;null!==hs;){if(u=(o=hs).child,16&hs.flags&&null!==(a=o.deletions)){for(s=0;s<a.length;s++)for(c=a[s],hs=c;null!==hs;){switch((d=hs).tag){case 0:case 11:case 15:Xr(8,d,o)}if(null!==(f=d.child))f.return=d,hs=f
else for(;null!==hs;){if(p=(d=hs).sibling,h=d.return,Yr(d),d===c){hs=null
break}if(null!==p){p.return=h,hs=p
break}hs=h}}if(null!==(m=o.alternate)&&null!==(v=m.child)){m.child=null
do{y=v.sibling,v.sibling=null,v=y}while(null!==v)}hs=o}if(2064&o.subtreeFlags&&null!==u)u.return=o,hs=u
else e:for(;null!==hs;){if(2048&(o=hs).flags)switch(o.tag){case 0:case 11:case 15:Xr(9,o,o.return)}if(null!==(b=o.sibling)){b.return=o.return,hs=b
break e}hs=o.return}}for(g=e.current,hs=g;null!==hs;)if(x=(u=hs).child,2064&u.subtreeFlags&&null!==x)x.return=u,hs=x
else e:for(u=g;null!==hs;){if(2048&(a=hs).flags)try{switch(a.tag){case 0:case 11:case 15:Hr(9,a)}}catch(e){Di(a,a.return,e)}if(a===u){hs=null
break e}if(null!==(w=a.sibling)){w.return=a.return,hs=w
break e}hs=a.return}if(ks=l,Dt(),ro&&"function"==typeof ro.onPostCommitFiberRoot)try{ro.onPostCommitFiberRoot(no,e)}catch(e){}i=!0}return i}finally{so=n,ws.transition=t}}return!1}function Oi(e,t,n){e=sn(e,t=pr(0,t=dr(n,t),1),1),t=si(),null!==e&&(oe(e,1,t),fi(e,t))}function Di(e,t,n){if(3===e.tag)Oi(e,e,n)
else for(;null!==t;){if(3===t.tag){Oi(t,e,n)
break}if(1===t.tag){var r=t.stateNode
if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Vs||!Vs.has(r))){t=sn(t,e=hr(t,e=dr(n,e),1),1),e=si(),null!==t&&(oe(t,1,e),fi(t,e))
break}}t=t.return}}function zi(e,t,n){var r=e.pingCache
null!==r&&r.delete(t),t=si(),e.pingedLanes|=e.suspendedLanes&n,_s===e&&(Ms&n)===n&&(4===Ss||3===Ss&&(130023424&Ms)===Ms&&500>Zl()-As?wi(e,0):Os|=n),fi(e,t)}function Ai(e,t){0===t&&(1&e.mode?(t=ao,!(130023424&(ao<<=1))&&(ao=4194304)):t=1)
var n=si()
null!==(e=ln(e,t))&&(oe(e,t,n),fi(e,n))}function ji(e){var t=e.memoizedState,n=0
null!==t&&(n=t.retryLane),Ai(e,n)}function Ri(e,t){var n,i,l=0
switch(e.tag){case 13:n=e.stateNode,null!==(i=e.memoizedState)&&(l=i.retryLane)
break
case 19:n=e.stateNode
break
default:throw Error(r(314))}null!==n&&n.delete(t),Ai(e,l)}function Fi(e,t){return Hl(e,t)}function Li(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vi(e,t,n,r){return new Li(e,t,n,r)}function Bi(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ui(e,t){var n=e.alternate
return null===n?((n=Vi(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $i(e,t,n,i,l,o){var u=2
if(i=e,"function"==typeof e)Bi(e)&&(u=1)
else if("string"==typeof e)u=5
else e:switch(e){case fl:return Xi(n.children,l,o,t)
case pl:u=8,l|=8
break
case hl:return(e=Vi(12,n,t,2|l)).elementType=hl,e.lanes=o,e
case bl:return(e=Vi(13,n,t,l)).elementType=bl,e.lanes=o,e
case gl:return(e=Vi(19,n,t,l)).elementType=gl,e.lanes=o,e
case kl:return Hi(n,l,o,t)
default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case ml:u=10
break e
case vl:u=9
break e
case yl:u=11
break e
case xl:u=14
break e
case wl:u=16,i=null
break e}throw Error(r(130,null==e?e:typeof e,""))}return(t=Vi(u,n,t,l)).elementType=e,t.type=i,t.lanes=o,t}function Xi(e,t,n,r){return(e=Vi(7,e,r,t)).lanes=n,e}function Hi(e,t,n,r){return(e=Vi(22,e,r,t)).elementType=kl,e.lanes=n,e.stateNode={isHidden:!1},e}function Wi(e,t,n){return(e=Vi(6,e,null,t)).lanes=n,e}function Yi(e,t,n){return(t=Vi(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ki(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=le(0),this.expirationTimes=le(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=le(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zi(e,t,n,r,i,l,o,u,a){return e=new Ki(e,t,n,u,a),1===t?(t=1,!0===l&&(t|=8)):t=0,l=Vi(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},on(l),e}function Gi(e){var t,n
if(!e)return ua
e:{if(Z(e=e.L)!==e||1!==e.tag)throw Error(r(170))
t=e
do{switch(t.tag){case 3:t=t.stateNode.context
break e
case 1:if(Et(t.type)){t=t.stateNode.j
break e}}t=t.return}while(null!==t)
throw Error(r(171))}return 1===e.tag&&Et(n=e.type)?Tt(e,n,t):t}function Ji(e,t,n,r,i,l,o,u,a){return(e=Zi(n,r,!0,e,0,l,0,u,a)).context=Gi(null),n=e.current,(l=an(r=si(),i=ci(n))).callback=null!=t?t:null,sn(n,l,i),e.current.lanes=i,oe(e,i,r),fi(e,r),e}function qi(e,t,n,r){var i=t.current,l=si(),o=ci(i)
return n=Gi(n),null===t.context?t.context=n:t.pendingContext=n,(t=an(l,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=sn(i,t,o))&&(di(e,i,o,l),cn(e,i,o)),o}function Qi(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function el(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane
e.retryLane=0!==n&&t>n?n:t}}function tl(e,t){el(e,t),(e=e.alternate)&&el(e,t)}function nl(e){this.$=e}function rl(e){this.$=e}function il(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function ll(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function ol(){}function ul(e,t,n,r,i){var l,o,u=n.B
return u?("function"==typeof i&&(o=i,i=function(){var e=Qi(l)
o.call(e)}),qi(t,l=u,e,i)):l=function(e,t,n,r,i){var l,o,u,a
if(i)return"function"==typeof r&&(l=r,r=function(){var e=Qi(o)
l.call(e)}),o=Ji(t,r,e,0,null,!1,0,"",ol),e.B=o,e[ta]=o.current,rt(8===e.nodeType?e.parentNode:e),gi(),o
for(;i=e.lastChild;)e.removeChild(i)
return"function"==typeof r&&(u=r,r=function(){var e=Qi(a)
u.call(e)}),a=Zi(e,0,!1,null,0,!1,0,"",ol),e.B=a,e[ta]=a.current,rt(8===e.nodeType?e.parentNode:e),gi(function(){qi(t,a,n,r)}),a}(n,t,e,i,r),Qi(l)}var al,sl,cl,dl,fl,pl,hl,ml,vl,yl,bl,gl,xl,wl,kl,_l,Nl,Ml,El,Cl,Sl,Tl,Pl,Il,Ol,Dl,zl,Al,jl,Rl,Fl,Ll,Vl,Bl,Ul,$l,Xl,Hl,Wl,Yl,Kl,Zl,Gl,Jl,ql,Ql,eo,to,no,ro,io,lo,oo,uo,ao,so,co,fo,po,ho,mo,vo,yo,bo,go,xo,wo,ko,_o,No,Mo,Eo,Co,So,To,Po,Io,Oo,Do,zo,Ao,jo,Ro,Fo,Lo,Vo,Bo,Uo,$o,Xo,Ho,Wo,Yo,Ko,Zo,Go,Jo,qo,Qo,eu,tu,nu,ru,iu,lu,ou,uu,au,su,cu,du,fu,pu,hu,mu,vu,yu,bu,gu,xu,wu,ku,_u,Nu,Mu,Eu,Cu,Su,Tu,Pu,Iu,Ou,Du,zu,Au,ju,Ru,Fu,Lu,Vu,Bu,Uu,$u,Xu,Hu,Wu,Yu,Ku,Zu,Gu,Ju,qu,Qu,ea,ta,na,ra,ia,la,oa,ua,aa,sa,ca,da,fa,pa,ha,ma,va,ya,ba,ga,xa,wa,ka,_a,Na,Ma,Ea,Ca,Sa,Ta,Pa,Ia,Oa,Da,za,Aa,ja,Ra,Fa,La,Va,Ba,Ua,$a,Xa,Ha,Wa,Ya,Ka,Za,Ga,Ja,qa,Qa,es,ts,ns,rs,is,ls,os,us,as,ss,cs,ds,fs,ps,hs,ms,vs,ys,bs,gs,xs,ws,ks,_s,Ns,Ms,Es,Cs,Ss,Ts,Ps,Is,Os,Ds,zs,As,js,Rs,Fs,Ls,Vs,Bs,Us,$s,Xs,Hs,Ws,Ys,Ks,Zs,Gs,Js,qs,Qs,ec,tc=n(43),nc=n(853),rc=new Set,ic={},lc=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),oc={}.hasOwnProperty,uc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ac={},sc={},cc={}
if("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){cc[e]=new o(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0]
cc[t]=new o(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){cc[e]=new o(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){cc[e]=new o(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){cc[e]=new o(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){cc[e]=new o(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){cc[e]=new o(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){cc[e]=new o(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){cc[e]=new o(e,5,!1,e.toLowerCase(),null,!1,!1)}),al=/[\-:]([a-z])/g,"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(al,u)
cc[t]=new o(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(al,u)
cc[t]=new o(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(al,u)
cc[t]=new o(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){cc[e]=new o(e,1,!1,e.toLowerCase(),null,!1,!1)}),cc.xlinkHref=new o("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){cc[e]=new o(e,1,!1,e.toLowerCase(),null,!0,!0)}),sl=tc.i,cl=Symbol.for("react.element"),dl=Symbol.for("react.portal"),fl=Symbol.for("react.fragment"),pl=Symbol.for("react.strict_mode"),hl=Symbol.for("react.profiler"),ml=Symbol.for("react.provider"),vl=Symbol.for("react.context"),yl=Symbol.for("react.forward_ref"),bl=Symbol.for("react.suspense"),gl=Symbol.for("react.suspense_list"),xl=Symbol.for("react.memo"),wl=Symbol.for("react.lazy"),Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode"),kl=Symbol.for("react.offscreen"),Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker"),_l=Symbol.iterator,Nl=Object.assign,El=!1,Cl=Array.isArray,ec=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t
else{for((Sl=Sl||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sl.firstChild;e.firstChild;)e.removeChild(e.firstChild)
for(;t.firstChild;)e.appendChild(t.firstChild)}},Tl="undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return ec(e,t)})}:ec,Il=["Webkit","ms","Moz","O"],Object.keys(Pl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0}).forEach(function(e){Il.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pl[t]=Pl[e]})}),Ol=Nl({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),Dl=null,zl=null,Al=null,jl=null,Rl=!1,Fl=!1,lc)try{Object.defineProperty(Ll={},"passive",{get(){Fl=!0}}),window.addEventListener("test",Ll,Ll),window.removeEventListener("test",Ll,Ll)}catch(ec){Fl=!1}Vl=!1,Bl=null,Ul=!1,$l=null,Xl={onError(e){Vl=!0,Bl=e}},Hl=nc.unstable_scheduleCallback,Wl=nc.unstable_cancelCallback,Yl=nc.unstable_shouldYield,Kl=nc.unstable_requestPaint,Zl=nc.unstable_now,Gl=nc.unstable_getCurrentPriorityLevel,Jl=nc.unstable_ImmediatePriority,ql=nc.unstable_UserBlockingPriority,Ql=nc.unstable_NormalPriority,eo=nc.unstable_LowPriority,to=nc.unstable_IdlePriority,no=null,ro=null,io=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(lo(e)/oo|0)|0},lo=Math.log,oo=Math.LN2,uo=64,ao=4194304,so=0,vo=!1,yo=[],bo=null,go=null,xo=null,wo=new Map,ko=new Map,_o=[],No="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" "),Mo=sl.ReactCurrentBatchConfig,Eo=!0,Co=null,So=null,To=null,Po=null,Io={eventPhase:0,bubbles:0,cancelable:0,timeStamp(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oo=Ee(Io),Do=Nl({},Io,{view:0,detail:0}),zo=Ee(Do),Fo=Nl({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Se,button:0,buttons:0,relatedTarget(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX(e){return"movementX"in e?e.movementX:(e!==Ro&&(Ro&&"mousemove"===e.type?(Ao=e.screenX-Ro.screenX,jo=e.screenY-Ro.screenY):jo=Ao=0,Ro=e),Ao)},movementY(e){return"movementY"in e?e.movementY:jo}}),Lo=Ee(Fo),Vo=Nl({},Fo,{dataTransfer:0}),Bo=Ee(Vo),Uo=Nl({},Do,{relatedTarget:0}),$o=Ee(Uo),Xo=Nl({},Io,{animationName:0,elapsedTime:0,pseudoElement:0}),Ho=Ee(Xo),Wo=Nl({},Io,{clipboardData(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yo=Ee(Wo),Ko=Nl({},Io,{data:0}),Zo=Ee(Ko),Go={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jo={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},Qo=Nl({},Do,{key(e){if(e.key){var t=Go[e.key]||e.key
if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=_e(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Jo[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Se,charCode(e){return"keypress"===e.type?_e(e):0},keyCode(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which(e){return"keypress"===e.type?_e(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),eu=Ee(Qo),tu=Nl({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nu=Ee(tu),ru=Nl({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Se}),iu=Ee(ru),lu=Nl({},Io,{propertyName:0,elapsedTime:0,pseudoElement:0}),ou=Ee(lu),uu=Nl({},Fo,{deltaX(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),au=Ee(uu),su=[9,13,27,32],cu=lc&&"CompositionEvent"in window,du=null,lc&&"documentMode"in document&&(du=document.documentMode),fu=lc&&"TextEvent"in window&&!du,pu=lc&&(!cu||du&&du>8&&11>=du),hu=" ",mu=!1,vu=!1,yu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},bu=null,gu=null,xu=!1,lc&&(lc?((ku="oninput"in document)||((_u=document.createElement("div")).setAttribute("oninput","return;"),ku="function"==typeof _u.oninput),wu=ku):wu=!1,xu=wu&&(!document.documentMode||document.documentMode>9)),Nu="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},Mu=lc&&"documentMode"in document&&11>=document.documentMode,Eu=null,Cu=null,Su=null,Tu=!1,Pu={animationend:Ge("Animation","AnimationEnd"),animationiteration:Ge("Animation","AnimationIteration"),animationstart:Ge("Animation","AnimationStart"),transitionend:Ge("Transition","TransitionEnd")},Iu={},Ou={},lc&&(Ou=document.createElement("div").style,"AnimationEvent"in window||(delete Pu.animationend.animation,delete Pu.animationiteration.animation,delete Pu.animationstart.animation),"TransitionEvent"in window||delete Pu.transitionend.transition),Du=Je("animationend"),zu=Je("animationiteration"),Au=Je("animationstart"),ju=Je("transitionend"),Ru=new Map,Fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ")
for(Lu=0;Lu<Fu.length;Lu++)qe((Vu=Fu[Lu]).toLowerCase(),"on"+(Vu[0].toUpperCase()+Vu.slice(1)))
if(qe(Du,"onAnimationEnd"),qe(zu,"onAnimationIteration"),qe(Au,"onAnimationStart"),qe("dblclick","onDoubleClick"),qe("focusin","onFocus"),qe("focusout","onBlur"),qe(ju,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),i("onBeforeInput",["compositionend","keypress","textInput","paste"]),i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" ")),Bu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uu=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bu)),$u="_reactListening"+Math.random().toString(36).slice(2),Xu=/\r\n?/g,Hu=/\u0000|\uFFFD/g,Wu=null,Yu=null,Ku="function"==typeof setTimeout?setTimeout:void 0,Zu="function"==typeof clearTimeout?clearTimeout:void 0,Gu="function"==typeof Promise?Promise:void 0,Ju="function"==typeof queueMicrotask?queueMicrotask:void 0!==Gu?function(e){return Gu.resolve(null).then(e).catch(ht)}:Ku,qu=Math.random().toString(36).slice(2),Qu="__reactFiber$"+qu,ea="__reactProps$"+qu,ta="__reactContainer$"+qu,na="__reactEvents$"+qu,ra="__reactListeners$"+qu,ia="__reactHandles$"+qu,la=[],oa=-1,aa=kt(ua={}),sa=kt(!1),ca=ua,da=null,fa=!1,pa=!1,ha=[],ma=0,va=null,ya=0,ba=[],ga=0,xa=null,wa=1,ka="",_a=null,Na=null,Ma=!1,Ea=null,Ca=sl.ReactCurrentBatchConfig,Sa=Gt(!0),Ta=Gt(!1),Pa=kt(null),Ia=null,Oa=null,Da=null,za=null,Aa=!1,Ra=kt(ja={}),Fa=kt(ja),La=kt(ja),Va=kt(0),Ba=[],Ua=sl.ReactCurrentDispatcher,$a=sl.ReactCurrentBatchConfig,Xa=0,Ha=null,Wa=null,Ya=null,Ka=!1,Za=!1,Ga=0,Ja=0,qa={readContext:tn,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},Qa={readContext:tn,useCallback(e,t){return Mn().memoizedState=[e,void 0===t?null:t],e},useContext:tn,useEffect:Un,useImperativeHandle(e,t,n){return n=null!=n?n.concat([e]):null,Vn(4194308,4,Wn.bind(null,t,e),n)},useLayoutEffect(e,t){return Vn(4194308,4,e,t)},useInsertionEffect(e,t){return Vn(4,2,e,t)},useMemo(e,t){var n=Mn()
return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer(e,t,n){var r=Mn()
return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=er.bind(null,Ha,e),[r.memoizedState,e]},useRef(e){return e={current:e},Mn().memoizedState=e},useState:Rn,useDebugValue:Kn,useDeferredValue(e){return Mn().memoizedState=e},useTransition(){var e=Rn(!1),t=e[0]
return e=qn.bind(null,e[1]),Mn().memoizedState=e,[t,e]},useMutableSource(){},useSyncExternalStore(e,t,n){var i,l=Ha,o=Mn()
if(Ma){if(void 0===n)throw Error(r(407))
n=n()}else{if(n=t(),null===_s)throw Error(r(349))
30&Xa||On(l,t,n)}return o.memoizedState=n,i={value:n,getSnapshot:t},o.queue=i,Un(zn.bind(null,l,i,e),[e]),l.flags|=2048,Fn(9,Dn.bind(null,l,i,n,t),void 0,null),n},useId(){var e,t,n=Mn(),r=_s.identifierPrefix
return Ma?(e=ka,r=":"+r+"R"+(e=((t=wa)&~(1<<32-io(t)-1)).toString(32)+e),(e=Ga++)>0&&(r+="H"+e.toString(32)),r+=":"):r=":"+r+"r"+(e=Ja++).toString(32)+":",n.memoizedState=r},unstable_isNewReconciler:!1},es={readContext:tn,useCallback:Zn,useContext:tn,useEffect:$n,useImperativeHandle:Yn,useInsertionEffect:Xn,useLayoutEffect:Hn,useMemo:Gn,useReducer:Sn,useRef:Ln,useState(){return Sn(Cn)},useDebugValue:Kn,useDeferredValue(e){return Jn(En(),Wa.memoizedState,e)},useTransition(){return[Sn(Cn)[0],En().memoizedState]},useMutableSource:Pn,useSyncExternalStore:In,useId:Qn,unstable_isNewReconciler:!1},ts={readContext:tn,useCallback:Zn,useContext:tn,useEffect:$n,useImperativeHandle:Yn,useInsertionEffect:Xn,useLayoutEffect:Hn,useMemo:Gn,useReducer:Tn,useRef:Ln,useState(){return Tn(Cn)},useDebugValue:Kn,useDeferredValue(e){var t=En()
return null===Wa?t.memoizedState=e:Jn(t,Wa.memoizedState,e)},useTransition(){return[Tn(Cn)[0],En().memoizedState]},useMutableSource:Pn,useSyncExternalStore:In,useId:Qn,unstable_isNewReconciler:!1},ns={isMounted(e){return!!(e=e.L)&&Z(e)===e},enqueueSetState(e,t,n){e=e.L
var r=si(),i=ci(e),l=an(r,i)
l.payload=t,null!=n&&(l.callback=n),null!==(t=sn(e,l,i))&&(di(t,e,i,r),cn(t,e,i))},enqueueReplaceState(e,t,n){e=e.L
var r=si(),i=ci(e),l=an(r,i)
l.tag=1,l.payload=t,null!=n&&(l.callback=n),null!==(t=sn(e,l,i))&&(di(t,e,i,r),cn(t,e,i))},enqueueForceUpdate(e,t){e=e.L
var n=si(),r=ci(e),i=an(n,r)
i.tag=2,null!=t&&(i.callback=t),null!==(t=sn(e,i,r))&&(di(t,e,r,n),cn(t,e,r))}},rs="function"==typeof WeakMap?WeakMap:Map,is=sl.ReactCurrentOwner,ls=!1,os={dehydrated:null,treeContext:null,retryLane:0},us=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode)
else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child
continue}if(n===t)break
for(;null===n.sibling;){if(null===n.return||n.return===t)return
n=n.return}n.sibling.return=n.return,n=n.sibling}},as=function(){},ss=function(e,t,n,r){var i,l,o,u,a,s=e.memoizedProps
if(s!==r){switch(e=t.stateNode,hn(Ra.current),i=null,n){case"input":s=x(e,s),r=x(e,r),i=[]
break
case"select":s=Nl({},s,{value:void 0}),r=Nl({},r,{value:void 0}),i=[]
break
case"textarea":s=C(e,s),r=C(e,r),i=[]
break
default:"function"!=typeof s.onClick&&"function"==typeof r.onClick&&(e.onclick=ft)}for(a in j(n,r),n=null,s)if(!r.hasOwnProperty(a)&&s.hasOwnProperty(a)&&null!=s[a])if("style"===a)for(l in o=s[a])o.hasOwnProperty(l)&&(n||(n={}),n[l]="")
else"dangerouslySetInnerHTML"!==a&&"children"!==a&&"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(ic.hasOwnProperty(a)?i||(i=[]):(i=i||[]).push(a,null))
for(a in r)if(u=r[a],o=null!=s?s[a]:void 0,r.hasOwnProperty(a)&&u!==o&&(null!=u||null!=o))if("style"===a)if(o){for(l in o)!o.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="")
for(l in u)u.hasOwnProperty(l)&&o[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(a,n)),n=u
else"dangerouslySetInnerHTML"===a?(u=u?u.P:void 0,o=o?o.P:void 0,null!=u&&o!==u&&(i=i||[]).push(a,u)):"children"===a?"string"!=typeof u&&"number"!=typeof u||(i=i||[]).push(a,""+u):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&(ic.hasOwnProperty(a)?(null!=u&&"onScroll"===a&&tt("scroll",e),i||o===u||(i=[])):(i=i||[]).push(a,u))
n&&(i=i||[]).push("style",n),a=i,(t.updateQueue=a)&&(t.flags|=4)}},cs=function(e,t,n,r){n!==r&&(t.flags|=4)},ds=!1,fs=!1,ps="function"==typeof WeakSet?WeakSet:Set,hs=null,ms=!1,vs=null,ys=!1,bs=Math.ceil,gs=sl.ReactCurrentDispatcher,xs=sl.ReactCurrentOwner,ws=sl.ReactCurrentBatchConfig,ks=0,_s=null,Ns=null,Ms=0,Es=0,Cs=kt(0),Ss=0,Ts=null,Ps=0,Is=0,Os=0,Ds=null,zs=null,As=0,js=1/0,Rs=null,Fs=!1,Ls=null,Vs=null,Bs=!1,Us=null,$s=0,Xs=0,Hs=null,Ws=-1,Ys=0,Ks=function(e,t,n){var i,l,o,u,a,s,c,d
if(null!==e)if(e.memoizedProps!==t.pendingProps||sa.current)ls=!0
else{if(0===(e.lanes&n)&&!(128&t.flags))return ls=!1,function(e,t,n){switch(t.tag){case 3:Cr(t),Ht()
break
case 5:yn(t)
break
case 1:Et(t.type)&&Pt(t)
break
case 4:mn(t,t.stateNode.containerInfo)
break
case 10:var r=t.type.N,i=t.memoizedProps.value
Nt(Pa,r.h),r.h=i
break
case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Nt(Va,1&Va.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Pr(e,t,n):(Nt(Va,1&Va.current),null!==(e=Rr(e,t,n))?e.sibling:null)
Nt(Va,1&Va.current)
break
case 19:if(r=0!==(n&t.childLanes),128&e.flags){if(r)return Ar(e,t,n)
t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Nt(Va,Va.current),r)break
return null
case 22:case 23:return t.lanes=0,kr(e,t,n)}return Rr(e,t,n)}(e,t,n)
ls=!!(131072&e.flags)}else ls=!1,Ma&&1048576&t.flags&&At(t,ya,t.index)
switch(t.lanes=0,t.tag){case 2:return i=t.type,jr(e,t),e=t.pendingProps,l=Mt(t,aa.current),en(t,n),l=_n(null,t,i,e,l,n),o=Nn(),t.flags|=1,"object"==typeof l&&null!==l&&"function"==typeof l.render&&void 0===l.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Et(i)?(o=!0,Pt(t)):o=!1,t.memoizedState=null!==l.state&&void 0!==l.state?l.state:null,on(t),l.updater=ns,t.stateNode=l,l.L=t,cr(t,i,e,n),t=Er(null,t,i,!0,o,n)):(t.tag=0,Ma&&o&&jt(t),br(null,t,l,n),t=t.child),t
case 16:i=t.elementType
e:{switch(jr(e,t),e=t.pendingProps,i=(l=i.C)(i.M),t.type=i,l=t.tag=function(e){if("function"==typeof e)return Bi(e)?1:0
if(null!=e){if((e=e.$$typeof)===yl)return 11
if(e===xl)return 14}return 2}(i),e=lr(i,e),l){case 0:t=Nr(null,t,i,e,n)
break e
case 1:t=Mr(null,t,i,e,n)
break e
case 11:t=gr(null,t,i,e,n)
break e
case 14:t=xr(null,t,i,lr(i.type,e),n)
break e}throw Error(r(306,i,""))}return t
case 0:return i=t.type,l=t.pendingProps,Nr(e,t,i,l=t.elementType===i?l:lr(i,l),n)
case 1:return i=t.type,l=t.pendingProps,Mr(e,t,i,l=t.elementType===i?l:lr(i,l),n)
case 3:e:{if(Cr(t),null===e)throw Error(r(387))
if(i=t.pendingProps,l=(o=t.memoizedState).element,un(e,t),fn(t,i,null,n),i=(u=t.memoizedState).element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Sr(e,t,i,n,l=dr(Error(r(423)),t))
break e}if(i!==l){t=Sr(e,t,i,n,l=dr(Error(r(424)),t))
break e}for(Na=vt(t.stateNode.containerInfo.firstChild),_a=t,Ma=!0,Ea=null,n=Ta(t,null,i,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(Ht(),i===l){t=Rr(e,t,n)
break e}br(e,t,i,n)}t=t.child}return t
case 5:return yn(t),null===e&&Bt(t),i=t.type,l=t.pendingProps,o=null!==e?e.memoizedProps:null,u=l.children,pt(i,l)?u=null:null!==o&&pt(i,o)&&(t.flags|=32),_r(e,t),br(e,t,u,n),t.child
case 6:return null===e&&Bt(t),null
case 13:return Pr(e,t,n)
case 4:return mn(t,t.stateNode.containerInfo),i=t.pendingProps,null===e?t.child=Sa(t,null,i,n):br(e,t,i,n),t.child
case 11:return i=t.type,l=t.pendingProps,gr(e,t,i,l=t.elementType===i?l:lr(i,l),n)
case 7:return br(e,t,t.pendingProps,n),t.child
case 8:case 12:return br(e,t,t.pendingProps.children,n),t.child
case 10:e:{if(i=t.type.N,l=t.pendingProps,o=t.memoizedProps,u=l.value,Nt(Pa,i.h),i.h=u,null!==o)if(Nu(o.value,u)){if(o.children===l.children&&!sa.current){t=Rr(e,t,n)
break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){if(null!==(a=o.dependencies))for(u=o.child,s=a.firstContext;null!==s;){if(s.context===i){1===o.tag&&((s=an(-1,n&-n)).tag=2,null!==(c=o.updateQueue)&&(null===(d=(c=c.shared).pending)?s.next=s:(s.next=d.next,d.next=s),c.pending=s)),o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),Qt(o.return,n,t),a.lanes|=n
break}s=s.next}else if(10===o.tag)u=o.type===t.type?null:o.child
else if(18===o.tag){if(null===(u=o.return))throw Error(r(341))
u.lanes|=n,null!==(a=u.alternate)&&(a.lanes|=n),Qt(u,n,t),u=o.sibling}else u=o.child
if(null!==u)u.return=o
else for(u=o;null!==u;){if(u===t){u=null
break}if(null!==(o=u.sibling)){o.return=u.return,u=o
break}u=u.return}o=u}br(e,t,l.children,n),t=t.child}return t
case 9:return l=t.type,i=t.pendingProps.children,en(t,n),i=i(l=tn(l)),t.flags|=1,br(e,t,i,n),t.child
case 14:return l=lr(i=t.type,t.pendingProps),xr(e,t,i,l=lr(i.type,l),n)
case 15:return wr(e,t,t.type,t.pendingProps,n)
case 17:return i=t.type,l=t.pendingProps,l=t.elementType===i?l:lr(i,l),jr(e,t),t.tag=1,Et(i)?(e=!0,Pt(t)):e=!1,en(t,n),ar(t,i,l),cr(t,i,l,n),Er(null,t,i,!0,e,n)
case 19:return Ar(e,t,n)
case 22:return kr(e,t,n)}throw Error(r(156,t.tag))},Zs="function"==typeof reportError?reportError:function(e){},rl.prototype.render=nl.prototype.render=function(e){var t=this.$
if(null===t)throw Error(r(409))
qi(e,t,null,null)},rl.prototype.unmount=nl.prototype.unmount=function(){var e,t=this.$
null!==t&&(this.$=null,e=t.containerInfo,gi(function(){qi(null,t,null,null)}),e[ta]=null)},rl.prototype.unstable_scheduleHydration=function(e){var t,n
if(e){for(e={blockedOn:null,target:e,priority:t=ho()},n=0;n<_o.length&&0!==t&&t<_o[n].priority;n++);_o.splice(n,0,e),0===n&&de(e)}},co=function(e){var t,n
switch(e.tag){case 3:(t=e.stateNode).current.memoizedState.isDehydrated&&0!==(n=ee(t.pendingLanes))&&(ue(t,1|n),fi(t,Zl()),!(6&ks)&&(js=Zl()+500,Dt()))
break
case 13:gi(function(){var t,n=ln(e,1)
null!==n&&(t=si(),di(n,e,1,t))}),tl(e,1)}},fo=function(e){var t
13===e.tag&&(null!==(t=ln(e,134217728))&&di(t,e,134217728,si()),tl(e,134217728))},po=function(e){var t,n
13===e.tag&&(null!==(n=ln(e,t=ci(e)))&&di(n,e,t,si()),tl(e,t))},ho=function(){return so},mo=function(e,t){var n=so
try{return so=e,t()}finally{so=n}},zl=function(e,t,n){var i,l
switch(t){case"input":if(_(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode
for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++)if((i=n[t])!==e&&i.form===e.form){if(!(l=wt(i)))throw Error(r(90))
b(i),_(i,l)}}break
case"textarea":T(e,n)
break
case"select":null!=(t=n.value)&&E(e,!!n.multiple,t,!1)}},U=bi,$=gi,Gs={usingClientEntryPoint:!1,Events:[gt,xt,wt,V,B,bi]},qs={bundleType:(Js={findFiberByHostInstance:bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"}).bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sl.ReactCurrentDispatcher,findHostInstanceByFiber(e){return null===(e=q(e))?null:e.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"},"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&!(Qs=__REACT_DEVTOOLS_GLOBAL_HOOK__).isDisabled&&Qs.supportsFiber)try{no=Qs.inject(qs),ro=Qs}catch(ec){}t.i=Gs,t.createPortal=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if(!il(t))throw Error(r(200))
return function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
return{$$typeof:dl,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!il(e))throw Error(r(299))
var n=!1,i="",l=Zs
return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(i=t.identifierPrefix),void 0!==t.onRecoverableError&&(l=t.onRecoverableError)),t=Zi(e,1,!1,null,0,n,0,i,l),e[ta]=t.current,rt(8===e.nodeType?e.parentNode:e),new nl(t)},t.findDOMNode=function(e){if(null==e)return null
if(1===e.nodeType)return e
var t=e.L
if(void 0===t){if("function"==typeof e.render)throw Error(r(188))
throw e=Object.keys(e).join(","),Error(r(268,e))}return null===(e=q(t))?null:e.stateNode},t.flushSync=function(e){return gi(e)},t.hydrate=function(e,t,n){if(!ll(t))throw Error(r(200))
return ul(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!il(e))throw Error(r(405))
var i=null!=n&&n.hydratedSources||null,l=!1,o="",u=Zs
if(null!=n&&(!0===n.unstable_strictMode&&(l=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(u=n.onRecoverableError)),t=Ji(t,null,e,1,null!=n?n:null,l,0,o,u),e[ta]=t.current,rt(e),i)for(e=0;e<i.length;e++)l=(l=(n=i[e]).X)(n.H),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l)
return new rl(t)},t.render=function(e,t,n){if(!ll(t))throw Error(r(200))
return ul(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!ll(e))throw Error(r(40))
return!!e.B&&(gi(function(){ul(null,null,e,!1,function(){e.B=null,e[ta]=null})}),!0)},t.unstable_batchedUpdates=bi,t.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!ll(n))throw Error(r(200))
if(null==e||void 0===e.L)throw Error(r(38))
return ul(e,t,n,!1,i)},t.version="18.3.1-next-f1338f8080-20240426"},853(e,t,n){e.exports=n(234)},950(e,t,n){!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){}}(),e.exports=n(730)}},u={},a=e(43),s=e(391)
class c{static getConnectionPoint(e,t){var n,r
let i=2>=arguments.length||void 0===arguments[2]||arguments[2]
const l=32+25*(i?(null===(n=e.template)||void 0===n?void 0:n.outputs)||[]:(null===(r=e.template)||void 0===r?void 0:r.inputs)||[]).findIndex(e=>e.id===t),o=e.width||140
return e.height,{x:e.position.x+(i?o:0),y:e.position.y+l}}static arePortsCompatible(e,t){return e===t}static generateConnectionId(e,t,n,r){return"".concat(e,"-").concat(t,"-").concat(n,"-").concat(r)}static connectionExists(e,t,n){return e.some(e=>e.target===t&&e.targetInput===n)}}const d="avx-builder-canvas"
class f{static saveToLocalStorage(e){try{localStorage.setItem(d,JSON.stringify(e))}catch(e){throw Error("Failed to save canvas to local storage")}}static loadFromLocalStorage(){try{const e=localStorage.getItem(d)
if(!e)return null
const t=JSON.parse(e)
return this.isValidCanvasData(t)?t:(localStorage.removeItem(d),null)}catch(e){return localStorage.removeItem(d),null}}static exportToJSON(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"avx-canvas.json"
try{const n=JSON.stringify(e,null,2),r=new Blob([n],{type:"application/json"}),i=URL.createObjectURL(r),l=document.createElement("a")
l.href=i,l.download=t,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(i)}catch(e){throw Error("Failed to export canvas to JSON")}}static importFromJSON(e){return new Promise((t,n)=>{const r=new FileReader
r.onload=e=>{try{var r
const i=null===(r=e.target)||void 0===r?void 0:r.result,l=JSON.parse(i)
if(!this.isValidCanvasData(l))return void n(Error("Invalid canvas data structure in file"))
t(l)}catch(e){n(Error("Failed to parse JSON file"))}},r.onerror=()=>{n(Error("Failed to read file"))},r.readAsText(e)})}static clearLocalStorage(){try{localStorage.removeItem(d)}catch(e){}}static isValidCanvasData(e){return e&&"object"==typeof e&&Array.isArray(e.nodes)&&Array.isArray(e.connections)&&e.viewport&&"number"==typeof e.viewport.x&&"number"==typeof e.viewport.y&&"number"==typeof e.viewport.zoom&&"number"==typeof e.nodeIdCounter}static getLastSavedTimestamp(){try{const e=localStorage.getItem(d)
if(!e)return null
const t=JSON.parse(e)
return t.timestamp?new Date(t.timestamp):null}catch(e){return null}}static hasUnsavedChanges(e){try{const t=localStorage.getItem(d)
if(!t)return!0
const n=JSON.parse(t)
return JSON.stringify(e)!==JSON.stringify(n)}catch(e){return!0}}}const p={xmm_epi8:{color:"#ef4444",name:"XMM EPI8"},xmm_epi16:{color:"#dc2626",name:"XMM EPI16"},xmm_epi32:{color:"#b91c1c",name:"XMM EPI32"},xmm_epi64:{color:"#991b1b",name:"XMM EPI64"},xmm_ps:{color:"#f59e0b",name:"XMM PS"},xmm_pd:{color:"#d97706",name:"XMM PD"},ymm_epi8:{color:"#22c55e",name:"YMM EPI8"},ymm_epi16:{color:"#16a34a",name:"YMM EPI16"},ymm_epi32:{color:"#15803d",name:"YMM EPI32"},ymm_epi64:{color:"#166534",name:"YMM EPI64"},ymm_ps:{color:"#06b6d4",name:"YMM PS"},ymm_pd:{color:"#0891b2",name:"YMM PD"},zmm_epi8:{color:"#3b82f6",name:"ZMM EPI8"},zmm_epi16:{color:"#2563eb",name:"ZMM EPI16"},zmm_epi32:{color:"#1d4ed8",name:"ZMM EPI32"},zmm_epi64:{color:"#1e40af",name:"ZMM EPI64"},zmm_ps:{color:"#7c3aed",name:"ZMM PS"},zmm_pd:{color:"#6d28d9",name:"ZMM PD"}},h=(e,t)=>"".concat(e,"_").concat(t),m=(e,t)=>({register:e,underlying:t}),v=[{type:"valueNode",label:"XMM EPI16 Value",description:"XMM register with 16-bit integers (8 elements)",category:"value",outputs:[{id:"out1",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"XMM EPI16"}]},{type:"valueNode",label:"XMM EPI32 Value",description:"XMM register with 32-bit integers (4 elements)",category:"value",outputs:[{id:"out1",type:h("xmm","epi32"),avxType:m("xmm","epi32"),label:"XMM EPI32"}]},{type:"valueNode",label:"XMM PS Value",description:"XMM register with single-precision floats (4 elements)",category:"value",outputs:[{id:"out1",type:h("xmm","ps"),avxType:m("xmm","ps"),label:"XMM PS"}]},{type:"valueNode",label:"YMM EPI16 Value",description:"YMM register with 16-bit integers (16 elements)",category:"value",outputs:[{id:"out1",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"YMM EPI16"}]},{type:"valueNode",label:"XMM EPI32 Value",description:"XMM register with 32-bit integers (4 elements)",category:"value",outputs:[{id:"out1",type:h("xmm","epi32"),avxType:m("xmm","epi32"),label:"XMM EPI32"}]},{type:"valueNode",label:"YMM EPI32 Value",description:"YMM register with 32-bit integers (8 elements)",category:"value",outputs:[{id:"out1",type:h("ymm","epi32"),avxType:m("ymm","epi32"),label:"YMM EPI32"}]},{type:"valueNode",label:"ZMM EPI32 Value",description:"ZMM register with 32-bit integers (16 elements)",category:"value",outputs:[{id:"out1",type:h("zmm","epi32"),avxType:m("zmm","epi32"),label:"ZMM EPI32"}]},{type:"valueNode",label:"XMM EPI64 Value",description:"XMM register with 64-bit integers (2 elements)",category:"value",outputs:[{id:"out1",type:h("xmm","epi64"),avxType:m("xmm","epi64"),label:"XMM EPI64"}]},{type:"valueNode",label:"YMM EPI64 Value",description:"YMM register with 64-bit integers (4 elements)",category:"value",outputs:[{id:"out1",type:h("ymm","epi64"),avxType:m("ymm","epi64"),label:"YMM EPI64"}]},{type:"valueNode",label:"ZMM EPI16 Value",description:"ZMM register with 16-bit integers (32 elements)",category:"value",outputs:[{id:"out1",type:h("zmm","epi16"),avxType:m("zmm","epi16"),label:"ZMM EPI16"}]},{type:"operationNode",label:"_mm_add_epi16",description:"Add packed 16-bit integers",category:"operation",operation:"_mm_add_epi16",inputs:[{id:"in1",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"A"},{id:"in2",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"B"}],outputs:[{id:"out1",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"Result"}]},{type:"operationNode",label:"_mm_mullo_epi16",description:"Multiply packed 16-bit integers and store low 16 bits",category:"operation",operation:"_mm_mullo_epi16",inputs:[{id:"in1",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"A"},{id:"in2",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"B"}],outputs:[{id:"out1",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"Result"}]},{type:"operationNode",label:"_mm_mulhi_epu16",description:"Multiply packed unsigned 16-bit integers and store high 16 bits",category:"operation",operation:"_mm_mulhi_epu16",inputs:[{id:"in1",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"A"},{id:"in2",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"B"}],outputs:[{id:"out1",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"Result"}]},{type:"operationNode",label:"_mm_add_ps",description:"Add packed single-precision floating-point numbers",category:"operation",operation:"_mm_add_ps",inputs:[{id:"in1",type:h("xmm","ps"),avxType:m("xmm","ps"),label:"A"},{id:"in2",type:h("xmm","ps"),avxType:m("xmm","ps"),label:"B"}],outputs:[{id:"out1",type:h("xmm","ps"),avxType:m("xmm","ps"),label:"Result"}]},{type:"operationNode",label:"_mm_bsrli_si128",description:"Byte shift right logical by immediate",category:"operation",operation:"_mm_bsrli_si128",inputs:[{id:"in1",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"A"}],outputs:[{id:"out1",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"Result"}],constInputs:[{id:"imm8",label:"Bytes to shift",type:"imm8",defaultValue:2}]},{type:"operationNode",label:"_mm_cvtepi16_epi32",description:"Convert packed 16-bit integers to 32-bit integers",category:"operation",operation:"_mm_cvtepi16_epi32",inputs:[{id:"in1",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"A"}],outputs:[{id:"out1",type:h("xmm","epi32"),avxType:m("xmm","epi32"),label:"Result"}]},{type:"operationNode",label:"_mm_unpacklo_epi16",description:"Unpack and interleave low 16-bit integers from two XMM registers",category:"operation",operation:"_mm_unpacklo_epi16",inputs:[{id:"in1",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"A"},{id:"in2",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"B"}],outputs:[{id:"out1",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"Result"}]},{type:"operationNode",label:"_mm_unpackhi_epi16",description:"Unpack and interleave high 16-bit integers from two XMM registers",category:"operation",operation:"_mm_unpackhi_epi16",inputs:[{id:"in1",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"A"},{id:"in2",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"B"}],outputs:[{id:"out1",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"Result"}]},{type:"operationNode",label:"_mm_add_epi32",description:"Add packed 32-bit integers",category:"operation",operation:"_mm_add_epi32",inputs:[{id:"in1",type:h("xmm","epi32"),avxType:m("xmm","epi32"),label:"A"},{id:"in2",type:h("xmm","epi32"),avxType:m("xmm","epi32"),label:"B"}],outputs:[{id:"out1",type:h("xmm","epi32"),avxType:m("xmm","epi32"),label:"Result"}]},{type:"operationNode",label:"_mm256_add_epi32",description:"Add packed 32-bit integers (AVX2)",category:"operation",operation:"_mm256_add_epi32",inputs:[{id:"in1",type:h("ymm","epi32"),avxType:m("ymm","epi32"),label:"A"},{id:"in2",type:h("ymm","epi32"),avxType:m("ymm","epi32"),label:"B"}],outputs:[{id:"out1",type:h("ymm","epi32"),avxType:m("ymm","epi32"),label:"Result"}]},{type:"operationNode",label:"_mm512_add_epi32",description:"Add packed 32-bit integers (AVX-512)",category:"operation",operation:"_mm512_add_epi32",inputs:[{id:"in1",type:h("zmm","epi32"),avxType:m("zmm","epi32"),label:"A"},{id:"in2",type:h("zmm","epi32"),avxType:m("zmm","epi32"),label:"B"}],outputs:[{id:"out1",type:h("zmm","epi32"),avxType:m("zmm","epi32"),label:"Result"}]},{type:"operationNode",label:"_mm256_add_epi16",description:"Add packed 16-bit integers (AVX2)",category:"operation",operation:"_mm256_add_epi16",inputs:[{id:"in1",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"A"},{id:"in2",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"B"}],outputs:[{id:"out1",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"Result"}]},{type:"operationNode",label:"_mm256_unpacklo_epi16",description:"Unpack and interleave low 16-bit integers (AVX2)",category:"operation",operation:"_mm256_unpacklo_epi16",inputs:[{id:"in1",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"A"},{id:"in2",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"B"}],outputs:[{id:"out1",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"Result"}]},{type:"operationNode",label:"_mm256_unpackhi_epi16",description:"Unpack and interleave high 16-bit integers (AVX2)",category:"operation",operation:"_mm256_unpackhi_epi16",inputs:[{id:"in1",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"A"},{id:"in2",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"B"}],outputs:[{id:"out1",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"Result"}]},{type:"operationNode",label:"_mm256_mullo_epi16",description:"Multiply packed 16-bit integers and store low 16 bits (AVX2)",category:"operation",operation:"_mm256_mullo_epi16",inputs:[{id:"in1",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"A"},{id:"in2",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"B"}],outputs:[{id:"out1",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"Result"}]},{type:"operationNode",label:"_mm256_mulhi_epi16",description:"Multiply packed 16-bit integers and store high 16 bits (AVX2)",category:"operation",operation:"_mm256_mulhi_epi16",inputs:[{id:"in1",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"A"},{id:"in2",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"B"}],outputs:[{id:"out1",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"Result"}]},{type:"operationNode",label:"_mm_packs_epi32",description:"Pack 32-bit integers to 16-bit integers with saturation",category:"operation",operation:"_mm_packs_epi32",inputs:[{id:"in1",type:h("xmm","epi32"),avxType:m("xmm","epi32"),label:"A"},{id:"in2",type:h("xmm","epi32"),avxType:m("xmm","epi32"),label:"B"}],outputs:[{id:"out1",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"Result"}]},{type:"operationNode",label:"_mm256_packs_epi32",description:"Pack 32-bit integers to 16-bit integers with saturation (AVX2)",category:"operation",operation:"_mm256_packs_epi32",inputs:[{id:"in1",type:h("ymm","epi32"),avxType:m("ymm","epi32"),label:"A"},{id:"in2",type:h("ymm","epi32"),avxType:m("ymm","epi32"),label:"B"}],outputs:[{id:"out1",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"Result"}]},{type:"operationNode",label:"_mm512_packs_epi32",description:"Pack 32-bit integers to 16-bit integers with saturation (AVX-512)",category:"operation",operation:"_mm512_packs_epi32",inputs:[{id:"in1",type:h("zmm","epi32"),avxType:m("zmm","epi32"),label:"A"},{id:"in2",type:h("zmm","epi32"),avxType:m("zmm","epi32"),label:"B"}],outputs:[{id:"out1",type:h("zmm","epi16"),avxType:m("zmm","epi16"),label:"Result"}]},{type:"operationNode",label:"_mm_packs_epi16",description:"Pack 16-bit integers to 8-bit integers with saturation",category:"operation",operation:"_mm_packs_epi16",inputs:[{id:"in1",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"A"},{id:"in2",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"B"}],outputs:[{id:"out1",type:h("xmm","epi8"),avxType:m("xmm","epi8"),label:"Result"}]},{type:"operationNode",label:"_mm256_packs_epi16",description:"Pack 16-bit integers to 8-bit integers with saturation (AVX2)",category:"operation",operation:"_mm256_packs_epi16",inputs:[{id:"in1",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"A"},{id:"in2",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"B"}],outputs:[{id:"out1",type:h("ymm","epi8"),avxType:m("ymm","epi8"),label:"Result"}]},{type:"operationNode",label:"_mm512_packs_epi16",description:"Pack 16-bit integers to 8-bit integers with saturation (AVX-512)",category:"operation",operation:"_mm512_packs_epi16",inputs:[{id:"in1",type:h("zmm","epi16"),avxType:m("zmm","epi16"),label:"A"},{id:"in2",type:h("zmm","epi16"),avxType:m("zmm","epi16"),label:"B"}],outputs:[{id:"out1",type:h("zmm","epi8"),avxType:m("zmm","epi8"),label:"Result"}]},{type:"operationNode",label:"_mm512_unpacklo_epi16",description:"Unpack and interleave low 16-bit integers from two ZMM registers (AVX-512)",category:"operation",operation:"_mm512_unpacklo_epi16",inputs:[{id:"in1",type:h("zmm","epi16"),avxType:m("zmm","epi16"),label:"A"},{id:"in2",type:h("zmm","epi16"),avxType:m("zmm","epi16"),label:"B"}],outputs:[{id:"out1",type:h("zmm","epi16"),avxType:m("zmm","epi16"),label:"Result"}]},{type:"operationNode",label:"_mm512_unpackhi_epi16",description:"Unpack and interleave high 16-bit integers from two ZMM registers (AVX-512)",category:"operation",operation:"_mm512_unpackhi_epi16",inputs:[{id:"in1",type:h("zmm","epi16"),avxType:m("zmm","epi16"),label:"A"},{id:"in2",type:h("zmm","epi16"),avxType:m("zmm","epi16"),label:"B"}],outputs:[{id:"out1",type:h("zmm","epi16"),avxType:m("zmm","epi16"),label:"Result"}]},{type:"operationNode",label:"Custom Pair Convert EPI16\u2192EPI32",description:"Convert 16-bit integers to 32-bit integers (checks for paired values)",category:"operation",operation:"custom_pair_convert_epi16_to_epi32",inputs:[{id:"in1",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"EPI16 Input"}],outputs:[{id:"out1",type:h("xmm","epi32"),avxType:m("xmm","epi32"),label:"EPI32 Output"}]},{type:"operationNode",label:"Custom Pair Convert EPI32\u2192EPI64",description:"Convert 32-bit integers to 64-bit integers (checks for paired values)",category:"operation",operation:"custom_pair_convert_epi32_to_epi64",inputs:[{id:"in1",type:h("xmm","epi32"),avxType:m("xmm","epi32"),label:"EPI32 Input"}],outputs:[{id:"out1",type:h("xmm","epi64"),avxType:m("xmm","epi64"),label:"EPI64 Output"}]},{type:"operationNode",label:"Custom Pair Convert YMM EPI16\u2192EPI32",description:"Convert YMM 16-bit integers to 32-bit integers (checks for paired values)",category:"operation",operation:"custom_pair_convert_ymm_epi16_to_epi32",inputs:[{id:"in1",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"YMM EPI16 Input"}],outputs:[{id:"out1",type:h("ymm","epi32"),avxType:m("ymm","epi32"),label:"YMM EPI32 Output"}]},{type:"operationNode",label:"Custom Pair Convert YMM EPI32\u2192EPI64",description:"Convert YMM 32-bit integers to 64-bit integers (checks for paired values)",category:"operation",operation:"custom_pair_convert_ymm_epi32_to_epi64",inputs:[{id:"in1",type:h("ymm","epi32"),avxType:m("ymm","epi32"),label:"YMM EPI32 Input"}],outputs:[{id:"out1",type:h("ymm","epi64"),avxType:m("ymm","epi64"),label:"YMM EPI64 Output"}]},{type:"operationNode",label:"_mm_cvtepi16_epi32",description:"Convert 16-bit integers to 32-bit integers (takes lower half of elements)",category:"operation",operation:"cvtepi16_epi32",inputs:[{id:"in1",type:h("xmm","epi16"),avxType:m("xmm","epi16"),label:"EPI16 Input"}],outputs:[{id:"out1",type:h("xmm","epi32"),avxType:m("xmm","epi32"),label:"EPI32 Output"}]},{type:"operationNode",label:"_mm256_cvtepi16_epi32",description:"Convert YMM 16-bit integers to 32-bit integers (takes lower half of elements)",category:"operation",operation:"cvtepi16_epi32_ymm",inputs:[{id:"in1",type:h("ymm","epi16"),avxType:m("ymm","epi16"),label:"YMM EPI16 Input"}],outputs:[{id:"out1",type:h("ymm","epi32"),avxType:m("ymm","epi32"),label:"YMM EPI32 Output"}]},{type:"operationNode",label:"_mm512_cvtepi16_epi32",description:"Convert ZMM 16-bit integers to 32-bit integers (takes lower half of elements)",category:"operation",operation:"cvtepi16_epi32_zmm",inputs:[{id:"in1",type:h("zmm","epi16"),avxType:m("zmm","epi16"),label:"ZMM EPI16 Input"}],outputs:[{id:"out1",type:h("zmm","epi32"),avxType:m("zmm","epi32"),label:"ZMM EPI32 Output"}]}],y=e=>b(e.register)/g(e.underlying),b=e=>{switch(e){case"xmm":return 128
case"ymm":return 256
case"zmm":return 512}},g=e=>{switch(e){case"epi8":return 8
case"epi16":return 16
case"epi32":case"ps":return 32
case"epi64":case"pd":return 64}},x=(e,t)=>Array.from({length:t},(t,n)=>"".concat(e).concat(n+1)),w=e=>{let t=e.replace("_mm256_","").replace("_mm_","").replace("_epi16","").replace("_epi32","").replace("_epi64","").replace("_epi8","").replace("_ps","").replace("_pd","").replace("_si128","")
const n={add:"sum",sub:"diff",mul:"prod",mullo:"mul_lo",mulhi:"mul_hi",div:"quot",and:"and",or:"or",xor:"xor",bsrli:"shift_r",bslli:"shift_l",cvt:"conv",unpacklo:"unp_lo",unpackhi:"unp_hi",unpack:"unp",packs:"pack"}
for(const[e,r]of Object.entries(n))if(t.includes(e))return r
return t.slice(0,6)}
class k{static checkPairedValues(e,t){if(e.length%2!=0)return!1
for(let t=0;t<e.length;t+=2){var n,r
const i=e[t],l=e[t+1]
if(!i.startsWith("val_low(")||!l.startsWith("val_hi("))return!1
const o=null===(n=i.match(/val_low\((.+)\)/))||void 0===n?void 0:n[1],u=null===(r=l.match(/val_hi\((.+)\)/))||void 0===r?void 0:r[1]
if(!o||!u||o!==u)return!1}return!0}static convertPairedCustomEpi16ToEpi32(e){if(!k.checkPairedValues(e,"epi16"))return{success:!1,error:"EPI16 values must be in pairs (val_low, val_hi) with same values",canConnect:!1}
const t=[]
for(let r=0;r<e.length;r+=2){var n
const i=null===(n=e[r].match(/val_low\((.+)\)/))||void 0===n?void 0:n[1]
i&&t.push(i)}return{success:!0,output:t,canConnect:!0}}static convertPairedCustomEpi32ToEpi64(e){if(!k.checkPairedValues(e,"epi32"))return{success:!1,error:"EPI32 values must be in pairs (val_low, val_hi) with same values",canConnect:!1}
const t=[]
for(let r=0;r<e.length;r+=2){var n
const i=null===(n=e[r].match(/val_low\((.+)\)/))||void 0===n?void 0:n[1]
i&&t.push(i)}return{success:!0,output:t,canConnect:!0}}static convertEpi16ToEpi32(e){return{success:!0,output:e.slice(0,4),canConnect:!0}}static convertYmmEpi16ToEpi32(e){return{success:!0,output:e.slice(0,8),canConnect:!0}}static convertZmmEpi16ToEpi32(e){return{success:!0,output:e.slice(0,16),canConnect:!0}}static getConversionFunction(e){switch(e){case"custom_pair_convert_epi16_to_epi32":case"custom_pair_convert_ymm_epi16_to_epi32":return this.convertPairedCustomEpi16ToEpi32
case"custom_pair_convert_epi32_to_epi64":case"custom_pair_convert_ymm_epi32_to_epi64":return this.convertPairedCustomEpi32ToEpi64
case"cvtepi16_epi32":return this.convertEpi16ToEpi32
case"cvtepi16_epi32_ymm":return this.convertYmmEpi16ToEpi32
case"cvtepi16_epi32_zmm":return this.convertZmmEpi16ToEpi32
default:return null}}static isConversionNode(e){return e.startsWith("custom_pair_convert_")||e.startsWith("cvtepi16_epi32")}static getExpectedInputType(e){switch(e){case"custom_pair_convert_epi16_to_epi32":case"custom_pair_convert_ymm_epi16_to_epi32":case"cvtepi16_epi32":case"cvtepi16_epi32_ymm":case"cvtepi16_epi32_zmm":return"epi16"
case"custom_pair_convert_epi32_to_epi64":case"custom_pair_convert_ymm_epi32_to_epi64":return"epi32"
default:return null}}static getOutputType(e){switch(e){case"custom_pair_convert_epi16_to_epi32":case"custom_pair_convert_epi32_to_epi64":case"custom_pair_convert_ymm_epi16_to_epi32":case"cvtepi16_epi32":case"cvtepi16_epi32_ymm":case"cvtepi16_epi32_zmm":return"epi32"
case"custom_pair_convert_ymm_epi32_to_epi64":return"epi64"
default:return null}}static getRegisterType(e){return e.includes("ymm_")?"ymm":e.includes("zmm_")?"zmm":"xmm"}}l=e(579)
class _ extends a.Component{constructor(){super(...arguments),this.W=!1,this.state={showDeleteButton:!1,isResizing:!1,resizeStart:{x:0,y:0,width:0,height:0},inputValue:"",hasNameError:!1,conversionError:"",conversionResult:null,operationDisplay:[]},this.paddingHorizontalSize=10,this.getNodeStyle=e=>{const t="absolute px-".concat(this.paddingHorizontalSize," py-3 shadow-lg rounded-lg bg-white border-2 cursor-move select-none")
let n="border-gray-200"
if(this.props.isMultiSelected)n="border-purple-500 shadow-purple-200"
else if(this.props.isSelected)n="border-blue-400 shadow-blue-200"
else switch(e){case"inputNode":n="border-blue-200 hover:border-blue-300"
break
case"processNode":n="border-purple-200 hover:border-purple-300"
break
case"outputNode":n="border-green-200 hover:border-green-300"}return"".concat(t," ").concat(n)},this.handleMouseEnter=()=>{this.setState({showDeleteButton:!0})},this.handleMouseLeave=()=>{this.setState({showDeleteButton:!1})},this.handleMouseDown=e=>{e.stopPropagation(),e.ctrlKey||e.metaKey?this.props.onSelectNode(this.props.node.id,!0):this.props.isMultiSelected||this.props.onSelectNode(this.props.node.id,!1),this.setState(t=>{this.props.onNodeDragStart(e,this.props.node.id)})},this.handleDeleteClick=e=>{e.stopPropagation(),this.props.onDeleteNode(this.props.node.id)},this.handleOutputMouseDown=(e,t)=>{e.stopPropagation(),this.props.onOutputDragStart(e,this.props.node,t)},this.handleResizeStart=e=>{e.stopPropagation()
const{node:t}=this.props,n=t.width||140,r=t.height||80
this.setState({isResizing:!0,resizeStart:{x:e.clientX,y:e.clientY,width:n,height:r}})
const i=e=>{const t=e.clientX-this.state.resizeStart.x,n=e.clientY-this.state.resizeStart.y,r=Math.max(140,this.state.resizeStart.width+t),i=Math.max(80,this.state.resizeStart.height+n)
this.props.onResize(this.props.node.id,r,i)},l=()=>{this.setState({isResizing:!1}),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",l)}
document.addEventListener("mousemove",i),document.addEventListener("mouseup",l)},this.handleValueNameChange=e=>{const t=e.target.value,n=""!==t&&this.props.nodes.some(e=>{var n
return e.id!==this.props.node.id&&"value"===(null===(n=e.template)||void 0===n?void 0:n.category)&&e.data.valueName===t})
this.setState({inputValue:t,hasNameError:n}),n||this.props.onUpdateNodeData(this.props.node.id,{valueName:t})},this.handleConstValueChange=(e,t)=>{var n
const{node:r}=this.props,l=i(i({},r.data.constValues),{},{[e]:t})
this.props.onUpdateNodeData(this.props.node.id,{constValues:l}),"operation"===(null===(n=r.template)||void 0===n?void 0:n.category)&&this.updateOperationDisplay()},this.renderValueNodeContent=()=>{var e,t
const{node:n}=this.props,{inputValue:r,hasNameError:i}=this.state,o=null===(e=n.template)||void 0===e||null===(t=e.outputs)||void 0===t?void 0:t[0]
if(null==o||!o.avxType)return null
const u=y(o.avxType),a=n.data.valueName||"v",s=x(a,u),c="w-full px-2 py-1 text-xs border rounded focus:outline-none ".concat(i?"border-red-500 bg-red-50 focus:border-red-600":"border-gray-300 focus:border-blue-500")
return(0,l.jsxs)("div",{className:"mt-2",children:[(0,l.jsxs)("div",{className:"mb-2",children:[(0,l.jsx)("label",{className:"text-xs text-gray-500 block mb-1",children:"Variable Name:"}),(0,l.jsx)("input",{type:"text",value:r,onChange:this.handleValueNameChange,className:c,placeholder:"Enter name...",onClick(e){return e.stopPropagation()},onMouseDown(e){return e.stopPropagation()},onKeyDown(e){return e.stopPropagation()}}),i&&(0,l.jsx)("div",{className:"text-xs text-red-600 mt-1",children:"This name is already used by another input node"})]}),(0,l.jsxs)("div",{className:"text-xs text-gray-700",children:[(0,l.jsxs)("div",{className:"font-medium mb-1",children:["Elements (",u,"):"]}),(0,l.jsx)("div",{className:"flex flex-wrap gap-1",children:s.map((e,t)=>(0,l.jsx)("div",{className:"bg-gray-50 px-2 py-1 rounded text-center",children:e},t))})]})]})},this.updateConversionState=()=>{const{node:e,connections:t,nodes:n}=this.props,{template:r}=e
if(null==r||!r.operation||!k.isConversionNode(r.operation))return
const l=r.inputs||[]
if(0===l.length)return
const o=(r=>{const i=t.find(t=>t.target===e.id&&t.targetInput===r)
if(i){const e=n.find(e=>e.id===i.source)
if(e){var l
if(e.data.valueName)return x(e.data.valueName,8)
if(e.data.computedExpressions&&e.data.computedExpressions.length>=8)return e.data.computedExpressions.slice(0,8)
if(null!==(l=e.template)&&void 0!==l&&l.operation){const t=w(e.template.operation)
return x(t,8)}}}return x("x",8)})(l[0].id),u=[]
for(let e=0;e<o.length;e+=2)e+1<o.length&&(u.push(o[e]),u.push(o[e+1]))
const a=this.handleConversionOperation(u,r.operation)
this.hasConversionResultChanged(a)&&this.setState(e=>i(i({},e),{},{conversionResult:a,conversionError:a.error||""}))},this.hasConversionResultChanged=e=>{var t,n
const r=this.state.conversionResult
if(!r)return!0
if(r.success!==e.success)return!0
if(r.error!==e.error)return!0
if(r.canConnect!==e.canConnect)return!0
if((null===(t=r.output)||void 0===t?void 0:t.length)!==(null===(n=e.output)||void 0===n?void 0:n.length))return!0
if(r.output&&e.output)for(let t=0;t<r.output.length;t++)if(r.output[t]!==e.output[t])return!0
return!1},this.handleConversionOperation=(e,t)=>{const n=k.getConversionFunction(t)
return n?n(e):{success:!1,error:"Unknown conversion operation",canConnect:!1}},this.updateOperationDisplay=()=>{var e,t,n
const{node:r,connections:i,nodes:l}=this.props,{template:o}=r
if(null==o||!o.operation||!i||!l)return
const u=o.inputs||[],a=o.outputs||[],s=o.constInputs||[]
if(0===a.length||!a[0].avxType)return
const c=y(a[0].avxType)
let d=[]
const f=(e,t)=>{const n=i.find(t=>t.target===r.id&&t.targetInput===e)
if(n){const e=l.find(e=>e.id===n.source)
if(e){var o
if(e.data.valueName)return x(e.data.valueName,t)
if(e.data.computedExpressions&&e.data.computedExpressions.length>=t)return e.data.computedExpressions.slice(0,t)
if(null!==(o=e.template)&&void 0!==o&&o.operation){const n=w(e.template.operation)
return x(n,t)}}}return x("x",t)}
if(k.isConversionNode(o.operation))d=null!==(e=this.state.conversionResult)&&void 0!==e&&e.success&&this.state.conversionResult.output?this.state.conversionResult.output:x("conv",c)
else if(2===u.length){const e=y(u[0].avxType),t=y(u[1].avxType),n=f(u[0].id,e),r=f(u[1].id,t)
d=((e,t,n)=>{if(e.includes("packs")){const r=t.length+n.length
return Array.from({length:r},(r,i)=>{const l=((e,t,n,r)=>{const i=e.includes("_mm_")&&!e.includes("_mm256_")&&!e.includes("_mm512_"),l=e.includes("_mm256_"),o=e.includes("_mm512_")let u,a
return i?(u=4>t,a=t%4):l?(u=8>t,a=t%8):o?(u=16>t,a=t%16):(u=4>t,a=t%4),u?n[a]||"a".concat(a+1):r[a]||"b".concat(a+1)})(e,i,t,n)
return"Sat16(".concat(l,")")})}const r=Math.min(t.length,n.length)
return Array.from({length:r},(r,i)=>{const l=t[i],o=n[i],u=/^[a-zA-Z_][a-zA-Z0-9_]*[0-9]+$/.test(l),a=/^[a-zA-Z_][a-zA-Z0-9_]*[0-9]+$/.test(o),s=u?l:"(".concat(l,")"),c=a?o:"(".concat(o,")")
if(e.includes("mullo"))return"val_low(".concat(s," * ").concat(c,")")
if(e.includes("mulhi"))return"val_hi(".concat(s," * ").concat(c,")")
if(e.includes("unpack"))return((e,t,n,r)=>{const i=e.includes("_mm_")&&!e.includes("_mm256_")&&!e.includes("_mm512_"),l=e.includes("_mm256_"),o=e.includes("_mm512_"),u=e.includes("unpacklo")
if(i){const e=(u?0:4)+Math.floor(t/2)
return t%2==0?n[e]||"a".concat(e+1):r[e]||"b".concat(e+1)}if(l){const e=t%8,i=8*Math.floor(t/8)+(u?0:4)+Math.floor(e/2)
return e%2==0?n[i]||"a".concat(i+1):r[i]||"b".concat(i+1)}if(o){const e=t%8,i=8*Math.floor(t/8)+(u?0:4)+Math.floor(e/2)
return e%2==0?n[i]||"a".concat(i+1):r[i]||"b".concat(i+1)}const a=t%2==0,s=Math.floor(t/2)
return a?n[s]||"a".concat(s+1):r[s]||"b".concat(s+1)})(e,i,t,n)
const d=(e=>e.includes("add")?"+":e.includes("sub")?"-":e.includes("mul")?"*":e.includes("div")?"/":e.includes("and")?"&":e.includes("or")?"|":e.includes("xor")?"^":e)(e)
return"".concat(s," ").concat(d," ").concat(c)})})(o.operation,n,r)}else if(1===u.length){const e=y(u[0].avxType),i=f(u[0].id,e),l=s.length>0?null!==(t=null===(n=r.data.constValues)||void 0===n?void 0:n[s[0].id])&&void 0!==t?t:s[0].defaultValue:void 0
d=((e,t,n)=>t.map(t=>{const r=/^[a-zA-Z_][a-zA-Z0-9_]*[0-9]+$/.test(t)
if(e.includes("cvt"))return"cvt(".concat(t,")")
if(e.includes("shift")||e.includes("bsr")||e.includes("bsl")){const e=void 0!==n?n:"imm"
return"".concat(r?t:"(".concat(t,")")," >> ").concat(e)}return"".concat(e,"(").concat(t,")")}))(o.operation,i,l)}if(d.length>0&&this.props.onUpdateNodeData){const e=r.data.computedExpressions||[];(d.length!==e.length||d.some((t,n)=>t!==e[n]))&&this.props.onUpdateNodeData(r.id,{computedExpressions:d})}this.W&&this.setState({operationDisplay:d})},this.renderOperationNodeContent=()=>{const{node:e}=this.props,{template:t}=e
if(null==t||!t.operation)return null
t.inputs
const n=t.outputs||[],r=t.constInputs||[]
if(0===n.length||!n[0].avxType)return null
const i=y(n[0].avxType),o=this.state.operationDisplay||[]
return(0,l.jsxs)("div",{className:"mt-2",children:[r.map(t=>{var n,r,i
return(0,l.jsxs)("div",{className:"mb-2",children:[(0,l.jsxs)("label",{className:"text-xs text-gray-500 block mb-1",children:[t.label,":"]}),(0,l.jsx)("input",{type:"number",value:null!==(n=null!==(r=null===(i=e.data.constValues)||void 0===i?void 0:i[t.id])&&void 0!==r?r:t.defaultValue)&&void 0!==n?n:0,onChange:e=>this.handleConstValueChange(t.id,parseInt(e.target.value)||0),className:"w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:border-blue-500",onClick(e){return e.stopPropagation()},onMouseDown(e){return e.stopPropagation()},onKeyDown(e){return e.stopPropagation()}})]},t.id)}),k.isConversionNode(t.operation)&&this.state.conversionError&&(0,l.jsxs)("div",{className:"mb-2 p-2 bg-red-50 border border-red-200 rounded text-xs text-red-700",children:[(0,l.jsx)("div",{className:"font-medium mb-1",children:"\u26a0\ufe0f Conversion Error:"}),(0,l.jsx)("div",{children:this.state.conversionError}),(0,l.jsx)("div",{className:"text-xs text-red-600 mt-1",children:"Outputs are disabled until error is resolved"})]}),(0,l.jsxs)("div",{className:"text-xs text-gray-700",children:[(0,l.jsxs)("div",{className:"font-medium mb-1",children:["Result (",i,"):"]}),(0,l.jsx)("div",{className:"flex flex-wrap gap-1",children:o.map((e,t)=>(0,l.jsx)("div",{className:"bg-blue-50 px-2 py-1 rounded text-center font-mono",children:e},t))})]})]})}}componentDidMount(){var e,t
this.W=!0
const{node:n}=this.props
"value"===(null===(e=n.template)||void 0===e?void 0:e.category)&&this.setState({inputValue:n.data.valueName||"v"}),"operation"===(null===(t=n.template)||void 0===t?void 0:t.category)&&this.updateOperationDisplay()}componentDidUpdate(e){var t,n,r
const{node:i}=this.props
"value"===(null===(t=i.template)||void 0===t?void 0:t.category)&&e.node.data.valueName!==i.data.valueName&&this.setState({inputValue:i.data.valueName||"v"}),k.isConversionNode((null===(n=i.template)||void 0===n?void 0:n.operation)||"")&&this.updateConversionState(),"operation"!==(null===(r=i.template)||void 0===r?void 0:r.category)||e.connections===this.props.connections&&e.nodes===this.props.nodes&&e.node.data.constValues===i.data.constValues||this.updateOperationDisplay()}componentWillUnmount(){this.W=!1}render(){var e,t
const{node:n,isDragging:r,isSelected:i}=this.props,{showDeleteButton:o}=this.state,u=n.template,a=(null==u?void 0:u.inputs)||[],s=(null==u?void 0:u.outputs)||[],c=n.width||140,d=n.height||80
return(0,l.jsxs)("div",{className:this.getNodeStyle(n.type),style:{left:n.position.x,top:n.position.y,width:c,height:d,zIndex:r?1e3:i?100:1,opacity:r?.8:1,minWidth:"140px",minHeight:"".concat(80+20*Math.max(a.length,s.length),"px")},onMouseDown:this.handleMouseDown,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,children:[o&&(0,l.jsx)("button",{className:"absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full text-xs flex items-center justify-center font-bold transition-all duration-200 hover:scale-110 z-10 shadow-md",onClick:this.handleDeleteClick,onMouseDown(e){return e.stopPropagation()},children:"\xd7"}),(0,l.jsx)("div",{className:"absolute bottom-0 right-0 w-4 h-4 cursor-se-resize opacity-0 hover:opacity-100 transition-opacity duration-200",onMouseDown:this.handleResizeStart,style:{zIndex:5},children:(0,l.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",className:"text-gray-400",children:(0,l.jsx)("path",{d:"M13.5 13.5L4.5 4.5M4.5 13.5L13.5 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}),a.map((e,t)=>{var r
return(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("div",{className:"input-handle absolute w-3 h-3 rounded-full border-2 border-white cursor-pointer hover:scale-110 transition-transform duration-200 shadow-sm",style:{backgroundColor:(null===(r=p[e.type])||void 0===r?void 0:r.color)||"#6366f1",left:-6-4*this.paddingHorizontalSize,top:20+25*t-6,zIndex:2},"data-node-id":n.id,"data-input-id":e.id,"data-input-type":e.type,title:"".concat(e.label," (").concat(e.type,")")}),(0,l.jsx)("div",{className:"absolute text-xs text-gray-600 whitespace-nowrap pointer-events-none font-medium",style:{left:8-4*this.paddingHorizontalSize,top:16+25*t},children:e.label})]},e.id)}),s.map((e,t)=>{var n
const r=!!u&&k.isConversionNode(u.operation||"")&&this.state.conversionError
return(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("div",{className:"absolute w-3 h-3 rounded-full border-2 border-white transition-all duration-200 shadow-sm ".concat(r?"opacity-50 cursor-not-allowed":"cursor-crosshair hover:scale-110"),style:{backgroundColor:r?"#9ca3af":(null===(n=p[e.type])||void 0===n?void 0:n.color)||"#6366f1",right:-6-4*this.paddingHorizontalSize,top:20+25*t-6,zIndex:2},onMouseDown:r?void 0:t=>this.handleOutputMouseDown(t,e),title:r?"Output disabled due to conversion error":"".concat(e.label," (").concat(e.type,")")}),(0,l.jsxs)("div",{className:"absolute text-xs whitespace-nowrap pointer-events-none text-right font-medium ".concat(r?"text-gray-400":"text-gray-600"),style:{right:9-4*this.paddingHorizontalSize,top:20+25*t-8},children:[e.label,r&&(0,l.jsx)("span",{className:"block text-xs text-red-500",children:"(Disabled)"})]})]},e.id)}),(0,l.jsx)("div",{className:"font-bold text-sm mt-1",children:n.data.label}),(0,l.jsx)("div",{className:"text-xs text-gray-500 mt-1",children:n.data.description}),"value"===(null===(e=n.template)||void 0===e?void 0:e.category)&&this.renderValueNodeContent(),"operation"===(null===(t=n.template)||void 0===t?void 0:t.category)&&this.renderOperationNodeContent()]})}}class N extends a.Component{constructor(e){super(e),this.calculatePath=()=>{const{start:e,end:t}=this.props,n=t.x-e.x,r=e.x+Math.max(50,.3*n),i=t.x-Math.max(50,.3*n)
return"M ".concat(e.x," ").concat(e.y," C ").concat(r," ").concat(e.y," ").concat(i," ").concat(t.y," ").concat(t.x," ").concat(t.y)},this.getStrokeColor=()=>{var e
const{connectionType:t,isTemp:n,isInvalid:r}=this.props
let i=(null===(e=p[t])||void 0===e?void 0:e.color)||"#6366f1"
return n&&r&&(i="#ef4444"),i},this.calculateMiddlePoint=()=>{const{start:e,end:t}=this.props,n=t.x-e.x,r=e.x+Math.max(50,.3*n),i=t.x-Math.max(50,.3*n)
return{x:.125*e.x+.375*r+.375*i+.125*t.x,y:.125*e.y+.375*e.y+.375*t.y+.125*t.y}},this.calculateHoverPath=()=>{const{start:e,end:t}=this.props,n=t.x-e.x,r=e.x+Math.max(50,.3*n),i=t.x-Math.max(50,.3*n)
return"M ".concat(e.x," ").concat(e.y," C ").concat(r," ").concat(e.y," ").concat(i," ").concat(t.y," ").concat(t.x," ").concat(t.y)},this.handleMouseEnter=()=>{this.state.hideTimeout&&clearTimeout(this.state.hideTimeout),this.setState({isHovered:!0,hideTimeout:null})},this.handleMouseLeave=()=>{const e=setTimeout(()=>{this.setState({isHovered:!1})},500)
this.setState({hideTimeout:e})},this.handleDeleteClick=e=>{e.stopPropagation()
const{connectionId:t,onDeleteConnection:n}=this.props
t&&n&&n(t)},this.state={isHovered:!1,hideTimeout:null}}componentWillUnmount(){this.state.hideTimeout&&clearTimeout(this.state.hideTimeout)}render(){const{end:e,isTemp:t,connectionId:n,onDeleteConnection:r,viewport:i}=this.props,{isHovered:o}=this.state,u=this.calculatePath(),a=this.calculateHoverPath(),s=this.getStrokeColor(),c=this.calculateMiddlePoint()
return(0,l.jsxs)("g",{transform:"translate(".concat(i.x/i.zoom,", ").concat(i.y/i.zoom,")"),children:[(0,l.jsx)("path",{d:a,stroke:"transparent",strokeWidth:"20",fill:"none",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,style:{cursor:"pointer"}}),(0,l.jsx)("path",{d:u,stroke:s,strokeWidth:"3",fill:"none",strokeDasharray:t?"8,4":"none",opacity:t?.7:1,style:{pointerEvents:"none"}}),!t&&(0,l.jsx)("polygon",{points:"".concat(e.x,",").concat(e.y," ").concat(e.x-10,",").concat(e.y-5," ").concat(e.x-10,",").concat(e.y+5),fill:s,style:{pointerEvents:"none"}}),!t&&o&&n&&r&&(0,l.jsxs)("g",{onMouseEnter:this.handleMouseEnter,children:[(0,l.jsx)("circle",{cx:c.x,cy:c.y,r:"12",fill:"white",stroke:"#ef4444",strokeWidth:"2",style:{cursor:"pointer"},onClick:this.handleDeleteClick,onMouseEnter:this.handleMouseEnter}),(0,l.jsx)("text",{x:c.x,y:c.y+4,textAnchor:"middle",fontSize:"14",fontWeight:"bold",fill:"#ef4444",style:{cursor:"pointer",pointerEvents:"none"},onMouseEnter:this.handleMouseEnter,onClick:this.handleDeleteClick,children:"\xd7"})]})]})}}class M extends a.Component{constructor(){super(...arguments),this.state={searchTerm:""},this.getCompatibleNodes=()=>{const{sourceOutput:e}=this.props,{searchTerm:t}=this.state
return e?v.filter(n=>{var r
const i=null===(r=n.inputs)||void 0===r?void 0:r.some(t=>t.type===e.port.type),l=!t||n.label.toLowerCase().includes(t.toLowerCase())||n.description.toLowerCase().includes(t.toLowerCase())||n.operation&&n.operation.toLowerCase().includes(t.toLowerCase())
return i&&l}):[]},this.handleNodeSelect=e=>{this.props.onNodeSelect(e)},this.handleSearchChange=e=>{this.setState({searchTerm:e.target.value})},this.handleMouseDown=e=>{e.stopPropagation()},this.handleMouseUp=e=>{e.stopPropagation()},this.handleClick=e=>{e.stopPropagation()},this.handleWheel=e=>{e.stopPropagation()},this.handleKeyDown=e=>{e.stopPropagation()},this.handleKeyUp=e=>{e.stopPropagation()}}render(){var e
const{position:t,sourceOutput:n,onClose:r,viewport:i}=this.props,o=this.getCompatibleNodes(),u=t.x,a=t.y
return 0===o.length?(0,l.jsxs)("div",{className:"fixed bg-white border-2 border-gray-300 rounded-xl shadow-xl p-4 z-50 animate-fade-in",style:{left:u,top:a},onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onClick:this.handleClick,onWheel:this.handleWheel,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,children:[(0,l.jsxs)("div",{className:"text-sm text-gray-600 mb-3",children:["No compatible nodes found for type ",null==n?void 0:n.port.type]}),(0,l.jsx)("button",{className:"px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-lg text-xs font-medium transition-colors duration-200",onClick(e){e.stopPropagation(),r()},children:"Close"})]}):(0,l.jsxs)("div",{className:"fixed bg-white border-2 border-gray-300 rounded-xl shadow-xl p-3 z-50 min-w-56 max-w-72 animate-scale-in",style:{left:u,top:a},onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onClick:this.handleClick,onWheel:this.handleWheel,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,children:[(0,l.jsxs)("div",{className:"text-sm font-semibold text-gray-700 mb-3 px-2 flex items-center",children:["Add Node for",(0,l.jsx)("span",{className:"ml-2 px-3 py-1 rounded-lg text-white text-xs font-bold shadow-sm",style:{backgroundColor:null===(e=p[null==n?void 0:n.port.type])||void 0===e?void 0:e.color},children:null==n?void 0:n.port.type})]}),(0,l.jsx)("div",{className:"mb-3 px-2",children:(0,l.jsx)("input",{type:"text",placeholder:"Search operations...",value:this.state.searchTerm,onChange:this.handleSearchChange,className:"w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200",onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onClick:this.handleClick,onKeyDown(e){return e.stopPropagation()},onKeyUp:this.handleKeyUp})}),(0,l.jsx)("div",{className:"max-h-64 overflow-y-auto",children:0===o.length&&this.state.searchTerm?(0,l.jsxs)("div",{className:"p-3 text-center text-gray-500 text-sm",children:['No operations found matching "',this.state.searchTerm,'"']}):o.map((e,t)=>{var n
return(0,l.jsxs)("div",{className:"p-3 hover:bg-gray-50 cursor-pointer rounded-lg text-sm border-b border-gray-100 last:border-b-0 transition-colors duration-200",onClick:()=>this.handleNodeSelect(e),children:[(0,l.jsx)("div",{className:"font-semibold text-gray-800 mb-1",children:e.label}),(0,l.jsx)("div",{className:"text-xs text-gray-600 mb-2 leading-relaxed",children:e.description}),(0,l.jsx)("div",{className:"flex gap-2 flex-wrap",children:null===(n=e.inputs)||void 0===n?void 0:n.map(e=>{var t
return(0,l.jsx)("span",{className:"text-xs px-2 py-1 rounded-md text-white font-medium shadow-sm",style:{backgroundColor:null===(t=p[e.type])||void 0===t?void 0:t.color},children:e.type},e.id)})})]},t)})})]})}}class E{constructor(e,t){this.nodes=void 0,this.connections=void 0,this.generatedCode=[],this.includes=new Set,this.variables=new Set,this.functions=new Set,this.visitedNodes=new Set,this.nodes=e,this.connections=t}generateCodeForNode(e){this.generatedCode=[],this.includes.clear(),this.variables.clear(),this.functions.clear(),this.visitedNodes.clear()
const t=this.nodes.find(t=>t.id===e)
if(!t)throw Error("Selected node not found")
return this.addIncludes(),this.generateNodeCode(t),this.generateMainFunction(t),{code:this.generatedCode.join("\n"),includes:Array.from(this.includes),variables:Array.from(this.variables),functions:Array.from(this.functions)}}addIncludes(){this.includes.add("#include <immintrin.h>"),this.includes.add("#include <iostream>"),this.includes.add("#include <vector>"),this.includes.add("")}generateNodeCode(e){if(this.visitedNodes.has(e.id))return
this.visitedNodes.add(e.id)
const t=this.connections.filter(t=>t.target===e.id)
for(const e of t){const t=this.nodes.find(t=>t.id===e.source)
t&&this.generateNodeCode(t)}"value"===e.template.category?this.generateValueNodeCode(e):"operation"===e.template.category&&this.generateOperationNodeCode(e)}generateValueNodeCode(e){var t
const n=null===(t=e.template.outputs)||void 0===t?void 0:t[0]
if(null==n||!n.avxType)return
const r=e.data.valueName||"v",i=this.getCppType(n.avxType),l="".concat(i," ").concat(r,";")
this.variables.has(l)||(this.variables.add(l),this.generatedCode.push("  ".concat(l))),this.generatedCode.push("  // Initialize ".concat(r," with sample data")),this.generatedCode.push("  ".concat(r," = _mm_set1_").concat(this.getSetFunction(n.avxType),"(42);")),this.generatedCode.push("")}generateOperationNodeCode(e){var t
const n=e.template
if(!n.operation)return
const r=null===(t=n.outputs)||void 0===t?void 0:t[0]
if(null==r||!r.avxType)return
const i=this.generateResultName(e),l=this.getCppType(r.avxType),o=this.connections.filter(t=>t.target===e.id),u=n.inputs||[]
n.operation.startsWith("custom_pair_convert_")?this.generateCustomConversionOperation(e,i,l,o,u):this.generateExactOperation(e,i,l,o,u)
const a="".concat(l," ").concat(i,";")
this.variables.has(a)||this.variables.add(a)}generateCustomConversionOperation(e,t,n,r,i){if(1!==r.length)return
const l=this.getInputVariable(r[0])
this.generatedCode.push("  // ".concat(e.data.label||"Custom conversion operation")),this.generatedCode.push("  // Custom conversion: just reassign the register"),this.generatedCode.push("  ".concat(t," = ").concat(l,";")),this.generatedCode.push("")}generateExactOperation(e,t,n,r,i){const l=e.template.operation
if(!l)return
const o=[]
for(const e of r)o.push(this.getInputVariable(e))
this.generatedCode.push("  // ".concat(e.data.label||"Operation")),0===o.length?(this.generatedCode.push("  // TODO: Implement ".concat(l," operation (no inputs)")),this.generatedCode.push("  ".concat(t," = default_value;"))):1===o.length?this.generatedCode.push("  ".concat(t," = ").concat(l,"(").concat(o[0],");")):2===o.length?this.generatedCode.push("  ".concat(t," = ").concat(l,"(").concat(o[0],", ").concat(o[1],");")):this.generatedCode.push("  ".concat(t," = ").concat(l,"(").concat(o.join(", "),");")),this.generatedCode.push("")}generateGenericOperation(e,t,n,r,i){this.generatedCode.push("  // ".concat(e.data.label||"Generic operation")),this.generatedCode.push("  // TODO: Implement ".concat(e.template.operation," operation")),this.generatedCode.push("  ".concat(t," = ").concat(r.length>0?this.getInputVariable(r[0]):"default_value",";")),this.generatedCode.push("")}generateMainFunction(e){this.generatedCode.unshift("int main() {"),this.generatedCode.push("  // Print result"),this.generatedCode.push('  std::cout << "Result of '.concat(e.data.label||"operation",': " << std::endl;')),this.generatedCode.push("  return 0;"),this.generatedCode.push("}")}getInputVariable(e){const t=this.nodes.find(t=>t.id===e.source)
return"value"===(null==t?void 0:t.template.category)?t.data.valueName||"v":"operation"===(null==t?void 0:t.template.category)?this.generateResultName(t):"unknown"}generateResultName(e){return"value"===e.template.category?e.data.valueName||"v":"result_".concat(e.id.slice(0,8))}getCppType(e){const{underlying:t}=e
return t.startsWith("epi")?"__m128i":"ps"===t?"__m128":"pd"===t?"__m128d":"__m128i"}getSetFunction(e){const{underlying:t}=e
switch(t){case"epi8":return"epi8"
case"epi16":return"epi16"
case"epi32":default:return"epi32"
case"epi64":return"epi64"
case"ps":return"ps"
case"pd":return"pd"}}}class C extends a.Component{constructor(){super(...arguments),this.state={generatedCode:null,isGenerating:!1,error:null},this.generateCode=()=>{if(this.props.selectedNode){this.setState({isGenerating:!0,error:null})
try{const e=new E(this.props.allNodes,this.props.connections).generateCodeForNode(this.props.selectedNode.id)
this.setState({generatedCode:e,isGenerating:!1})}catch(e){this.setState({error:e instanceof Error?e.message:"Failed to generate code",isGenerating:!1})}}},this.copyToClipboard=()=>{if(!this.state.generatedCode)return
const e=this.state.generatedCode.includes.concat([""]).concat(this.state.generatedCode.variables).concat([""]).concat(this.state.generatedCode.code.split("\n")).join("\n")
navigator.clipboard.writeText(e).then(()=>{}).catch(e=>{})},this.downloadCode=()=>{var e
if(!this.state.generatedCode)return
const t=this.state.generatedCode.includes.concat([""]).concat(this.state.generatedCode.variables).concat([""]).concat(this.state.generatedCode.code.split("\n")).join("\n"),n=new Blob([t],{type:"text/plain"}),r=URL.createObjectURL(n),i=document.createElement("a")
i.href=r,i.download="simd_code_".concat(null===(e=this.props.selectedNode)||void 0===e?void 0:e.id.slice(0,8),".cpp"),document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}}componentDidMount(){this.props.selectedNode&&this.generateCode()}componentDidUpdate(e){var t,n;(null===(t=e.selectedNode)||void 0===t?void 0:t.id)!==(null===(n=this.props.selectedNode)||void 0===n?void 0:n.id)&&(this.props.selectedNode?this.generateCode():this.setState({generatedCode:null,error:null}))}render(){const{selectedNode:e,onClose:t}=this.props,{generatedCode:n,isGenerating:r,error:i}=this.state
return e?(0,l.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:(0,l.jsxs)("div",{className:"bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden",children:[(0,l.jsxs)("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 flex items-center justify-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"text-xl font-bold",children:"Generate C++ SIMD Code"}),(0,l.jsxs)("p",{className:"text-blue-100 text-sm",children:["Selected: ",e.data.label||e.template.label]})]}),(0,l.jsx)("button",{onClick:t,className:"text-white hover:text-gray-200 transition-colors duration-200",children:(0,l.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),(0,l.jsxs)("div",{className:"p-6 overflow-y-auto max-h-[calc(90vh-120px)]",children:[r&&(0,l.jsxs)("div",{className:"text-center py-8",children:[(0,l.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),(0,l.jsx)("p",{className:"text-gray-600",children:"Generating C++ code..."})]}),i&&(0,l.jsxs)("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 mb-4",children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("svg",{className:"w-5 h-5 text-red-400 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,l.jsx)("span",{className:"text-red-800 font-medium",children:"Error generating code:"})]}),(0,l.jsx)("p",{className:"text-red-700 mt-2",children:i})]}),n&&(0,l.jsxs)("div",{className:"space-y-6",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,l.jsx)("h3",{className:"text-lg font-semibold text-gray-800",children:"Generated C++ Code"}),(0,l.jsxs)("div",{className:"flex gap-2",children:[(0,l.jsxs)("button",{onClick:this.copyToClipboard,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2",children:[(0,l.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})}),"Copy"]}),(0,l.jsxs)("button",{onClick:this.downloadCode,className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-2",children:[(0,l.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),"Download"]})]})]}),(0,l.jsx)("div",{className:"bg-gray-900 rounded-lg p-4 overflow-x-auto",children:(0,l.jsx)("pre",{className:"text-green-400 text-sm font-mono",children:(0,l.jsxs)("code",{children:[n.includes.map((e,t)=>(0,l.jsx)("div",{className:"text-blue-400",children:e},t)),n.includes.length>0&&(0,l.jsx)("br",{}),n.variables.map((e,t)=>(0,l.jsx)("div",{className:"text-yellow-400",children:e},t)),n.variables.length>0&&(0,l.jsx)("br",{}),n.code.split("\n").map((e,t)=>(0,l.jsx)("div",{className:"text-green-400",children:e},t))]})})})]}),(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,l.jsxs)("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[(0,l.jsx)("h4",{className:"font-semibold text-blue-800 mb-2",children:"Includes"}),(0,l.jsx)("ul",{className:"text-sm text-blue-700 space-y-1",children:n.includes.map((e,t)=>(0,l.jsx)("li",{className:"font-mono",children:e},t))})]}),(0,l.jsxs)("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:[(0,l.jsx)("h4",{className:"font-semibold text-green-800 mb-2",children:"Variables"}),(0,l.jsx)("ul",{className:"text-sm text-green-700 space-y-1",children:n.variables.map((e,t)=>(0,l.jsx)("li",{className:"font-mono",children:e},t))})]}),(0,l.jsxs)("div",{className:"bg-purple-50 border border-purple-200 rounded-lg p-4",children:[(0,l.jsx)("h4",{className:"font-semibold text-purple-800 mb-2",children:"Functions"}),(0,l.jsx)("ul",{className:"text-sm text-purple-700 space-y-1",children:n.functions.length>0?n.functions.map((e,t)=>(0,l.jsx)("li",{className:"font-mono",children:e},t)):(0,l.jsx)("li",{className:"text-gray-500",children:"No custom functions"})})]})]}),(0,l.jsxs)("div",{className:"bg-gray-50 border border-gray-200 rounded-lg p-4",children:[(0,l.jsx)("h4",{className:"font-semibold text-gray-800 mb-2",children:"How to use this code:"}),(0,l.jsxs)("ol",{className:"text-sm text-gray-700 space-y-2 list-decimal list-inside",children:[(0,l.jsx)("li",{children:"Copy or download the generated C++ code"}),(0,l.jsx)("li",{children:"Compile with a C++ compiler that supports SIMD intrinsics (GCC, Clang, MSVC)"}),(0,l.jsx)("li",{children:"Ensure your compiler supports the target architecture (SSE, AVX, etc.)"}),(0,l.jsx)("li",{children:"Link against the appropriate libraries if needed"}),(0,l.jsx)("li",{children:"Run the compiled program to see the SIMD operation results"})]})]})]})]}),(0,l.jsx)("div",{className:"bg-gray-50 px-6 py-4 border-t border-gray-200",children:(0,l.jsxs)("div",{className:"flex justify-between items-center",children:[(0,l.jsx)("p",{className:"text-sm text-gray-600",children:"This code represents the SIMD operations for the selected node and its dependencies"}),(0,l.jsx)("button",{onClick:t,className:"px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200",children:"Close"})]})})]})}):null}}class S extends a.Component{constructor(){super(...arguments),this.state={searchTerm:"",valueNodesSearchTerm:"",isConnectionTypesExpanded:!1,isValueNodesExpanded:!0,isOperationNodesExpanded:!0,showCppCodePanel:!1},this.groupedTemplates={value:v.filter(e=>"value"===e.category),operation:v.filter(e=>"operation"===e.category)},this.handleDragStart=(e,t)=>{this.props.onDragStart(e,t)},this.handleSearchChange=e=>{this.setState({searchTerm:e.target.value})},this.handleValueNodesSearchChange=e=>{this.setState({valueNodesSearchTerm:e.target.value})},this.toggleConnectionTypes=()=>{this.setState(e=>({isConnectionTypesExpanded:!e.isConnectionTypesExpanded}))},this.toggleValueNodes=()=>{this.setState(e=>({isValueNodesExpanded:!e.isValueNodesExpanded}))},this.toggleOperationNodes=()=>{this.setState(e=>({isOperationNodesExpanded:!e.isOperationNodesExpanded}))},this.showCppCodePanel=()=>{this.setState({showCppCodePanel:!0})},this.hideCppCodePanel=()=>{this.setState({showCppCodePanel:!1})},this.getFilteredTemplates=()=>{const{searchTerm:e,valueNodesSearchTerm:t}=this.state,n=(e,t)=>t?e.filter(e=>e.label.toLowerCase().includes(t.toLowerCase())||e.description.toLowerCase().includes(t.toLowerCase())||e.operation&&e.operation.toLowerCase().includes(t.toLowerCase())):e
return{value:n(this.groupedTemplates.value,t),operation:n(this.groupedTemplates.operation,e)}},this.renderNodeTemplate=(e,t,n)=>{var r,i
return(0,l.jsxs)("div",{className:"p-4 border-2 rounded-lg cursor-grab mb-3 transition-all duration-200 ".concat({value:"bg-blue-50 border-blue-200 hover:bg-blue-100 hover:border-blue-300 hover:shadow-md",operation:"bg-purple-50 border-purple-200 hover:bg-purple-100 hover:border-purple-300 hover:shadow-md"}[n]),draggable:!0,onDragStart:t=>this.handleDragStart(t,e),children:[(0,l.jsx)("div",{className:"font-semibold text-sm text-gray-800 mb-2",children:e.label}),(0,l.jsx)("div",{className:"text-xs text-gray-600 mb-3 leading-relaxed",children:e.description}),(0,l.jsxs)("div",{className:"flex gap-2 flex-wrap",children:[null===(r=e.inputs)||void 0===r?void 0:r.map(e=>{var t
return(0,l.jsxs)("span",{className:"text-xs px-2 py-1 rounded-md text-white font-medium shadow-sm",style:{backgroundColor:null===(t=p[e.type])||void 0===t?void 0:t.color},title:e.label,children:["\u2190",e.type]},e.id)}),null===(i=e.outputs)||void 0===i?void 0:i.map(e=>{var t
return(0,l.jsxs)("span",{className:"text-xs px-2 py-1 rounded-md text-white font-medium shadow-sm",style:{backgroundColor:null===(t=p[e.type])||void 0===t?void 0:t.color},title:e.label,children:[e.type,"\u2192"]},e.id)})]})]},"".concat(n,"-").concat(t))}}render(){return(0,l.jsxs)("div",{className:"bg-white border-r-2 border-gray-200 p-6 w-80 overflow-y-auto shadow-lg",children:[(0,l.jsx)("h3",{className:"font-bold text-xl mb-6 text-gray-800",children:"AVX Builder"}),this.props.selectedNode&&(0,l.jsxs)("div",{className:"mb-6",children:[(0,l.jsxs)("button",{onClick:this.showCppCodePanel,className:"w-full px-4 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl",children:[(0,l.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})}),"Generate C++ Code"]}),(0,l.jsx)("p",{className:"text-xs text-gray-600 text-center mt-2",children:"Generate SIMD code for selected node"})]}),(0,l.jsxs)("div",{className:"mb-8 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between cursor-pointer hover:bg-gray-200 hover:bg-opacity-30 rounded-lg p-2 -m-2 transition-colors duration-200",onClick:this.toggleConnectionTypes,children:[(0,l.jsx)("h4",{className:"font-semibold text-sm text-gray-700",children:"AVX/SSE Types"}),(0,l.jsx)("div",{className:"transform transition-transform duration-200 ".concat(this.state.isConnectionTypesExpanded?"rotate-180":""),children:(0,l.jsx)("svg",{className:"w-4 h-4 text-gray-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]}),this.state.isConnectionTypesExpanded&&(0,l.jsx)("div",{className:"flex gap-2 flex-wrap mt-3",children:Object.entries(p).map(e=>{let[t,n]=e
return(0,l.jsxs)("span",{className:"text-xs px-3 py-1.5 rounded-lg text-white font-semibold shadow-sm",style:{backgroundColor:n.color},children:[t,": ",n.name]},t)})})]}),(0,l.jsxs)("div",{className:"space-y-6",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex items-center justify-between cursor-pointer hover:bg-blue-50 rounded-lg p-2 -m-2 transition-colors duration-200",onClick:this.toggleValueNodes,children:[(0,l.jsx)("h4",{className:"font-semibold text-sm text-gray-700 uppercase tracking-wide",children:"Value Nodes"}),(0,l.jsx)("div",{className:"transform transition-transform duration-200 ".concat(this.state.isValueNodesExpanded?"rotate-180":""),children:(0,l.jsx)("svg",{className:"w-4 h-4 text-gray-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]}),this.state.isValueNodesExpanded&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"text-xs text-gray-600 mb-3 mt-3",children:"Nodes that represent vector values with user-assignable names"}),(0,l.jsx)("div",{className:"mb-4",children:(0,l.jsx)("input",{type:"text",placeholder:"Search value nodes...",value:this.state.valueNodesSearchTerm,onChange:this.handleValueNodesSearchChange,onKeyDown(e){return e.stopPropagation()},className:"w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"})}),0===this.getFilteredTemplates().value.length&&this.state.valueNodesSearchTerm?(0,l.jsxs)("div",{className:"p-4 text-center text-gray-500 text-sm bg-gray-50 rounded-lg border-2 border-dashed border-gray-200",children:['No value nodes found matching "',this.state.valueNodesSearchTerm,'"']}):this.getFilteredTemplates().value.map((e,t)=>this.renderNodeTemplate(e,t,"value"))]})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex items-center justify-between cursor-pointer hover:bg-purple-50 rounded-lg p-2 -m-2 transition-colors duration-200",onClick:this.toggleOperationNodes,children:[(0,l.jsx)("h4",{className:"font-semibold text-sm text-gray-700 uppercase tracking-wide",children:"Operation Nodes"}),(0,l.jsx)("div",{className:"transform transition-transform duration-200 ".concat(this.state.isOperationNodesExpanded?"rotate-180":""),children:(0,l.jsx)("svg",{className:"w-4 h-4 text-gray-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]}),this.state.isOperationNodesExpanded&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"text-xs text-gray-600 mb-3 mt-3",children:"SSE/AVX operations that process vector data"}),(0,l.jsx)("div",{className:"mb-4",children:(0,l.jsx)("input",{type:"text",placeholder:"Search operations...",value:this.state.searchTerm,onChange:this.handleSearchChange,onKeyDown(e){return e.stopPropagation()},className:"w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"})}),0===this.getFilteredTemplates().operation.length&&this.state.searchTerm?(0,l.jsxs)("div",{className:"p-4 text-center text-gray-500 text-sm bg-gray-50 rounded-lg border-2 border-dashed border-gray-200",children:['No operations found matching "',this.state.searchTerm,'"']}):this.getFilteredTemplates().operation.map((e,t)=>this.renderNodeTemplate(e,t,"operation"))]})]})]}),this.state.showCppCodePanel&&this.props.selectedNode&&(0,l.jsx)(C,{selectedNode:this.props.selectedNode,allNodes:this.props.allNodes,connections:this.props.connections,onClose:this.hideCppCodePanel})]})}}const T=e=>{let{onSave:t,onLoad:n,onExport:r,onImport:i,onClear:o,hasUnsavedChanges:u,lastSaved:s}=e
const c=(0,a.useRef)(null),[d,f]=(0,a.useState)(!0)
return(0,l.jsxs)("div",{className:"bg-white rounded-xl shadow-xl border-2 border-gray-200 max-w-sm",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200 rounded-t-xl",onClick(){f(!d)},children:[(0,l.jsx)("div",{className:"text-base font-bold text-gray-800",children:"Save & Load"}),(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)("div",{className:"w-2 h-2 rounded-full ".concat(u?"bg-red-500":"bg-green-500"),title:u?"Unsaved changes":"All changes saved"}),(0,l.jsx)("div",{className:"transform transition-transform duration-200 ".concat(d?"rotate-180":""),children:(0,l.jsx)("svg",{className:"w-5 h-5 text-gray-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]})]}),!d&&(0,l.jsxs)("div",{className:"p-4 pt-0 border-t border-gray-100",children:[(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("button",{onClick:t,className:"w-full px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ".concat(u?"bg-blue-500 text-white hover:bg-blue-600":"bg-gray-300 text-gray-500 cursor-not-allowed"),disabled:!u,title:u?"Save canvas to local storage":"No changes to save",children:"\ud83d\udcbe Save"}),(0,l.jsx)("button",{onClick(){alert("Canvas automatically loads from local storage on startup. Use Import to load from a file.")},className:"w-full px-3 py-2 text-sm font-medium bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200",title:"Load canvas from local storage (automatic on startup)",children:"\ud83d\udcc2 Load (Auto)"}),(0,l.jsx)("button",{onClick:r,className:"w-full px-3 py-2 text-sm font-medium bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors duration-200",title:"Export canvas as JSON file",children:"\ud83d\udce4 Export JSON"}),(0,l.jsx)("button",{onClick(){var e
null===(e=c.current)||void 0===e||e.click()},className:"w-full px-3 py-2 text-sm font-medium bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200",title:"Import canvas from JSON file",children:"\ud83d\udce5 Import JSON"}),(0,l.jsx)("button",{onClick:o,className:"w-full px-3 py-2 text-sm font-medium bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200",title:"Clear canvas and local storage",children:"\ud83d\uddd1\ufe0f Clear All"}),(0,l.jsx)("input",{ref:c,type:"file",accept:".json",onChange(e){var t
const n=null===(t=e.target.files)||void 0===t?void 0:t[0]
n&&(i(n),e.target.value="")},className:"hidden"})]}),(0,l.jsx)("div",{className:"mt-3 pt-3 border-t border-gray-100",children:(0,l.jsxs)("div",{className:"text-xs text-gray-600",children:[(0,l.jsxs)("div",{className:"mb-1",children:[(0,l.jsx)("span",{className:"font-medium",children:"Status:"})," ",u?"Modified":"Saved"]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"font-medium",children:"Last saved:"})," ",(p=s,p?p.toLocaleString():"Never")]})]})})]})]})
var p}
class P extends a.Component{clearSelection(){this.canClearSelection()&&this.setState({selectedNode:null,selectedNodes:[],selectionTimestamp:null},this.updateUnsavedChanges)}canClearSelection(){return!this.state.selectionTimestamp||Date.now()-this.state.selectionTimestamp>=500}setSingleNodeSelection(e){this.setState({selectedNode:e,selectedNodes:[],selectionTimestamp:Date.now()},this.updateUnsavedChanges)}setMultipleNodeSelection(e){1!==e.length?this.setState({selectedNode:null,selectedNodes:e,selectionTimestamp:Date.now()},this.updateUnsavedChanges):this.setSingleNodeSelection(e[0])}handleMultiSelection(e){if(this.state.selectedNode===e||this.state.selectedNodes.includes(e)){const t=this.state.selectedNode===e?null:this.state.selectedNode,n=this.state.selectedNodes.filter(t=>t!==e)
null===t&&0===n.length?this.clearSelection():1===n.length?this.setSingleNodeSelection(n[0]):this.setMultipleNodeSelection(n)}else{var t
const n=[...this.state.selectedNodes,null!==(t=this.state.selectedNode)&&void 0!==t?t:"",e].filter(e=>e).filter((e,t,n)=>n.indexOf(e)===t)
this.setMultipleNodeSelection(n)}}removeFromSelection(e){this.setState(t=>{const n=t.selectedNode===e?null:t.selectedNode,r=t.selectedNodes.filter(t=>t!==e)
return null!==n||0!==r.length||this.canClearSelection()?i(i({},t),{},{selectedNode:n,selectedNodes:r}):t},this.updateUnsavedChanges)}handleZoneSelectionComplete(){const e=this.getNodesInSelectionZone()
this.clearSelection(),this.setState({zoneSelection:null,selectedNodes:e,selectionTimestamp:Date.now()},this.updateUnsavedChanges)}getNodesToDrag(e){return this.state.selectedNodes.length>0&&this.state.selectedNodes.includes(e)?this.state.selectedNodes:[e]}constructor(e){super(e),this.canvasRef=a.createRef(),this.divRef=a.createRef(),this.nodeIdCounter=3,this.generateUniqueValueName=e=>{const t=e.filter(e=>{var t
return"value"===(null===(t=e.template)||void 0===t?void 0:t.category)&&e.data.valueName}).map(e=>e.data.valueName),n=["v",..."abcdefghijklmnopqrstuvwxyz".split("")]
for(const e of n)if(!t.includes(e))return e
for(let e=1;1e3>e;e++){const n="v".concat(e)
if(!t.includes(n))return n}return"v_".concat(Date.now())},this.saveToLocalStorage=()=>{try{const e={nodes:this.state.nodes,connections:this.state.connections,viewport:this.state.viewport,nodeIdCounter:this.nodeIdCounter}
f.saveToLocalStorage(e),this.setState({lastSaved:new Date,hasUnsavedChanges:!1})}catch(e){alert("Failed to save canvas. Please try again.")}},this.loadFromLocalStorage=()=>{try{const e=f.loadFromLocalStorage()
e&&(this.setState({nodes:e.nodes,connections:e.connections,viewport:e.viewport,lastSaved:f.getLastSavedTimestamp(),hasUnsavedChanges:!1}),this.nodeIdCounter=e.nodeIdCounter)}catch(e){}},this.exportToJSON=()=>{try{const e={nodes:this.state.nodes,connections:this.state.connections,viewport:this.state.viewport,nodeIdCounter:this.nodeIdCounter},t=(new Date).toISOString().slice(0,19).replace(/:/g,"-"),n="avx-canvas-".concat(t,".json")
f.exportToJSON(e,n)}catch(e){alert("Failed to export canvas. Please try again.")}},this.importFromJSON=async e=>{try{const t=await f.importFromJSON(e)
this.setState({nodes:t.nodes,connections:t.connections,viewport:t.viewport,lastSaved:null,hasUnsavedChanges:!0}),this.nodeIdCounter=t.nodeIdCounter}catch(e){alert("Failed to import canvas. The file may be invalid or corrupted.")}},this.clearCanvas=()=>{window.confirm("Are you sure you want to clear the entire canvas? This action cannot be undone.")&&(this.setState({nodes:[],connections:[],viewport:{x:0,y:0,zoom:1},lastSaved:null,hasUnsavedChanges:!1}),this.nodeIdCounter=1,f.clearLocalStorage())},this.updateUnsavedChanges=()=>{const e={nodes:this.state.nodes,connections:this.state.connections,viewport:this.state.viewport,nodeIdCounter:this.nodeIdCounter},t=f.hasUnsavedChanges(e)
t!==this.state.hasUnsavedChanges&&this.setState({hasUnsavedChanges:t})},this.handleMouseDown=e=>{var t,n,r
if(e.ctrlKey&&(e.target===this.canvasRef.current||e.target===this.divRef.current||null!==(t=e.target)&&void 0!==t&&t.classList.contains("canvas-background"))){e.preventDefault()
const t=null===(r=this.canvasRef.current)||void 0===r?void 0:r.getBoundingClientRect()
if(!t)return
const n=(e.clientX-t.left-this.state.viewport.x)/this.state.viewport.zoom,i=(e.clientY-t.top-this.state.viewport.y)/this.state.viewport.zoom
return void this.setState({zoneSelection:{isSelecting:!0,startPosition:{x:n,y:i},currentPosition:{x:n,y:i}}},this.updateUnsavedChanges)}(e.target===this.canvasRef.current||e.target===this.divRef.current||null!==(n=e.target)&&void 0!==n&&n.classList.contains("canvas-background"))&&(e.preventDefault(),this.setState({isPanning:!0,panStart:{x:e.clientX,y:e.clientY}}))},this.handleMouseMove=e=>{var t,n
if(null!==(t=this.state.zoneSelection)&&void 0!==t&&t.isSelecting){const t=null===(n=this.canvasRef.current)||void 0===n?void 0:n.getBoundingClientRect()
if(!t)return
const r=(e.clientX-t.left-this.state.viewport.x)/this.state.viewport.zoom,l=(e.clientY-t.top-this.state.viewport.y)/this.state.viewport.zoom
return void this.setState(e=>({zoneSelection:e.zoneSelection?i(i({},e.zoneSelection),{},{currentPosition:{x:r,y:l}}):null}),this.updateUnsavedChanges)}if(this.state.isPanning&&this.state.panStart){const t=e.clientX-this.state.panStart.x,n=e.clientY-this.state.panStart.y
this.setState(r=>({viewport:i(i({},r.viewport),{},{x:r.viewport.x+t,y:r.viewport.y+n}),panStart:{x:e.clientX,y:e.clientY}}),this.updateUnsavedChanges)}},this.handleMouseUp=()=>{var e
null!==(e=this.state.zoneSelection)&&void 0!==e&&e.isSelecting?this.handleZoneSelectionComplete():this.setState({isPanning:!1,panStart:null})},this.handleWheel=e=>{if(!this.canvasRef.current||!this.divRef.current)return
const t=this.canvasRef.current.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,i=e.deltaY>0?.9:1.1,l=Math.max(.1,Math.min(3,this.state.viewport.zoom*i)),o=(n-this.state.viewport.x)/this.state.viewport.zoom,u=(r-this.state.viewport.y)/this.state.viewport.zoom,a=n-o*l,s=r-u*l
this.setState(e=>({viewport:{x:a,y:s,zoom:l}}),this.updateUnsavedChanges)},this.transformCoordinates=e=>({x:(e.x-this.state.viewport.x)*this.state.viewport.zoom,y:(e.y-this.state.viewport.y)*this.state.viewport.zoom}),this.transformCoordinatesBack=e=>({x:e.x/this.state.viewport.zoom+this.state.viewport.x,y:e.y/this.state.viewport.zoom+this.state.viewport.y}),this.getNodesInSelectionZone=()=>{if(!this.state.zoneSelection)return[]
const{startPosition:e,currentPosition:t}=this.state.zoneSelection,n=Math.min(e.x,t.x),r=Math.max(e.x,t.x),i=Math.min(e.y,t.y),l=Math.max(e.y,t.y)
return this.state.nodes.filter(e=>{const t=e.position.x,o=e.position.x+(e.width||140),u=e.position.y,a=e.position.y+(e.height||80)
return!(n>o||t>r||i>a||u>l)}).map(e=>e.id)},this.handleKeyDown=e=>{this.state.isCanvasFocused&&("Escape"===e.key?this.clearSelection():"Delete"===e.key||"Backspace"===e.key?this.state.selectedNodes.length>0?this.deleteSelectedNodes():this.state.selectedNode&&this.deleteNode(this.state.selectedNode):e.ctrlKey&&"s"===e.key?(e.preventDefault(),this.state.hasUnsavedChanges&&this.saveToLocalStorage()):e.ctrlKey&&"d"===e.key&&(e.preventDefault(),e.stopPropagation(),this.state.selectedNodes.length>0?this.duplicateSelectedNodes():this.state.selectedNode&&this.duplicateNode(this.state.selectedNode)))},this.handleCanvasFocus=()=>{this.setState({isCanvasFocused:!0})},this.handleCanvasBlur=()=>{this.setState({isCanvasFocused:!1})},this.deleteNode=e=>{this.setState(t=>({nodes:t.nodes.filter(t=>t.id!==e),connections:t.connections.filter(t=>t.source!==e&&t.target!==e)}),this.updateUnsavedChanges),this.removeFromSelection(e)},this.deleteSelectedNodes=()=>{const e=this.state.selectedNodes
this.setState(t=>({nodes:t.nodes.filter(t=>!e.includes(t.id)),connections:t.connections.filter(t=>!e.includes(t.source)&&!e.includes(t.target))}),this.updateUnsavedChanges),this.clearSelection()},this.duplicateNode=e=>{var t
const n=this.state.nodes.find(t=>t.id===e)
if(!n)return
const r=i(i({},n),{},{id:"".concat(this.nodeIdCounter),position:{x:n.position.x+50,y:n.position.y+50},data:i(i({},n.data),{},{valueName:"value"===(null===(t=n.template)||void 0===t?void 0:t.category)?this.generateUniqueValueName(this.state.nodes):void 0})})
this.nodeIdCounter+=1,this.setState(e=>({nodes:[...e.nodes,r]}),this.updateUnsavedChanges),this.setSingleNodeSelection(r.id)},this.duplicateSelectedNodes=()=>{const e=this.state.nodes.filter(e=>this.state.selectedNodes.includes(e.id))
if(0===e.length)return
const t=[],n=new Map
e.forEach(e=>{var r
const l=i(i({},e),{},{id:"".concat(this.nodeIdCounter),position:{x:e.position.x+50,y:e.position.y+50},data:i(i({},e.data),{},{valueName:"value"===(null===(r=e.template)||void 0===r?void 0:r.category)?this.generateUniqueValueName([...this.state.nodes,...t]):void 0})})
n.set(e.id,l.id),t.push(l),this.nodeIdCounter+=1}),this.setState(e=>({nodes:[...e.nodes,...t]}),this.updateUnsavedChanges),this.setMultipleNodeSelection(t.map(e=>e.id))},this.deleteConnection=e=>{this.setState(t=>({connections:t.connections.filter(t=>t.id!==e)}),this.updateUnsavedChanges)},this.onDragStart=(e,t)=>{e.dataTransfer.setData("application/json",JSON.stringify(t)),e.dataTransfer.effectAllowed="move"},this.onDrop=e=>{if(e.preventDefault(),!this.canvasRef.current||!this.divRef.current)return
const t=this.canvasRef.current.getBoundingClientRect(),n=e.dataTransfer.getData("application/json")
if(!n)return
e.stopPropagation()
const r=JSON.parse(n),i=e.clientX-t.left,l=e.clientY-t.top,o={x:(i-this.state.viewport.x)/this.state.viewport.zoom-100,y:(l-this.state.viewport.y)/this.state.viewport.zoom-150},u={id:"".concat(this.nodeIdCounter),type:r.type,position:o,data:{label:r.label,description:r.description,valueName:"value"===r.category?this.generateUniqueValueName(this.state.nodes):void 0,constValues:"operation"===r.category?{}:void 0},template:r,width:200,height:"value"===r.category||"operation"===r.category?300:80}
this.nodeIdCounter+=1,this.setState(e=>({nodes:[...e.nodes,u]}),this.updateUnsavedChanges)},this.onDragOver=e=>{e.preventDefault(),e.dataTransfer.dropEffect="move"},this.onOutputDragStart=(e,t,n)=>{e.preventDefault()
const r=c.getConnectionPoint(t,n.id,!0)
this.setState({draggedConnection:{sourceNode:t,sourceOutput:n,sourcePoint:r}})
const i=e=>{if(!this.canvasRef.current)return
const t=this.canvasRef.current.getBoundingClientRect(),i=e.clientX-t.left,l=e.clientY-t.top,o={x:(i-this.state.viewport.x)/this.state.viewport.zoom,y:(l-this.state.viewport.y)/this.state.viewport.zoom},u=document.elementFromPoint(e.clientX,e.clientY)
let a=!1
u&&u.classList.contains("input-handle")&&(a=u.getAttribute("data-input-type")!==n.type),this.setState({tempConnection:{start:r,end:o,connectionType:n.type,isInvalid:a}})},l=e=>{var o
if(!e.shiftKey||null!==(o=e.target)&&void 0!==o&&o.classList.contains("input-handle")){const i=document.elementFromPoint(e.clientX,e.clientY)
if(i&&i.classList.contains("input-handle")){const e=i.getAttribute("data-node-id"),l=i.getAttribute("data-input-id"),o=i.getAttribute("data-input-type"),u=this.state.nodes.find(t=>t.id===e)
if(u&&u.id!==t.id&&o===n.type){const i=this.state.connections.find(t=>t.target===e&&t.targetInput===l)
i&&this.setState(e=>({connections:e.connections.filter(e=>e.id!==i.id)}))
const o={id:c.generateConnectionId(t.id,n.id,u.id,l),source:t.id,target:u.id,sourceOutput:n.id,targetInput:l,connectionType:n.type,sourcePoint:r,targetPoint:c.getConnectionPoint(u,l,!1)}
this.setState(e=>({connections:[...e.connections,o]}),this.updateUnsavedChanges)}}}else{if(!this.canvasRef.current)return
const i=this.canvasRef.current.getBoundingClientRect(),l=(e.clientX-i.left-this.state.viewport.x)/this.state.viewport.zoom,o=(e.clientY-i.top-this.state.viewport.y)/this.state.viewport.zoom
this.setState({menuPosition:{x:l,y:o},showNodeMenu:!0,menuOpenTime:Date.now(),menuSourceOutput:{node:t,port:n,sourcePoint:r}})}this.setState({tempConnection:null,draggedConnection:null}),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",l)}
document.addEventListener("mousemove",i),document.addEventListener("mouseup",l)},this.onNodeDragStart=(e,t)=>{e.preventDefault()
const n=this.state.nodes.find(e=>e.id===t)
if(!n)return
if(!this.state.selectedNodes.includes(t)&&this.state.selectedNode!==t)return
const r=(e.clientX-this.state.viewport.x)/this.state.viewport.zoom,l=(e.clientY-this.state.viewport.y)/this.state.viewport.zoom,o={x:r-n.position.x,y:l-n.position.y},u=this.getNodesToDrag(t)
this.setState({dragging:{nodeId:t,nodeIds:u,startPos:o}})
const a=new Map
this.state.nodes.forEach(e=>{a.set(e.id,i({},e.position))})
const s=e=>{const n=(e.clientX-this.state.viewport.x)/this.state.viewport.zoom,r=(e.clientY-this.state.viewport.y)/this.state.viewport.zoom,l={x:n-o.x,y:r-o.y},u=a.get(t)
if(!u)return
const s=l.x-u.x,d=l.y-u.y,f=this.state.dragging
if(!f)return
const p=f.nodeIds
this.setState(e=>({nodes:e.nodes.map(e=>{if(p.includes(e.id)){const n=a.get(e.id)
return n?i(i({},e),{},{position:e.id===t?l:{x:n.x+s,y:n.y+d}}):e}return e})}),this.updateUnsavedChanges),this.setState(e=>({connections:e.connections.map(n=>{let r=i({},n)
if(p.includes(n.source)){const o=e.nodes.find(e=>e.id===n.source)
if(o){const e=a.get(n.source)
if(e){const u=n.source===t?l:{x:e.x+s,y:e.y+d}
r.sourcePoint=c.getConnectionPoint(i(i({},o),{},{position:u}),n.sourceOutput,!0)}}}if(p.includes(n.target)){const o=e.nodes.find(e=>e.id===n.target)
if(o){const e=a.get(n.target)
if(e){const u=n.target===t?l:{x:e.x+s,y:e.y+d}
r.targetPoint=c.getConnectionPoint(i(i({},o),{},{position:u}),n.targetInput,!1)}}}return r})}),this.updateUnsavedChanges)},d=()=>{this.setState({dragging:null}),document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",d)}
document.addEventListener("mousemove",s),document.addEventListener("mouseup",d)},this.onNodeResize=(e,t,n)=>{this.setState(r=>({nodes:r.nodes.map(r=>r.id===e?i(i({},r),{},{width:t,height:n}):r)}),this.updateUnsavedChanges),this.setState(t=>({connections:t.connections.map(n=>{let r=i({},n)
if(n.source===e){const i=t.nodes.find(t=>t.id===e)
r.sourcePoint=c.getConnectionPoint(i,n.sourceOutput,!0)}if(n.target===e){const i=t.nodes.find(t=>t.id===e)
r.targetPoint=c.getConnectionPoint(i,n.targetInput,!1)}return r})}),this.updateUnsavedChanges)},this.onUpdateNodeData=(e,t)=>{this.setState(n=>({nodes:n.nodes.map(n=>n.id===e?i(i({},n),{},{data:i(i({},n.data),t)}):n)}),this.updateUnsavedChanges)},this.handleNodeSelect=e=>{var t
const{menuSourceOutput:n,menuPosition:r}=this.state
if(!n)return
const i={x:r.x-100,y:r.y-150},l={id:"".concat(this.nodeIdCounter),type:e.type,position:i,data:{label:e.label,description:e.description,valueName:"value"===e.category?this.generateUniqueValueName(this.state.nodes):void 0,constValues:"operation"===e.category?{}:void 0},template:e,width:200,height:"value"===e.category||"operation"===e.category?300:80}
this.nodeIdCounter+=1,this.setState(e=>({nodes:[...e.nodes,l]}),this.updateUnsavedChanges)
const o=null===(t=e.inputs)||void 0===t?void 0:t.find(e=>e.type===n.port.type)
if(o){const e={id:c.generateConnectionId(n.node.id,n.port.id,l.id,o.id),source:n.node.id,target:l.id,sourceOutput:n.port.id,targetInput:o.id,connectionType:n.port.type,sourcePoint:n.sourcePoint,targetPoint:c.getConnectionPoint(l,o.id,!1)}
this.setState(t=>({connections:[...t.connections,e]}),this.updateUnsavedChanges)}this.state.menuOpenTime&&500>Date.now()-this.state.menuOpenTime||this.setState({showNodeMenu:!1,draggedConnection:null,menuOpenTime:null,menuSourceOutput:void 0})},this.closeMenu=()=>{this.state.menuOpenTime&&500>Date.now()-this.state.menuOpenTime||this.setState({showNodeMenu:!1,draggedConnection:null,menuOpenTime:null,menuSourceOutput:void 0})},this.handleCanvasClick=e=>{var t
const n=e.target===this.canvasRef.current||e.target===this.divRef.current||(null===(t=e.target)||void 0===t?void 0:t.classList.contains("canvas-background"))
this.state.showNodeMenu&&n&&this.closeMenu(),n&&(this.clearSelection(),this.canvasRef.current&&this.canvasRef.current.focus())},this.toggleInstructions=()=>{this.setState(e=>({instructionsCollapsed:!e.instructionsCollapsed}))},this.resetView=()=>{this.setState({viewport:{x:0,y:0,zoom:1}},this.updateUnsavedChanges)},this.state={nodes:[],connections:[],showNodeMenu:!1,menuPosition:{x:0,y:0},draggedConnection:null,tempConnection:null,dragging:null,selectedNode:null,selectedNodes:[],zoneSelection:null,instructionsCollapsed:!0,viewport:{x:0,y:0,zoom:1},isPanning:!1,panStart:null,menuOpenTime:null,menuSourceOutput:void 0,isCanvasFocused:!1,selectionTimestamp:null,lastSaved:null,hasUnsavedChanges:!1}}componentDidMount(){document.addEventListener("keydown",this.handleKeyDown),this.loadFromLocalStorage()}componentWillUnmount(){document.removeEventListener("keydown",this.handleKeyDown)}render(){const{nodes:e,connections:t,showNodeMenu:n,menuPosition:r,draggedConnection:i,tempConnection:o,dragging:u,selectedNode:a,selectedNodes:s,zoneSelection:c,instructionsCollapsed:d,viewport:f,isPanning:p,menuSourceOutput:h}=this.state
return(0,l.jsxs)("div",{className:"flex h-screen bg-gray-50",children:[(0,l.jsx)(S,{onDragStart:this.onDragStart,selectedNode:this.state.selectedNode&&this.state.nodes.find(e=>e.id===this.state.selectedNode)||null,allNodes:this.state.nodes,connections:this.state.connections}),(0,l.jsxs)("div",{className:"flex-1 relative",style:{overflow:"hidden"},children:[(0,l.jsxs)("div",{className:"absolute top-6 left-6 z-10 flex flex-col gap-4 max-w-sm min-w-80 lg:min-w-96 transition-all duration-300 ease-in-out",children:[(0,l.jsxs)("div",{className:"bg-white rounded-xl shadow-xl border-2 border-gray-200",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200 rounded-t-xl",onClick:this.toggleInstructions,children:[(0,l.jsx)("div",{className:"text-base font-bold text-gray-800",children:"Instructions"}),(0,l.jsx)("div",{className:"transform transition-transform duration-200 ".concat(d?"rotate-180":""),children:(0,l.jsx)("svg",{className:"w-5 h-5 text-gray-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]}),!d&&(0,l.jsx)("div",{className:"p-4 pt-0 border-t border-gray-100",children:(0,l.jsxs)("div",{className:"text-sm text-gray-600 space-y-2",children:[(0,l.jsxs)("div",{className:"flex items-start gap-2",children:[(0,l.jsx)("span",{className:"text-blue-500 font-bold",children:"\u2022"}),(0,l.jsx)("span",{children:"Drag Value and Operation nodes from the left panel"})]}),(0,l.jsxs)("div",{className:"flex items-start gap-2",children:[(0,l.jsx)("span",{className:"text-blue-500 font-bold",children:"\u2022"}),(0,l.jsx)("span",{children:"Value nodes: assign variable names, see vector elements"})]}),(0,l.jsxs)("div",{className:"flex items-start gap-2",children:[(0,l.jsx)("span",{className:"text-blue-500 font-bold",children:"\u2022"}),(0,l.jsx)("span",{children:"Operation nodes: SSE/AVX instructions with live result preview"})]}),(0,l.jsxs)("div",{className:"flex items-start gap-2",children:[(0,l.jsx)("span",{className:"text-blue-500 font-bold",children:"\u2022"}),(0,l.jsx)("span",{children:"Connect same AVX types (xmm_epi16 \u2192 xmm_epi16)"})]}),(0,l.jsxs)("div",{className:"flex items-start gap-2",children:[(0,l.jsx)("span",{className:"text-blue-500 font-bold",children:"\u2022"}),(0,l.jsxs)("span",{children:["Hold ",(0,l.jsx)("kbd",{className:"px-2 py-1 bg-gray-200 rounded-md text-xs font-mono",children:"Shift"})," while dragging to add compatible operations"]})]}),(0,l.jsxs)("div",{className:"flex items-start gap-2",children:[(0,l.jsx)("span",{className:"text-blue-500 font-bold",children:"\u2022"}),(0,l.jsx)("span",{children:"Edit constant values (imm8) directly in operation nodes"})]}),(0,l.jsxs)("div",{className:"flex items-start gap-2",children:[(0,l.jsx)("span",{className:"text-blue-500 font-bold",children:"\u2022"}),(0,l.jsxs)("span",{children:["Press ",(0,l.jsx)("kbd",{className:"px-2 py-1 bg-gray-200 rounded-md text-xs font-mono",children:"Delete"})," to remove selected nodes"]})]}),(0,l.jsxs)("div",{className:"flex items-start gap-2",children:[(0,l.jsx)("span",{className:"text-blue-500 font-bold",children:"\u2022"}),(0,l.jsxs)("span",{children:["Press ",(0,l.jsx)("kbd",{className:"px-2 py-1 bg-gray-200 rounded-md text-xs font-mono",children:"Ctrl+D"})," to duplicate selected nodes"]})]}),(0,l.jsxs)("div",{className:"flex items-start gap-2",children:[(0,l.jsx)("span",{className:"text-blue-500 font-bold",children:"\u2022"}),(0,l.jsx)("span",{children:"Pan (drag empty areas) and zoom (scroll wheel)"})]}),(0,l.jsxs)("div",{className:"flex items-start gap-2",children:[(0,l.jsx)("span",{className:"text-blue-500 font-bold",children:"\u2022"}),(0,l.jsxs)("span",{children:["Press ",(0,l.jsx)("kbd",{className:"px-2 py-1 bg-gray-200 rounded-md text-xs font-mono",children:"Ctrl+S"})," to save canvas"]})]}),(0,l.jsxs)("div",{className:"flex items-start gap-2",children:[(0,l.jsx)("span",{className:"text-blue-500 font-bold",children:"\u2022"}),(0,l.jsx)("span",{children:"Use Save/Load panel below to export/import JSON files"})]})]})})]}),(0,l.jsx)(T,{onSave:this.saveToLocalStorage,onLoad:this.loadFromLocalStorage,onExport:this.exportToJSON,onImport:this.importFromJSON,onClear:this.clearCanvas,hasUnsavedChanges:this.state.hasUnsavedChanges,lastSaved:this.state.lastSaved})]}),(0,l.jsx)("div",{className:"absolute top-6 right-6 z-10 bg-white rounded-xl shadow-xl border-2 border-gray-200",children:(0,l.jsxs)("div",{className:"p-4",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,l.jsx)("div",{className:"text-sm font-semibold text-gray-800",children:"View"}),(0,l.jsx)("button",{onClick:this.resetView,className:"px-3 py-1 text-xs bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200",children:"Reset"})]}),(0,l.jsxs)("div",{className:"text-xs text-gray-600",children:[(0,l.jsxs)("div",{className:"mb-1",children:["Zoom: ",Math.round(100*f.zoom),"%"]}),(0,l.jsxs)("div",{children:["Pan: (",Math.round(f.x),", ",Math.round(f.y),")"]}),(0,l.jsx)("div",{className:"mt-1 text-xs text-gray-500",children:p?"\ud83d\uddb1\ufe0f Panning...":"Click & drag to pan"})]})]})}),(0,l.jsx)("div",{ref:this.canvasRef,className:"w-full h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 relative overflow-hidden ".concat(p?"cursor-grabbing":"cursor-grab"),tabIndex:0,onFocus:this.handleCanvasFocus,onBlur:this.handleCanvasBlur,onDrop:this.onDrop,onDragOver:this.onDragOver,onClick:this.handleCanvasClick,onMouseDown:this.handleMouseDown,onMouseMove:this.handleMouseMove,onMouseUp:this.handleMouseUp,onWheel:this.handleWheel,style:{backgroundImage:"radial-gradient(circle, #e2e8f0 1px, transparent 1px)",backgroundSize:"".concat(20*f.zoom,"px ").concat(20*f.zoom,"px"),outline:this.state.isCanvasFocused?"2px solid rgba(59, 130, 246, 0.5)":"none"},children:(0,l.jsxs)("div",{ref:this.divRef,className:"absolute inset-0 w-full h-full",onDrop:this.onDrop,onDragOver:this.onDragOver,onClick:this.handleCanvasClick,onMouseDown:this.handleMouseDown,onMouseMove:this.handleMouseMove,onMouseUp:this.handleMouseUp,onWheel:this.handleWheel,style:{transform:"translate(".concat(f.x,"px, ").concat(f.y,"px) scale(").concat(f.zoom,")"),transformOrigin:"0 0"},children:[(0,l.jsx)("svg",{className:"canvas-background absolute inset-0",tabIndex:0,onFocus:this.handleCanvasFocus,onBlur:this.handleCanvasBlur,onDrop:this.onDrop,onDragOver:this.onDragOver,onClick:this.handleCanvasClick,onMouseDown:this.handleMouseDown,onMouseMove:this.handleMouseMove,onMouseUp:this.handleMouseUp,onWheel:this.handleWheel,style:{zIndex:0,width:"".concat(window.innerWidth/f.zoom,"px"),height:"".concat(window.innerHeight/f.zoom,"px"),left:"".concat(-f.x/f.zoom,"px"),top:"".concat(-f.y/f.zoom,"px"),outline:"none"},children:(0,l.jsxs)("g",{children:[t.map(e=>(0,l.jsx)(N,{start:e.sourcePoint,end:e.targetPoint,connectionType:e.connectionType,connectionId:e.id,onDeleteConnection:this.deleteConnection,viewport:f},e.id)),o&&(0,l.jsx)(N,{start:o.start,end:o.end,connectionType:o.connectionType,isTemp:!0,isInvalid:o.isInvalid,viewport:f})]})}),c&&(0,l.jsx)("div",{className:"absolute border-2 border-blue-500 bg-blue-100 bg-opacity-30 pointer-events-none",style:{left:Math.min(c.startPosition.x,c.currentPosition.x),top:Math.min(c.startPosition.y,c.currentPosition.y),width:Math.abs(c.currentPosition.x-c.startPosition.x),height:Math.abs(c.currentPosition.y-c.startPosition.y),zIndex:1e3}}),e.map(n=>(0,l.jsx)(_,{node:n,onOutputDragStart:this.onOutputDragStart,onNodeDragStart:this.onNodeDragStart,onDeleteNode:this.deleteNode,onSelectNode:(e,t)=>{t?this.handleMultiSelection(e):this.setSingleNodeSelection(e)},onResize:this.onNodeResize,onUpdateNodeData:this.onUpdateNodeData,connections:t,nodes:e,isDragging:(null==u?void 0:u.nodeIds.includes(n.id))||!1,isSelected:a===n.id,isMultiSelected:s.includes(n.id)},n.id)),e.map(e=>{var t
return((null===(t=e.template)||void 0===t?void 0:t.inputs)||[]).map((t,n)=>(0,l.jsx)("div",{className:"input-handle absolute w-6 h-6 pointer-events-auto cursor-pointer hover:scale-110 transition-transform duration-200","data-node-id":e.id,"data-input-id":t.id,"data-input-type":t.type,style:{left:e.position.x-12,top:e.position.y+18+25*n,zIndex:10}},"input-".concat(e.id,"-").concat(t.id)))}),n&&(0,l.jsx)(M,{position:r,sourceOutput:h,onNodeSelect:this.handleNodeSelect,onClose:this.closeMenu,viewport:f})]})})]})]})}}class I extends a.Component{render(){return(0,l.jsx)("div",{className:"w-full h-screen",children:(0,l.jsx)(P,{})})}}const O=I
s.createRoot(document.getElementById("root")).render((0,l.jsx)(a.StrictMode,{children:(0,l.jsx)(O,{})}))})()

//# sourceMappingURL=main.0e7d888d.js.map