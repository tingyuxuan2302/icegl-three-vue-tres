import{a0 as M,ak as T,aD as v,aE as C,bf as l,az as R,aH as k,aw as B,o as m,c as P,K as x,r as I,v as u,D as d,a as h,ab as D,ag as G,X as e}from"./vendor.Wnhd-Ix51711077327856.js";import{R as N}from"./ReflectorMaterial.NtzfaHsV1711077327856.js";import{R as j}from"./OimoPhysicsBuffer._KJhhR7d1711077327856.js";import{m as S}from"./BufferGeometryUtils.5BRryhdw1711077327856.js";import"./dither.glsl.y2WXw1t-1711077327856.js";const V=["rotation-x","position","object"],Z=M({__name:"sciFiModular",props:{position:{default:[0,-1,0]}},async setup(p){let o,n;const i=p,{scene:g}=T(),{nodes:w}=([o,n]=v(()=>C("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/floor/modelDraco.glb",{draco:!0,decoderPath:"./draco/"})),o=await o,n(),o),a=w.Cube016__0;console.log(a);const r=a.geometry,b=S([r.clone(),r.clone().applyMatrix4(new l().makeRotationZ(-Math.PI/2)),r.clone().applyMatrix4(new l().makeRotationZ(Math.PI/2)),r.clone().applyMatrix4(new l().makeRotationZ(-Math.PI))]),s=new j,c=new N({reflectivity:6,mirror:.1,mixStrength:3,color:new R("#fff"),map:a.material.map.clone(),normalMap:a.material.normalMap.clone(),normalScale:new k(1,1),fog:g.fog,dithering:!0});c.uniforms.tReflect=s.renderTargetUniform,c.uniforms.uMatrix=s.textureMatrixUniform;const t=new B(b,c);return t.add(s),t.onBeforeRender=(f,_,y)=>{t.visible=!1,s.update(f,_,y),t.visible=!0},(f,_)=>(m(),P("primitive",{"rotation-x":-Math.PI/2,position:i.position,object:x(t)},null,8,V))}}),z=e("TresPerspectiveCamera",{position:[15,15,15],fov:45,near:.1,far:1e5,"look-at":[0,0,0]},null,-1),A=e("TresAmbientLight",{intensity:10},null,-1),E=e("TresMesh",{position:[3,2,0]},[e("TresBoxGeometry",{args:[2,2,2]}),e("TresMeshNormalMaterial",{wireframe:!0})],-1),F=e("TresMesh",{position:[0,1.2,0]},[e("TresBoxGeometry",{args:[1,1,1]}),e("TresMeshNormalMaterial")],-1),L=M({__name:"showFloor",setup(p){return(o,n)=>{const i=I("TresCanvas");return m(),u(i,{clearColor:"#201919","window-size":""},{default:d(()=>[z,h(x(D),{enableDamping:""}),A,E,F,(m(),u(G,null,{default:d(()=>[h(Z,{position:[0,0,0]})]),_:1}))]),_:1})}}});export{L as default};
