import{a0 as S,a1 as o,aq as v,aD as x,a2 as k,a3 as T,a4 as P,r as R,o as n,c as $,a as l,K as r,D as f,a7 as c,E as z,ab as M,a9 as h,aa as g,X as _,v as d,Y as m,ag as N}from"./vendor.Wnhd-Ix51711077327856.js";import{O,l as G}from"./util.zdW9Ea-J1711077327856.js";import{_ as J}from"./reflectorMesh.vue_vue_type_script_setup_true_lang.KSxVI4Wa1711077327856.js";/* empty css                                                                                 */import{_ as L}from"./randomLoading.vue_vue_type_script_setup_true_lang.cWzLj9BS1711077327856.js";import{_ as V}from"./cloudPoints.vue_vue_type_script_setup_true_lang.A-zeAPLP1711077327856.js";import{_ as A,a as D}from"./bubblesEffect.vue_vue_type_script_setup_true_lang.8SuvC7461711077327856.js";import"./Reflector.oE_OlDh31711077327856.js";import"./starLoading.VkaO6R081711077327856.js";import"./bubbleLoading.qcsl3q_N1711077327856.js";import"./BufferGeometryUtils.5BRryhdw1711077327856.js";const E=_("TresPerspectiveCamera",{position:[100,400,500],fov:45,near:.1,far:1e4,"look-at":[0,0,0]},null,-1),F=_("TresAmbientLight",{intensity:.5},null,-1),q={position:[0,120,0]},I="./plugins/medical/model/brainparts.OBJ",na=S({__name:"digitalBrainFloor",async setup(K){let i,u;const w=o({mirrorSize:500,gridSize:490,mirrorColor:"#efefef",divisions:10,colorCenterLine:"#444444",colorGrid:"#888888"}),e=o({color:"#fff",show:!0,opacity:1}),a=new v({title:"参数"});a.addBinding(e,"show",{label:"点云显示"}),a.addBinding(e,"color",{label:"点云颜色"}),a.addBinding(e,"opacity",{label:"点云透明度",min:0,max:1,step:.1});const t=o({color:"#84ccff",show:!0,opacity:1});a.addBinding(t,"show",{label:"脑轮廓显示"}),a.addBinding(t,"color",{label:"脑轮廓颜色"}),a.addBinding(t,"opacity",{label:"脑轮廓透明度",min:0,max:1,step:.1});const s=o({color:"#9e00af",show:!0,opacity:1});a.addBinding(s,"show",{label:"脑组织显示"}),a.addBinding(s,"color",{label:"脑组织颜色"}),a.addBinding(s,"opacity",{label:"脑组织透明度",min:0,max:1,step:.1});const B=new O,p=([i,u]=x(()=>G(I,B)),i=await i,u(),i),b=o({clearColor:"#201919",shadows:!0,alpha:!1,shadowMapType:k,outputColorSpace:T,toneMapping:P}),y=o({autoRotate:!0,autoRotateSpeed:2});return(X,Y)=>{const C=R("TresCanvas");return n(),$(z,null,[l(r(L)),l(C,c(b,{"window-size":""}),{default:f(()=>[E,l(r(M),h(g(y)),null,16),F,_("TresGroup",q,[e.show?(n(),d(V,c({key:0,model:r(p)},e),null,16,["model"])):m("",!0),(n(),d(N,null,{default:f(()=>[t.show?(n(),d(A,c({key:0,model:r(p)},t),null,16,["model"])):m("",!0)]),_:1})),s.show?(n(),d(D,c({key:1,model:r(p)},s),null,16,["model"])):m("",!0)]),l(J,h(g(w)),null,16)]),_:1},16)],64)}}});export{na as default};
