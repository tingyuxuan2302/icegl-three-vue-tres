import{B as f,S as m,N as M,M as T}from"./three.module-eabffd14.js";import{P as b,l as g,r as x}from"./trescientos-01522e33.js";import{Y as B,a7 as y,j as a,ad as V,ae as v,af as w,w as C,o as t,s as P,B as k,a8 as G,I as i,U as e,c as r,V as n,a as N}from"./vendor-4c6c5ef6.js";const S=e("TresPerspectiveCamera",{position:[11,11,11],fov:45,near:.1,far:1e3,"look-at":[-8,3,-3]},null,-1),L=e("TresDirectionalLight",{position:[0,8,4],intensity:.2,"cast-shadow":""},null,-1),R=["material"],E=e("TresBoxGeometry",{args:[1,1,1]},null,-1),I=[E],U={key:0,position:[4,0,0]},j=e("TresBoxGeometry",{args:[1,1,1]},null,-1),z=e("TresMeshToonMaterial",{color:"#efefef"},null,-1),A=[j,z],D={key:1,position:[4,1,0]},Y=e("TresBoxGeometry",{args:[1,1,1]},null,-1),$=e("TresMeshToonMaterial",{color:"#efefef"},null,-1),q=[Y,$],F={key:2,position:[0,-4,-5]},H=e("TresGroup",null,[e("TresMesh",{position:[0,0,0]},[e("TresBoxGeometry",{args:[1,1,1]}),e("TresMeshBasicMaterial",{color:"#efef11"})]),e("TresMesh",{position:[0,2,0]},[e("TresBoxGeometry",{args:[1,1,1]}),e("TresMeshBasicMaterial",{color:"#ef11ef"})])],-1),J=[H],K=e("TresAmbientLight",{intensity:.5},null,-1),Z=B({__name:"theConditional",setup(O){const u=y({clearColor:"#000000",shadows:!0,alpha:!1,shadowMapType:f,outputColorSpace:m,toneMapping:M,useLegacyLights:!1}),s=a({groupVisible:!0,boxPropMaterialVisible:!0}),_=a(null),l=a(!0);let o=null,c=null;V(()=>{o||(o=new b({title:"显隐参数",expanded:!0}),o.addBinding(l,"value",{label:"boxVisible"}),o.addBinding(s.value,"boxPropMaterialVisible"),o.addBinding(s.value,"groupVisible")),c=v().proxy}),w(()=>{o&&(o.dispose(),o=null)}),C(()=>l,(d,p)=>{p!==void 0&&(c.$refs.boxRef.visible=d.value)},{deep:!0});const h=new T({color:"#ff0000"});return(d,p)=>(t(),P(i(g),G(u,{"window-size":""}),{default:k(()=>[S,L,e("TresMesh",{ref_key:"boxRef",ref:_,position:[0,0,0],material:i(h)},I,8,R),s.value.boxPropMaterialVisible?(t(),r("TresMesh",U,A)):n("",!0),s.value.boxPropMaterialVisible?(t(),r("TresMesh",D,q)):n("",!0),s.value.groupVisible?(t(),r("TresGroup",F,J)):n("",!0),N(i(x)),K]),_:1},16))}});export{Z as default};
