import{a0 as g,ak as v,aD as x,bd as b,bk as n,az as m,aH as y,bt as S,aw as M,bu as R,a5 as j,w as B,o as G,c as H,X as p,K as u}from"./vendor.Wnhd-Ix51711077327856.js";import{R as k}from"./ReflectorMaterial.NtzfaHsV1711077327856.js";import{R as T}from"./OimoPhysicsBuffer._KJhhR7d1711077327856.js";const C=["position","scale"],E=["object"],P=["object"],A=g({__name:"reflectorShaderMesh",props:{reflectivity:{default:.2},mirror:{default:.1},mixStrength:{default:9},showGridHelper:{type:Boolean,default:!0},color:{default:"#ffffff"},position:{default:[0,-1,0]},scale:{default:1}},async setup(d){let i,c;const e=d,{scene:h}=v(),o=([i,c]=x(()=>b(["./plugins/floor/image/concrete_wet_floor_basecolor.jpg","./plugins/floor/image/concrete_wet_floor_normal.jpg"])),i=await i,c(),i);o[0].wrapS=n,o[0].wrapT=n,o[1].wrapS=n,o[1].wrapT=n;const a=new T,t=new k({reflectivity:e.reflectivity,mirror:e.mirror,mixStrength:e.mixStrength,color:new m(e.color),map:o[0],normalMap:o[1],normalScale:new y(5,5),fog:h.fog,dithering:!0});t.uniforms.tReflect=a.renderTargetUniform,t.uniforms.uMatrix=a.textureMatrixUniform;const w=new S(10,10),r=new M(w,t);r.name="reflectorShaderMesh",r.position.y=-.01,r.rotation.x=-Math.PI/2,r.add(a),r.onBeforeRender=(s,f,_)=>{r.visible=!1,a.update(s,f,_),r.visible=!0};const l=new R(9.5,10);return l.visible=e.showGridHelper,j(()=>{e.reflectivity&&(t.uniforms.uReflectivity.value=e.reflectivity),e.mirror&&(t.uniforms.uMirror.value=e.mirror),e.mixStrength&&(t.uniforms.uMixStrength.value=e.mixStrength),e.color&&(t.uniforms.uColor.value=new m(e.color))}),B(()=>e.showGridHelper,s=>{l.visible=s}),(s,f)=>(G(),H("TresGroup",{position:e.position,scale:e.scale},[p("primitive",{object:u(r)},null,8,E),p("primitive",{object:u(l)},null,8,P)],8,C))}});export{A as _};
