import{a0 as d,r as m,o,v as C,D as T,a7 as g,a2 as M,a3 as B,a4 as k,a as w,K as P,ab as b,c as n,G as a,E as s,X as t}from"./vendor.Wnhd-Ix51711077327856.js";const v=t("TresPerspectiveCamera",{position:[11,11,11],"look-at":[0,0,0]},null,-1),y=["position"],E=t("TresBoxGeometry",{args:[1,1,1]},null,-1),L=t("TresMeshToonMaterial",{color:"#efefef"},null,-1),S=[E,L],x=t("TresDirectionalLight",{intensity:1},null,-1),F=t("TresAmbientLight",{intensity:1},null,-1),D=d({__name:"theEvents",setup(G){const c={clearColor:"#202020",shadows:!0,alpha:!1,shadowMapType:M,outputColorSpace:B,toneMapping:k};function p(e){e&&e.object.material.color.set("#008080")}function u(e){e&&e.object.material.color.set("#CCFF03")}function _(e){e&&e.material.color.set("#efefef")}function f(e){e&&console.log(e)}return(e,N)=>{const h=m("TresCanvas");return o(),C(h,g(c,{"window-size":""}),{default:T(()=>[v,w(P(b)),(o(),n(s,null,a([-2.5,0,2.5],r=>(o(),n(s,null,[(o(),n(s,null,a([-2.5,0,2.5],i=>(o(),n(s,null,[(o(),n(s,null,a([-2.5,0,2.5],l=>t("TresMesh",{key:"".concat([r,i,l]),position:[r,i,l],onClick:p,onPointerEnter:u,onPointerLeave:_,onPointerMove:f},S,40,y)),64))],64))),64))],64))),64)),x,F]),_:1},16)}}});export{D as default};
