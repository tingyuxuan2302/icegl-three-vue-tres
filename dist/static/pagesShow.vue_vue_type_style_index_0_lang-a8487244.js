import{U as W,c as E,C,d as R,D as k,e as j,V as y,I as le,F as q,f as I,g as M,W as de,h as ee,i as ce,j as z,k as D,b as ue,l as fe,m as pe,a as me,E as $,B as he,S as ve,N as ge}from"./three.module-eabffd14.js";import{g as ye,n as we,l as Se,r as xe}from"./trescientos-01522e33.js";import{Y as G,j as te,ac as ie,w as _e,o as U,c as H,I as b,a7 as X,ai as be,s as Me,B as Ce,a8 as Ee,U as A,a as O,a9 as Ae,aa as Be,C as Le,V as Te,X as ze}from"./vendor-4c6c5ef6.js";const Ue=async()=>{const e=await ye("./plugins/digitalCity/model/shanghai.FBX");let t=null,i=null;return e.traverse(n=>{n.name==="CITY_UNTRIANGULATED"&&(t=n),n.name==="LANDMASS"&&(i=n)}),{model:e,city:t,land:i}},De=["object"],Oe=G({__name:"buildingsModelShader",props:{model:{},bulidingsColor:{default:"#d88de2"},landColor:{default:"#112233"},opacity:{default:.9},gradient:{type:Boolean,default:!0}},setup(l){const e=l,t=te(0),i=e.model.city;i.renderOrder=1001;const n=e.model.land,r=(a,c)=>{let m;a==="cu"||a==="land"&&(m=Array.isArray(n.material)?n.material:[n.material],m.forEach(d=>{d[c].setStyle(e.landColor),d.side=k}))};(()=>{const{geometry:a}=i;a.computeBoundingBox(),a.computeBoundingSphere();const{max:c,min:m}=a.boundingBox;i.material.dispose();const d=W.merge([E.lights,{uMax:{value:c},uMin:{value:m},uBorderWidth:{value:5},uCircleTime:{value:5},uColor:{value:new C(e.bulidingsColor)},uOpacity:{value:e.opacity},uLightColor:{value:new C("#ffffff")},uTopColor:{value:new C("#ffff00")}}]);d.uTime=t;//!! 见上
d.uGradient={value:e.gradient},i.material=new R({depthWrite:!0,depthTest:!0,transparent:!0,side:k,lights:!0,uniforms:d,vertexShader:"\n			varying vec4 vPosition;\n			varying vec3 vNormal;\n			void main() {\n				vec4 worldNormal = modelMatrix * vec4(normal, 0.0);\n  			vNormal = normalize(worldNormal.xyz);\n				vNormal = vec3(1.0, 1.0, 1.0);\n\n				vPosition = modelMatrix * vec4(position,1.0);\n				gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n			}\n",fragmentShader:"	\n			#if NUM_DIR_LIGHTS > 0\n				struct DirectionalLight {\n						vec3 direction;\n						vec3 color;\n				};\n				uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n			#endif	\n			uniform vec3 uColor;  \n			uniform float uOpacity;  \n			uniform float uTime; \n			uniform mat4 modelMatrix;\n			varying vec4 vPosition;\n			uniform vec3 uMax; \n			uniform vec3 uMin; \n			uniform float uBorderWidth; \n			uniform vec3 uLightColor;				//打光颜色\n			uniform float uCircleTime; \n			vec4 uMax_world;\n			vec4 uMin_world;\n			varying vec3 vNormal;\n			uniform vec3 uTopColor;					//顶部颜色\n			uniform bool uGradient;\n			void main() {\n				// 转世界坐标\n				uMax_world =  modelMatrix * vec4(uMax,1.0);\n				uMin_world =  modelMatrix * vec4(uMin,1.0);\n				float residue = uTime - floor(uTime / uCircleTime) * uCircleTime;\n				float rate = residue / uCircleTime;\n				float lightOffset = rate * (uMax_world.y - uMin_world.y);\n\n				if (uMin_world.y + lightOffset < vPosition.y && uMin_world.y + lightOffset + uBorderWidth > vPosition.y) {\n					gl_FragColor = vec4(uLightColor, 1.0);\n				} else {\n					// 计算定向光照强度\n					vec3 lightDirection = normalize(directionalLights[0].direction);\n					float intensity = dot(vNormal, lightDirection);\n					intensity = smoothstep(0.0, 0.1, intensity);\n					vec3 outColor = mix(uColor, uColor*intensity, 0.2);\n					gl_FragColor = vec4(outColor, uOpacity);\n\n					//根据高度计算颜色\n					if(uGradient){\n						float rateHight = (vPosition.y - uMin_world.y) / (uMax_world.y - uMin_world.y); \n						outColor = mix(outColor, uTopColor, rateHight);\n						gl_FragColor = vec4(outColor, uOpacity);\n					}\n				}\n			}\n"})})();const{onLoop:o}=we();return o(({delta:a})=>{t.value+=a}),ie(()=>{e.bulidingsColor&&i.material.uniforms.uColor.value.setStyle(e.bulidingsColor),e.landColor&&r("land","color"),e.opacity&&(i.material.uniforms.uOpacity.value=e.opacity)}),_e(e,(a,c)=>{i.material.uniforms.uGradient.value=a.gradient}),(a,c)=>(U(),H("primitive",{object:e.model.model.clone()},null,8,De))}}),Y=new j,B=new y;class ne extends le{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new q(e,3)),this.setAttribute("uv",new q(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new I(t,6,1);return this.setAttribute("instanceStart",new M(i,3,0)),this.setAttribute("instanceEnd",new M(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new I(t,6,1);return this.setAttribute("instanceColorStart",new M(i,3,0)),this.setAttribute("instanceColorEnd",new M(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new de(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new j);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Y.setFromBufferAttribute(t),this.boundingBox.union(Y))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ee),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let r=0,s=e.count;r<s;r++)B.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(B)),B.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(B));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}E.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ce(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};z.line={uniforms:W.merge([E.common,E.fog,E.line]),vertexShader:"\n		#include <common>\n		#include <color_pars_vertex>\n		#include <fog_pars_vertex>\n		#include <logdepthbuf_pars_vertex>\n		#include <clipping_planes_pars_vertex>\n\n		uniform float linewidth;\n		uniform vec2 resolution;\n\n		attribute vec3 instanceStart;\n		attribute vec3 instanceEnd;\n\n		attribute vec3 instanceColorStart;\n		attribute vec3 instanceColorEnd;\n\n		#ifdef WORLD_UNITS\n\n			varying vec4 worldPos;\n			varying vec3 worldStart;\n			varying vec3 worldEnd;\n\n			#ifdef USE_DASH\n\n				varying vec2 vUv;\n\n			#endif\n\n		#else\n\n			varying vec2 vUv;\n\n		#endif\n\n		#ifdef USE_DASH\n\n			uniform float dashScale;\n			attribute float instanceDistanceStart;\n			attribute float instanceDistanceEnd;\n			varying float vLineDistance;\n\n		#endif\n\n		void trimSegment( const in vec4 start, inout vec4 end ) {\n\n			// trim end segment so it terminates between the camera plane and the near plane\n\n			// conservative estimate of the near plane\n			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column\n			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column\n			float nearEstimate = - 0.5 * b / a;\n\n			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );\n\n			end.xyz = mix( start.xyz, end.xyz, alpha );\n\n		}\n\n		void main() {\n\n			#ifdef USE_COLOR\n\n				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;\n\n			#endif\n\n			#ifdef USE_DASH\n\n				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;\n				vUv = uv;\n\n			#endif\n\n			float aspect = resolution.x / resolution.y;\n\n			// camera space\n			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );\n			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );\n\n			#ifdef WORLD_UNITS\n\n				worldStart = start.xyz;\n				worldEnd = end.xyz;\n\n			#else\n\n				vUv = uv;\n\n			#endif\n\n			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane\n			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space\n			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly\n			// perhaps there is a more elegant solution -- WestLangley\n\n			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column\n\n			if ( perspective ) {\n\n				if ( start.z < 0.0 && end.z >= 0.0 ) {\n\n					trimSegment( start, end );\n\n				} else if ( end.z < 0.0 && start.z >= 0.0 ) {\n\n					trimSegment( end, start );\n\n				}\n\n			}\n\n			// clip space\n			vec4 clipStart = projectionMatrix * start;\n			vec4 clipEnd = projectionMatrix * end;\n\n			// ndc space\n			vec3 ndcStart = clipStart.xyz / clipStart.w;\n			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;\n\n			// direction\n			vec2 dir = ndcEnd.xy - ndcStart.xy;\n\n			// account for clip-space aspect ratio\n			dir.x *= aspect;\n			dir = normalize( dir );\n\n			#ifdef WORLD_UNITS\n\n				// get the offset direction as perpendicular to the view vector\n				vec3 worldDir = normalize( end.xyz - start.xyz );\n				vec3 offset;\n				if ( position.y < 0.5 ) {\n\n					offset = normalize( cross( start.xyz, worldDir ) );\n\n				} else {\n\n					offset = normalize( cross( end.xyz, worldDir ) );\n\n				}\n\n				// sign flip\n				if ( position.x < 0.0 ) offset *= - 1.0;\n\n				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );\n\n				// don't extend the line if we're rendering dashes because we\n				// won't be rendering the endcaps\n				#ifndef USE_DASH\n\n					// extend the line bounds to encompass  endcaps\n					start.xyz += - worldDir * linewidth * 0.5;\n					end.xyz += worldDir * linewidth * 0.5;\n\n					// shift the position of the quad so it hugs the forward edge of the line\n					offset.xy -= dir * forwardOffset;\n					offset.z += 0.5;\n\n				#endif\n\n				// endcaps\n				if ( position.y > 1.0 || position.y < 0.0 ) {\n\n					offset.xy += dir * 2.0 * forwardOffset;\n\n				}\n\n				// adjust for linewidth\n				offset *= linewidth * 0.5;\n\n				// set the world position\n				worldPos = ( position.y < 0.5 ) ? start : end;\n				worldPos.xyz += offset;\n\n				// project the worldpos\n				vec4 clip = projectionMatrix * worldPos;\n\n				// shift the depth of the projected points so the line\n				// segments overlap neatly\n				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;\n				clip.z = clipPose.z * clip.w;\n\n			#else\n\n				vec2 offset = vec2( dir.y, - dir.x );\n				// undo aspect ratio adjustment\n				dir.x /= aspect;\n				offset.x /= aspect;\n\n				// sign flip\n				if ( position.x < 0.0 ) offset *= - 1.0;\n\n				// endcaps\n				if ( position.y < 0.0 ) {\n\n					offset += - dir;\n\n				} else if ( position.y > 1.0 ) {\n\n					offset += dir;\n\n				}\n\n				// adjust for linewidth\n				offset *= linewidth;\n\n				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...\n				offset /= resolution.y;\n\n				// select end\n				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;\n\n				// back to clip space\n				offset *= clip.w;\n\n				clip.xy += offset;\n\n			#endif\n\n			gl_Position = clip;\n\n			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation\n\n			#include <logdepthbuf_vertex>\n			#include <clipping_planes_vertex>\n			#include <fog_vertex>\n\n		}\n		",fragmentShader:"\n		uniform vec3 diffuse;\n		uniform float opacity;\n		uniform float linewidth;\n\n		#ifdef USE_DASH\n\n			uniform float dashOffset;\n			uniform float dashSize;\n			uniform float gapSize;\n\n		#endif\n\n		varying float vLineDistance;\n\n		#ifdef WORLD_UNITS\n\n			varying vec4 worldPos;\n			varying vec3 worldStart;\n			varying vec3 worldEnd;\n\n			#ifdef USE_DASH\n\n				varying vec2 vUv;\n\n			#endif\n\n		#else\n\n			varying vec2 vUv;\n\n		#endif\n\n		#include <common>\n		#include <color_pars_fragment>\n		#include <fog_pars_fragment>\n		#include <logdepthbuf_pars_fragment>\n		#include <clipping_planes_pars_fragment>\n\n		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {\n\n			float mua;\n			float mub;\n\n			vec3 p13 = p1 - p3;\n			vec3 p43 = p4 - p3;\n\n			vec3 p21 = p2 - p1;\n\n			float d1343 = dot( p13, p43 );\n			float d4321 = dot( p43, p21 );\n			float d1321 = dot( p13, p21 );\n			float d4343 = dot( p43, p43 );\n			float d2121 = dot( p21, p21 );\n\n			float denom = d2121 * d4343 - d4321 * d4321;\n\n			float numer = d1343 * d4321 - d1321 * d4343;\n\n			mua = numer / denom;\n			mua = clamp( mua, 0.0, 1.0 );\n			mub = ( d1343 + d4321 * ( mua ) ) / d4343;\n			mub = clamp( mub, 0.0, 1.0 );\n\n			return vec2( mua, mub );\n\n		}\n\n		void main() {\n\n			#include <clipping_planes_fragment>\n\n			#ifdef USE_DASH\n\n				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps\n\n				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX\n\n			#endif\n\n			float alpha = opacity;\n\n			#ifdef WORLD_UNITS\n\n				// Find the closest points on the view ray and the line segment\n				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;\n				vec3 lineDir = worldEnd - worldStart;\n				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );\n\n				vec3 p1 = worldStart + lineDir * params.x;\n				vec3 p2 = rayEnd * params.y;\n				vec3 delta = p1 - p2;\n				float len = length( delta );\n				float norm = len / linewidth;\n\n				#ifndef USE_DASH\n\n					#ifdef USE_ALPHA_TO_COVERAGE\n\n						float dnorm = fwidth( norm );\n						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );\n\n					#else\n\n						if ( norm > 0.5 ) {\n\n							discard;\n\n						}\n\n					#endif\n\n				#endif\n\n			#else\n\n				#ifdef USE_ALPHA_TO_COVERAGE\n\n					// artifacts appear on some hardware if a derivative is taken within a conditional\n					float a = vUv.x;\n					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;\n					float len2 = a * a + b * b;\n					float dlen = fwidth( len2 );\n\n					if ( abs( vUv.y ) > 1.0 ) {\n\n						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );\n\n					}\n\n				#else\n\n					if ( abs( vUv.y ) > 1.0 ) {\n\n						float a = vUv.x;\n						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;\n						float len2 = a * a + b * b;\n\n						if ( len2 > 1.0 ) discard;\n\n					}\n\n				#endif\n\n			#endif\n\n			vec4 diffuseColor = vec4( diffuse, alpha );\n\n			#include <logdepthbuf_fragment>\n			#include <color_fragment>\n\n			gl_FragColor = vec4( diffuseColor.rgb, alpha );\n\n			#include <tonemapping_fragment>\n			#include <colorspace_fragment>\n			#include <fog_fragment>\n			#include <premultiplied_alpha_fragment>\n\n		}\n		"};class oe extends R{constructor(e){super({type:"LineMaterial",uniforms:W.clone(z.line.uniforms),vertexShader:z.line.vertexShader,fragmentShader:z.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const J=new y,K=new y,u=new D,f=new D,h=new D,N=new y,P=new ue,p=new fe,Q=new y,L=new j,T=new ee,v=new D;let g,x;function Z(l,e,t){return v.set(0,0,-e,1).applyMatrix4(l.projectionMatrix),v.multiplyScalar(1/v.w),v.x=x/t.width,v.y=x/t.height,v.applyMatrix4(l.projectionMatrixInverse),v.multiplyScalar(1/v.w),Math.abs(Math.max(v.x,v.y))}function Ne(l,e){const t=l.matrixWorld,i=l.geometry,n=i.attributes.instanceStart,r=i.attributes.instanceEnd,s=Math.min(i.instanceCount,n.count);for(let o=0,a=s;o<a;o++){p.start.fromBufferAttribute(n,o),p.end.fromBufferAttribute(r,o),p.applyMatrix4(t);const c=new y,m=new y;g.distanceSqToSegment(p.start,p.end,m,c),m.distanceTo(c)<x*.5&&e.push({point:m,pointOnLine:c,distance:g.origin.distanceTo(m),object:l,face:null,faceIndex:o,uv:null,uv1:null})}}function Pe(l,e,t){const i=e.projectionMatrix,r=l.material.resolution,s=l.matrixWorld,o=l.geometry,a=o.attributes.instanceStart,c=o.attributes.instanceEnd,m=Math.min(o.instanceCount,a.count),d=-e.near;g.at(1,h),h.w=1,h.applyMatrix4(e.matrixWorldInverse),h.applyMatrix4(i),h.multiplyScalar(1/h.w),h.x*=r.x/2,h.y*=r.y/2,h.z=0,N.copy(h),P.multiplyMatrices(e.matrixWorldInverse,s);for(let w=0,re=m;w<re;w++){if(u.fromBufferAttribute(a,w),f.fromBufferAttribute(c,w),u.w=1,f.w=1,u.applyMatrix4(P),f.applyMatrix4(P),u.z>d&&f.z>d)continue;if(u.z>d){const _=u.z-f.z,S=(u.z-d)/_;u.lerp(f,S)}else if(f.z>d){const _=f.z-u.z,S=(f.z-d)/_;f.lerp(u,S)}u.applyMatrix4(i),f.applyMatrix4(i),u.multiplyScalar(1/u.w),f.multiplyScalar(1/f.w),u.x*=r.x/2,u.y*=r.y/2,f.x*=r.x/2,f.y*=r.y/2,p.start.copy(u),p.start.z=0,p.end.copy(f),p.end.z=0;const F=p.closestPointToPointParameter(N,!0);p.at(F,Q);const V=me.lerp(u.z,f.z,F),ae=V>=-1&&V<=1,se=N.distanceTo(Q)<x*.5;if(ae&&se){p.start.fromBufferAttribute(a,w),p.end.fromBufferAttribute(c,w),p.start.applyMatrix4(s),p.end.applyMatrix4(s);const _=new y,S=new y;g.distanceSqToSegment(p.start,p.end,S,_),t.push({point:S,pointOnLine:_,distance:g.origin.distanceTo(S),object:l,face:null,faceIndex:w,uv:null,uv1:null})}}}class Ie extends pe{constructor(e=new ne,t=new oe({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let s=0,o=0,a=t.count;s<a;s++,o+=2)J.fromBufferAttribute(t,s),K.fromBufferAttribute(i,s),n[o]=o===0?0:n[o-1],n[o+1]=n[o]+J.distanceTo(K);const r=new I(n,2,1);return e.setAttribute("instanceDistanceStart",new M(r,1,0)),e.setAttribute("instanceDistanceEnd",new M(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,n=e.camera;n===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;g=e.ray;const s=this.matrixWorld,o=this.geometry,a=this.material;x=a.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),T.copy(o.boundingSphere).applyMatrix4(s);let c;if(i)c=x*.5;else{const d=Math.max(n.near,T.distanceToPoint(g.origin));c=Z(n,d,a.resolution)}if(T.radius+=c,g.intersectsSphere(T)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),L.copy(o.boundingBox).applyMatrix4(s);let m;if(i)m=x*.5;else{const d=Math.max(n.near,L.distanceToPoint(g.origin));m=Z(n,d,a.resolution)}L.expandByScalar(m),g.intersectsBox(L)!==!1&&(i?Ne(this,t):Pe(this,n,t))}}const We=["object"],Re=G({__name:"buildingsLines",props:{builds:{},width:{default:1},color:{default:"#FFF"},opacity:{default:1},style:{default:"Wireframe"}},setup(l){const e=l;let t=null,i=null;if(e.style==="Wireframe"){const n=new $(e.builds.geometry);let s=new ne().fromEdgesGeometry(n),o=new oe({color:e.color,linewidth:e.width,opacity:e.opacity,transparent:!0,depthWrite:!0,depthTest:!0});o.resolution.set(window.innerWidth,window.innerHeight),t=new Ie(s,o),t.applyMatrix4(e.builds.matrix.clone())}else{i={transparent:!0,uniforms:{uColor:{value:new C(e.color)},uOpacity:{value:e.opacity}},vertexShader:"\n       void main() {\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n        }\n      ",fragmentShader:" \n        uniform vec3 uColor;\n				uniform float uOpacity;\n        void main() {\n          gl_FragColor = vec4(uColor, uOpacity);\n        }\n      "};const n=new $(e.builds.geometry),r=new R(i);t=new LineSegments(n,r),t.applyMatrix4(e.builds.matrix.clone()),t.material.linewidth=e.width,t.renderOrder=1e3}return ie(()=>{e.style==="Shader"&&(e.color&&(i.uniforms.uColor.value=new C(e.color)),e.opacity&&(i.uniforms.uOpacity.value=e.opacity)),e.style==="Wireframe"&&(e.color&&(t.material.color=new C(e.color)),e.opacity&&(t.material.opacity=e.opacity)),e.width&&(t.material.linewidth=e.width)}),(n,r)=>(U(),H("primitive",{object:b(t)},null,8,We))}}),je=A("TresAmbientLight",{color:"#ffffff"},null,-1),Ge=A("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1),He=A("TresAxesHelper",{args:[1e3],position:[0,19,0]},null,-1),Fe=A("TresGridHelper",{args:[6e3,100],position:[0,19,0]},null,-1),Xe=G({__name:"pagesShow",props:{showBuildings:{type:Boolean,default:!0},autoRotate:{type:Boolean,default:!0}},async setup(l){let e,t;const i=l,n=X({clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0,shadowMapType:he,outputColorSpace:ve,toneMapping:ge}),r=X({autoRotate:i.autoRotate,enableDamping:!0});let s=null;i.showBuildings&&(s=([e,t]=be(()=>Ue()),e=await e,t(),e));const o=te();return(a,c)=>(U(),Me(b(Se),Ee(n,{"window-size":""}),{default:Ce(()=>[A("TresPerspectiveCamera",{ref_key:"perspectiveCameraRef",ref:o,position:[600,750,-1221],fov:45,near:1,far:1e4},null,512),O(b(xe),Ae(Be(r)),null,16),je,Ge,i.showBuildings&&b(s)?(U(),H(Le,{key:0},[O(Oe,{model:b(s)},null,8,["model"]),O(Re,{builds:b(s).city,color:"#000"},null,8,["builds"])],64)):Te("",!0),ze(a.$slots,"ability"),He,Fe]),_:3},16))}});export{Xe as _,Oe as a,Re as b,Ue as l};
