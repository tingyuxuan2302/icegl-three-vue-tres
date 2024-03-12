import{l as Q}from"./huruji.Cuf0VTLX1710249609010.js";import{ao as Z,ap as F,aq as j,ar as U,as as A,at as O,au as V,$ as M,o as y,c as E,K as C,av as ee,aw as te,ax as ae,k as I,ay as $,az as k,a2 as L,aA as B,aB as G,aC as oe,aD as re,a4 as N,ak as W,v as q,a5 as J,aE as ne,aF as D,a0 as se,an as ie,a as w,D as T,a9 as le,aa as ue,a8 as ce,E as me,ah as pe,ai as de,W as f,aG as fe,ag as ve,_ as ge}from"./vendor.jNLcW6ym1710249609010.js";import{m as xe}from"./BufferGeometryUtils.kln3pHrq1710249609010.js";import{O as he,l as _e}from"./util.ncWW0OZV1710249609010.js";import{R as we,E as Pe}from"./EffectComposer.jFjELRRy1710249609010.js";import{U as ye}from"./UnrealBloomPass.KpQihNh81710249609010.js";var Me="varying vec2 vUv;\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  vUv = uv;\n}",be="uniform sampler2D uTextureA;\nuniform sampler2D uTextureB;\nprecision mediump float; \nuniform float uTime;\nuniform float uScroll;\nvarying vec2 vUv;\n\nmat3 rotationMatrix3(vec3 axis, float angle) {\n  axis = normalize(axis);\n  float s = sin(angle);\n  float c = cos(angle);\n  float oc = 1. - c;\n\n  return mat3(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s,\n              oc * axis.z * axis.x + axis.y * s,\n              oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c,\n              oc * axis.y * axis.z - axis.x * s,\n              oc * axis.z * axis.x - axis.y * s,\n              oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c);\n}\n\nvoid main() {\n  vec3 textureA = rotationMatrix3(vec3(10., 6., 3.), sin(uTime) * .1) *\n                  texture2D(uTextureA, vUv).xyz;\n  \n\n  vec3 textureB = rotationMatrix3(vec3(10., 6., 3.), sin(uTime) * .1) *\n                  texture2D(uTextureB, vUv).xyz;\n  \n\n  float t = uScroll;\n  vec3 pos = mix(textureA, textureB, t);\n\n  gl_FragColor = vec4(pos, 1.);\n}";const z=o=>{let t=o.attributes.position.count,r=Math.ceil(Math.sqrt(t)),a=Math.ceil(t/r),s=new Float32Array(r*a*4);function c(e){let m=Math.floor(e.length/3);for(let i=m-1;i>0;i--){const l=Math.floor(Math.random()*(i+1));for(let u=0;u<3;u++){let v=e[i*3+u];e[i*3+u]=e[l*3+u],e[l*3+u]=v}}return e}c(o.attributes.position.array);for(let e=0;e<t;e++){const d=o.attributes.position.array[e*3+0],m=o.attributes.position.array[e*3+1],i=o.attributes.position.array[e*3+2],l=0;s[e*4+0]=d,s[e*4+1]=m,s[e*4+2]=i,s[e*4+3]=l}let n=new Z(s,r,a,F,j);return n.needsUpdate=!0,n},Se=()=>new V({uniforms:{uTextureA:{value:null},uTextureB:{value:null},uTime:{value:0},uScroll:{value:0}},vertexShader:Me,fragmentShader:be}),Be=()=>{const o=Se(),t=new U;return t.setAttribute("position",new A(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,-1,0,1,1,0,-1,1,0]),3)),t.setAttribute("uv",new A(new Float32Array([0,1,1,1,1,0,0,1,1,0,0,0]),2)),new O(t,o)};var Te="uniform sampler2D\n    uPositions; \nuniform float uSize;\nuniform float uPixelRatio;\nvarying vec3 vPos;\nvarying vec2 vUv;\nvoid main() {\n  vec3 pos = texture2D(uPositions, position.xy).xyz;\n\n  float customSize = uSize;\n\n  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);\n  vec4 viewPosition = viewMatrix * modelPosition;\n  vec4 projectionPosition = projectionMatrix * viewPosition;\n\n  gl_Position = projectionPosition;\n  gl_PointSize = customSize * uPixelRatio;\n  gl_PointSize *= (1.0 / -viewPosition.z);\n\n  vPos = pos;\n}",ze="precision mediump float;\nvarying vec3 vPos;\nuniform vec3 uColor; \nvoid main() {\n\n  float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n  float strength = 0.05 / distanceToCenter - 0.1;\n\n  \n\n  gl_FragColor = vec4(uColor, strength * length(vPos));\n}";const Ae=["object"],Ce=M({__name:"particalMesh",props:{progress:{default:0},width:{default:256},height:{default:256}},setup(o,{expose:t}){const r=o,a=()=>new V({uniforms:{uPositions:{value:null},uSize:{value:12},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uColor:{value:new te("#ffaa00")}},vertexShader:Te,fragmentShader:ze,transparent:!0,depthWrite:!1,blending:ae});let c=((n,e)=>{const d=n*e;let m=new Float32Array(d*3);for(let l=0;l<d;l++){let u=l*3;m[u+0]=l%n/n,m[u+1]=l/n/e}const i=new U;return i.setAttribute("position",new A(m,3)),new ee(i,a())})(r.width,r.height);return t({particles:c}),(n,e)=>(y(),E("primitive",{object:C(c)},null,8,Ae))}}),Fe="./plugins/medical/model/brainparts.OBJ",Le=M({__name:"particalFBO",props:{progress:{default:0},width:{default:256},height:{default:256},color:{default:"#ffaa00"}},async setup(o){let t,r;const a=o,s=I(),c=new $(a.width,a.height,{minFilter:k,magFilter:k,generateMipmaps:!1,colorSpace:L,depthBuffer:!1,stencilBuffer:!1,format:F,type:j}),n=h=>{const S=[];return h.traverse(_=>{_ instanceof O&&(_.geometry.deleteAttribute("uv"),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("tangent"),S.push(_.geometry))}),xe(S)},e=new he,d=([t,r]=B(()=>_e(Fe,e)),t=await t,r(),t),m=n(d);m.scale(.01,.01,.01);const i=z(m),l=([t,r]=B(()=>G("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/eCommerce/guanYu.glb",{draco:!0,decoderPath:"./draco/"})),t=await t,r(),t).scene,u=n(l.children[0]);u.rotateX(Math.PI/2),u.translate(0,-.9,0);const v=z(u),P=([t,r]=B(()=>G("./plugins/industry4/model/modelDraco.glb",{draco:!0,decoderPath:"./draco/"})),t=await t,r(),t).scene,g=n(P.children[0]);g.rotateX(-Math.PI/2),g.rotateY(Math.PI/3),g.translate(0,0,0);const b=z(g),p=Be(),R=new oe,X=new re(-1,1,1,-1,1/Math.pow(2,53),1);R.add(p);const{onBeforeLoop:H}=N(),{camera:K,renderer:x}=W();return H(({elapsed:h})=>{x.value&&K.value&&s.value&&(x.value.setRenderTarget(c),x.value.clear(),x.value.render(R,X),x.value.setRenderTarget(null),a.progress<1/2?(p.material.uniforms.uTextureA.value=v,p.material.uniforms.uTextureB.value=i,p.material.uniforms.uScroll.value=a.progress*2):(p.material.uniforms.uTextureA.value=i,p.material.uniforms.uTextureB.value=b,p.material.uniforms.uScroll.value=(a.progress-1/2)*2),p.material.uniforms.uTime.value=h,s.value.particles.material.uniforms.uPositions.value=c.texture,s.value.particles.material.uniforms.uColor.value.setStyle(a.color))}),(h,S)=>(y(),q(Ce,{ref_key:"pMesh",ref:s,progress:h.progress},null,8,["progress"]))}}),Re=M({__name:"particalPass",props:{use:{type:Boolean,default:!0}},setup(o){const t=o,{camera:r,renderer:a,scene:s,sizes:c}=W(),n={threshold:0,strength:.472,radius:1.61};let e=null;const d=(i,l,u,v,P)=>{const g=new we(i,l),b=new ye(new ne(v,P),n.strength,n.radius,n.threshold),p=new $(v,P,{generateMipmaps:!1,minFilter:D,magFilter:D,format:F,colorSpace:L,samples:0});e=new Pe(u,p),e.addPass(g),e.addPass(b)};J(()=>{c.width.value&&d(s.value,r.value,a.value,c.width.value,c.height.value)});const{onLoop:m}=N();return m(()=>{t.use?e&&e.render():a.value&&r.value&&a.value.render(s.value,r.value)}),(i,l)=>null}}),Y=o=>(pe("data-v-61094a2b"),o=o(),de(),o),ke=Y(()=>f("TresPerspectiveCamera",{position:[0,0,-4],fov:45,near:.1,far:1e3,"look-at":[0,0,0]},null,-1)),Ge=Y(()=>f("main",null,[f("section",null,[f("h1",null,"关羽 - GuanYu")]),f("section",null,[f("h1",{style:{"margin-left":"-11em","margin-bottom":"-10em"}},"大脑 - Brain")]),f("section",null,[f("h1",{style:{"margin-left":"11em","margin-bottom":"-10em"}},"设备 - Device")])],-1)),De=M({__name:"scrollPartical",setup(o){const t=I(0);J(()=>{console.log("jaime ~ progress:",t.value)});const r={clearColor:"#000",outputColorSpace:L,windowSize:!0,disableRender:!0,powerPreference:"high-performance",antialias:!1,alpha:!1,useLegacyLights:!1,physicallyCorrectLights:!0},a=se({pass:!0,color:"#ffaa00"}),s=new ie({title:"参数",expanded:!0});return s.addBinding(a,"pass",{label:"后处理"}),s.addBinding(a,"color",{label:"颜色"}),(c,n)=>(y(),E(me,null,[w(Q,{styleNum:4}),w(C(ce),le(ue(r)),{default:T(()=>[ke,w(Re,{use:a.pass},null,8,["use"]),w(C(fe),{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),distance:10,"smooth-scroll":.1,"html-scroll":""},{default:T(()=>[(y(),q(ve,null,{default:T(()=>[w(Le,{progress:t.value,color:a.color},null,8,["progress","color"])]),_:1}))]),_:1},8,["modelValue"])]),_:1},16),Ge],64))}}),$e=ge(De,[["__scopeId","data-v-61094a2b"]]);export{$e as default};
