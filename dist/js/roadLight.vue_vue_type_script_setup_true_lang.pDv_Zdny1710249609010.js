import{$ as T,k as _,aA as g,bk as C,bq as R,b1 as v,bU as x,a5 as B,a4 as E,o as f,c as p,E as G,G as M,W as h,K as u,bg as S,aw as L}from"./vendor.jNLcW6ym1710249609010.js";import{l as A}from"./utils.Vor0thC51710249609010.js";const J=["position","rotation-y","scale"],U={renderOrder:3e3},V=["args"],W=["map","side","color"],w=6e4,q=T({__name:"roadLight",props:{geoJson:{},color:{default:"#ffff00"},position:{default:[1837.0641427711184,30,-457.0929823910632]},radius:{default:2},rotationY:{default:-.3866683251512052},scale:{default:1.5083171193254858},speed:{default:1}},async setup(y){let t,a;const e=y,b=_(),r=_(),{map:o}=([t,a]=g(()=>C({map:"./plugins/digitalCity/image/line.png"})),t=await t,a(),t);o.needsUpdate=!0,o.wrapS=o.wrapT=R,o.repeat.set(1,1);const d=([t,a]=g(()=>A(e.geoJson)),t=await t,a(),t),n=[-31.258949,0,-121.465782];let m=[];for(var c=0;c<d.length;c++){const i=d[c],l=[];i.geometry.coordinates.forEach(s=>{l.push(new v((s[1]+n[0])*w,n[1],(s[0]+n[2])*w))}),m.push(new x(l))}B(()=>{e.color&&r.value&&(r.value.color=new L(e.color))});const{onLoop:k}=E();return k(({delta:i})=>{o.offset.x-=Math.random()/20*e.speed}),(i,l)=>(f(),p("TresGroup",{ref_key:"tgRef",ref:b,position:e.position,"rotation-y":e.rotationY,scale:e.scale},[(f(!0),p(G,null,M(u(m),s=>(f(),p("TresMesh",U,[h("TresTubeGeometry",{args:[s,64,e.radius,20,!1]},null,8,V),h("TresMeshBasicMaterial",{ref_for:!0,ref_key:"tmbmRef",ref:r,map:u(o),side:u(S),transparent:!0,color:e.color},null,8,W)]))),256))],8,J))}});export{q as _};
