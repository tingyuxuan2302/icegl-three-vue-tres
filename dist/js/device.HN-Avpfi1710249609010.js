import{b4 as h,bu as _,cq as v,cr as M,cs as C,ct as T,cu as P,cb as S,cv as b,aw as m,ba as E,bF as N,bL as x,bI as F,aE as A,au as w}from"./vendor.jNLcW6ym1710249609010.js";import{m as I}from"./BufferGeometryUtils.kln3pHrq1710249609010.js";import{P as R,F as G,R as O,E as g,S as U}from"./EffectComposer.jFjELRRy1710249609010.js";import{U as D}from"./UnrealBloomPass.KpQihNh81710249609010.js";const L="varying vec2 vUv;\nvoid main(){\n	vUv=uv;\n	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}",y="uniform sampler2D baseTexture;\nuniform sampler2D bloomTexture;\nvarying vec2 vUv;\nvoid main(){\n	gl_FragColor=(texture2D(baseTexture,vUv)+vec4(1.)*texture2D(bloomTexture,vUv));\n}",B={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:"\n		precision highp float;\n\n		uniform mat4 modelViewMatrix;\n		uniform mat4 projectionMatrix;\n\n		attribute vec3 position;\n		attribute vec2 uv;\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}",fragmentShader:"\n	\n		precision highp float;\n\n		uniform sampler2D tDiffuse;\n\n		#include <tonemapping_pars_fragment>\n		#include <colorspace_pars_fragment>\n\n		varying vec2 vUv;\n\n		void main() {\n\n			gl_FragColor = texture2D( tDiffuse, vUv );\n\n			// tone mapping\n\n			#ifdef LINEAR_TONE_MAPPING\n\n				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );\n\n			#elif defined( REINHARD_TONE_MAPPING )\n\n				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );\n\n			#elif defined( CINEON_TONE_MAPPING )\n\n				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );\n\n			#elif defined( ACES_FILMIC_TONE_MAPPING )\n\n				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );\n\n			#elif defined( AGX_TONE_MAPPING )\n\n				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );\n\n			#endif\n\n			// color space\n\n			#ifdef SRGB_TRANSFER\n\n				gl_FragColor = sRGBTransferOETF( gl_FragColor );\n\n			#endif\n\n		}"};class Q extends R{constructor(){super();const e=B;this.uniforms=h.clone(e.uniforms),this.material=new _({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new G(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},v.getTransfer(this._outputColorSpace)===M&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===C?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===T?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===P?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===S?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===b&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}let c=new m("#0fb1fb");const V=new E({color:c,transparent:!0,opacity:.3}),f=new N({color:new m(c),depthTest:!0,transparent:!0}),z=o=>{const e=[];o.traverse(a=>{a.isMesh&&(e.push(a.geometry),a.material=V)});const t=I(e),i=new x(t,Math.PI*6.137),r=new F(i);return f.opacity=1,r.material=f,r},l={threshold:0,strength:.972,radius:.21},k=(o,e,t,i,r)=>{const a=new O(o,e),p=new D(new A(i,r),l.strength,l.radius,l.threshold),s=new g(t);s.renderToScreen=!1,s.addPass(a),s.addPass(p);const u=new U(new w({uniforms:{baseTexture:{value:null},bloomTexture:{value:s.renderTarget2.texture}},vertexShader:L,fragmentShader:y,defines:{}}),"baseTexture");u.needsSwap=!0;const d=new Q,n=new g(t);return n.addPass(a),n.addPass(u),n.addPass(d),{finalComposer:n,effectComposer:s,renderScene:a,bloomPass:p}};export{z as r,k as u};
