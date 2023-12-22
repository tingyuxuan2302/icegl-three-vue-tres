import{Z as c,$ as d,a3 as u,o as m,v as f,C as p,a6 as h,J as t,a7 as _,a as v,aa as P,V as o,a8 as g,a9 as w,ai as x}from"./vendor.d0ca5cc01703251890586.js";const T=o("TresPerspectiveCamera",{position:[5,5,5],fov:45,near:.1,far:1e3,"look-at":[-8,3,-3]},null,-1),S=o("TresAmbientLight",{intensity:.5},null,-1),C={position:[-2,-2,-2]},M=["position","a-scale"],y=o("TresDirectionalLight",{position:[0,2,4],intensity:1,"cast-shadow":""},null,-1),z=o("TresGridHelper",null,null,-1),a=3e3,b=c({__name:"shaderParticles",setup(A){const r=d({clearColor:"black",shadows:!0,alpha:!1}),n={transparent:!0,blending:x,depthWrite:!1,vertexShader:"\n  uniform float uPixelRatio;\n  uniform float uSize;\n  uniform float uTime;\n  attribute float aScale;\n\n  void main()\n  {\n      vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n      modelPosition.y += sin(uTime + modelPosition.x * 100.0) * aScale * 0.2;\n      vec4 viewPosition = viewMatrix * modelPosition;\n      vec4 projectionPosition = projectionMatrix * viewPosition;\n\n      gl_Position = projectionPosition;\n      gl_PointSize = aScale * uSize * uPixelRatio;\n      gl_PointSize *= (1.0 / - viewPosition.z);\n  }\n  ",fragmentShader:"\n  void main()\n    {\n      float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n      float strength = 0.05 / distanceToCenter - 0.1;\n\n      gl_FragColor = vec4(1.0, 1.0, 1.0, strength);\n    }\n  ",uniforms:{uSize:{value:100},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uTime:{value:0}}},i=new Float32Array(a*3),s=new Float32Array(a);for(let e=0;e<a;e++)i[e*3+0]=Math.random()*4,i[e*3+1]=Math.random()*4,i[e*3+2]=Math.random()*4,s[e]=Math.random();const{onLoop:l}=u();return l(({elapsed:e})=>{n.uniforms.uTime.value=e}),(e,B)=>(m(),f(t(_),h(r,{"window-size":""}),{default:p(()=>[T,v(t(P)),S,o("TresPoints",C,[o("TresBufferGeometry",{position:[t(i),3],"a-scale":[t(s),1]},null,8,M),o("TresShaderMaterial",g(w(n)),null,16)]),y,z]),_:1},16))}});export{b as default};
