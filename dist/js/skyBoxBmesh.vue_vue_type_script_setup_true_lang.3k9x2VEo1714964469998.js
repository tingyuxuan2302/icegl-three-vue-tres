import{a1 as l,aD as c,cK as p,aI as o,o as m,c as v,Y as s,aa as u,ab as d,b6 as g}from"./vendor.IRvbaiXg1714964469998.js";import{l as x}from"./utils.nbJ45GP71714964469998.js";const _=["args"],h=l({__name:"skyBoxBmesh",props:{texture:{},size:{default:1e3}},async setup(i){let a,t;const r=i,e=([a,t]=c(()=>x(r.texture)),a=await a,t(),a);e.wrapS=e.wrapT=p,e.generateMipmaps=!1,e.magFilter=o,e.minFilter=o;const n={uniforms:{uSkybox:{type:"t",value:e}},side:g,vertexShader:"\n		varying vec3 vFragPos;\n\n		void main() {\n				vFragPos = position.xyz;\n				vec4 viewSpace = vec4(mat3(modelViewMatrix) * position, 0.0);\n				viewSpace.w = 1.0;\n				gl_Position = projectionMatrix * viewSpace;    \n		}",fragmentShader:"\n		uniform sampler2D uSkybox;\n		varying vec3 vFragPos;\n		const float PI = 3.14159265359;\n		void main() {\n				vec3 dir = normalize(vFragPos);\n				float v = (asin(dir.y) + PI * 0.5) / (PI); \n				float u = (atan(dir.x, dir.z) + PI) / (PI * 2.0);\n				gl_FragColor = texture2D(uSkybox, vec2(u, v));\n		}",depthWrite:!0};return(f,y)=>(m(),v("TresMesh",null,[s("TresBoxGeometry",{args:[r.size,r.size,r.size]},null,8,_),s("TresShaderMaterial",u(d(n)),null,16)]))}});export{h as _};
