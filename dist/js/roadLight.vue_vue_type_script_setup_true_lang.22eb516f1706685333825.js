import{Z as k,k as _,ai as g,b8 as C,bb as R,aO as v,bD as x,a4 as B,a3 as E,o as f,c as p,D as M,E as S,V as h,J as u,b6 as G,al as J}from"./vendor.7da8be181706685333825.js";import{l as L}from"./utils.883f09cf1706685333825.js";const V=["position","rotation-y","scale"],D={renderOrder:3e3},O=["args"],Y=["map","side","color"],y=6e4,F=k({__name:"roadLight",props:{geoJson:{},color:{default:"#ffff00"},position:{default:[1837.0641427711184,30,-457.0929823910632]},radius:{default:2},rotationY:{default:-.3866683251512052},scale:{default:1.5083171193254858},speed:{default:1}},async setup(b){let t,a;const e=b,w=_(),r=_(),{map:o}=([t,a]=g(()=>C({map:"./plugins/digitalCity/image/line.png"})),t=await t,a(),t);o.needsUpdate=!0,o.wrapS=o.wrapT=R,o.repeat.set(1,1);const d=([t,a]=g(()=>L(e.geoJson)),t=await t,a(),t),n=[-31.258949,0,-121.465782];let m=[];for(var c=0;c<d.length;c++){const l=d[c],i=[];l.geometry.coordinates.forEach(s=>{i.push(new v((s[1]+n[0])*y,n[1],(s[0]+n[2])*y))}),m.push(new x(i))}B(()=>{e.color&&r.value&&(r.value.color=new J(e.color))});const{onLoop:T}=E();return T(({delta:l})=>{o.offset.x-=Math.random()/20*e.speed}),(l,i)=>(f(),p("TresGroup",{ref_key:"tgRef",ref:w,position:e.position,"rotation-y":e.rotationY,scale:e.scale},[(f(!0),p(M,null,S(u(m),s=>(f(),p("TresMesh",D,[h("TresTubeGeometry",{args:[s,64,e.radius,20,!1]},null,8,O),h("TresMeshBasicMaterial",{ref_for:!0,ref_key:"tmbmRef",ref:r,map:u(o),side:u(G),transparent:!0,color:e.color},null,8,Y)]))),256))],8,V))}});export{F as _};