import{a0 as x,c9 as V,a1 as F,o as i,v as B,D as y,c as f,a7 as I,K as p,al as L,ah as P,ai as N,X as e,_ as T,aD as M,aE as E,ca as U,k as b,cb as z,w as $,a as u,b1 as R,cc as G,E as C,r as Y,Z as k,cd as K,G as X,ce as Z,a2 as H,a3 as J,ab as Q,ag as W}from"./vendor.Wnhd-Ix51711077327856.js";const r=o=>(P("data-v-a8e199ed"),o=o(),N(),o),ee=r(()=>e("circle",{id:"arc1",class:"circle",cx:"150",cy:"150",r:"120",opacity:".89",fill:"none",stroke:"#632b26","stroke-width":"12","stroke-linecap":"square","stroke-opacity":".99213","paint-order":"fill markers stroke"},null,-1)),te=r(()=>e("circle",{id:"arc2",class:"circle",cx:"150",cy:"150",r:"120",opacity:".49",fill:"none",stroke:"#632b26","stroke-width":"8","stroke-linecap":"square","stroke-opacity":".99213","paint-order":"fill markers stroke"},null,-1)),oe=r(()=>e("circle",{id:"arc3",class:"circle",cx:"150",cy:"150",r:"100",opacity:".49",fill:"none",stroke:"#632b26","stroke-width":"20","stroke-linecap":"square","stroke-opacity":".99213","paint-order":"fill markers stroke"},null,-1)),se=r(()=>e("circle",{id:"arc4",class:"circle",cx:"150",cy:"150",r:"120",opacity:".49",fill:"none",stroke:"#632b26","stroke-width":"30","stroke-linecap":"square","stroke-opacity":".99213","paint-order":"fill markers stroke"},null,-1)),ae=r(()=>e("circle",{id:"arc5",class:"circle",cx:"150",cy:"150",r:"100",opacity:".89",fill:"none",stroke:"#632b26","stroke-width":"8","stroke-linecap":"square","stroke-opacity":".99213","paint-order":"fill markers stroke"},null,-1)),le=r(()=>e("circle",{id:"arc6",class:"circle",cx:"150",cy:"150",r:"90",opacity:".49",fill:"none",stroke:"#632b26","stroke-width":"16","stroke-linecap":"square","stroke-opacity":".99213","paint-order":"fill markers stroke"},null,-1)),ce=r(()=>e("circle",{id:"arc7",class:"circle",cx:"150",cy:"150",r:"90",opacity:".89",fill:"none",stroke:"#632b26","stroke-width":"8","stroke-linecap":"square","stroke-opacity":".99213","paint-order":"fill markers stroke"},null,-1)),re=r(()=>e("circle",{id:"arc8",class:"circle",cx:"150",cy:"150",r:"80",opacity:".79",fill:"#4DD0E1","fill-opacity":"0",stroke:"#632b26","stroke-width":"8","stroke-linecap":"square","stroke-opacity":".99213","paint-order":"fill markers stroke"},null,-1)),ie=[ee,te,oe,se,ae,le,ce,re],ne=x({__name:"svg",props:{model:{type:Object,required:!0}},setup(o){const s=V("animationPlay"),n=()=>{s.value=!s.value},l=F({wrapperClass:"svgCom",as:"div",transform:!0,distanceFactor:.3,center:!0});return(t,m)=>(i(),B(p(L),I(l,{position:[.6,-.01,.16],rotation:[0,.6,0]}),{default:y(()=>[(i(),f("svg",{xmlns:"http://www.w3.org/2000/svg",onClick:n},ie))]),_:1},16))}}),de=T(ne,[["__scopeId","data-v-a8e199ed"]]),pe=["object"],ue=x({__name:"eFan",props:{color:{type:String,required:!0}},async setup(o){let s,n;const l=o,{nodes:t,materials:m,animations:v}=([s,n]=M(()=>E("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/eCommerce/eFan/nFan.gltf")),s=await s,n(),s),a=c=>t.Sketchfab_model.getObjectByName(c).geometry.attributes.uv.array,S={Object_4:new Float32Array(a("Object_4")),Object_8:new Float32Array(a("Object_8")),Object_6:new Float32Array(a("Object_6")),Object_6001:new Float32Array(a("Object_6001"))},w=c=>{const A={"#ff8b04":0,"#999999":.04,"#d3ac10":.19,"#ffbec4":-.06,"#d0d5c6":.55};for(let[g,D]of Object.entries(S)){for(let h=0;h<a(g).length;h++)a(g)[h]=D[h]+A[c];t.Sketchfab_model.getObjectByName(g).geometry.getAttribute("uv").needsUpdate=!0}},d=t.Sketchfab_model.getObjectByName("Object_6001"),{actions:j}=U(v,t.Sketchfab_model);let O=j.Animation;const q=b(!0);return z("animationPlay",q),$(()=>l.color,c=>{w(c)},{immediate:!0}),$(()=>q.value,c=>{c?(O.reset().play(),d.rotateY(-Math.PI)):(O.fadeOut(.6).paused=!0,d.rotateY(Math.PI))},{immediate:!0}),(c,A)=>(i(),f(C,null,[u(p(R),{range:[-.5,-.5],speed:2},{default:y(()=>[e("primitive",{position:[-2,0,0],object:p(t).Sketchfab_model,scale:3},[u(de,{model:p(t).Sketchfab_model},null,8,["model"])],8,pe)]),_:1}),u(p(G),{opacity:.3,blur:2.6,position:[0,-2,0]})],64))}}),_=o=>(P("data-v-fd782587"),o=o(),N(),o),_e=_(()=>e("div",{class:"landingpage-bg w-full inset-0 h-full"},null,-1)),fe={class:"w-full h-full overflow-hidden pos-absolute"},me=_(()=>e("div",{class:"h-1/2 w-full md:w-1/2"},null,-1)),he={class:"z-1 p-6 w-full md:w-1/2 md:p-4 text-light"},ke=Z('<h1 class="title animate-fade-in-right animate-ease" data-v-fd782587> 电风扇 ☁️ </h1><span class="absolute border-1 border-solid border-white w-800px inline-block" data-v-fd782587></span><p class="w-full md:w-2/3 my-8 animate-fade-in mt-32 position-relative" data-v-fd782587> 点击 <span class="font-bold" data-v-fd782587>&quot;模型上按钮&quot;</span> ，开关风扇。<br data-v-fd782587> 点击 <span class="font-bold" data-v-fd782587>&quot;下方按钮&quot;</span> ，选择自己喜欢的颜色。 </p>',3),be={class:"flex gap-8"},ye=["onClick"],ve={class:"absolute w-full md:w-1/2 inset-0 h-2/3 md:h-full flex justify-center items-center"},we=_(()=>e("TresPerspectiveCamera",{position:[10,5,-8],fov:45,near:.1,far:1e5,"look-at":[0,0,0]},null,-1)),ge=_(()=>e("TresAmbientLight",{intensity:2},null,-1)),Ce=_(()=>e("TresPointLight",{position:[0,0,10],intensity:1},null,-1)),xe=_(()=>e("TresDirectionalLight",{position:[3,3,3],intensity:3},null,-1)),Se=x({__name:"electricFan",setup(o){const s={shadows:!0,alpha:!0,shadowMapType:H,outputColorSpace:J},n=b(),l=b(!1),t=F({selectedColor:"#ff8b04",colors:["#ff8b04","#999999","#d3ac10","#ffbec4","#d0d5c6"]}),m=b(t.selectedColor),v=a=>{m.value=t.selectedColor,t.selectedColor=a,l.value=!l.value};return(a,S)=>{const w=Y("TresCanvas");return i(),f(C,null,[_e,e("div",{class:"absolute p-8 md:p-0 w-full inset-0 h-full flex flex-col md:flex-row md:justify-center md:items-center",style:k({backgroundColor:t.selectedColor+"80"})},[e("div",{class:"w-full h-full pos-absolute md:w-2/3 md:h-1/2 shadow-lg rounded flex flex-col md:flex-row opacity-66",style:k({backgroundColor:m.value})},[e("div",fe,[e("div",{ref_key:"circleScaleRef",ref:n,class:K(["circleScale",{circleScaleAnimationOld:l.value,circleScaleAnimationNew:!l.value}]),style:k({backgroundColor:t.selectedColor})},null,6)]),me,e("div",he,[ke,e("ul",be,[(i(!0),f(C,null,X(t.colors,d=>(i(),f("li",{key:d},[e("button",{class:"w-10 h-10 rounded-full border-2 border-solid border-white mr-2 cursor-pointer",style:k({backgroundColor:d}),onClick:j=>v(d)},null,12,ye)]))),128))])])],4)],4),e("div",ve,[u(w,I(s,{class:"pointer-events-none"}),{default:y(()=>[we,u(p(Q),{enableDamping:""}),(i(),B(W,null,{default:y(()=>[u(ue,{color:t.selectedColor},null,8,["color"])]),_:1})),ge,Ce,xe]),_:1},16)])],64)}}}),Oe=T(Se,[["__scopeId","data-v-fd782587"]]);export{Oe as default};
