var b=Object.defineProperty,q=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var _=(a,e,t)=>e in a?b(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,d=(a,e)=>{for(var t in e||(e={}))w.call(e,t)&&_(a,t,e[t]);if(i)for(var t of i(e))x.call(e,t)&&_(a,t,e[t]);return a},n=(a,e)=>q(a,k(e));import{Q,_ as y}from"./space.1882bfd6.js";import{u as P,a as S,Q as B}from"./QPage.c8f87eca.js";import{c as g,a as h,h as f,b as v,g as C,at as A,au as I,_ as $,L as V,M as j,N as r,O as o,Q as p,S as D,T as N,R as l,V as s}from"./index.48cc91dc.js";var m=g({name:"QCard",props:n(d({},P),{tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean}),setup(a,{slots:e}){const t=C(),u=S(a,t.proxy.$q),c=h(()=>"q-card"+(u.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>f(a.tag,{class:c.value},v(e.default))}}),z=g({name:"QCardActions",props:n(d({},A),{vertical:Boolean}),setup(a,{slots:e}){const t=I(a),u=h(()=>`q-card__actions ${t.value} q-card__actions--${a.vertical===!0?"vert column":"horiz row"}`);return()=>f("div",{class:u.value},v(e.default))}});const L={},F=a=>(D("data-v-220009c8"),a=a(),N(),a),H=F(()=>s("div",{class:"q-ma-lg",style:{"border-radius":"20px"}},[s("div",{class:"q-ma-sm"},[s("h3",null,"Projeto criado para treinar Vue.js e Quasar Framework"),s("p",null,[l(" Nesse sistema de lista de tarefas, pude colocar em pr\xE1tica alguns dos conhecimentos adquiridos principalmente pelas aulas do curso de Vue.JS do "),s("a",{href:"https://www.udemy.com/course/curso-vuejs-completo/",target:"_blank"},[s("strong",null,"Matheus Fraga")]),l(" na Udemy, e do curso de Quasar Framework do canal "),s("a",{href:"https://www.youtube.com/playlist?list=PLPl81lqbj-4LDCH5nPAHjoaQPDsivSem3",target:"_blank"},[s("strong",null,"BluuWeb")]),l(" no Youtube e tamb\xE9m de pesquisas na internet. ")])]),s("div",{class:"text-subtitle2 text-center q-pa-lg q-ma-lg",id:"autor"},"by Poliana Souza")],-1)),M=l(" Linkedin "),T=l(" Github ");function G(a,e,t,u,c,J){return V(),j(B,{padding:""},{default:r(()=>[o(m,{style:{"max-height":"150px"}},{default:r(()=>[o(Q,{src:y,id:"myImg"})]),_:1}),o(m,{class:"q-pa-xs q-ma-lg items-center"},{default:r(()=>[H,o(z,{class:"absolute-bottom"},{default:r(()=>[o(p,{unelevated:"",href:"https://www.linkedin.com/in/poliana-s-souza/",target:"_blank"},{default:r(()=>[M]),_:1}),o(p,{unelevated:"",href:"https://github.com/PolianaSouza",target:"_blank"},{default:r(()=>[T]),_:1})]),_:1})]),_:1})]),_:1})}var Y=$(L,[["render",G],["__scopeId","data-v-220009c8"]]);export{Y as default};
