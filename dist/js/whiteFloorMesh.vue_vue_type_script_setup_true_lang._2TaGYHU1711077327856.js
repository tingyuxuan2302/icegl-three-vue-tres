import{c1 as e,a0 as p,k as c,aD as h,bd as f,bk as v,b5 as g,bj as _,az as s,ap as w,w as n,o as x,c as C,X as d,a9 as S,aa as $}from"./vendor.Wnhd-Ix51711077327856.js";const b=()=>"\n       varying vec2 vUv;\n			 	".concat(e.common,"\n      	").concat(e.bsdfs,"\n      	").concat(e.shadowmap_pars_vertex,"\n       void main() {\n					").concat(e.beginnormal_vertex,"\n          ").concat(e.defaultnormal_vertex,"\n          ").concat(e.begin_vertex,"\n          ").concat(e.project_vertex,"\n          ").concat(e.worldpos_vertex,"\n          ").concat(e.shadowmap_vertex,"\n\n           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);    \n           vUv = uv;\n       }"),k=()=>"\n	varying vec2 vUv;\n	uniform sampler2D uTexture;\n	uniform vec3 uShadowColor;\n	uniform vec3 uColor;\n	uniform float fEdge;\n	// ShaderMaterial 下的 纹理参数重复无效 要在着色器中增加\n	float repeatTime = 100.0;\n\n	float smoothsteps(float t) {\n			return t * t * (3.0 - 2.0 * t);\n	}\n\n	 ".concat(e.common,"\n	 ").concat(e.packing,"\n	 ").concat(e.bsdfs,"\n	 ").concat(e.lights_pars_begin,"\n	 ").concat(e.shadowmap_pars_fragment,"\n	 ").concat(e.shadowmask_pars_fragment,"\n\n	void main() {\n			vec4 col = texture2D(uTexture, vUv * repeatTime);\n			col.rgb = mix( uColor , col.rgb ,0.5);\n			\n			float alpha = 1.0;\n			float d = length(vUv - vec2(0.5));\n			if(d > 0.35) {\n					alpha = 1.0 - smoothsteps( clamp( (d - 0.35) / (fEdge-0.2), 0.0, 1.0) );\n			}\n\n		 vec3 addShadow = mix( uShadowColor , col.rgb ,getShadowMask());\n\n			gl_FragColor = vec4(addShadow, alpha);  \n	}"),T=["rotation-x"],M=["args"],E=p({__name:"whiteFloorMesh",props:{size:{default:[20,20]},color:{default:"#990"},shadowColor:{default:"#999"},edge:{default:.35}},async setup(u){let o,i;const a=u,m=c(),{map:l}=([o,i]=h(()=>f({map:"./plugins/floor/image/whiteFloor.jpg"})),o=await o,i(),o);l.wrapS=l.wrapT=v;const r={uniforms:g.merge([_.lights,{uTexture:{type:"t",value:l},uColor:{value:new s(a.color)},uShadowColor:{value:new s(a.shadowColor)},fEdge:{type:"f",value:a.edge}}]),side:w,vertexShader:b(),fragmentShader:k(),lights:!0,transparent:!0};return n(()=>a.edge,t=>{r.uniforms.fEdge.value=t}),n(()=>a.color,t=>{r.uniforms.uColor.value=new s(a.color)}),n(()=>a.shadowColor,t=>{r.uniforms.uShadowColor.value=new s(a.shadowColor)}),(t,y)=>(x(),C("TresMesh",{ref_key:"tmRef",ref:m,"rotation-x":-Math.PI/2},[d("TresPlaneGeometry",{args:a.size},null,8,M),d("TresShaderMaterial",S($(r)),null,16)],8,T))}});export{E as _};
