import{bf as d,bN as h,Z as u,a3 as f,aF as m,o as g,v,C as y,a6 as C,J as c,a7 as S,a1 as w,bq as M,a as _,aa as b,V as i,a8 as x,a9 as P}from"./vendor.d0ca5cc01703251890586.js";const l={segments:30,w:256,h:256},T=()=>{const e=new Array;for(let o=0;o<l.segments;o++)e[o]=parseInt(Math.random()*25+10);return e},G=(e,o)=>{let{x:r,y:t,radius:a,weight:n}=o;a=parseInt(a*n);const s=e.createRadialGradient(r,t,0,r,t,a);s.addColorStop(0,"rgba(255, 255, 0, 1)"),s.addColorStop(1,"rgba(255, 0, 0, 0)"),e.fillStyle=s,e.globalAlpha=n,e.beginPath(),e.arc(r,t,a,0,2*Math.PI),e.closePath(),e.fill()},F=()=>{const e={1:"#f00",.8:"#e2fa00",.6:"#33f900",.3:"#0349df",0:"#fff"},o=256,r=10,t=document.createElement("canvas");t.width=o,t.height=r,t.style.position="absolute",t.style.top="0",t.style.right="0";const a=t.getContext("2d"),n=a.createLinearGradient(0,0,o,0);for(const p in e)n.addColorStop(p,e[p]);a.fillStyle=n,a.fillRect(0,0,o,r),document.body.appendChild(t);const s=new d(t);return s.minFilter=h,s.needsUpdate=!0,s},L=()=>{const e=document.createElement("canvas");e.width=l.w,e.height=l.h,e.style.position="absolute",e.style.top="20px",e.style.right="0";const o=e.getContext("2d"),r=T();for(let a=0;a<l.segments;a++){const n=r[a]/35,s=Math.random()*l.w,p=Math.random()*l.h;G(o,{x:s,y:p,radius:80,weight:n})}document.body.appendChild(e);const t=new d(e);return t.minFilter=h,t.needsUpdate=!0,t},R=i("TresPerspectiveCamera",{position:[0,0,3e3],fov:40,near:.1,far:1e4},null,-1),U=i("TresAmbientLight",{color:"#eef0ff",intensity:1},null,-1),A=i("TresPlaneGeometry",{args:[1500,1500]},null,-1),B=u({__name:"simpleExample",setup(e){const o={clearColor:"#030311",shadows:!0,alpha:!1,outputColorSpace:w,shadowMapType:M,useLegacyLights:!0};f().onLoop(({delta:a})=>{});const r={transparent:!0,side:m,vertexShader:"\n	varying vec2 vUv;\n  void main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  }",fragmentShader:"\n	#ifdef GL_ES\n  precision highp float;\n  #endif\n  varying vec2 vUv;\n  uniform sampler2D alphaScaleMap;\n  uniform sampler2D paletteMap;\n  void main() {\n    vec4 alphaColor = texture2D(alphaScaleMap, vUv);\n    vec4 color = texture2D(paletteMap, vec2(alphaColor.a, 0.0));\n    gl_FragColor = vec4(color.r, color.g, color.b, alphaColor.a);\n	}",uniforms:{alphaScaleMap:{type:"t",value:L()},paletteMap:{type:"t",value:F()}}};function t(a){a&&console.log(a)}return(a,n)=>(g(),v(c(S),C(o,{"window-size":""}),{default:y(()=>[R,_(c(b),{autoRotate:!0,autoRotateSpeed:2}),U,i("TresMesh",{position:[0,0,10],onPointerMove:t},[A,i("TresShaderMaterial",x(P(r)),null,16)],32)]),_:1},16))}});export{B as default};
