import{B as d,S as m,N as _}from"./three.module-eabffd14.js";import{n as f,l as T,r as M}from"./trescientos-01522e33.js";import{Y as g,a7 as i,j as l,ab as w,ac as P,ad as v,o as y,s as S,B as R,a8 as b,I as c,a as B,a9 as D,aa as k,U as e}from"./vendor-4c6c5ef6.js";const x=e("TresPerspectiveCamera",{position:[15,15,15],fov:45,near:.1,far:1e3,"look-at":[0,0,0]},null,-1),A=e("TresAmbientLight",{intensity:.5},null,-1),L=e("TresSphereGeometry",{args:[2,32,32]},null,-1),z=e("TresMeshToonMaterial",{color:"#006060"},null,-1),C=[L,z],G=e("TresSphereGeometry",{args:[2,32,32]},null,-1),I=e("TresMeshToonMaterial",{color:"#006060"},null,-1),F=[G,I],N=["rotation"],Z=e("TresPlaneGeometry",{args:[20,20,20,20]},null,-1),j=e("TresMeshToonMaterial",null,null,-1),E=[Z,j],V=e("TresDirectionalLight",{position:[10,2,4],intensity:1,"cast-shadow":""},null,-1),H=e("TresGridHelper",null,null,-1),O=g({__name:"theBasic",setup(U){const h=i({clearColor:"#201919",shadows:!0,alpha:!1,shadowMapType:d,outputColorSpace:m,toneMapping:_}),p=i({enableDamping:!0,dampingFactor:.05,enableZoom:!0,autoRotate:!1,autoRotateSpeed:2,maxPolarAngle:Math.PI,minPolarAngle:0,maxAzimuthAngle:Math.PI,minAzimuthAngle:-Math.PI,enablePan:!0,keyPanSpeed:7,maxDistance:100,minDistance:0,minZoom:0,maxZoom:100,zoomSpeed:1,enableRotate:!0,rotateSpeed:1}),t=l(),s=l(),a=w(),{onLoop:u}=f();u(({elapsed:o})=>{t.value&&(t.value.position.y+=Math.sin(o)*.01,s.value.position.y+=Math.sin(o)*.01)});function n(o){o&&o.object.material.color.set("#DFFF45")}function r(o){o&&o.material.color.set("#006060")}return P(()=>{a.value&&(a.value.shadow.mapSize.set(1e3,1e3),a.value.shadow.camera.near=.5,a.value.shadow.camera.top=20,a.value.shadow.camera.right=20,a.value.shadow.camera.left=-20,a.value.shadow.camera.bottom=-20)}),v(()=>{}),(o,Y)=>(y(),S(c(T),b(h,{"window-size":""}),{default:R(()=>[x,B(c(M),D(k(p)),null,16),A,e("TresMesh",{ref_key:"sphereRef",ref:t,position:[0,4,0],"cast-shadow":"",onPointerEnter:n,onPointerLeave:r},C,544),e("TresMesh",{ref_key:"sphereRef2",ref:s,position:[4,4,0],"cast-shadow":"",onPointerEnter:n,onPointerLeave:r},F,544),e("TresMesh",{rotation:[-Math.PI/2,0,0],"receive-shadow":""},E,8,N),e("TresDirectionalLight",{ref_key:"TDirectionalLight",ref:a,position:[10,8,4],intensity:1,"cast-shadow":""},null,512),V,H]),_:1},16))}});export{O as default};
