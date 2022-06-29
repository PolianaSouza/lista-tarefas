var $=Object.defineProperty,E=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var w=(e,t,n)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))H.call(t,n)&&w(e,n,t[n]);if(C)for(var n of C(t))L.call(t,n)&&w(e,n,t[n]);return e},v=(e,t)=>E(e,F(t));import{a as d,c as M,r as o,w as O,d as P,h as r,ab as U,b as W,aa as x}from"./index.03c8a577.js";const A={ratio:[String,Number]};function D(e,t){return d(()=>{const n=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const G=16/9;var V=M({name:"QImg",props:v(m({},A),{src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:G},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String}),emits:["load","error"],setup(e,{slots:t,emit:n}){const h=o(e.initialRatio),S=D(e,h);let a;const l=[o(null),o(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],s=o(0),c=o(!1),g=o(!1),T=d(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),z=d(()=>({width:e.width,height:e.height})),N=d(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),B=d(()=>v(m({},e.imgStyle),{objectFit:e.fit,objectPosition:e.position}));O(()=>y(),_);function y(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function _(i){if(clearTimeout(a),g.value=!1,i===null){c.value=!1,l[0].value=null,l[1].value=null;return}c.value=!0,l[s.value].value=i}function R({target:i}){a!==null&&(clearTimeout(a),h.value=i.naturalHeight===0?.5:i.naturalWidth/i.naturalHeight,b(i,1))}function b(i,u){a===null||u===1e3||(i.complete===!0?j(i):a=setTimeout(()=>{b(i,u+1)},50))}function j(i){a!==null&&(s.value=s.value===1?0:1,l[s.value].value=null,c.value=!1,g.value=!1,n("load",i.currentSrc||i.src))}function k(i){clearTimeout(a),c.value=!1,g.value=!0,l[0].value=null,l[1].value=null,n("error",i)}function I(i,u){return r("div",{class:"q-img__container absolute-full",key:i},u)}function q(i){const u=l[i].value,f=m({key:"img_"+i,class:N.value,style:B.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable},u);return s.value===i?(f.class+=" q-img__image--waiting",Object.assign(f,{onLoad:R,onError:k})):f.class+=" q-img__image--loaded",I("img"+i,r("img",f))}function Q(){return c.value!==!0?r("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},W(t[g.value===!0?"error":"default"])):r("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[r(x,{color:e.spinnerColor,size:e.spinnerSize})])}return _(y()),P(()=>{clearTimeout(a),a=null}),()=>{const i=[];return S.value!==null&&i.push(r("div",{key:"filler",style:S.value})),g.value!==!0&&(l[0].value!==null&&i.push(q(0)),l[1].value!==null&&i.push(q(1))),i.push(r(U,{name:"q-transition--fade"},Q)),r("div",{class:T.value,style:z.value,role:"img","aria-label":e.alt},i)}}}),X="/assets/space.f264f5c1.jpg";export{V as Q,X as _};
