import{Z as m,k as n,a4 as v,a3 as h,o as g,c as C,a,C as p,a6 as x,J as s,a7 as y,D as R,a1 as S,a2 as k,aG as V,aH as w,V as e,aI as I,aJ as B,aF as F,aK as G,_ as H}from"./vendor.7da8be181706685333825.js";const c=l=>(V("data-v-3a9657c1"),l=l(),w(),l),N=c(()=>e("TresPerspectiveCamera",{position:[0,2,5]},null,-1)),T=c(()=>e("TresGridHelper",{args:[10,10]},null,-1)),b=c(()=>e("main",null,[e("section",null,[e("h1",null,"First section")]),e("section",null,[e("h2",null,"Second section")])],-1)),E=m({__name:"scrollControls",setup(l){const u=n(),i=n(),t=n(),o=n(0);v(()=>{console.log("jaime ~ progress:",o.value)});const _={clearColor:"#333",alpha:!0,outputColorSpace:S,toneMapping:k},{onLoop:d}=h();return d(()=>{t.value&&(t.value.value.rotation.x=o.value*10,t.value.value.rotation.y=o.value*2)}),(J,r)=>(g(),C(R,null,[a(s(y),x(_,{"window-size":"",class:"canvas-class"}),{default:p(()=>[N,a(s(I),{radius:1}),T,a(s(B),{ref_key:"scRef",ref:u,modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=f=>o.value=f),distance:10,"smooth-scroll":.1,"html-scroll":""},{default:p(()=>[a(s(F),{ref_key:"sphereRef",ref:i,scale:.1,position:[1,2,0]},null,512),a(s(G),{ref_key:"boxRef",ref:t,scale:.5,color:16711935,position:[-1,1,0]},null,512)]),_:1},8,["modelValue"])]),_:1},16),b],64))}});const P=H(E,[["__scopeId","data-v-3a9657c1"]]);export{P as default};