var ht=Object.defineProperty;var q=Object.getOwnPropertySymbols;var pt=Object.prototype.hasOwnProperty,mt=Object.prototype.propertyIsEnumerable;var Y=(s,a,e)=>a in s?ht(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,Q=(s,a)=>{for(var e in a||(a={}))pt.call(a,e)&&Y(s,e,a[e]);if(q)for(var e of q(a))mt.call(a,e)&&Y(s,e,a[e]);return s};var tt=(s,a,e)=>(Y(s,typeof a!="symbol"?a+"":a,e),e);import{aT as dt,ax as vt,bd as xt,a1 as ut,aD as gt,bj as bt,bz as et,b3 as k,az as ot,o as H,c as yt,Y as I,L as u,ap as at,bn as W,cq as L,a9 as wt,a2 as nt,ba as _t,x as $,E as X,aa as st,ab as it,bb as Mt,a as Z,ac as zt,ag as rt}from"./vendor.IRvbaiXg1714964469998.js";import"./vanilla.9c9WBppt1714964469998.js";import{_ as At}from"./skyBoxBmesh.vue_vue_type_script_setup_true_lang.3k9x2VEo1714964469998.js";import"./index.vue_vue_type_script_setup_true_lang.2SfXwBA71714964469998.js";import"./vanilla.1GZH9qPo1714964469998.js";import"./_commonjsHelpers.5-cIlDoe1714964469998.js";import"./utils.nbJ45GP71714964469998.js";import"./RGBELoader.WhArRdR91714964469998.js";function Ct(s,a,e,n){const i=class extends vt{constructor(C={}){const b=Object.entries(s);super({uniforms:b.reduce((h,[f,y])=>{const p=xt.clone({[f]:{value:y}});return Q(Q({},h),p)},{}),vertexShader:a,fragmentShader:e});tt(this,"key","");b.forEach(([h])=>Object.defineProperty(this,h,{get:()=>this.uniforms[h].value,set:f=>this.uniforms[h].value=f})),Object.assign(this,C),n&&n(this)}};return i.key=dt.generateUUID(),i}const St=.5*(Math.sqrt(3)-1),B=(3-Math.sqrt(3))/6,lt=s=>Math.floor(s)|0,ct=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Dt(s=Math.random){const a=Ft(s),e=new Float64Array(a).map(i=>ct[i%12*2]),n=new Float64Array(a).map(i=>ct[i%12*2+1]);return function(d,C){let b=0,h=0,f=0;const y=(d+C)*St,p=lt(d+y),w=lt(C+y),O=(p+w)*B,S=p-O,N=w-O,t=d-S,o=C-N;let l,x;t>o?(l=1,x=0):(l=0,x=1);const g=t-l+B,_=o-x+B,P=t-1+2*B,c=o-1+2*B,M=p&255,z=w&255;let A=.5-t*t-o*o;if(A>=0){const v=M+a[z],R=e[v],T=n[v];A*=A,b=A*A*(R*t+T*o)}let D=.5-g*g-_*_;if(D>=0){const v=M+l+a[z+x],R=e[v],T=n[v];D*=D,h=D*D*(R*g+T*_)}let F=.5-P*P-c*c;if(F>=0){const v=M+1+a[z+1],R=e[v],T=n[v];F*=F,f=F*F*(R*P+T*c)}return 70*(b+h+f)}}function Ft(s){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(s()*(256-n)),d=e[n];e[n]=e[i],e[i]=d}for(let n=256;n<512;n++)e[n]=e[n-256];return e}const Rt=["material"],Tt=["index","attributes-position","attributes-uv","attributes-offset","attributes-orientation","attributes-stretch","attributes-halfRootAngleSin","attributes-halfRootAngleCos"],Pt=["geometry"],Gt=["side"],jt=ut({__name:"grass",props:{bW:{default:.12},bH:{default:1},joints:{default:5},width:{default:100},instances:{default:5e4}},async setup(s){let a,e;const n=([a,e]=gt(()=>bt({map:"./plugins/floor/image/blade_diffuse.jpg",alphaMap:"./plugins/floor/image/blade_alpha.jpg"})),a=await a,e(),a),i=s,d=Dt(Math.random);function C(t,o){const l=[],x=[],g=[],_=[],P=[];let c=new W,M=new W;const z=-.25,A=.25;for(let V=0;V<t;V++){const J=Math.random()*o-o/2,K=Math.random()*o-o/2,ft=h(J,K);l.push(J,ft,K);let r=Math.PI-Math.random()*(2*Math.PI);_.push(Math.sin(.5*r)),P.push(Math.cos(.5*r));let m=new k(0,1,0),G=m.x*Math.sin(r/2),j=m.y*Math.sin(r/2),U=m.z*Math.sin(r/2),E=Math.cos(r/2);c.set(G,j,U,E).normalize(),r=Math.random()*(A-z)+z,m=new k(1,0,0),G=m.x*Math.sin(r/2),j=m.y*Math.sin(r/2),U=m.z*Math.sin(r/2),E=Math.cos(r/2),M.set(G,j,U,E).normalize(),c=b(c,M),r=Math.random()*(A-z)+z,m=new k(0,0,1),G=m.x*Math.sin(r/2),j=m.y*Math.sin(r/2),U=m.z*Math.sin(r/2),E=Math.cos(r/2),M.set(G,j,U,E).normalize(),c=b(c,M),x.push(c.x,c.y,c.z,c.w),V<t/3?g.push(Math.random()*1.8):g.push(Math.random())}const D=new L(new Float32Array(l),3),F=new L(new Float32Array(x),4),v=new L(new Float32Array(g),1),R=new L(new Float32Array(P),1),T=new L(new Float32Array(_),1);return{offsetsF32:D,orientationsF32:F,stretchesF32:v,halfRootAngleCosF32:R,halfRootAngleSinF32:T}}function b(t,o){const l=t.x*o.w+t.y*o.z-t.z*o.y+t.w*o.x,x=-t.x*o.z+t.y*o.w+t.z*o.x+t.w*o.y,g=t.x*o.y-t.y*o.x+t.z*o.w+t.w*o.z,_=-t.x*o.x-t.y*o.y-t.z*o.z+t.w*o.w;return new W(l,x,g,_)}function h(t,o){var l=2*d(t/50,o/50);return l+=4*d(t/100,o/100),l+=.2*d(t/10,o/10),l}const f=C(i.instances,i.width),y=new et(i.bW,i.bH,1,i.joints).translate(0,i.bH/2,0),p=new et(i.width,i.width,32,32);p.lookAt(new k(0,1,0));const w=p.attributes.position;for(let t=0;t<w.array.length;t+=3)w.array[t+1]=h(w.array[t],w.array[t+2]);p.attributes.position.needsUpdate=!0,p.computeVertexNormals();const O=Ct({bladeHeight:1,map:null,alphaMap:null,time:0,tipColor:new ot(.3,.9,0).convertSRGBToLinear(),bottomColor:new ot(0,.2,0).convertSRGBToLinear()},"   precision mediump float;\n      attribute vec3 offset;\n      attribute vec4 orientation;\n      attribute float halfrootanglesin;\n      attribute float halfrootanglecos;\n      attribute float stretch;\n      uniform float time;\n      uniform float bladeHeight;\n      varying vec2 vUv;\n      varying float frc;\n\n      //WEBGL-NOISE FROM https://github.com/stegu/webgl-noise\n      //Description : Array and textureless GLSL 2D simplex noise function. Author : Ian McEwan, Ashima Arts. Maintainer : stegu Lastmod : 20110822 (ijm) License : Copyright (C) 2011 Ashima Arts. All rights reserved. Distributed under the MIT License. See LICENSE file. https://github.com/ashima/webgl-noise https://github.com/stegu/webgl-noise\n      vec3 mod289(vec3 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;} vec2 mod289(vec2 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;} vec3 permute(vec3 x) {return mod289(((x*34.0)+1.0)*x);} float snoise(vec2 v){const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439); vec2 i  = floor(v + dot(v, C.yy) ); vec2 x0 = v -   i + dot(i, C.xx); vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0); vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod289(i); vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 )); vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0); m = m*m ; m = m*m ; vec3 x = 2.0 * fract(p * C.www) - 1.0; vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5); vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h ); vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw; return 130.0 * dot(m, g);}\n      //END NOISE\n\n      //https://www.geeks3d.com/20141201/how-to-rotate-a-vertex-by-a-quaternion-in-glsl/\n      vec3 rotateVectorByQuaternion( vec3 v, vec4 q){\n        return 2.0 * cross(q.xyz, v * q.w + cross(q.xyz, v)) + v;\n      }\n\n      //https://en.wikipedia.org/wiki/Slerp\n      vec4 slerp(vec4 v0, vec4 v1, float t) {\n        // Only unit quaternions are valid rotations.\n        // Normalize to avoid undefined behavior.\n        normalize(v0);\n        normalize(v1);\n\n        // Compute the cosine of the angle between the two vectors.\n        float dot_ = dot(v0, v1);\n\n        // If the dot product is negative, slerp won't take\n        // the shorter path. Note that v1 and -v1 are equivalent when\n        // the negation is applied to all four components. Fix by\n        // reversing one quaternion.\n        if (dot_ < 0.0) {\n          v1 = -v1;\n          dot_ = -dot_;\n        }\n\n        const float DOT_THRESHOLD = 0.9995;\n        if (dot_ > DOT_THRESHOLD) {\n          // If the inputs are too close for comfort, linearly interpolate\n          // and normalize the result.\n          vec4 result = t*(v1 - v0) + v0;\n          normalize(result);\n          return result;\n        }\n\n        // Since dot is in range [0, DOT_THRESHOLD], acos is safe\n        float theta_0 = acos(dot_);       // theta_0 = angle between input vectors\n        float theta = theta_0*t;          // theta = angle between v0 and result\n        float sin_theta = sin(theta);     // compute this value only once\n        float sin_theta_0 = sin(theta_0); // compute this value only once\n        float s0 = cos(theta) - dot_ * sin_theta / sin_theta_0;  // == sin(theta_0 - theta) / sin(theta_0)\n        float s1 = sin_theta / sin_theta_0;\n        return (s0 * v0) + (s1 * v1);\n      }\n\n      void main() {\n        //Relative position of vertex along the mesh Y direction\n        frc = position.y/float(bladeHeight);\n        //Get wind data from simplex noise\n        float noise = 1.0-(snoise(vec2((time-offset.x/50.0), (time-offset.z/50.0))));\n        //Define the direction of an unbent blade of grass rotated around the Y axis\n        vec4 direction = vec4(0.0, halfrootanglesin, 0.0, halfrootanglecos);\n        //Interpolate between the unbent direction and the direction of growth calculated on the CPU.\n        //Using the relative location of the vertex along the Y axis as the weight, we get a smooth bend\n        direction = slerp(direction, orientation, frc);\n        vec3 vPosition = vec3(position.x, position.y + position.y * stretch, position.z);\n        vPosition = rotateVectorByQuaternion(vPosition, direction);\n\n       //Apply wind\n       float halfAngle = noise * 0.15;\n        vPosition = rotateVectorByQuaternion(vPosition, normalize(vec4(sin(halfAngle), 0.0, -sin(halfAngle), cos(halfAngle))));\n        //UV for texture\n        vUv = uv;\n        //Calculate final position of the vertex from the world offset and the above shenanigans\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(offset + vPosition, 1.0 );\n      }","\n      precision mediump float;\n      uniform sampler2D map;\n      uniform sampler2D alphaMap;\n      uniform vec3 tipColor;\n      uniform vec3 bottomColor;\n      varying vec2 vUv;\n      varying float frc;\n\n      void main() {\n        //Get transparency information from alpha map\n        float alpha = texture2D(alphaMap, vUv).r;\n        //If transparent, don't draw\n        if(alpha < 0.15) discard;\n        //Get colour data from texture\n        vec4 col = vec4(texture2D(map, vUv));\n        //Add more green towards root\n        col = mix(vec4(tipColor, 1.0), col, frc);\n        //Add a shadow towards root\n        col = mix(vec4(bottomColor, 1.0), col, frc);\n        gl_FragColor = col;\n\n        #include <tonemapping_fragment>\n	      #include <colorspace_fragment>\n      }",t=>{t.side=at}),S=new O;S.map=n.map,S.alphaMap=n.alphaMap,S.toneMapped=!1;const{onLoop:N}=wt();return N(({elapsed:t})=>{S.uniforms.time.value=t/4}),(t,o)=>(H(),yt("TresGroup",null,[I("TresMesh",{material:u(S)},[I("TresInstancedBufferGeometry",{index:u(y).index,"attributes-position":u(y).attributes.position,"attributes-uv":u(y).attributes.uv,"attributes-offset":u(f).offsetsF32,"attributes-orientation":u(f).orientationsF32,"attributes-stretch":u(f).stretchesF32,"attributes-halfRootAngleSin":u(f).halfRootAngleSinF32,"attributes-halfRootAngleCos":u(f).halfRootAngleCosF32},null,8,Tt)],8,Rt),I("TresMesh",{position:[0,0,0],geometry:u(p)},[I("TresMeshStandardMaterial",{color:"#000f00",side:at},null,8,Gt)],8,Pt)]))}}),Ut=I("TresPerspectiveCamera",{position:[15,15,10],fov:45,near:.1,far:1e3},null,-1),Yt=ut({__name:"grass",setup(s){const a=nt({alpha:!0,toneMapping:_t,windowSize:!0,clearColor:6710886}),e=nt({enableDamping:!0,autoRotate:!1});return(n,i)=>(H(),$(u(Mt),st(it(a)),{default:X(()=>[Ut,Z(u(zt),st(it(e)),null,16),(H(),$(rt,null,{default:X(()=>[Z(jt)]),_:1})),(H(),$(rt,null,{default:X(()=>[Z(u(At),{texture:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/images/skyBox/desert_1k.hdr"})]),_:1}))]),_:1},16))}});export{Yt as default};
