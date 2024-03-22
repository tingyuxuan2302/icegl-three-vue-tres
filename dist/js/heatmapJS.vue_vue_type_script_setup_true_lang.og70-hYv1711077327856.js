import{a0 as d,c2 as m,ap as g,a5 as f,o as y,c as x,X as p,a9 as _,aa as M}from"./vendor.Wnhd-Ix51711077327856.js";import{h as R}from"./heatmap.PXOOgbY-1711077327856.js";const w=["position"],b=["args","rotate-x"],C=d({__name:"heatmapJS",props:{position:{default:[0,0,0]},Plane:{default:[50,50,1e3,1e3]},show2dCanvas:{type:Boolean,default:!0},heightRatio:{default:6}},setup(u,{expose:c}){const a=u;let i=null;const s=(t,o)=>Math.round((Math.random()*(t-o+1)+o)*10)/10;let e=null;const v=()=>(e=document.createElement("heatmap-canvas"),e.width=100,e.height=100,e.style.position="absolute",e.style.top="0",e.style.left="0",document.body.appendChild(e),i=R.create({container:e,width:256,height:256,blur:".8",radius:10}),i),r=t=>{if(!t){let h=0;for(t=[];h<2e3;)t.push({x:s(1,256),y:s(1,256),value:s(1,6)}),h++}i.setData({max:12,data:t}),n.needsUpdate=!0},n=new m(v()._renderer.canvas);r();const l={transparent:!0,side:g,vertexShader:"\n	uniform sampler2D heightMap;\n	uniform float heightRatio;\n	varying vec2 vUv;\n	varying float hValue;\n	varying vec3 cl;\n	void main() {\n	  vUv = uv;\n	  vec3 pos = position;\n	  cl = texture2D(heightMap, vUv).rgb;\n	  hValue = texture2D(heightMap, vUv).r;\n	  pos.y = hValue * heightRatio;\n	  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);\n	}",fragmentShader:"\n	varying float hValue;\n	varying vec3 cl;\n	void main() {\n		float v = abs(hValue - 1.);\n		gl_FragColor = vec4(cl, .8 - v * v*1.1) ; \n	}",uniforms:{heightMap:{type:"t",value:n},heightRatio:{value:a.heightRatio}}};return f(()=>{e.style.display="".concat(a.show2dCanvas?"block":"none"),a.heightRatio&&(l.uniforms.heightRatio.value=a.heightRatio)}),c({setData:r}),(t,o)=>(y(),x("TresMesh",{position:a.position},[p("TresPlaneGeometry",{args:a.Plane,"rotate-x":-Math.PI*.5},null,8,b),p("TresShaderMaterial",_(M(l)),null,16)],8,w))}});export{C as _};
