import{a1 as P,aD as G,aE as $,ak as F,bN as w,a6 as V,az as q,o as g,c as O,Y as n,L as v,G as X,a9 as Y,a2 as _,a3 as j,a4 as H,a5 as I,aq as J,r as K,x as M,E as x,a8 as Q,a as k,aa as S,ab as y,ac as U,ag as W}from"./vendor.9G8CKric1716880795474.js";import{r as Z,u as ee}from"./device.CGUiXtX41716880795474.js";import"./BufferGeometryUtils.eoaUicPV1716880795474.js";import"./EffectComposer.8dzKg1OS1716880795474.js";import"./Pass.ZUk1DF1t1716880795474.js";import"./UnrealBloomPass.hD_0aqYO1716880795474.js";import"./OutputPass.zCKj0l9a1716880795474.js";const te=["object"],ae=["object"],se=P({__name:"ByComposerTres",props:{threshold:{default:0},strength:{default:.972},radius:{default:.21}},async setup(b){let r,l;const t=b,{nodes:a}=([r,l]=G(()=>$("./plugins/industry4/model/modelDraco.glb",{draco:!0,decoderPath:"./draco/"})),r=await r,l(),r),i=Z(a.Sketchfab_model),{camera:d,renderer:u,scene:p,sizes:B}=F();let h=null,m=null,s=null;const T=new w({color:"black"});V(()=>{if(d.value){const{finalComposer:e,effectComposer:o,bloomPass:D}=ee(p.value,d.value,u.value,B.width.value,B.height.value);h=e,m=o,s=D,s.threshold=t.threshold,s.strength=t.strength,s.radius=t.radius}t.threshold&&(s.threshold=t.threshold),t.strength&&(s.strength=t.strength),t.radius&&(s.radius=t.radius)});const c={},L=e=>{e.isMesh&&(c[e.uuid]=e.material,e.material=T)},N=e=>{c[e.uuid]&&(e.material=c[e.uuid],delete c[e.uuid])},{onLoop:z,onAfterLoop:E}=Y();let C=.03,f=a.Sketchfab_model.getObjectByName("canister_turbine_011_Nickel-Light-PBR_0"),R=f.material.clone(),A=new w({color:new q("red"),transparent:!0,opacity:1});return z(({elapsed:e})=>{a.hull_turbine&&(a.hull_turbine.rotation.x+=C,a.blades_turbine_003.rotation.x+=C),Math.floor(e)%2?f.material=R:f.material=A}),E(({elapsed:e})=>{m&&(p.value.traverse(o=>{L(o)}),m.render(e)),h&&(p.value.traverse(o=>{N(o)}),h.render(e))}),(e,o)=>(g(),O(X,null,[n("primitive",{object:v(a).Sketchfab_model},null,8,te),n("primitive",{object:v(i)},null,8,ae)],64))}}),re=n("TresPerspectiveCamera",{position:[5,5,5],fov:45,near:1,far:1e3},null,-1),oe=n("TresAmbientLight",{color:"#ffffff",intensity:"40"},null,-1),ne=n("TresDirectionalLight",{position:[0,2,-4],intensity:1},null,-1),me=P({__name:"deviceLightByComposerTres",setup(b){const r=_({clearColor:"#000",shadows:!0,alpha:!1,shadowMapType:j,outputColorSpace:H,toneMapping:I}),l=_({autoRotate:!0}),t=_({threshold:0,strength:.972,radius:.21}),a=new J({title:"参数"});return a.addBinding(t,"threshold",{label:"阈值",min:0,max:1,step:.1}),a.addBinding(t,"strength",{label:"强度",min:0,max:3,step:.2}),a.addBinding(t,"radius",{label:"半径",min:0,max:1,step:.1}),a.addBlade({view:"text",label:"post-processing",parse:i=>String(i),value:"未完成：等待Tresjs库更新"}),(i,d)=>{const u=K("TresCanvas");return g(),M(u,Q(r,{"window-size":""}),{default:x(()=>[re,k(v(U),S(y(l)),null,16),oe,ne,(g(),M(W,null,{default:x(()=>[k(se,S(y(t)),null,16)]),_:1}))]),_:1},16)}}});export{me as default};