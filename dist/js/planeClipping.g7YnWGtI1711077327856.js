import{a0 as h,ak as C,aD as S,aE as k,b2 as d,b3 as f,aq as y,o as l,c as b,X as r,K as s,a as t,E as g,a1 as B,ac as P,a5 as x,r as j,D as u,ab as T,v as N,ag as z,a9 as D,aa as E}from"./vendor.Wnhd-Ix51711077327856.js";import{_ as L}from"./reflectorMesh.vue_vue_type_script_setup_true_lang.KSxVI4Wa1711077327856.js";/* empty css                                                                                 */import{_ as $}from"./randomLoading.vue_vue_type_script_setup_true_lang.cWzLj9BS1711077327856.js";import{_ as A}from"./cloudPoints.vue_vue_type_script_setup_true_lang.A-zeAPLP1711077327856.js";import"./Reflector.oE_OlDh31711077327856.js";import"./starLoading.VkaO6R081711077327856.js";import"./bubbleLoading.qcsl3q_N1711077327856.js";const O=["object"],F=h({__name:"planeClipping",async setup(v){let o,e;const{renderer:i}=C();i.value.localClippingEnabled=!0;const{nodes:a}=([o,e]=S(()=>k("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/industry4/plane/scene.gltf",{draco:!0,decoderPath:"./draco/"})),o=await o,e(),o);console.log(a),a.Sketchfab_model.getObjectByName("Floor").removeFromParent();const c=a.Sketchfab_model.getObjectByName("Cube006_Avion_0");c.castShadow=!0;const n=[new d(new f(1,0,0),0),new d(new f(0,0,-1),0)];c.material.clipIntersection=!0,c.material.clippingPlanes=n;const p=a.Sketchfab_model.getObjectByName("Cube006_M_Moteur_0");p.material.clipIntersection=!0,p.material.clippingPlanes=n;const w=a.Sketchfab_model.getObjectByName("CS_Black_0"),_=new y({title:"裁剪参数",expanded:!0});return _.addBinding(n[0],"constant",{label:"x",min:-200,max:200,step:1}),_.addBinding(n[1],"constant",{label:"y",min:-200,max:250,step:1}),(R,V)=>(l(),b(g,null,[r("primitive",{object:s(a).Sketchfab_model},null,8,O),t(A,{isRemoveSrc:"",model:s(w),color:"#fff"},null,8,["model"])],64))}}),I=r("TresPerspectiveCamera",{position:[500,330,500],fov:50,near:.1,far:1e4},null,-1),M=r("TresAmbientLight",{color:"#ffffff",intensity:"1"},null,-1),W=h({__name:"planeClipping",setup(v){const o=B({mirrorSize:900,gridSize:880,mirrorColor:"#efefef",divisions:10,colorCenterLine:"#444444",colorGrid:"#888888"}),e=P();return x(()=>{e.value&&(e.value.shadow.mapSize.set(1e3,1e3),e.value.shadow.camera.near=.1,e.value.shadow.camera.far=5e3,e.value.shadow.camera.top=200,e.value.shadow.camera.right=200,e.value.shadow.camera.left=-200,e.value.shadow.camera.bottom=-200,e.value.shadow.radius=10)}),(i,a)=>{const m=j("TresCanvas");return l(),b(g,null,[t(s($)),t(m,{clearColor:"#333",shadows:"","window-size":""},{default:u(()=>[I,t(s(T)),M,r("TresDirectionalLight",{ref_key:"TDirectionalLight",ref:e,color:"#ffffff",position:[300,300,350],intensity:6,"cast-shadow":""},null,512),(l(),N(z,null,{default:u(()=>[t(F)]),_:1})),t(L,D(E(o)),null,16)]),_:1})],64)}}});export{W as default};
