import{r as R}from"./index.DhYZZe0J.js";var ce={exports:{}},D={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe=R,Ae=Symbol.for("react.element"),Re=Symbol.for("react.fragment"),_e=Object.prototype.hasOwnProperty,je=xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ce={key:!0,ref:!0,__self:!0,__source:!0};function ue(r,e,i){var t,n={},o=null,a=null;i!==void 0&&(o=""+i),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(t in e)_e.call(e,t)&&!Ce.hasOwnProperty(t)&&(n[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)n[t]===void 0&&(n[t]=e[t]);return{$$typeof:Ae,type:r,key:o,ref:a,props:n,_owner:je.current}}D.Fragment=Re;D.jsx=ue;D.jsxs=ue;ce.exports=D;var M=ce.exports;function Te(r,e){if(r==null)return{};var i={};for(var t in r)if({}.hasOwnProperty.call(r,t)){if(e.includes(t))continue;i[t]=r[t]}return i}function U(){return U=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var t in i)({}).hasOwnProperty.call(i,t)&&(r[t]=i[t])}return r},U.apply(null,arguments)}function J(r,e){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,t){return i.__proto__=t,i},J(r,e)}function Ie(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,J(r,e)}function Z(r,e,i){if(i||arguments.length===2)for(var t=0,n=e.length,o;t<n;t++)(o||!(t in e))&&(o||(o=Array.prototype.slice.call(e,0,t)),o[t]=e[t]);return r.concat(o||Array.prototype.slice.call(e))}/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var re=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,Oe=/\\([\u000b\u0020-\u00ff])/g,qe=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,ke=Ge;function Ge(r){if(!r)throw new TypeError("argument string is required");var e=typeof r=="object"?We(r):r;if(typeof e!="string")throw new TypeError("argument string is required to be a string");var i=e.indexOf(";"),t=i!==-1?e.slice(0,i).trim():e.trim();if(!qe.test(t))throw new TypeError("invalid media type");var n=new Pe(t.toLowerCase());if(i!==-1){var o,a,s;for(re.lastIndex=i;a=re.exec(e);){if(a.index!==i)throw new TypeError("invalid parameter format");i+=a[0].length,o=a[1].toLowerCase(),s=a[2],s.charCodeAt(0)===34&&(s=s.slice(1,-1),s.indexOf("\\")!==-1&&(s=s.replace(Oe,"$1"))),n.parameters[o]=s}if(i!==e.length)throw new TypeError("invalid parameter format")}return n}function We(r){var e;if(typeof r.getHeader=="function"?e=r.getHeader("content-type"):typeof r.headers=="object"&&(e=r.headers&&r.headers["content-type"]),typeof e!="string")throw new TypeError("content-type header is missing from object");return e}function Pe(r){this.parameters=Object.create(null),this.type=r}var W=new Map,fe=function(e){return e.cloneNode(!0)},ne=function(){return window.location.protocol==="file:"},le=function(e,i,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){try{if(!/\.svg/i.test(e)&&n.readyState===2){var o=n.getResponseHeader("Content-Type");if(!o)throw new Error("Content type not found");var a=ke(o).type;if(!(a==="image/svg+xml"||a==="text/plain"))throw new Error("Invalid content type: ".concat(a))}if(n.readyState===4){if(n.status===404||n.responseXML===null)throw new Error(ne()?"Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+e);if(n.status===200||ne()&&n.status===0)t(null,n);else throw new Error("There was a problem injecting the SVG: "+n.status+" "+n.statusText)}}catch(s){if(n.abort(),s instanceof Error)t(s,n);else throw s}},n.open("GET",e),n.withCredentials=i,n.overrideMimeType&&n.overrideMimeType("text/xml"),n.send()},A={},ie=function(e,i){A[e]=A[e]||[],A[e].push(i)},Le=function(e){for(var i=function(a,s){setTimeout(function(){if(Array.isArray(A[e])){var u=W.get(e),p=A[e][a];u instanceof SVGSVGElement&&p(null,fe(u)),u instanceof Error&&p(u),a===A[e].length-1&&delete A[e]}},0)},t=0,n=A[e].length;t<n;t++)i(t)},Ne=function(e,i,t){if(W.has(e)){var n=W.get(e);if(n===void 0){ie(e,t);return}if(n instanceof SVGSVGElement){t(null,fe(n));return}}W.set(e,void 0),ie(e,t),le(e,i,function(o,a){var s;o?W.set(e,o):((s=a.responseXML)===null||s===void 0?void 0:s.documentElement)instanceof SVGSVGElement&&W.set(e,a.responseXML.documentElement),Le(e)})},Ve=function(e,i,t){le(e,i,function(n,o){var a;n?t(n):((a=o.responseXML)===null||a===void 0?void 0:a.documentElement)instanceof SVGSVGElement&&t(null,o.responseXML.documentElement)})},Me=0,Ue=function(){return++Me},w=[],oe={},De="http://www.w3.org/2000/svg",Y="http://www.w3.org/1999/xlink",ae=function(e,i,t,n,o,a,s){var u=e.getAttribute("data-src")||e.getAttribute("src");if(!u){s(new Error("Invalid data-src or src attribute"));return}if(w.indexOf(e)!==-1){w.splice(w.indexOf(e),1),e=null;return}w.push(e),e.setAttribute("src","");var p=n?Ne:Ve;p(u,o,function(O,c){if(!c){w.splice(w.indexOf(e),1),e=null,s(O);return}var _=e.getAttribute("id");_&&c.setAttribute("id",_);var x=e.getAttribute("title");x&&c.setAttribute("title",x);var j=e.getAttribute("width");j&&c.setAttribute("width",j);var C=e.getAttribute("height");C&&c.setAttribute("height",C);var m=Array.from(new Set(Z(Z(Z([],(c.getAttribute("class")||"").split(" "),!0),["injected-svg"],!1),(e.getAttribute("class")||"").split(" "),!0))).join(" ").trim();c.setAttribute("class",m);var d=e.getAttribute("style");d&&c.setAttribute("style",d),c.setAttribute("data-src",u);var y=[].filter.call(e.attributes,function(v){return/^data-\w[\w-]*$/.test(v.name)});if(Array.prototype.forEach.call(y,function(v){v.name&&v.value&&c.setAttribute(v.name,v.value)}),t){var g={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]},q,h,S,f,b;Object.keys(g).forEach(function(v){q=v,S=g[v],h=c.querySelectorAll(q+"[id]");for(var ge=function(H,rt){f=h[H].id,b=f+"-"+Ue();var P;Array.prototype.forEach.call(S,function(Q){P=c.querySelectorAll("["+Q+'*="'+f+'"]');for(var N=0,be=P.length;N<be;N++){var te=P[N].getAttribute(Q);te&&!te.match(new RegExp('url\\("?#'+f+'"?\\)'))||P[N].setAttribute(Q,"url(#"+b+")")}});for(var B=c.querySelectorAll("[*|href]"),$=[],L=0,we=B.length;L<we;L++){var ee=B[L].getAttributeNS(Y,"href");ee&&ee.toString()==="#"+h[H].id&&$.push(B[L])}for(var z=0,Se=$.length;z<Se;z++)$[z].setAttributeNS(Y,"href","#"+b);h[H].id=b},X=0,Ee=h.length;X<Ee;X++)ge(X)})}c.removeAttribute("xmlns:a");for(var E=c.querySelectorAll("script"),T=[],k,I,G=0,ve=E.length;G<ve;G++)I=E[G].getAttribute("type"),(!I||I==="application/ecmascript"||I==="application/javascript"||I==="text/javascript")&&(k=E[G].innerText||E[G].textContent,k&&T.push(k),c.removeChild(E[G]));if(T.length>0&&(i==="always"||i==="once"&&!oe[u])){for(var F=0,me=T.length;F<me;F++)new Function(T[F])(window);oe[u]=!0}var ye=c.querySelectorAll("style");if(Array.prototype.forEach.call(ye,function(v){v.textContent+=""}),c.setAttribute("xmlns",De),c.setAttribute("xmlns:xlink",Y),a(c),!e.parentNode){w.splice(w.indexOf(e),1),e=null,s(new Error("Parent node is null"));return}e.parentNode.replaceChild(c,e),w.splice(w.indexOf(e),1),e=null,s(null,c)})},Fe=function(e,i){var t=i===void 0?{}:i,n=t.afterAll,o=n===void 0?function(){}:n,a=t.afterEach,s=a===void 0?function(){}:a,u=t.beforeEach,p=u===void 0?function(){}:u,O=t.cacheRequests,c=O===void 0?!0:O,_=t.evalScripts,x=_===void 0?"never":_,j=t.httpRequestWithCredentials,C=j===void 0?!1:j,m=t.renumerateIRIElements,d=m===void 0?!0:m;if(e&&"length"in e)for(var y=0,g=0,q=e.length;g<q;g++)ae(e[g],x,d,c,C,p,function(h,S){s(h,S),e&&"length"in e&&e.length===++y&&o(y)});else e?ae(e,x,d,c,C,p,function(h,S){s(h,S),o(1),e=null}):o(0)},pe={exports:{}},Xe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",He=Xe,Be=He;function de(){}function he(){}he.resetWarningCache=de;var $e=function(){function r(t,n,o,a,s,u){if(u!==Be){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}r.isRequired=r;function e(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:e,element:r,elementType:r,instanceOf:e,node:r,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:he,resetWarningCache:de};return i.PropTypes=i,i};pe.exports=$e();var l=pe.exports,ze=function(e){var i=e?.ownerDocument||document;return i.defaultView||window},Qe=function(e,i){for(var t in e)if(!(t in i))return!0;for(var n in i)if(e[n]!==i[n])return!0;return!1},Ze=["afterInjection","beforeInjection","desc","evalScripts","fallback","httpRequestWithCredentials","loading","renumerateIRIElements","src","title","useRequestCache","wrapper"],V="http://www.w3.org/2000/svg",se="http://www.w3.org/1999/xlink",K=function(r){function e(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o))||this,t.initialState={hasError:!1,isLoading:!0},t.state=t.initialState,t._isMounted=!1,t.reactWrapper=void 0,t.nonReactWrapper=void 0,t.refCallback=function(s){t.reactWrapper=s},t}Ie(e,r);var i=e.prototype;return i.renderSVG=function(){var n=this;if(this.reactWrapper instanceof ze(this.reactWrapper).Node){var o=this.props,a=o.desc,s=o.evalScripts,u=o.httpRequestWithCredentials,p=o.renumerateIRIElements,O=o.src,c=o.title,_=o.useRequestCache,x=this.props.onError,j=this.props.beforeInjection,C=this.props.afterInjection,m=this.props.wrapper,d,y;m==="svg"?(d=document.createElementNS(V,m),d.setAttribute("xmlns",V),d.setAttribute("xmlns:xlink",se),y=document.createElementNS(V,m)):(d=document.createElement(m),y=document.createElement(m)),d.appendChild(y),y.dataset.src=O,this.nonReactWrapper=this.reactWrapper.appendChild(d);var g=function(f){if(n.removeSVG(),!n._isMounted){x(f);return}n.setState(function(){return{hasError:!0,isLoading:!1}},function(){x(f)})},q=function(f,b){if(f){g(f);return}n._isMounted&&n.setState(function(){return{isLoading:!1}},function(){try{C(b)}catch(E){g(E)}})},h=function(f){if(f.setAttribute("role","img"),a){var b=f.querySelector(":scope > desc");b&&f.removeChild(b);var E=document.createElement("desc");E.innerHTML=a,f.prepend(E)}if(c){var T=f.querySelector(":scope > title");T&&f.removeChild(T);var k=document.createElement("title");k.innerHTML=c,f.prepend(k)}try{j(f)}catch(I){g(I)}};Fe(y,{afterEach:q,beforeEach:h,cacheRequests:_,evalScripts:s,httpRequestWithCredentials:u,renumerateIRIElements:p})}},i.removeSVG=function(){var n;(n=this.nonReactWrapper)!=null&&n.parentNode&&(this.nonReactWrapper.parentNode.removeChild(this.nonReactWrapper),this.nonReactWrapper=null)},i.componentDidMount=function(){this._isMounted=!0,this.renderSVG()},i.componentDidUpdate=function(n){var o=this;Qe(U({},n),this.props)&&this.setState(function(){return o.initialState},function(){o.removeSVG(),o.renderSVG()})},i.componentWillUnmount=function(){this._isMounted=!1,this.removeSVG()},i.render=function(){var n=this.props;n.afterInjection,n.beforeInjection,n.desc,n.evalScripts;var o=n.fallback;n.httpRequestWithCredentials;var a=n.loading;n.renumerateIRIElements,n.src,n.title,n.useRequestCache;var s=n.wrapper,u=Te(n,Ze),p=s;return R.createElement(p,U({},u,{ref:this.refCallback},s==="svg"?{xmlns:V,xmlnsXlink:se}:{}),this.state.isLoading&&a&&R.createElement(a,null),this.state.hasError&&o&&R.createElement(o,null))},e}(R.Component);K.defaultProps={afterInjection:function(){},beforeInjection:function(){},desc:"",evalScripts:"never",fallback:null,httpRequestWithCredentials:!1,loading:null,onError:function(){},renumerateIRIElements:!0,title:"",useRequestCache:!0,wrapper:"div"};K.propTypes={afterInjection:l.func,beforeInjection:l.func,desc:l.string,evalScripts:l.oneOf(["always","once","never"]),fallback:l.oneOfType([l.func,l.object,l.string]),httpRequestWithCredentials:l.bool,loading:l.oneOfType([l.func,l.object,l.string]),onError:l.func,renumerateIRIElements:l.bool,src:l.string.isRequired,title:l.string,useRequestCache:l.bool,wrapper:l.oneOf(["div","span","svg"])};const Ye={src:"/_astro/sun.Bo8BH_4k.svg",width:24,height:24,format:"svg"},Je={src:"/_astro/sun-filled.BBiu6_Kn.svg",width:24,height:24,format:"svg"},Ke={Sun:Ye,FilledSun:Je};function et({name:r,class:e,...i}){const t=!!r&&Ke[r];return t?M.jsx(K,{src:t.src,...i,className:e}):null}const it=()=>{const[r,e]=R.useState("dark");R.useEffect(()=>{const t=localStorage.getItem("theme");t&&e(t)},[]);const i=t=>{const n=t.target.checked?"light":"dark";e(n),typeof window<"u"&&localStorage.setItem("theme",n)};return R.useEffect(()=>{document.body.setAttribute("data-theme",r)},[r]),M.jsxs("div",{className:"theme-switch",children:[M.jsx(et,{name:r==="dark"?"Sun":"FilledSun",class:"icon"}),M.jsx("input",{type:"checkbox",onChange:i,checked:r==="light"})]})};export{it as ThemeSwitch};
