import{n as m,l as v,O as h,u as g,b as C,m as x}from"./trescientos-01522e33.js";import{S,N as R}from"./three.module-eabffd14.js";import{Y as y,j as n,ac as k,o as w,c as B,a as s,B as p,a8 as I,I as a,C as V,ag as b,ah as N,U as e,_ as T}from"./vendor-4c6c5ef6.js";const r=l=>(b("data-v-3a9657c1"),l=l(),N(),l),j=r(()=>e("TresPerspectiveCamera",{position:[0,2,5]},null,-1)),E=r(()=>e("TresGridHelper",{args:[10,10]},null,-1)),F=r(()=>e("main",null,[e("section",null,[e("h1",null,"First section")]),e("section",null,[e("h2",null,"Second section")])],-1)),G=y({__name:"scrollControls",setup(l){const u=n(),i=n(),t=n(),o=n(0);k(()=>{console.log("jaime ~ progress:",o.value)});const _={clearColor:"#333",alpha:!0,outputColorSpace:S,toneMapping:R},{onLoop:d}=m();return d(()=>{t.value&&(t.value.value.rotation.x=o.value*10,t.value.value.rotation.y=o.value*2)}),(M,c)=>(w(),B(V,null,[s(a(v),I(_,{"window-size":"",class:"canvas-class"}),{default:p(()=>[j,s(a(h),{radius:1}),E,s(a(g),{ref_key:"scRef",ref:u,modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=f=>o.value=f),distance:10,"smooth-scroll":.1,"html-scroll":""},{default:p(()=>[s(a(C),{ref_key:"sphereRef",ref:i,scale:.1,position:[1,2,0]},null,512),s(a(x),{ref_key:"boxRef",ref:t,scale:.5,color:16711935,position:[-1,1,0]},null,512)]),_:1},8,["modelValue"])]),_:1},16),F],64))}});const z=T(G,[["__scopeId","data-v-3a9657c1"]]);export{z as default};
