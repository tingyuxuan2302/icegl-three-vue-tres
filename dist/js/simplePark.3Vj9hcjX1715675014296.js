import{a1 as N,aD as k,aE as M,ak as z,ap as Y,aH as F,aR as H,bR as R,l as D,a6 as E,o as v,c as B,Y as t,L as r,a as b,E as y,al as A,G as O,aw as X,az as W,cy as J,cl as K,b3 as j,w as T,aa as V,ab as q,a9 as Q,b5 as U,bw as Z,a2 as G,cz as ee,ad as $,aq as te,r as oe,a8 as L,ac as ae,b1 as se,x as C,ag as x}from"./vendor.QQYnRAOM1715675014296.js";/* empty css                                                                                 */import{_ as re}from"./randomLoading.vue_vue_type_script_setup_true_lang.DtCjAV3B1715675014296.js";import"./vanilla.lowEqTms1715675014296.js";import{_ as ne}from"./skyBoxDmesh.vue_vue_type_script_setup_true_lang.54ufLJg-1715675014296.js";import"./OimoPhysicsBuffer.b5DejoFC1715675014296.js";import"./index.vue_vue_type_script_setup_true_lang.FaMnODg01715675014296.js";import"./PackedMipMapGenerator.SSEzFqUu1715675014296.js";import{_ as ie}from"./gridPlusCom.vue_vue_type_script_setup_true_lang.EaeQvpL91715675014296.js";import{g as P}from"./index.A-uui1DV1715675014296.js";import{m as ce}from"./BufferGeometryUtils.j-B6fohF1715675014296.js";import{_ as le}from"./index.vue_vue_type_script_setup_true_lang.GNT-1edL1715675014296.js";import"./starLoading.i8onkF5M1715675014296.js";import"./bubbleLoading.uQXoujwc1715675014296.js";import"./vanilla.VDl6tfU91715675014296.js";import"./_commonjsHelpers.5-cIlDoe1715675014296.js";import"./_commonjs-dynamic-modules.h-SxKiO41715675014296.js";import"./shaderMaterial.XIXj-Hfl1715675014296.js";import"./index.9_FXPJFp1715675014296.js";import"./MeshTransmissionMaterial.vWlNreSS1715675014296.js";import"./MeshDiscardMaterial.DFg2njwJ1715675014296.js";const me=["object","rotation-y"],ue=["rotation","geometry","material"],pe=t("h1",{class:"text-xs p-0.5 rounded -mt-10 text-white font-bold",style:{"font-size":"78rem",width:"5em","text-align":"center","margin-top":"1em",scale:"0.7 1.5"}}," 楼宇分层 ",-1),de=N({__name:"officeBuild",async setup(S){let o,u;const{scene:p}=([o,u]=k(()=>M("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/digitalPark/officeBuild.glb",{draco:!0,decoderPath:"./draco/"})),o=await o,u(),o),{scene:n,raycaster:_,camera:a}=z();p.traverse(l=>{l.isMesh&&(l.frustumCulled=!1,l.material.side=Y,l.castShadow=!0,l.receiveShadow=!0,l.material.emissive=l.material.color,l.material.emissiveMap=l.material.map,l.material.emissiveIntensity=.8,l.material.envmap=n.value.background)});const d=p.clone();let i="";const c=()=>{var l;(l=p.getObjectByName(i))==null||l.traverse(f=>{f.isMesh&&(f.material=d.getObjectByName(f.name).material,f.castShadow=!0,f.receiveShadow=!0)})};window.addEventListener("pointermove",l=>{const f=new F;f.x=l.clientX/window.innerWidth*2-1,f.y=-(l.clientY/window.innerHeight)*2+1,_.value.setFromCamera(f,a.value);const e=_.value.intersectObject(p,!0);if(e.length>0&&e[0]&&e[0].object&&e[0].object.parent){if(i===e[0].object.parent.name)return;c(),e[0].object.parent.traverse(w=>{w.isMesh&&(w.material=new H({color:"#00d1ff",transparent:!0,opacity:.7,emissiveMap:w.material.map,emissiveIntensity:2}),w.castShadow=!1,w.receiveShadow=!1)}),i=e[0].object.parent.name}else i&&(c(),i="")});let s="";window.addEventListener("click",l=>{const f=new F;f.x=l.clientX/window.innerWidth*2-1,f.y=-(l.clientY/window.innerHeight)*2+1,_.value.setFromCamera(f,a.value);const e=_.value.intersectObject(p,!0);if(e.length>0&&e[0]&&e[0].object&&e[0].object.parent){if(s==="runing")return;if(s===e[0].object.parent.name){P.to(e[0].object.parent.position,{z:d.getObjectByName(s).position.z,duration:2,ease:"power1.inOut",onComplete:()=>{s=""}}),s="runing";return}s&&P.to(p.getObjectByName(s).position,{z:d.getObjectByName(s).position.z,duration:2,ease:"power1.inOut",onComplete:()=>{s=""}}),P.to(e[0].object.parent.position,{z:d.getObjectByName(e[0].object.parent.name).position.z-40,duration:2,ease:"power1.inOut",onComplete:()=>{s=e[0].object.parent.name}}),s="runing"}});const g=new R({roughness:.3,metalness:.05,color:"#3a4f75",envMapIntensity:.75,clearcoatRoughness:0,clearcoat:1}),{scene:m}=([o,u]=k(()=>M("./plugins/digitalPark/model/arctic_tooltip.glb",{draco:!0,decoderPath:"./draco/"})),o=await o,u(),o),h=D(null);return E(()=>{h.value&&P.to(h.value.rotation,{y:Math.PI*2.5,duration:3,ease:"power1.inOut",repeat:-1,yoyo:!0})}),(l,f)=>(v(),B(O,null,[t("primitive",{object:r(p),"cast-shadow":"","receive-shadow":"",position:[13.5,0,-45],scale:[.2,.3,.2],name:"办公大厅","rotation-y":Math.PI},null,8,me),t("TresMesh",{ref_key:"tooltipRef",ref:h,scale:[.05,.02,.004],rotation:[0,Math.PI/2,0],position:[12,25,-35],geometry:r(m).getObjectByName("Arctic_Tooltip_lambert4_0").geometry,material:r(g)},[b(r(A),{center:!0,transform:""},{default:y(()=>[pe]),_:1})],8,ue)],64))}}),_e=["object","rotation-y"],he=["rotation","geometry","material"],fe=t("h1",{class:"text-xs p-0.5 rounded -mt-10 text-white font-bold",style:{"font-size":"78rem",width:"4em","text-align":"center","margin-top":"1em"}},"实验楼",-1),be={__name:"laboratoryBuild",async setup(S){let o,u;const{scene:p}=([o,u]=k(()=>M("./plugins/digitalPark/model/laboratoryBuild.gltf",{draco:!0,decoderPath:"./draco/"})),o=await o,u(),o),{scene:n}=z(),_=[],a=[];p.traverse(m=>{m.updateMatrixWorld(!0),m.isMesh&&(m.geometry.applyMatrix4(m.matrixWorld),_.push(m.geometry),m.material.emissiveMap=m.material.map,m.material.emissiveIntensity=.1,m.material.envmap=n.value.background,a.push(m.material))});const d=ce(_,!0),i=new X(d,a),{scene:c}=([o,u]=k(()=>M("./plugins/digitalPark/model/arctic_tooltip.glb",{draco:!0,decoderPath:"./draco/"})),o=await o,u(),o),s=new R({roughness:.3,metalness:.05,color:"#b07560",envMapIntensity:.75,clearcoatRoughness:0,clearcoat:1}),g=D(null);return E(()=>{g.value&&P.to(g.value.rotation,{y:Math.PI*2.5,duration:3,ease:"power1.inOut",repeat:-1,yoyo:!0})}),(m,h)=>(v(),B(O,null,[t("primitive",{object:r(i),"cast-shadow":"","receive-shadow":"",position:[-33,0,7],scale:[.7,1.2,.7],name:"实验楼","rotation-y":Math.PI/2},null,8,_e),t("TresMesh",{ref_key:"tooltipRef",ref:g,scale:[.03,.02,.004],rotation:[0,Math.PI/2,0],position:[-32,27,12],geometry:r(c).getObjectByName("Arctic_Tooltip_lambert4_0").geometry,material:r(s)},[b(r(A),{center:!0,transform:""},{default:y(()=>[fe]),_:1})],8,he)],64))}},ge=["object"],ve=["rotation","geometry"],we=t("h1",{class:"text-xs p-0.5 rounded -mt-10 text-#ffff99 font-bold",style:{"font-size":"78rem",width:"4em","text-align":"center","margin-top":"1em"}}," 别追我 ",-1),I=3e-4,ye={__name:"car",props:{darkModel:{type:Boolean,default:!1}},async setup(S){let o,u;const p=S,n={color:"#ffda99",roughness:.21,reflectivity:1,attenuationColor:"#ffda35",attenuationDistance:2,chromaticAberration:.05,anisotropicBlur:.1,distortion:1.8,temporalDistortion:0,backside:!1,thickness:1,backsideThickness:.5},{scene:_}=z(),{scene:a,nodes:d,materials:i}=([o,u]=k(()=>M("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/industry4/lambo.glb",{draco:!0,decoderPath:"./draco/"})),o=await o,u(),o);a.children[0].scale.setScalar(.02),d.glass_003.scale.setScalar(2.7),i.FrameBlack.roughness=0,i.FrameBlack.metalness=.75,i.Chrome.metalness=1,i.Chrome.roughness=0,i.BreakDiscs.metalness=.2,i.BreakDiscs.roughness=.2,i.TiresGum.metalness=0,i.TiresGum.roughness=.4,i.GreyElements.metalness=0,d.yellow_WhiteCar_0.material=new R({roughness:.3,metalness:.05,color:"#ffda35",envMapIntensity:.75,clearcoatRoughness:0,clearcoat:1}),Object.values(d).forEach(e=>{e.isMesh&&(e.name.startsWith("glass")&&e.geometry.computeVertexNormals(),e.name==="silver_001_BreakDiscs_0"&&(e.material=i.BreakDiscs.clone(),e.material.color=new W("#ddd")),e.castShadow=!0,e.receiveShadow=!0,e.material.emissiveMap=e.material.map,e.material.emissiveIntensity=.1,e.material.envmap=_.value.background)});const c=new J(16777215);a.add(c),a.add(c.target),c.angle=Math.PI/4,c.position.set(0,2,5),c.target.position.set(0,1,7),c.penumbra=.1,c.decay=.01,c.intensity=3,c.castShadow=!0,c.shadow.mapSize.width=1024,c.shadow.mapSize.height=1024,c.shadow.camera.near=.1,c.shadow.camera.far=1e3,c.shadow.camera.bias=.005,c.visible=!0;const{scene:s}=([o,u]=k(()=>M("./plugins/digitalPark/model/arctic_tooltip.glb",{draco:!0,decoderPath:"./draco/"})),o=await o,u(),o),g=new K([new j(10,1.5,35),new j(35,1.5,35),new j(35,1.5,-80),new j(47,1.5,-80),new j(47,1.5,35),new j(100,1.5,35),new j(100,1.5,47),new j(-100,1.5,47),new j(-100,1.5,35)]);g.curveType="catmullrom",g.closed=!0,g.tension=.2;const m=D(null);let h=0;const l=()=>{if(g)if(h<=1-I){const e=g.getPointAt(h),w=g.getPointAt(h+I);e&&w&&(m.value.position.set(e.x,e.y+6,e.z),a.position.set(e.x,e.y,e.z),a.lookAt(w.x,w.y,w.z)),h+=I}else h=0};T(m,e=>{e&&P.to(m.value.rotation,{y:Math.PI*2.5,duration:3,ease:"power1.inOut",repeat:-1,yoyo:!0})}),T(()=>p.darkModel,e=>{c&&(c.visible=e)},{immediate:!0});const{onLoop:f}=Q();return f(()=>{l()}),(e,w)=>(v(),B(O,null,[t("primitive",{object:r(a)},null,8,ge),t("TresMesh",{ref_key:"tooltipRef",ref:m,scale:[.03,.02,.004],rotation:[0,Math.PI/2,0],position:[10,6,35],geometry:r(s).getObjectByName("Arctic_Tooltip_lambert4_0").geometry},[b(r(A),{center:!0,transform:""},{default:y(()=>[we]),_:1}),b(r(le),V(q(n)),null,16)],8,ve)],64))}},je=["object"],ke=N({__name:"sculpture",props:{darkModel:{type:Boolean,default:!1}},async setup(S){let o,u;const p=S,{scene:n}=([o,u]=k(()=>M("./plugins/digitalPark/model/vr_sculpture_park/scene.gltf",{draco:!0,decoderPath:"./draco/"})),o=await o,u(),o),{scene:_}=z();return n.traverse(async a=>{a.isMesh&&(a.material.emissiveMap=a.material.map,a.material.emissive=a.material.color,a.material.envmap=_.value.background,a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1),a.isObject3D&&(a.frustumCulled=!1,a.castShadow=!0,a.receiveShadow=!0)}),T(()=>p.darkModel,a=>{n&&n.traverse(async d=>{d.isMesh&&(a===!1?d.material.emissiveIntensity=.6:d.material.emissiveIntensity=0)})},{immediate:!0}),(a,d)=>(v(),B("primitive",{"cast-shadow":"","receive-shadow":"",object:r(n),name:"主场景"},null,8,je))}}),Me={position:[10,0,0]},Se={position:[-33*4,0,40.4]},Ce=["object"],xe={position:[-33*3,0,40.4]},Pe=["object"],Be={position:[-33*2,0,40.4]},Te=["object"],Oe={position:[-33,0,40.4]},ze=["object"],Ge={position:[0,0,40.4]},$e=["object"],Ie={position:[33*2-5.5,0,40.4]},Ne=["object"],Re={position:[33*3-5.5,0,40.4]},De=["object"],Ae={position:[-3.3,-.2,18]},Fe={position:[0,0,0]},Le=["object"],Ee={position:[0,0,33*1]},We=["object"],Ve={position:[0,0,33*2]},qe=["object"],Ye={position:[0,0,33*3]},He=["object"],Xe={position:[0,0,33*5-6]},Je=["object"],Ke={position:[0,0,33*6-6]},Qe=["object"],Ue={__name:"street",async setup(S){let o,u;const{nodes:p}=([o,u]=k(()=>M("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/digitalPark/low_poly_street_v3.glb",{draco:!0,decoderPath:"./draco/"})),o=await o,u(),o),n=p.Sketchfab_model.getObjectByName("Cube497_530");n.children[0].receiveShadow=!0;const _=p.Sketchfab_model.getObjectByName("Cube549_582");_.children[0].receiveShadow=!0;const a=p.Sketchfab_model.getObjectByName("Cube550_583");a.children[0].receiveShadow=!0;const d=p.Sketchfab_model.getObjectByName("Cube551_854");d.children[0].receiveShadow=!0;const i=p.Sketchfab_model.getObjectByName("Cube552_855");i.children[0].receiveShadow=!0;const c=p.Sketchfab_model.getObjectByName("Cube553_856");c.children[0].receiveShadow=!0;const s=new U;s.add(n,_,a,d,i,c),s.scale.setScalar(.83),s.rotation.set(0,.008,0);const g=new Z().setFromObject(s),m=new j;g.getCenter(m),s.position.x=-m.x,s.position.y=-m.y,s.position.z=-m.z;const h=s.clone();return h.rotateY(Math.PI/2),(l,f)=>(v(),B(O,null,[t("TresGroup",Me,[t("TresGroup",Se,[t("primitive",{object:r(s).clone()},null,8,Ce)]),t("TresGroup",xe,[t("primitive",{object:r(s).clone()},null,8,Pe)]),t("TresGroup",Be,[t("primitive",{object:r(s).clone()},null,8,Te)]),t("TresGroup",Oe,[t("primitive",{object:r(s).clone()},null,8,ze)]),t("TresGroup",Ge,[t("primitive",{object:r(s).clone()},null,8,$e)]),t("TresGroup",Ie,[t("primitive",{object:r(s).clone()},null,8,Ne)]),t("TresGroup",Re,[t("primitive",{object:r(s).clone()},null,8,De)])]),t("TresGroup",Ae,[t("TresGroup",Fe,[t("primitive",{object:r(h).clone()},null,8,Le)]),t("TresGroup",Ee,[t("primitive",{object:r(h).clone()},null,8,We)]),t("TresGroup",Ve,[t("primitive",{object:r(h).clone()},null,8,qe)]),t("TresGroup",Ye,[t("primitive",{object:r(h).clone()},null,8,He)]),t("TresGroup",Xe,[t("primitive",{object:r(h).clone()},null,8,Je)]),t("TresGroup",Ke,[t("primitive",{object:r(h).clone()},null,8,Qe)])])],64))}},Ze=t("TresPerspectiveCamera",{position:[40,30,82],fov:45,near:.1,far:1e4},null,-1),et=t("TresAmbientLight",{intensity:.1},null,-1),jt=N({__name:"simplePark",setup(S){const o=G({shadows:!0,shadowMap:!0,shadowMapType:ee,windowSize:!0}),u=G({enableDamping:!0,dampingFactor:.05}),p=G({cellSize:10,cellThickness:1,cellColor:"#4c4c4c",sectionColor:"#bbc26b",sectionSize:50,sectionThickness:3,fadeDistance:600,fadeStrength:3,followCamera:!1,infiniteGrid:!0}),n=$();T(n,i=>{i&&(n.value.shadow.mapSize.set(1024*5,1024*5),n.value.shadow.bias=-1e-5,n.value.shadow.color=new W(0),n.value.shadow.camera.near=.5,n.value.shadow.camera.far=5e4,n.value.shadow.camera.top=300,n.value.shadow.camera.right=300,n.value.shadow.camera.left=-300,n.value.shadow.camera.bottom=-300)});const _=$(!1),a=new te,d=$();return a.addBinding(_,"value",{label:"黑夜模式"}),T(_,i=>{n.value&&(n.value.visible=!i,d.value&&(d.value.context.scene.value.backgroundIntensity=i?0:1))}),(i,c)=>{const s=oe("TresCanvas");return v(),B(O,null,[b(r(re)),b(s,L(o,{ref_key:"tcRef",ref:d}),{default:y(()=>[Ze,b(r(ae),V(q(u)),null,16),et,b(r(se),null,{default:y(()=>[t("TresDirectionalLight",{ref_key:"TDirectionalLight",ref:n,position:[80,80,-8],intensity:3,castShadow:!0},null,512)]),_:1}),(v(),C(x,null,{default:y(()=>[b(de)]),_:1})),(v(),C(x,null,{default:y(()=>[b(be)]),_:1})),(v(),C(x,null,{default:y(()=>[b(Ue)]),_:1})),(v(),C(x,null,{default:y(()=>[b(ke,{darkModel:_.value},null,8,["darkModel"])]),_:1})),(v(),C(x,null,{default:y(()=>[b(ye,{darkModel:_.value},null,8,["darkModel"])]),_:1})),b(r(ie),L({args:[100,100]},p,{position:[0,-10,0]}),null,16),(v(),C(x,null,{default:y(()=>[b(r(ne),{environment:!1,texture:"https://cdn.polyhaven.com/asset_img/primary/kloofendal_48d_partly_cloudy_puresky.png?width=1920"})]),_:1}))]),_:1},16)],64)}}});export{jt as default};