import{bu as p,bv as x,bw as M,be as w,bx as b,$ as g,bt as y,aA as h,bk as R,bq as v,at as _,bs as C,a5 as T,w as B,o as U,c as E,W as f,K as m}from"./vendor.f0vkPp2H1710251646473.js";import{d as P}from"./dither.glsl.y2WXw1t-1710251646473.js";import{R as G}from"./OimoPhysicsBuffer.t7GtTyYL1710251646473.js";const j="\nin vec3 position;\nin vec3 normal;\nin vec2 uv;\n\nuniform mat4 modelMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\n\nuniform mat3 uMapTransform;\nuniform mat4 uMatrix;\n\nout vec2 vUv;\nout vec4 vCoord;\nout vec3 vNormal;\nout vec3 vToEye;\n\nvoid main() {\n    vUv = (uMapTransform * vec3(uv, 1.0)).xy;\n    vCoord = uMatrix * vec4(position, 1.0);\n    vNormal = normalMatrix * normal;\n\n    vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n    vToEye = cameraPosition - worldPosition.xyz;\n\n    vec4 mvPosition = viewMatrix * worldPosition;\n    gl_Position = projectionMatrix * mvPosition;\n}\n",D="\nprecision highp float;\n\nuniform sampler2D tMap;\nuniform sampler2D tReflect;\nuniform sampler2D tReflectBlur;\nuniform float uReflectivity;\n\nin vec2 vUv;\nin vec4 vCoord;\nin vec3 vNormal;\nin vec3 vToEye;\n\nout vec4 FragColor;\n\n".concat(P,"\n\nvoid main() {\n    vec2 reflectionUv = vCoord.xy / vCoord.w;\n\n    vec4 dudv = texture(tMap, vUv);\n    vec4 color = texture(tReflect, reflectionUv);\n\n    vec4 blur;\n\n    blur = texture(tReflectBlur, reflectionUv + dudv.rg / 256.0);\n    color = mix(color, blur, smoothstep(1.0, 0.1, dudv.g));\n\n    blur = texture(tReflectBlur, reflectionUv);\n    color = mix(color, blur, smoothstep(0.5, 1.0, dudv.r));\n\n    FragColor = color * mix(0.6, 0.75, dudv.g);\n\n    // Fresnel term\n    vec3 toEye = normalize(vToEye);\n    float theta = max(dot(toEye, vNormal), 0.0);\n    float reflectance = uReflectivity + (1.0 - uReflectivity) * pow((1.0 - theta), 5.0);\n\n    FragColor = mix(vec4(0), FragColor, reflectance);\n\n    #ifdef DITHERING\n        FragColor.rgb = dither(FragColor.rgb);\n    #endif\n\n    FragColor.a = 1.0;\n}\n");class F extends p{constructor({map:e=null,reflectivity:a=0,dithering:r=!1}={}){const t={glslVersion:x,defines:{DITHERING:r},uniforms:{tMap:{value:null},tReflect:{value:null},tReflectBlur:{value:null},uMapTransform:{value:new M},uMatrix:{value:new w},uReflectivity:{value:a}},vertexShader:j,fragmentShader:D,blending:b};e&&(e.updateMatrix(),t.uniforms=Object.assign(t.uniforms,{tMap:{value:e},uMapTransform:{value:e.matrix}})),super(t)}}const N=["scale"],H=["object"],I=["object"],z=g({__name:"reflectorDUDV",props:{reflectivity:{default:.8},showGridHelper:{type:Boolean,default:!0},scale:{default:1}},async setup(c){let e,a;const r=c,t=new G,s=new y(9.5,10);s.visible=r.showGridHelper;const{map:l}=([e,a]=h(()=>R({map:"./plugins/floor/image/waterdudv.jpg"})),e=await e,a(),e);l.wrapS=v,l.wrapT=v,l.repeat.set(6,3);const i=new F({map:l,reflectivity:r.reflectivity});i.uniforms.tReflect={value:t.renderTarget.texture},i.uniforms.tReflectBlur=t.renderTargetUniform,i.uniforms.uMatrix=t.textureMatrixUniform;const o=new _(new C(10,10),i);return o.rotation.x=-Math.PI/2,o.add(t),o.onBeforeRender=(n,u,d)=>{o.visible=!1,t.update(n,u,d),o.visible=!0},T(()=>{r.reflectivity&&(i.uniforms.uReflectivity.value=r.reflectivity)}),B(()=>r.showGridHelper,n=>{s.visible=n}),(n,u)=>(U(),E("TresGroup",{scale:r.scale},[f("primitive",{object:m(o),"position-y":-.01},null,8,H),f("primitive",{object:m(s)},null,8,I)],8,N))}});export{z as _};