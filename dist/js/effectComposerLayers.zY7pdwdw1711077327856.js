import{a0 as m,ak as P,k as t,a5 as h,o as p,c as E,a as _,K as v,a$ as M,X as s,E as b,aH as R,a8 as $,r as L,v as N,D as G,ab as H}from"./vendor.Wnhd-Ix51711077327856.js";import{R as V,E as z}from"./EffectComposer.4aDuDId21711077327856.js";import{U as D}from"./UnrealBloomPass.mu-RWkDf1711077327856.js";const U=s("TresBoxGeometry",{args:[1,1,1]},null,-1),A=s("TresMeshNormalMaterial",null,null,-1),F=[U,A],I=s("TresBoxGeometry",{args:[1,1,1]},null,-1),K=s("TresMeshNormalMaterial",null,null,-1),S=[I,K],X=m({__name:"ecLayers",setup(y){const{camera:e,renderer:a,scene:n,sizes:r}=P(),l=t(),c=t(),i=t();let o=null;h(()=>{l.value&&l.value.value.layers.set(0),c.value&&c.value.layers.set(1),i.value&&i.value.layers.set(2),r.width.value&&x(n.value,e.value,a.value,r.width.value,r.height.value)});const u={threshold:0,strength:.972,radius:.21},x=(f,d,T,g,w)=>{const C=new V(f,d),k=new D(new R(g,w),u.strength,u.radius,u.threshold);o=new z(T),o.addPass(C),o.addPass(k)},{onLoop:B}=$();return B(()=>{o&&e.value&&(a.value.clear(),e.value.layers.set(1),o.render(),a.value.clearDepth(),e.value.layers.set(0),a.value.render(n.value,e.value))}),(f,d)=>(p(),E(b,null,[_(v(M),{ref_key:"normalBox",ref:l,args:[1,1,1],color:"orange",position:[3,2,1]},null,512),s("TresMesh",{ref_key:"shineBox",ref:c,position:[0,2,-4]},F,512),s("TresMesh",{ref_key:"filmBox",ref:i,position:[1,2,3]},S,512)],64))}}),j=s("TresPerspectiveCamera",{position:[10,10,10]},null,-1),q=s("TresAmbientLight",{intensity:1},null,-1),J=s("TresGridHelper",{args:[10,10]},null,-1),Y=m({__name:"effectComposerLayers",setup(y){const e=t();return h(()=>{if(e.value){let a=e.value.context.renderer.value;a.autoClear=!1}}),(a,n)=>{const r=L("TresCanvas");return p(),N(r,{disableRender:"","window-size":"",ref_key:"tcRef",ref:e},{default:G(()=>[j,q,_(v(H)),J,_(X)]),_:1},512)}}});export{Y as default};
