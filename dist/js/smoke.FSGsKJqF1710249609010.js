import{_ as v}from"./pagesShow.vue_vue_type_script_setup_true_lang.W_Dpalhq1710249609010.js";import{$ as c,aA as w,bk as b,bJ as f,b1 as t,aw as k,a4 as g,o as s,c as h,K as x,v as i,D as p,ag as y,a as B}from"./vendor.jNLcW6ym1710249609010.js";import{S as a}from"./SPE.xas7bdPF1710249609010.js";import"./vanilla-307d3a93.esm.Zj3kIdxv1710249609010.js";import"./_commonjsHelpers.5-cIlDoe1710249609010.js";import"./LineSegments2.vdeR0yNc1710249609010.js";const C=["object"],A=c({__name:"smokeA",async setup(l){let e,o;const{map:u}=([e,o]=w(()=>b({map:"./plugins/digitalCity/image/smokeparticle.png"})),e=await e,o(),e),r=new a.Group({texture:{value:u},blending:f,depthTest:!0,depthWrite:!1}),m=new a.Emitter({type:a.distributions.BOX,particleCount:100,maxAge:{value:4},position:{value:new t(0,0,0),spread:new t(2,0,2),radius:1},velocity:{value:new t(0,16,0),spread:new t(12,40,12),distribution:a.distributions.BOX},size:{value:[200,100,100],spread:[14,10,8],randomise:!0},acceleration:{value:new t(0,10,0)},angle:{value:0,spread:120},opacity:{value:[.5,.1],spread:[.1,0],randomise:!0},color:{value:new k("#333333")}});r.addEmitter(m);const _=r.mesh,{onLoop:d}=g();return d(({dt:n})=>{r.tick(n)}),(n,E)=>(s(),h("primitive",{object:x(_),position:[-130,26,20],renderOrder:3e3},null,8,C))}}),T=c({__name:"smoke",setup(l){return(e,o)=>(s(),i(v,null,{ability:p(()=>[(s(),i(y,null,{default:p(()=>[B(A)]),_:1}))]),_:1}))}});export{T as default};
