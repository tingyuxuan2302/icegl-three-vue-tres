import{Z as i,bc as p,b4 as l,bM as m,bN as r,a4 as f,o as u,c as y,J as d,aG as _}from"./vendor.7dfba5b51704459601179.js";const b=["object"],M=i({__name:"cloudPoints",props:{model:{},color:{default:"#FFF"},opacity:{default:1},isRemoveSrc:{type:Boolean,default:!1}},setup(n){const o=n,t=new p;return o.model.traverse(e=>{if(e instanceof l){const s=e.geometry.clone();e.geometry.dispose(),e.material.dispose();const a=new m({color:o.color});a.opacity=o.opacity,a.transparent=!0;const c=new r(s,a);t.add(c),o.model.parent&&t.applyMatrix4(o.model.parent.matrix),o.isRemoveSrc&&e.removeFromParent()}}),f(()=>{o.color&&t.traverse(e=>{e instanceof r&&(e.material.color=new _(o.color))}),o.opacity&&t.traverse(e=>{e instanceof r&&(e.material.opacity=o.opacity)})}),(e,s)=>(u(),y("primitive",{object:d(t)},null,8,b))}});export{M as _};
