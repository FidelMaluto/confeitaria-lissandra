function ap(t,e){for(var r=0;r<e.length;r++){const n=e[r];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(n,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();function op(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ad={exports:{}},Fi={},od={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hs=Symbol.for("react.element"),lp=Symbol.for("react.portal"),up=Symbol.for("react.fragment"),cp=Symbol.for("react.strict_mode"),dp=Symbol.for("react.profiler"),hp=Symbol.for("react.provider"),fp=Symbol.for("react.context"),pp=Symbol.for("react.forward_ref"),mp=Symbol.for("react.suspense"),gp=Symbol.for("react.memo"),vp=Symbol.for("react.lazy"),iu=Symbol.iterator;function yp(t){return t===null||typeof t!="object"?null:(t=iu&&t[iu]||t["@@iterator"],typeof t=="function"?t:null)}var ld={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ud=Object.assign,cd={};function tn(t,e,r){this.props=t,this.context=e,this.refs=cd,this.updater=r||ld}tn.prototype.isReactComponent={};tn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};tn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function dd(){}dd.prototype=tn.prototype;function al(t,e,r){this.props=t,this.context=e,this.refs=cd,this.updater=r||ld}var ol=al.prototype=new dd;ol.constructor=al;ud(ol,tn.prototype);ol.isPureReactComponent=!0;var au=Array.isArray,hd=Object.prototype.hasOwnProperty,ll={current:null},fd={key:!0,ref:!0,__self:!0,__source:!0};function pd(t,e,r){var n,s={},i=null,a=null;if(e!=null)for(n in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(i=""+e.key),e)hd.call(e,n)&&!fd.hasOwnProperty(n)&&(s[n]=e[n]);var o=arguments.length-2;if(o===1)s.children=r;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];s.children=l}if(t&&t.defaultProps)for(n in o=t.defaultProps,o)s[n]===void 0&&(s[n]=o[n]);return{$$typeof:hs,type:t,key:i,ref:a,props:s,_owner:ll.current}}function wp(t,e){return{$$typeof:hs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ul(t){return typeof t=="object"&&t!==null&&t.$$typeof===hs}function xp(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var ou=/\/+/g;function fa(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xp(""+t.key):e.toString(36)}function Gs(t,e,r,n,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case hs:case lp:a=!0}}if(a)return a=t,s=s(a),t=n===""?"."+fa(a,0):n,au(s)?(r="",t!=null&&(r=t.replace(ou,"$&/")+"/"),Gs(s,e,r,"",function(c){return c})):s!=null&&(ul(s)&&(s=wp(s,r+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(ou,"$&/")+"/")+t)),e.push(s)),1;if(a=0,n=n===""?".":n+":",au(t))for(var o=0;o<t.length;o++){i=t[o];var l=n+fa(i,o);a+=Gs(i,e,r,l,s)}else if(l=yp(t),typeof l=="function")for(t=l.call(t),o=0;!(i=t.next()).done;)i=i.value,l=n+fa(i,o++),a+=Gs(i,e,r,l,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function bs(t,e,r){if(t==null)return t;var n=[],s=0;return Gs(t,n,"","",function(i){return e.call(r,i,s++)}),n}function _p(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xe={current:null},Js={transition:null},bp={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Js,ReactCurrentOwner:ll};function md(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:bs,forEach:function(t,e,r){bs(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return bs(t,function(){e++}),e},toArray:function(t){return bs(t,function(e){return e})||[]},only:function(t){if(!ul(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=tn;U.Fragment=up;U.Profiler=dp;U.PureComponent=al;U.StrictMode=cp;U.Suspense=mp;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bp;U.act=md;U.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=ud({},t.props),s=t.key,i=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,a=ll.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)hd.call(e,l)&&!fd.hasOwnProperty(l)&&(n[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];n.children=o}return{$$typeof:hs,type:t.type,key:s,ref:i,props:n,_owner:a}};U.createContext=function(t){return t={$$typeof:fp,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hp,_context:t},t.Consumer=t};U.createElement=pd;U.createFactory=function(t){var e=pd.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:pp,render:t}};U.isValidElement=ul;U.lazy=function(t){return{$$typeof:vp,_payload:{_status:-1,_result:t},_init:_p}};U.memo=function(t,e){return{$$typeof:gp,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=Js.transition;Js.transition={};try{t()}finally{Js.transition=e}};U.unstable_act=md;U.useCallback=function(t,e){return xe.current.useCallback(t,e)};U.useContext=function(t){return xe.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return xe.current.useDeferredValue(t)};U.useEffect=function(t,e){return xe.current.useEffect(t,e)};U.useId=function(){return xe.current.useId()};U.useImperativeHandle=function(t,e,r){return xe.current.useImperativeHandle(t,e,r)};U.useInsertionEffect=function(t,e){return xe.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return xe.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return xe.current.useMemo(t,e)};U.useReducer=function(t,e,r){return xe.current.useReducer(t,e,r)};U.useRef=function(t){return xe.current.useRef(t)};U.useState=function(t){return xe.current.useState(t)};U.useSyncExternalStore=function(t,e,r){return xe.current.useSyncExternalStore(t,e,r)};U.useTransition=function(){return xe.current.useTransition()};U.version="18.3.1";od.exports=U;var b=od.exports;const gd=op(b),kp=ap({__proto__:null,default:gd},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp=b,Ep=Symbol.for("react.element"),jp=Symbol.for("react.fragment"),Cp=Object.prototype.hasOwnProperty,Tp=Sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Np={key:!0,ref:!0,__self:!0,__source:!0};function vd(t,e,r){var n,s={},i=null,a=null;r!==void 0&&(i=""+r),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(n in e)Cp.call(e,n)&&!Np.hasOwnProperty(n)&&(s[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)s[n]===void 0&&(s[n]=e[n]);return{$$typeof:Ep,type:t,key:i,ref:a,props:s,_owner:Tp.current}}Fi.Fragment=jp;Fi.jsx=vd;Fi.jsxs=vd;ad.exports=Fi;var u=ad.exports,Ja={},yd={exports:{}},Le={},wd={exports:{}},xd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,L){var $=R.length;R.push(L);e:for(;0<$;){var Y=$-1>>>1,ie=R[Y];if(0<s(ie,L))R[Y]=L,R[$]=ie,$=Y;else break e}}function r(R){return R.length===0?null:R[0]}function n(R){if(R.length===0)return null;var L=R[0],$=R.pop();if($!==L){R[0]=$;e:for(var Y=0,ie=R.length,xs=ie>>>1;Y<xs;){var Xt=2*(Y+1)-1,ha=R[Xt],Yt=Xt+1,_s=R[Yt];if(0>s(ha,$))Yt<ie&&0>s(_s,ha)?(R[Y]=_s,R[Yt]=$,Y=Yt):(R[Y]=ha,R[Xt]=$,Y=Xt);else if(Yt<ie&&0>s(_s,$))R[Y]=_s,R[Yt]=$,Y=Yt;else break e}}return L}function s(R,L){var $=R.sortIndex-L.sortIndex;return $!==0?$:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,d=null,f=3,g=!1,y=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var L=r(c);L!==null;){if(L.callback===null)n(c);else if(L.startTime<=R)n(c),L.sortIndex=L.expirationTime,e(l,L);else break;L=r(c)}}function _(R){if(w=!1,v(R),!y)if(r(l)!==null)y=!0,ca(k);else{var L=r(c);L!==null&&da(_,L.startTime-R)}}function k(R,L){y=!1,w&&(w=!1,m(T),T=-1),g=!0;var $=f;try{for(v(L),d=r(l);d!==null&&(!(d.expirationTime>L)||R&&!Te());){var Y=d.callback;if(typeof Y=="function"){d.callback=null,f=d.priorityLevel;var ie=Y(d.expirationTime<=L);L=t.unstable_now(),typeof ie=="function"?d.callback=ie:d===r(l)&&n(l),v(L)}else n(l);d=r(l)}if(d!==null)var xs=!0;else{var Xt=r(c);Xt!==null&&da(_,Xt.startTime-L),xs=!1}return xs}finally{d=null,f=$,g=!1}}var S=!1,E=null,T=-1,O=5,I=-1;function Te(){return!(t.unstable_now()-I<O)}function cn(){if(E!==null){var R=t.unstable_now();I=R;var L=!0;try{L=E(!0,R)}finally{L?dn():(S=!1,E=null)}}else S=!1}var dn;if(typeof p=="function")dn=function(){p(cn)};else if(typeof MessageChannel<"u"){var su=new MessageChannel,ip=su.port2;su.port1.onmessage=cn,dn=function(){ip.postMessage(null)}}else dn=function(){x(cn,0)};function ca(R){E=R,S||(S=!0,dn())}function da(R,L){T=x(function(){R(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,ca(k))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(l)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var L=3;break;default:L=f}var $=f;f=L;try{return R()}finally{f=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var $=f;f=R;try{return L()}finally{f=$}},t.unstable_scheduleCallback=function(R,L,$){var Y=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Y+$:Y):$=Y,R){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=$+ie,R={id:h++,callback:L,priorityLevel:R,startTime:$,expirationTime:ie,sortIndex:-1},$>Y?(R.sortIndex=$,e(c,R),r(l)===null&&R===r(c)&&(w?(m(T),T=-1):w=!0,da(_,$-Y))):(R.sortIndex=ie,e(l,R),y||g||(y=!0,ca(k))),R},t.unstable_shouldYield=Te,t.unstable_wrapCallback=function(R){var L=f;return function(){var $=f;f=L;try{return R.apply(this,arguments)}finally{f=$}}}})(xd);wd.exports=xd;var Rp=wd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp=b,Ie=Rp;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _d=new Set,zn={};function gr(t,e){Kr(t,e),Kr(t+"Capture",e)}function Kr(t,e){for(zn[t]=e,t=0;t<e.length;t++)_d.add(e[t])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qa=Object.prototype.hasOwnProperty,Ap=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lu={},uu={};function Op(t){return Qa.call(uu,t)?!0:Qa.call(lu,t)?!1:Ap.test(t)?uu[t]=!0:(lu[t]=!0,!1)}function Ip(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Lp(t,e,r,n){if(e===null||typeof e>"u"||Ip(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _e(t,e,r,n,s,i,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=a}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){de[t]=new _e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];de[e]=new _e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){de[t]=new _e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){de[t]=new _e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){de[t]=new _e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){de[t]=new _e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){de[t]=new _e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){de[t]=new _e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){de[t]=new _e(t,5,!1,t.toLowerCase(),null,!1,!1)});var cl=/[\-:]([a-z])/g;function dl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cl,dl);de[e]=new _e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cl,dl);de[e]=new _e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cl,dl);de[e]=new _e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){de[t]=new _e(t,1,!1,t.toLowerCase(),null,!1,!1)});de.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){de[t]=new _e(t,1,!1,t.toLowerCase(),null,!0,!0)});function hl(t,e,r,n){var s=de.hasOwnProperty(e)?de[e]:null;(s!==null?s.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Lp(e,r,s,n)&&(r=null),n||s===null?Op(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):s.mustUseProperty?t[s.propertyName]=r===null?s.type===3?!1:"":r:(e=s.attributeName,n=s.attributeNamespace,r===null?t.removeAttribute(e):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var St=Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ks=Symbol.for("react.element"),jr=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),fl=Symbol.for("react.strict_mode"),Xa=Symbol.for("react.profiler"),bd=Symbol.for("react.provider"),kd=Symbol.for("react.context"),pl=Symbol.for("react.forward_ref"),Ya=Symbol.for("react.suspense"),Za=Symbol.for("react.suspense_list"),ml=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),Sd=Symbol.for("react.offscreen"),cu=Symbol.iterator;function hn(t){return t===null||typeof t!="object"?null:(t=cu&&t[cu]||t["@@iterator"],typeof t=="function"?t:null)}var G=Object.assign,pa;function _n(t){if(pa===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);pa=e&&e[1]||""}return`
`+pa+t}var ma=!1;function ga(t,e){if(!t||ma)return"";ma=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var n=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){n=c}t.call(e.prototype)}else{try{throw Error()}catch(c){n=c}t()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=n.stack.split(`
`),a=s.length-1,o=i.length-1;1<=a&&0<=o&&s[a]!==i[o];)o--;for(;1<=a&&0<=o;a--,o--)if(s[a]!==i[o]){if(a!==1||o!==1)do if(a--,o--,0>o||s[a]!==i[o]){var l=`
`+s[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{ma=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?_n(t):""}function $p(t){switch(t.tag){case 5:return _n(t.type);case 16:return _n("Lazy");case 13:return _n("Suspense");case 19:return _n("SuspenseList");case 0:case 2:case 15:return t=ga(t.type,!1),t;case 11:return t=ga(t.type.render,!1),t;case 1:return t=ga(t.type,!0),t;default:return""}}function eo(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Cr:return"Fragment";case jr:return"Portal";case Xa:return"Profiler";case fl:return"StrictMode";case Ya:return"Suspense";case Za:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kd:return(t.displayName||"Context")+".Consumer";case bd:return(t._context.displayName||"Context")+".Provider";case pl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ml:return e=t.displayName||null,e!==null?e:eo(t.type)||"Memo";case Tt:e=t._payload,t=t._init;try{return eo(t(e))}catch{}}return null}function Up(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eo(e);case 8:return e===fl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ed(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Dp(t){var e=Ed(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,i=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(a){n=""+a,i.call(this,a)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ss(t){t._valueTracker||(t._valueTracker=Dp(t))}function jd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=Ed(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function oi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function to(t,e){var r=e.checked;return G({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function du(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=Vt(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cd(t,e){e=e.checked,e!=null&&hl(t,"checked",e,!1)}function ro(t,e){Cd(t,e);var r=Vt(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?no(t,e.type,r):e.hasOwnProperty("defaultValue")&&no(t,e.type,Vt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hu(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function no(t,e,r){(e!=="number"||oi(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var bn=Array.isArray;function zr(t,e,r,n){if(t=t.options,e){e={};for(var s=0;s<r.length;s++)e["$"+r[s]]=!0;for(r=0;r<t.length;r++)s=e.hasOwnProperty("$"+t[r].value),t[r].selected!==s&&(t[r].selected=s),s&&n&&(t[r].defaultSelected=!0)}else{for(r=""+Vt(r),e=null,s=0;s<t.length;s++){if(t[s].value===r){t[s].selected=!0,n&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function so(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return G({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fu(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(j(92));if(bn(r)){if(1<r.length)throw Error(j(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:Vt(r)}}function Td(t,e){var r=Vt(e.value),n=Vt(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function pu(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Nd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function io(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Nd(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Es,Rd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,s){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Es=Es||document.createElement("div"),Es.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Es.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bn(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Tn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zp=["Webkit","ms","Moz","O"];Object.keys(Tn).forEach(function(t){zp.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Tn[e]=Tn[t]})});function Pd(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Tn.hasOwnProperty(t)&&Tn[t]?(""+e).trim():e+"px"}function Ad(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,s=Pd(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,s):t[r]=s}}var Bp=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ao(t,e){if(e){if(Bp[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function oo(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lo=null;function gl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uo=null,Br=null,Fr=null;function mu(t){if(t=ms(t)){if(typeof uo!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Vi(e),uo(t.stateNode,t.type,e))}}function Od(t){Br?Fr?Fr.push(t):Fr=[t]:Br=t}function Id(){if(Br){var t=Br,e=Fr;if(Fr=Br=null,mu(t),e)for(t=0;t<e.length;t++)mu(e[t])}}function Ld(t,e){return t(e)}function $d(){}var va=!1;function Ud(t,e,r){if(va)return t(e,r);va=!0;try{return Ld(t,e,r)}finally{va=!1,(Br!==null||Fr!==null)&&($d(),Id())}}function Fn(t,e){var r=t.stateNode;if(r===null)return null;var n=Vi(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(j(231,e,typeof r));return r}var co=!1;if(xt)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){co=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{co=!1}function Fp(t,e,r,n,s,i,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(r,c)}catch(h){this.onError(h)}}var Nn=!1,li=null,ui=!1,ho=null,Mp={onError:function(t){Nn=!0,li=t}};function Wp(t,e,r,n,s,i,a,o,l){Nn=!1,li=null,Fp.apply(Mp,arguments)}function qp(t,e,r,n,s,i,a,o,l){if(Wp.apply(this,arguments),Nn){if(Nn){var c=li;Nn=!1,li=null}else throw Error(j(198));ui||(ui=!0,ho=c)}}function vr(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function Dd(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gu(t){if(vr(t)!==t)throw Error(j(188))}function Hp(t){var e=t.alternate;if(!e){if(e=vr(t),e===null)throw Error(j(188));return e!==t?null:t}for(var r=t,n=e;;){var s=r.return;if(s===null)break;var i=s.alternate;if(i===null){if(n=s.return,n!==null){r=n;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===r)return gu(s),t;if(i===n)return gu(s),e;i=i.sibling}throw Error(j(188))}if(r.return!==n.return)r=s,n=i;else{for(var a=!1,o=s.child;o;){if(o===r){a=!0,r=s,n=i;break}if(o===n){a=!0,n=s,r=i;break}o=o.sibling}if(!a){for(o=i.child;o;){if(o===r){a=!0,r=i,n=s;break}if(o===n){a=!0,n=i,r=s;break}o=o.sibling}if(!a)throw Error(j(189))}}if(r.alternate!==n)throw Error(j(190))}if(r.tag!==3)throw Error(j(188));return r.stateNode.current===r?t:e}function zd(t){return t=Hp(t),t!==null?Bd(t):null}function Bd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Bd(t);if(e!==null)return e;t=t.sibling}return null}var Fd=Ie.unstable_scheduleCallback,vu=Ie.unstable_cancelCallback,Vp=Ie.unstable_shouldYield,Kp=Ie.unstable_requestPaint,Z=Ie.unstable_now,Gp=Ie.unstable_getCurrentPriorityLevel,vl=Ie.unstable_ImmediatePriority,Md=Ie.unstable_UserBlockingPriority,ci=Ie.unstable_NormalPriority,Jp=Ie.unstable_LowPriority,Wd=Ie.unstable_IdlePriority,Mi=null,lt=null;function Qp(t){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Mi,t,void 0,(t.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:Zp,Xp=Math.log,Yp=Math.LN2;function Zp(t){return t>>>=0,t===0?32:31-(Xp(t)/Yp|0)|0}var js=64,Cs=4194304;function kn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function di(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,s=t.suspendedLanes,i=t.pingedLanes,a=r&268435455;if(a!==0){var o=a&~s;o!==0?n=kn(o):(i&=a,i!==0&&(n=kn(i)))}else a=r&~s,a!==0?n=kn(a):i!==0&&(n=kn(i));if(n===0)return 0;if(e!==0&&e!==n&&!(e&s)&&(s=n&-n,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-et(e),s=1<<r,n|=t[r],e&=~s;return n}function em(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tm(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var a=31-et(i),o=1<<a,l=s[a];l===-1?(!(o&r)||o&n)&&(s[a]=em(o,e)):l<=e&&(t.expiredLanes|=o),i&=~o}}function fo(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qd(){var t=js;return js<<=1,!(js&4194240)&&(js=64),t}function ya(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function fs(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-et(e),t[e]=r}function rm(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var s=31-et(r),i=1<<s;e[s]=0,n[s]=-1,t[s]=-1,r&=~i}}function yl(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-et(r),s=1<<n;s&e|t[n]&e&&(t[n]|=e),r&=~s}}var z=0;function Hd(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Vd,wl,Kd,Gd,Jd,po=!1,Ts=[],Ut=null,Dt=null,zt=null,Mn=new Map,Wn=new Map,Rt=[],nm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yu(t,e){switch(t){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Mn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(e.pointerId)}}function pn(t,e,r,n,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ms(e),e!==null&&wl(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function sm(t,e,r,n,s){switch(e){case"focusin":return Ut=pn(Ut,t,e,r,n,s),!0;case"dragenter":return Dt=pn(Dt,t,e,r,n,s),!0;case"mouseover":return zt=pn(zt,t,e,r,n,s),!0;case"pointerover":var i=s.pointerId;return Mn.set(i,pn(Mn.get(i)||null,t,e,r,n,s)),!0;case"gotpointercapture":return i=s.pointerId,Wn.set(i,pn(Wn.get(i)||null,t,e,r,n,s)),!0}return!1}function Qd(t){var e=ir(t.target);if(e!==null){var r=vr(e);if(r!==null){if(e=r.tag,e===13){if(e=Dd(r),e!==null){t.blockedOn=e,Jd(t.priority,function(){Kd(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=mo(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);lo=n,r.target.dispatchEvent(n),lo=null}else return e=ms(r),e!==null&&wl(e),t.blockedOn=r,!1;e.shift()}return!0}function wu(t,e,r){Qs(t)&&r.delete(e)}function im(){po=!1,Ut!==null&&Qs(Ut)&&(Ut=null),Dt!==null&&Qs(Dt)&&(Dt=null),zt!==null&&Qs(zt)&&(zt=null),Mn.forEach(wu),Wn.forEach(wu)}function mn(t,e){t.blockedOn===e&&(t.blockedOn=null,po||(po=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,im)))}function qn(t){function e(s){return mn(s,t)}if(0<Ts.length){mn(Ts[0],t);for(var r=1;r<Ts.length;r++){var n=Ts[r];n.blockedOn===t&&(n.blockedOn=null)}}for(Ut!==null&&mn(Ut,t),Dt!==null&&mn(Dt,t),zt!==null&&mn(zt,t),Mn.forEach(e),Wn.forEach(e),r=0;r<Rt.length;r++)n=Rt[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<Rt.length&&(r=Rt[0],r.blockedOn===null);)Qd(r),r.blockedOn===null&&Rt.shift()}var Mr=St.ReactCurrentBatchConfig,hi=!0;function am(t,e,r,n){var s=z,i=Mr.transition;Mr.transition=null;try{z=1,xl(t,e,r,n)}finally{z=s,Mr.transition=i}}function om(t,e,r,n){var s=z,i=Mr.transition;Mr.transition=null;try{z=4,xl(t,e,r,n)}finally{z=s,Mr.transition=i}}function xl(t,e,r,n){if(hi){var s=mo(t,e,r,n);if(s===null)Ta(t,e,n,fi,r),yu(t,n);else if(sm(s,t,e,r,n))n.stopPropagation();else if(yu(t,n),e&4&&-1<nm.indexOf(t)){for(;s!==null;){var i=ms(s);if(i!==null&&Vd(i),i=mo(t,e,r,n),i===null&&Ta(t,e,n,fi,r),i===s)break;s=i}s!==null&&n.stopPropagation()}else Ta(t,e,n,null,r)}}var fi=null;function mo(t,e,r,n){if(fi=null,t=gl(n),t=ir(t),t!==null)if(e=vr(t),e===null)t=null;else if(r=e.tag,r===13){if(t=Dd(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fi=t,null}function Xd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gp()){case vl:return 1;case Md:return 4;case ci:case Jp:return 16;case Wd:return 536870912;default:return 16}default:return 16}}var It=null,_l=null,Xs=null;function Yd(){if(Xs)return Xs;var t,e=_l,r=e.length,n,s="value"in It?It.value:It.textContent,i=s.length;for(t=0;t<r&&e[t]===s[t];t++);var a=r-t;for(n=1;n<=a&&e[r-n]===s[i-n];n++);return Xs=s.slice(t,1<n?1-n:void 0)}function Ys(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ns(){return!0}function xu(){return!1}function $e(t){function e(r,n,s,i,a){this._reactName=r,this._targetInst=s,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(r=t[o],this[o]=r?r(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ns:xu,this.isPropagationStopped=xu,this}return G(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ns)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ns)},persist:function(){},isPersistent:Ns}),e}var rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=$e(rn),ps=G({},rn,{view:0,detail:0}),lm=$e(ps),wa,xa,gn,Wi=G({},ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gn&&(gn&&t.type==="mousemove"?(wa=t.screenX-gn.screenX,xa=t.screenY-gn.screenY):xa=wa=0,gn=t),wa)},movementY:function(t){return"movementY"in t?t.movementY:xa}}),_u=$e(Wi),um=G({},Wi,{dataTransfer:0}),cm=$e(um),dm=G({},ps,{relatedTarget:0}),_a=$e(dm),hm=G({},rn,{animationName:0,elapsedTime:0,pseudoElement:0}),fm=$e(hm),pm=G({},rn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mm=$e(pm),gm=G({},rn,{data:0}),bu=$e(gm),vm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ym={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wm[t])?!!e[t]:!1}function kl(){return xm}var _m=G({},ps,{key:function(t){if(t.key){var e=vm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ys(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ym[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kl,charCode:function(t){return t.type==="keypress"?Ys(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ys(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bm=$e(_m),km=G({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ku=$e(km),Sm=G({},ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kl}),Em=$e(Sm),jm=G({},rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cm=$e(jm),Tm=G({},Wi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Nm=$e(Tm),Rm=[9,13,27,32],Sl=xt&&"CompositionEvent"in window,Rn=null;xt&&"documentMode"in document&&(Rn=document.documentMode);var Pm=xt&&"TextEvent"in window&&!Rn,Zd=xt&&(!Sl||Rn&&8<Rn&&11>=Rn),Su=" ",Eu=!1;function eh(t,e){switch(t){case"keyup":return Rm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function th(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Tr=!1;function Am(t,e){switch(t){case"compositionend":return th(e);case"keypress":return e.which!==32?null:(Eu=!0,Su);case"textInput":return t=e.data,t===Su&&Eu?null:t;default:return null}}function Om(t,e){if(Tr)return t==="compositionend"||!Sl&&eh(t,e)?(t=Yd(),Xs=_l=It=null,Tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zd&&e.locale!=="ko"?null:e.data;default:return null}}var Im={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ju(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Im[t.type]:e==="textarea"}function rh(t,e,r,n){Od(n),e=pi(e,"onChange"),0<e.length&&(r=new bl("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var Pn=null,Hn=null;function Lm(t){fh(t,0)}function qi(t){var e=Pr(t);if(jd(e))return t}function $m(t,e){if(t==="change")return e}var nh=!1;if(xt){var ba;if(xt){var ka="oninput"in document;if(!ka){var Cu=document.createElement("div");Cu.setAttribute("oninput","return;"),ka=typeof Cu.oninput=="function"}ba=ka}else ba=!1;nh=ba&&(!document.documentMode||9<document.documentMode)}function Tu(){Pn&&(Pn.detachEvent("onpropertychange",sh),Hn=Pn=null)}function sh(t){if(t.propertyName==="value"&&qi(Hn)){var e=[];rh(e,Hn,t,gl(t)),Ud(Lm,e)}}function Um(t,e,r){t==="focusin"?(Tu(),Pn=e,Hn=r,Pn.attachEvent("onpropertychange",sh)):t==="focusout"&&Tu()}function Dm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qi(Hn)}function zm(t,e){if(t==="click")return qi(e)}function Bm(t,e){if(t==="input"||t==="change")return qi(e)}function Fm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var rt=typeof Object.is=="function"?Object.is:Fm;function Vn(t,e){if(rt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var s=r[n];if(!Qa.call(e,s)||!rt(t[s],e[s]))return!1}return!0}function Nu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ru(t,e){var r=Nu(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Nu(r)}}function ih(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ih(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ah(){for(var t=window,e=oi();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=oi(t.document)}return e}function El(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Mm(t){var e=ah(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&ih(r.ownerDocument.documentElement,r)){if(n!==null&&El(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=r.textContent.length,i=Math.min(n.start,s);n=n.end===void 0?i:Math.min(n.end,s),!t.extend&&i>n&&(s=n,n=i,i=s),s=Ru(r,i);var a=Ru(r,n);s&&a&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>n?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Wm=xt&&"documentMode"in document&&11>=document.documentMode,Nr=null,go=null,An=null,vo=!1;function Pu(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;vo||Nr==null||Nr!==oi(n)||(n=Nr,"selectionStart"in n&&El(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),An&&Vn(An,n)||(An=n,n=pi(go,"onSelect"),0<n.length&&(e=new bl("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=Nr)))}function Rs(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Rr={animationend:Rs("Animation","AnimationEnd"),animationiteration:Rs("Animation","AnimationIteration"),animationstart:Rs("Animation","AnimationStart"),transitionend:Rs("Transition","TransitionEnd")},Sa={},oh={};xt&&(oh=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function Hi(t){if(Sa[t])return Sa[t];if(!Rr[t])return t;var e=Rr[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in oh)return Sa[t]=e[r];return t}var lh=Hi("animationend"),uh=Hi("animationiteration"),ch=Hi("animationstart"),dh=Hi("transitionend"),hh=new Map,Au="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(t,e){hh.set(t,e),gr(e,[t])}for(var Ea=0;Ea<Au.length;Ea++){var ja=Au[Ea],qm=ja.toLowerCase(),Hm=ja[0].toUpperCase()+ja.slice(1);Gt(qm,"on"+Hm)}Gt(lh,"onAnimationEnd");Gt(uh,"onAnimationIteration");Gt(ch,"onAnimationStart");Gt("dblclick","onDoubleClick");Gt("focusin","onFocus");Gt("focusout","onBlur");Gt(dh,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function Ou(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,qp(n,e,void 0,t),t.currentTarget=null}function fh(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],s=n.event;n=n.listeners;e:{var i=void 0;if(e)for(var a=n.length-1;0<=a;a--){var o=n[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==i&&s.isPropagationStopped())break e;Ou(s,o,c),i=l}else for(a=0;a<n.length;a++){if(o=n[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==i&&s.isPropagationStopped())break e;Ou(s,o,c),i=l}}}if(ui)throw t=ho,ui=!1,ho=null,t}function M(t,e){var r=e[bo];r===void 0&&(r=e[bo]=new Set);var n=t+"__bubble";r.has(n)||(ph(e,t,2,!1),r.add(n))}function Ca(t,e,r){var n=0;e&&(n|=4),ph(r,t,n,e)}var Ps="_reactListening"+Math.random().toString(36).slice(2);function Kn(t){if(!t[Ps]){t[Ps]=!0,_d.forEach(function(r){r!=="selectionchange"&&(Vm.has(r)||Ca(r,!1,t),Ca(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ps]||(e[Ps]=!0,Ca("selectionchange",!1,e))}}function ph(t,e,r,n){switch(Xd(e)){case 1:var s=am;break;case 4:s=om;break;default:s=xl}r=s.bind(null,e,r,t),s=void 0,!co||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),n?s!==void 0?t.addEventListener(e,r,{capture:!0,passive:s}):t.addEventListener(e,r,!0):s!==void 0?t.addEventListener(e,r,{passive:s}):t.addEventListener(e,r,!1)}function Ta(t,e,r,n,s){var i=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var o=n.stateNode.containerInfo;if(o===s||o.nodeType===8&&o.parentNode===s)break;if(a===4)for(a=n.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;a=a.return}for(;o!==null;){if(a=ir(o),a===null)return;if(l=a.tag,l===5||l===6){n=i=a;continue e}o=o.parentNode}}n=n.return}Ud(function(){var c=i,h=gl(r),d=[];e:{var f=hh.get(t);if(f!==void 0){var g=bl,y=t;switch(t){case"keypress":if(Ys(r)===0)break e;case"keydown":case"keyup":g=bm;break;case"focusin":y="focus",g=_a;break;case"focusout":y="blur",g=_a;break;case"beforeblur":case"afterblur":g=_a;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=_u;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=cm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Em;break;case lh:case uh:case ch:g=fm;break;case dh:g=Cm;break;case"scroll":g=lm;break;case"wheel":g=Nm;break;case"copy":case"cut":case"paste":g=mm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ku}var w=(e&4)!==0,x=!w&&t==="scroll",m=w?f!==null?f+"Capture":null:f;w=[];for(var p=c,v;p!==null;){v=p;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,m!==null&&(_=Fn(p,m),_!=null&&w.push(Gn(p,_,v)))),x)break;p=p.return}0<w.length&&(f=new g(f,y,null,r,h),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&r!==lo&&(y=r.relatedTarget||r.fromElement)&&(ir(y)||y[_t]))break e;if((g||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=r.relatedTarget||r.toElement,g=c,y=y?ir(y):null,y!==null&&(x=vr(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(w=_u,_="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=ku,_="onPointerLeave",m="onPointerEnter",p="pointer"),x=g==null?f:Pr(g),v=y==null?f:Pr(y),f=new w(_,p+"leave",g,r,h),f.target=x,f.relatedTarget=v,_=null,ir(h)===c&&(w=new w(m,p+"enter",y,r,h),w.target=v,w.relatedTarget=x,_=w),x=_,g&&y)t:{for(w=g,m=y,p=0,v=w;v;v=yr(v))p++;for(v=0,_=m;_;_=yr(_))v++;for(;0<p-v;)w=yr(w),p--;for(;0<v-p;)m=yr(m),v--;for(;p--;){if(w===m||m!==null&&w===m.alternate)break t;w=yr(w),m=yr(m)}w=null}else w=null;g!==null&&Iu(d,f,g,w,!1),y!==null&&x!==null&&Iu(d,x,y,w,!0)}}e:{if(f=c?Pr(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var k=$m;else if(ju(f))if(nh)k=Bm;else{k=Dm;var S=Um}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=zm);if(k&&(k=k(t,c))){rh(d,k,r,h);break e}S&&S(t,f,c),t==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&no(f,"number",f.value)}switch(S=c?Pr(c):window,t){case"focusin":(ju(S)||S.contentEditable==="true")&&(Nr=S,go=c,An=null);break;case"focusout":An=go=Nr=null;break;case"mousedown":vo=!0;break;case"contextmenu":case"mouseup":case"dragend":vo=!1,Pu(d,r,h);break;case"selectionchange":if(Wm)break;case"keydown":case"keyup":Pu(d,r,h)}var E;if(Sl)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Tr?eh(t,r)&&(T="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(Zd&&r.locale!=="ko"&&(Tr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Tr&&(E=Yd()):(It=h,_l="value"in It?It.value:It.textContent,Tr=!0)),S=pi(c,T),0<S.length&&(T=new bu(T,t,null,r,h),d.push({event:T,listeners:S}),E?T.data=E:(E=th(r),E!==null&&(T.data=E)))),(E=Pm?Am(t,r):Om(t,r))&&(c=pi(c,"onBeforeInput"),0<c.length&&(h=new bu("onBeforeInput","beforeinput",null,r,h),d.push({event:h,listeners:c}),h.data=E))}fh(d,e)})}function Gn(t,e,r){return{instance:t,listener:e,currentTarget:r}}function pi(t,e){for(var r=e+"Capture",n=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Fn(t,r),i!=null&&n.unshift(Gn(t,i,s)),i=Fn(t,e),i!=null&&n.push(Gn(t,i,s))),t=t.return}return n}function yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Iu(t,e,r,n,s){for(var i=e._reactName,a=[];r!==null&&r!==n;){var o=r,l=o.alternate,c=o.stateNode;if(l!==null&&l===n)break;o.tag===5&&c!==null&&(o=c,s?(l=Fn(r,i),l!=null&&a.unshift(Gn(r,l,o))):s||(l=Fn(r,i),l!=null&&a.push(Gn(r,l,o)))),r=r.return}a.length!==0&&t.push({event:e,listeners:a})}var Km=/\r\n?/g,Gm=/\u0000|\uFFFD/g;function Lu(t){return(typeof t=="string"?t:""+t).replace(Km,`
`).replace(Gm,"")}function As(t,e,r){if(e=Lu(e),Lu(t)!==e&&r)throw Error(j(425))}function mi(){}var yo=null,wo=null;function xo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _o=typeof setTimeout=="function"?setTimeout:void 0,Jm=typeof clearTimeout=="function"?clearTimeout:void 0,$u=typeof Promise=="function"?Promise:void 0,Qm=typeof queueMicrotask=="function"?queueMicrotask:typeof $u<"u"?function(t){return $u.resolve(null).then(t).catch(Xm)}:_o;function Xm(t){setTimeout(function(){throw t})}function Na(t,e){var r=e,n=0;do{var s=r.nextSibling;if(t.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(n===0){t.removeChild(s),qn(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=s}while(r);qn(e)}function Bt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Uu(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var nn=Math.random().toString(36).slice(2),ot="__reactFiber$"+nn,Jn="__reactProps$"+nn,_t="__reactContainer$"+nn,bo="__reactEvents$"+nn,Ym="__reactListeners$"+nn,Zm="__reactHandles$"+nn;function ir(t){var e=t[ot];if(e)return e;for(var r=t.parentNode;r;){if(e=r[_t]||r[ot]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Uu(t);t!==null;){if(r=t[ot])return r;t=Uu(t)}return e}t=r,r=t.parentNode}return null}function ms(t){return t=t[ot]||t[_t],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Pr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Vi(t){return t[Jn]||null}var ko=[],Ar=-1;function Jt(t){return{current:t}}function W(t){0>Ar||(t.current=ko[Ar],ko[Ar]=null,Ar--)}function F(t,e){Ar++,ko[Ar]=t.current,t.current=e}var Kt={},ge=Jt(Kt),Ee=Jt(!1),dr=Kt;function Gr(t,e){var r=t.type.contextTypes;if(!r)return Kt;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in r)s[i]=e[i];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function je(t){return t=t.childContextTypes,t!=null}function gi(){W(Ee),W(ge)}function Du(t,e,r){if(ge.current!==Kt)throw Error(j(168));F(ge,e),F(Ee,r)}function mh(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var s in n)if(!(s in e))throw Error(j(108,Up(t)||"Unknown",s));return G({},r,n)}function vi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kt,dr=ge.current,F(ge,t),F(Ee,Ee.current),!0}function zu(t,e,r){var n=t.stateNode;if(!n)throw Error(j(169));r?(t=mh(t,e,dr),n.__reactInternalMemoizedMergedChildContext=t,W(Ee),W(ge),F(ge,t)):W(Ee),F(Ee,r)}var gt=null,Ki=!1,Ra=!1;function gh(t){gt===null?gt=[t]:gt.push(t)}function eg(t){Ki=!0,gh(t)}function Qt(){if(!Ra&&gt!==null){Ra=!0;var t=0,e=z;try{var r=gt;for(z=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}gt=null,Ki=!1}catch(s){throw gt!==null&&(gt=gt.slice(t+1)),Fd(vl,Qt),s}finally{z=e,Ra=!1}}return null}var Or=[],Ir=0,yi=null,wi=0,ze=[],Be=0,hr=null,vt=1,yt="";function tr(t,e){Or[Ir++]=wi,Or[Ir++]=yi,yi=t,wi=e}function vh(t,e,r){ze[Be++]=vt,ze[Be++]=yt,ze[Be++]=hr,hr=t;var n=vt;t=yt;var s=32-et(n)-1;n&=~(1<<s),r+=1;var i=32-et(e)+s;if(30<i){var a=s-s%5;i=(n&(1<<a)-1).toString(32),n>>=a,s-=a,vt=1<<32-et(e)+s|r<<s|n,yt=i+t}else vt=1<<i|r<<s|n,yt=t}function jl(t){t.return!==null&&(tr(t,1),vh(t,1,0))}function Cl(t){for(;t===yi;)yi=Or[--Ir],Or[Ir]=null,wi=Or[--Ir],Or[Ir]=null;for(;t===hr;)hr=ze[--Be],ze[Be]=null,yt=ze[--Be],ze[Be]=null,vt=ze[--Be],ze[Be]=null}var Oe=null,Ae=null,q=!1,Xe=null;function yh(t,e){var r=Fe(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function Bu(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Oe=t,Ae=Bt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Oe=t,Ae=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=hr!==null?{id:vt,overflow:yt}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Fe(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Oe=t,Ae=null,!0):!1;default:return!1}}function So(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Eo(t){if(q){var e=Ae;if(e){var r=e;if(!Bu(t,e)){if(So(t))throw Error(j(418));e=Bt(r.nextSibling);var n=Oe;e&&Bu(t,e)?yh(n,r):(t.flags=t.flags&-4097|2,q=!1,Oe=t)}}else{if(So(t))throw Error(j(418));t.flags=t.flags&-4097|2,q=!1,Oe=t}}}function Fu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Oe=t}function Os(t){if(t!==Oe)return!1;if(!q)return Fu(t),q=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xo(t.type,t.memoizedProps)),e&&(e=Ae)){if(So(t))throw wh(),Error(j(418));for(;e;)yh(t,e),e=Bt(e.nextSibling)}if(Fu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Ae=Bt(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Ae=null}}else Ae=Oe?Bt(t.stateNode.nextSibling):null;return!0}function wh(){for(var t=Ae;t;)t=Bt(t.nextSibling)}function Jr(){Ae=Oe=null,q=!1}function Tl(t){Xe===null?Xe=[t]:Xe.push(t)}var tg=St.ReactCurrentBatchConfig;function vn(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(j(309));var n=r.stateNode}if(!n)throw Error(j(147,t));var s=n,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(a){var o=s.refs;a===null?delete o[i]:o[i]=a},e._stringRef=i,e)}if(typeof t!="string")throw Error(j(284));if(!r._owner)throw Error(j(290,t))}return t}function Is(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mu(t){var e=t._init;return e(t._payload)}function xh(t){function e(m,p){if(t){var v=m.deletions;v===null?(m.deletions=[p],m.flags|=16):v.push(p)}}function r(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function n(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function s(m,p){return m=qt(m,p),m.index=0,m.sibling=null,m}function i(m,p,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<p?(m.flags|=2,p):v):(m.flags|=2,p)):(m.flags|=1048576,p)}function a(m){return t&&m.alternate===null&&(m.flags|=2),m}function o(m,p,v,_){return p===null||p.tag!==6?(p=Ua(v,m.mode,_),p.return=m,p):(p=s(p,v),p.return=m,p)}function l(m,p,v,_){var k=v.type;return k===Cr?h(m,p,v.props.children,_,v.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Tt&&Mu(k)===p.type)?(_=s(p,v.props),_.ref=vn(m,p,v),_.return=m,_):(_=ii(v.type,v.key,v.props,null,m.mode,_),_.ref=vn(m,p,v),_.return=m,_)}function c(m,p,v,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Da(v,m.mode,_),p.return=m,p):(p=s(p,v.children||[]),p.return=m,p)}function h(m,p,v,_,k){return p===null||p.tag!==7?(p=cr(v,m.mode,_,k),p.return=m,p):(p=s(p,v),p.return=m,p)}function d(m,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ua(""+p,m.mode,v),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ks:return v=ii(p.type,p.key,p.props,null,m.mode,v),v.ref=vn(m,null,p),v.return=m,v;case jr:return p=Da(p,m.mode,v),p.return=m,p;case Tt:var _=p._init;return d(m,_(p._payload),v)}if(bn(p)||hn(p))return p=cr(p,m.mode,v,null),p.return=m,p;Is(m,p)}return null}function f(m,p,v,_){var k=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:o(m,p,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ks:return v.key===k?l(m,p,v,_):null;case jr:return v.key===k?c(m,p,v,_):null;case Tt:return k=v._init,f(m,p,k(v._payload),_)}if(bn(v)||hn(v))return k!==null?null:h(m,p,v,_,null);Is(m,v)}return null}function g(m,p,v,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(v)||null,o(p,m,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ks:return m=m.get(_.key===null?v:_.key)||null,l(p,m,_,k);case jr:return m=m.get(_.key===null?v:_.key)||null,c(p,m,_,k);case Tt:var S=_._init;return g(m,p,v,S(_._payload),k)}if(bn(_)||hn(_))return m=m.get(v)||null,h(p,m,_,k,null);Is(p,_)}return null}function y(m,p,v,_){for(var k=null,S=null,E=p,T=p=0,O=null;E!==null&&T<v.length;T++){E.index>T?(O=E,E=null):O=E.sibling;var I=f(m,E,v[T],_);if(I===null){E===null&&(E=O);break}t&&E&&I.alternate===null&&e(m,E),p=i(I,p,T),S===null?k=I:S.sibling=I,S=I,E=O}if(T===v.length)return r(m,E),q&&tr(m,T),k;if(E===null){for(;T<v.length;T++)E=d(m,v[T],_),E!==null&&(p=i(E,p,T),S===null?k=E:S.sibling=E,S=E);return q&&tr(m,T),k}for(E=n(m,E);T<v.length;T++)O=g(E,m,T,v[T],_),O!==null&&(t&&O.alternate!==null&&E.delete(O.key===null?T:O.key),p=i(O,p,T),S===null?k=O:S.sibling=O,S=O);return t&&E.forEach(function(Te){return e(m,Te)}),q&&tr(m,T),k}function w(m,p,v,_){var k=hn(v);if(typeof k!="function")throw Error(j(150));if(v=k.call(v),v==null)throw Error(j(151));for(var S=k=null,E=p,T=p=0,O=null,I=v.next();E!==null&&!I.done;T++,I=v.next()){E.index>T?(O=E,E=null):O=E.sibling;var Te=f(m,E,I.value,_);if(Te===null){E===null&&(E=O);break}t&&E&&Te.alternate===null&&e(m,E),p=i(Te,p,T),S===null?k=Te:S.sibling=Te,S=Te,E=O}if(I.done)return r(m,E),q&&tr(m,T),k;if(E===null){for(;!I.done;T++,I=v.next())I=d(m,I.value,_),I!==null&&(p=i(I,p,T),S===null?k=I:S.sibling=I,S=I);return q&&tr(m,T),k}for(E=n(m,E);!I.done;T++,I=v.next())I=g(E,m,T,I.value,_),I!==null&&(t&&I.alternate!==null&&E.delete(I.key===null?T:I.key),p=i(I,p,T),S===null?k=I:S.sibling=I,S=I);return t&&E.forEach(function(cn){return e(m,cn)}),q&&tr(m,T),k}function x(m,p,v,_){if(typeof v=="object"&&v!==null&&v.type===Cr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ks:e:{for(var k=v.key,S=p;S!==null;){if(S.key===k){if(k=v.type,k===Cr){if(S.tag===7){r(m,S.sibling),p=s(S,v.props.children),p.return=m,m=p;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Tt&&Mu(k)===S.type){r(m,S.sibling),p=s(S,v.props),p.ref=vn(m,S,v),p.return=m,m=p;break e}r(m,S);break}else e(m,S);S=S.sibling}v.type===Cr?(p=cr(v.props.children,m.mode,_,v.key),p.return=m,m=p):(_=ii(v.type,v.key,v.props,null,m.mode,_),_.ref=vn(m,p,v),_.return=m,m=_)}return a(m);case jr:e:{for(S=v.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){r(m,p.sibling),p=s(p,v.children||[]),p.return=m,m=p;break e}else{r(m,p);break}else e(m,p);p=p.sibling}p=Da(v,m.mode,_),p.return=m,m=p}return a(m);case Tt:return S=v._init,x(m,p,S(v._payload),_)}if(bn(v))return y(m,p,v,_);if(hn(v))return w(m,p,v,_);Is(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(r(m,p.sibling),p=s(p,v),p.return=m,m=p):(r(m,p),p=Ua(v,m.mode,_),p.return=m,m=p),a(m)):r(m,p)}return x}var Qr=xh(!0),_h=xh(!1),xi=Jt(null),_i=null,Lr=null,Nl=null;function Rl(){Nl=Lr=_i=null}function Pl(t){var e=xi.current;W(xi),t._currentValue=e}function jo(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function Wr(t,e){_i=t,Nl=Lr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Se=!0),t.firstContext=null)}function We(t){var e=t._currentValue;if(Nl!==t)if(t={context:t,memoizedValue:e,next:null},Lr===null){if(_i===null)throw Error(j(308));Lr=t,_i.dependencies={lanes:0,firstContext:t}}else Lr=Lr.next=t;return e}var ar=null;function Al(t){ar===null?ar=[t]:ar.push(t)}function bh(t,e,r,n){var s=e.interleaved;return s===null?(r.next=r,Al(e)):(r.next=s.next,s.next=r),e.interleaved=r,bt(t,n)}function bt(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Nt=!1;function Ol(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ft(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,D&2){var s=n.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),n.pending=e,bt(t,r)}return s=n.interleaved,s===null?(e.next=e,Al(n)):(e.next=s.next,s.next=e),n.interleaved=e,bt(t,r)}function Zs(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,yl(t,r)}}function Wu(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var s=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?s=i=a:i=i.next=a,r=r.next}while(r!==null);i===null?s=i=e:i=i.next=e}else s=i=e;r={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function bi(t,e,r,n){var s=t.updateQueue;Nt=!1;var i=s.firstBaseUpdate,a=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?i=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(i!==null){var d=s.baseState;a=0,h=c=l=null,o=i;do{var f=o.lane,g=o.eventTime;if((n&f)===f){h!==null&&(h=h.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,w=o;switch(f=e,g=r,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(g,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,f=typeof y=="function"?y.call(g,d,f):y,f==null)break e;d=G({},d,f);break e;case 2:Nt=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[o]:f.push(o))}else g={eventTime:g,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=g,l=d):h=h.next=g,a|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;f=o,o=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(h===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do a|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);pr|=a,t.lanes=a,t.memoizedState=d}}function qu(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],s=n.callback;if(s!==null){if(n.callback=null,n=r,typeof s!="function")throw Error(j(191,s));s.call(n)}}}var gs={},ut=Jt(gs),Qn=Jt(gs),Xn=Jt(gs);function or(t){if(t===gs)throw Error(j(174));return t}function Il(t,e){switch(F(Xn,e),F(Qn,t),F(ut,gs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:io(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=io(e,t)}W(ut),F(ut,e)}function Xr(){W(ut),W(Qn),W(Xn)}function Sh(t){or(Xn.current);var e=or(ut.current),r=io(e,t.type);e!==r&&(F(Qn,t),F(ut,r))}function Ll(t){Qn.current===t&&(W(ut),W(Qn))}var H=Jt(0);function ki(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pa=[];function $l(){for(var t=0;t<Pa.length;t++)Pa[t]._workInProgressVersionPrimary=null;Pa.length=0}var ei=St.ReactCurrentDispatcher,Aa=St.ReactCurrentBatchConfig,fr=0,V=null,ne=null,oe=null,Si=!1,On=!1,Yn=0,rg=0;function he(){throw Error(j(321))}function Ul(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!rt(t[r],e[r]))return!1;return!0}function Dl(t,e,r,n,s,i){if(fr=i,V=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ei.current=t===null||t.memoizedState===null?ag:og,t=r(n,s),On){i=0;do{if(On=!1,Yn=0,25<=i)throw Error(j(301));i+=1,oe=ne=null,e.updateQueue=null,ei.current=lg,t=r(n,s)}while(On)}if(ei.current=Ei,e=ne!==null&&ne.next!==null,fr=0,oe=ne=V=null,Si=!1,e)throw Error(j(300));return t}function zl(){var t=Yn!==0;return Yn=0,t}function st(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?V.memoizedState=oe=t:oe=oe.next=t,oe}function qe(){if(ne===null){var t=V.alternate;t=t!==null?t.memoizedState:null}else t=ne.next;var e=oe===null?V.memoizedState:oe.next;if(e!==null)oe=e,ne=t;else{if(t===null)throw Error(j(310));ne=t,t={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},oe===null?V.memoizedState=oe=t:oe=oe.next=t}return oe}function Zn(t,e){return typeof e=="function"?e(t):e}function Oa(t){var e=qe(),r=e.queue;if(r===null)throw Error(j(311));r.lastRenderedReducer=t;var n=ne,s=n.baseQueue,i=r.pending;if(i!==null){if(s!==null){var a=s.next;s.next=i.next,i.next=a}n.baseQueue=s=i,r.pending=null}if(s!==null){i=s.next,n=n.baseState;var o=a=null,l=null,c=i;do{var h=c.lane;if((fr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:t(n,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=n):l=l.next=d,V.lanes|=h,pr|=h}c=c.next}while(c!==null&&c!==i);l===null?a=n:l.next=o,rt(n,e.memoizedState)||(Se=!0),e.memoizedState=n,e.baseState=a,e.baseQueue=l,r.lastRenderedState=n}if(t=r.interleaved,t!==null){s=t;do i=s.lane,V.lanes|=i,pr|=i,s=s.next;while(s!==t)}else s===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Ia(t){var e=qe(),r=e.queue;if(r===null)throw Error(j(311));r.lastRenderedReducer=t;var n=r.dispatch,s=r.pending,i=e.memoizedState;if(s!==null){r.pending=null;var a=s=s.next;do i=t(i,a.action),a=a.next;while(a!==s);rt(i,e.memoizedState)||(Se=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),r.lastRenderedState=i}return[i,n]}function Eh(){}function jh(t,e){var r=V,n=qe(),s=e(),i=!rt(n.memoizedState,s);if(i&&(n.memoizedState=s,Se=!0),n=n.queue,Bl(Nh.bind(null,r,n,t),[t]),n.getSnapshot!==e||i||oe!==null&&oe.memoizedState.tag&1){if(r.flags|=2048,es(9,Th.bind(null,r,n,s,e),void 0,null),le===null)throw Error(j(349));fr&30||Ch(r,e,s)}return s}function Ch(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Th(t,e,r,n){e.value=r,e.getSnapshot=n,Rh(e)&&Ph(t)}function Nh(t,e,r){return r(function(){Rh(e)&&Ph(t)})}function Rh(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!rt(t,r)}catch{return!0}}function Ph(t){var e=bt(t,1);e!==null&&tt(e,t,1,-1)}function Hu(t){var e=st();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:t},e.queue=t,t=t.dispatch=ig.bind(null,V,t),[e.memoizedState,t]}function es(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function Ah(){return qe().memoizedState}function ti(t,e,r,n){var s=st();V.flags|=t,s.memoizedState=es(1|e,r,void 0,n===void 0?null:n)}function Gi(t,e,r,n){var s=qe();n=n===void 0?null:n;var i=void 0;if(ne!==null){var a=ne.memoizedState;if(i=a.destroy,n!==null&&Ul(n,a.deps)){s.memoizedState=es(e,r,i,n);return}}V.flags|=t,s.memoizedState=es(1|e,r,i,n)}function Vu(t,e){return ti(8390656,8,t,e)}function Bl(t,e){return Gi(2048,8,t,e)}function Oh(t,e){return Gi(4,2,t,e)}function Ih(t,e){return Gi(4,4,t,e)}function Lh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $h(t,e,r){return r=r!=null?r.concat([t]):null,Gi(4,4,Lh.bind(null,e,t),r)}function Fl(){}function Uh(t,e){var r=qe();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&Ul(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function Dh(t,e){var r=qe();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&Ul(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function zh(t,e,r){return fr&21?(rt(r,e)||(r=qd(),V.lanes|=r,pr|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Se=!0),t.memoizedState=r)}function ng(t,e){var r=z;z=r!==0&&4>r?r:4,t(!0);var n=Aa.transition;Aa.transition={};try{t(!1),e()}finally{z=r,Aa.transition=n}}function Bh(){return qe().memoizedState}function sg(t,e,r){var n=Wt(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Fh(t))Mh(e,r);else if(r=bh(t,e,r,n),r!==null){var s=we();tt(r,t,n,s),Wh(r,e,n)}}function ig(t,e,r){var n=Wt(t),s={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Fh(t))Mh(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var a=e.lastRenderedState,o=i(a,r);if(s.hasEagerState=!0,s.eagerState=o,rt(o,a)){var l=e.interleaved;l===null?(s.next=s,Al(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}r=bh(t,e,s,n),r!==null&&(s=we(),tt(r,t,n,s),Wh(r,e,n))}}function Fh(t){var e=t.alternate;return t===V||e!==null&&e===V}function Mh(t,e){On=Si=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function Wh(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,yl(t,r)}}var Ei={readContext:We,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},ag={readContext:We,useCallback:function(t,e){return st().memoizedState=[t,e===void 0?null:e],t},useContext:We,useEffect:Vu,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,ti(4194308,4,Lh.bind(null,e,t),r)},useLayoutEffect:function(t,e){return ti(4194308,4,t,e)},useInsertionEffect:function(t,e){return ti(4,2,t,e)},useMemo:function(t,e){var r=st();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=st();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=sg.bind(null,V,t),[n.memoizedState,t]},useRef:function(t){var e=st();return t={current:t},e.memoizedState=t},useState:Hu,useDebugValue:Fl,useDeferredValue:function(t){return st().memoizedState=t},useTransition:function(){var t=Hu(!1),e=t[0];return t=ng.bind(null,t[1]),st().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=V,s=st();if(q){if(r===void 0)throw Error(j(407));r=r()}else{if(r=e(),le===null)throw Error(j(349));fr&30||Ch(n,e,r)}s.memoizedState=r;var i={value:r,getSnapshot:e};return s.queue=i,Vu(Nh.bind(null,n,i,t),[t]),n.flags|=2048,es(9,Th.bind(null,n,i,r,e),void 0,null),r},useId:function(){var t=st(),e=le.identifierPrefix;if(q){var r=yt,n=vt;r=(n&~(1<<32-et(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=Yn++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=rg++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},og={readContext:We,useCallback:Uh,useContext:We,useEffect:Bl,useImperativeHandle:$h,useInsertionEffect:Oh,useLayoutEffect:Ih,useMemo:Dh,useReducer:Oa,useRef:Ah,useState:function(){return Oa(Zn)},useDebugValue:Fl,useDeferredValue:function(t){var e=qe();return zh(e,ne.memoizedState,t)},useTransition:function(){var t=Oa(Zn)[0],e=qe().memoizedState;return[t,e]},useMutableSource:Eh,useSyncExternalStore:jh,useId:Bh,unstable_isNewReconciler:!1},lg={readContext:We,useCallback:Uh,useContext:We,useEffect:Bl,useImperativeHandle:$h,useInsertionEffect:Oh,useLayoutEffect:Ih,useMemo:Dh,useReducer:Ia,useRef:Ah,useState:function(){return Ia(Zn)},useDebugValue:Fl,useDeferredValue:function(t){var e=qe();return ne===null?e.memoizedState=t:zh(e,ne.memoizedState,t)},useTransition:function(){var t=Ia(Zn)[0],e=qe().memoizedState;return[t,e]},useMutableSource:Eh,useSyncExternalStore:jh,useId:Bh,unstable_isNewReconciler:!1};function Ge(t,e){if(t&&t.defaultProps){e=G({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Co(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:G({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Ji={isMounted:function(t){return(t=t._reactInternals)?vr(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=we(),s=Wt(t),i=wt(n,s);i.payload=e,r!=null&&(i.callback=r),e=Ft(t,i,s),e!==null&&(tt(e,t,s,n),Zs(e,t,s))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=we(),s=Wt(t),i=wt(n,s);i.tag=1,i.payload=e,r!=null&&(i.callback=r),e=Ft(t,i,s),e!==null&&(tt(e,t,s,n),Zs(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=we(),n=Wt(t),s=wt(r,n);s.tag=2,e!=null&&(s.callback=e),e=Ft(t,s,n),e!==null&&(tt(e,t,n,r),Zs(e,t,n))}};function Ku(t,e,r,n,s,i,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,i,a):e.prototype&&e.prototype.isPureReactComponent?!Vn(r,n)||!Vn(s,i):!0}function qh(t,e,r){var n=!1,s=Kt,i=e.contextType;return typeof i=="object"&&i!==null?i=We(i):(s=je(e)?dr:ge.current,n=e.contextTypes,i=(n=n!=null)?Gr(t,s):Kt),e=new e(r,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ji,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Gu(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&Ji.enqueueReplaceState(e,e.state,null)}function To(t,e,r,n){var s=t.stateNode;s.props=r,s.state=t.memoizedState,s.refs={},Ol(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=We(i):(i=je(e)?dr:ge.current,s.context=Gr(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Co(t,e,i,r),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ji.enqueueReplaceState(s,s.state,null),bi(t,r,s,n),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Yr(t,e){try{var r="",n=e;do r+=$p(n),n=n.return;while(n);var s=r}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function La(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function No(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var ug=typeof WeakMap=="function"?WeakMap:Map;function Hh(t,e,r){r=wt(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){Ci||(Ci=!0,zo=n),No(t,e)},r}function Vh(t,e,r){r=wt(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var s=e.value;r.payload=function(){return n(s)},r.callback=function(){No(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){No(t,e),typeof n!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),r}function Ju(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new ug;var s=new Set;n.set(e,s)}else s=n.get(e),s===void 0&&(s=new Set,n.set(e,s));s.has(r)||(s.add(r),t=kg.bind(null,t,e,r),e.then(t,t))}function Qu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xu(t,e,r,n,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=wt(-1,1),e.tag=2,Ft(r,e,1))),r.lanes|=1),t)}var cg=St.ReactCurrentOwner,Se=!1;function ye(t,e,r,n){e.child=t===null?_h(e,null,r,n):Qr(e,t.child,r,n)}function Yu(t,e,r,n,s){r=r.render;var i=e.ref;return Wr(e,s),n=Dl(t,e,r,n,i,s),r=zl(),t!==null&&!Se?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,kt(t,e,s)):(q&&r&&jl(e),e.flags|=1,ye(t,e,n,s),e.child)}function Zu(t,e,r,n,s){if(t===null){var i=r.type;return typeof i=="function"&&!Jl(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=i,Kh(t,e,i,n,s)):(t=ii(r.type,null,n,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var a=i.memoizedProps;if(r=r.compare,r=r!==null?r:Vn,r(a,n)&&t.ref===e.ref)return kt(t,e,s)}return e.flags|=1,t=qt(i,n),t.ref=e.ref,t.return=e,e.child=t}function Kh(t,e,r,n,s){if(t!==null){var i=t.memoizedProps;if(Vn(i,n)&&t.ref===e.ref)if(Se=!1,e.pendingProps=n=i,(t.lanes&s)!==0)t.flags&131072&&(Se=!0);else return e.lanes=t.lanes,kt(t,e,s)}return Ro(t,e,r,n,s)}function Gh(t,e,r){var n=e.pendingProps,s=n.children,i=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Ur,Re),Re|=r;else{if(!(r&1073741824))return t=i!==null?i.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,F(Ur,Re),Re|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,F(Ur,Re),Re|=n}else i!==null?(n=i.baseLanes|r,e.memoizedState=null):n=r,F(Ur,Re),Re|=n;return ye(t,e,s,r),e.child}function Jh(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Ro(t,e,r,n,s){var i=je(r)?dr:ge.current;return i=Gr(e,i),Wr(e,s),r=Dl(t,e,r,n,i,s),n=zl(),t!==null&&!Se?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,kt(t,e,s)):(q&&n&&jl(e),e.flags|=1,ye(t,e,r,s),e.child)}function ec(t,e,r,n,s){if(je(r)){var i=!0;vi(e)}else i=!1;if(Wr(e,s),e.stateNode===null)ri(t,e),qh(e,r,n),To(e,r,n,s),n=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=r.contextType;typeof c=="object"&&c!==null?c=We(c):(c=je(r)?dr:ge.current,c=Gr(e,c));var h=r.getDerivedStateFromProps,d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==n||l!==c)&&Gu(e,a,n,c),Nt=!1;var f=e.memoizedState;a.state=f,bi(e,n,a,s),l=e.memoizedState,o!==n||f!==l||Ee.current||Nt?(typeof h=="function"&&(Co(e,r,h,n),l=e.memoizedState),(o=Nt||Ku(e,r,o,n,f,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=l),a.props=n,a.state=l,a.context=c,n=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{a=e.stateNode,kh(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Ge(e.type,o),a.props=c,d=e.pendingProps,f=a.context,l=r.contextType,typeof l=="object"&&l!==null?l=We(l):(l=je(r)?dr:ge.current,l=Gr(e,l));var g=r.getDerivedStateFromProps;(h=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||f!==l)&&Gu(e,a,n,l),Nt=!1,f=e.memoizedState,a.state=f,bi(e,n,a,s);var y=e.memoizedState;o!==d||f!==y||Ee.current||Nt?(typeof g=="function"&&(Co(e,r,g,n),y=e.memoizedState),(c=Nt||Ku(e,r,c,n,f,y,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,y,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=y),a.props=n,a.state=y,a.context=l,n=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),n=!1)}return Po(t,e,r,n,i,s)}function Po(t,e,r,n,s,i){Jh(t,e);var a=(e.flags&128)!==0;if(!n&&!a)return s&&zu(e,r,!1),kt(t,e,i);n=e.stateNode,cg.current=e;var o=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&a?(e.child=Qr(e,t.child,null,i),e.child=Qr(e,null,o,i)):ye(t,e,o,i),e.memoizedState=n.state,s&&zu(e,r,!0),e.child}function Qh(t){var e=t.stateNode;e.pendingContext?Du(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Du(t,e.context,!1),Il(t,e.containerInfo)}function tc(t,e,r,n,s){return Jr(),Tl(s),e.flags|=256,ye(t,e,r,n),e.child}var Ao={dehydrated:null,treeContext:null,retryLane:0};function Oo(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xh(t,e,r){var n=e.pendingProps,s=H.current,i=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(s&2)!==0),o?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),F(H,s&1),t===null)return Eo(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=n.children,t=n.fallback,i?(n=e.mode,i=e.child,a={mode:"hidden",children:a},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Yi(a,n,0,null),t=cr(t,n,r,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Oo(r),e.memoizedState=Ao,t):Ml(e,a));if(s=t.memoizedState,s!==null&&(o=s.dehydrated,o!==null))return dg(t,e,a,n,o,s,r);if(i){i=n.fallback,a=e.mode,s=t.child,o=s.sibling;var l={mode:"hidden",children:n.children};return!(a&1)&&e.child!==s?(n=e.child,n.childLanes=0,n.pendingProps=l,e.deletions=null):(n=qt(s,l),n.subtreeFlags=s.subtreeFlags&14680064),o!==null?i=qt(o,i):(i=cr(i,a,r,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,n=i,i=e.child,a=t.child.memoizedState,a=a===null?Oo(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=t.childLanes&~r,e.memoizedState=Ao,n}return i=t.child,t=i.sibling,n=qt(i,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function Ml(t,e){return e=Yi({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ls(t,e,r,n){return n!==null&&Tl(n),Qr(e,t.child,null,r),t=Ml(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dg(t,e,r,n,s,i,a){if(r)return e.flags&256?(e.flags&=-257,n=La(Error(j(422))),Ls(t,e,a,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=n.fallback,s=e.mode,n=Yi({mode:"visible",children:n.children},s,0,null),i=cr(i,s,a,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,e.mode&1&&Qr(e,t.child,null,a),e.child.memoizedState=Oo(a),e.memoizedState=Ao,i);if(!(e.mode&1))return Ls(t,e,a,null);if(s.data==="$!"){if(n=s.nextSibling&&s.nextSibling.dataset,n)var o=n.dgst;return n=o,i=Error(j(419)),n=La(i,n,void 0),Ls(t,e,a,n)}if(o=(a&t.childLanes)!==0,Se||o){if(n=le,n!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(n.suspendedLanes|a)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,bt(t,s),tt(n,t,s,-1))}return Gl(),n=La(Error(j(421))),Ls(t,e,a,n)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Sg.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ae=Bt(s.nextSibling),Oe=e,q=!0,Xe=null,t!==null&&(ze[Be++]=vt,ze[Be++]=yt,ze[Be++]=hr,vt=t.id,yt=t.overflow,hr=e),e=Ml(e,n.children),e.flags|=4096,e)}function rc(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),jo(t.return,e,r)}function $a(t,e,r,n,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=s)}function Yh(t,e,r){var n=e.pendingProps,s=n.revealOrder,i=n.tail;if(ye(t,e,n.children,r),n=H.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rc(t,r,e);else if(t.tag===19)rc(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(F(H,n),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(r=e.child,s=null;r!==null;)t=r.alternate,t!==null&&ki(t)===null&&(s=r),r=r.sibling;r=s,r===null?(s=e.child,e.child=null):(s=r.sibling,r.sibling=null),$a(e,!1,s,r,i);break;case"backwards":for(r=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ki(t)===null){e.child=s;break}t=s.sibling,s.sibling=r,r=s,s=t}$a(e,!0,r,null,i);break;case"together":$a(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ri(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kt(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),pr|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,r=qt(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=qt(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function hg(t,e,r){switch(e.tag){case 3:Qh(e),Jr();break;case 5:Sh(e);break;case 1:je(e.type)&&vi(e);break;case 4:Il(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,s=e.memoizedProps.value;F(xi,n._currentValue),n._currentValue=s;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(F(H,H.current&1),e.flags|=128,null):r&e.child.childLanes?Xh(t,e,r):(F(H,H.current&1),t=kt(t,e,r),t!==null?t.sibling:null);F(H,H.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return Yh(t,e,r);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),F(H,H.current),n)break;return null;case 22:case 23:return e.lanes=0,Gh(t,e,r)}return kt(t,e,r)}var Zh,Io,ef,tf;Zh=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Io=function(){};ef=function(t,e,r,n){var s=t.memoizedProps;if(s!==n){t=e.stateNode,or(ut.current);var i=null;switch(r){case"input":s=to(t,s),n=to(t,n),i=[];break;case"select":s=G({},s,{value:void 0}),n=G({},n,{value:void 0}),i=[];break;case"textarea":s=so(t,s),n=so(t,n),i=[];break;default:typeof s.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=mi)}ao(r,n);var a;r=null;for(c in s)if(!n.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var o=s[c];for(a in o)o.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in n){var l=n[c];if(o=s!=null?s[c]:void 0,n.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(r||(r={}),r[a]=l[a])}else r||(i||(i=[]),i.push(c,r)),r=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zn.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&M("scroll",t),i||o===l||(i=[])):(i=i||[]).push(c,l))}r&&(i=i||[]).push("style",r);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};tf=function(t,e,r,n){r!==n&&(e.flags|=4)};function yn(t,e){if(!q)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function fe(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var s=t.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags&14680064,n|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function fg(t,e,r){var n=e.pendingProps;switch(Cl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(e),null;case 1:return je(e.type)&&gi(),fe(e),null;case 3:return n=e.stateNode,Xr(),W(Ee),W(ge),$l(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Os(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xe!==null&&(Mo(Xe),Xe=null))),Io(t,e),fe(e),null;case 5:Ll(e);var s=or(Xn.current);if(r=e.type,t!==null&&e.stateNode!=null)ef(t,e,r,n,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(j(166));return fe(e),null}if(t=or(ut.current),Os(e)){n=e.stateNode,r=e.type;var i=e.memoizedProps;switch(n[ot]=e,n[Jn]=i,t=(e.mode&1)!==0,r){case"dialog":M("cancel",n),M("close",n);break;case"iframe":case"object":case"embed":M("load",n);break;case"video":case"audio":for(s=0;s<Sn.length;s++)M(Sn[s],n);break;case"source":M("error",n);break;case"img":case"image":case"link":M("error",n),M("load",n);break;case"details":M("toggle",n);break;case"input":du(n,i),M("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},M("invalid",n);break;case"textarea":fu(n,i),M("invalid",n)}ao(r,i),s=null;for(var a in i)if(i.hasOwnProperty(a)){var o=i[a];a==="children"?typeof o=="string"?n.textContent!==o&&(i.suppressHydrationWarning!==!0&&As(n.textContent,o,t),s=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&As(n.textContent,o,t),s=["children",""+o]):zn.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&M("scroll",n)}switch(r){case"input":Ss(n),hu(n,i,!0);break;case"textarea":Ss(n),pu(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=mi)}n=s,e.updateQueue=n,n!==null&&(e.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Nd(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=a.createElement(r,{is:n.is}):(t=a.createElement(r),r==="select"&&(a=t,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):t=a.createElementNS(t,r),t[ot]=e,t[Jn]=n,Zh(t,e,!1,!1),e.stateNode=t;e:{switch(a=oo(r,n),r){case"dialog":M("cancel",t),M("close",t),s=n;break;case"iframe":case"object":case"embed":M("load",t),s=n;break;case"video":case"audio":for(s=0;s<Sn.length;s++)M(Sn[s],t);s=n;break;case"source":M("error",t),s=n;break;case"img":case"image":case"link":M("error",t),M("load",t),s=n;break;case"details":M("toggle",t),s=n;break;case"input":du(t,n),s=to(t,n),M("invalid",t);break;case"option":s=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},s=G({},n,{value:void 0}),M("invalid",t);break;case"textarea":fu(t,n),s=so(t,n),M("invalid",t);break;default:s=n}ao(r,s),o=s;for(i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="style"?Ad(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rd(t,l)):i==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Bn(t,l):typeof l=="number"&&Bn(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zn.hasOwnProperty(i)?l!=null&&i==="onScroll"&&M("scroll",t):l!=null&&hl(t,i,l,a))}switch(r){case"input":Ss(t),hu(t,n,!1);break;case"textarea":Ss(t),pu(t);break;case"option":n.value!=null&&t.setAttribute("value",""+Vt(n.value));break;case"select":t.multiple=!!n.multiple,i=n.value,i!=null?zr(t,!!n.multiple,i,!1):n.defaultValue!=null&&zr(t,!!n.multiple,n.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=mi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return fe(e),null;case 6:if(t&&e.stateNode!=null)tf(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(j(166));if(r=or(Xn.current),or(ut.current),Os(e)){if(n=e.stateNode,r=e.memoizedProps,n[ot]=e,(i=n.nodeValue!==r)&&(t=Oe,t!==null))switch(t.tag){case 3:As(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&As(n.nodeValue,r,(t.mode&1)!==0)}i&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[ot]=e,e.stateNode=n}return fe(e),null;case 13:if(W(H),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(q&&Ae!==null&&e.mode&1&&!(e.flags&128))wh(),Jr(),e.flags|=98560,i=!1;else if(i=Os(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(j(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[ot]=e}else Jr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;fe(e),i=!1}else Xe!==null&&(Mo(Xe),Xe=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||H.current&1?se===0&&(se=3):Gl())),e.updateQueue!==null&&(e.flags|=4),fe(e),null);case 4:return Xr(),Io(t,e),t===null&&Kn(e.stateNode.containerInfo),fe(e),null;case 10:return Pl(e.type._context),fe(e),null;case 17:return je(e.type)&&gi(),fe(e),null;case 19:if(W(H),i=e.memoizedState,i===null)return fe(e),null;if(n=(e.flags&128)!==0,a=i.rendering,a===null)if(n)yn(i,!1);else{if(se!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=ki(t),a!==null){for(e.flags|=128,yn(i,!1),n=a.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)i=r,t=n,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,t=a.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return F(H,H.current&1|2),e.child}t=t.sibling}i.tail!==null&&Z()>Zr&&(e.flags|=128,n=!0,yn(i,!1),e.lanes=4194304)}else{if(!n)if(t=ki(a),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),yn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!q)return fe(e),null}else 2*Z()-i.renderingStartTime>Zr&&r!==1073741824&&(e.flags|=128,n=!0,yn(i,!1),e.lanes=4194304);i.isBackwards?(a.sibling=e.child,e.child=a):(r=i.last,r!==null?r.sibling=a:e.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Z(),e.sibling=null,r=H.current,F(H,n?r&1|2:r&1),e):(fe(e),null);case 22:case 23:return Kl(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?Re&1073741824&&(fe(e),e.subtreeFlags&6&&(e.flags|=8192)):fe(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function pg(t,e){switch(Cl(e),e.tag){case 1:return je(e.type)&&gi(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xr(),W(Ee),W(ge),$l(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ll(e),null;case 13:if(W(H),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Jr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return W(H),null;case 4:return Xr(),null;case 10:return Pl(e.type._context),null;case 22:case 23:return Kl(),null;case 24:return null;default:return null}}var $s=!1,me=!1,mg=typeof WeakSet=="function"?WeakSet:Set,N=null;function $r(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Q(t,e,n)}else r.current=null}function Lo(t,e,r){try{r()}catch(n){Q(t,e,n)}}var nc=!1;function gg(t,e){if(yo=hi,t=ah(),El(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var s=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var a=0,o=-1,l=-1,c=0,h=0,d=t,f=null;t:for(;;){for(var g;d!==r||s!==0&&d.nodeType!==3||(o=a+s),d!==i||n!==0&&d.nodeType!==3||(l=a+n),d.nodeType===3&&(a+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===r&&++c===s&&(o=a),f===i&&++h===n&&(l=a),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}r=o===-1||l===-1?null:{start:o,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(wo={focusedElem:t,selectionRange:r},hi=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,x=y.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:Ge(e.type,w),x);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(_){Q(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return y=nc,nc=!1,y}function In(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Lo(e,r,i)}s=s.next}while(s!==n)}}function Qi(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function $o(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function rf(t){var e=t.alternate;e!==null&&(t.alternate=null,rf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ot],delete e[Jn],delete e[bo],delete e[Ym],delete e[Zm])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function nf(t){return t.tag===5||t.tag===3||t.tag===4}function sc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||nf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uo(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=mi));else if(n!==4&&(t=t.child,t!==null))for(Uo(t,e,r),t=t.sibling;t!==null;)Uo(t,e,r),t=t.sibling}function Do(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(Do(t,e,r),t=t.sibling;t!==null;)Do(t,e,r),t=t.sibling}var ue=null,Qe=!1;function Ct(t,e,r){for(r=r.child;r!==null;)sf(t,e,r),r=r.sibling}function sf(t,e,r){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Mi,r)}catch{}switch(r.tag){case 5:me||$r(r,e);case 6:var n=ue,s=Qe;ue=null,Ct(t,e,r),ue=n,Qe=s,ue!==null&&(Qe?(t=ue,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):ue.removeChild(r.stateNode));break;case 18:ue!==null&&(Qe?(t=ue,r=r.stateNode,t.nodeType===8?Na(t.parentNode,r):t.nodeType===1&&Na(t,r),qn(t)):Na(ue,r.stateNode));break;case 4:n=ue,s=Qe,ue=r.stateNode.containerInfo,Qe=!0,Ct(t,e,r),ue=n,Qe=s;break;case 0:case 11:case 14:case 15:if(!me&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){s=n=n.next;do{var i=s,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Lo(r,e,a),s=s.next}while(s!==n)}Ct(t,e,r);break;case 1:if(!me&&($r(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(o){Q(r,e,o)}Ct(t,e,r);break;case 21:Ct(t,e,r);break;case 22:r.mode&1?(me=(n=me)||r.memoizedState!==null,Ct(t,e,r),me=n):Ct(t,e,r);break;default:Ct(t,e,r)}}function ic(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new mg),e.forEach(function(n){var s=Eg.bind(null,t,n);r.has(n)||(r.add(n),n.then(s,s))})}}function He(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var s=r[n];try{var i=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:ue=o.stateNode,Qe=!1;break e;case 3:ue=o.stateNode.containerInfo,Qe=!0;break e;case 4:ue=o.stateNode.containerInfo,Qe=!0;break e}o=o.return}if(ue===null)throw Error(j(160));sf(i,a,s),ue=null,Qe=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(c){Q(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)af(e,t),e=e.sibling}function af(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(He(e,t),nt(t),n&4){try{In(3,t,t.return),Qi(3,t)}catch(w){Q(t,t.return,w)}try{In(5,t,t.return)}catch(w){Q(t,t.return,w)}}break;case 1:He(e,t),nt(t),n&512&&r!==null&&$r(r,r.return);break;case 5:if(He(e,t),nt(t),n&512&&r!==null&&$r(r,r.return),t.flags&32){var s=t.stateNode;try{Bn(s,"")}catch(w){Q(t,t.return,w)}}if(n&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,a=r!==null?r.memoizedProps:i,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&Cd(s,i),oo(o,a);var c=oo(o,i);for(a=0;a<l.length;a+=2){var h=l[a],d=l[a+1];h==="style"?Ad(s,d):h==="dangerouslySetInnerHTML"?Rd(s,d):h==="children"?Bn(s,d):hl(s,h,d,c)}switch(o){case"input":ro(s,i);break;case"textarea":Td(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?zr(s,!!i.multiple,g,!1):f!==!!i.multiple&&(i.defaultValue!=null?zr(s,!!i.multiple,i.defaultValue,!0):zr(s,!!i.multiple,i.multiple?[]:"",!1))}s[Jn]=i}catch(w){Q(t,t.return,w)}}break;case 6:if(He(e,t),nt(t),n&4){if(t.stateNode===null)throw Error(j(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(w){Q(t,t.return,w)}}break;case 3:if(He(e,t),nt(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{qn(e.containerInfo)}catch(w){Q(t,t.return,w)}break;case 4:He(e,t),nt(t);break;case 13:He(e,t),nt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Hl=Z())),n&4&&ic(t);break;case 22:if(h=r!==null&&r.memoizedState!==null,t.mode&1?(me=(c=me)||h,He(e,t),me=c):He(e,t),nt(t),n&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(N=t,h=t.child;h!==null;){for(d=N=h;N!==null;){switch(f=N,g=f.child,f.tag){case 0:case 11:case 14:case 15:In(4,f,f.return);break;case 1:$r(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){n=f,r=f.return;try{e=n,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){Q(n,r,w)}}break;case 5:$r(f,f.return);break;case 22:if(f.memoizedState!==null){oc(d);continue}}g!==null?(g.return=f,N=g):oc(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{s=d.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Pd("display",a))}catch(w){Q(t,t.return,w)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){Q(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:He(e,t),nt(t),n&4&&ic(t);break;case 21:break;default:He(e,t),nt(t)}}function nt(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(nf(r)){var n=r;break e}r=r.return}throw Error(j(160))}switch(n.tag){case 5:var s=n.stateNode;n.flags&32&&(Bn(s,""),n.flags&=-33);var i=sc(t);Do(t,i,s);break;case 3:case 4:var a=n.stateNode.containerInfo,o=sc(t);Uo(t,o,a);break;default:throw Error(j(161))}}catch(l){Q(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vg(t,e,r){N=t,of(t)}function of(t,e,r){for(var n=(t.mode&1)!==0;N!==null;){var s=N,i=s.child;if(s.tag===22&&n){var a=s.memoizedState!==null||$s;if(!a){var o=s.alternate,l=o!==null&&o.memoizedState!==null||me;o=$s;var c=me;if($s=a,(me=l)&&!c)for(N=s;N!==null;)a=N,l=a.child,a.tag===22&&a.memoizedState!==null?lc(s):l!==null?(l.return=a,N=l):lc(s);for(;i!==null;)N=i,of(i),i=i.sibling;N=s,$s=o,me=c}ac(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,N=i):ac(t)}}function ac(t){for(;N!==null;){var e=N;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:me||Qi(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!me)if(r===null)n.componentDidMount();else{var s=e.elementType===e.type?r.memoizedProps:Ge(e.type,r.memoizedProps);n.componentDidUpdate(s,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&qu(e,i,n);break;case 3:var a=e.updateQueue;if(a!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}qu(e,a,r)}break;case 5:var o=e.stateNode;if(r===null&&e.flags&4){r=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&qn(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}me||e.flags&512&&$o(e)}catch(f){Q(e,e.return,f)}}if(e===t){N=null;break}if(r=e.sibling,r!==null){r.return=e.return,N=r;break}N=e.return}}function oc(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var r=e.sibling;if(r!==null){r.return=e.return,N=r;break}N=e.return}}function lc(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Qi(4,e)}catch(l){Q(e,r,l)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var s=e.return;try{n.componentDidMount()}catch(l){Q(e,s,l)}}var i=e.return;try{$o(e)}catch(l){Q(e,i,l)}break;case 5:var a=e.return;try{$o(e)}catch(l){Q(e,a,l)}}}catch(l){Q(e,e.return,l)}if(e===t){N=null;break}var o=e.sibling;if(o!==null){o.return=e.return,N=o;break}N=e.return}}var yg=Math.ceil,ji=St.ReactCurrentDispatcher,Wl=St.ReactCurrentOwner,Me=St.ReactCurrentBatchConfig,D=0,le=null,re=null,ce=0,Re=0,Ur=Jt(0),se=0,ts=null,pr=0,Xi=0,ql=0,Ln=null,ke=null,Hl=0,Zr=1/0,ht=null,Ci=!1,zo=null,Mt=null,Us=!1,Lt=null,Ti=0,$n=0,Bo=null,ni=-1,si=0;function we(){return D&6?Z():ni!==-1?ni:ni=Z()}function Wt(t){return t.mode&1?D&2&&ce!==0?ce&-ce:tg.transition!==null?(si===0&&(si=qd()),si):(t=z,t!==0||(t=window.event,t=t===void 0?16:Xd(t.type)),t):1}function tt(t,e,r,n){if(50<$n)throw $n=0,Bo=null,Error(j(185));fs(t,r,n),(!(D&2)||t!==le)&&(t===le&&(!(D&2)&&(Xi|=r),se===4&&Pt(t,ce)),Ce(t,n),r===1&&D===0&&!(e.mode&1)&&(Zr=Z()+500,Ki&&Qt()))}function Ce(t,e){var r=t.callbackNode;tm(t,e);var n=di(t,t===le?ce:0);if(n===0)r!==null&&vu(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&vu(r),e===1)t.tag===0?eg(uc.bind(null,t)):gh(uc.bind(null,t)),Qm(function(){!(D&6)&&Qt()}),r=null;else{switch(Hd(n)){case 1:r=vl;break;case 4:r=Md;break;case 16:r=ci;break;case 536870912:r=Wd;break;default:r=ci}r=mf(r,lf.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function lf(t,e){if(ni=-1,si=0,D&6)throw Error(j(327));var r=t.callbackNode;if(qr()&&t.callbackNode!==r)return null;var n=di(t,t===le?ce:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Ni(t,n);else{e=n;var s=D;D|=2;var i=cf();(le!==t||ce!==e)&&(ht=null,Zr=Z()+500,ur(t,e));do try{_g();break}catch(o){uf(t,o)}while(!0);Rl(),ji.current=i,D=s,re!==null?e=0:(le=null,ce=0,e=se)}if(e!==0){if(e===2&&(s=fo(t),s!==0&&(n=s,e=Fo(t,s))),e===1)throw r=ts,ur(t,0),Pt(t,n),Ce(t,Z()),r;if(e===6)Pt(t,n);else{if(s=t.current.alternate,!(n&30)&&!wg(s)&&(e=Ni(t,n),e===2&&(i=fo(t),i!==0&&(n=i,e=Fo(t,i))),e===1))throw r=ts,ur(t,0),Pt(t,n),Ce(t,Z()),r;switch(t.finishedWork=s,t.finishedLanes=n,e){case 0:case 1:throw Error(j(345));case 2:rr(t,ke,ht);break;case 3:if(Pt(t,n),(n&130023424)===n&&(e=Hl+500-Z(),10<e)){if(di(t,0)!==0)break;if(s=t.suspendedLanes,(s&n)!==n){we(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=_o(rr.bind(null,t,ke,ht),e);break}rr(t,ke,ht);break;case 4:if(Pt(t,n),(n&4194240)===n)break;for(e=t.eventTimes,s=-1;0<n;){var a=31-et(n);i=1<<a,a=e[a],a>s&&(s=a),n&=~i}if(n=s,n=Z()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*yg(n/1960))-n,10<n){t.timeoutHandle=_o(rr.bind(null,t,ke,ht),n);break}rr(t,ke,ht);break;case 5:rr(t,ke,ht);break;default:throw Error(j(329))}}}return Ce(t,Z()),t.callbackNode===r?lf.bind(null,t):null}function Fo(t,e){var r=Ln;return t.current.memoizedState.isDehydrated&&(ur(t,e).flags|=256),t=Ni(t,e),t!==2&&(e=ke,ke=r,e!==null&&Mo(e)),t}function Mo(t){ke===null?ke=t:ke.push.apply(ke,t)}function wg(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var s=r[n],i=s.getSnapshot;s=s.value;try{if(!rt(i(),s))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pt(t,e){for(e&=~ql,e&=~Xi,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-et(e),n=1<<r;t[r]=-1,e&=~n}}function uc(t){if(D&6)throw Error(j(327));qr();var e=di(t,0);if(!(e&1))return Ce(t,Z()),null;var r=Ni(t,e);if(t.tag!==0&&r===2){var n=fo(t);n!==0&&(e=n,r=Fo(t,n))}if(r===1)throw r=ts,ur(t,0),Pt(t,e),Ce(t,Z()),r;if(r===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,rr(t,ke,ht),Ce(t,Z()),null}function Vl(t,e){var r=D;D|=1;try{return t(e)}finally{D=r,D===0&&(Zr=Z()+500,Ki&&Qt())}}function mr(t){Lt!==null&&Lt.tag===0&&!(D&6)&&qr();var e=D;D|=1;var r=Me.transition,n=z;try{if(Me.transition=null,z=1,t)return t()}finally{z=n,Me.transition=r,D=e,!(D&6)&&Qt()}}function Kl(){Re=Ur.current,W(Ur)}function ur(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Jm(r)),re!==null)for(r=re.return;r!==null;){var n=r;switch(Cl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&gi();break;case 3:Xr(),W(Ee),W(ge),$l();break;case 5:Ll(n);break;case 4:Xr();break;case 13:W(H);break;case 19:W(H);break;case 10:Pl(n.type._context);break;case 22:case 23:Kl()}r=r.return}if(le=t,re=t=qt(t.current,null),ce=Re=e,se=0,ts=null,ql=Xi=pr=0,ke=Ln=null,ar!==null){for(e=0;e<ar.length;e++)if(r=ar[e],n=r.interleaved,n!==null){r.interleaved=null;var s=n.next,i=r.pending;if(i!==null){var a=i.next;i.next=s,n.next=a}r.pending=n}ar=null}return t}function uf(t,e){do{var r=re;try{if(Rl(),ei.current=Ei,Si){for(var n=V.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}Si=!1}if(fr=0,oe=ne=V=null,On=!1,Yn=0,Wl.current=null,r===null||r.return===null){se=1,ts=e,re=null;break}e:{var i=t,a=r.return,o=r,l=e;if(e=ce,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Qu(a);if(g!==null){g.flags&=-257,Xu(g,a,o,i,e),g.mode&1&&Ju(i,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if(!(e&1)){Ju(i,c,e),Gl();break e}l=Error(j(426))}}else if(q&&o.mode&1){var x=Qu(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Xu(x,a,o,i,e),Tl(Yr(l,o));break e}}i=l=Yr(l,o),se!==4&&(se=2),Ln===null?Ln=[i]:Ln.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var m=Hh(i,l,e);Wu(i,m);break e;case 1:o=l;var p=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Mt===null||!Mt.has(v)))){i.flags|=65536,e&=-e,i.lanes|=e;var _=Vh(i,o,e);Wu(i,_);break e}}i=i.return}while(i!==null)}hf(r)}catch(k){e=k,re===r&&r!==null&&(re=r=r.return);continue}break}while(!0)}function cf(){var t=ji.current;return ji.current=Ei,t===null?Ei:t}function Gl(){(se===0||se===3||se===2)&&(se=4),le===null||!(pr&268435455)&&!(Xi&268435455)||Pt(le,ce)}function Ni(t,e){var r=D;D|=2;var n=cf();(le!==t||ce!==e)&&(ht=null,ur(t,e));do try{xg();break}catch(s){uf(t,s)}while(!0);if(Rl(),D=r,ji.current=n,re!==null)throw Error(j(261));return le=null,ce=0,se}function xg(){for(;re!==null;)df(re)}function _g(){for(;re!==null&&!Vp();)df(re)}function df(t){var e=pf(t.alternate,t,Re);t.memoizedProps=t.pendingProps,e===null?hf(t):re=e,Wl.current=null}function hf(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=pg(r,e),r!==null){r.flags&=32767,re=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{se=6,re=null;return}}else if(r=fg(r,e,Re),r!==null){re=r;return}if(e=e.sibling,e!==null){re=e;return}re=e=t}while(e!==null);se===0&&(se=5)}function rr(t,e,r){var n=z,s=Me.transition;try{Me.transition=null,z=1,bg(t,e,r,n)}finally{Me.transition=s,z=n}return null}function bg(t,e,r,n){do qr();while(Lt!==null);if(D&6)throw Error(j(327));r=t.finishedWork;var s=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var i=r.lanes|r.childLanes;if(rm(t,i),t===le&&(re=le=null,ce=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Us||(Us=!0,mf(ci,function(){return qr(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Me.transition,Me.transition=null;var a=z;z=1;var o=D;D|=4,Wl.current=null,gg(t,r),af(r,t),Mm(wo),hi=!!yo,wo=yo=null,t.current=r,vg(r),Kp(),D=o,z=a,Me.transition=i}else t.current=r;if(Us&&(Us=!1,Lt=t,Ti=s),i=t.pendingLanes,i===0&&(Mt=null),Qp(r.stateNode),Ce(t,Z()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)s=e[r],n(s.value,{componentStack:s.stack,digest:s.digest});if(Ci)throw Ci=!1,t=zo,zo=null,t;return Ti&1&&t.tag!==0&&qr(),i=t.pendingLanes,i&1?t===Bo?$n++:($n=0,Bo=t):$n=0,Qt(),null}function qr(){if(Lt!==null){var t=Hd(Ti),e=Me.transition,r=z;try{if(Me.transition=null,z=16>t?16:t,Lt===null)var n=!1;else{if(t=Lt,Lt=null,Ti=0,D&6)throw Error(j(331));var s=D;for(D|=4,N=t.current;N!==null;){var i=N,a=i.child;if(N.flags&16){var o=i.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(N=c;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:In(8,h,i)}var d=h.child;if(d!==null)d.return=h,N=d;else for(;N!==null;){h=N;var f=h.sibling,g=h.return;if(rf(h),h===c){N=null;break}if(f!==null){f.return=g,N=f;break}N=g}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}N=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,N=a;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:In(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,N=m;break e}N=i.return}}var p=t.current;for(N=p;N!==null;){a=N;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,N=v;else e:for(a=p;N!==null;){if(o=N,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Qi(9,o)}}catch(k){Q(o,o.return,k)}if(o===a){N=null;break e}var _=o.sibling;if(_!==null){_.return=o.return,N=_;break e}N=o.return}}if(D=s,Qt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Mi,t)}catch{}n=!0}return n}finally{z=r,Me.transition=e}}return!1}function cc(t,e,r){e=Yr(r,e),e=Hh(t,e,1),t=Ft(t,e,1),e=we(),t!==null&&(fs(t,1,e),Ce(t,e))}function Q(t,e,r){if(t.tag===3)cc(t,t,r);else for(;e!==null;){if(e.tag===3){cc(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Mt===null||!Mt.has(n))){t=Yr(r,t),t=Vh(e,t,1),e=Ft(e,t,1),t=we(),e!==null&&(fs(e,1,t),Ce(e,t));break}}e=e.return}}function kg(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=we(),t.pingedLanes|=t.suspendedLanes&r,le===t&&(ce&r)===r&&(se===4||se===3&&(ce&130023424)===ce&&500>Z()-Hl?ur(t,0):ql|=r),Ce(t,e)}function ff(t,e){e===0&&(t.mode&1?(e=Cs,Cs<<=1,!(Cs&130023424)&&(Cs=4194304)):e=1);var r=we();t=bt(t,e),t!==null&&(fs(t,e,r),Ce(t,r))}function Sg(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),ff(t,r)}function Eg(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,s=t.memoizedState;s!==null&&(r=s.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(j(314))}n!==null&&n.delete(e),ff(t,r)}var pf;pf=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ee.current)Se=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Se=!1,hg(t,e,r);Se=!!(t.flags&131072)}else Se=!1,q&&e.flags&1048576&&vh(e,wi,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;ri(t,e),t=e.pendingProps;var s=Gr(e,ge.current);Wr(e,r),s=Dl(null,e,n,t,s,r);var i=zl();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,je(n)?(i=!0,vi(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ol(e),s.updater=Ji,e.stateNode=s,s._reactInternals=e,To(e,n,t,r),e=Po(null,e,n,!0,i,r)):(e.tag=0,q&&i&&jl(e),ye(null,e,s,r),e=e.child),e;case 16:n=e.elementType;e:{switch(ri(t,e),t=e.pendingProps,s=n._init,n=s(n._payload),e.type=n,s=e.tag=Cg(n),t=Ge(n,t),s){case 0:e=Ro(null,e,n,t,r);break e;case 1:e=ec(null,e,n,t,r);break e;case 11:e=Yu(null,e,n,t,r);break e;case 14:e=Zu(null,e,n,Ge(n.type,t),r);break e}throw Error(j(306,n,""))}return e;case 0:return n=e.type,s=e.pendingProps,s=e.elementType===n?s:Ge(n,s),Ro(t,e,n,s,r);case 1:return n=e.type,s=e.pendingProps,s=e.elementType===n?s:Ge(n,s),ec(t,e,n,s,r);case 3:e:{if(Qh(e),t===null)throw Error(j(387));n=e.pendingProps,i=e.memoizedState,s=i.element,kh(t,e),bi(e,n,null,r);var a=e.memoizedState;if(n=a.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Yr(Error(j(423)),e),e=tc(t,e,n,r,s);break e}else if(n!==s){s=Yr(Error(j(424)),e),e=tc(t,e,n,r,s);break e}else for(Ae=Bt(e.stateNode.containerInfo.firstChild),Oe=e,q=!0,Xe=null,r=_h(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Jr(),n===s){e=kt(t,e,r);break e}ye(t,e,n,r)}e=e.child}return e;case 5:return Sh(e),t===null&&Eo(e),n=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,a=s.children,xo(n,s)?a=null:i!==null&&xo(n,i)&&(e.flags|=32),Jh(t,e),ye(t,e,a,r),e.child;case 6:return t===null&&Eo(e),null;case 13:return Xh(t,e,r);case 4:return Il(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Qr(e,null,n,r):ye(t,e,n,r),e.child;case 11:return n=e.type,s=e.pendingProps,s=e.elementType===n?s:Ge(n,s),Yu(t,e,n,s,r);case 7:return ye(t,e,e.pendingProps,r),e.child;case 8:return ye(t,e,e.pendingProps.children,r),e.child;case 12:return ye(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(n=e.type._context,s=e.pendingProps,i=e.memoizedProps,a=s.value,F(xi,n._currentValue),n._currentValue=a,i!==null)if(rt(i.value,a)){if(i.children===s.children&&!Ee.current){e=kt(t,e,r);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){a=i.child;for(var l=o.firstContext;l!==null;){if(l.context===n){if(i.tag===1){l=wt(-1,r&-r),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),jo(i.return,r,e),o.lanes|=r;break}l=l.next}}else if(i.tag===10)a=i.type===e.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(j(341));a.lanes|=r,o=a.alternate,o!==null&&(o.lanes|=r),jo(a,r,e),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===e){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ye(t,e,s.children,r),e=e.child}return e;case 9:return s=e.type,n=e.pendingProps.children,Wr(e,r),s=We(s),n=n(s),e.flags|=1,ye(t,e,n,r),e.child;case 14:return n=e.type,s=Ge(n,e.pendingProps),s=Ge(n.type,s),Zu(t,e,n,s,r);case 15:return Kh(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,s=e.pendingProps,s=e.elementType===n?s:Ge(n,s),ri(t,e),e.tag=1,je(n)?(t=!0,vi(e)):t=!1,Wr(e,r),qh(e,n,s),To(e,n,s,r),Po(null,e,n,!0,t,r);case 19:return Yh(t,e,r);case 22:return Gh(t,e,r)}throw Error(j(156,e.tag))};function mf(t,e){return Fd(t,e)}function jg(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(t,e,r,n){return new jg(t,e,r,n)}function Jl(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cg(t){if(typeof t=="function")return Jl(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pl)return 11;if(t===ml)return 14}return 2}function qt(t,e){var r=t.alternate;return r===null?(r=Fe(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function ii(t,e,r,n,s,i){var a=2;if(n=t,typeof t=="function")Jl(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Cr:return cr(r.children,s,i,e);case fl:a=8,s|=8;break;case Xa:return t=Fe(12,r,e,s|2),t.elementType=Xa,t.lanes=i,t;case Ya:return t=Fe(13,r,e,s),t.elementType=Ya,t.lanes=i,t;case Za:return t=Fe(19,r,e,s),t.elementType=Za,t.lanes=i,t;case Sd:return Yi(r,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bd:a=10;break e;case kd:a=9;break e;case pl:a=11;break e;case ml:a=14;break e;case Tt:a=16,n=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Fe(a,r,e,s),e.elementType=t,e.type=n,e.lanes=i,e}function cr(t,e,r,n){return t=Fe(7,t,n,e),t.lanes=r,t}function Yi(t,e,r,n){return t=Fe(22,t,n,e),t.elementType=Sd,t.lanes=r,t.stateNode={isHidden:!1},t}function Ua(t,e,r){return t=Fe(6,t,null,e),t.lanes=r,t}function Da(t,e,r){return e=Fe(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Tg(t,e,r,n,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ya(0),this.expirationTimes=ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ya(0),this.identifierPrefix=n,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ql(t,e,r,n,s,i,a,o,l){return t=new Tg(t,e,r,o,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Fe(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ol(i),t}function Ng(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jr,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function gf(t){if(!t)return Kt;t=t._reactInternals;e:{if(vr(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(je(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var r=t.type;if(je(r))return mh(t,r,e)}return e}function vf(t,e,r,n,s,i,a,o,l){return t=Ql(r,n,!0,t,s,i,a,o,l),t.context=gf(null),r=t.current,n=we(),s=Wt(r),i=wt(n,s),i.callback=e??null,Ft(r,i,s),t.current.lanes=s,fs(t,s,n),Ce(t,n),t}function Zi(t,e,r,n){var s=e.current,i=we(),a=Wt(s);return r=gf(r),e.context===null?e.context=r:e.pendingContext=r,e=wt(i,a),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=Ft(s,e,a),t!==null&&(tt(t,s,a,i),Zs(t,s,a)),a}function Ri(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Xl(t,e){dc(t,e),(t=t.alternate)&&dc(t,e)}function Rg(){return null}var yf=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yl(t){this._internalRoot=t}ea.prototype.render=Yl.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Zi(t,e,null,null)};ea.prototype.unmount=Yl.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mr(function(){Zi(null,t,null,null)}),e[_t]=null}};function ea(t){this._internalRoot=t}ea.prototype.unstable_scheduleHydration=function(t){if(t){var e=Gd();t={blockedOn:null,target:t,priority:e};for(var r=0;r<Rt.length&&e!==0&&e<Rt[r].priority;r++);Rt.splice(r,0,t),r===0&&Qd(t)}};function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ta(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hc(){}function Pg(t,e,r,n,s){if(s){if(typeof n=="function"){var i=n;n=function(){var c=Ri(a);i.call(c)}}var a=vf(e,n,t,0,null,!1,!1,"",hc);return t._reactRootContainer=a,t[_t]=a.current,Kn(t.nodeType===8?t.parentNode:t),mr(),a}for(;s=t.lastChild;)t.removeChild(s);if(typeof n=="function"){var o=n;n=function(){var c=Ri(l);o.call(c)}}var l=Ql(t,0,!1,null,null,!1,!1,"",hc);return t._reactRootContainer=l,t[_t]=l.current,Kn(t.nodeType===8?t.parentNode:t),mr(function(){Zi(e,l,r,n)}),l}function ra(t,e,r,n,s){var i=r._reactRootContainer;if(i){var a=i;if(typeof s=="function"){var o=s;s=function(){var l=Ri(a);o.call(l)}}Zi(e,a,t,s)}else a=Pg(r,e,t,s,n);return Ri(a)}Vd=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=kn(e.pendingLanes);r!==0&&(yl(e,r|1),Ce(e,Z()),!(D&6)&&(Zr=Z()+500,Qt()))}break;case 13:mr(function(){var n=bt(t,1);if(n!==null){var s=we();tt(n,t,1,s)}}),Xl(t,1)}};wl=function(t){if(t.tag===13){var e=bt(t,134217728);if(e!==null){var r=we();tt(e,t,134217728,r)}Xl(t,134217728)}};Kd=function(t){if(t.tag===13){var e=Wt(t),r=bt(t,e);if(r!==null){var n=we();tt(r,t,e,n)}Xl(t,e)}};Gd=function(){return z};Jd=function(t,e){var r=z;try{return z=t,e()}finally{z=r}};uo=function(t,e,r){switch(e){case"input":if(ro(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var s=Vi(n);if(!s)throw Error(j(90));jd(n),ro(n,s)}}}break;case"textarea":Td(t,r);break;case"select":e=r.value,e!=null&&zr(t,!!r.multiple,e,!1)}};Ld=Vl;$d=mr;var Ag={usingClientEntryPoint:!1,Events:[ms,Pr,Vi,Od,Id,Vl]},wn={findFiberByHostInstance:ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Og={bundleType:wn.bundleType,version:wn.version,rendererPackageName:wn.rendererPackageName,rendererConfig:wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=zd(t),t===null?null:t.stateNode},findFiberByHostInstance:wn.findFiberByHostInstance||Rg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ds.isDisabled&&Ds.supportsFiber)try{Mi=Ds.inject(Og),lt=Ds}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ag;Le.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zl(e))throw Error(j(200));return Ng(t,e,null,r)};Le.createRoot=function(t,e){if(!Zl(t))throw Error(j(299));var r=!1,n="",s=yf;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Ql(t,1,!1,null,null,r,!1,n,s),t[_t]=e.current,Kn(t.nodeType===8?t.parentNode:t),new Yl(e)};Le.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=zd(e),t=t===null?null:t.stateNode,t};Le.flushSync=function(t){return mr(t)};Le.hydrate=function(t,e,r){if(!ta(e))throw Error(j(200));return ra(null,t,e,!0,r)};Le.hydrateRoot=function(t,e,r){if(!Zl(t))throw Error(j(405));var n=r!=null&&r.hydratedSources||null,s=!1,i="",a=yf;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),e=vf(e,null,t,1,r??null,s,!1,i,a),t[_t]=e.current,Kn(t),n)for(t=0;t<n.length;t++)r=n[t],s=r._getVersion,s=s(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,s]:e.mutableSourceEagerHydrationData.push(r,s);return new ea(e)};Le.render=function(t,e,r){if(!ta(e))throw Error(j(200));return ra(null,t,e,!1,r)};Le.unmountComponentAtNode=function(t){if(!ta(t))throw Error(j(40));return t._reactRootContainer?(mr(function(){ra(null,null,t,!1,function(){t._reactRootContainer=null,t[_t]=null})}),!0):!1};Le.unstable_batchedUpdates=Vl;Le.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!ta(r))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return ra(t,e,r,!1,n)};Le.version="18.3.1-next-f1338f8080-20240426";function wf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wf)}catch(t){console.error(t)}}wf(),yd.exports=Le;var Ig=yd.exports,fc=Ig;Ja.createRoot=fc.createRoot,Ja.hydrateRoot=fc.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rs(){return rs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},rs.apply(null,arguments)}var $t;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})($t||($t={}));const pc="popstate";function Lg(t){t===void 0&&(t={});function e(n,s){let{pathname:i,search:a,hash:o}=n.location;return Wo("",{pathname:i,search:a,hash:o},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(n,s){return typeof s=="string"?s:Pi(s)}return Ug(e,r,null,t)}function K(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function eu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $g(){return Math.random().toString(36).substr(2,8)}function mc(t,e){return{usr:t.state,key:t.key,idx:e}}function Wo(t,e,r,n){return r===void 0&&(r=null),rs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?sn(e):e,{state:r,key:e&&e.key||n||$g()})}function Pi(t){let{pathname:e="/",search:r="",hash:n=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function sn(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function Ug(t,e,r,n){n===void 0&&(n={});let{window:s=document.defaultView,v5Compat:i=!1}=n,a=s.history,o=$t.Pop,l=null,c=h();c==null&&(c=0,a.replaceState(rs({},a.state,{idx:c}),""));function h(){return(a.state||{idx:null}).idx}function d(){o=$t.Pop;let x=h(),m=x==null?null:x-c;c=x,l&&l({action:o,location:w.location,delta:m})}function f(x,m){o=$t.Push;let p=Wo(w.location,x,m);c=h()+1;let v=mc(p,c),_=w.createHref(p);try{a.pushState(v,"",_)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;s.location.assign(_)}i&&l&&l({action:o,location:w.location,delta:1})}function g(x,m){o=$t.Replace;let p=Wo(w.location,x,m);c=h();let v=mc(p,c),_=w.createHref(p);a.replaceState(v,"",_),i&&l&&l({action:o,location:w.location,delta:0})}function y(x){let m=s.location.origin!=="null"?s.location.origin:s.location.href,p=typeof x=="string"?x:Pi(x);return p=p.replace(/ $/,"%20"),K(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let w={get action(){return o},get location(){return t(s,a)},listen(x){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(pc,d),l=x,()=>{s.removeEventListener(pc,d),l=null}},createHref(x){return e(s,x)},createURL:y,encodeLocation(x){let m=y(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:g,go(x){return a.go(x)}};return w}var gc;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(gc||(gc={}));function Dg(t,e,r){return r===void 0&&(r="/"),zg(t,e,r)}function zg(t,e,r,n){let s=typeof e=="string"?sn(e):e,i=en(s.pathname||"/",r);if(i==null)return null;let a=xf(t);Bg(a);let o=null,l=Xg(i);for(let c=0;o==null&&c<a.length;++c)o=Jg(a[c],l);return o}function xf(t,e,r,n){e===void 0&&(e=[]),r===void 0&&(r=[]),n===void 0&&(n="");let s=(i,a,o)=>{let l={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(K(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(n.length));let c=Ht([n,l.relativePath]),h=r.concat(l);i.children&&i.children.length>0&&(K(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),xf(i.children,e,h,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:Kg(c,i.index),routesMeta:h})};return t.forEach((i,a)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))s(i,a);else for(let l of _f(i.path))s(i,a,l)}),e}function _f(t){let e=t.split("/");if(e.length===0)return[];let[r,...n]=e,s=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return s?[i,""]:[i];let a=_f(n.join("/")),o=[];return o.push(...a.map(l=>l===""?i:[i,l].join("/"))),s&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function Bg(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:Gg(e.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Fg=/^:[\w-]+$/,Mg=3,Wg=2,qg=1,Hg=10,Vg=-2,vc=t=>t==="*";function Kg(t,e){let r=t.split("/"),n=r.length;return r.some(vc)&&(n+=Vg),e&&(n+=Wg),r.filter(s=>!vc(s)).reduce((s,i)=>s+(Fg.test(i)?Mg:i===""?qg:Hg),n)}function Gg(t,e){return t.length===e.length&&t.slice(0,-1).every((n,s)=>n===e[s])?t[t.length-1]-e[e.length-1]:0}function Jg(t,e,r){let{routesMeta:n}=t,s={},i="/",a=[];for(let o=0;o<n.length;++o){let l=n[o],c=o===n.length-1,h=i==="/"?e:e.slice(i.length)||"/",d=qo({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),f=l.route;if(!d)return null;Object.assign(s,d.params),a.push({params:s,pathname:Ht([i,d.pathname]),pathnameBase:rv(Ht([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=Ht([i,d.pathnameBase]))}return a}function qo(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,n]=Qg(t.path,t.caseSensitive,t.end),s=e.match(r);if(!s)return null;let i=s[0],a=i.replace(/(.)\/+$/,"$1"),o=s.slice(1);return{params:n.reduce((c,h,d)=>{let{paramName:f,isOptional:g}=h;if(f==="*"){let w=o[d]||"";a=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const y=o[d];return g&&!y?c[f]=void 0:c[f]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:t}}function Qg(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),eu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let n=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(n.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(n.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),n]}function Xg(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return eu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function en(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,n=t.charAt(r);return n&&n!=="/"?null:t.slice(r)||"/"}const Yg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zg=t=>Yg.test(t);function ev(t,e){e===void 0&&(e="/");let{pathname:r,search:n="",hash:s=""}=typeof t=="string"?sn(t):t,i;if(r)if(Zg(r))i=r;else{if(r.includes("//")){let a=r;r=bf(r),eu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+r))}r.startsWith("/")?i=yc(r.substring(1),"/"):i=yc(r,e)}else i=e;return{pathname:i,search:nv(n),hash:sv(s)}}function yc(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function za(t,e,r,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tv(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function tu(t,e){let r=tv(t);return e?r.map((n,s)=>s===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function ru(t,e,r,n){n===void 0&&(n=!1);let s;typeof t=="string"?s=sn(t):(s=rs({},t),K(!s.pathname||!s.pathname.includes("?"),za("?","pathname","search",s)),K(!s.pathname||!s.pathname.includes("#"),za("#","pathname","hash",s)),K(!s.search||!s.search.includes("#"),za("#","search","hash",s)));let i=t===""||s.pathname==="",a=i?"/":s.pathname,o;if(a==null)o=r;else{let d=e.length-1;if(!n&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;s.pathname=f.join("/")}o=d>=0?e[d]:"/"}let l=ev(s,o),c=a&&a!=="/"&&a.endsWith("/"),h=(i||a===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const bf=t=>t.replace(/\/\/+/g,"/"),Ht=t=>bf(t.join("/")),rv=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),nv=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,sv=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function iv(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const kf=["post","put","patch","delete"];new Set(kf);const av=["get",...kf];new Set(av);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ns(){return ns=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},ns.apply(null,arguments)}const na=b.createContext(null),Sf=b.createContext(null),Et=b.createContext(null),sa=b.createContext(null),jt=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Ef=b.createContext(null);function ov(t,e){let{relative:r}=e===void 0?{}:e;an()||K(!1);let{basename:n,navigator:s}=b.useContext(Et),{hash:i,pathname:a,search:o}=ia(t,{relative:r}),l=a;return n!=="/"&&(l=a==="/"?n:Ht([n,a])),s.createHref({pathname:l,search:o,hash:i})}function an(){return b.useContext(sa)!=null}function on(){return an()||K(!1),b.useContext(sa).location}function jf(t){b.useContext(Et).static||b.useLayoutEffect(t)}function vs(){let{isDataRoute:t}=b.useContext(jt);return t?_v():lv()}function lv(){an()||K(!1);let t=b.useContext(na),{basename:e,future:r,navigator:n}=b.useContext(Et),{matches:s}=b.useContext(jt),{pathname:i}=on(),a=JSON.stringify(tu(s,r.v7_relativeSplatPath)),o=b.useRef(!1);return jf(()=>{o.current=!0}),b.useCallback(function(c,h){if(h===void 0&&(h={}),!o.current)return;if(typeof c=="number"){n.go(c);return}let d=ru(c,JSON.parse(a),i,h.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Ht([e,d.pathname])),(h.replace?n.replace:n.push)(d,h.state,h)},[e,n,a,i,t])}function uv(){let{matches:t}=b.useContext(jt),e=t[t.length-1];return e?e.params:{}}function ia(t,e){let{relative:r}=e===void 0?{}:e,{future:n}=b.useContext(Et),{matches:s}=b.useContext(jt),{pathname:i}=on(),a=JSON.stringify(tu(s,n.v7_relativeSplatPath));return b.useMemo(()=>ru(t,JSON.parse(a),i,r==="path"),[t,a,i,r])}function cv(t,e){return dv(t,e)}function dv(t,e,r,n){an()||K(!1);let{navigator:s}=b.useContext(Et),{matches:i}=b.useContext(jt),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=on(),h;if(e){var d;let x=typeof e=="string"?sn(e):e;l==="/"||(d=x.pathname)!=null&&d.startsWith(l)||K(!1),h=x}else h=c;let f=h.pathname||"/",g=f;if(l!=="/"){let x=l.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(x.length).join("/")}let y=Dg(t,{pathname:g}),w=gv(y&&y.map(x=>Object.assign({},x,{params:Object.assign({},o,x.params),pathname:Ht([l,s.encodeLocation?s.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Ht([l,s.encodeLocation?s.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,r,n);return e&&w?b.createElement(sa.Provider,{value:{location:ns({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:$t.Pop}},w):w}function hv(){let t=xv(),e=iv(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),r?b.createElement("pre",{style:s},r):null,null)}const fv=b.createElement(hv,null);class pv extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?b.createElement(jt.Provider,{value:this.props.routeContext},b.createElement(Ef.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mv(t){let{routeContext:e,match:r,children:n}=t,s=b.useContext(na);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),b.createElement(jt.Provider,{value:e},n)}function gv(t,e,r,n){var s;if(e===void 0&&(e=[]),r===void 0&&(r=null),n===void 0&&(n=null),t==null){var i;if(!r)return null;if(r.errors)t=r.matches;else if((i=n)!=null&&i.v7_partialHydration&&e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let a=t,o=(s=r)==null?void 0:s.errors;if(o!=null){let h=a.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);h>=0||K(!1),a=a.slice(0,Math.min(a.length,h+1))}let l=!1,c=-1;if(r&&n&&n.v7_partialHydration)for(let h=0;h<a.length;h++){let d=a[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=h),d.route.id){let{loaderData:f,errors:g}=r,y=d.route.loader&&f[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||y){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((h,d,f)=>{let g,y=!1,w=null,x=null;r&&(g=o&&d.route.id?o[d.route.id]:void 0,w=d.route.errorElement||fv,l&&(c<0&&f===0?(bv("route-fallback"),y=!0,x=null):c===f&&(y=!0,x=d.route.hydrateFallbackElement||null)));let m=e.concat(a.slice(0,f+1)),p=()=>{let v;return g?v=w:y?v=x:d.route.Component?v=b.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=h,b.createElement(mv,{match:d,routeContext:{outlet:h,matches:m,isDataRoute:r!=null},children:v})};return r&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?b.createElement(pv,{location:r.location,revalidation:r.revalidation,component:w,error:g,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var Cf=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Cf||{}),Tf=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Tf||{});function vv(t){let e=b.useContext(na);return e||K(!1),e}function yv(t){let e=b.useContext(Sf);return e||K(!1),e}function wv(t){let e=b.useContext(jt);return e||K(!1),e}function Nf(t){let e=wv(),r=e.matches[e.matches.length-1];return r.route.id||K(!1),r.route.id}function xv(){var t;let e=b.useContext(Ef),r=yv(),n=Nf();return e!==void 0?e:(t=r.errors)==null?void 0:t[n]}function _v(){let{router:t}=vv(Cf.UseNavigateStable),e=Nf(Tf.UseNavigateStable),r=b.useRef(!1);return jf(()=>{r.current=!0}),b.useCallback(function(s,i){i===void 0&&(i={}),r.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,ns({fromRouteId:e},i)))},[t,e])}const wc={};function bv(t,e,r){wc[t]||(wc[t]=!0)}function kv(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ho(t){let{to:e,replace:r,state:n,relative:s}=t;an()||K(!1);let{future:i,static:a}=b.useContext(Et),{matches:o}=b.useContext(jt),{pathname:l}=on(),c=vs(),h=ru(e,tu(o,i.v7_relativeSplatPath),l,s==="path"),d=JSON.stringify(h);return b.useEffect(()=>c(JSON.parse(d),{replace:r,state:n,relative:s}),[c,d,s,r,n]),null}function ve(t){K(!1)}function Sv(t){let{basename:e="/",children:r=null,location:n,navigationType:s=$t.Pop,navigator:i,static:a=!1,future:o}=t;an()&&K(!1);let l=e.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:l,navigator:i,static:a,future:ns({v7_relativeSplatPath:!1},o)}),[l,o,i,a]);typeof n=="string"&&(n=sn(n));let{pathname:h="/",search:d="",hash:f="",state:g=null,key:y="default"}=n,w=b.useMemo(()=>{let x=en(h,l);return x==null?null:{location:{pathname:x,search:d,hash:f,state:g,key:y},navigationType:s}},[l,h,d,f,g,y,s]);return w==null?null:b.createElement(Et.Provider,{value:c},b.createElement(sa.Provider,{children:r,value:w}))}function Ev(t){let{children:e,location:r}=t;return cv(Vo(e),r)}new Promise(()=>{});function Vo(t,e){e===void 0&&(e=[]);let r=[];return b.Children.forEach(t,(n,s)=>{if(!b.isValidElement(n))return;let i=[...e,s];if(n.type===b.Fragment){r.push.apply(r,Vo(n.props.children,i));return}n.type!==ve&&K(!1),!n.props.index||!n.props.children||K(!1);let a={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=Vo(n.props.children,i)),r.push(a)}),r}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ai(){return Ai=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Ai.apply(null,arguments)}function Rf(t,e){if(t==null)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.indexOf(n)!==-1)continue;r[n]=t[n]}return r}function jv(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Cv(t,e){return t.button===0&&(!e||e==="_self")&&!jv(t)}const Tv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Nv=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Rv="6";try{window.__reactRouterVersion=Rv}catch{}const Pv=b.createContext({isTransitioning:!1}),Av="startTransition",xc=kp[Av];function Ov(t){let{basename:e,children:r,future:n,window:s}=t,i=b.useRef();i.current==null&&(i.current=Lg({window:s,v5Compat:!0}));let a=i.current,[o,l]=b.useState({action:a.action,location:a.location}),{v7_startTransition:c}=n||{},h=b.useCallback(d=>{c&&xc?xc(()=>l(d)):l(d)},[l,c]);return b.useLayoutEffect(()=>a.listen(h),[a,h]),b.useEffect(()=>kv(n),[n]),b.createElement(Sv,{basename:e,children:r,location:o.location,navigationType:o.action,navigator:a,future:n})}const Iv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Lv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,X=b.forwardRef(function(e,r){let{onClick:n,relative:s,reloadDocument:i,replace:a,state:o,target:l,to:c,preventScrollReset:h,viewTransition:d}=e,f=Rf(e,Tv),{basename:g}=b.useContext(Et),y,w=!1;if(typeof c=="string"&&Lv.test(c)&&(y=c,Iv))try{let v=new URL(window.location.href),_=c.startsWith("//")?new URL(v.protocol+c):new URL(c),k=en(_.pathname,g);_.origin===v.origin&&k!=null?c=k+_.search+_.hash:w=!0}catch{}let x=ov(c,{relative:s}),m=Uv(c,{replace:a,state:o,target:l,preventScrollReset:h,relative:s,viewTransition:d});function p(v){n&&n(v),v.defaultPrevented||m(v)}return b.createElement("a",Ai({},f,{href:y||x,onClick:w||i?n:p,ref:r,target:l}))}),Ue=b.forwardRef(function(e,r){let{"aria-current":n="page",caseSensitive:s=!1,className:i="",end:a=!1,style:o,to:l,viewTransition:c,children:h}=e,d=Rf(e,Nv),f=ia(l,{relative:d.relative}),g=on(),y=b.useContext(Sf),{navigator:w,basename:x}=b.useContext(Et),m=y!=null&&Dv(f)&&c===!0,p=w.encodeLocation?w.encodeLocation(f).pathname:f.pathname,v=g.pathname,_=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;s||(v=v.toLowerCase(),_=_?_.toLowerCase():null,p=p.toLowerCase()),_&&x&&(_=en(_,x)||_);const k=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let S=v===p||!a&&v.startsWith(p)&&v.charAt(k)==="/",E=_!=null&&(_===p||!a&&_.startsWith(p)&&_.charAt(p.length)==="/"),T={isActive:S,isPending:E,isTransitioning:m},O=S?n:void 0,I;typeof i=="function"?I=i(T):I=[i,S?"active":null,E?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let Te=typeof o=="function"?o(T):o;return b.createElement(X,Ai({},d,{"aria-current":O,className:I,ref:r,style:Te,to:l,viewTransition:c}),typeof h=="function"?h(T):h)});var Ko;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ko||(Ko={}));var _c;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(_c||(_c={}));function $v(t){let e=b.useContext(na);return e||K(!1),e}function Uv(t,e){let{target:r,replace:n,state:s,preventScrollReset:i,relative:a,viewTransition:o}=e===void 0?{}:e,l=vs(),c=on(),h=ia(t,{relative:a});return b.useCallback(d=>{if(Cv(d,r)){d.preventDefault();let f=n!==void 0?n:Pi(c)===Pi(h);l(t,{replace:f,state:s,preventScrollReset:i,relative:a,viewTransition:o})}},[c,l,h,n,s,r,t,i,a,o])}function Dv(t,e){e===void 0&&(e={});let r=b.useContext(Pv);r==null&&K(!1);let{basename:n}=$v(Ko.useViewTransitionState),s=ia(t,{relative:e.relative});if(!r.isTransitioning)return!1;let i=en(r.currentLocation.pathname,n)||r.currentLocation.pathname,a=en(r.nextLocation.pathname,n)||r.nextLocation.pathname;return qo(s.pathname,a)!=null||qo(s.pathname,i)!=null}function aa(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(r[n[s]]=t[n[s]]);return r}function zv(t,e,r,n){function s(i){return i instanceof r?i:new r(function(a){a(i)})}return new(r||(r=Promise))(function(i,a){function o(h){try{c(n.next(h))}catch(d){a(d)}}function l(h){try{c(n.throw(h))}catch(d){a(d)}}function c(h){h.done?i(h.value):s(h.value).then(o,l)}c((n=n.apply(t,e||[])).next())})}const Bv=t=>t?(...e)=>t(...e):(...e)=>fetch(...e);class nu extends Error{constructor(e,r="FunctionsError",n){super(e),this.name=r,this.context=n}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class Fv extends nu{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class bc extends nu{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class kc extends nu{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var Go;(function(t){t.Any="any",t.ApNortheast1="ap-northeast-1",t.ApNortheast2="ap-northeast-2",t.ApSouth1="ap-south-1",t.ApSoutheast1="ap-southeast-1",t.ApSoutheast2="ap-southeast-2",t.CaCentral1="ca-central-1",t.EuCentral1="eu-central-1",t.EuWest1="eu-west-1",t.EuWest2="eu-west-2",t.EuWest3="eu-west-3",t.SaEast1="sa-east-1",t.UsEast1="us-east-1",t.UsWest1="us-west-1",t.UsWest2="us-west-2"})(Go||(Go={}));class Mv{constructor(e,{headers:r={},customFetch:n,region:s=Go.Any}={}){this.url=e,this.headers=r,this.region=s,this.fetch=Bv(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return zv(this,arguments,void 0,function*(r,n={}){var s,i;let a,o,l;try{const{headers:c,method:h,body:d,signal:f,timeout:g}=n;let y={},{region:w}=n;w||(w=this.region);const x=new URL(`${this.url}/${r}`);w&&w!=="any"&&(y["x-region"]=w,x.searchParams.set("forceFunctionRegion",w));let m;const p=!!c&&Object.keys(c).some(T=>T.toLowerCase()==="content-type");d&&!p?typeof Blob<"u"&&d instanceof Blob||d instanceof ArrayBuffer?(y["Content-Type"]="application/octet-stream",m=d):typeof d=="string"?(y["Content-Type"]="text/plain",m=d):typeof FormData<"u"&&d instanceof FormData?m=d:(y["Content-Type"]="application/json",m=JSON.stringify(d)):d&&typeof d!="string"&&!(typeof Blob<"u"&&d instanceof Blob)&&!(d instanceof ArrayBuffer)&&!(typeof FormData<"u"&&d instanceof FormData)?m=JSON.stringify(d):m=d;let v=f;g&&(o=new AbortController,a=setTimeout(()=>o.abort(),g),f?(v=o.signal,l=()=>o.abort(),f.addEventListener("abort",l)):v=o.signal);const _=yield this.fetch(x.toString(),{method:h||"POST",headers:Object.assign(Object.assign(Object.assign({},y),this.headers),c),body:m,signal:v}).catch(T=>{throw new Fv(T)}),k=_.headers.get("x-relay-error");if(k&&k==="true")throw new bc(_);if(!_.ok)throw new kc(_);let S=((s=_.headers.get("Content-Type"))!==null&&s!==void 0?s:"text/plain").split(";")[0].trim().toLowerCase(),E;return S==="application/json"?E=yield _.json():S==="application/octet-stream"||S==="application/pdf"?E=yield _.blob():S==="text/event-stream"?E=_:S==="multipart/form-data"?E=yield _.formData():E=yield _.text(),{data:E,error:null,response:_}}catch(c){return{data:null,error:c,response:c instanceof kc||c instanceof bc?c.context:void 0}}finally{a&&clearTimeout(a),l&&((i=n.signal)===null||i===void 0||i.removeEventListener("abort",l))}})}}const Pf=3,Sc=t=>Math.min(1e3*2**t,3e4),Wv=[520,503],Af=["GET","HEAD","OPTIONS"];var Ec=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function jc(t,e){return new Promise(r=>{if(e!=null&&e.aborted){r();return}const n=setTimeout(()=>{e==null||e.removeEventListener("abort",s),r()},t);function s(){clearTimeout(n),r()}e==null||e.addEventListener("abort",s)})}function qv(t,e,r,n){return!(!n||r>=Pf||!Af.includes(t)||!Wv.includes(e))}var Hv=class{constructor(t){var e,r,n,s,i;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=t.method,this.url=t.url,this.headers=new Headers(t.headers),this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=(e=t.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=t.signal,this.isMaybeSingle=(r=t.isMaybeSingle)!==null&&r!==void 0?r:!1,this.shouldStripNulls=(n=t.shouldStripNulls)!==null&&n!==void 0?n:!1,this.urlLengthLimit=(s=t.urlLengthLimit)!==null&&s!==void 0?s:8e3,this.retryEnabled=(i=t.retry)!==null&&i!==void 0?i:!0,t.fetch?this.fetch=t.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(t,e){return this.headers=new Headers(this.headers),this.headers.set(t,e),this}retry(t){return this.retryEnabled=t,this}then(t,e){var r=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const a=this.headers.get("Accept");a==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!a||a==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const n=this.fetch;let i=(async()=>{let a=0;for(;;){const c={};r.headers.forEach((d,f)=>{c[f]=d}),a>0&&(c["X-Retry-Count"]=String(a));let h;try{h=await n(r.url.toString(),{method:r.method,headers:c,body:JSON.stringify(r.body,(d,f)=>typeof f=="bigint"?f.toString():f),signal:r.signal})}catch(d){if((d==null?void 0:d.name)==="AbortError"||(d==null?void 0:d.code)==="ABORT_ERR"||!Af.includes(r.method))throw d;if(r.retryEnabled&&a<Pf){const f=Sc(a);a++,await jc(f,r.signal);continue}throw d}if(qv(r.method,h.status,a,r.retryEnabled)){var o,l;const d=(o=(l=h.headers)===null||l===void 0?void 0:l.get("Retry-After"))!==null&&o!==void 0?o:null,f=d!==null?Math.max(0,parseInt(d,10)||0)*1e3:Sc(a);await h.text(),a++,await jc(f,r.signal);continue}return await r.processResponse(h)}})();return this.shouldThrowOnError||(i=i.catch(a=>{var o;let l="",c="",h="";const d=a==null?void 0:a.cause;if(d){var f,g,y,w;const p=(f=d==null?void 0:d.message)!==null&&f!==void 0?f:"",v=(g=d==null?void 0:d.code)!==null&&g!==void 0?g:"";l=`${(y=a==null?void 0:a.name)!==null&&y!==void 0?y:"FetchError"}: ${a==null?void 0:a.message}`,l+=`

Caused by: ${(w=d==null?void 0:d.name)!==null&&w!==void 0?w:"Error"}: ${p}`,v&&(l+=` (${v})`),d!=null&&d.stack&&(l+=`
${d.stack}`)}else{var x;l=(x=a==null?void 0:a.stack)!==null&&x!==void 0?x:""}const m=this.url.toString().length;return(a==null?void 0:a.name)==="AbortError"||(a==null?void 0:a.code)==="ABORT_ERR"?(h="",c="Request was aborted (timeout or manual cancellation)",m>this.urlLengthLimit&&(c+=`. Note: Your request URL is ${m} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((d==null?void 0:d.name)==="HeadersOverflowError"||(d==null?void 0:d.code)==="UND_ERR_HEADERS_OVERFLOW")&&(h="",c="HTTP headers exceeded server limits (typically 16KB)",m>this.urlLengthLimit&&(c+=`. Your request URL is ${m} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(o=a==null?void 0:a.name)!==null&&o!==void 0?o:"FetchError"}: ${a==null?void 0:a.message}`,details:l,hint:c,code:h},data:null,count:null,status:0,statusText:""}})),i.then(t,e)}async processResponse(t){var e=this;let r=null,n=null,s=null,i=t.status,a=t.statusText;if(t.ok){var o,l;if(e.method!=="HEAD"){var c;const f=await t.text();if(f!=="")if(e.headers.get("Accept")==="text/csv")n=f;else if(e.headers.get("Accept")&&(!((c=e.headers.get("Accept"))===null||c===void 0)&&c.includes("application/vnd.pgrst.plan+text")))n=f;else try{n=JSON.parse(f)}catch{if(r={message:f},n=null,e.shouldThrowOnError)throw new Ec({message:f,details:"",hint:"",code:""})}}const h=(o=e.headers.get("Prefer"))===null||o===void 0?void 0:o.match(/count=(exact|planned|estimated)/),d=(l=t.headers.get("content-range"))===null||l===void 0?void 0:l.split("/");h&&d&&d.length>1&&(s=parseInt(d[1])),e.isMaybeSingle&&Array.isArray(n)&&(n.length>1?(r={code:"PGRST116",details:`Results contain ${n.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},n=null,s=null,i=406,a="Not Acceptable"):n.length===1?n=n[0]:n=null)}else{const h=await t.text();try{r=JSON.parse(h),Array.isArray(r)&&t.status===404&&(n=[],r=null,i=200,a="OK")}catch{t.status===404&&h===""?(i=204,a="No Content"):r={message:h}}if(r&&e.shouldThrowOnError)throw new Ec(r)}return{success:r===null,error:r,data:n,count:s,status:i,statusText:a}}returns(){return this}overrideTypes(){return this}},Vv=class extends Hv{throwOnError(){return super.throwOnError()}select(t){let e=!1;const r=(t??"*").split("").map(n=>/\s/.test(n)&&!e?"":(n==='"'&&(e=!e),n)).join("");return this.url.searchParams.set("select",r),this.headers.append("Prefer","return=representation"),this}order(t,{ascending:e=!0,nullsFirst:r,foreignTable:n,referencedTable:s=n}={}){const i=s?`${s}.order`:"order",a=this.url.searchParams.get(i);return this.url.searchParams.set(i,`${a?`${a},`:""}${t}.${e?"asc":"desc"}${r===void 0?"":r?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:e,referencedTable:r=e}={}){const n=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(n,`${t}`),this}range(t,e,{foreignTable:r,referencedTable:n=r}={}){const s=typeof n>"u"?"offset":`${n}.offset`,i=typeof n>"u"?"limit":`${n}.limit`;return this.url.searchParams.set(s,`${t}`),this.url.searchParams.set(i,`${e-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:t=!1,verbose:e=!1,settings:r=!1,buffers:n=!1,wal:s=!1,format:i="text"}={}){var a;const o=[t?"analyze":null,e?"verbose":null,r?"settings":null,n?"buffers":null,s?"wal":null].filter(Boolean).join("|"),l=(a=this.headers.get("Accept"))!==null&&a!==void 0?a:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${i}; for="${l}"; options=${o};`),i==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(t){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${t}`),this}};const Cc=new RegExp("[,()]");var kr=class extends Vv{throwOnError(){return super.throwOnError()}eq(t,e){return this.url.searchParams.append(t,`eq.${e}`),this}neq(t,e){return this.url.searchParams.append(t,`neq.${e}`),this}gt(t,e){return this.url.searchParams.append(t,`gt.${e}`),this}gte(t,e){return this.url.searchParams.append(t,`gte.${e}`),this}lt(t,e){return this.url.searchParams.append(t,`lt.${e}`),this}lte(t,e){return this.url.searchParams.append(t,`lte.${e}`),this}like(t,e){return this.url.searchParams.append(t,`like.${e}`),this}likeAllOf(t,e){return this.url.searchParams.append(t,`like(all).{${e.join(",")}}`),this}likeAnyOf(t,e){return this.url.searchParams.append(t,`like(any).{${e.join(",")}}`),this}ilike(t,e){return this.url.searchParams.append(t,`ilike.${e}`),this}ilikeAllOf(t,e){return this.url.searchParams.append(t,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(t,e){return this.url.searchParams.append(t,`ilike(any).{${e.join(",")}}`),this}regexMatch(t,e){return this.url.searchParams.append(t,`match.${e}`),this}regexIMatch(t,e){return this.url.searchParams.append(t,`imatch.${e}`),this}is(t,e){return this.url.searchParams.append(t,`is.${e}`),this}isDistinct(t,e){return this.url.searchParams.append(t,`isdistinct.${e}`),this}in(t,e){const r=Array.from(new Set(e)).map(n=>typeof n=="string"&&Cc.test(n)?`"${n}"`:`${n}`).join(",");return this.url.searchParams.append(t,`in.(${r})`),this}notIn(t,e){const r=Array.from(new Set(e)).map(n=>typeof n=="string"&&Cc.test(n)?`"${n}"`:`${n}`).join(",");return this.url.searchParams.append(t,`not.in.(${r})`),this}contains(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cs.{${e.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(e)}`),this}containedBy(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cd.{${e.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(e)}`),this}rangeGt(t,e){return this.url.searchParams.append(t,`sr.${e}`),this}rangeGte(t,e){return this.url.searchParams.append(t,`nxl.${e}`),this}rangeLt(t,e){return this.url.searchParams.append(t,`sl.${e}`),this}rangeLte(t,e){return this.url.searchParams.append(t,`nxr.${e}`),this}rangeAdjacent(t,e){return this.url.searchParams.append(t,`adj.${e}`),this}overlaps(t,e){return typeof e=="string"?this.url.searchParams.append(t,`ov.${e}`):this.url.searchParams.append(t,`ov.{${e.join(",")}}`),this}textSearch(t,e,{config:r,type:n}={}){let s="";n==="plain"?s="pl":n==="phrase"?s="ph":n==="websearch"&&(s="w");const i=r===void 0?"":`(${r})`;return this.url.searchParams.append(t,`${s}fts${i}.${e}`),this}match(t){return Object.entries(t).filter(([e,r])=>r!==void 0).forEach(([e,r])=>{this.url.searchParams.append(e,`eq.${r}`)}),this}not(t,e,r){return this.url.searchParams.append(t,`not.${e}.${r}`),this}or(t,{foreignTable:e,referencedTable:r=e}={}){const n=r?`${r}.or`:"or";return this.url.searchParams.append(n,`(${t})`),this}filter(t,e,r){return this.url.searchParams.append(t,`${e}.${r}`),this}},Kv=class{constructor(t,{headers:e={},schema:r,fetch:n,urlLengthLimit:s=8e3,retry:i}){this.url=t,this.headers=new Headers(e),this.schema=r,this.fetch=n,this.urlLengthLimit=s,this.retry=i}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(t,e){const{head:r=!1,count:n}=e??{},s=r?"HEAD":"GET";let i=!1;const a=(t??"*").split("").map(c=>/\s/.test(c)&&!i?"":(c==='"'&&(i=!i),c)).join(""),{url:o,headers:l}=this.cloneRequestState();return o.searchParams.set("select",a),n&&l.append("Prefer",`count=${n}`),new kr({method:s,url:o,headers:l,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(t,{count:e,defaultToNull:r=!0}={}){var n;const s="POST",{url:i,headers:a}=this.cloneRequestState();if(e&&a.append("Prefer",`count=${e}`),r||a.append("Prefer","missing=default"),Array.isArray(t)){const o=t.reduce((l,c)=>l.concat(Object.keys(c)),[]);if(o.length>0){const l=[...new Set(o)].map(c=>`"${c}"`);i.searchParams.set("columns",l.join(","))}}return new kr({method:s,url:i,headers:a,schema:this.schema,body:t,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(t,{onConflict:e,ignoreDuplicates:r=!1,count:n,defaultToNull:s=!0}={}){var i;const a="POST",{url:o,headers:l}=this.cloneRequestState();if(l.append("Prefer",`resolution=${r?"ignore":"merge"}-duplicates`),e!==void 0&&o.searchParams.set("on_conflict",e),n&&l.append("Prefer",`count=${n}`),s||l.append("Prefer","missing=default"),Array.isArray(t)){const c=t.reduce((h,d)=>h.concat(Object.keys(d)),[]);if(c.length>0){const h=[...new Set(c)].map(d=>`"${d}"`);o.searchParams.set("columns",h.join(","))}}return new kr({method:a,url:o,headers:l,schema:this.schema,body:t,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(t,{count:e}={}){var r;const n="PATCH",{url:s,headers:i}=this.cloneRequestState();return e&&i.append("Prefer",`count=${e}`),new kr({method:n,url:s,headers:i,schema:this.schema,body:t,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:t}={}){var e;const r="DELETE",{url:n,headers:s}=this.cloneRequestState();return t&&s.append("Prefer",`count=${t}`),new kr({method:r,url:n,headers:s,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function ss(t){"@babel/helpers - typeof";return ss=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ss(t)}function Gv(t,e){if(ss(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(ss(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Jv(t){var e=Gv(t,"string");return ss(e)=="symbol"?e:e+""}function Qv(t,e,r){return(e=Jv(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Tc(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,n)}return r}function zs(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Tc(Object(r),!0).forEach(function(n){Qv(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Tc(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}var Xv=class Of{constructor(e,{headers:r={},schema:n,fetch:s,timeout:i,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(r),this.schemaName=n,this.urlLengthLimit=a;const l=s??globalThis.fetch;i!==void 0&&i>0?this.fetch=(c,h)=>{const d=new AbortController,f=setTimeout(()=>d.abort(),i),g=h==null?void 0:h.signal;if(g){if(g.aborted)return clearTimeout(f),l(c,h);const y=()=>{clearTimeout(f),d.abort()};return g.addEventListener("abort",y,{once:!0}),l(c,zs(zs({},h),{},{signal:d.signal})).finally(()=>{clearTimeout(f),g.removeEventListener("abort",y)})}return l(c,zs(zs({},h),{},{signal:d.signal})).finally(()=>clearTimeout(f))}:this.fetch=l,this.retry=o}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new Kv(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new Of(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,r={},{head:n=!1,get:s=!1,count:i}={}){var a;let o;const l=new URL(`${this.url}/rpc/${e}`);let c;const h=g=>g!==null&&typeof g=="object"&&(!Array.isArray(g)||g.some(h)),d=n&&Object.values(r).some(h);d?(o="POST",c=r):n||s?(o=n?"HEAD":"GET",Object.entries(r).filter(([g,y])=>y!==void 0).map(([g,y])=>[g,Array.isArray(y)?`{${y.join(",")}}`:`${y}`]).forEach(([g,y])=>{l.searchParams.append(g,y)})):(o="POST",c=r);const f=new Headers(this.headers);return d?f.set("Prefer",i?`count=${i},return=minimal`:"return=minimal"):i&&f.set("Prefer",`count=${i}`),new kr({method:o,url:l,headers:f,schema:this.schemaName,body:c,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class Yv{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const r=globalThis;if(typeof globalThis<"u"&&typeof r.WebSocket<"u")return{type:"native",wsConstructor:r.WebSocket};const n=typeof global<"u"?global:void 0;if(n&&typeof n.WebSocket<"u")return{type:"native",wsConstructor:n.WebSocket};if(typeof globalThis<"u"&&typeof r.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&r.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const s=globalThis.process;if(s){const i=s.versions;if(i&&i.node)return{type:"unsupported",error:"Node.js detected but native WebSocket not found.",workaround:"Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option."}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let r=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(r+=`

Suggested solution: ${e.workaround}`),new Error(r)}static isWebSocketSupported(){try{return this.detectEnvironment().type==="native"}catch{return!1}}}const Zv="2.110.8",ey=`realtime-js/${Zv}`,ty="1.0.0",If="2.0.0",ry=If,ny=1e4,sy=100,At={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Lf={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},Jo={connecting:"connecting",closing:"closing",closed:"closed"};class iy{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,r){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return r(this._binaryEncodeUserBroadcastPush(e));let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return r(JSON.stringify(n))}_binaryEncodeUserBroadcastPush(e){var r;return this._isArrayBuffer((r=e.payload)===null||r===void 0?void 0:r.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var r,n;const s=(n=(r=e.payload)===null||r===void 0?void 0:r.payload)!==null&&n!==void 0?n:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,s)}_encodeJsonUserBroadcastPush(e){var r,n;const s=(n=(r=e.payload)===null||r===void 0?void 0:r.payload)!==null&&n!==void 0?n:{},a=new TextEncoder().encode(JSON.stringify(s)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,a)}_encodeUserBroadcastPush(e,r,n){var s,i;const a=new TextEncoder,o=a.encode(e.topic),l=a.encode((s=e.ref)!==null&&s!==void 0?s:""),c=a.encode((i=e.join_ref)!==null&&i!==void 0?i:""),h=a.encode(e.payload.event),d=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},f=a.encode(Object.keys(d).length===0?"":JSON.stringify(d));if(c.length>255)throw new Error(`joinRef length ${c.length} exceeds maximum of 255`);if(l.length>255)throw new Error(`ref length ${l.length} exceeds maximum of 255`);if(o.length>255)throw new Error(`topic length ${o.length} exceeds maximum of 255`);if(h.length>255)throw new Error(`userEvent length ${h.length} exceeds maximum of 255`);if(f.length>255)throw new Error(`metadata length ${f.length} exceeds maximum of 255`);const g=this.USER_BROADCAST_PUSH_META_LENGTH+c.length+l.length+o.length+h.length+f.length,y=new ArrayBuffer(this.HEADER_LENGTH+g),w=new DataView(y),x=new Uint8Array(y);let m=0;w.setUint8(m++,this.KINDS.userBroadcastPush),w.setUint8(m++,c.length),w.setUint8(m++,l.length),w.setUint8(m++,o.length),w.setUint8(m++,h.length),w.setUint8(m++,f.length),w.setUint8(m++,r),x.set(c,m),m+=c.length,x.set(l,m),m+=l.length,x.set(o,m),m+=o.length,x.set(h,m),m+=h.length,x.set(f,m),m+=f.length;var p=new Uint8Array(y.byteLength+n.byteLength);return p.set(new Uint8Array(y),0),p.set(new Uint8Array(n),y.byteLength),p.buffer}decode(e,r){if(this._isArrayBuffer(e)){let n=this._binaryDecode(e);return r(n)}if(typeof e=="string"){const n=JSON.parse(e),[s,i,a,o,l]=n;return r({join_ref:s,ref:i,topic:a,event:o,payload:l})}return r({})}_binaryDecode(e){const r=new DataView(e),n=r.getUint8(0),s=new TextDecoder;switch(n){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,r,s)}}_decodeUserBroadcast(e,r,n){const s=r.getUint8(1),i=r.getUint8(2),a=r.getUint8(3),o=r.getUint8(4);let l=this.HEADER_LENGTH+4;const c=n.decode(e.slice(l,l+s));l=l+s;const h=n.decode(e.slice(l,l+i));l=l+i;const d=n.decode(e.slice(l,l+a));l=l+a;const f=e.slice(l,e.byteLength),g=o===this.JSON_ENCODING?JSON.parse(n.decode(f)):f,y={type:this.BROADCAST_EVENT,event:h,payload:g};return a>0&&(y.meta=JSON.parse(d)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:y}}_isArrayBuffer(e){var r;return e instanceof ArrayBuffer||((r=e==null?void 0:e.constructor)===null||r===void 0?void 0:r.name)==="ArrayBuffer"}_pick(e,r){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([n])=>r.includes(n)))}}var B;(function(t){t.abstime="abstime",t.bool="bool",t.date="date",t.daterange="daterange",t.float4="float4",t.float8="float8",t.int2="int2",t.int4="int4",t.int4range="int4range",t.int8="int8",t.int8range="int8range",t.json="json",t.jsonb="jsonb",t.money="money",t.numeric="numeric",t.oid="oid",t.reltime="reltime",t.text="text",t.time="time",t.timestamp="timestamp",t.timestamptz="timestamptz",t.timetz="timetz",t.tsrange="tsrange",t.tstzrange="tstzrange"})(B||(B={}));const Nc=(t,e,r={})=>{var n;const s=(n=r.skipTypes)!==null&&n!==void 0?n:[];return e?Object.keys(e).reduce((i,a)=>(i[a]=ay(a,t,e,s),i),{}):{}},ay=(t,e,r,n)=>{const s=e.find(o=>o.name===t),i=s==null?void 0:s.type,a=r[t];return i&&!n.includes(i)?$f(i,a):Qo(a)},$f=(t,e)=>{if(t.charAt(0)==="_"){const r=t.slice(1,t.length);return cy(e,r)}switch(t){case B.bool:return oy(e);case B.float4:case B.float8:case B.int2:case B.int4:case B.int8:case B.numeric:case B.oid:return ly(e);case B.json:case B.jsonb:return uy(e);case B.timestamp:return dy(e);case B.abstime:case B.date:case B.daterange:case B.int4range:case B.int8range:case B.money:case B.reltime:case B.text:case B.time:case B.timestamptz:case B.timetz:case B.tsrange:case B.tstzrange:return Qo(e);default:return Qo(e)}},Qo=t=>t,oy=t=>{switch(t){case"t":return!0;case"f":return!1;default:return t}},ly=t=>{if(typeof t=="string"){const e=parseFloat(t);if(!Number.isNaN(e))return e}return t},uy=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch{return t}return t},cy=(t,e)=>{if(typeof t!="string")return t;const r=t.length-1,n=t[r];if(t[0]==="{"&&n==="}"){let i;const a=t.slice(1,r);try{i=JSON.parse("["+a+"]")}catch{i=a?a.split(","):[]}return i.map(o=>$f(e,o))}return t},dy=t=>typeof t=="string"?t.replace(" ","T"):t,Uf=t=>{const e=new URL(t);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var Hr=t=>typeof t=="function"?t:function(){return t},hy=typeof self<"u"?self:null,Sr=typeof window<"u"?window:null,it=hy||Sr||globalThis,fy="2.0.0",py=1e4,my=1e3,gy=100,at={connecting:0,open:1,closing:2,closed:3},be={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},ft={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},Xo={longpoll:"longpoll",websocket:"websocket"},vy={complete:4},Yo="base64url.bearer.phx.",Bs=class{constructor(t,e,r,n){this.channel=t,this.event=e,this.payload=r||function(){return{}},this.receivedResp=null,this.timeout=n,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(t){this.timeout=t,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(t,e){return this.hasReceived(t)&&e(this.receivedResp.response),this.recHooks.push({status:t,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:t,response:e,_ref:r}){this.recHooks.filter(n=>n.status===t).forEach(n=>n.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,t=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=t,this.matchReceive(t)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}trigger(t,e){this.channel.trigger(this.refEvent,{status:t,response:e})}},Df=class{constructor(t,e){this.callback=t,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},yy=class{constructor(t,e,r){this.state=be.closed,this.topic=t,this.params=Hr(e||{}),this.socket=r,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Bs(this,ft.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Df(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=be.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(n=>n.send()),this.pushBuffer=[]}),this.joinPush.receive("error",n=>{this.state=be.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,n),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=be.closed,this.socket.remove(this)}),this.onError(n=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,n),this.isJoining()&&this.joinPush.reset(),this.state=be.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new Bs(this,ft.leave,Hr({}),this.timeout).send(),this.state=be.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(ft.reply,(n,s)=>{this.trigger(this.replyEventName(s),n)})}join(t=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=t,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=be.closed,this.bindings=[]}onClose(t){this.on(ft.close,t)}onError(t){return this.on(ft.error,e=>t(e))}on(t,e){let r=this.bindingRef++;return this.bindings.push({event:t,ref:r,callback:e}),r}off(t,e){this.bindings=this.bindings.filter(r=>!(r.event===t&&(typeof e>"u"||e===r.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(t,e,r=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${t}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let n=new Bs(this,t,function(){return e},r);return this.canPush()?n.send():(n.startTimeout(),this.pushBuffer.push(n)),n}leave(t=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=be.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(ft.close,"leave")},r=new Bs(this,ft.leave,Hr({}),t);return r.receive("ok",()=>e()).receive("timeout",()=>e()),r.send(),this.canPush()||r.trigger("ok",{}),r}onMessage(t,e,r){return e}filterBindings(t,e,r){return!0}isMember(t,e,r,n){return this.topic!==t?!1:n&&n!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:t,event:e,payload:r,joinRef:n}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(t=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=be.joining,this.joinPush.resend(t))}trigger(t,e,r,n){let s=this.onMessage(t,e,r,n);if(e&&!s)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let i=this.bindings.filter(a=>a.event===t&&this.filterBindings(a,e,r));for(let a=0;a<i.length;a++)i[a].callback(s,r,n||this.joinRef())}replyEventName(t){return`chan_reply_${t}`}isClosed(){return this.state===be.closed}isErrored(){return this.state===be.errored}isJoined(){return this.state===be.joined}isJoining(){return this.state===be.joining}isLeaving(){return this.state===be.leaving}},Oi=class{static request(t,e,r,n,s,i,a){if(it.XDomainRequest){let o=new it.XDomainRequest;return this.xdomainRequest(o,t,e,n,s,i,a)}else if(it.XMLHttpRequest){let o=new it.XMLHttpRequest;return this.xhrRequest(o,t,e,r,n,s,i,a)}else{if(it.fetch&&it.AbortController)return this.fetchRequest(t,e,r,n,s,i,a);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(t,e,r,n,s,i,a){let o={method:t,headers:r,body:n},l=null;return s&&(l=new AbortController,setTimeout(()=>l.abort(),s),o.signal=l.signal),it.fetch(e,o).then(c=>c.text()).then(c=>this.parseJSON(c)).then(c=>a&&a(c)).catch(c=>{c.name==="AbortError"&&i?i():a&&a(null)}),l}static xdomainRequest(t,e,r,n,s,i,a){return t.timeout=s,t.open(e,r),t.onload=()=>{let o=this.parseJSON(t.responseText);a&&a(o)},i&&(t.ontimeout=i),t.onprogress=()=>{},t.send(n),t}static xhrRequest(t,e,r,n,s,i,a,o){t.open(e,r,!0),t.timeout=i;for(let[l,c]of Object.entries(n))t.setRequestHeader(l,c);return t.onerror=()=>o&&o(null),t.onreadystatechange=()=>{if(t.readyState===vy.complete&&o){let l=this.parseJSON(t.responseText);o(l)}},a&&(t.ontimeout=a),t.send(s),t}static parseJSON(t){if(!t||t==="")return null;try{return JSON.parse(t)}catch{return console&&console.log("failed to parse JSON response",t),null}}static serialize(t,e){let r=[];for(var n in t){if(!Object.prototype.hasOwnProperty.call(t,n))continue;let s=e?`${e}[${n}]`:n,i=t[n];typeof i=="object"?r.push(this.serialize(i,s)):r.push(encodeURIComponent(s)+"="+encodeURIComponent(i))}return r.join("&")}static appendParams(t,e){if(Object.keys(e).length===0)return t;let r=t.match(/\?/)?"&":"?";return`${t}${r}${this.serialize(e)}`}},wy=t=>{let e="",r=new Uint8Array(t),n=r.byteLength;for(let s=0;s<n;s++)e+=String.fromCharCode(r[s]);return btoa(e)},wr=class{constructor(t,e){e&&e.length===2&&e[1].startsWith(Yo)&&(this.authToken=atob(e[1].slice(Yo.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(t),this.readyState=at.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(t){return t.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+Xo.websocket),"$1/"+Xo.longpoll)}endpointURL(){return Oi.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(t,e,r){this.close(t,e,r),this.readyState=at.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===at.open||this.readyState===at.connecting}poll(){const t={Accept:"application/json"};this.authToken&&(t["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",t,null,()=>this.ontimeout(),e=>{if(e){var{status:r,token:n,messages:s}=e;if(r===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=n}else r=0;switch(r){case 200:s.forEach(i=>{setTimeout(()=>this.onmessage({data:i}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=at.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${r}`)}})}send(t){typeof t!="string"&&(t=wy(t)),this.currentBatch?this.currentBatch.push(t):this.awaitingBatchAck?this.batchBuffer.push(t):(this.currentBatch=[t],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(t,e=0){this.awaitingBatchAck=!0;const r=e+gy,n=t.slice(e,r);this.ajax("POST",{"Content-Type":"application/x-ndjson"},n.join(`
`),()=>this.onerror("timeout"),s=>{!s||s.status!==200?(this.awaitingBatchAck=!1,this.onerror(s&&s.status),this.closeAndRetry(1011,"internal server error",!1)):r<t.length?this.batchSend(t,r):this.batchBuffer.length>0?(this.batchSend(this.batchBuffer),this.batchBuffer=[]):this.awaitingBatchAck=!1})}close(t,e,r){for(let s of this.reqs)s.abort();this.readyState=at.closed;let n=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:t,reason:e,wasClean:r});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",n)):this.onclose(n)}ajax(t,e,r,n,s){let i,a=()=>{this.reqs.delete(i),n()};i=Oi.request(t,this.endpointURL(),e,r,this.timeout,a,o=>{this.reqs.delete(i),this.isActive()&&s(o)}),this.reqs.add(i)}},xy=class En{constructor(e,r={}){let n=r.events||{state:"presence_state",diff:"presence_diff"};this.state=Object.create(null),this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(n.state,s=>{let{onJoin:i,onLeave:a,onSync:o}=this.caller;this.joinRef=this.channel.joinRef(),this.state=En.syncState(this.state,s,i,a),this.pendingDiffs.forEach(l=>{this.state=En.syncDiff(this.state,l,i,a)}),this.pendingDiffs=[],o()}),this.channel.on(n.diff,s=>{let{onJoin:i,onLeave:a,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(s):(this.state=En.syncDiff(this.state,s,i,a),o())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return En.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,r,n,s){let i=this.toNullProtoObj(this.clone(e));r=this.toNullProtoObj(r);let a=Object.create(null),o=Object.create(null);return this.map(i,(l,c)=>{r[l]||(o[l]=c)}),this.map(r,(l,c)=>{let h=i[l];if(h){let d=c.metas.map(w=>w.phx_ref),f=h.metas.map(w=>w.phx_ref),g=c.metas.filter(w=>f.indexOf(w.phx_ref)<0),y=h.metas.filter(w=>d.indexOf(w.phx_ref)<0);g.length>0&&(a[l]=c,a[l].metas=g),y.length>0&&(o[l]=this.clone(h),o[l].metas=y)}else a[l]=c}),this.syncDiff(i,{joins:a,leaves:o},n,s)}static syncDiff(e,r,n,s){e=this.toNullProtoObj(e);let{joins:i,leaves:a}=this.clone(r);return n||(n=function(){}),s||(s=function(){}),this.map(i,(o,l)=>{let c=e[o];if(e[o]=this.clone(l),c){let h=e[o].metas.map(f=>f.phx_ref),d=c.metas.filter(f=>h.indexOf(f.phx_ref)<0);e[o].metas.unshift(...d)}n(o,c,l)}),this.map(a,(o,l)=>{let c=e[o];if(!c)return;let h=l.metas.map(d=>d.phx_ref);c.metas=c.metas.filter(d=>h.indexOf(d.phx_ref)<0),s(o,c,l),c.metas.length===0&&delete e[o]}),e}static list(e,r){return r||(r=function(n,s){return s}),this.map(e,(n,s)=>r(n,s))}static map(e,r){return Object.getOwnPropertyNames(e).map(n=>r(n,e[n]))}static toNullProtoObj(e){if(Object.getPrototypeOf(e)===null)return e;let r=Object.create(null);return Object.getOwnPropertyNames(e).forEach(n=>{r[n]=e[n]}),r}static clone(e){return JSON.parse(JSON.stringify(e))}},Fs={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(t,e){if(t.payload.constructor===ArrayBuffer)return e(this.binaryEncode(t));{let r=[t.join_ref,t.ref,t.topic,t.event,t.payload];return e(JSON.stringify(r))}},decode(t,e){if(t.constructor===ArrayBuffer)return e(this.binaryDecode(t));{let[r,n,s,i,a]=JSON.parse(t);return e({join_ref:r,ref:n,topic:s,event:i,payload:a})}},binaryEncode(t){let{join_ref:e,ref:r,event:n,topic:s,payload:i}=t,a=new TextEncoder,o=a.encode(e),l=a.encode(r),c=a.encode(s),h=a.encode(n);this.assertFieldSize(o.byteLength,"join_ref"),this.assertFieldSize(l.byteLength,"ref"),this.assertFieldSize(c.byteLength,"topic"),this.assertFieldSize(h.byteLength,"event");let d=this.META_LENGTH+o.byteLength+l.byteLength+c.byteLength+h.byteLength,f=new ArrayBuffer(this.HEADER_LENGTH+d),g=new Uint8Array(f),y=new DataView(f),w=0;y.setUint8(w++,this.KINDS.push),y.setUint8(w++,o.byteLength),y.setUint8(w++,l.byteLength),y.setUint8(w++,c.byteLength),y.setUint8(w++,h.byteLength),g.set(o,w),w+=o.byteLength,g.set(l,w),w+=l.byteLength,g.set(c,w),w+=c.byteLength,g.set(h,w),w+=h.byteLength;var x=new Uint8Array(f.byteLength+i.byteLength);return x.set(g,0),x.set(new Uint8Array(i),f.byteLength),x.buffer},assertFieldSize(t,e){if(t>255)throw new Error(`unable to convert ${e} to binary: must be less than or equal to 255 bytes, but is ${t} bytes`)},binaryDecode(t){let e=new DataView(t),r=e.getUint8(0),n=new TextDecoder;switch(r){case this.KINDS.push:return this.decodePush(t,e,n);case this.KINDS.reply:return this.decodeReply(t,e,n);case this.KINDS.broadcast:return this.decodeBroadcast(t,e,n)}},decodePush(t,e,r){let n=e.getUint8(1),s=e.getUint8(2),i=e.getUint8(3),a=this.HEADER_LENGTH+this.META_LENGTH-1,o=r.decode(t.slice(a,a+n));a=a+n;let l=r.decode(t.slice(a,a+s));a=a+s;let c=r.decode(t.slice(a,a+i));a=a+i;let h=t.slice(a,t.byteLength);return{join_ref:o,ref:null,topic:l,event:c,payload:h}},decodeReply(t,e,r){let n=e.getUint8(1),s=e.getUint8(2),i=e.getUint8(3),a=e.getUint8(4),o=this.HEADER_LENGTH+this.META_LENGTH,l=r.decode(t.slice(o,o+n));o=o+n;let c=r.decode(t.slice(o,o+s));o=o+s;let h=r.decode(t.slice(o,o+i));o=o+i;let d=r.decode(t.slice(o,o+a));o=o+a;let f=t.slice(o,t.byteLength),g={status:d,response:f};return{join_ref:l,ref:c,topic:h,event:ft.reply,payload:g}},decodeBroadcast(t,e,r){let n=e.getUint8(1),s=e.getUint8(2),i=this.HEADER_LENGTH+2,a=r.decode(t.slice(i,i+n));i=i+n;let o=r.decode(t.slice(i,i+s));i=i+s;let l=t.slice(i,t.byteLength);return{join_ref:null,ref:null,topic:a,event:o,payload:l}}},_y=class{constructor(t,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||py,this.transport=e.transport||it.WebSocket||wr,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let r=null;try{r=it&&it.sessionStorage}catch{}this.sessionStore=e.sessionStorage||r,this.establishedConnections=0,this.defaultEncoder=Fs.encode.bind(Fs),this.defaultDecoder=Fs.decode.bind(Fs),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==wr?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let n=null;Sr&&Sr.addEventListener&&(Sr.addEventListener("pagehide",s=>{this.conn&&(this.disconnect(),n=this.connectClock)}),Sr.addEventListener("pageshow",s=>{n===this.connectClock&&(n=null,this.connect())}),Sr.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=s=>e.rejoinAfterMs?e.rejoinAfterMs(s):[1e3,2e3,5e3][s-1]||1e4,this.reconnectAfterMs=s=>e.reconnectAfterMs?e.reconnectAfterMs(s):[10,50,100,150,200,250,500,1e3,2e3][s-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(s,i,a)=>{console.log(`${s}: ${i}`,a)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=Hr(e.params||{}),this.endPoint=`${t}/${Xo.websocket}`,this.vsn=e.vsn||fy,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Df(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken&&Hr(e.authToken)}getLongPollTransport(){return wr}replaceTransport(t){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=t}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let t=Oi.appendParams(Oi.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return t.charAt(0)!=="/"?t:t.charAt(1)==="/"?`${this.protocol()}:${t}`:`${this.protocol()}://${location.host}${t}`}disconnect(t,e,r){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,t&&t()},e,r)}connect(t){t&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Hr(t)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==wr?this.connectWithFallback(wr,this.longPollFallbackMs):this.transportConnect())}log(t,e,r){this.logger&&this.logger(t,e,r)}hasLogger(){return this.logger!==null}onOpen(t){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,t]),e}onClose(t){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,t]),e}onError(t){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,t]),e}onMessage(t){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,t]),e}onHeartbeat(t){this.heartbeatCallback=t}ping(t){if(!this.isConnected())return!1;let e=this.makeRef(),r=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let n=this.onMessage(s=>{s.ref===e&&(this.off([n]),t(Date.now()-r))});return!0}transportName(t){switch(t){case wr:return"LongPoll";default:return t.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let t;this.authToken&&(t=["phoenix",`${Yo}${btoa(this.authToken()).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),t),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(t){return this.sessionStore&&this.sessionStore.getItem(t)}storeSession(t,e){this.sessionStore&&this.sessionStore.setItem(t,e)}connectWithFallback(t,e=2500){clearTimeout(this.fallbackTimer);let r=!1,n=!0,s,i,a=this.transportName(t),o=l=>{this.log("transport",`falling back to ${a}...`,l),this.off([s,i]),n=!1,this.replaceTransport(t),this.transportConnect()};if(this.getSession(`phx:fallback:${a}`))return o("memorized");this.fallbackTimer=setTimeout(o,e),i=this.onError(l=>{this.log("transport","error",l),n&&!r&&(clearTimeout(this.fallbackTimer),o(l))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(r=!0,!n){let l=this.transportName(t);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${l}`,"true"),this.log("transport",`established ${l} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(o,e),this.ping(l=>{this.log("transport","connected to primary after",l),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(t){this.log("error","error in heartbeat callback",t)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),my,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(t,e,r){if(!this.conn)return t&&t();const n=this.conn;this.waitForBufferDone(n,()=>{e?n.close(e,r||""):n.close(),this.waitForSocketClosed(n,()=>{this.conn===n&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),t&&t()})})}waitForBufferDone(t,e,r=1){if(r===5||!t.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(t,e,r+1)},150*r)}waitForSocketClosed(t,e,r=1){if(r===5||t.readyState===at.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(t,e,r+1)},150*r)}onConnClose(t){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",t),this.triggerChanError(t),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",t)}onConnError(t){this.hasLogger()&&this.log("transport","error",t);let e=this.transport,r=this.establishedConnections;this.triggerStateCallbacks("error",t,e,r),(e===this.transport||r>0)&&this.triggerChanError(t)}triggerChanError(t){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(ft.error,t)})}connectionState(){switch(this.conn&&this.conn.readyState){case at.connecting:return"connecting";case at.open:return"open";case at.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(t){this.off(t.stateChangeRefs),this.channels=this.channels.filter(e=>e!==t)}off(t){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([r])=>t.indexOf(r)===-1)}channel(t,e={}){let r=new yy(t,e,this);return this.channels.push(r),r}push(t){if(this.hasLogger()){let{topic:e,event:r,payload:n,ref:s,join_ref:i}=t;this.log("push",`${e} ${r} (${i}, ${s})`,n)}this.isConnected()?this.encode(t,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(t,e=>this.conn.send(e)))}makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(t){this.log("error","error in heartbeat callback",t)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(t){this.log("error","error in heartbeat callback",t)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}onConnMessage(t){this.decode(t.data,e=>{let{topic:r,event:n,payload:s,ref:i,join_ref:a}=e;if(i&&i===this.pendingHeartbeatRef){const o=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(s.status==="ok"?"ok":"error",o)}catch(l){this.log("error","error in heartbeat callback",l)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${s.status||""} ${r} ${n} ${i&&"("+i+")"||""}`.trim(),s);for(let o=0;o<this.channels.length;o++){const l=this.channels[o];l.isMember(r,n,s,a)&&l.trigger(n,s,i,a)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(t,...e){try{this.stateChangeCallbacks[t].forEach(([r,n])=>{try{n(...e)}catch(s){this.log("error",`error in ${t} callback`,s)}})}catch(r){this.log("error",`error triggering ${t} callbacks`,r)}}leaveOpenTopic(t){let e=this.channels.find(r=>r.topic===t&&(r.isJoined()||r.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${t}"`),e.leave())}};class Un{constructor(e,r){const n=ky(r);this.presence=new xy(e.getChannel(),n),this.presence.onJoin((s,i,a)=>{const o=Un.onJoinPayload(s,i,a);e.getChannel().trigger("presence",o)}),this.presence.onLeave((s,i,a)=>{const o=Un.onLeavePayload(s,i,a);e.getChannel().trigger("presence",o)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return Un.transformState(this.presence.state)}static transformState(e){return e=by(e),Object.getOwnPropertyNames(e).reduce((r,n)=>{const s=e[n];return r[n]=ai(s),r},{})}static onJoinPayload(e,r,n){const s=Rc(r),i=ai(n);return{event:"join",key:e,currentPresences:s,newPresences:i}}static onLeavePayload(e,r,n){const s=Rc(r),i=ai(n);return{event:"leave",key:e,currentPresences:s,leftPresences:i}}}function ai(t){return t.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function by(t){return JSON.parse(JSON.stringify(t))}function ky(t){return(t==null?void 0:t.events)&&{events:t.events}}function Rc(t){return t!=null&&t.metas?ai(t):[]}var Pc;(function(t){t.SYNC="sync",t.JOIN="join",t.LEAVE="leave"})(Pc||(Pc={}));class Sy{get state(){return this.presenceAdapter.state}constructor(e,r){this.channel=e,this.presenceAdapter=new Un(this.channel.channelAdapter,r)}}function Ey(t){if(t instanceof Error)return t;if(typeof t=="string")return new Error(t);if(t&&typeof t=="object"){const e=t;if(typeof e.code=="number"){const r=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${r}`,{cause:t})}return new Error("channel error: transport failure",{cause:t})}return new Error("channel error: connection lost")}class jy{constructor(e,r,n){const s=Cy(n);this.channel=e.getSocket().channel(r,s),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,r){return this.channel.on(e,r)}off(e,r){this.channel.off(e,r)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,r,n){let s;try{s=this.channel.push(e,r,n)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>sy){const i=this.channel.pushBuffer.shift();i.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${i.event}`,i.payload())}return s}updateJoinPayload(e){const r=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},r),e)}canPush(){return this.socket.isConnected()&&this.state===At.joined}isJoined(){return this.state===At.joined}isJoining(){return this.state===At.joining}isClosed(){return this.state===At.closed}isLeaving(){return this.state===At.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function Cy(t){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config)}}const Ty=/[,()"\\]/,Ny=t=>Ty.test(t)||t!==t.trim(),Ry=t=>`"${t.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`,Ac=t=>{const e=t===null?"null":String(t);return Ny(e)?Ry(e):e},Py=t=>t===null?"null":String(t),Ay=(t,e)=>{if(t==="in"){const r=Array.isArray(e)?e:[e];if(r.length===0)throw new Error("Realtime `in` filter requires at least one value.");return`in.(${Array.from(new Set(r)).map(s=>Ac(s)).join(",")})`}return t==="is"?`is.${Py(e)}`:`${t}.${Ac(e)}`};class Oy{constructor(){this.filters=[]}add(e,r,n,s=!1){const i=s?"not.":"";return this.filters.push(`${e}=${i}${Ay(r,n)}`),this}eq(e,r){return this.add(e,"eq",r)}neq(e,r){return this.add(e,"neq",r)}gt(e,r){return this.add(e,"gt",r)}gte(e,r){return this.add(e,"gte",r)}lt(e,r){return this.add(e,"lt",r)}lte(e,r){return this.add(e,"lte",r)}in(e,r){return this.add(e,"in",r)}like(e,r){return this.add(e,"like",r)}ilike(e,r){return this.add(e,"ilike",r)}match(e,r){return this.add(e,"match",r)}imatch(e,r){return this.add(e,"imatch",r)}is(e,r){return this.add(e,"is",r)}isDistinct(e,r){return this.add(e,"isdistinct",r)}not(e,r,n){return this.add(e,r,n,!0)}build(){return this.filters.join(",")}toString(){return this.build()}}var Oc;(function(t){t.ALL="*",t.INSERT="INSERT",t.UPDATE="UPDATE",t.DELETE="DELETE"})(Oc||(Oc={}));var Dr;(function(t){t.BROADCAST="broadcast",t.PRESENCE="presence",t.POSTGRES_CHANGES="postgres_changes",t.SYSTEM="system"})(Dr||(Dr={}));var pt;(function(t){t.SUBSCRIBED="SUBSCRIBED",t.TIMED_OUT="TIMED_OUT",t.CLOSED="CLOSED",t.CHANNEL_ERROR="CHANNEL_ERROR"})(pt||(pt={}));class Dn{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,r={config:{}},n){var s,i;if(this.topic=e,this.params=r,this.socket=n,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},r.config),this.channelAdapter=new jy(this.socket.socketAdapter,e,this.params),this.presence=new Sy(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=Uf(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((i=(s=this.params.config)===null||s===void 0?void 0:s.broadcast)===null||i===void 0)&&i.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,r=this.timeout){var n,s,i;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:a,presence:o,private:l}}=this.params,c=(s=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(g=>g.filter))!==null&&s!==void 0?s:[],h=!!this.bindings[Dr.PRESENCE]&&this.bindings[Dr.PRESENCE].length>0||((i=this.params.config.presence)===null||i===void 0?void 0:i.enabled)===!0,d={},f={broadcast:a,presence:Object.assign(Object.assign({},o),{enabled:h}),postgres_changes:c,private:l};this.socket.accessTokenValue&&(d.access_token=this.socket.accessTokenValue),this._onError(g=>{e==null||e(pt.CHANNEL_ERROR,Ey(g))}),this._onClose(()=>e==null?void 0:e(pt.CLOSED)),this.updateJoinPayload(Object.assign({config:f},d)),this._updateFilterMessage(),this.channelAdapter.subscribe(r).receive("ok",async({postgres_changes:g})=>{if(this.socket._isManualToken()||this.socket.setAuth(),g===void 0){e==null||e(pt.SUBSCRIBED);return}this._updatePostgresBindings(g,e)}).receive("error",g=>{this.state=At.errored;const y=Object.values(g).join(", ")||"error";e==null||e(pt.CHANNEL_ERROR,new Error(y,{cause:g}))}).receive("timeout",()=>{e==null||e(pt.TIMED_OUT)})}return this}_updatePostgresBindings(e,r){var n;const s=this.bindings.postgres_changes,i=(n=s==null?void 0:s.length)!==null&&n!==void 0?n:0,a=[];for(let o=0;o<i;o++){const l=s[o],{filter:{event:c,schema:h,table:d,filter:f}}=l,g=e&&e[o];if(g&&g.event===c&&Dn.isFilterValueEqual(g.schema,h)&&Dn.isFilterValueEqual(g.table,d)&&Dn.isFilterValueEqual(g.filter,f))a.push(Object.assign(Object.assign({},l),{id:g.id}));else{this.unsubscribe(),this.state=At.errored,r==null||r(pt.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=a,this.state!=At.errored&&r&&r(pt.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,r={}){return await this.send({type:"presence",event:"track",payload:e},r)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,r,n){const s=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),i=e===Dr.PRESENCE||e===Dr.POSTGRES_CHANGES;if(s&&i)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,r,n)}async httpSend(e,r,n={}){var s;if(r==null)return Promise.reject(new Error("Payload is required for httpSend()"));const i=r instanceof ArrayBuffer||ArrayBuffer.isView(r),a={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":i?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(a.Authorization=`Bearer ${this.socket.accessTokenValue}`);const o=new URL(this.broadcastEndpointURL);o.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&o.searchParams.set("private","true");const l={method:"POST",headers:a,body:i?r:JSON.stringify(r)},c=await this._fetchWithTimeout(o.toString(),l,(s=n.timeout)!==null&&s!==void 0?s:this.timeout);if(c.status===202)return{success:!0};if(c.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let h=c.statusText;try{const d=await c.json();h=d.error||d.message||h}catch{}return Promise.reject(new Error(h))}async send(e,r={}){var n,s;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:i,payload:a}=e,o={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(o.Authorization=`Bearer ${this.socket.accessTokenValue}`);const l={method:"POST",headers:o,body:JSON.stringify({messages:[{topic:this.subTopic,event:i,payload:a,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(n=r.timeout)!==null&&n!==void 0?n:this.timeout);return await((s=c.body)===null||s===void 0?void 0:s.cancel()),c.ok?"ok":"error"}catch(c){return c instanceof Error&&c.name==="AbortError"?"timed out":"error"}}else return new Promise(i=>{var a,o,l;const c=this.channelAdapter.push(e.type,e,r.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(o=(a=this.params)===null||a===void 0?void 0:a.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&i("ok"),c.receive("ok",()=>i("ok")),c.receive("error",()=>i("error")),c.receive("timeout",()=>i("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(r=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>r("ok")).receive("timeout",()=>r("timed out")).receive("error",()=>r("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,r,n){const s=new AbortController,i=setTimeout(()=>s.abort(),n),a=await this.socket.fetch(e,Object.assign(Object.assign({},r),{signal:s.signal}));return clearTimeout(i),a}_on(e,r,n){const s=e.toLocaleLowerCase(),i=r==null?void 0:r.filter;(i instanceof Oy||typeof i=="object"&&i!==null&&typeof i.build=="function")&&(r=Object.assign(Object.assign({},r),{filter:i.build()}));const a=this.channelAdapter.on(e,n),o={type:s,filter:r,callback:n,ref:a};return this.bindings[s]?this.bindings[s].push(o):this.bindings[s]=[o],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,r,n)=>{var s,i,a,o,l,c,h;const d=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(d,n))return!1;const f=(s=this.bindings[d])===null||s===void 0?void 0:s.find(g=>g.ref===e.ref);if(!f)return!0;if(["broadcast","presence","postgres_changes"].includes(d))if("id"in f){const g=f.id,y=(i=f.filter)===null||i===void 0?void 0:i.event;return g&&((a=r.ids)===null||a===void 0?void 0:a.includes(g))&&(y==="*"||(y==null?void 0:y.toLocaleLowerCase())===((o=r.data)===null||o===void 0?void 0:o.type.toLocaleLowerCase()))}else{const g=(c=(l=f==null?void 0:f.filter)===null||l===void 0?void 0:l.event)===null||c===void 0?void 0:c.toLocaleLowerCase();return g==="*"||g===((h=r==null?void 0:r.event)===null||h===void 0?void 0:h.toLocaleLowerCase())}else return f.type.toLocaleLowerCase()===d})}_notThisChannelEvent(e,r){const{close:n,error:s,leave:i,join:a}=Lf;return r&&[n,s,i,a].includes(e)&&r!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,r,n)=>{if(typeof r=="object"&&"ids"in r){const s=r.data,{schema:i,table:a,commit_timestamp:o,type:l,errors:c}=s;return Object.assign(Object.assign({},{schema:i,table:a,commit_timestamp:o,eventType:l,new:{},old:{},errors:c}),this._getPayloadRecords(s))}return r})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const r in e.bindings)for(const n of e.bindings[r])this._on(n.type,n.filter,n.callback)}static isFilterValueEqual(e,r){return(e??void 0)===(r??void 0)}_getPayloadRecords(e){const r={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(r.new=Nc(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(r.old=Nc(e.columns,e.old_record)),r}}class Iy{constructor(e,r){this.socket=new _y(e,r)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,r,n,s=1e4){return new Promise(i=>{setTimeout(()=>i("timeout"),s),this.socket.disconnect(()=>{e(),i("ok")},r,n)})}push(e){this.socket.push(e)}log(e,r,n){this.socket.log(e,r,n)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Jo.connecting}isDisconnecting(){return this.socket.connectionState()==Jo.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const Ic={HEARTBEAT_INTERVAL:25e3},Ly=[1e3,2e3,5e3,1e4],$y=1e4;function Uy(){const t=new Map;return{get length(){return t.size},clear(){t.clear()},getItem(e){return t.has(e)?t.get(e):null},key(e){var r;return(r=Array.from(t.keys())[e])!==null&&r!==void 0?r:null},removeItem(e){t.delete(e)},setItem(e,r){t.set(e,String(r))}}}function Dy(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return Uy()}const zy=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class By{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,r){var n;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new iy,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=i=>i?(...a)=>i(...a):(...a)=>fetch(...a),!(!((n=r==null?void 0:r.params)===null||n===void 0)&&n.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=r.params.apikey;const s=this._initializeOptions(r);this.socketAdapter=new Iy(e,s),this.httpEndpoint=Uf(e),this.fetch=this._resolveFetch(r==null?void 0:r.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const r=e.message;throw new Error(`WebSocket not available: ${r}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,r){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,r)}getChannels(){return this.channels}async removeChannel(e){const r=await e.unsubscribe();return r==="ok"&&e.teardown(),r}async removeAllChannels(){const e=this.channels.map(async n=>{const s=await n.unsubscribe();return n.teardown(),s}),r=await Promise.all(e);return await this.disconnect(),r}log(e,r,n){this.socketAdapter.log(e,r,n)}connectionState(){return this.socketAdapter.connectionState()||Jo.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,r={config:{}}){const n=`realtime:${e}`,s=this.getChannels().find(i=>i.topic===n);if(s)return s;{const i=new Dn(`realtime:${e}`,r,this);return this._cancelPendingDisconnect(),this.channels.push(i),i}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(r=>r.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let r,n=!1;if(e)r=e,n=!0;else if(this.accessToken)try{r=await this.accessToken()}catch(s){this.log("error","Error fetching access token from callback",s),r=this.accessTokenValue}else r=this.accessTokenValue;n?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=r&&(this.accessTokenValue=r,this.channels.forEach(s=>{const i={access_token:r,version:ey};r&&s.updateJoinPayload(i),s.joinedOnce&&s.channelAdapter.isJoined()&&s.channelAdapter.push(Lf.access_token,{access_token:r})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(r=>{this.log("error",`Error setting auth in ${e}`,r)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(r=>{this.log("error","error waiting for auth on connect",r)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(r,n)=>{r!=="disconnected"&&(r=="sent"&&this._setAuthSafely(),e&&e(r,n))}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=r=>{this.log("worker","worker error",r.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=r=>{r.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let r;if(e)r=e;else{const n=new Blob([zy],{type:"application/javascript"});r=URL.createObjectURL(n)}return r}_initializeOptions(e){var r,n,s,i,a,o,l,c,h,d,f,g;this.worker=(r=e==null?void 0:e.worker)!==null&&r!==void 0?r:!1,this.accessToken=(n=e==null?void 0:e.accessToken)!==null&&n!==void 0?n:null;const y={};y.timeout=(s=e==null?void 0:e.timeout)!==null&&s!==void 0?s:ny,y.heartbeatIntervalMs=(i=e==null?void 0:e.heartbeatIntervalMs)!==null&&i!==void 0?i:Ic.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(a=e==null?void 0:e.disconnectOnEmptyChannelsAfterMs)!==null&&a!==void 0?a:2*((o=e==null?void 0:e.heartbeatIntervalMs)!==null&&o!==void 0?o:Ic.HEARTBEAT_INTERVAL),y.transport=(l=e==null?void 0:e.transport)!==null&&l!==void 0?l:Yv.getWebSocketConstructor(),y.params=e==null?void 0:e.params,y.logger=e==null?void 0:e.logger,y.heartbeatCallback=this._wrapHeartbeatCallback(e==null?void 0:e.heartbeatCallback),y.sessionStorage=(c=e==null?void 0:e.sessionStorage)!==null&&c!==void 0?c:Dy(),y.reconnectAfterMs=(h=e==null?void 0:e.reconnectAfterMs)!==null&&h!==void 0?h:p=>Ly[p-1]||$y;let w,x;const m=(d=e==null?void 0:e.vsn)!==null&&d!==void 0?d:ry;switch(m){case ty:w=(p,v)=>v(JSON.stringify(p)),x=(p,v)=>v(JSON.parse(p));break;case If:w=this.serializer.encode.bind(this.serializer),x=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${y.vsn}`)}if(y.vsn=m,y.encode=(f=e==null?void 0:e.encode)!==null&&f!==void 0?f:w,y.decode=(g=e==null?void 0:e.decode)!==null&&g!==void 0?g:x,y.beforeReconnect=this._reconnectAuth.bind(this),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,y.params=Object.assign(Object.assign({},y.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl,y.autoSendHeartbeat=!this.worker}return y}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var is=class extends Error{constructor(t,e){var r;super(t),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&((r=e.icebergType)==null?void 0:r.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function Fy(t,e,r){const n=new URL(e,t);if(r)for(const[s,i]of Object.entries(r))i!==void 0&&n.searchParams.set(s,i);return n.toString()}async function My(t){return!t||t.type==="none"?{}:t.type==="bearer"?{Authorization:`Bearer ${t.token}`}:t.type==="header"?{[t.name]:t.value}:t.type==="custom"?await t.getHeaders():{}}function Wy(t){const e=t.fetchImpl??globalThis.fetch;return{async request({method:r,path:n,query:s,body:i,headers:a}){const o=Fy(t.baseUrl,n,s),l=await My(t.auth),c=await e(o,{method:r,headers:{...i?{"Content-Type":"application/json"}:{},...l,...a},body:i?JSON.stringify(i):void 0}),h=await c.text(),d=(c.headers.get("content-type")||"").includes("application/json"),f=d&&h?JSON.parse(h):h;if(!c.ok){const g=d?f:void 0,y=g==null?void 0:g.error;throw new is((y==null?void 0:y.message)??`Request failed with status ${c.status}`,{status:c.status,icebergType:y==null?void 0:y.type,icebergCode:y==null?void 0:y.code,details:g})}return{status:c.status,headers:c.headers,data:f}}}}function Ms(t){return t.join("")}var qy=class{constructor(t,e=""){this.client=t,this.prefix=e}async listNamespaces(t){const e=t?{parent:Ms(t.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(n=>({namespace:n}))}async createNamespace(t,e){const r={namespace:t.namespace,properties:e==null?void 0:e.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:r})).data}async dropNamespace(t){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Ms(t.namespace)}`})}async loadNamespaceMetadata(t){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Ms(t.namespace)}`})).data.properties}}async namespaceExists(t){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Ms(t.namespace)}`}),!0}catch(e){if(e instanceof is&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(t,e){try{return await this.createNamespace(t,e)}catch(r){if(r instanceof is&&r.status===409)return;throw r}}};function xr(t){return t.join("")}var Hy=class{constructor(t,e="",r){this.client=t,this.prefix=e,this.accessDelegation=r}async listTables(t){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${xr(t.namespace)}/tables`})).data.identifiers}async createTable(t,e){const r={};return this.accessDelegation&&(r["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${xr(t.namespace)}/tables`,body:e,headers:r})).data.metadata}async updateTable(t,e){const r=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${xr(t.namespace)}/tables/${t.name}`,body:e});return{"metadata-location":r.data["metadata-location"],metadata:r.data.metadata}}async dropTable(t,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${xr(t.namespace)}/tables/${t.name}`,query:{purgeRequested:String((e==null?void 0:e.purge)??!1)}})}async loadTable(t){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${xr(t.namespace)}/tables/${t.name}`,headers:e})).data.metadata}async tableExists(t){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${xr(t.namespace)}/tables/${t.name}`,headers:e}),!0}catch(r){if(r instanceof is&&r.status===404)return!1;throw r}}async createTableIfNotExists(t,e){try{return await this.createTable(t,e)}catch(r){if(r instanceof is&&r.status===409)return await this.loadTable({namespace:t.namespace,name:e.name});throw r}}},Vy=class{constructor(t){var n;let e="v1";t.catalogName&&(e+=`/${t.catalogName}`);const r=t.baseUrl.endsWith("/")?t.baseUrl:`${t.baseUrl}/`;this.client=Wy({baseUrl:r,auth:t.auth,fetchImpl:t.fetch}),this.accessDelegation=(n=t.accessDelegation)==null?void 0:n.join(","),this.namespaceOps=new qy(this.client,e),this.tableOps=new Hy(this.client,e,this.accessDelegation)}async listNamespaces(t){return this.namespaceOps.listNamespaces(t)}async createNamespace(t,e){return this.namespaceOps.createNamespace(t,e)}async dropNamespace(t){await this.namespaceOps.dropNamespace(t)}async loadNamespaceMetadata(t){return this.namespaceOps.loadNamespaceMetadata(t)}async listTables(t){return this.tableOps.listTables(t)}async createTable(t,e){return this.tableOps.createTable(t,e)}async updateTable(t,e){return this.tableOps.updateTable(t,e)}async dropTable(t,e){await this.tableOps.dropTable(t,e)}async loadTable(t){return this.tableOps.loadTable(t)}async namespaceExists(t){return this.namespaceOps.namespaceExists(t)}async tableExists(t){return this.tableOps.tableExists(t)}async createNamespaceIfNotExists(t,e){return this.namespaceOps.createNamespaceIfNotExists(t,e)}async createTableIfNotExists(t,e){return this.tableOps.createTableIfNotExists(t,e)}};function as(t){"@babel/helpers - typeof";return as=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},as(t)}function Ky(t,e){if(as(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(as(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Gy(t){var e=Ky(t,"string");return as(e)=="symbol"?e:e+""}function Jy(t,e,r){return(e=Gy(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Lc(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,n)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Lc(Object(r),!0).forEach(function(n){Jy(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Lc(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}var oa=class extends Error{constructor(t,e="storage",r,n){super(t),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=r,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function la(t){return typeof t=="object"&&t!==null&&"__isStorageError"in t}var Zo=class extends oa{constructor(t,e,r,n="storage"){super(t,n,e,r),this.name=n==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=r}toJSON(){return A({},super.toJSON())}},zf=class extends oa{constructor(t,e,r="storage"){super(t,r),this.name=r==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function Ii(t,e,r){const n=A({},t),s=e.toLowerCase();for(const i of Object.keys(n))i.toLowerCase()===s&&delete n[i];return n[s]=r,n}function Qy(t){const e={};for(const[r,n]of Object.entries(t))e[r.toLowerCase()]=n;return e}const Xy=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),Yy=t=>{if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},el=t=>{if(Array.isArray(t))return t.map(r=>el(r));if(typeof t=="function"||t!==Object(t))return t;const e={};return Object.entries(t).forEach(([r,n])=>{const s=r.replace(/([-_][a-z])/gi,i=>i.toUpperCase().replace(/[-_]/g,""));e[s]=el(n)}),e},Zy=t=>!t||typeof t!="string"||t.length===0||t.length>100||t.trim()!==t||t.includes("/")||t.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(t),Bf=t=>t.split("/").map(encodeURIComponent).join("/"),$c=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const r=e.error;if(typeof r.message=="string")return r.message}}return JSON.stringify(t)},e0=async(t,e,r,n)=>{if(t!==null&&typeof t=="object"&&"json"in t&&typeof t.json=="function"){const s=t;let i=parseInt(String(s.status),10);Number.isFinite(i)||(i=500),s.json().then(a=>{const o=(a==null?void 0:a.statusCode)||(a==null?void 0:a.code)||i+"";e(new Zo($c(a),i,o,n))}).catch(()=>{const a=i+"";e(new Zo(s.statusText||`HTTP ${i} error`,i,a,n))})}else e(new zf($c(t),t,n))},t0=(t,e,r,n)=>{const s={method:t,headers:(e==null?void 0:e.headers)||{}};if(t==="GET"||t==="HEAD"||!n)return A(A({},s),r);if(Yy(n)){var i;const a=(e==null?void 0:e.headers)||{};let o;for(const[l,c]of Object.entries(a))l.toLowerCase()==="content-type"&&(o=c);s.headers=Ii(a,"Content-Type",(i=o)!==null&&i!==void 0?i:"application/json"),s.body=JSON.stringify(n)}else s.body=n;return e!=null&&e.duplex&&(s.duplex=e.duplex),A(A({},s),r)};async function xn(t,e,r,n,s,i,a){return new Promise((o,l)=>{t(r,t0(e,n,s,i)).then(c=>{if(!c.ok)throw c;if(n!=null&&n.noResolveJson)return c;if(a==="vectors"){const h=c.headers.get("content-type");if(c.headers.get("content-length")==="0"||c.status===204)return{};if(!h||!h.includes("application/json"))return{}}return c.json()}).then(c=>o(c)).catch(c=>e0(c,l,n,a))})}function Ff(t="storage"){return{get:async(e,r,n,s)=>xn(e,"GET",r,n,s,void 0,t),post:async(e,r,n,s,i)=>xn(e,"POST",r,s,i,n,t),put:async(e,r,n,s,i)=>xn(e,"PUT",r,s,i,n,t),head:async(e,r,n,s)=>xn(e,"HEAD",r,A(A({},n),{},{noResolveJson:!0}),s,void 0,t),remove:async(e,r,n,s,i)=>xn(e,"DELETE",r,s,i,n,t)}}const r0=Ff("storage"),{get:os,post:Je,put:tl,head:n0,remove:ls}=r0,Pe=Ff("vectors");var ln=class{constructor(t,e={},r,n="storage"){this.shouldThrowOnError=!1,this.url=t,this.headers=Qy(e),this.fetch=Xy(r),this.namespace=n}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,e){return this.headers=Ii(this.headers,t,e),this}async handleOperation(t){var e=this;try{return{data:await t(),error:null}}catch(r){if(e.shouldThrowOnError)throw r;if(la(r))return{data:null,error:r};throw r}}};let Mf;Mf=Symbol.toStringTag;var s0=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[Mf]="StreamDownloadBuilder",this.promise=null}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:(await t.downloadFn()).body,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(la(e))return{data:null,error:e};throw e}}};let Wf;Wf=Symbol.toStringTag;var i0=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[Wf]="BlobDownloadBuilder",this.promise=null}asStream(){return new s0(this.downloadFn,this.shouldThrowOnError)}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:await(await t.downloadFn()).blob(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(la(e))return{data:null,error:e};throw e}}};const Ba={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Uc={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var a0=class extends ln{constructor(t,e={},r,n){super(t,e,n,"storage"),this.bucketId=r}async uploadOrUpdate(t,e,r,n){var s=this;return s.handleOperation(async()=>{let i;const a=A(A({},Uc),n);let o=A(A({},s.headers),t==="POST"&&{"x-upsert":String(a.upsert)});const l=a.metadata;if(typeof Blob<"u"&&r instanceof Blob?(i=new FormData,i.append("cacheControl",a.cacheControl),l&&i.append("metadata",s.encodeMetadata(l)),i.append("",r)):typeof FormData<"u"&&r instanceof FormData?(i=r,i.has("cacheControl")||i.append("cacheControl",a.cacheControl),l&&!i.has("metadata")&&i.append("metadata",s.encodeMetadata(l))):(i=r,o["cache-control"]=`max-age=${a.cacheControl}`,o["content-type"]=a.contentType,l&&(o["x-metadata"]=s.toBase64(s.encodeMetadata(l))),(typeof ReadableStream<"u"&&i instanceof ReadableStream||i&&typeof i=="object"&&"pipe"in i&&typeof i.pipe=="function")&&!a.duplex&&(a.duplex="half")),n!=null&&n.headers)for(const[f,g]of Object.entries(n.headers))o=Ii(o,f,g);const c=s._removeEmptyFolders(e),h=s._getFinalPath(c),d=await(t=="PUT"?tl:Je)(s.fetch,`${s.url}/object/${h}`,i,A({headers:o},a!=null&&a.duplex?{duplex:a.duplex}:{}));return{path:c,id:d.Id,fullPath:d.Key}})}async upload(t,e,r){return this.uploadOrUpdate("POST",t,e,r)}async uploadToSignedUrl(t,e,r,n){var s=this;const i=s._removeEmptyFolders(t),a=s._getFinalPath(i),o=new URL(s.url+`/object/upload/sign/${a}`);return o.searchParams.set("token",e),s.handleOperation(async()=>{let l;const c=A(A({},Uc),n);let h=A(A({},s.headers),{"x-upsert":String(c.upsert)});const d=c.metadata;if(typeof Blob<"u"&&r instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),d&&l.append("metadata",s.encodeMetadata(d)),l.append("",r)):typeof FormData<"u"&&r instanceof FormData?(l=r,l.has("cacheControl")||l.append("cacheControl",c.cacheControl),d&&!l.has("metadata")&&l.append("metadata",s.encodeMetadata(d))):(l=r,h["cache-control"]=`max-age=${c.cacheControl}`,h["content-type"]=c.contentType,d&&(h["x-metadata"]=s.toBase64(s.encodeMetadata(d))),(typeof ReadableStream<"u"&&l instanceof ReadableStream||l&&typeof l=="object"&&"pipe"in l&&typeof l.pipe=="function")&&!c.duplex&&(c.duplex="half")),n!=null&&n.headers)for(const[f,g]of Object.entries(n.headers))h=Ii(h,f,g);return{path:i,fullPath:(await tl(s.fetch,o.toString(),l,A({headers:h},c!=null&&c.duplex?{duplex:c.duplex}:{}))).Key}})}async createSignedUploadUrl(t,e){var r=this;return r.handleOperation(async()=>{let n=r._getFinalPath(t);const s=A({},r.headers);e!=null&&e.upsert&&(s["x-upsert"]="true");const i=await Je(r.fetch,`${r.url}/object/upload/sign/${n}`,{},{headers:s}),a=new URL(r.url+i.url),o=a.searchParams.get("token");if(!o)throw new oa("No token returned by API");return{signedUrl:a.toString(),path:t,token:o}})}async update(t,e,r){return this.uploadOrUpdate("PUT",t,e,r)}async move(t,e,r){var n=this;return n.handleOperation(async()=>await Je(n.fetch,`${n.url}/object/move`,{bucketId:n.bucketId,sourceKey:t,destinationKey:e,destinationBucket:r==null?void 0:r.destinationBucket},{headers:n.headers}))}async copy(t,e,r){var n=this;return n.handleOperation(async()=>({path:(await Je(n.fetch,`${n.url}/object/copy`,{bucketId:n.bucketId,sourceKey:t,destinationKey:e,destinationBucket:r==null?void 0:r.destinationBucket},{headers:n.headers})).Key}))}async createSignedUrl(t,e,r){var n=this;return n.handleOperation(async()=>{let s=n._getFinalPath(t);const i=typeof(r==null?void 0:r.transform)=="object"&&r.transform!==null&&Object.keys(r.transform).length>0;let a=await Je(n.fetch,`${n.url}/object/sign/${s}`,A({expiresIn:e},i?{transform:r.transform}:{}),{headers:n.headers});const o=new URLSearchParams;r!=null&&r.download&&o.set("download",r.download===!0?"":r.download),(r==null?void 0:r.cacheNonce)!=null&&o.set("cacheNonce",String(r.cacheNonce));const l=o.toString();return{signedUrl:encodeURI(`${n.url}${a.signedURL}${l?`&${l}`:""}`)}})}async createSignedUrls(t,e,r){var n=this;return n.handleOperation(async()=>{const s=await Je(n.fetch,`${n.url}/object/sign/${n.bucketId}`,{expiresIn:e,paths:t},{headers:n.headers}),i=new URLSearchParams;r!=null&&r.download&&i.set("download",r.download===!0?"":r.download),(r==null?void 0:r.cacheNonce)!=null&&i.set("cacheNonce",String(r.cacheNonce));const a=i.toString();return s.map(o=>A(A({},o),{},{signedUrl:o.signedURL?encodeURI(`${n.url}${o.signedURL}${a?`&${a}`:""}`):null}))})}download(t,e,r){const n=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",s=new URLSearchParams;e!=null&&e.transform&&this.applyTransformOptsToQuery(s,e.transform),(e==null?void 0:e.cacheNonce)!=null&&s.set("cacheNonce",String(e.cacheNonce));const i=s.toString(),a=this._getFinalPath(t),o=()=>os(this.fetch,`${this.url}/${n}/${a}${i?`?${i}`:""}`,{headers:this.headers,noResolveJson:!0},r);return new i0(o,this.shouldThrowOnError)}async info(t){var e=this;const r=e._getFinalPath(t);return e.handleOperation(async()=>el(await os(e.fetch,`${e.url}/object/info/${r}`,{headers:e.headers})))}async exists(t){var e=this;const r=e._getFinalPath(t);try{return await n0(e.fetch,`${e.url}/object/${r}`,{headers:e.headers}),{data:!0,error:null}}catch(s){if(e.shouldThrowOnError)throw s;if(la(s)){var n;const i=s instanceof Zo?s.status:s instanceof zf?(n=s.originalError)===null||n===void 0?void 0:n.status:void 0;if(i!==void 0&&[400,404].includes(i))return{data:!1,error:s}}throw s}}getPublicUrl(t,e){const r=this._getFinalPath(t),n=new URLSearchParams;e!=null&&e.download&&n.set("download",e.download===!0?"":e.download),e!=null&&e.transform&&this.applyTransformOptsToQuery(n,e.transform),(e==null?void 0:e.cacheNonce)!=null&&n.set("cacheNonce",String(e.cacheNonce));const s=n.toString(),i=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${i}/public/${r}`)+(s?`?${s}`:"")}}}async remove(t){var e=this;return e.handleOperation(async()=>await ls(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:t},{headers:e.headers}))}async purgeCache(t,e,r){var n=this;return n.handleOperation(async()=>{const s=Bf(n._getFinalPath(t)),i=new URLSearchParams;e!=null&&e.transformations&&i.set("transformations","true");const a=i.toString();return await ls(n.fetch,`${n.url}/cdn/${s}${a?`?${a}`:""}`,{},{headers:n.headers},r)})}async list(t,e,r){var n=this;return n.handleOperation(async()=>{const s=e!=null&&e.sortBy?A(A({},Ba.sortBy),e.sortBy):Ba.sortBy,i=A(A(A({},Ba),e),{},{sortBy:s,prefix:t||""});return await Je(n.fetch,`${n.url}/object/list/${n.bucketId}`,i,{headers:n.headers},r)})}async listV2(t,e){var r=this;return r.handleOperation(async()=>{const n=A({},t);return await Je(r.fetch,`${r.url}/object/list-v2/${r.bucketId}`,n,{headers:r.headers},e)})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(t,e){return e.width&&t.set("width",e.width.toString()),e.height&&t.set("height",e.height.toString()),e.resize&&t.set("resize",e.resize),e.format&&t.set("format",e.format),e.quality&&t.set("quality",e.quality.toString()),t}};const o0="2.110.8",ys={"X-Client-Info":`storage-js/${o0}`};var l0=class extends ln{constructor(t,e={},r,n){const s=new URL(t);n!=null&&n.useNewHostname&&/supabase\.(co|in|red)$/.test(s.hostname)&&!s.hostname.includes("storage.supabase.")&&(s.hostname=s.hostname.replace("supabase.","storage.supabase."));const i=s.href.replace(/\/$/,""),a=A(A({},ys),e);super(i,a,r,"storage")}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const r=e.listBucketOptionsToQueryString(t);return await os(e.fetch,`${e.url}/bucket${r}`,{headers:e.headers})})}async getBucket(t){var e=this;return e.handleOperation(async()=>await os(e.fetch,`${e.url}/bucket/${t}`,{headers:e.headers}))}async createBucket(t,e={public:!1}){var r=this;return r.handleOperation(async()=>await Je(r.fetch,`${r.url}/bucket`,{id:t,name:t,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:r.headers}))}async updateBucket(t,e){var r=this;return r.handleOperation(async()=>await tl(r.fetch,`${r.url}/bucket/${t}`,{id:t,name:t,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:r.headers}))}async emptyBucket(t){var e=this;return e.handleOperation(async()=>await Je(e.fetch,`${e.url}/bucket/${t}/empty`,{},{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await ls(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}async purgeBucketCache(t,e,r){var n=this;return n.handleOperation(async()=>{const s=new URLSearchParams;e!=null&&e.transformations&&s.set("transformations","true");const i=s.toString();return await ls(n.fetch,`${n.url}/cdn/${Bf(t)}${i?`?${i}`:""}`,{},{headers:n.headers},r)})}listBucketOptionsToQueryString(t){const e={};return t&&("limit"in t&&(e.limit=String(t.limit)),"offset"in t&&(e.offset=String(t.offset)),t.search&&(e.search=t.search),t.sortColumn&&(e.sortColumn=t.sortColumn),t.sortOrder&&(e.sortOrder=t.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},u0=class extends ln{constructor(t,e={},r){const n=t.replace(/\/$/,""),s=A(A({},ys),e);super(n,s,r,"storage")}async createBucket(t){var e=this;return e.handleOperation(async()=>await Je(e.fetch,`${e.url}/bucket`,{name:t},{headers:e.headers}))}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const r=new URLSearchParams;(t==null?void 0:t.limit)!==void 0&&r.set("limit",t.limit.toString()),(t==null?void 0:t.offset)!==void 0&&r.set("offset",t.offset.toString()),t!=null&&t.sortColumn&&r.set("sortColumn",t.sortColumn),t!=null&&t.sortOrder&&r.set("sortOrder",t.sortOrder),t!=null&&t.search&&r.set("search",t.search);const n=r.toString(),s=n?`${e.url}/bucket?${n}`:`${e.url}/bucket`;return await os(e.fetch,s,{headers:e.headers})})}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await ls(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}from(t){var e=this;if(!Zy(t))throw new oa("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const r=new Vy({baseUrl:this.url,catalogName:t,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),n=this.shouldThrowOnError;return new Proxy(r,{get(s,i){const a=s[i];return typeof a!="function"?a:async(...o)=>{try{return{data:await a.apply(s,o),error:null}}catch(l){if(n)throw l;return{data:null,error:l}}}}})}},c0=class extends ln{constructor(t,e={},r){const n=t.replace(/\/$/,""),s=A(A({},ys),{},{"Content-Type":"application/json"},e);super(n,s,r,"vectors")}async createIndex(t){var e=this;return e.handleOperation(async()=>await Pe.post(e.fetch,`${e.url}/CreateIndex`,t,{headers:e.headers})||{})}async getIndex(t,e){var r=this;return r.handleOperation(async()=>await Pe.post(r.fetch,`${r.url}/GetIndex`,{vectorBucketName:t,indexName:e},{headers:r.headers}))}async listIndexes(t){var e=this;return e.handleOperation(async()=>await Pe.post(e.fetch,`${e.url}/ListIndexes`,t,{headers:e.headers}))}async deleteIndex(t,e){var r=this;return r.handleOperation(async()=>await Pe.post(r.fetch,`${r.url}/DeleteIndex`,{vectorBucketName:t,indexName:e},{headers:r.headers})||{})}},d0=class extends ln{constructor(t,e={},r){const n=t.replace(/\/$/,""),s=A(A({},ys),{},{"Content-Type":"application/json"},e);super(n,s,r,"vectors")}async putVectors(t){var e=this;if(t.vectors.length<1||t.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await Pe.post(e.fetch,`${e.url}/PutVectors`,t,{headers:e.headers})||{})}async getVectors(t){var e=this;return e.handleOperation(async()=>await Pe.post(e.fetch,`${e.url}/GetVectors`,t,{headers:e.headers}))}async listVectors(t){var e=this;if(t.segmentCount!==void 0){if(t.segmentCount<1||t.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(t.segmentIndex!==void 0&&(t.segmentIndex<0||t.segmentIndex>=t.segmentCount))throw new Error(`segmentIndex must be between 0 and ${t.segmentCount-1}`)}return e.handleOperation(async()=>await Pe.post(e.fetch,`${e.url}/ListVectors`,t,{headers:e.headers}))}async queryVectors(t){var e=this;return e.handleOperation(async()=>await Pe.post(e.fetch,`${e.url}/QueryVectors`,t,{headers:e.headers}))}async deleteVectors(t){var e=this;if(t.keys.length<1||t.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await Pe.post(e.fetch,`${e.url}/DeleteVectors`,t,{headers:e.headers})||{})}},h0=class extends ln{constructor(t,e={},r){const n=t.replace(/\/$/,""),s=A(A({},ys),{},{"Content-Type":"application/json"},e);super(n,s,r,"vectors")}async createBucket(t){var e=this;return e.handleOperation(async()=>await Pe.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}async getBucket(t){var e=this;return e.handleOperation(async()=>await Pe.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:t},{headers:e.headers}))}async listBuckets(t={}){var e=this;return e.handleOperation(async()=>await Pe.post(e.fetch,`${e.url}/ListVectorBuckets`,t,{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await Pe.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}},f0=class extends h0{constructor(t,e={}){super(t,e.headers||{},e.fetch)}from(t){return new p0(this.url,this.headers,t,this.fetch)}async createBucket(t){var e=()=>super.createBucket,r=this;return e().call(r,t)}async getBucket(t){var e=()=>super.getBucket,r=this;return e().call(r,t)}async listBuckets(t={}){var e=()=>super.listBuckets,r=this;return e().call(r,t)}async deleteBucket(t){var e=()=>super.deleteBucket,r=this;return e().call(r,t)}},p0=class extends c0{constructor(t,e,r,n){super(t,e,n),this.vectorBucketName=r}async createIndex(t){var e=()=>super.createIndex,r=this;return e().call(r,A(A({},t),{},{vectorBucketName:r.vectorBucketName}))}async listIndexes(t={}){var e=()=>super.listIndexes,r=this;return e().call(r,A(A({},t),{},{vectorBucketName:r.vectorBucketName}))}async getIndex(t){var e=()=>super.getIndex,r=this;return e().call(r,r.vectorBucketName,t)}async deleteIndex(t){var e=()=>super.deleteIndex,r=this;return e().call(r,r.vectorBucketName,t)}index(t){return new m0(this.url,this.headers,this.vectorBucketName,t,this.fetch)}},m0=class extends d0{constructor(t,e,r,n,s){super(t,e,s),this.vectorBucketName=r,this.indexName=n}async putVectors(t){var e=()=>super.putVectors,r=this;return e().call(r,A(A({},t),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async getVectors(t){var e=()=>super.getVectors,r=this;return e().call(r,A(A({},t),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async listVectors(t={}){var e=()=>super.listVectors,r=this;return e().call(r,A(A({},t),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async queryVectors(t){var e=()=>super.queryVectors,r=this;return e().call(r,A(A({},t),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async deleteVectors(t){var e=()=>super.deleteVectors,r=this;return e().call(r,A(A({},t),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}},g0=class extends l0{constructor(t,e={},r,n){super(t,e,r,n)}from(t){return new a0(this.url,this.headers,t,this.fetch)}get vectors(){return new f0(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new u0(this.url+"/iceberg",this.headers,this.fetch)}};const qf="2.110.8",mt=30*1e3,jn=3,Fa=jn*mt,v0=2*mt,y0="http://localhost:9999",w0="supabase.auth.token",x0={"X-Client-Info":`gotrue-js/${qf}`},rl="X-Supabase-Api-Version",Hf={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},_0=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,b0=10*60*1e3;class us extends Error{constructor(e,r,n){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=r,this.code=n}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function C(t){return typeof t=="object"&&t!==null&&"__isAuthError"in t}class k0 extends us{constructor(e,r,n){super(e,r,n),this.name="AuthApiError",this.status=r,this.code=n}}function S0(t){return C(t)&&t.name==="AuthApiError"}class Ye extends us{constructor(e,r){super(e),this.name="AuthUnknownError",this.originalError=r}}class ct extends us{constructor(e,r,n,s){super(e,n,s),this.name=r,this.status=n}}class ae extends ct{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Ws(t){return C(t)&&t.name==="AuthSessionMissingError"}class _r extends ct{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class qs extends ct{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Hs extends ct{constructor(e,r=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=r}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function E0(t){return C(t)&&t.name==="AuthImplicitGrantRedirectError"}class Dc extends ct{constructor(e,r=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=r}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class j0 extends ct{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class nl extends ct{constructor(e,r){super(e,"AuthRetryableFetchError",r,void 0)}}function Vs(t){return C(t)&&t.name==="AuthRetryableFetchError"}class zc extends ct{constructor(e="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(e,"AuthRefreshDiscardedError",409,void 0)}}function C0(t){return C(t)&&t.name==="AuthRefreshDiscardedError"}class Bc extends ct{constructor(e,r,n){super(e,"AuthWeakPasswordError",r,"weak_password"),this.reasons=n}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class Li extends ct{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const $i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Fc=` 	
\r=`.split(""),T0=(()=>{const t=new Array(128);for(let e=0;e<t.length;e+=1)t[e]=-1;for(let e=0;e<Fc.length;e+=1)t[Fc[e].charCodeAt(0)]=-2;for(let e=0;e<$i.length;e+=1)t[$i[e].charCodeAt(0)]=e;return t})();function Mc(t,e,r){if(t!==null)for(e.queue=e.queue<<8|t,e.queuedBits+=8;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;r($i[n]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;r($i[n]),e.queuedBits-=6}}function Vf(t,e,r){const n=T0[t];if(n>-1)for(e.queue=e.queue<<6|n,e.queuedBits+=6;e.queuedBits>=8;)r(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`)}}function Wc(t){const e=[],r=a=>{e.push(String.fromCodePoint(a))},n={utf8seq:0,codepoint:0},s={queue:0,queuedBits:0},i=a=>{P0(a,n,r)};for(let a=0;a<t.length;a+=1)Vf(t.charCodeAt(a),s,i);return e.join("")}function N0(t,e){if(t<=127){e(t);return}else if(t<=2047){e(192|t>>6),e(128|t&63);return}else if(t<=65535){e(224|t>>12),e(128|t>>6&63),e(128|t&63);return}else if(t<=1114111){e(240|t>>18),e(128|t>>12&63),e(128|t>>6&63),e(128|t&63);return}throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)}function R0(t,e){for(let r=0;r<t.length;r+=1){let n=t.charCodeAt(r);if(n>55295&&n<=56319){const s=(n-55296)*1024&65535;n=(t.charCodeAt(r+1)-56320&65535|s)+65536,r+=1}N0(n,e)}}function P0(t,e,r){if(e.utf8seq===0){if(t<=127){r(t);return}for(let n=1;n<6;n+=1)if(!(t>>7-n&1)){e.utf8seq=n;break}if(e.utf8seq===2)e.codepoint=t&31;else if(e.utf8seq===3)e.codepoint=t&15;else if(e.utf8seq===4)e.codepoint=t&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(t<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|t&63,e.utf8seq-=1,e.utf8seq===0&&r(e.codepoint)}}function Vr(t){const e=[],r={queue:0,queuedBits:0},n=s=>{e.push(s)};for(let s=0;s<t.length;s+=1)Vf(t.charCodeAt(s),r,n);return new Uint8Array(e)}function A0(t){const e=[];return R0(t,r=>e.push(r)),new Uint8Array(e)}function lr(t){const e=[],r={queue:0,queuedBits:0},n=s=>{e.push(s)};return t.forEach(s=>Mc(s,r,n)),Mc(null,r,n),e.join("")}function O0(t){return Math.round(Date.now()/1e3)+t}function I0(){return Symbol("auth-callback")}const pe=()=>typeof window<"u"&&typeof document<"u",Zt={tested:!1,writable:!1},Kf=()=>{if(!pe())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Zt.tested)return Zt.writable;const t=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(t,t),globalThis.localStorage.removeItem(t),Zt.tested=!0,Zt.writable=!0}catch{Zt.tested=!0,Zt.writable=!1}return Zt.writable};function L0(t){const e={},r=new URL(t);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((s,i)=>{e[i]=s})}catch{}return r.searchParams.forEach((n,s)=>{e[s]=n}),e}const Gf=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),$0=t=>typeof t=="object"&&t!==null&&"status"in t&&"ok"in t&&"json"in t&&typeof t.json=="function",Er=async(t,e,r)=>{await t.setItem(e,JSON.stringify(r))},Ve=async(t,e)=>{const r=await t.getItem(e);if(!r)return null;try{return JSON.parse(r)}catch{return null}},ee=async(t,e)=>{await t.removeItem(e)};class ua{constructor(){this.promise=new ua.promiseConstructor((e,r)=>{this.resolve=e,this.reject=r})}}ua.promiseConstructor=Promise;function Ks(t){const e=t.split(".");if(e.length!==3)throw new Li("Invalid JWT structure");for(let n=0;n<e.length;n++)if(!_0.test(e[n]))throw new Li("JWT not in base64url format");return{header:JSON.parse(Wc(e[0])),payload:JSON.parse(Wc(e[1])),signature:Vr(e[2]),raw:{header:e[0],payload:e[1]}}}async function U0(t){return await new Promise(e=>{setTimeout(()=>e(null),t)})}function D0(t,e){return new Promise((n,s)=>{(async()=>{for(let i=0;i<1/0;i++)try{const a=await t(i);if(!e(i,null,a)){n(a);return}}catch(a){if(!e(i,a)){s(a);return}}})()})}function z0(t){return("0"+t.toString(16)).substr(-2)}function B0(){const e=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=r.length;let s="";for(let i=0;i<56;i++)s+=r.charAt(Math.floor(Math.random()*n));return s}return crypto.getRandomValues(e),Array.from(e,z0).join("")}async function F0(t){const r=new TextEncoder().encode(t),n=await crypto.subtle.digest("SHA-256",r),s=new Uint8Array(n);return Array.from(s).map(i=>String.fromCharCode(i)).join("")}async function M0(t){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),t;const r=await F0(t);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function er(t,e,r=!1){const n=B0();let s=n;r&&(s+="/recovery"),await Er(t,`${e}-code-verifier`,s);const i=await M0(n);return[i,n===i?"plain":"s256"]}const W0=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function q0(t){const e=t.headers.get(rl);if(!e||!e.match(W0))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function H0(t){if(!t)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(t<=e)throw new Error("JWT has expired")}function V0(t){switch(t){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const K0=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function dt(t){if(!K0.test(t))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Ke(t){if(!t.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function Ma(){const t={};return new Proxy(t,{get:(e,r)=>{if(r==="__isUserNotAvailableProxy")return!0;if(typeof r=="symbol"){const n=r.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function G0(t,e){return new Proxy(t,{get:(r,n,s)=>{if(n==="__isInsecureUserWarningProxy")return!0;if(typeof n=="symbol"){const i=n.toString();if(i==="Symbol(Symbol.toPrimitive)"||i==="Symbol(Symbol.toStringTag)"||i==="Symbol(util.inspect.custom)"||i==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(r,n,s)}return!e.value&&typeof n=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(r,n,s)}})}function qc(t){return JSON.parse(JSON.stringify(t))}const nr=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(t)},J0=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function Hc(t){var e;if(!$0(t))throw new nl(nr(t),0);if(J0.includes(t.status))throw new nl(nr(t),t.status);let r;try{r=await t.json()}catch(i){throw new Ye(nr(i),i)}let n;const s=q0(t);if(s&&s.getTime()>=Hf["2024-01-01"].timestamp&&typeof r=="object"&&r&&typeof r.code=="string"?n=r.code:typeof r=="object"&&r&&typeof r.error_code=="string"&&(n=r.error_code),n){if(n==="weak_password")throw new Bc(nr(r),t.status,((e=r.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(n==="session_not_found")throw new ae}else if(typeof r=="object"&&r&&typeof r.weak_password=="object"&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce((i,a)=>i&&typeof a=="string",!0))throw new Bc(nr(r),t.status,r.weak_password.reasons);throw new k0(nr(r),t.status||500,n)}const Q0=(t,e,r,n)=>{const s={method:t,headers:(e==null?void 0:e.headers)||{}};return t==="GET"?s:(s.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),s.body=JSON.stringify(n),Object.assign(Object.assign({},s),r))};async function P(t,e,r,n){var s;const i=Object.assign({},n==null?void 0:n.headers);i[rl]||(i[rl]=Hf["2024-01-01"].name),n!=null&&n.jwt&&(i.Authorization=`Bearer ${n.jwt}`);const a=(s=n==null?void 0:n.query)!==null&&s!==void 0?s:{};n!=null&&n.redirectTo&&(a.redirect_to=n.redirectTo);const o=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await X0(t,e,r+o,{headers:i,noResolveJson:n==null?void 0:n.noResolveJson},{},n==null?void 0:n.body);return n!=null&&n.xform?n==null?void 0:n.xform(l):{data:Object.assign({},l),error:null}}async function X0(t,e,r,n,s,i){const a=Q0(e,n,s,i);let o;try{o=await t(r,Object.assign({},a))}catch(l){throw new nl(nr(l),0)}if(o.ok||await Hc(o),n!=null&&n.noResolveJson)return o;try{return await o.json()}catch(l){await Hc(l)}}function De(t){var e;let r=null;ew(t)&&(r=Object.assign({},t),t.expires_at||(r.expires_at=O0(t.expires_in)));const n=(e=t.user)!==null&&e!==void 0?e:typeof(t==null?void 0:t.id)=="string"?t:null;return{data:{session:r,user:n},error:null}}function Vc(t){const e=De(t);return!e.error&&t.weak_password&&typeof t.weak_password=="object"&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.message&&typeof t.weak_password.message=="string"&&t.weak_password.reasons.reduce((r,n)=>r&&typeof n=="string",!0)&&(e.data.weak_password=t.weak_password),e}function Ot(t){var e;return{data:{user:(e=t.user)!==null&&e!==void 0?e:t},error:null}}function Y0(t){return{data:t,error:null}}function Z0(t){const{action_link:e,email_otp:r,hashed_token:n,redirect_to:s,verification_type:i}=t,a=aa(t,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:r,hashed_token:n,redirect_to:s,verification_type:i},l=Object.assign({},a);return{data:{properties:o,user:l},error:null}}function Kc(t){return t}function ew(t){return!!t.access_token&&!!t.refresh_token&&!!t.expires_in}const Wa=["global","local","others"];class tw{constructor({url:e="",headers:r={},fetch:n,experimental:s}){this.url=e,this.headers=r,this.fetch=Gf(n),this.experimental=s??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,r=Wa[0]){if(Wa.indexOf(r)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Wa.join(", ")}`);try{return await P(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(n){if(C(n))return{data:null,error:n};throw n}}async inviteUserByEmail(e,r={}){try{return await P(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:Ot})}catch(n){if(C(n))return{data:{user:null},error:n};throw n}}async generateLink(e){try{const{options:r}=e,n=aa(e,["options"]),s=Object.assign(Object.assign({},n),r);return"newEmail"in n&&(s.new_email=n==null?void 0:n.newEmail,delete s.newEmail),await P(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:s,headers:this.headers,xform:Z0,redirectTo:r==null?void 0:r.redirectTo})}catch(r){if(C(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(e){try{return await P(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Ot})}catch(r){if(C(r))return{data:{user:null},error:r};throw r}}async listUsers(e){var r,n,s,i,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},h=await P(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(r=e==null?void 0:e.page)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:"",per_page:(i=(s=e==null?void 0:e.perPage)===null||s===void 0?void 0:s.toString())!==null&&i!==void 0?i:""},xform:Kc});if(h.error)throw h.error;const d=await h.json(),f=(a=h.headers.get("x-total-count"))!==null&&a!==void 0?a:0,g=(l=(o=h.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return g.length>0&&(g.forEach(y=>{const w=parseInt(y.split(";")[0].split("=")[1].substring(0,1)),x=JSON.parse(y.split(";")[1].split("=")[1]);c[`${x}Page`]=w}),c.total=parseInt(f)),{data:Object.assign(Object.assign({},d),c),error:null}}catch(c){if(C(c))return{data:{users:[]},error:c};throw c}}async getUserById(e){dt(e);try{return await P(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Ot})}catch(r){if(C(r))return{data:{user:null},error:r};throw r}}async updateUserById(e,r){dt(e);try{return await P(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:r,headers:this.headers,xform:Ot})}catch(n){if(C(n))return{data:{user:null},error:n};throw n}}async deleteUser(e,r=!1){dt(e);try{return await P(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:r},xform:Ot})}catch(n){if(C(n))return{data:{user:null},error:n};throw n}}async _listFactors(e){dt(e.userId);try{const{data:r,error:n}=await P(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:s=>({data:{factors:s},error:null})});return{data:r,error:n}}catch(r){if(C(r))return{data:null,error:r};throw r}}async _deleteFactor(e){dt(e.userId),dt(e.id);try{return{data:await P(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(r){if(C(r))return{data:null,error:r};throw r}}async _listOAuthClients(e){var r,n,s,i,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},h=await P(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(r=e==null?void 0:e.page)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:"",per_page:(i=(s=e==null?void 0:e.perPage)===null||s===void 0?void 0:s.toString())!==null&&i!==void 0?i:""},xform:Kc});if(h.error)throw h.error;const d=await h.json(),f=(a=h.headers.get("x-total-count"))!==null&&a!==void 0?a:0,g=(l=(o=h.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return g.length>0&&(g.forEach(y=>{const w=parseInt(y.split(";")[0].split("=")[1].substring(0,1)),x=JSON.parse(y.split(";")[1].split("=")[1]);c[`${x}Page`]=w}),c.total=parseInt(f)),{data:Object.assign(Object.assign({},d),c),error:null}}catch(c){if(C(c))return{data:{clients:[]},error:c};throw c}}async _createOAuthClient(e){try{return await P(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(C(r))return{data:null,error:r};throw r}}async _getOAuthClient(e){try{return await P(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(C(r))return{data:null,error:r};throw r}}async _updateOAuthClient(e,r){try{return await P(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:r,headers:this.headers,xform:n=>({data:n,error:null})})}catch(n){if(C(n))return{data:null,error:n};throw n}}async _deleteOAuthClient(e){try{return await P(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(r){if(C(r))return{data:null,error:r};throw r}}async _regenerateOAuthClientSecret(e){try{return await P(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(C(r))return{data:null,error:r};throw r}}async _listCustomProviders(e){try{const r={};return e!=null&&e.type&&(r.type=e.type),await P(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:r,xform:n=>{var s;return{data:{providers:(s=n==null?void 0:n.providers)!==null&&s!==void 0?s:[]},error:null}}})}catch(r){if(C(r))return{data:{providers:[]},error:r};throw r}}async _createCustomProvider(e){try{return await P(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(C(r))return{data:null,error:r};throw r}}async _getCustomProvider(e){try{return await P(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(C(r))return{data:null,error:r};throw r}}async _updateCustomProvider(e,r){try{return await P(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:r,headers:this.headers,xform:n=>({data:n,error:null})})}catch(n){if(C(n))return{data:null,error:n};throw n}}async _deleteCustomProvider(e){try{return await P(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(r){if(C(r))return{data:null,error:r};throw r}}async _adminListPasskeys(e){Ke(this.experimental),dt(e.userId);try{return await P(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(C(r))return{data:null,error:r};throw r}}async _adminDeletePasskey(e){Ke(this.experimental),dt(e.userId),dt(e.passkeyId);try{return await P(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(r){if(C(r))return{data:null,error:r};throw r}}}function Gc(t={}){return{getItem:e=>t[e]||null,setItem:(e,r)=>{t[e]=r},removeItem:e=>{delete t[e]}}}globalThis&&Kf()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class rw extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}function nw(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function Jf(t){if(!/^0x[a-fA-F0-9]{40}$/.test(t))throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);return t.toLowerCase()}function sw(t){return parseInt(t,16)}function iw(t){const e=new TextEncoder().encode(t);return"0x"+Array.from(e,n=>n.toString(16).padStart(2,"0")).join("")}function aw(t){var e;const{chainId:r,domain:n,expirationTime:s,issuedAt:i=new Date,nonce:a,notBefore:o,requestId:l,resources:c,scheme:h,uri:d,version:f}=t;{if(!Number.isInteger(r))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);if(!n)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(a&&a.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!d)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(f!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`);if(!((e=t.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`)}const g=Jf(t.address),y=h?`${h}://${n}`:n,w=t.statement?`${t.statement}
`:"",x=`${y} wants you to sign in with your Ethereum account:
${g}

${w}`;let m=`URI: ${d}
Version: ${f}
Chain ID: ${r}${a?`
Nonce: ${a}`:""}
Issued At: ${i.toISOString()}`;if(s&&(m+=`
Expiration Time: ${s.toISOString()}`),o&&(m+=`
Not Before: ${o.toISOString()}`),l&&(m+=`
Request ID: ${l}`),c){let p=`
Resources:`;for(const v of c){if(!v||typeof v!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${v}`);p+=`
- ${v}`}m+=p}return`${x}
${m}`}class te extends Error{constructor({message:e,code:r,cause:n,name:s}){var i;super(e,{cause:n}),this.__isWebAuthnError=!0,this.name=(i=s??(n instanceof Error?n.name:void 0))!==null&&i!==void 0?i:"Unknown Error",this.code=r}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class Ui extends te{constructor(e,r){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r,message:e}),this.name="WebAuthnUnknownError",this.originalError=r}}function ow({error:t,options:e}){var r,n,s;const{publicKey:i}=e;if(!i)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new te({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else if(t.name==="ConstraintError"){if(((r=i.authenticatorSelection)===null||r===void 0?void 0:r.requireResidentKey)===!0)return new te({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:t});if(e.mediation==="conditional"&&((n=i.authenticatorSelection)===null||n===void 0?void 0:n.userVerification)==="required")return new te({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:t});if(((s=i.authenticatorSelection)===null||s===void 0?void 0:s.userVerification)==="required")return new te({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:t})}else{if(t.name==="InvalidStateError")return new te({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:t});if(t.name==="NotAllowedError")return new te({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="NotSupportedError")return i.pubKeyCredParams.filter(o=>o.type==="public-key").length===0?new te({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:t}):new te({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:t});if(t.name==="SecurityError"){const a=window.location.hostname;if(Qf(a)){if(i.rp.id!==a)return new te({message:`The RP ID "${i.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new te({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="TypeError"){if(i.user.id.byteLength<1||i.user.id.byteLength>64)return new te({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:t})}else if(t.name==="UnknownError")return new te({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new te({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}function lw({error:t,options:e}){const{publicKey:r}=e;if(!r)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new te({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else{if(t.name==="NotAllowedError")return new te({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="SecurityError"){const n=window.location.hostname;if(Qf(n)){if(r.rpId!==n)return new te({message:`The RP ID "${r.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new te({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="UnknownError")return new te({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new te({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}class uw{createNewAbortSignal(){if(this.controller){const r=new Error("Cancelling existing WebAuthn API call for new one");r.name="AbortError",this.controller.abort(r)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const sl=new uw;function Jc(t){if(!t)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(t);const{challenge:e,user:r,excludeCredentials:n}=t,s=aa(t,["challenge","user","excludeCredentials"]),i=Vr(e).buffer,a=Object.assign(Object.assign({},r),{id:Vr(r.id).buffer}),o=Object.assign(Object.assign({},s),{challenge:i,user:a});if(n&&n.length>0){o.excludeCredentials=new Array(n.length);for(let l=0;l<n.length;l++){const c=n[l];o.excludeCredentials[l]=Object.assign(Object.assign({},c),{id:Vr(c.id).buffer,type:c.type||"public-key",transports:c.transports})}}return o}function Qc(t){if(!t)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(t);const{challenge:e,allowCredentials:r}=t,n=aa(t,["challenge","allowCredentials"]),s=Vr(e).buffer,i=Object.assign(Object.assign({},n),{challenge:s});if(r&&r.length>0){i.allowCredentials=new Array(r.length);for(let a=0;a<r.length;a++){const o=r[a];i.allowCredentials[a]=Object.assign(Object.assign({},o),{id:Vr(o.id).buffer,type:o.type||"public-key",transports:o.transports})}}return i}function Xc(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const r=t;return{id:t.id,rawId:t.id,response:{attestationObject:lr(new Uint8Array(t.response.attestationObject)),clientDataJSON:lr(new Uint8Array(t.response.clientDataJSON))},type:"public-key",clientExtensionResults:t.getClientExtensionResults(),authenticatorAttachment:(e=r.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function Yc(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const r=t,n=t.getClientExtensionResults(),s=t.response;return{id:t.id,rawId:t.id,response:{authenticatorData:lr(new Uint8Array(s.authenticatorData)),clientDataJSON:lr(new Uint8Array(s.clientDataJSON)),signature:lr(new Uint8Array(s.signature)),userHandle:s.userHandle?lr(new Uint8Array(s.userHandle)):void 0},type:"public-key",clientExtensionResults:n,authenticatorAttachment:(e=r.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function Qf(t){return t==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)}function Di(){var t,e;return!!(pe()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((t=navigator==null?void 0:navigator.credentials)===null||t===void 0?void 0:t.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function Xf(t){try{const e=await navigator.credentials.create(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new Ui("Browser returned unexpected credential type",e)}:{data:null,error:new Ui("Empty credential response",e)}}catch(e){return{data:null,error:ow({error:e,options:t})}}}async function Yf(t){try{const e=await navigator.credentials.get(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new Ui("Browser returned unexpected credential type",e)}:{data:null,error:new Ui("Empty credential response",e)}}catch(e){return{data:null,error:lw({error:e,options:t})}}}const cw={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},dw={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function zi(...t){const e=s=>s!==null&&typeof s=="object"&&!Array.isArray(s),r=s=>s instanceof ArrayBuffer||ArrayBuffer.isView(s),n={};for(const s of t)if(s)for(const i in s){const a=s[i];if(a!==void 0)if(Array.isArray(a))n[i]=a;else if(r(a))n[i]=a;else if(e(a)){const o=n[i];e(o)?n[i]=zi(o,a):n[i]=zi(a)}else n[i]=a}return n}function hw(t,e){return zi(cw,t,e||{})}function fw(t,e){return zi(dw,t,e||{})}class pw{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:r,friendlyName:n,signal:s},i){var a;try{const{data:o,error:l}=await this.client.mfa.challenge({factorId:e,webauthn:r});if(!o)return{data:null,error:l};const c=s??sl.createNewAbortSignal();if(o.webauthn.type==="create"){const{user:h}=o.webauthn.credential_options.publicKey;if(!h.name){const d=n;if(d)h.name=`${h.id}:${d}`;else{const g=(await this.client.getUser()).data.user,y=((a=g==null?void 0:g.user_metadata)===null||a===void 0?void 0:a.name)||(g==null?void 0:g.email)||(g==null?void 0:g.id)||"User";h.name=`${h.id}:${y}`}}h.displayName||(h.displayName=h.name)}switch(o.webauthn.type){case"create":{const h=hw(o.webauthn.credential_options.publicKey,i==null?void 0:i.create),{data:d,error:f}=await Xf({publicKey:h,signal:c});return d?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:d}},error:null}:{data:null,error:f}}case"request":{const h=fw(o.webauthn.credential_options.publicKey,i==null?void 0:i.request),{data:d,error:f}=await Yf(Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:h,signal:c}));return d?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:d}},error:null}:{data:null,error:f}}}}catch(o){return C(o)?{data:null,error:o}:{data:null,error:new Ye("Unexpected error in challenge",o)}}}async _verify({challengeId:e,factorId:r,webauthn:n}){return this.client.mfa.verify({factorId:r,challengeId:e,webauthn:n})}async _authenticate({factorId:e,webauthn:{rpId:r=typeof window<"u"?window.location.hostname:void 0,rpOrigins:n=typeof window<"u"?[window.location.origin]:void 0,signal:s}={}},i){if(!r)return{data:null,error:new us("rpId is required for WebAuthn authentication")};try{if(!Di())return{data:null,error:new Ye("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:r,rpOrigins:n},signal:s},{request:i});if(!a)return{data:null,error:o};const{webauthn:l}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:l.type,rpId:r,rpOrigins:n,credential_response:l.credential_response}})}catch(a){return C(a)?{data:null,error:a}:{data:null,error:new Ye("Unexpected error in authenticate",a)}}}async _register({friendlyName:e,webauthn:{rpId:r=typeof window<"u"?window.location.hostname:void 0,rpOrigins:n=typeof window<"u"?[window.location.origin]:void 0,signal:s}={}},i){if(!r)return{data:null,error:new us("rpId is required for WebAuthn registration")};try{if(!Di())return{data:null,error:new Ye("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(h=>{var d;return(d=h.data)===null||d===void 0?void 0:d.all.find(f=>f.factor_type==="webauthn"&&f.friendly_name===e&&f.status!=="unverified")}).then(h=>h?this.client.mfa.unenroll({factorId:h==null?void 0:h.id}):void 0),{data:null,error:o};const{data:l,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:r,rpOrigins:n},signal:s},{create:i});return l?this._verify({factorId:a.id,challengeId:l.challengeId,webauthn:{rpId:r,rpOrigins:n,type:l.webauthn.type,credential_response:l.webauthn.credential_response}}):{data:null,error:c}}catch(a){return C(a)?{data:null,error:a}:{data:null,error:new Ye("Unexpected error in register",a)}}}}nw();const mw={url:y0,storageKey:w0,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:x0,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},br={};class cs{get jwks(){var e,r;return(r=(e=br[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&r!==void 0?r:{keys:[]}}set jwks(e){br[this.storageKey]=Object.assign(Object.assign({},br[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,r;return(r=(e=br[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&r!==void 0?r:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){br[this.storageKey]=Object.assign(Object.assign({},br[this.storageKey]),{cachedAt:e})}constructor(e){var r,n,s;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this._pendingInitNotifications=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const i=Object.assign(Object.assign({},mw),e);if(this.storageKey=i.storageKey,this.instanceID=(r=cs.nextInstanceID[this.storageKey])!==null&&r!==void 0?r:0,cs.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!i.debug,typeof i.debug=="function"&&(this.logger=i.debug),this.instanceID>0&&pe()){const a=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(a),this.logDebugMessages&&console.trace(a)}if(this.persistSession=i.persistSession,this.autoRefreshToken=i.autoRefreshToken,this.experimental=(n=i.experimental)!==null&&n!==void 0?n:{},this.admin=new tw({url:i.url,headers:i.headers,fetch:i.fetch,experimental:this.experimental}),this.url=i.url,this.headers=i.headers,this.fetch=Gf(i.fetch),this.detectSessionInUrl=i.detectSessionInUrl,this.flowType=i.flowType,this.hasCustomAuthorizationHeader=i.hasCustomAuthorizationHeader,this.throwOnError=i.throwOnError,this.lockAcquireTimeout=i.lockAcquireTimeout,i.lock!=null&&(this.lock=i.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new pw(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(i.storage?this.storage=i.storage:Kf()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Gc(this.memoryStorage)),i.userStorage&&(this.userStorage=i.userStorage)):(this.memoryStorage={},this.storage=Gc(this.memoryStorage)),pe()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(s=this.broadcastChannel)===null||s===void 0||s.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a),(a.data.event==="TOKEN_REFRESHED"||a.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(a.data.event,a.data.session,!1)}catch(o){this._debug("#broadcastChannel","error",o)}})}i.skipAutoInitialize||this.initialize().catch(a=>{this._debug("#initialize()","error",a)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${qf}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){var e;if(this.initializePromise)return await this.initializePromise;this._pendingInitNotifications=[],this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())();const r=await this.initializePromise,n=(e=this._pendingInitNotifications)!==null&&e!==void 0?e:[];this._pendingInitNotifications=null;for(const s of n)await this._notifyAllSubscribers(s.event,s.session,s.broadcast);return r}async _initialize(){var e;try{let r={},n="none";if(pe()&&(r=L0(window.location.href),this._isImplicitGrantCallback(r)?n="implicit":await this._isPKCECallback(r)&&(n="pkce")),pe()&&this.detectSessionInUrl&&n!=="none"){const{data:s,error:i}=await this._getSessionFromURL(r,n);if(i){if(this._debug("#_initialize()","error detecting session from URL",i),E0(i)){const l=(e=i.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:i}}return{error:i}}const{session:a,redirectType:o}=s;return this._debug("#_initialize()","detected session in URL",a,"redirect type",o),await this._saveSession(a),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(r){return C(r)?this._returnResult({error:r}):this._returnResult({error:new Ye("Unexpected error during initialization",r)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var r,n,s;try{const i=await P(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(r=e==null?void 0:e.options)===null||r===void 0?void 0:r.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.captchaToken}},xform:De}),{data:a,error:o}=i;if(o||!a)return this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(i){if(C(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signUp(e){var r,n,s;try{let i;if("email"in e){const{email:h,password:d,options:f}=e;let g=null,y=null;this.flowType==="pkce"&&([g,y]=await er(this.storage,this.storageKey)),i=await P(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:f==null?void 0:f.emailRedirectTo,body:{email:h,password:d,data:(r=f==null?void 0:f.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken},code_challenge:g,code_challenge_method:y},xform:De})}else if("phone"in e){const{phone:h,password:d,options:f}=e;i=await P(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:h,password:d,data:(n=f==null?void 0:f.data)!==null&&n!==void 0?n:{},channel:(s=f==null?void 0:f.channel)!==null&&s!==void 0?s:"sms",gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken}},xform:De})}else throw new qs("You must provide either an email or phone number and a password");const{data:a,error:o}=i;if(o||!a)return await ee(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(i){if(await ee(this.storage,`${this.storageKey}-code-verifier`),C(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signInWithPassword(e){try{let r;if("email"in e){const{email:i,password:a,options:o}=e;r=await P(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:i,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Vc})}else if("phone"in e){const{phone:i,password:a,options:o}=e;r=await P(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:i,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Vc})}else throw new qs("You must provide either an email or phone number and a password");const{data:n,error:s}=r;if(s)return this._returnResult({data:{user:null,session:null},error:s});if(!n||!n.session||!n.user){const i=new _r;return this._returnResult({data:{user:null,session:null},error:i})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),this._returnResult({data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:s})}catch(r){if(C(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithOAuth(e){var r,n,s,i;return await this._handleProviderSignIn(e.provider,{redirectTo:(r=e.options)===null||r===void 0?void 0:r.redirectTo,scopes:(n=e.options)===null||n===void 0?void 0:n.scopes,queryParams:(s=e.options)===null||s===void 0?void 0:s.queryParams,skipBrowserRedirect:(i=e.options)===null||i===void 0?void 0:i.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e)):this._exchangeCodeForSession(e)}async signInWithWeb3(e){const{chain:r}=e;switch(r){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)}}async signInWithEthereum(e){var r,n,s,i,a,o,l,c,h,d,f;let g,y;if("message"in e)g=e.message,y=e.signature;else{const{chain:w,wallet:x,statement:m,options:p}=e;let v;if(pe())if(typeof x=="object")v=x;else{const O=window;if("ethereum"in O&&typeof O.ethereum=="object"&&"request"in O.ethereum&&typeof O.ethereum.request=="function")v=O.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof x!="object"||!(p!=null&&p.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");v=x}const _=new URL((r=p==null?void 0:p.url)!==null&&r!==void 0?r:window.location.href),k=await v.request({method:"eth_requestAccounts"}).then(O=>O).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!k||k.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const S=Jf(k[0]);let E=(n=p==null?void 0:p.signInWithEthereum)===null||n===void 0?void 0:n.chainId;if(!E){const O=await v.request({method:"eth_chainId"});E=sw(O)}const T={domain:_.host,address:S,statement:m,uri:_.href,version:"1",chainId:E,nonce:(s=p==null?void 0:p.signInWithEthereum)===null||s===void 0?void 0:s.nonce,issuedAt:(a=(i=p==null?void 0:p.signInWithEthereum)===null||i===void 0?void 0:i.issuedAt)!==null&&a!==void 0?a:new Date,expirationTime:(o=p==null?void 0:p.signInWithEthereum)===null||o===void 0?void 0:o.expirationTime,notBefore:(l=p==null?void 0:p.signInWithEthereum)===null||l===void 0?void 0:l.notBefore,requestId:(c=p==null?void 0:p.signInWithEthereum)===null||c===void 0?void 0:c.requestId,resources:(h=p==null?void 0:p.signInWithEthereum)===null||h===void 0?void 0:h.resources};g=aw(T),y=await v.request({method:"personal_sign",params:[iw(g),S]})}try{const{data:w,error:x}=await P(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:g,signature:y},!((d=e.options)===null||d===void 0)&&d.captchaToken?{gotrue_meta_security:{captcha_token:(f=e.options)===null||f===void 0?void 0:f.captchaToken}}:null),xform:De});if(x)throw x;if(!w||!w.session||!w.user){const m=new _r;return this._returnResult({data:{user:null,session:null},error:m})}return w.session&&(await this._saveSession(w.session),await this._notifyAllSubscribers("SIGNED_IN",w.session)),this._returnResult({data:Object.assign({},w),error:x})}catch(w){if(C(w))return this._returnResult({data:{user:null,session:null},error:w});throw w}}async signInWithSolana(e){var r,n,s,i,a,o,l,c,h,d,f,g;let y,w;if("message"in e)y=e.message,w=e.signature;else{const{chain:x,wallet:m,statement:p,options:v}=e;let _;if(pe())if(typeof m=="object")_=m;else{const S=window;if("solana"in S&&typeof S.solana=="object"&&("signIn"in S.solana&&typeof S.solana.signIn=="function"||"signMessage"in S.solana&&typeof S.solana.signMessage=="function"))_=S.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof m!="object"||!(v!=null&&v.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");_=m}const k=new URL((r=v==null?void 0:v.url)!==null&&r!==void 0?r:window.location.href);if("signIn"in _&&_.signIn){const S=await _.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},v==null?void 0:v.signInWithSolana),{version:"1",domain:k.host,uri:k.href}),p?{statement:p}:null));let E;if(Array.isArray(S)&&S[0]&&typeof S[0]=="object")E=S[0];else if(S&&typeof S=="object"&&"signedMessage"in S&&"signature"in S)E=S;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in E&&"signature"in E&&(typeof E.signedMessage=="string"||E.signedMessage instanceof Uint8Array)&&E.signature instanceof Uint8Array)y=typeof E.signedMessage=="string"?E.signedMessage:new TextDecoder().decode(E.signedMessage),w=E.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in _)||typeof _.signMessage!="function"||!("publicKey"in _)||typeof _!="object"||!_.publicKey||!("toBase58"in _.publicKey)||typeof _.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");y=[`${k.host} wants you to sign in with your Solana account:`,_.publicKey.toBase58(),...p?["",p,""]:[""],"Version: 1",`URI: ${k.href}`,`Issued At: ${(s=(n=v==null?void 0:v.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&s!==void 0?s:new Date().toISOString()}`,...!((i=v==null?void 0:v.signInWithSolana)===null||i===void 0)&&i.notBefore?[`Not Before: ${v.signInWithSolana.notBefore}`]:[],...!((a=v==null?void 0:v.signInWithSolana)===null||a===void 0)&&a.expirationTime?[`Expiration Time: ${v.signInWithSolana.expirationTime}`]:[],...!((o=v==null?void 0:v.signInWithSolana)===null||o===void 0)&&o.chainId?[`Chain ID: ${v.signInWithSolana.chainId}`]:[],...!((l=v==null?void 0:v.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${v.signInWithSolana.nonce}`]:[],...!((c=v==null?void 0:v.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${v.signInWithSolana.requestId}`]:[],...!((d=(h=v==null?void 0:v.signInWithSolana)===null||h===void 0?void 0:h.resources)===null||d===void 0)&&d.length?["Resources",...v.signInWithSolana.resources.map(E=>`- ${E}`)]:[]].join(`
`);const S=await _.signMessage(new TextEncoder().encode(y),"utf8");if(!S||!(S instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");w=S}}try{const{data:x,error:m}=await P(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:y,signature:lr(w)},!((f=e.options)===null||f===void 0)&&f.captchaToken?{gotrue_meta_security:{captcha_token:(g=e.options)===null||g===void 0?void 0:g.captchaToken}}:null),xform:De});if(m)throw m;if(!x||!x.session||!x.user){const p=new _r;return this._returnResult({data:{user:null,session:null},error:p})}return x.session&&(await this._saveSession(x.session),await this._notifyAllSubscribers("SIGNED_IN",x.session)),this._returnResult({data:Object.assign({},x),error:m})}catch(x){if(C(x))return this._returnResult({data:{user:null,session:null},error:x});throw x}}async _exchangeCodeForSession(e){const r=await Ve(this.storage,`${this.storageKey}-code-verifier`),[n,s]=(r??"").split("/");try{if(!n&&this.flowType==="pkce")throw new j0;const{data:i,error:a}=await P(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:n},xform:De});if(await ee(this.storage,`${this.storageKey}-code-verifier`),a)throw a;if(!i||!i.session||!i.user){const o=new _r;return this._returnResult({data:{user:null,session:null,redirectType:null},error:o})}return i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers(s==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",i.session)),this._returnResult({data:Object.assign(Object.assign({},i),{redirectType:s??null}),error:a})}catch(i){if(await ee(this.storage,`${this.storageKey}-code-verifier`),C(i))return this._returnResult({data:{user:null,session:null,redirectType:null},error:i});throw i}}async signInWithIdToken(e){try{const{options:r,provider:n,token:s,access_token:i,nonce:a}=e,o=await P(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:s,access_token:i,nonce:a,gotrue_meta_security:{captcha_token:r==null?void 0:r.captchaToken}},xform:De}),{data:l,error:c}=o;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!l||!l.session||!l.user){const h=new _r;return this._returnResult({data:{user:null,session:null},error:h})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:l,error:c})}catch(r){if(C(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithOtp(e){var r,n,s,i,a;try{if("email"in e){const{email:o,options:l}=e;let c=null,h=null;this.flowType==="pkce"&&([c,h]=await er(this.storage,this.storageKey));const{error:d}=await P(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:o,data:(r=l==null?void 0:l.data)!==null&&r!==void 0?r:{},create_user:(n=l==null?void 0:l.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:c,code_challenge_method:h},redirectTo:l==null?void 0:l.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:d})}if("phone"in e){const{phone:o,options:l}=e,{data:c,error:h}=await P(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:o,data:(s=l==null?void 0:l.data)!==null&&s!==void 0?s:{},create_user:(i=l==null?void 0:l.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(a=l==null?void 0:l.channel)!==null&&a!==void 0?a:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:c==null?void 0:c.message_id},error:h})}throw new qs("You must provide either an email or phone number.")}catch(o){if(await ee(this.storage,`${this.storageKey}-code-verifier`),C(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}}async verifyOtp(e){var r,n;try{let s,i;"options"in e&&(s=(r=e.options)===null||r===void 0?void 0:r.redirectTo,i=(n=e.options)===null||n===void 0?void 0:n.captchaToken);const{data:a,error:o}=await P(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:i}}),redirectTo:s,xform:De});if(o)throw o;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,c=a.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(s){if(C(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithSSO(e){var r,n,s,i,a;try{let o=null,l=null;this.flowType==="pkce"&&([o,l]=await er(this.storage,this.storageKey));const c=await P(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(n=(r=e.options)===null||r===void 0?void 0:r.redirectTo)!==null&&n!==void 0?n:void 0}),!((s=e==null?void 0:e.options)===null||s===void 0)&&s.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:o,code_challenge_method:l}),headers:this.headers,xform:Y0});return!((i=c.data)===null||i===void 0)&&i.url&&pe()&&!(!((a=e.options)===null||a===void 0)&&a.skipBrowserRedirect)&&window.location.assign(c.data.url),this._returnResult(c)}catch(o){if(await ee(this.storage,`${this.storageKey}-code-verifier`),C(o))return this._returnResult({data:null,error:o});throw o}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:r},error:n}=e;if(n)throw n;if(!r)throw new ae;const{error:s}=await P(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return this._returnResult({data:{user:null,session:null},error:s})})}catch(e){if(C(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{const r=`${this.url}/resend`;if("email"in e){const{email:n,type:s,options:i}=e;let a=null,o=null;this.flowType==="pkce"&&([a,o]=await er(this.storage,this.storageKey));const{error:l}=await P(this.fetch,"POST",r,{headers:this.headers,body:{email:n,type:s,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken},code_challenge:a,code_challenge_method:o},redirectTo:i==null?void 0:i.emailRedirectTo});return l&&await ee(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:l})}else if("phone"in e){const{phone:n,type:s,options:i}=e,{data:a,error:o}=await P(this.fetch,"POST",r,{headers:this.headers,body:{phone:n,type:s,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a==null?void 0:a.message_id},error:o})}throw new qs("You must provide either an email or phone number and a type")}catch(r){if(await ee(this.storage,`${this.storageKey}-code-verifier`),C(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,r){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),s=(async()=>(await n,await r()))();return this.pendingInLock.push((async()=>{try{await s}catch{}})()),s}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=r();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const s=[...this.pendingInLock];await Promise.all(s),this.pendingInLock.splice(0,s.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await e(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const r=await Ve(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?e=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const n=e.expires_at?e.expires_at*1e3-Date.now()<Fa:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",e.expires_at),!n){if(this.userStorage){const a=await Ve(this.userStorage,this.storageKey+"-user");a!=null&&a.user?e.user=a.user:e.user=Ma()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const a={value:this.suppressGetSessionWarning};e.user=G0(e.user,a),a.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:s,error:i}=await this._callRefreshToken(e.refresh_token);if(i){if(!!(e.expires_at&&e.expires_at*1e3>Date.now())){const o=await Ve(this.storage,this.storageKey);if(o&&o.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:i})}return this._returnResult({data:{session:s},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let r;return this.lock!=null?r=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):r=await this._getUser(),r.data.user&&(this.suppressGetSessionWarning=!0),r}async _getUser(e){try{return e?await P(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Ot}):await this._useSession(async r=>{var n,s,i;const{data:a,error:o}=r;if(o)throw o;return!(!((n=a.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new ae}:await P(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(i=(s=a.session)===null||s===void 0?void 0:s.access_token)!==null&&i!==void 0?i:void 0,xform:Ot})})}catch(r){if(C(r))return Ws(r)&&(await this._removeSession(),await ee(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:r});throw r}}async updateUser(e,r={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,r)):await this._updateUser(e,r)}async _updateUser(e,r={}){try{return await this._useSession(async n=>{const{data:s,error:i}=n;if(i)throw i;if(!s.session)throw new ae;const a=s.session;let o=null,l=null;this.flowType==="pkce"&&e.email!=null&&([o,l]=await er(this.storage,this.storageKey));const{data:c,error:h}=await P(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r==null?void 0:r.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:l}),jwt:a.access_token,xform:Ot});if(h)throw h;return a.user=c.user,await this._saveSession(a),await this._notifyAllSubscribers("USER_UPDATED",a),this._returnResult({data:{user:a.user},error:null})})}catch(n){if(await ee(this.storage,`${this.storageKey}-code-verifier`),C(n))return this._returnResult({data:{user:null},error:n});throw n}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new ae;const r=Date.now()/1e3;let n=r,s=!0,i=null;const{payload:a}=Ks(e.access_token);if(a.exp&&(n=a.exp,s=n<=r),s){const{data:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!o)return{data:{user:null,session:null},error:null};i=o}else{const{data:o,error:l}=await this._getUser(e.access_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});i={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:n-r,expires_at:n},await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)}return this._returnResult({data:{user:i.user,session:i},error:null})}catch(r){if(C(r))return this._returnResult({data:{session:null,user:null},error:r});throw r}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async r=>{var n;if(!e){const{data:a,error:o}=r;if(o)throw o;e=(n=a.session)!==null&&n!==void 0?n:void 0}if(!(e!=null&&e.refresh_token))throw new ae;const{data:s,error:i}=await this._callRefreshToken(e.refresh_token);return i?this._returnResult({data:{user:null,session:null},error:i}):s?this._returnResult({data:{user:s.user,session:s},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(r){if(C(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async _getSessionFromURL(e,r){var n;try{if(!pe())throw new Hs("No browser detected.");if(e.error||e.error_description||e.error_code)throw new Hs(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(r){case"implicit":if(this.flowType==="pkce")throw new Dc("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Hs("Not a valid implicit grant flow url.");break;default:}if(r==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new Dc("No code detected.");const{data:v,error:_}=await this._exchangeCodeForSession(e.code);if(_)throw _;const k=new URL(window.location.href);return k.searchParams.delete("code"),window.history.replaceState(window.history.state,"",k.toString()),{data:{session:v.session,redirectType:(n=v.redirectType)!==null&&n!==void 0?n:null},error:null}}const{provider_token:s,provider_refresh_token:i,access_token:a,refresh_token:o,expires_in:l,expires_at:c,token_type:h}=e;if(!a||!l||!o||!h)throw new Hs("No session defined in URL");const d=Math.round(Date.now()/1e3),f=parseInt(l);let g=d+f;c&&(g=parseInt(c));const y=g-d;y*1e3<=mt&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${y}s, should have been closer to ${f}s`);const w=g-f;d-w>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",w,g,d):d-w<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",w,g,d);const{data:x,error:m}=await this._getUser(a);if(m)throw m;const p={provider_token:s,provider_refresh_token:i,access_token:a,expires_in:f,expires_at:g,refresh_token:o,token_type:h,user:x.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:p,redirectType:e.type},error:null})}catch(s){if(C(s))return this._returnResult({data:{session:null,redirectType:null},error:s});throw s}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){const r=await Ve(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&r)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async r=>{var n;const s=async()=>{await this._removeSession(),await ee(this.storage,`${this.storageKey}-code-verifier`)},{data:i,error:a}=r;if(a&&!Ws(a))return this._returnResult({error:a});const o=(n=i.session)===null||n===void 0?void 0:n.access_token;if(o){const{error:l}=await this.admin.signOut(o,e);if(l&&!(S0(l)&&(l.status===404||l.status===401||l.status===403)||Ws(l)))return e!=="others"&&await s(),this._returnResult({error:l})}return e!=="others"&&await s(),this._returnResult({error:null})})}onAuthStateChange(e){const r=I0(),n={id:r,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,n),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(r)}):await this._emitInitialSession(r)))(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async r=>{var n,s;try{const{data:{session:i},error:a}=r;if(a)throw a;await((n=this.stateChangeEmitters.get(e))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",i)),this._debug("INITIAL_SESSION","callback id",e,"session",i)}catch(i){await((s=this.stateChangeEmitters.get(e))===null||s===void 0?void 0:s.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",i),Ws(i)||Vs(i)?console.warn(i):console.error(i)}})}async resetPasswordForEmail(e,r={}){let n=null,s=null;this.flowType==="pkce"&&([n,s]=await er(this.storage,this.storageKey,!0));try{return await P(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:s,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(i){if(await ee(this.storage,`${this.storageKey}-code-verifier`),C(i))return this._returnResult({data:null,error:i});throw i}}async getUserIdentities(){var e;try{const{data:r,error:n}=await this.getUser();if(n)throw n;return this._returnResult({data:{identities:(e=r.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(r){if(C(r))return this._returnResult({data:null,error:r});throw r}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var r;try{const{data:n,error:s}=await this._useSession(async i=>{var a,o,l,c,h;const{data:d,error:f}=i;if(f)throw f;const g=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(a=e.options)===null||a===void 0?void 0:a.redirectTo,scopes:(o=e.options)===null||o===void 0?void 0:o.scopes,queryParams:(l=e.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await P(this.fetch,"GET",g,{headers:this.headers,jwt:(h=(c=d.session)===null||c===void 0?void 0:c.access_token)!==null&&h!==void 0?h:void 0})});if(s)throw s;return pe()&&!(!((r=e.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(n==null?void 0:n.url),this._returnResult({data:{provider:e.provider,url:n==null?void 0:n.url},error:null})}catch(n){if(C(n))return this._returnResult({data:{provider:e.provider,url:null},error:n});throw n}}async linkIdentityIdToken(e){return await this._useSession(async r=>{var n;try{const{error:s,data:{session:i}}=r;if(s)throw s;const{options:a,provider:o,token:l,access_token:c,nonce:h}=e,d=await P(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(n=i==null?void 0:i.access_token)!==null&&n!==void 0?n:void 0,body:{provider:o,id_token:l,access_token:c,nonce:h,link_identity:!0,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:De}),{data:f,error:g}=d;return g?this._returnResult({data:{user:null,session:null},error:g}):!f||!f.session||!f.user?this._returnResult({data:{user:null,session:null},error:new _r}):(f.session&&(await this._saveSession(f.session),await this._notifyAllSubscribers("USER_UPDATED",f.session)),this._returnResult({data:f,error:g}))}catch(s){if(await ee(this.storage,`${this.storageKey}-code-verifier`),C(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}})}async unlinkIdentity(e){try{return await this._useSession(async r=>{var n,s;const{data:i,error:a}=r;if(a)throw a;return await P(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(s=(n=i.session)===null||n===void 0?void 0:n.access_token)!==null&&s!==void 0?s:void 0})})}catch(r){if(C(r))return this._returnResult({data:null,error:r});throw r}}async _refreshAccessToken(e){const r="#_refreshAccessToken()";this._debug(r,"begin");try{const n=Date.now();return await D0(async s=>(s>0&&await U0(200*Math.pow(2,s-1)),this._debug(r,"refreshing attempt",s),await P(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:De})),(s,i)=>{const a=200*Math.pow(2,s);return i&&Vs(i)&&Date.now()+a-n<mt})}catch(n){if(this._debug(r,"error",n),C(n))return this._returnResult({data:{session:null,user:null},error:n});throw n}finally{this._debug(r,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,r){const n=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",r,"url",n),pe()&&!r.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n},error:null}}async _recoverAndRefresh(){var e,r;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const s=await Ve(this.storage,this.storageKey);if(s&&this.userStorage){let a=await Ve(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!a&&(a={user:s.user},await Er(this.userStorage,this.storageKey+"-user",a)),s.user=(e=a==null?void 0:a.user)!==null&&e!==void 0?e:Ma()}else if(s&&!s.user&&!s.user){const a=await Ve(this.storage,this.storageKey+"-user");a&&(a!=null&&a.user)?(s.user=a.user,await ee(this.storage,this.storageKey+"-user"),await Er(this.storage,this.storageKey,s)):s.user=Ma()}if(this._debug(n,"session from storage",s),!this._isValidSession(s)){this._debug(n,"session is not valid"),s!==null&&await this._removeSession();return}const i=((r=s.expires_at)!==null&&r!==void 0?r:1/0)*1e3-Date.now()<Fa;if(this._debug(n,`session has${i?"":" not"} expired with margin of ${Fa}s`),i){if(this.autoRefreshToken&&s.refresh_token){const{error:a}=await this._callRefreshToken(s.refresh_token);a&&(C0(a)?this._debug(n,"refresh discarded by commit guard",a):this._debug(n,"refresh failed",a))}}else if(s.user&&s.user.__isUserNotAvailableProxy===!0)try{const{data:a,error:o}=await this._getUser(s.access_token);!o&&(a!=null&&a.user)?(s.user=a.user,await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(a){console.error("Error getting user data:",a),this._debug(n,"error getting user data, skipping SIGNED_IN notification",a)}else await this._notifyAllSubscribers("SIGNED_IN",s)}catch(s){this._debug(n,"error",s),Vs(s)?console.warn(s):console.error(s);return}finally{this._debug(n,"end")}}async _callRefreshToken(e){var r,n;if(!e)throw new ae;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const s="#_callRefreshToken()";this._debug(s,"begin");try{this.refreshingDeferred=new ua;const i=await Ve(this.storage,this.storageKey),{data:a,error:o}=await this._refreshAccessToken(e);if(o)throw o;if(!a.session)throw new ae;const l=await Ve(this.storage,this.storageKey);if(i!==null&&(l===null||l.refresh_token!==i.refresh_token)){this._debug(s,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:l?"replaced":"cleared"});const f={data:null,error:new zc};return this.refreshingDeferred.resolve(f),f}const h=this._sessionRemovalEpoch;if(await this._saveSession(a.session),this._sessionRemovalEpoch!==h){this._debug(s,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await ee(this.storage,this.storageKey),this.userStorage&&await ee(this.userStorage,this.storageKey+"-user");const f={data:null,error:new zc};return this.refreshingDeferred.resolve(f),f}await this._notifyAllSubscribers("TOKEN_REFRESHED",a.session);const d={data:a.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(d),d}catch(i){if(this._debug(s,"error",i),C(i)){const a={data:null,error:i};if(!Vs(i)){const o=await Ve(this.storage,this.storageKey);!!(o!=null&&o.expires_at&&o.expires_at*1e3>Date.now())?this._debug(s,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:a,expiresAt:Date.now()+v0},(r=this.refreshingDeferred)===null||r===void 0||r.resolve(a),a}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(i),i}finally{this.refreshingDeferred=null,this._debug(s,"end")}}async _notifyAllSubscribers(e,r,n=!0){if(this._pendingInitNotifications!==null&&n){this._pendingInitNotifications.push({event:e,session:r,broadcast:n});return}const s=`#_notifyAllSubscribers(${e})`;this._debug(s,"begin",r,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:r});const i=[],a=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,r)}catch(l){i.push(l)}});if(await Promise.all(a),i.length>0){for(let o=0;o<i.length;o+=1)console.error(i[o]);throw i[0]}}finally{this._debug(s,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0;const r=Object.assign({},e),n=r.user&&r.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&r.user&&await Er(this.userStorage,this.storageKey+"-user",{user:r.user});const s=Object.assign({},r);delete s.user;const i=qc(s);await Er(this.storage,this.storageKey,i)}else{const s=qc(r);await Er(this.storage,this.storageKey,s)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await ee(this.storage,this.storageKey),await ee(this.storage,this.storageKey+"-code-verifier"),await ee(this.storage,this.storageKey+"-user"),this.userStorage&&await ee(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&pe()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),mt);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const r=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=r,r&&typeof r=="object"&&typeof r.unref=="function"?r.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(r)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const r=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,r&&clearTimeout(r)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async r=>{const{data:{session:n}}=r;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const s=Math.floor((n.expires_at*1e3-e)/mt);this._debug("#_autoRefreshTokenTick()",`access token expires in ${s} ticks, a tick lasts ${mt}ms, refresh threshold is ${jn} ticks`),s<=jn&&await this._callRefreshToken(n.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof rw)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const e=Date.now();try{await this._useSession(async r=>{const{data:{session:n}}=r;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const s=Math.floor((n.expires_at*1e3-e)/mt);this._debug("#_autoRefreshTokenTick()",`access token expires in ${s} ticks, a tick lasts ${mt}ms, refresh threshold is ${jn} ticks`),s<=jn&&await this._callRefreshToken(n.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!pe()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const r=`#_onVisibilityChanged(${e})`;if(this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(r,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,r,n){const s=[`provider=${encodeURIComponent(r)}`];if(n!=null&&n.redirectTo&&s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n!=null&&n.scopes&&s.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const[i,a]=await er(this.storage,this.storageKey),o=new URLSearchParams({code_challenge:`${encodeURIComponent(i)}`,code_challenge_method:`${encodeURIComponent(a)}`});s.push(o.toString())}if(n!=null&&n.queryParams){const i=new URLSearchParams(n.queryParams);s.push(i.toString())}return n!=null&&n.skipBrowserRedirect&&s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${e}?${s.join("&")}`}async _unenroll(e){try{return await this._useSession(async r=>{var n;const{data:s,error:i}=r;return i?this._returnResult({data:null,error:i}):await P(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(n=s==null?void 0:s.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(C(r))return this._returnResult({data:null,error:r});throw r}}async _enroll(e){try{return await this._useSession(async r=>{var n,s;const{data:i,error:a}=r;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:l,error:c}=await P(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token});return c?this._returnResult({data:null,error:c}):(e.factorType==="totp"&&l.type==="totp"&&(!((s=l==null?void 0:l.totp)===null||s===void 0)&&s.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),this._returnResult({data:l,error:null}))})}catch(r){if(C(r))return this._returnResult({data:null,error:r});throw r}}async _verify(e){const r=async()=>{try{return await this._useSession(async n=>{var s;const{data:i,error:a}=n;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?Xc(e.webauthn.credential_response):Yc(e.webauthn.credential_response)})}:{code:e.code}),{data:l,error:c}=await P(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:o,headers:this.headers,jwt:(s=i==null?void 0:i.session)===null||s===void 0?void 0:s.access_token});return c?this._returnResult({data:null,error:c}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+l.expires_in},l)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",l),this._returnResult({data:l,error:c}))})}catch(n){if(C(n))return this._returnResult({data:null,error:n});throw n}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,r):r()}async _challenge(e){const r=async()=>{try{return await this._useSession(async n=>{var s;const{data:i,error:a}=n;if(a)return this._returnResult({data:null,error:a});const o=await P(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(s=i==null?void 0:i.session)===null||s===void 0?void 0:s.access_token});if(o.error)return o;const{data:l}=o;if(l.type!=="webauthn")return{data:l,error:null};switch(l.webauthn.type){case"create":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:Jc(l.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:Qc(l.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(n){if(C(n))return this._returnResult({data:null,error:n});throw n}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,r):r()}async _challengeAndVerify(e){const{data:r,error:n}=await this._challenge({factorId:e.factorId});return n?this._returnResult({data:null,error:n}):await this._verify({factorId:e.factorId,challengeId:r.id,code:e.code})}async _listFactors(){var e;const{data:{user:r},error:n}=await this.getUser();if(n)return{data:null,error:n};const s={all:[],phone:[],totp:[],webauthn:[]};for(const i of(e=r==null?void 0:r.factors)!==null&&e!==void 0?e:[])s.all.push(i),i.status==="verified"&&s[i.factor_type].push(i);return{data:s,error:null}}async _getAuthenticatorAssuranceLevel(e){var r,n,s,i;if(e)try{const{payload:g}=Ks(e);let y=null;g.aal&&(y=g.aal);let w=y;const{data:{user:x},error:m}=await this.getUser(e);if(m)return this._returnResult({data:null,error:m});((n=(r=x==null?void 0:x.factors)===null||r===void 0?void 0:r.filter(_=>_.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(w="aal2");const v=g.amr||[];return{data:{currentLevel:y,nextLevel:w,currentAuthenticationMethods:v},error:null}}catch(g){if(C(g))return this._returnResult({data:null,error:g});throw g}const{data:{session:a},error:o}=await this.getSession();if(o)return this._returnResult({data:null,error:o});if(!a)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:l}=Ks(a.access_token);let c=null;l.aal&&(c=l.aal);let h=c;((i=(s=a.user.factors)===null||s===void 0?void 0:s.filter(g=>g.status==="verified"))!==null&&i!==void 0?i:[]).length>0&&(h="aal2");const f=l.amr||[];return{data:{currentLevel:c,nextLevel:h,currentAuthenticationMethods:f},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async r=>{const{data:{session:n},error:s}=r;return s?this._returnResult({data:null,error:s}):n?await P(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:n.access_token,xform:i=>({data:i,error:null})}):this._returnResult({data:null,error:new ae})})}catch(r){if(C(r))return this._returnResult({data:null,error:r});throw r}}async _approveAuthorization(e,r){try{return await this._useSession(async n=>{const{data:{session:s},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!s)return this._returnResult({data:null,error:new ae});const a=await P(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:s.access_token,body:{action:"approve"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&pe()&&!(r!=null&&r.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(n){if(C(n))return this._returnResult({data:null,error:n});throw n}}async _denyAuthorization(e,r){try{return await this._useSession(async n=>{const{data:{session:s},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!s)return this._returnResult({data:null,error:new ae});const a=await P(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:s.access_token,body:{action:"deny"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&pe()&&!(r!=null&&r.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(n){if(C(n))return this._returnResult({data:null,error:n});throw n}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:r},error:n}=e;return n?this._returnResult({data:null,error:n}):r?await P(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:r.access_token,xform:s=>({data:s,error:null})}):this._returnResult({data:null,error:new ae})})}catch(e){if(C(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async r=>{const{data:{session:n},error:s}=r;return s?this._returnResult({data:null,error:s}):n?(await P(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:n.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new ae})})}catch(r){if(C(r))return this._returnResult({data:null,error:r});throw r}}async fetchJwk(e,r={keys:[]}){let n=r.keys.find(o=>o.kid===e);if(n)return n;const s=Date.now();if(n=this.jwks.keys.find(o=>o.kid===e),n&&this.jwks_cached_at+b0>s)return n;const{data:i,error:a}=await P(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=s,n=i.keys.find(o=>o.kid===e),!n)?null:n}async getClaims(e,r={}){try{let n=e;if(!n){const{data:g,error:y}=await this.getSession();if(y||!g.session)return this._returnResult({data:null,error:y});n=g.session.access_token}const{header:s,payload:i,signature:a,raw:{header:o,payload:l}}=Ks(n);if(!(r!=null&&r.allowExpired))try{H0(i.exp)}catch(g){throw new Li(g instanceof Error?g.message:"JWT validation failed")}const c=!s.alg||s.alg.startsWith("HS")||!s.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(s.kid,r!=null&&r.keys?{keys:r.keys}:r==null?void 0:r.jwks);if(!c){const{error:g}=await this.getUser(n);if(g)throw g;return{data:{claims:i,header:s,signature:a},error:null}}const h=V0(s.alg),d=await crypto.subtle.importKey("jwk",c,h,!0,["verify"]);if(!await crypto.subtle.verify(h,d,a,A0(`${o}.${l}`)))throw new Li("Invalid JWT signature");return{data:{claims:i,header:s,signature:a},error:null}}catch(n){if(C(n))return this._returnResult({data:null,error:n});throw n}}async signInWithPasskey(e){var r,n,s;Ke(this.experimental);try{if(!Di())return this._returnResult({data:null,error:new Ye("Browser does not support WebAuthn",null)});const{data:i,error:a}=await this._startPasskeyAuthentication({options:{captchaToken:(r=e==null?void 0:e.options)===null||r===void 0?void 0:r.captchaToken}});if(a||!i)return this._returnResult({data:null,error:a});const o=Qc(i.options),l=(s=(n=e==null?void 0:e.options)===null||n===void 0?void 0:n.signal)!==null&&s!==void 0?s:sl.createNewAbortSignal(),{data:c,error:h}=await Yf({publicKey:o,signal:l});if(h||!c)return this._returnResult({data:null,error:h??new Ye("WebAuthn ceremony failed",null)});const d=Yc(c);return this._verifyPasskeyAuthentication({challengeId:i.challenge_id,credential:d})}catch(i){if(C(i))return this._returnResult({data:null,error:i});throw i}}async registerPasskey(e){var r,n;Ke(this.experimental);try{if(!Di())return this._returnResult({data:null,error:new Ye("Browser does not support WebAuthn",null)});const{data:s,error:i}=await this._startPasskeyRegistration();if(i||!s)return this._returnResult({data:null,error:i});const a=Jc(s.options),o=(n=(r=e==null?void 0:e.options)===null||r===void 0?void 0:r.signal)!==null&&n!==void 0?n:sl.createNewAbortSignal(),{data:l,error:c}=await Xf({publicKey:a,signal:o});if(c||!l)return this._returnResult({data:null,error:c??new Ye("WebAuthn ceremony failed",null)});const h=Xc(l);return this._verifyPasskeyRegistration({challengeId:s.challenge_id,credential:h})}catch(s){if(C(s))return this._returnResult({data:null,error:s});throw s}}async _startPasskeyRegistration(){Ke(this.experimental);try{return await this._useSession(async e=>{const{data:{session:r},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!r)return this._returnResult({data:null,error:new ae});const{data:s,error:i}=await P(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:r.access_token,body:{}});return i?this._returnResult({data:null,error:i}):this._returnResult({data:s,error:null})})}catch(e){if(C(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){Ke(this.experimental);try{return await this._useSession(async r=>{const{data:{session:n},error:s}=r;if(s)return this._returnResult({data:null,error:s});if(!n)return this._returnResult({data:null,error:new ae});const{data:i,error:a}=await P(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:n.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(r){if(C(r))return this._returnResult({data:null,error:r});throw r}}async _startPasskeyAuthentication(e){var r;Ke(this.experimental);try{const{data:n,error:s}=await P(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(r=e==null?void 0:e.options)===null||r===void 0?void 0:r.captchaToken}}});return s?this._returnResult({data:null,error:s}):this._returnResult({data:n,error:null})}catch(n){if(C(n))return this._returnResult({data:null,error:n});throw n}}async _verifyPasskeyAuthentication(e){Ke(this.experimental);try{const{data:r,error:n}=await P(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:De});return n?this._returnResult({data:null,error:n}):(r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),this._returnResult({data:r,error:null}))}catch(r){if(C(r))return this._returnResult({data:null,error:r});throw r}}async _listPasskeys(){Ke(this.experimental);try{return await this._useSession(async e=>{const{data:{session:r},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!r)return this._returnResult({data:null,error:new ae});const{data:s,error:i}=await P(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:r.access_token,xform:a=>({data:a,error:null})});return i?this._returnResult({data:null,error:i}):this._returnResult({data:s,error:null})})}catch(e){if(C(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){Ke(this.experimental);try{return await this._useSession(async r=>{const{data:{session:n},error:s}=r;if(s)return this._returnResult({data:null,error:s});if(!n)return this._returnResult({data:null,error:new ae});const{data:i,error:a}=await P(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(r){if(C(r))return this._returnResult({data:null,error:r});throw r}}async _deletePasskey(e){Ke(this.experimental);try{return await this._useSession(async r=>{const{data:{session:n},error:s}=r;if(s)return this._returnResult({data:null,error:s});if(!n)return this._returnResult({data:null,error:new ae});const{error:i}=await P(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,noResolveJson:!0});return i?this._returnResult({data:null,error:i}):this._returnResult({data:null,error:null})})}catch(r){if(C(r))return this._returnResult({data:null,error:r});throw r}}}cs.nextInstanceID={};const gw=cs,vw="2.110.8";let Cn="",Bi;if(typeof Deno<"u"){var qa;Cn="deno",Bi=(qa=Deno.version)===null||qa===void 0?void 0:qa.deno}else if(typeof document<"u")Cn="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")Cn="react-native";else{var Ha;Cn="node";const t=globalThis.process;Bi=t==null||(Ha=t.version)===null||Ha===void 0?void 0:Ha.replace(/^v/,"")}const Zf=[`runtime=${Cn}`];Bi&&Zf.push(`runtime-version=${Bi}`);const yw={"X-Client-Info":`supabase-js/${vw}; ${Zf.join("; ")}`},ww={headers:yw},xw={schema:"public"},_w={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},bw={},kw={enabled:!1,respectSamplingDecision:!0};function Sw(t,e,r,n){function s(i){return i instanceof r?i:new r(function(a){a(i)})}return new(r||(r=Promise))(function(i,a){function o(h){try{c(n.next(h))}catch(d){a(d)}}function l(h){try{c(n.throw(h))}catch(d){a(d)}}function c(h){h.done?i(h.value):s(h.value).then(o,l)}c((n=n.apply(t,[])).next())})}let Va=null;const Ew="@opentelemetry/api";function jw(){return Va===null&&(Va=import(Ew).catch(()=>null)),Va}function Cw(){return Sw(this,void 0,void 0,function*(){try{const t=yield jw();if(!t||!t.propagation||!t.context)return null;const e={};t.propagation.inject(t.context.active(),e);const r=e.traceparent;return r?{traceparent:r,tracestate:e.tracestate,baggage:e.baggage}:null}catch{return null}})}function Tw(t){if(!t||typeof t!="string")return null;const e=t.split("-");if(e.length!==4)return null;const[r,n,s,i]=e;if(r.length!==2||n.length!==32||s.length!==16||i.length!==2)return null;const a=/^[0-9a-f]+$/i;return!a.test(r)||!a.test(n)||!a.test(s)||!a.test(i)||n==="00000000000000000000000000000000"||s==="0000000000000000"?null:{version:r,traceId:n,parentId:s,traceFlags:i,isSampled:(parseInt(i,16)&1)===1}}function Nw(t,e){if(!t||!e||e.length===0)return!1;let r;if(t instanceof URL)r=t;else try{r=new URL(t)}catch{return!1}for(const n of e)try{if(typeof n=="string"){if(Rw(r.hostname,n))return!0}else if(n instanceof RegExp){if(n.test(r.hostname))return!0}else if(typeof n=="function"&&n(r))return!0}catch{continue}return!1}function Rw(t,e){if(e===t)return!0;if(e.startsWith("*.")){const r=e.slice(2);if(t.endsWith(r)&&(t===r||t.endsWith("."+r)))return!0}return!1}function Pw(t){const e=[];try{const r=new URL(t);e.push(r.hostname)}catch{}return e.push("*.supabase.co","*.supabase.in"),e.push("localhost","127.0.0.1","[::1]"),e}function ds(t){"@babel/helpers - typeof";return ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ds(t)}function Aw(t,e){if(ds(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(ds(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ow(t){var e=Aw(t,"string");return ds(e)=="symbol"?e:e+""}function Iw(t,e,r){return(e=Ow(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Zc(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,n)}return r}function J(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Zc(Object(r),!0).forEach(function(n){Iw(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Zc(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}const Lw=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),$w=()=>Headers,ep=t=>t.startsWith("sb_publishable_")||t.startsWith("sb_secret_"),Uw="sb_temp_",ed=new Set,Dw=t=>{var e,r;if(!t.startsWith("sb_")||ep(t)||t.startsWith(Uw))return;const n=(e=(r=t.match(/^sb_[a-zA-Z0-9]+_/))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:"unknown";ed.has(n)||(ed.add(n),console.warn("@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type."))},td=(t,e,r,n,s,i)=>{const a=Lw(n),o=$w(),l=(s==null?void 0:s.enabled)===!0,c=(s==null?void 0:s.respectSamplingDecision)!==!1,h=l?Pw(e):null,d=!(i!=null&&i.omitApiKeyAsBearer&&ep(t));return async(f,g)=>{const y=await r();let w=new o(g==null?void 0:g.headers);if(w.has("apikey")||w.set("apikey",t),!w.has("Authorization")){const x=y??(d?t:null);x&&w.set("Authorization",`Bearer ${x}`)}if(h){const x=await zw(f,h,c);x&&(x.traceparent&&!w.has("traceparent")&&w.set("traceparent",x.traceparent),x.tracestate&&!w.has("tracestate")&&w.set("tracestate",x.tracestate),x.baggage&&!w.has("baggage")&&w.set("baggage",x.baggage))}return a(f,J(J({},g),{},{headers:w}))}};async function zw(t,e,r){if(!Nw(typeof t=="string"||t instanceof URL?t:t.url,e))return null;const n=await Cw();if(!n||!n.traceparent)return null;if(r){const s=Tw(n.traceparent);if(s&&!s.isSampled)return null}return n}function rd(t){return typeof t=="boolean"?{enabled:t}:t}function Bw(t){return t.endsWith("/")?t:t+"/"}function Fw(t,e){var r,n,s,i,a,o;const{db:l,auth:c,realtime:h,global:d}=t,{db:f,auth:g,realtime:y,global:w}=e,x=rd(t.tracePropagation),m=rd(e.tracePropagation),p={db:J(J({},f),l),auth:J(J({},g),c),realtime:J(J({},y),h),storage:{},global:J(J(J({},w),d),{},{headers:J(J({},(r=w==null?void 0:w.headers)!==null&&r!==void 0?r:{}),(n=d==null?void 0:d.headers)!==null&&n!==void 0?n:{})}),tracePropagation:{enabled:(s=(i=x==null?void 0:x.enabled)!==null&&i!==void 0?i:m==null?void 0:m.enabled)!==null&&s!==void 0?s:!1,respectSamplingDecision:(a=(o=x==null?void 0:x.respectSamplingDecision)!==null&&o!==void 0?o:m==null?void 0:m.respectSamplingDecision)!==null&&a!==void 0?a:!0},accessToken:async()=>""};return t.accessToken?p.accessToken=t.accessToken:delete p.accessToken,p}function Mw(t){const e=t==null?void 0:t.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(Bw(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var Ww=class extends gw{constructor(t){super(t)}},qw=class{constructor(t,e,r){var n,s;this.supabaseUrl=t,this.supabaseKey=e;const i=Mw(t);if(!e)throw new Error("supabaseKey is required.");Dw(e),this.realtimeUrl=new URL("realtime/v1",i),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",i),this.storageUrl=new URL("storage/v1",i),this.functionsUrl=new URL("functions/v1",i);const a=`sb-${i.hostname.split(".")[0]}-auth-token`,o={db:xw,realtime:bw,auth:J(J({},_w),{},{storageKey:a}),global:ww,tracePropagation:kw},l=Fw(r??{},o);if(this.settings=l,this.storageKey=(n=l.auth.storageKey)!==null&&n!==void 0?n:"",this.headers=(s=l.global.headers)!==null&&s!==void 0?s:{},l.accessToken)this.accessToken=l.accessToken,this.auth=new Proxy({},{get:(h,d)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(d)} is not possible`)}});else{var c;this.auth=this._initSupabaseAuthClient((c=l.auth)!==null&&c!==void 0?c:{},this.headers,l.global.fetch)}this.fetch=td(e,t,this._getSessionToken.bind(this),l.global.fetch,l.tracePropagation),this.functionsFetch=td(e,t,this._getSessionToken.bind(this),l.global.fetch,l.tracePropagation,{omitApiKeyAsBearer:!0}),this.realtime=this._initRealtimeClient(J({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},l.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(h=>this.realtime.setAuth(h)).catch(h=>console.warn("Failed to set initial Realtime auth token:",h)),this.rest=new Xv(new URL("rest/v1",i).href,{headers:this.headers,schema:l.db.schema,fetch:this.fetch,timeout:l.db.timeout,urlLengthLimit:l.db.urlLengthLimit}),this.storage=new g0(this.storageUrl.href,this.headers,this.fetch,r==null?void 0:r.storage),l.accessToken||this._listenForAuthEvents()}get functions(){return new Mv(this.functionsUrl.href,{headers:this.headers,customFetch:this.functionsFetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,e={},r={head:!1,get:!1,count:void 0}){return this.rest.rpc(t,e,r)}channel(t,e={config:{}}){return this.realtime.channel(t,e)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getSessionToken(){var t=this,e,r;if(t.accessToken)return await t.accessToken();const{data:n}=await t.auth.getSession();return(e=(r=n.session)===null||r===void 0?void 0:r.access_token)!==null&&e!==void 0?e:null}async _getAccessToken(){var t=this,e;return(e=await t._getSessionToken())!==null&&e!==void 0?e:t.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:e,detectSessionInUrl:r,storage:n,userStorage:s,storageKey:i,flowType:a,lock:o,debug:l,throwOnError:c,experimental:h,lockAcquireTimeout:d,skipAutoInitialize:f},g,y){const w={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Ww({url:this.authUrl.href,headers:J(J({},w),g),storageKey:i,autoRefreshToken:t,persistSession:e,detectSessionInUrl:r,storage:n,userStorage:s,flowType:a,lock:o,debug:l,throwOnError:c,experimental:h,fetch:y,lockAcquireTimeout:d,skipAutoInitialize:f,hasCustomAuthorizationHeader:Object.keys(this.headers).some(x=>x.toLowerCase()==="authorization")})}_initRealtimeClient(t){return new By(this.realtimeUrl.href,J(J({},t),{},{params:J(J({},{apikey:this.supabaseKey}),t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,e)=>{this._handleTokenChanged(t,"CLIENT",e==null?void 0:e.access_token)})}_handleTokenChanged(t,e,r){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN"||t==="INITIAL_SESSION")&&this.changedAccessToken!==r?(this.changedAccessToken=r,this.realtime.setAuth(r)):t==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const Hw=(t,e,r)=>new qw(t,e,r);function Vw(){if(typeof window<"u"||globalThis.Deno!==void 0)return!1;const t=globalThis.process;if(!t)return!1;const e=t.version;if(e==null)return!1;const r=e.match(/^v(\d+)\./);return r?parseInt(r[1],10)<=20:!1}Vw()&&console.warn("⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715");const il="https://SEU-PROJETO.supabase.co",Kw="coloque-aqui-a-anon-public-key",tp=il.startsWith("http://")||il.startsWith("https://"),Gw=tp?il:"https://placeholder-project.supabase.co",Jw=Kw;tp||console.warn("[aviso] VITE_SUPABASE_URL ou VITE_SUPABASE_ANON_KEY ausentes ou com placeholder. Configure no arquivo .env se for utilizar o banco do Supabase.");const sr=Hw(Gw,Jw),rp=b.createContext(null);function Qw({children:t}){const[e,r]=b.useState(null),[n,s]=b.useState(null),[i,a]=b.useState(!0);async function o(f){if(!f){s(null);return}try{const{data:g}=await sr.from("profiles").select("*").eq("id",f).single();s(g||null)}catch{s(null)}}b.useEffect(()=>{let f=!0;async function g(){var y;try{const{data:w,error:x}=await sr.auth.getSession();if(x)throw x;const m=((y=w==null?void 0:w.session)==null?void 0:y.user)||null;f&&r(m),m!=null&&m.id&&await o(m.id)}catch{f&&(r(null),s(null))}finally{f&&a(!1)}}g();try{const{data:y}=sr.auth.onAuthStateChange((w,x)=>{if(!f)return;const m=(x==null?void 0:x.user)||null;r(m),m!=null&&m.id?o(m.id):s(null)});return()=>{var w;f=!1,(w=y==null?void 0:y.subscription)==null||w.unsubscribe()}}catch{return()=>{f=!1}}},[]);async function l(f,g){const{error:y}=await sr.auth.signInWithPassword({email:f,password:g});if(y)throw y}async function c(f,g,y){const{error:w}=await sr.auth.signUp({email:f,password:g,options:{data:{full_name:y}}});if(w)throw w}async function h(){try{await sr.auth.signOut()}catch{}r(null),s(null)}const d=(n==null?void 0:n.role)==="admin";return u.jsx(rp.Provider,{value:{user:e,profile:n,isAdmin:d,loading:i,signIn:l,signUp:c,signOut:h},children:t})}function un(){return b.useContext(rp)}const np=b.createContext(null),nd="doces-tentacoes:carrinho";function Xw({children:t}){const[e,r]=b.useState(()=>{try{const c=localStorage.getItem(nd);return c?JSON.parse(c):[]}catch{return[]}});b.useEffect(()=>{localStorage.setItem(nd,JSON.stringify(e))},[e]);function n(c,h=1){r(d=>d.find(g=>g.product_id===c.id)?d.map(g=>g.product_id===c.id?{...g,quantity:g.quantity+h}:g):[...d,{product_id:c.id,name:c.name,price:c.price,image_url:c.image_url,quantity:h}])}function s(c,h){if(h<=0)return i(c);r(d=>d.map(f=>f.product_id===c?{...f,quantity:h}:f))}function i(c){r(h=>h.filter(d=>d.product_id!==c))}function a(){r([])}const o=e.reduce((c,h)=>c+h.price*h.quantity,0),l=e.reduce((c,h)=>c+h.quantity,0);return u.jsx(np.Provider,{value:{items:e,addItem:n,updateQuantity:s,removeItem:i,clearCart:a,total:o,count:l},children:t})}function ws(){return b.useContext(np)}function Yw(){const{user:t,isAdmin:e,signOut:r}=un(),{count:n}=ws(),[s,i]=b.useState(!1);useEffect(()=>(s?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[s]);const a=({isActive:l})=>({fontWeight:700,fontSize:"0.95rem",color:l?"var(--color-rose-deep)":"var(--color-cocoa)",borderBottom:l?"2px solid var(--color-rose)":"2px solid transparent",paddingBottom:4}),o=()=>{i(!1)};return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`

        .header{
          width:100%;
          background:var(--color-cream);
          border-bottom:1px solid var(--color-border);
        }

        .header-container{
          width:100%;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:20px;
          gap:20px;
        }

        .header-logo{
          font-family:var(--font-display);
          font-size:1.5rem;
          font-weight:700;
          white-space:nowrap;
        }

        .header-nav{
          display:flex;
          align-items:center;
          gap:28px;
        }

        .header-actions{
          display:flex;
          align-items:center;
          gap:14px;
        }

        .menu-button{
          display:none;
          background:none;
          border:none;
          font-size:2rem;
          cursor:pointer;
        }

        .overlay{
          position:fixed;
          inset:0;
          background:rgba(0,0,0,.45);
          z-index:999;
        }

        .sidebar-menu{
          position:fixed;
          top:0;
          left:0;
          height:100vh;
          width:280px;
          background:white;
          z-index:1000;
          padding:25px;
          transform:translateX(-100%);
          transition:.3s ease;
          display:flex;
          flex-direction:column;
          gap:25px;
        }

        .sidebar-menu.open{
          transform:translateX(0);
        }

        .sidebar-header{
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .close-menu{
          border:none;
          background:none;
          font-size:2rem;
          cursor:pointer;
        }

        .sidebar-links{
          display:flex;
          flex-direction:column;
          gap:20px;
        }

        .sidebar-links a{
          text-decoration:none;
          color:var(--color-cocoa);
          font-weight:700;
        }

        .sidebar-actions{
          display:flex;
          flex-direction:column;
          gap:12px;
        }

        @media(max-width:900px){

          .header-container{
            padding:15px;
          }

          .header-nav,
          .header-actions{
            display:none;
          }

          .menu-button{
            display:block;
          }

        }

      `}),u.jsx("header",{className:"header",children:u.jsxs("div",{className:"header-container",children:[u.jsx(X,{to:"/",className:"header-logo",children:"Doces Tentações"}),u.jsxs("nav",{className:"header-nav",children:[u.jsx(Ue,{to:"/",style:a,end:!0,children:"Início"}),u.jsx(Ue,{to:"/catalogo",style:a,children:"Catálogo"}),u.jsx(Ue,{to:"/contactos",style:a,children:"Contactos"}),u.jsx(Ue,{to:"/sobre",style:a,children:"Sobre"}),u.jsx(Ue,{to:"/perfil",style:a,children:"Perfil"}),e&&u.jsx(Ue,{to:"/admin",style:a,children:"Painel Admin"})]}),u.jsxs("div",{className:"header-actions",children:[u.jsxs(X,{to:"/carrinho",className:"btn btn-secondary",children:["Carrinho ",n>0&&`(${n})`]}),t?u.jsx("button",{className:"btn btn-ghost",onClick:r,children:"Sair"}):u.jsx(X,{to:"/login",className:"btn btn-primary",children:"Entrar"})]}),u.jsx("button",{className:"menu-button",onClick:()=>i(!0),children:"☰"})]})}),s&&u.jsx("div",{className:"overlay",onClick:o}),u.jsxs("div",{className:`sidebar-menu ${s?"open":""}`,children:[u.jsxs("div",{className:"sidebar-header",children:[u.jsx("strong",{children:"Menu"}),u.jsx("button",{className:"close-menu",onClick:o,children:"×"})]}),u.jsxs("div",{className:"sidebar-links",children:[u.jsx(Ue,{to:"/",onClick:o,children:"Início"}),u.jsx(Ue,{to:"/catalogo",onClick:o,children:"Catálogo"}),u.jsx(Ue,{to:"/contactos",onClick:o,children:"Contactos"}),u.jsx(Ue,{to:"/sobre",onClick:o,children:"Sobre"}),u.jsx(Ue,{to:"/perfil",onClick:o,children:"Perfil"}),e&&u.jsx(Ue,{to:"/admin",onClick:o,children:"Painel Admin"})]}),u.jsxs("div",{className:"sidebar-actions",children:[u.jsxs(X,{to:"/carrinho",className:"btn btn-secondary",children:["Carrinho ",n>0&&`(${n})`]}),t?u.jsx("button",{className:"btn btn-ghost",onClick:r,children:"Sair"}):u.jsx(X,{to:"/login",className:"btn btn-primary",children:"Entrar"})]})]})]})}function sp({color:t="var(--color-blush)",flip:e=!1}){return u.jsx("svg",{viewBox:"0 0 1200 40",preserveAspectRatio:"none",style:{width:"100%",height:28,display:"block",transform:e?"rotate(180deg)":"none"},"aria-hidden":"true",children:u.jsx("path",{d:`M0,0 
           Q 25,40 50,0 
           Q 75,40 100,0 
           Q 125,40 150,0 
           Q 175,40 200,0 
           Q 225,40 250,0 
           Q 275,40 300,0 
           Q 325,40 350,0 
           Q 375,40 400,0 
           Q 425,40 450,0 
           Q 475,40 500,0 
           Q 525,40 550,0 
           Q 575,40 600,0 
           Q 625,40 650,0 
           Q 675,40 700,0 
           Q 725,40 750,0 
           Q 775,40 800,0 
           Q 825,40 850,0 
           Q 875,40 900,0 
           Q 925,40 950,0 
           Q 975,40 1000,0 
           Q 1025,40 1050,0 
           Q 1075,40 1100,0 
           Q 1125,40 1150,0 
           Q 1175,40 1200,0 
           L1200,0 L0,0 Z`,fill:t})})}function Zw(){return u.jsxs("footer",{className:"footer",style:{marginTop:80},children:[u.jsx(sp,{color:"var(--color-baby-pink)"}),u.jsxs("div",{style:{background:"var(--color-baby-pink)",padding:"20px 18px"},children:[u.jsxs("div",{className:"container",style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:20},children:[u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"1.2rem"},children:"Doces Tentações"}),u.jsx("p",{style:{color:"var(--color-cocoa-soft)",maxWidth:320},children:"Bolos, doces finos e tortas feitos à mão, todos os dias, com ingredientes selecionados."})]}),u.jsxs("div",{children:[u.jsx("p",{style:{fontWeight:700,marginBottom:6},children:"Contatos"}),u.jsx("p",{style:{color:"var(--color-cocoa-soft)"},children:"WhatsApp: (+244) 999-999-999"}),u.jsx("p",{style:{color:"var(--color-cocoa-soft)"},children:"Instagram: @docestentacoes"}),u.jsx("p",{style:{color:"var(--color-cocoa-soft)"},children:"Seg a dom, 9h às 19h"})]})]}),u.jsxs("p",{style:{textAlign:"center",marginTop:10,fontSize:"0.85rem",color:"var(--color-cocoa-soft)"},children:["© ",new Date().getFullYear()," Doces Tentações. Feito com carinho."]})]})]})}function ex({children:t}){const{user:e,loading:r}=un();return r?u.jsx("p",{className:"container",style:{padding:60},children:"Carregando..."}):e?t:u.jsx(Ho,{to:"/login",replace:!0})}function Ka({children:t}){const{isAdmin:e,loading:r,user:n}=un();return r?u.jsx("p",{className:"container",style:{padding:60},children:"Carregando..."}):n?e?t:u.jsx(Ho,{to:"/",replace:!0}):u.jsx(Ho,{to:"/login",replace:!0})}const tx="http://localhost:3333/api";async function Ne(t,e={}){var i;const{data:r}=await sr.auth.getSession(),n=(i=r==null?void 0:r.session)==null?void 0:i.access_token,s=await fetch(`${tx}${t}`,{...e,headers:{"Content-Type":"application/json",...n?{Authorization:`Bearer ${n}`}:{},...e.headers||{}}});if(!s.ok){let a=`Erro ${s.status}`;try{a=(await s.json()).error||a}catch{}throw new Error(a)}return s.status===204?null:s.json()}const Ze={listProducts:t=>Ne(`/products${t?`?category=${t}`:""}`),getProduct:t=>Ne(`/products/${t}`),listAllProductsAdmin:()=>Ne("/products/admin/all"),createProduct:t=>Ne("/products",{method:"POST",body:JSON.stringify(t)}),updateProduct:(t,e)=>Ne(`/products/${t}`,{method:"PUT",body:JSON.stringify(e)}),deleteProduct:t=>Ne(`/products/${t}`,{method:"DELETE"}),listCategories:()=>Ne("/categories"),createCategory:t=>Ne("/categories",{method:"POST",body:JSON.stringify(t)}),deleteCategory:t=>Ne(`/categories/${t}`,{method:"DELETE"}),createOrder:t=>Ne("/orders",{method:"POST",body:JSON.stringify(t)}),listMyOrders:()=>Ne("/orders/me"),listAllOrders:t=>Ne(`/orders${t?`?status=${t}`:""}`),updateOrderStatus:(t,e)=>Ne(`/orders/${t}/status`,{method:"PATCH",body:JSON.stringify({status:e})})};function rx({product:t}){var r;const{addItem:e}=ws();return u.jsxs("div",{className:"card",style:{overflow:"hidden",display:"flex",flexDirection:"column"},children:[u.jsx(X,{to:`/produto/${t.slug}`,children:u.jsx("div",{style:{aspectRatio:"4 / 3",background:t.image_url?`url(${t.image_url}) center/cover`:"linear-gradient(135deg, var(--color-baby-pink), var(--color-blush))",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--color-rose-deep)",fontFamily:"var(--font-display)"},children:!t.image_url&&"🧁"})}),u.jsxs("div",{style:{padding:18,display:"flex",flexDirection:"column",gap:8,flex:1},children:[((r=t.categories)==null?void 0:r.name)&&u.jsx("span",{className:"badge",children:t.categories.name}),u.jsx(X,{to:`/produto/${t.slug}`,children:u.jsx("h3",{style:{fontSize:"1.1rem",margin:0},children:t.name})}),u.jsx("p",{style:{color:"var(--color-cocoa-soft)",fontSize:"0.9rem",flex:1},children:t.description}),u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("strong",{style:{color:"var(--color-rose-deep)",fontSize:"1.15rem"},children:["KZ$ ",Number(t.price).toFixed(2)]}),u.jsx("button",{className:"btn btn-primary",onClick:()=>e(t),children:"Adicionar"})]})]})]})}const nx="/assets/image%20copy-CHjSlhSi.png";function sx(){const[t,e]=b.useState([]);return b.useEffect(()=>{Ze.listProducts().then(r=>e(r.slice(0,3))).catch(()=>{})},[]),u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`

    .hero-home{
      background:linear-gradient(
        180deg,
        var(--color-blush),
        var(--color-cream)
      );
    }


    .hero-container{

      padding:90px 24px 70px;

      display:grid;

      grid-template-columns:
      1.1fr 0.9fr;

      gap:40px;

      align-items:center;

    }


    .hero-content{
      max-width:550px;
    }


    .hero-title{

      font-size:3rem;

      line-height:1.1;

      margin:12px 0 20px;

    }


    .hero-text{

      font-size:1.05rem;

      color:var(--color-cocoa-soft);

      max-width:460px;

      line-height:1.6;

    }


    .hero-buttons{

      display:flex;

      gap:14px;

      margin-top:28px;

      flex-wrap:wrap;

    }


    .hero-logo-container{

      width:100%;

      max-width:450px;

      aspect-ratio:1;

      margin:auto;

      border-radius:50%;

      background:
      radial-gradient(
        circle at 35% 30%,
        var(--color-baby-pink),
        var(--color-rose)
      );

      display:flex;

      align-items:center;

      justify-content:center;

      overflow:hidden;

      box-shadow:var(--shadow-soft);

    }


    .hero-logo{

      width:100%;

      height:100%;

      object-fit:cover;

      border-radius:50%;

    }



    .highlights{

      padding:60px 24px;

    }


    .section-title{

      margin-bottom:30px;

    }


    .products-highlight{

      display:grid;

      grid-template-columns:
      repeat(auto-fit,minmax(240px,1fr));

      gap:24px;

    }


    .empty-text{

      color:var(--color-cocoa-soft);

    }



    /* TABLET */

    @media(max-width:900px){


      .hero-container{

        grid-template-columns:1fr;

        text-align:center;

      }


      .hero-content{

        margin:auto;

      }


      .hero-text{

        margin:auto;

      }


      .hero-buttons{

        justify-content:center;

      }


      .hero-logo-container{

        max-width:320px;

      }


      .hero-title{

        font-size:2.4rem;

      }


    }




    /* MOBILE */

    @media(max-width:600px){


      .hero-container{

        padding:50px 15px 40px;

      }


      .hero-title{

        font-size:1.9rem;

      }


      .hero-text{

        font-size:.95rem;

      }


      .hero-buttons{

        flex-direction:column;

        width:100%;

      }


      .hero-buttons .btn{

        width:100%;

        text-align:center;

      }


      .hero-logo-container{

        max-width:230px;

      }


      .highlights{

        padding:40px 15px;

      }


      .products-highlight{

        grid-template-columns:1fr;

      }


    }




    /* MOBILE PEQUENO */

    @media(max-width:380px){


      .hero-title{

        font-size:1.6rem;

      }


      .hero-logo-container{

        max-width:190px;

      }


    }


    `}),u.jsxs("div",{children:[u.jsx("section",{className:"hero-home",children:u.jsxs("div",{className:"container hero-container",children:[u.jsxs("div",{className:"hero-content",children:[u.jsx("span",{className:"eyebrow",children:"Confeitaria da Lisandra"}),u.jsxs("h1",{className:"hero-title",children:["Doces que parecem",u.jsx("br",{}),"feitos de carinho."]}),u.jsx("p",{className:"hero-text",children:"Bolos, tortas e doces finos preparados do zero, todos os dias, com receita de família e ingredientes selecionados a dedo."}),u.jsxs("div",{className:"hero-buttons",children:[u.jsx(X,{to:"/catalogo",className:"btn btn-primary",children:"Ver catálogo"}),u.jsx(X,{to:"/checkout",className:"btn btn-secondary",children:"Fazer encomenda"})]})]}),u.jsx("div",{className:"hero-logo-container",children:u.jsx("img",{alt:"logo",src:nx,className:"hero-logo"})})]})}),u.jsx(sp,{}),u.jsxs("section",{className:"container highlights",children:[u.jsx("span",{className:"eyebrow",children:"Selecionados pra você"}),u.jsx("h2",{className:"section-title",children:"Destaques da semana"}),t.length===0?u.jsx("p",{className:"empty-text",children:"Cadastre produtos no painel admin para vê-los aqui."}):u.jsx("div",{className:"products-highlight",children:t.map(r=>u.jsx(rx,{product:r},r.id))})]})]})]})}function ix(){const{addItem:t}=useCart(),[e,r]=b.useState("Todos"),[n,s]=b.useState("mais-vendidos"),[i,a]=b.useState(""),[o,l]=b.useState([]),[c,h]=b.useState(["Todos"]),[d,f]=b.useState(!0),[g,y]=b.useState("");useEffect(()=>{let p=!0;async function v(){f(!0);try{const[_,k]=await Promise.allSettled([api.listProducts(),api.listCategories()]);let S=_.status==="fulfilled"&&Array.isArray(_.value)&&_.value.length>0?_.value:PRODUTOS_PADRAO,E=["Todos"];k.status==="fulfilled"&&Array.isArray(k.value)&&k.value.length>0?E=["Todos",...k.value.map(O=>O.name)]:E=["Todos",...Array.from(new Set(S.map(O=>{var I;return((I=O.categories)==null?void 0:I.name)||O.category_name||"Outros"})))],p&&(l(S),h(E))}catch{p&&l(PRODUTOS_PADRAO)}finally{p&&f(!1)}}return v(),()=>{p=!1}},[]);const w=p=>{t(p),y(`"${p.name||p.nome}" adicionado ao carrinho!`),setTimeout(()=>{y("")},2500)},x=o.filter(p=>{var T;const v=((T=p.categories)==null?void 0:T.name)||p.category_name||p.categoria||"",_=e==="Todos"||v.toLowerCase()===e.toLowerCase(),k=p.name||p.nome||"",S=p.description||p.descricao||"",E=k.toLowerCase().includes(i.toLowerCase())||S.toLowerCase().includes(i.toLowerCase());return _&&E}).sort((p,v)=>{const _=Number(p.price||p.preco||0),k=Number(v.price||v.preco||0),S=Number(p.sales||p.vendas||0),E=Number(v.sales||v.vendas||0),T=new Date(p.created_at||0).getTime(),O=new Date(v.created_at||0).getTime();return n==="menor-preco"?_-k:n==="maior-preco"?k-_:n==="recentes"?O-T:E-S}),m=p=>new Intl.NumberFormat("pt-AO",{minimumFractionDigits:2,maximumFractionDigits:2}).format(Number(p||0));return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        .catalogo-page {
          min-height: 100vh;
          background: var(--color-cream);
        }

        .catalogo-hero {
          position: relative;
          overflow: hidden;
          background: var(--color-blush);
          padding: 40px 0 50px;
        }

        .hero-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .hero-content {
          max-width: 580px;
        }

        .hero-label {
          margin: 0 0 10px;
          color: var(--color-gold);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .hero-title {
          margin: 0;
          color: var(--color-cocoa);
          font-family: var(--font-display);
          font-size: clamp(2.1rem, 4.5vw, 3.2rem);
          line-height: 1.1;
        }

        .hero-description {
          max-width: 480px;
          margin: 15px 0 0;
          color: var(--color-cocoa-soft);
          font-size: 1rem;
          line-height: 1.6;
        }

        .hero-image-wrapper {
          width: 170px;
          height: 170px;
          flex-shrink: 0;
          border-radius: 50%;
          overflow: hidden;
          border: 8px solid rgba(255, 255, 255, 0.6);
          box-shadow: var(--shadow-soft);
          background: radial-gradient(circle at 35% 30%, var(--color-baby-pink), var(--color-rose));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .toast-notification {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: var(--color-rose-deep);
          color: white;
          padding: 14px 22px;
          border-radius: 999px;
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          z-index: 9999;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .catalogo-content {
          max-width: 1140px;
          margin: 0 auto;
          padding: 40px 24px 60px;
        }

        .search-row {
          margin-bottom: 24px;
        }

        .search-input {
          width: 100%;
          max-width: 400px;
          padding: 12px 18px;
          border-radius: 999px;
          border: 1.5px solid var(--color-border);
          font-size: 0.95rem;
          background: white;
          outline: none;
        }

        .search-input:focus {
          border-color: var(--color-rose);
          box-shadow: 0 0 0 3px rgba(226, 138, 156, 0.2);
        }

        .catalogo-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .categories {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .category-button {
          padding: 10px 20px;
          border: 1px solid var(--color-border);
          border-radius: 25px;
          background: #fff;
          color: var(--color-cocoa-soft);
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .category-button:hover {
          border-color: var(--color-rose);
          color: var(--color-rose-deep);
        }

        .category-button.active {
          border-color: var(--color-rose);
          background: var(--color-rose);
          color: #fff;
        }

        .sort-area {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--color-cocoa-soft);
          font-size: 0.9rem;
          font-weight: 700;
          white-space: nowrap;
        }

        .sort-select {
          padding: 10px 16px;
          border: 1.5px solid var(--color-border);
          border-radius: 12px;
          background: #fff;
          color: var(--color-cocoa);
          font-weight: 600;
          outline: none;
          cursor: pointer;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 24px;
        }

        .product-card {
          overflow: hidden;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          background: #fff;
          box-shadow: var(--shadow-soft);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(194, 95, 116, 0.18);
        }

        .product-image-link {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: var(--color-blush);
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.04);
        }

        .product-info {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .product-badge {
          margin-bottom: 8px;
          align-self: flex-start;
        }

        .product-name {
          margin: 0;
          color: var(--color-cocoa);
          font-family: var(--font-display);
          font-size: 1.1rem;
          line-height: 1.3;
        }

        .product-description {
          margin: 8px 0 16px;
          color: var(--color-cocoa-soft);
          font-size: 0.88rem;
          line-height: 1.5;
          flex: 1;
        }

        .product-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: auto;
        }

        .product-price {
          color: var(--color-rose-deep);
          font-size: 1.1rem;
          font-weight: 800;
        }

        .add-button {
          padding: 8px 16px;
          border: none;
          border-radius: 999px;
          background: var(--color-rose);
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .add-button:hover {
          background: var(--color-rose-deep);
          transform: scale(1.03);
        }

        .empty-products {
          padding: 60px 20px;
          text-align: center;
          color: var(--color-cocoa-soft);
          font-size: 1.1rem;
          background: white;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
        }

        .benefits {
          background: var(--color-blush);
          border-top: 1px solid var(--color-border);
          padding: 40px 0;
        }

        .benefits-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
        }

        .benefit {
          display: flex;
          align-items: center;
          gap: 14px;
          background: white;
          padding: 16px 20px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
        }

        .benefit-icon {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border: 2px solid var(--color-rose);
          border-radius: 50%;
          color: var(--color-rose-deep);
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .benefit-title {
          margin: 0 0 4px;
          color: var(--color-cocoa);
          font-size: 0.9rem;
          font-weight: 800;
        }

        .benefit-text {
          margin: 0;
          color: var(--color-cocoa-soft);
          font-size: 0.8rem;
        }

        @media (max-width: 900px) {
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
            padding-top: 20px;
          }

          .hero-content {
            margin: 0 auto;
          }

          .hero-description {
            margin: 15px auto 0;
          }

          .hero-image-wrapper {
            width: 140px;
            height: 140px;
          }

          .catalogo-toolbar {
            flex-direction: column;
            align-items: stretch;
          }

          .categories {
            justify-content: center;
          }

          .sort-area {
            justify-content: center;
            width: 100%;
          }

          .sort-select {
            flex: 1;
            max-width: 250px;
          }

          .search-input {
            max-width: 100%;
          }
        }

        @media (max-width: 600px) {
          .catalogo-content {
            padding: 24px 16px 40px;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }

          .category-button {
            padding: 8px 16px;
            font-size: 0.85rem;
          }
        }
      `}),u.jsxs("div",{className:"catalogo-page",children:[g&&u.jsxs("div",{className:"toast-notification",children:["✓ ",g]}),u.jsx("section",{className:"catalogo-hero",children:u.jsxs("div",{className:"hero-container",children:[u.jsxs("div",{className:"hero-content",children:[u.jsx("p",{className:"hero-label",children:"Nosso Catálogo"}),u.jsxs("h1",{className:"hero-title",children:["Doces artesanais ",u.jsx("br",{})," feitos especialmente para você"]}),u.jsx("p",{className:"hero-description",children:"Bolos, tortas, doces finos e delícias preparadas do zero, todos os dias com ingredientes selecionados."})]}),u.jsx("div",{className:"hero-image-wrapper",children:u.jsx("img",{className:"hero-image",src:logo,alt:"Confeitaria Logo"})})]})}),u.jsxs("main",{className:"catalogo-content",children:[u.jsx("div",{className:"search-row",children:u.jsx("input",{type:"text",className:"search-input",placeholder:"🔍 Buscar doce, bolo ou sobremesa...",value:i,onChange:p=>a(p.target.value)})}),u.jsxs("div",{className:"catalogo-toolbar",children:[u.jsx("div",{className:"categories",children:c.map(p=>u.jsx("button",{className:`category-button ${e.toLowerCase()===p.toLowerCase()?"active":""}`,onClick:()=>r(p),children:p},p))}),u.jsxs("div",{className:"sort-area",children:[u.jsx("label",{htmlFor:"sort-select",children:"Ordenar por:"}),u.jsxs("select",{id:"sort-select",className:"sort-select",value:n,onChange:p=>s(p.target.value),children:[u.jsx("option",{value:"mais-vendidos",children:"Mais vendidos"}),u.jsx("option",{value:"menor-preco",children:"Menor preço"}),u.jsx("option",{value:"maior-preco",children:"Maior preço"}),u.jsx("option",{value:"recentes",children:"Mais recentes"})]})]})]}),d?u.jsx("div",{className:"empty-products",children:"Carregando catálogo com carinho..."}):x.length>0?u.jsx("div",{className:"products-grid",children:x.map(p=>{var O;const v=p.name||p.nome,_=p.price||p.preco,k=p.description||p.descricao,S=((O=p.categories)==null?void 0:O.name)||p.category_name||p.categoria,E=p.image_url||p.imagem,T=p.slug||p.id;return u.jsxs("article",{className:"product-card",children:[u.jsx("a",{href:`/produto/${T}`,className:"product-image-link",children:u.jsx("img",{className:"product-image",src:E,alt:v,loading:"lazy"})}),u.jsxs("div",{className:"product-info",children:[S&&u.jsx("span",{className:"badge product-badge",children:S}),u.jsx("h2",{className:"product-name",children:u.jsx("a",{href:`/produto/${T}`,children:v})}),u.jsx("p",{className:"product-description",children:k}),u.jsxs("div",{className:"product-bottom",children:[u.jsxs("span",{className:"product-price",children:["KZ$ ",m(_)]}),u.jsx("button",{className:"add-button",title:"Adicionar ao carrinho",onClick:()=>w(p),children:"+ Adicionar"})]})]})]},p.id)})}):u.jsx("div",{className:"empty-products",children:"Nenhum doce encontrado com essa busca ou categoria."})]}),u.jsx("section",{className:"benefits",children:u.jsxs("div",{className:"benefits-container",children:[u.jsxs("div",{className:"benefit",children:[u.jsx("div",{className:"benefit-icon",children:"🚚"}),u.jsxs("div",{children:[u.jsx("p",{className:"benefit-title",children:"Entrega Rápida"}),u.jsx("p",{className:"benefit-text",children:"Receba em casa com carinho"})]})]}),u.jsxs("div",{className:"benefit",children:[u.jsx("div",{className:"benefit-icon",children:"✿"}),u.jsxs("div",{children:[u.jsx("p",{className:"benefit-title",children:"Ingredientes Selecionados"}),u.jsx("p",{className:"benefit-text",children:"Qualidade que você sente"})]})]}),u.jsxs("div",{className:"benefit",children:[u.jsx("div",{className:"benefit-icon",children:"♡"}),u.jsxs("div",{children:[u.jsx("p",{className:"benefit-title",children:"Feito com Amor"}),u.jsx("p",{className:"benefit-text",children:"Cada detalhe importa"})]})]}),u.jsxs("div",{className:"benefit",children:[u.jsx("div",{className:"benefit-icon",children:"💬"}),u.jsxs("div",{children:[u.jsx("p",{className:"benefit-title",children:"Atendimento via WhatsApp"}),u.jsx("p",{className:"benefit-text",children:"Fale com a gente"})]})]})]})})]})]})}function ax(){var l;const{slug:t}=uv(),[e,r]=b.useState(null),[n,s]=b.useState(1),[i,a]=b.useState(null),{addItem:o}=ws();return b.useEffect(()=>{Ze.getProduct(t).then(r).catch(()=>a("Produto não encontrado."))},[t]),i?u.jsxs("div",{className:"container",style:{padding:"60px 24px",textAlign:"center"},children:[u.jsx("h2",{children:i}),u.jsx("p",{style:{color:"var(--color-cocoa-soft)",marginBottom:20},children:"O produto que você procurou não foi encontrado ou está indisponível."}),u.jsx(X,{to:"/catalogo",className:"btn btn-secondary",children:"Voltar ao catálogo"})]}):e?u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        .product-detail-container {
          padding: 48px 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }

        .product-detail-image-wrapper {
          width: 100%;
          aspect-ratio: 1;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--color-blush);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-soft);
          border: 1px solid var(--color-border);
        }

        .product-detail-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .product-detail-container {
            padding: 24px 16px;
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}),u.jsxs("div",{className:"container product-detail-container",children:[u.jsx("div",{className:"product-detail-image-wrapper",children:e.image_url?u.jsx("img",{className:"product-detail-img",src:e.image_url,alt:e.name}):u.jsx("span",{style:{fontSize:"5rem"},children:"🍰"})}),u.jsxs("div",{children:[((l=e.categories)==null?void 0:l.name)&&u.jsx("span",{className:"badge",children:e.categories.name}),u.jsx("h1",{style:{marginTop:12},children:e.name}),u.jsx("p",{style:{color:"var(--color-cocoa-soft)",fontSize:"1.05rem",lineHeight:1.6},children:e.description}),u.jsxs("p",{style:{fontSize:"1.8rem",color:"var(--color-rose-deep)",fontWeight:800,margin:"20px 0"},children:["KZ$ ",Number(e.price).toFixed(2)]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:16,marginBottom:24},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",border:"1.5px solid var(--color-border)",borderRadius:999,background:"white"},children:[u.jsx("button",{className:"btn btn-ghost",onClick:()=>s(c=>Math.max(1,c-1)),children:"−"}),u.jsx("span",{style:{minWidth:32,textAlign:"center",fontWeight:700},children:n}),u.jsx("button",{className:"btn btn-ghost",onClick:()=>s(c=>c+1),children:"+"})]}),u.jsx("button",{className:"btn btn-primary",onClick:()=>o(e,n),children:"Adicionar ao carrinho"})]}),u.jsx("p",{style:{fontSize:"0.88rem",color:"var(--color-cocoa-soft)"},children:e.stock>0?"✓ Disponível para encomenda":"Sob encomenda — consulte o prazo via WhatsApp"})]})]})]}):u.jsx("p",{className:"container",style:{padding:60,textAlign:"center"},children:"Carregando produto..."})}function ox(){const{items:t,updateQuantity:e,removeItem:r,total:n}=ws();return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        .cart-container{
          width:100%;
          max-width:800px;
          margin:auto;
          padding:48px 24px;
        }

        .cart-empty{
          min-height:60vh;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          text-align:center;
          padding:30px;
        }

        .cart-title{
          margin-bottom:28px;
        }

        .cart-card{
          padding:24px;
          overflow:hidden;
        }

        .table-wrapper{
          width:100%;
          overflow-x:auto;
        }

        table{
          width:100%;
          border-collapse:collapse;
          min-width:600px;
        }

        th,td{
          text-align:left;
          padding:14px;
          border-bottom:1px solid var(--color-border);
          vertical-align:middle;
        }

        .product-price{
          color:var(--color-cocoa-soft);
          font-size:.85rem;
        }

        .quantity-control{
          display:flex;
          align-items:center;
          gap:8px;
        }

        .quantity-control button{
          width:35px;
          height:35px;
          padding:0;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .cart-footer{
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:20px;
          margin-top:24px;
        }

        .cart-total{
          font-size:1.3rem;
          font-weight:700;
        }

        .cart-total span{
          color:var(--color-rose-deep);
        }

        @media(max-width:700px){
          .cart-container{
            padding:30px 15px;
          }

          .cart-card{
            padding:15px;
          }

          .cart-footer{
            flex-direction:column;
            align-items:stretch;
          }

          .cart-total{
            text-align:center;
          }

          .cart-footer .btn{
            width:100%;
            text-align:center;
          }
        }

        @media(max-width:450px){
          .cart-container h1{
            font-size:1.6rem;
          }

          .quantity-control{
            gap:5px;
          }

          .quantity-control button{
            width:30px;
            height:30px;
          }
        }
      `}),t.length===0?u.jsxs("div",{className:"cart-empty",children:[u.jsx("h1",{children:"Seu carrinho está vazio"}),u.jsx("p",{style:{color:"var(--color-cocoa-soft)",marginBottom:24},children:"Que tal dar uma olhada nos nossos doces?"}),u.jsx(X,{to:"/catalogo",className:"btn btn-primary",children:"Ver catálogo"})]}):u.jsxs("div",{className:"cart-container",children:[u.jsx("h1",{className:"cart-title",children:"Seu carrinho"}),u.jsxs("div",{className:"card cart-card",children:[u.jsx("div",{className:"table-wrapper",children:u.jsxs("table",{children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Produto"}),u.jsx("th",{children:"Qtd."}),u.jsx("th",{children:"Subtotal"}),u.jsx("th",{})]})}),u.jsx("tbody",{children:t.map(s=>u.jsxs("tr",{children:[u.jsxs("td",{children:[u.jsx("strong",{children:s.name}),u.jsx("br",{}),u.jsxs("span",{className:"product-price",children:["KZ$ ",Number(s.price).toFixed(2)," un."]})]}),u.jsx("td",{children:u.jsxs("div",{className:"quantity-control",children:[u.jsx("button",{className:"btn btn-ghost",onClick:()=>e(s.product_id,s.quantity-1),children:"−"}),u.jsx("span",{children:s.quantity}),u.jsx("button",{className:"btn btn-ghost",onClick:()=>e(s.product_id,s.quantity+1),children:"+"})]})}),u.jsxs("td",{children:["KZ$ ",(s.price*s.quantity).toFixed(2)]}),u.jsx("td",{children:u.jsx("button",{className:"btn btn-ghost",onClick:()=>r(s.product_id),"aria-label":`Remover ${s.name}`,children:"✕"})})]},s.product_id))})]})}),u.jsxs("div",{className:"cart-footer",children:[u.jsxs("span",{className:"cart-total",children:["Total:",u.jsxs("span",{children:["KZ$ ",n.toFixed(2)]})]}),u.jsx(X,{to:"/checkout",className:"btn btn-primary",children:"Finalizar pedido"})]})]})]})]})}function lx(){const{items:t,total:e,clearCart:r}=ws(),{user:n}=un();vs();const[s,i]=b.useState({customer_name:"",customer_phone:"",customer_address:"",payment_method:"pix",notes:""}),[a,o]=b.useState(!1),[l,c]=b.useState(null),[h,d]=b.useState(null);function f(y){i(w=>({...w,[y.target.name]:y.target.value}))}async function g(y){y.preventDefault(),c(null),o(!0);try{const w=await Ze.createOrder({...s,items:t.map(x=>({product_id:x.product_id,quantity:x.quantity}))});d(w),r()}catch(w){c(w.message)}finally{o(!1)}}return h?u.jsxs("div",{className:"container",style:{padding:60,textAlign:"center",maxWidth:560},children:[u.jsx("h1",{children:"Pedido recebido!"}),u.jsxs("p",{style:{color:"var(--color-cocoa-soft)"},children:["Obrigado, ",h.customer_name.split(" ")[0],"! Vamos confirmar os detalhes e entrar em contato pelo telefone informado."]}),u.jsxs("p",{style:{margin:"20px 0",fontWeight:700},children:["Total: KZ$ ",Number(h.total).toFixed(2)]}),u.jsx(X,{to:"/catalogo",className:"btn btn-primary",children:"Voltar ao catálogo"})]}):t.length===0?u.jsxs("div",{className:"container",style:{padding:60,textAlign:"center"},children:[u.jsx("h1",{children:"Seu carrinho está vazio"}),u.jsx(X,{to:"/catalogo",className:"btn btn-primary",children:"Ver catálogo"})]}):u.jsxs("div",{className:"container",style:{padding:"48px 24px",maxWidth:640},children:[u.jsx("h1",{style:{marginBottom:8},children:"Finalizar pedido"}),u.jsx("p",{style:{color:"var(--color-cocoa-soft)",marginBottom:28},children:n?"Confirme seus dados de entrega abaixo.":"Você pode fazer o pedido sem criar uma conta."}),u.jsxs("form",{onSubmit:g,className:"card",style:{padding:28},children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"customer_name",children:"Nome completo"}),u.jsx("input",{id:"customer_name",name:"customer_name",required:!0,value:s.customer_name,onChange:f})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"customer_phone",children:"Telefone / WhatsApp"}),u.jsx("input",{id:"customer_phone",name:"customer_phone",required:!0,value:s.customer_phone,onChange:f})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"customer_address",children:"Endereço de entrega"}),u.jsx("textarea",{id:"customer_address",name:"customer_address",rows:3,value:s.customer_address,onChange:f})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"payment_method",children:"Forma de pagamento"}),u.jsxs("select",{id:"payment_method",name:"payment_method",value:s.payment_method,onChange:f,children:[u.jsx("option",{value:"multicaixa",children:"MultCaixa Express"}),u.jsx("option",{value:"cartao",children:"Cartão na entrega"}),u.jsx("option",{value:"paypay",children:"Paypay"}),u.jsx("option",{value:"kwiki",children:"Kwiki"}),u.jsx("option",{value:"dinheiro",children:"Dinheiro na entrega"})]})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"notes",children:"Observações (opcional)"}),u.jsx("textarea",{id:"notes",name:"notes",rows:2,value:s.notes,onChange:f,placeholder:"Ex: sem morango, escrever 'Parabéns' no bolo..."})]}),l&&u.jsx("p",{style:{color:"#b23b3b",marginBottom:12},children:l}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,marginTop:8},children:[u.jsxs("strong",{style:{fontSize:"1.2rem",color:"var(--color-rose-deep)"},children:["Total: KZ$ ",e.toFixed(2)]}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:a,children:a?"Enviando...":"Confirmar pedido"})]})]})]})}function ux(){const{signIn:t}=un(),e=vs(),[r,n]=b.useState(""),[s,i]=b.useState(""),[a,o]=b.useState(null),[l,c]=b.useState(!1);async function h(d){d.preventDefault(),o(null),c(!0);try{await t(r,s),e("/")}catch{o("E-mail ou senha inválidos.")}finally{c(!1)}}return u.jsxs("div",{className:"container",style:{padding:"60px 24px",maxWidth:420},children:[u.jsx("h1",{children:"Entrar"}),u.jsxs("form",{onSubmit:h,className:"card",style:{padding:28,marginTop:20},children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"email",children:"E-mail"}),u.jsx("input",{id:"email",type:"email",required:!0,value:r,onChange:d=>n(d.target.value)})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"password",children:"Senha"}),u.jsx("input",{id:"password",type:"password",required:!0,value:s,onChange:d=>i(d.target.value)})]}),a&&u.jsx("p",{style:{color:"#b23b3b",marginBottom:12},children:a}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:l,style:{width:"100%"},children:l?"Entrando...":"Entrar"})]}),u.jsxs("p",{style:{marginTop:16,textAlign:"center",color:"var(--color-cocoa-soft)"},children:["Não tem conta? ",u.jsx(X,{to:"/cadastro",style:{color:"var(--color-rose-deep)",fontWeight:700},children:"Cadastre-se"})]})]})}function cx(){const{signUp:t}=un();vs();const[e,r]=b.useState(""),[n,s]=b.useState(""),[i,a]=b.useState(""),[o,l]=b.useState(null),[c,h]=b.useState(!1),[d,f]=b.useState(!1);async function g(y){y.preventDefault(),l(null),f(!0);try{await t(n,i,e),h(!0)}catch(w){l(w.message||"Não foi possível criar a conta.")}finally{f(!1)}}return c?u.jsxs("div",{className:"container",style:{padding:60,maxWidth:420,textAlign:"center"},children:[u.jsx("h1",{children:"Quase lá!"}),u.jsxs("p",{style:{color:"var(--color-cocoa-soft)"},children:["Enviamos um e-mail de confirmação para ",n,". Confirme para poder entrar."]}),u.jsx(X,{to:"/login",className:"btn btn-primary",style:{marginTop:20},children:"Ir para o login"})]}):u.jsxs("div",{className:"container",style:{padding:"60px 24px",maxWidth:420},children:[u.jsx("h1",{children:"Criar conta"}),u.jsxs("form",{onSubmit:g,className:"card",style:{padding:28,marginTop:20},children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"fullName",children:"Nome completo"}),u.jsx("input",{id:"fullName",required:!0,value:e,onChange:y=>r(y.target.value)})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"email",children:"E-mail"}),u.jsx("input",{id:"email",type:"email",required:!0,value:n,onChange:y=>s(y.target.value)})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"password",children:"Senha"}),u.jsx("input",{id:"password",type:"password",required:!0,minLength:6,value:i,onChange:y=>a(y.target.value)})]}),o&&u.jsx("p",{style:{color:"#b23b3b",marginBottom:12},children:o}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:d,style:{width:"100%"},children:d?"Criando conta...":"Criar conta"})]}),u.jsxs("p",{style:{marginTop:16,textAlign:"center",color:"var(--color-cocoa-soft)"},children:["Já tem conta? ",u.jsx(X,{to:"/login",style:{color:"var(--color-rose-deep)",fontWeight:700},children:"Entrar"})]})]})}const dx={pendente:"Pendente",confirmado:"Confirmado",em_preparo:"Em preparo",pronto:"Pronto",entregue:"Entregue",cancelado:"Cancelado"};function hx(){const[t,e]=b.useState([]),[r,n]=b.useState(!0);return b.useEffect(()=>{Ze.listMyOrders().then(e).finally(()=>n(!1))},[]),r?u.jsx("p",{className:"container",style:{padding:60},children:"Carregando..."}):u.jsxs("div",{className:"container",style:{padding:"48px 24px",maxWidth:800},children:[u.jsx("h1",{style:{marginBottom:24},children:"Meus pedidos"}),t.length===0?u.jsx("p",{style:{color:"var(--color-cocoa-soft)"},children:"Você ainda não fez nenhum pedido."}):u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:t.map(s=>u.jsxs("div",{className:"card",style:{padding:20},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[u.jsxs("strong",{children:["Pedido #",s.id.slice(0,8)]}),u.jsx("span",{className:"badge",children:dx[s.status]})]}),u.jsx("p",{style:{color:"var(--color-cocoa-soft)",fontSize:"0.9rem"},children:new Date(s.created_at).toLocaleString("pt-BR")}),u.jsx("ul",{style:{margin:"10px 0"},children:s.order_items.map(i=>u.jsxs("li",{children:[i.quantity,"x ",i.product_name]},i.id))}),u.jsxs("strong",{children:["Total: KZ$ ",Number(s.total).toFixed(2)]})]},s.id))})]})}function fx(){return u.jsxs("div",{className:"container",style:{padding:"48px 24px"},children:[u.jsx("span",{className:"eyebrow",children:"Painel administrativo"}),u.jsx("h1",{style:{marginBottom:28},children:"Bem-vinda(o) de volta"}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:20},children:[u.jsxs(X,{to:"/admin/produtos",className:"card",style:{padding:28,display:"block"},children:[u.jsx("h3",{children:"Produtos"}),u.jsx("p",{style:{color:"var(--color-cocoa-soft)"},children:"Cadastre, edite e organize o cardápio."})]}),u.jsxs(X,{to:"/admin/pedidos",className:"card",style:{padding:28,display:"block"},children:[u.jsx("h3",{children:"Pedidos"}),u.jsx("p",{style:{color:"var(--color-cocoa-soft)"},children:"Acompanhe e atualize o status das encomendas."})]})]})]})}const Ga={id:null,name:"",slug:"",description:"",price:"",image_url:"",stock:0,category_id:"",active:!0};function px(){const[t,e]=b.useState([]),[r,n]=b.useState([]),[s,i]=b.useState(Ga),[a,o]=b.useState(!1),[l,c]=b.useState(null);function h(){Ze.listAllProductsAdmin().then(e).catch(x=>c(x.message)),Ze.listCategories().then(n).catch(()=>{})}b.useEffect(h,[]);function d(x){const{name:m,value:p,type:v,checked:_}=x.target;i(k=>({...k,[m]:v==="checkbox"?_:p}))}function f(x){return x.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}async function g(x){x.preventDefault(),c(null);const m={name:s.name,slug:s.slug||f(s.name),description:s.description,price:Number(s.price),image_url:s.image_url||null,stock:Number(s.stock)||0,category_id:s.category_id||null,active:s.active};try{a?await Ze.updateProduct(s.id,m):await Ze.createProduct(m),i(Ga),o(!1),h()}catch(p){c(p.message)}}function y(x){i({id:x.id,name:x.name,slug:x.slug,description:x.description||"",price:x.price,image_url:x.image_url||"",stock:x.stock,category_id:x.category_id||"",active:x.active}),o(!0),window.scrollTo({top:0,behavior:"smooth"})}async function w(x){confirm("Remover este produto permanentemente?")&&(await Ze.deleteProduct(x),h())}return u.jsxs("div",{className:"container",style:{padding:"48px 24px"},children:[u.jsx("h1",{children:"Produtos"}),u.jsxs("form",{onSubmit:g,className:"card",style:{padding:24,margin:"24px 0",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"16px 20px"},children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{children:"Nome"}),u.jsx("input",{name:"name",required:!0,value:s.name,onChange:d})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{children:"Slug (URL)"}),u.jsx("input",{name:"slug",placeholder:"gerado automaticamente",value:s.slug,onChange:d})]}),u.jsxs("div",{className:"field",style:{gridColumn:"1 / -1"},children:[u.jsx("label",{children:"Descrição"}),u.jsx("textarea",{name:"description",rows:2,value:s.description,onChange:d})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{children:"Preço (KZ$)"}),u.jsx("input",{name:"price",type:"number",min:"0",step:"0.01",required:!0,value:s.price,onChange:d})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{children:"Estoque"}),u.jsx("input",{name:"stock",type:"number",min:"0",value:s.stock,onChange:d})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{children:"Categoria"}),u.jsxs("select",{name:"category_id",value:s.category_id,onChange:d,children:[u.jsx("option",{value:"",children:"Sem categoria"}),r.map(x=>u.jsx("option",{value:x.id,children:x.name},x.id))]})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{children:"URL da imagem"}),u.jsx("input",{name:"image_url",value:s.image_url,onChange:d,placeholder:"https://..."})]}),u.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,gridColumn:"1 / -1",marginBottom:16},children:[u.jsx("input",{type:"checkbox",name:"active",checked:s.active,onChange:d}),"Produto ativo (visível na loja)"]}),l&&u.jsx("p",{style:{color:"#b23b3b",gridColumn:"1 / -1"},children:l}),u.jsxs("div",{style:{gridColumn:"1 / -1",display:"flex",gap:12},children:[u.jsx("button",{className:"btn btn-primary",type:"submit",children:a?"Salvar alterações":"Adicionar produto"}),a&&u.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>{i(Ga),o(!1)},children:"Cancelar"})]})]}),u.jsx("div",{className:"table-responsive card",children:u.jsxs("table",{style:{padding:8},children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Nome"}),u.jsx("th",{children:"Categoria"}),u.jsx("th",{children:"Preço"}),u.jsx("th",{children:"Estoque"}),u.jsx("th",{children:"Status"}),u.jsx("th",{})]})}),u.jsx("tbody",{children:t.map(x=>{var m;return u.jsxs("tr",{children:[u.jsx("td",{children:x.name}),u.jsx("td",{children:((m=x.categories)==null?void 0:m.name)||"—"}),u.jsxs("td",{children:["KZ$ ",Number(x.price).toFixed(2)]}),u.jsx("td",{children:x.stock}),u.jsx("td",{children:u.jsx("span",{className:"badge",children:x.active?"Ativo":"Inativo"})}),u.jsxs("td",{style:{display:"flex",gap:8},children:[u.jsx("button",{className:"btn btn-ghost",onClick:()=>y(x),children:"Editar"}),u.jsx("button",{className:"btn btn-ghost",onClick:()=>w(x.id),children:"Excluir"})]})]},x.id)})})]})})]})}const sd=["pendente","confirmado","em_preparo","pronto","entregue","cancelado"],id={pendente:"Pendente",confirmado:"Confirmado",em_preparo:"Em preparo",pronto:"Pronto",entregue:"Entregue",cancelado:"Cancelado"};function mx(){const[t,e]=b.useState([]),[r,n]=b.useState(""),[s,i]=b.useState(!0);function a(){i(!0),Ze.listAllOrders(r||void 0).then(e).finally(()=>i(!1))}b.useEffect(a,[r]);async function o(l,c){await Ze.updateOrderStatus(l,c),a()}return u.jsxs("div",{className:"container",style:{padding:"48px 24px"},children:[u.jsx("h1",{style:{marginBottom:20},children:"Pedidos"}),u.jsxs("div",{className:"field",style:{maxWidth:260,marginBottom:20},children:[u.jsx("label",{children:"Filtrar por status"}),u.jsxs("select",{value:r,onChange:l=>n(l.target.value),children:[u.jsx("option",{value:"",children:"Todos"}),sd.map(l=>u.jsx("option",{value:l,children:id[l]},l))]})]}),s?u.jsx("p",{children:"Carregando..."}):t.length===0?u.jsx("p",{style:{color:"var(--color-cocoa-soft)"},children:"Nenhum pedido encontrado."}):u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:t.map(l=>u.jsxs("div",{className:"card",style:{padding:20},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12},children:[u.jsxs("div",{children:[u.jsxs("strong",{children:["#",l.id.slice(0,8)," — ",l.customer_name]}),u.jsxs("p",{style:{color:"var(--color-cocoa-soft)",fontSize:"0.9rem",margin:"4px 0"},children:[l.customer_phone," · ",new Date(l.created_at).toLocaleString("pt-BR")]})]}),u.jsx("select",{value:l.status,onChange:c=>o(l.id,c.target.value),children:sd.map(c=>u.jsx("option",{value:c,children:id[c]},c))})]}),u.jsx("ul",{style:{margin:"12px 0"},children:l.order_items.map(c=>u.jsxs("li",{children:[c.quantity,"x ",c.product_name," — KZ$ ",Number(c.subtotal).toFixed(2)]},c.id))}),l.customer_address&&u.jsxs("p",{style:{fontSize:"0.9rem",color:"var(--color-cocoa-soft)"},children:["📍 ",l.customer_address]}),l.notes&&u.jsxs("p",{style:{fontSize:"0.9rem",color:"var(--color-cocoa-soft)"},children:["📝 ",l.notes]}),u.jsxs("strong",{children:["Total: KZ$ ",Number(l.total).toFixed(2)]})]},l.id))})]})}function gx(){const[t,e]=b.useState({nome:"",email:"",telefone:"",assunto:"",dataEncomenda:"",mensagem:""}),[r,n]=b.useState(!1),s=a=>{e({...t,[a.target.name]:a.target.value})},i=a=>{a.preventDefault(),console.log(t),n(!0),e({nome:"",email:"",telefone:"",assunto:"",dataEncomenda:"",mensagem:""}),setTimeout(()=>{n(!1)},5e3)};return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`

        // * {
        //   box-sizing: border-box;
        // }

        body {
          margin: 0;
          background: #fffaf7;
          color: #4b3033;
        }

        // button,
        // input,
        // textarea,
        // select {
        //   font: inherit;
        // }

        button {
          cursor: pointer;
        }

        .contact-page {
          min-height: 100vh;
          background: #fffaf7;
        }

        .contact-hero {
          padding: 80px 20px 70px;
          text-align: center;
          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(239, 171, 187, 0.35),
              transparent 25%
            ),
            radial-gradient(
              circle at 85% 70%,
              rgba(239, 171, 187, 0.25),
              transparent 25%
            ),
            #fff5f2;
        }

        .contact-label {
          margin: 0 0 12px;
          color: #d79532;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .contact-title {
          margin: 0;
          color: #4b3033;
          font-family: Georgia, serif;
          font-size: clamp(2.2rem, 5vw, 4rem);
        }

        .contact-description {
          max-width: 650px;
          margin: 20px auto 0;
          color: #795f64;
          font-size: 1rem;
          line-height: 1.7;
        }

        .contact-container {
          max-width: 1100px;
          margin: auto;
          padding: 70px 20px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 45px;
          align-items: start;
        }

        .contact-info-title {
          margin: 0 0 12px;
          color: #4b3033;
          font-family: Georgia, serif;
          font-size: 1.8rem;
        }

        .contact-info-description {
          margin: 0 0 30px;
          color: #795f64;
          line-height: 1.7;
        }

        .contact-cards {
          display: grid;
          gap: 14px;
        }

        .contact-card {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding: 18px;
          border: 1px solid #f0e2e2;
          border-radius: 12px;
          background: #fff;
        }

        .contact-icon {
          width: 44px;
          height: 44px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          background: #fff0f3;
          color: #d96882;
          font-size: 1.2rem;
        }

        .contact-card h3 {
          margin: 0 0 5px;
          color: #4b3033;
          font-size: 0.9rem;
        }

        .contact-card p {
          margin: 0;
          color: #795f64;
          font-size: 0.85rem;
          line-height: 1.5;
        }

        .whatsapp-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          width: 100%;
          margin-top: 20px;
          padding: 14px;

          border: none;
          border-radius: 25px;

          background: #e4839a;
          color: #fff;

          font-weight: 700;
          text-decoration: none;
        }

        .social-section {
          margin-top: 25px;
        }

        .social-title {
          margin: 0 0 12px;
          font-size: 0.85rem;
        }

        .social-links {
          display: flex;
          gap: 10px;
        }

        .social-link {
          width: 40px;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid #efd9dd;
          border-radius: 50%;

          background: #fff;
          color: #d96882;

          text-decoration: none;
          font-weight: 700;
        }

        .contact-form-container {
          padding: 30px;
          border: 1px solid #f0e2e2;
          border-radius: 16px;
          background: #fff;

          box-shadow:
            0 15px 40px rgba(88, 54, 60, 0.05);
        }

        .form-title {
          margin: 0 0 7px;
          color: #4b3033;
          font-family: Georgia, serif;
          font-size: 1.6rem;
        }

        .form-subtitle {
          margin: 0 0 25px;
          color: #927479;
          font-size: 0.85rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .form-group {
          margin-bottom: 17px;
        }

        .form-label {
          display: block;
          margin-bottom: 7px;
          color: #654a4f;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 12px 14px;

          border: 1px solid #eadbdd;
          border-radius: 8px;

          outline: none;
          background: #fff;
          color: #4b3033;
        }

        .form-textarea {
          min-height: 130px;
          resize: vertical;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          border-color: #e8899e;
          box-shadow: 0 0 0 3px rgba(232, 137, 158, 0.1);
        }

        .form-button {
          width: 100%;
          padding: 14px;

          border: none;
          border-radius: 25px;

          background: #e4839a;
          color: #fff;

          font-weight: 700;
        }

        .form-button:hover {
          background: #db718b;
        }

        .success-message {
          margin-bottom: 20px;
          padding: 13px 15px;

          border: 1px solid #e3c8cd;
          border-radius: 8px;

          background: #fff2f4;
          color: #a35c6c;

          font-size: 0.85rem;
          font-weight: 700;
        }

        .response-info {
          margin-top: 15px;
          color: #927479;
          text-align: center;
          font-size: 0.75rem;
        }

        .map-section {
          margin-top: 70px;
        }

        .section-heading {
          margin-bottom: 25px;
        }

        .section-label {
          margin: 0 0 8px;
          color: #d79532;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .section-title {
          margin: 0;
          color: #4b3033;
          font-family: Georgia, serif;
          font-size: 2rem;
        }

        .map-container {
          position: relative;
          min-height: 330px;
          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 16px;
          background:
            linear-gradient(
              rgba(244, 218, 220, 0.75),
              rgba(244, 218, 220, 0.75)
            ),
            repeating-linear-gradient(
              45deg,
              #f8e8e8,
              #f8e8e8 10px,
              #f3dddd 10px,
              #f3dddd 20px
            );
        }

        .map-content {
          padding: 30px;
          text-align: center;
        }

        .map-pin {
          font-size: 3rem;
        }

        .map-content h3 {
          margin: 15px 0 8px;
          color: #4b3033;
          font-family: Georgia, serif;
          font-size: 1.5rem;
        }

        .map-content p {
          margin: 0;
          color: #795f64;
        }

        .map-button {
          display: inline-block;
          margin-top: 20px;
          padding: 11px 20px;

          border: 1px solid #e8899e;
          border-radius: 22px;

          background: #fff;
          color: #d96882;

          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
        }

        .faq-section {
          margin-top: 70px;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .faq-card {
          padding: 22px;
          border: 1px solid #f0e2e2;
          border-radius: 12px;
          background: #fff;
        }

        .faq-card h3 {
          margin: 0 0 10px;
          color: #4b3033;
          font-family: Georgia, serif;
          font-size: 1rem;
        }

        .faq-card p {
          margin: 0;
          color: #795f64;
          font-size: 0.83rem;
          line-height: 1.6;
        }

        .contact-bottom {
          padding: 50px 20px;
          background: #f8e5e7;
          text-align: center;
        }

        .contact-bottom h2 {
          margin: 0;
          color: #4b3033;
          font-family: Georgia, serif;
          font-size: 2rem;
        }

        .contact-bottom p {
          margin: 12px auto 25px;
          color: #795f64;
        }

        .bottom-button {
          display: inline-block;
          padding: 13px 25px;

          border-radius: 25px;
          background: #e4839a;
          color: #fff;

          font-weight: 700;
          text-decoration: none;
        }

        @media (max-width: 1000px) {

          .contact-nav {
            display: none;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-info {
            max-width: 700px;
          }

        }

        @media (max-width: 700px) {

          .contact-header-container {
            padding: 15px;
          }

          .contact-search {
            display: none;
          }

          .contact-hero {
            padding: 60px 20px;
          }

          .contact-container {
            padding: 50px 15px;
          }

          .contact-form-container {
            padding: 20px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }

          .map-container {
            min-height: 280px;
          }

        }

      `}),u.jsxs("div",{className:"contact-page",children:[u.jsxs("section",{className:"contact-hero",children:[u.jsx("p",{className:"contact-label",children:"ESTAMOS AQUI PARA SI"}),u.jsx("h1",{className:"contact-title",children:"Fale connosco"}),u.jsx("p",{className:"contact-description",children:"Tem uma dúvida, quer fazer uma encomenda personalizada ou simplesmente quer saber mais sobre os nossos doces? Envie-nos uma mensagem. Teremos todo o gosto em falar consigo."})]}),u.jsxs("main",{className:"contact-container",children:[u.jsxs("section",{className:"contact-grid",children:[u.jsxs("div",{className:"contact-info",children:[u.jsx("h2",{className:"contact-info-title",children:"Entre em contacto"}),u.jsx("p",{className:"contact-info-description",children:"Escolha a forma que preferir para falar connosco. Para encomendas urgentes, recomendamos o contacto direto através do WhatsApp."}),u.jsxs("div",{className:"contact-cards",children:[u.jsxs("div",{className:"contact-card",children:[u.jsx("div",{className:"contact-icon",children:"☎"}),u.jsxs("div",{children:[u.jsx("h3",{children:"Telefone"}),u.jsx("p",{children:"+244 9XX XXX XXX"}),u.jsx("p",{children:"+244 9XX XXX XXX"})]})]}),u.jsxs("div",{className:"contact-card",children:[u.jsx("div",{className:"contact-icon",children:"✉"}),u.jsxs("div",{children:[u.jsx("h3",{children:"E-mail"}),u.jsx("p",{children:"contacto@docestentacoes.ao"})]})]}),u.jsxs("div",{className:"contact-card",children:[u.jsx("div",{className:"contact-icon",children:"📍"}),u.jsxs("div",{children:[u.jsx("h3",{children:"Endereço"}),u.jsx("p",{children:"Luanda, Angola"}),u.jsx("p",{children:"Consulte a nossa localização no mapa."})]})]}),u.jsxs("div",{className:"contact-card",children:[u.jsx("div",{className:"contact-icon",children:"🕐"}),u.jsxs("div",{children:[u.jsx("h3",{children:"Horário de atendimento"}),u.jsx("p",{children:"Segunda a Sexta: 08:00 — 18:00"}),u.jsx("p",{children:"Sábado: 08:00 — 15:00"})]})]})]}),u.jsx("a",{href:"https://wa.me/244900000000",target:"_blank",rel:"noreferrer",className:"whatsapp-button",children:"💬 Falar pelo WhatsApp"}),u.jsxs("div",{className:"social-section",children:[u.jsx("h3",{className:"social-title",children:"Siga-nos nas redes sociais"}),u.jsxs("div",{className:"social-links",children:[u.jsx("a",{href:"#",className:"social-link",children:"f"}),u.jsx("a",{href:"#",className:"social-link",children:"◎"}),u.jsx("a",{href:"#",className:"social-link",children:"▶"}),u.jsx("a",{href:"#",className:"social-link",children:"♪"})]})]})]}),u.jsxs("div",{className:"contact-form-container",children:[u.jsx("h2",{className:"form-title",children:"Envie uma mensagem"}),u.jsx("p",{className:"form-subtitle",children:"Preencha o formulário e entraremos em contacto consigo."}),r&&u.jsx("div",{className:"success-message",children:"✓ Mensagem enviada com sucesso! Entraremos em contacto consigo em breve."}),u.jsxs("form",{onSubmit:i,children:[u.jsxs("div",{className:"form-row",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"form-label",children:"Nome"}),u.jsx("input",{className:"form-input",type:"text",name:"nome",placeholder:"O seu nome",value:t.nome,onChange:s,required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"form-label",children:"E-mail"}),u.jsx("input",{className:"form-input",type:"email",name:"email",placeholder:"O seu e-mail",value:t.email,onChange:s,required:!0})]})]}),u.jsxs("div",{className:"form-row",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"form-label",children:"Telefone"}),u.jsx("input",{className:"form-input",type:"tel",name:"telefone",placeholder:"+244 9XX XXX XXX",value:t.telefone,onChange:s})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"form-label",children:"Assunto"}),u.jsxs("select",{className:"form-select",name:"assunto",value:t.assunto,onChange:s,required:!0,children:[u.jsx("option",{value:"",children:"Seleccione um assunto"}),u.jsx("option",{value:"encomenda",children:"Fazer uma encomenda"}),u.jsx("option",{value:"personalizado",children:"Bolo personalizado"}),u.jsx("option",{value:"orcamento",children:"Pedir orçamento"}),u.jsx("option",{value:"duvida",children:"Dúvida"}),u.jsx("option",{value:"outro",children:"Outro assunto"})]})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"form-label",children:"Data pretendida para a encomenda"}),u.jsx("input",{className:"form-input",type:"date",name:"dataEncomenda",value:t.dataEncomenda,onChange:s})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"form-label",children:"Mensagem"}),u.jsx("textarea",{className:"form-textarea",name:"mensagem",placeholder:"Escreva aqui a sua mensagem...",value:t.mensagem,onChange:s,required:!0})]}),u.jsx("button",{type:"submit",className:"form-button",children:"Enviar mensagem"}),u.jsx("p",{className:"response-info",children:"Normalmente respondemos às mensagens em até 24 horas."})]})]})]}),u.jsxs("section",{className:"map-section",children:[u.jsxs("div",{className:"section-heading",children:[u.jsx("p",{className:"section-label",children:"VISITE-NOS"}),u.jsx("h2",{className:"section-title",children:"Onde estamos"})]}),u.jsx("div",{className:"map-container",children:u.jsxs("div",{className:"map-content",children:[u.jsx("div",{className:"map-pin",children:"📍"}),u.jsx("h3",{children:"Confeitaria da Lisandra"}),u.jsx("p",{children:"Luanda, Angola"}),u.jsx("a",{href:"https://www.google.com/maps",target:"_blank",rel:"noreferrer",className:"map-button",children:"Abrir no Google Maps"})]})})]}),u.jsxs("section",{className:"faq-section",children:[u.jsxs("div",{className:"section-heading",children:[u.jsx("p",{className:"section-label",children:"DÚVIDAS FREQUENTES"}),u.jsx("h2",{className:"section-title",children:"Antes de entrar em contacto"})]}),u.jsxs("div",{className:"faq-grid",children:[u.jsxs("div",{className:"faq-card",children:[u.jsx("h3",{children:"Com quanto tempo devo fazer uma encomenda?"}),u.jsx("p",{children:"Recomendamos que faça a sua encomenda com pelo menos 48 horas de antecedência. Para bolos personalizados, pode ser necessário mais tempo."})]}),u.jsxs("div",{className:"faq-card",children:[u.jsx("h3",{children:"Fazem entregas?"}),u.jsx("p",{children:"Sim. A disponibilidade e o custo da entrega dependem da localização e do tipo de encomenda."})]}),u.jsxs("div",{className:"faq-card",children:[u.jsx("h3",{children:"Posso personalizar o meu bolo?"}),u.jsx("p",{children:"Sim. Pode enviar a sua ideia, referência ou tema através do formulário ou falar directamente connosco pelo WhatsApp."})]})]})]})]}),u.jsxs("section",{className:"contact-bottom",children:[u.jsx("h2",{children:"Tem uma ideia doce?"}),u.jsx("p",{children:"Conte-nos o que está a imaginar e vamos transformar a sua ideia em algo especial."}),u.jsx("a",{href:"https://wa.me/244900000000",target:"_blank",rel:"noreferrer",className:"bottom-button",children:"Começar uma conversa"})]})]})]})}function vx(){return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`

        // * {
        //   box-sizing: border-box;
        // }

        body {
          margin: 0;
          background: #fffaf7;
          color: #4b3033;
        }

        a {
          text-decoration: none;
        }

        .about-page {
          min-height: 100vh;
          background: #fffaf7;
        }

        .about-cart {
          padding: 10px 18px;

          border: 1px solid #e8899e;
          border-radius: 22px;

          background: #fff;
          color: #d96882;

          font-weight: 700;
        }

        .about-hero {
          min-height: 500px;
          padding: 80px 30px;

          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 70px;

          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(239, 171, 187, 0.35),
              transparent 25%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(239, 171, 187, 0.3),
              transparent 25%
            ),
            #fff5f2;
        }

        .about-hero-content {
          max-width: 560px;
          width: 100%;
          margin-left: auto;
        }

        .about-label {
          margin: 0 0 12px;

          color: #d79532;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .about-hero-title {
          margin: 0;

          color: #4b3033;
          font-family: Georgia, serif;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 1.1;
        }

        .about-hero-text {
          margin: 25px 0 0;

          color: #795f64;
          font-size: 1rem;
          line-height: 1.8;
        }

        .about-hero-button {
          display: inline-block;
          margin-top: 30px;
          padding: 13px 25px;

          border-radius: 25px;

          background: #e4839a;
          color: #fff;

          font-size: 0.9rem;
          font-weight: 700;
        }

        .about-hero-image {
          width: 100%;
          max-width: 500px;
          min-height: 400px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-right: auto;

          overflow: hidden;
          border-radius: 25px;

          background:
            linear-gradient(
              rgba(228, 131, 154, 0.12),
              rgba(228, 131, 154, 0.12)
            ),
            url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80');

          background-size: cover;
          background-position: center;

          box-shadow:
            0 20px 50px rgba(88, 54, 60, 0.12);
        }

        .about-container {
          max-width: 1100px;
          margin: auto;
          padding: 90px 20px;
        }

        .story-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;
        }

        .story-image {
          min-height: 450px;

          border-radius: 20px;

          background:
            url('https://images.unsplash.com/photo-1559622214-f8a9850965bb?auto=format&fit=crop&w=900&q=80');

          background-size: cover;
          background-position: center;
        }

        .section-label {
          margin: 0 0 10px;

          color: #d79532;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .section-title {
          margin: 0 0 20px;

          color: #4b3033;
          font-family: Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.2;
        }

        .section-text {
          margin: 0 0 18px;

          color: #795f64;
          line-height: 1.8;
        }

        .story-signature {
          margin-top: 25px;

          color: #d96882;
          font-family: Georgia, serif;
          font-size: 1.2rem;
          font-style: italic;
        }

        .numbers-section {
          padding: 70px 20px;

          background: #f8e5e7;
        }

        .numbers-container {
          max-width: 1000px;
          margin: auto;

          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .number-card {
          text-align: center;
        }

        .number {
          display: block;

          color: #d96882;
          font-family: Georgia, serif;
          font-size: 2.5rem;
          font-weight: 700;
        }

        .number-description {
          display: block;
          margin-top: 7px;

          color: #795f64;
          font-size: 0.85rem;
        }

        .values-section {
          text-align: center;
        }

        .values-heading {
          max-width: 650px;
          margin: 0 auto 50px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;

          text-align: left;
        }

        .value-card {
          padding: 30px;

          border: 1px solid #f0e2e2;
          border-radius: 15px;

          background: #fff;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);

          box-shadow:
            0 15px 35px rgba(88, 54, 60, 0.07);
        }

        .value-icon {
          width: 50px;
          height: 50px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 20px;

          border-radius: 50%;

          background: #fff0f3;
          color: #d96882;

          font-size: 1.3rem;
        }

        .value-title {
          margin: 0 0 10px;

          color: #4b3033;
          font-family: Georgia, serif;
          font-size: 1.2rem;
        }

        .value-text {
          margin: 0;

          color: #795f64;
          font-size: 0.87rem;
          line-height: 1.7;
        }

        .process-section {
          background: #fff5f2;
        }

        .process-heading {
          max-width: 650px;
          margin-bottom: 50px;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .process-card {
          position: relative;
        }

        .process-number {
          display: flex;

          width: 45px;
          height: 45px;

          align-items: center;
          justify-content: center;

          margin-bottom: 18px;

          border-radius: 50%;

          background: #e4839a;
          color: #fff;

          font-weight: 700;
        }

        .process-card h3 {
          margin: 0 0 10px;

          color: #4b3033;
          font-family: Georgia, serif;
        }

        .process-card p {
          margin: 0;

          color: #795f64;
          font-size: 0.85rem;
          line-height: 1.7;
        }

        .team-section {
          text-align: center;
        }

        .team-heading {
          max-width: 650px;
          margin: 0 auto 50px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .team-card {
          overflow: hidden;

          border: 1px solid #f0e2e2;
          border-radius: 15px;

          background: #fff;
        }

        .team-image {
          height: 260px;

          background-size: cover;
          background-position: center;
        }

        .team-image-1 {
          background-image:
            url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=700&q=80');
        }

        .team-image-2 {
          background-image:
            url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80');
        }

        .team-image-3 {
          background-image:
            url('https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=700&q=80');
        }

        .team-info {
          padding: 22px;
        }

        .team-name {
          margin: 0 0 6px;

          color: #4b3033;
          font-family: Georgia, serif;
          font-size: 1.2rem;
        }

        .team-role {
          margin: 0;

          color: #d96882;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .cta-section {
          padding: 80px 20px;

          background: #4b3033;

          text-align: center;
        }

        .cta-title {
          margin: 0;

          color: #fff;
          font-family: Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
        }

        .cta-text {
          max-width: 600px;
          margin: 15px auto 30px;

          color: #efdfe1;
          line-height: 1.7;
        }

        .cta-button {
          display: inline-block;

          padding: 14px 28px;

          border-radius: 25px;

          background: #e4839a;
          color: #fff;

          font-weight: 700;
        }

        @media (max-width: 1000px) {

          .about-nav {
            display: none;
          }

          .about-hero {
            grid-template-columns: 1fr;
          }

          .about-hero-content {
            margin: auto;
            text-align: center;
          }

          .about-hero-image {
            margin: auto;
          }

          .story-section {
            grid-template-columns: 1fr;
          }

          .story-image {
            min-height: 350px;
          }

          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        @media (max-width: 700px) {

          .about-header-container {
            padding: 15px;
          }

          .about-search {
            display: none;
          }

          .about-hero {
            padding: 60px 20px;
            gap: 40px;
          }

          .about-hero-image {
            min-height: 300px;
          }

          .about-container {
            padding: 60px 15px;
          }

          .numbers-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .process-grid {
            grid-template-columns: 1fr;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }

        }

      `}),u.jsxs("div",{className:"about-page",children:[u.jsxs("section",{className:"about-hero",children:[u.jsxs("div",{className:"about-hero-content",children:[u.jsx("p",{className:"about-label",children:"A NOSSA HISTÓRIA"}),u.jsxs("h1",{className:"about-hero-title",children:["Feito com amor,",u.jsx("br",{}),"servido com carinho."]}),u.jsx("p",{className:"about-hero-text",children:"Somos uma confeitaria apaixonada por transformar ingredientes simples em momentos inesquecíveis. Cada bolo, cada doce e cada criação nasce do desejo de tornar os seus momentos ainda mais especiais."}),u.jsx(X,{to:"/catalogo",className:"about-hero-button",children:"Conheça os nossos produtos"})]}),u.jsx("div",{className:"about-hero-image"})]}),u.jsxs("main",{children:[u.jsx("section",{className:"about-container",children:u.jsxs("div",{className:"story-section",children:[u.jsx("div",{className:"story-image"}),u.jsxs("div",{children:[u.jsx("p",{className:"section-label",children:"DE ONDE VIEMOS"}),u.jsx("h2",{className:"section-title",children:"Uma paixão que começou na cozinha"}),u.jsx("p",{className:"section-text",children:"A nossa história começou com uma paixão simples: criar doces que trouxessem felicidade às pessoas. O que começou como um pequeno sonho foi crescendo através de cada cliente, cada encomenda e cada celebração que tivemos a oportunidade de fazer parte."}),u.jsx("p",{className:"section-text",children:"Hoje, continuamos a trabalhar com a mesma dedicação e cuidado. Acreditamos que um bom doce não é apenas uma sobremesa. É uma memória, uma celebração e uma forma de demonstrar carinho."}),u.jsx("p",{className:"story-signature",children:"— Com carinho, da nossa cozinha para a sua mesa."})]})]})}),u.jsx("section",{className:"numbers-section",children:u.jsxs("div",{className:"numbers-container",children:[u.jsxs("div",{className:"number-card",children:[u.jsx("span",{className:"number",children:"5+"}),u.jsx("span",{className:"number-description",children:"Anos de experiência"})]}),u.jsxs("div",{className:"number-card",children:[u.jsx("span",{className:"number",children:"500+"}),u.jsx("span",{className:"number-description",children:"Encomendas realizadas"})]}),u.jsxs("div",{className:"number-card",children:[u.jsx("span",{className:"number",children:"100%"}),u.jsx("span",{className:"number-description",children:"Dedicação"})]}),u.jsxs("div",{className:"number-card",children:[u.jsx("span",{className:"number",children:"∞"}),u.jsx("span",{className:"number-description",children:"Momentos especiais"})]})]})}),u.jsxs("section",{className:"about-container values-section",children:[u.jsxs("div",{className:"values-heading",children:[u.jsx("p",{className:"section-label",children:"O QUE NOS DEFINE"}),u.jsx("h2",{className:"section-title",children:"Mais do que doces"}),u.jsx("p",{className:"section-text",children:"Cada detalhe importa. Desde a escolha dos ingredientes até à apresentação final, procuramos oferecer uma experiência que seja tão especial quanto o momento que está a celebrar."})]}),u.jsxs("div",{className:"values-grid",children:[u.jsxs("div",{className:"value-card",children:[u.jsx("div",{className:"value-icon",children:"♡"}),u.jsx("h3",{className:"value-title",children:"Feito com amor"}),u.jsx("p",{className:"value-text",children:"Colocamos paixão em cada receita e cuidado em cada detalhe para que o resultado final seja sempre especial."})]}),u.jsxs("div",{className:"value-card",children:[u.jsx("div",{className:"value-icon",children:"✦"}),u.jsx("h3",{className:"value-title",children:"Qualidade"}),u.jsx("p",{className:"value-text",children:"Trabalhamos para oferecer produtos de qualidade, preparados com ingredientes seleccionados e atenção aos detalhes."})]}),u.jsxs("div",{className:"value-card",children:[u.jsx("div",{className:"value-icon",children:"♧"}),u.jsx("h3",{className:"value-title",children:"Personalização"}),u.jsx("p",{className:"value-text",children:"Cada celebração é única. Por isso, criamos soluções personalizadas para combinar com o seu momento."})]})]})]}),u.jsx("section",{className:"process-section",children:u.jsxs("div",{className:"about-container",children:[u.jsxs("div",{className:"process-heading",children:[u.jsx("p",{className:"section-label",children:"COMO TRABALHAMOS"}),u.jsx("h2",{className:"section-title",children:"Do seu pedido até à sua mesa"}),u.jsx("p",{className:"section-text",children:"Cuidamos de cada etapa para garantir que a sua experiência seja simples, agradável e especial."})]}),u.jsxs("div",{className:"process-grid",children:[u.jsxs("div",{className:"process-card",children:[u.jsx("div",{className:"process-number",children:"01"}),u.jsx("h3",{children:"Escolha"}),u.jsx("p",{children:"Explore o nosso catálogo e encontre o produto perfeito para o seu momento."})]}),u.jsxs("div",{className:"process-card",children:[u.jsx("div",{className:"process-number",children:"02"}),u.jsx("h3",{children:"Personalize"}),u.jsx("p",{children:"Para pedidos especiais, converse connosco e diga-nos como imagina a sua criação."})]}),u.jsxs("div",{className:"process-card",children:[u.jsx("div",{className:"process-number",children:"03"}),u.jsx("h3",{children:"Preparação"}),u.jsx("p",{children:"A nossa equipa prepara cuidadosamente a sua encomenda com atenção a todos os detalhes."})]}),u.jsxs("div",{className:"process-card",children:[u.jsx("div",{className:"process-number",children:"04"}),u.jsx("h3",{children:"Celebre"}),u.jsx("p",{children:"Receba a sua encomenda e aproveite o momento com quem realmente importa."})]})]})]})}),u.jsxs("section",{className:"about-container team-section",children:[u.jsxs("div",{className:"team-heading",children:[u.jsx("p",{className:"section-label",children:"A NOSSA EQUIPA"}),u.jsx("h2",{className:"section-title",children:"Pessoas por trás de cada criação"}),u.jsx("p",{className:"section-text",children:"Por trás de cada produto existe uma equipa que partilha a mesma paixão por criar momentos especiais através da confeitaria."})]}),u.jsxs("div",{className:"team-grid",children:[u.jsxs("div",{className:"team-card",children:[u.jsx("div",{className:"team-image team-image-1"}),u.jsxs("div",{className:"team-info",children:[u.jsx("h3",{className:"team-name",children:"Lisandra"}),u.jsx("p",{className:"team-role",children:"Fundadora & Confeiteira"})]})]}),u.jsxs("div",{className:"team-card",children:[u.jsx("div",{className:"team-image team-image-2"}),u.jsxs("div",{className:"team-info",children:[u.jsx("h3",{className:"team-name",children:"Equipa de Produção"}),u.jsx("p",{className:"team-role",children:"Criação & Qualidade"})]})]}),u.jsxs("div",{className:"team-card",children:[u.jsx("div",{className:"team-image team-image-3"}),u.jsxs("div",{className:"team-info",children:[u.jsx("h3",{className:"team-name",children:"Atendimento"}),u.jsx("p",{className:"team-role",children:"A cuidar de si"})]})]})]})]}),u.jsxs("section",{className:"cta-section",children:[u.jsx("h2",{className:"cta-title",children:"Vamos criar algo especial?"}),u.jsx("p",{className:"cta-text",children:"Seja para uma celebração, um presente ou simplesmente para adoçar o seu dia, estamos prontos para preparar algo especial para si."}),u.jsx(X,{to:"/contactos",className:"cta-button",children:"Entre em contacto connosco"})]})]})]})]})}function yx(){const[t,e]=b.useState(!1),[r,n]=b.useState(!1),[s,i]=b.useState({nome:"Confeitaria da Lisandra",username:"@confeitariadalisandra",categoria:"Confeitaria e Doces Artesanais",seguidores:"2,4 mil",avaliacao:"4.9",email:"contacto@confeitariadalisandra.com",telefone:"+244 900 000 000",endereco:"Luanda, Angola",horario:"Segunda - Sábado | 08:00 - 18:00",biografia:"Transformamos momentos especiais em memórias doces. Bolos personalizados, sobremesas e doces artesanais feitos com carinho.",foto:"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&q=80",capa:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=80"}),[a,o]=b.useState([{id:1,texto:"Hoje apresentamos mais uma criação especial da nossa cozinha. Cada bolo é preparado pensando no seu momento especial ❤️",imagem:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80",data:"Hoje às 10:30",curtidas:245,comentarios:32},{id:2,texto:"Obrigado a todos os clientes que confiam no nosso trabalho. Continuamos a criar doces momentos 🍰",imagem:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=80",data:"Ontem às 15:20",curtidas:180,comentarios:20}]),[l,c]=b.useState({texto:"",imagem:""});function h(f){if(f.preventDefault(),!l.texto.trim())return;const g={id:Date.now(),texto:l.texto,imagem:l.imagem,data:"Agora",curtidas:0,comentarios:0};o([g,...a]),c({texto:"",imagem:""}),e(!1)}function d(f){o(a.map(g=>g.id===f?{...g,curtidas:g.curtidas+1}:g))}return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`      .perfil-container{
        min-height:100vh;
        background:#f8f5f3;
        color:#3f2b2d;
        font-family:Arial, sans-serif;
      }

      .capa{
        height:320px;
        background-size:cover;
        background-position:center;
        position:relative;
      }

      .capa button{
        position:absolute;
        right:30px;
        bottom:25px;
        border:none;
        padding:12px 18px;
        border-radius:10px;
        background:#fff;
        color:#5a3a3d;
        font-weight:700;
        cursor:pointer;
        box-shadow:0 5px 20px rgba(0,0,0,.15);
      }


      .dados-empresa{
        max-width:1100px;
        margin:-80px auto 0;
        position:relative;
        display:flex;
        gap:25px;
        align-items:flex-end;
        padding:0 25px;
      }


      .foto-perfil{
        width:170px;
        height:170px;
        object-fit:cover;
        border-radius:50%;
        border:7px solid white;
        box-shadow:0 5px 20px rgba(0,0,0,.15);
      }


      .informacoes{
        background:white;
        padding:25px;
        border-radius:20px;
        flex:1;
        box-shadow:0 5px 20px rgba(0,0,0,.05);
      }


      .informacoes h1{
        margin:0;
        font-size:30px;
        display:flex;
        align-items:center;
        gap:10px;
      }


      .informacoes h1 span{
        color:#e98299;
        font-size:20px;
      }


      .informacoes p{
        color:#80686b;
      }


      .informacoes strong{
        color:#b96d7c;
      }


      .bio{
        max-width:650px;
        line-height:1.5;
      }


      .acoes{
        display:flex;
        gap:12px;
        margin-top:20px;
        flex-wrap:wrap;
      }


      .acoes button{
        border:none;
        padding:12px 20px;
        border-radius:12px;
        cursor:pointer;
        background:#e98299;
        color:white;
        font-weight:bold;
      }


      .acoes button:nth-child(2){
        background:#4b3033;
      }


      .acoes button:nth-child(3){
        background:#eee;
        color:#444;
      }



      .estatisticas{
        max-width:1100px;
        margin:30px auto;
        padding:0 25px;
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:20px;
      }


      .estatisticas div{
        background:white;
        padding:20px;
        border-radius:16px;
        text-align:center;
        box-shadow:0 5px 20px rgba(0,0,0,.05);
      }


      .estatisticas strong{
        display:block;
        font-size:25px;
        color:#e98299;
      }


      .estatisticas span{
        color:#80686b;
      }



      .menu-perfil{
        max-width:1100px;
        margin:auto;
        padding:0 25px;
        display:flex;
        gap:10px;
        overflow-x:auto;
      }


      .menu-perfil button{
        border:none;
        padding:12px 20px;
        border-radius:20px;
        background:white;
        cursor:pointer;
        white-space:nowrap;
      }


      .menu-perfil .selecionado{
        background:#e98299;
        color:white;
      }



      .conteudo{
        max-width:1100px;
        margin:30px auto;
        padding:0 25px;
        display:grid;
        grid-template-columns:320px 1fr;
        gap:25px;
      }



      .cartao,
      .publicacao,
      .criar-post{
        background:white;
        border-radius:20px;
        padding:20px;
        box-shadow:0 5px 20px rgba(0,0,0,.05);
      }


      .cartao h3{
        margin-top:0;
      }


      .cartao p{
        color:#756064;
        line-height:1.6;
      }



      .criar-post{
        margin-bottom:20px;
      }


      .criar-post textarea{
        width:100%;
        min-height:120px;
        resize:none;
        padding:15px;
        border:1px solid #ddd;
        border-radius:12px;
        outline:none;
      }


      .criar-post input{
        width:100%;
        margin-top:10px;
        padding:12px;
        border-radius:10px;
        border:1px solid #ddd;
      }


      .criar-post button{
        margin-top:15px;
        padding:12px 25px;
        border:none;
        border-radius:10px;
        background:#e98299;
        color:white;
        cursor:pointer;
        font-weight:bold;
      }      .publicacao{
        margin-bottom:25px;
      }


      .autor{
        display:flex;
        align-items:center;
        gap:12px;
        margin-bottom:15px;
      }


      .autor img{
        width:50px;
        height:50px;
        border-radius:50%;
        object-fit:cover;
      }


      .autor strong{
        display:block;
        color:#4b3033;
      }


      .autor small{
        color:#8a7074;
      }


      .publicacao p{
        line-height:1.6;
        color:#594347;
      }


      .imagem-post{
        width:100%;
        max-height:500px;
        object-fit:cover;
        border-radius:15px;
        margin-top:15px;
      }


      .numeros{
        margin:15px 0;
        color:#80686b;
        font-size:.95rem;
      }


      .botoes-post{
        display:flex;
        border-top:1px solid #eee;
        padding-top:15px;
        gap:10px;
      }


      .botoes-post button{
        flex:1;
        border:none;
        background:#f8f5f3;
        padding:12px;
        border-radius:10px;
        cursor:pointer;
        color:#5a3a3d;
        font-weight:600;
      }


      .botoes-post button:hover{
        background:#f5dce2;
      }



      .editar-area{
        position:fixed;
        inset:0;
        background:rgba(0,0,0,.5);
        display:flex;
        justify-content:center;
        align-items:center;
        padding:20px;
        z-index:10;
      }


      .editar-box{
        width:100%;
        max-width:500px;
        background:white;
        border-radius:20px;
        padding:25px;
      }


      .editar-box input,
      .editar-box textarea{
        width:100%;
        margin-bottom:12px;
        padding:12px;
        border-radius:10px;
        border:1px solid #ddd;
      }


      .editar-box textarea{
        resize:none;
        height:100px;
      }


      .editar-box button{
        padding:12px 20px;
        border:none;
        border-radius:10px;
        cursor:pointer;
        background:#e98299;
        color:white;
        margin-right:10px;
      }



      @media(max-width:900px){

        .capa{
          height:240px;
        }


        .dados-empresa{
          margin-top:-60px;
          flex-direction:column;
          align-items:center;
          text-align:center;
        }


        .informacoes{
          width:100%;
        }


        .informacoes h1{
          justify-content:center;
          font-size:25px;
        }


        .acoes{
          justify-content:center;
        }


        .conteudo{
          grid-template-columns:1fr;
        }


        .cartao{
          order:2;
        }

      }



      @media(max-width:600px){

        .capa{
          height:190px;
        }


        .capa button{
          right:15px;
          bottom:15px;
          padding:10px;
          font-size:.8rem;
        }


        .foto-perfil{
          width:130px;
          height:130px;
        }


        .dados-empresa{
          padding:0 15px;
        }


        .informacoes{
          padding:18px;
        }


        .informacoes h1{
          font-size:21px;
        }


        .estatisticas{
          grid-template-columns:1fr;
          padding:0 15px;
        }


        .menu-perfil{
          padding:0 15px;
        }


        .conteudo{
          padding:0 15px;
        }


        .botoes-post{
          flex-direction:column;
        }


        .botoes-post button{
          width:100%;
        }

      }



      @media(max-width:380px){

        .acoes button{
          width:100%;
        }


        .publicacao{
          padding:15px;
        }


        .autor img{
          width:42px;
          height:42px;
        }

      }


      `}),u.jsxs("div",{className:"perfil-container",children:[u.jsx("section",{className:"capa",style:{backgroundImage:`url(${s.capa})`},children:u.jsx("button",{children:"📷 Alterar capa"})}),u.jsxs("section",{className:"dados-empresa",children:[u.jsx("img",{className:"foto-perfil",src:s.foto,alt:"Perfil"}),u.jsxs("div",{className:"informacoes",children:[u.jsxs("h1",{children:[s.nome,u.jsx("span",{children:"✓"})]}),u.jsx("p",{children:s.username}),u.jsx("strong",{children:s.categoria}),u.jsx("p",{className:"bio",children:s.biografia}),u.jsxs("div",{className:"acoes",children:[u.jsx("button",{onClick:()=>e(!0),children:"+ Criar publicação"}),u.jsx("button",{onClick:()=>n(!0),children:"✏ Editar perfil"}),u.jsx("button",{children:"⋯"})]})]})]}),u.jsxs("section",{className:"estatisticas",children:[u.jsxs("div",{children:[u.jsx("strong",{children:s.seguidores}),u.jsx("span",{children:"Seguidores"})]}),u.jsxs("div",{children:[u.jsx("strong",{children:a.length}),u.jsx("span",{children:"Publicações"})]}),u.jsxs("div",{children:[u.jsx("strong",{children:s.avaliacao}),u.jsx("span",{children:"Avaliação"})]})]}),u.jsxs("div",{className:"menu-perfil",children:[u.jsx("button",{className:"selecionado",children:"Publicações"}),u.jsx("button",{children:"Sobre"}),u.jsx("button",{children:"Produtos"}),u.jsx("button",{children:"Fotos"}),u.jsx("button",{children:"Avaliações"})]}),u.jsxs("main",{className:"conteudo",children:[u.jsx("aside",{children:u.jsxs("div",{className:"cartao",children:[u.jsx("h3",{children:"Sobre a empresa"}),u.jsxs("p",{children:["📍 ",s.endereco]}),u.jsxs("p",{children:["☎ ",s.telefone]}),u.jsxs("p",{children:["✉ ",s.email]}),u.jsxs("p",{children:["🕐 ",s.horario]})]})}),u.jsxs("section",{className:"feed",children:[t&&u.jsxs("form",{className:"criar-post",onSubmit:h,children:[u.jsx("textarea",{placeholder:"Partilhe uma novidade...",value:l.texto,onChange:f=>c({...l,texto:f.target.value})}),u.jsx("input",{placeholder:"URL da imagem",value:l.imagem,onChange:f=>c({...l,imagem:f.target.value})}),u.jsx("button",{children:"Publicar"})]}),a.map(f=>u.jsxs("article",{className:"publicacao",children:[u.jsxs("div",{className:"autor",children:[u.jsx("img",{src:s.foto,alt:""}),u.jsxs("div",{children:[u.jsxs("strong",{children:[s.nome," ✓"]}),u.jsx("small",{children:f.data})]})]}),u.jsx("p",{children:f.texto}),f.imagem&&u.jsx("img",{className:"imagem-post",src:f.imagem,alt:"Publicação"}),u.jsxs("div",{className:"numeros",children:["❤️ ",f.curtidas,"   💬 ",f.comentarios]}),u.jsxs("div",{className:"botoes-post",children:[u.jsx("button",{onClick:()=>d(f.id),children:"❤️ Curtir"}),u.jsx("button",{children:"💬 Comentar"}),u.jsx("button",{children:"↗ Partilhar"})]})]},f.id))]})]}),r&&u.jsx("div",{className:"editar-area",children:u.jsxs("div",{className:"editar-box",children:[u.jsx("h2",{children:"Editar perfil"}),u.jsx("input",{value:s.nome,onChange:f=>i({...s,nome:f.target.value}),placeholder:"Nome da empresa"}),u.jsx("input",{value:s.foto,onChange:f=>i({...s,foto:f.target.value}),placeholder:"URL da foto"}),u.jsx("input",{value:s.capa,onChange:f=>i({...s,capa:f.target.value}),placeholder:"URL da capa"}),u.jsx("textarea",{value:s.biografia,onChange:f=>i({...s,biografia:f.target.value})}),u.jsx("button",{onClick:()=>n(!1),children:"Guardar"}),u.jsx("button",{onClick:()=>n(!1),children:"Cancelar"})]})})]})]})}function wx(){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[u.jsx(Yw,{}),u.jsx("main",{style:{flex:1},children:u.jsxs(Ev,{children:[u.jsx(ve,{path:"/",element:u.jsx(sx,{})}),u.jsx(ve,{path:"/catalogo",element:u.jsx(ix,{})}),u.jsx(ve,{path:"/contactos",element:u.jsx(gx,{})}),u.jsx(ve,{path:"/perfil",element:u.jsx(yx,{})}),u.jsx(ve,{path:"/sobre",element:u.jsx(vx,{})}),u.jsx(ve,{path:"/produto/:slug",element:u.jsx(ax,{})}),u.jsx(ve,{path:"/carrinho",element:u.jsx(ox,{})}),u.jsx(ve,{path:"/checkout",element:u.jsx(lx,{})}),u.jsx(ve,{path:"/login",element:u.jsx(ux,{})}),u.jsx(ve,{path:"/cadastro",element:u.jsx(cx,{})}),u.jsx(ve,{path:"/meus-pedidos",element:u.jsx(ex,{children:u.jsx(hx,{})})}),u.jsx(ve,{path:"/admin",element:u.jsx(Ka,{children:u.jsx(fx,{})})}),u.jsx(ve,{path:"/admin/produtos",element:u.jsx(Ka,{children:u.jsx(px,{})})}),u.jsx(ve,{path:"/admin/pedidos",element:u.jsx(Ka,{children:u.jsx(mx,{})})})]})}),u.jsx(Zw,{})]})}Ja.createRoot(document.getElementById("root")).render(u.jsx(gd.StrictMode,{children:u.jsx(Ov,{children:u.jsx(Qw,{children:u.jsx(Xw,{children:u.jsx(wx,{})})})})}));
