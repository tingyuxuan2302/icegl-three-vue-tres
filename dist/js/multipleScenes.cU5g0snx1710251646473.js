import{$ as _,aJ as f,aK as m,at as v,aC as M,aL as T,ak as g,a4 as w,a0 as i,a1 as S,a2 as y,a3 as b,k as C,a5 as x,o as k,v as B,D as L,a7 as P,K as c,a8 as R,a as u,a9 as G,aa as A,ab as D,W as e}from"./vendor.f0vkPp2H1710251646473.js";const N=_({__name:"otherScene",setup(p){var r=new f(1,1,1),n=new m({color:16711935}),a=new v(r,n);a.position.set(-3,2,3);var t=new M,l=new T(16777215);t.add(l),t.add(a);const{camera:o,renderer:s,scene:d}=g();o.value&&t.add(o.value);const{onLoop:h}=w();return h(()=>{a.rotation.x+=.05,a.rotation.y+=.02,s.value&&o.value&&(s.value.clear(),s.value.render(t,o.value),s.value.render(d.value,o.value))}),(O,Q)=>null}}),z=e("TresPerspectiveCamera",{position:[15,15,15],fov:45,near:.1,far:1e3,"look-at":[0,0,0]},null,-1),I=e("TresAmbientLight",{intensity:1},null,-1),K=e("TresDirectionalLight",{position:[10,8,4],intensity:1},null,-1),V={ref:"sphereRef",position:[3,3,0]},$=e("TresSphereGeometry",{args:[1,32,32]},null,-1),E=e("TresMeshToonMaterial",{color:"#006060"},null,-1),F=[$,E],H=["rotation"],J=e("TresPlaneGeometry",{args:[20,20,20,20]},null,-1),W=e("TresMeshToonMaterial",null,null,-1),j=[J,W],q=e("TresGridHelper",null,null,-1),X=_({__name:"multipleScenes",setup(p){const r=i({clearColor:"#201919",alpha:!1,shadowMapType:S,outputColorSpace:y,toneMapping:b,disableRender:!0,windowSize:!0}),n=i({enableDamping:!0,dampingFactor:.05}),a=C();return x(()=>{if(a.value){let t=a.value.context.renderer.value;t.autoClear=!1}}),(t,l)=>(k(),B(c(R),P(r,{ref_key:"tcRef",ref:a}),{default:L(()=>[z,u(c(D),G(A(n)),null,16),I,K,e("TresMesh",V,F,512),e("TresMesh",{rotation:[-Math.PI/2,0,0]},j,8,H),q,u(N)]),_:1},16))}});export{X as default};