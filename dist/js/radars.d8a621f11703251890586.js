import{Z as m,k as f,$ as i,af as u,o as t,c as _,a as n,C as p,D as x,v as d,W as l}from"./vendor.d0ca5cc01703251890586.js";import{_ as B}from"./loading.vue_vue_type_script_setup_true_lang.dc3439be1703251890586.js";import{_ as h}from"./pagesShow.vue_vue_type_script_setup_true_lang.812af52a1703251890586.js";import{_ as g,a as w}from"./radraB.vue_vue_type_script_setup_true_lang.b6a375021703251890586.js";import"./vanilla-307d3a93.esm.3f0a9c431703251890586.js";import"./_commonjsHelpers.725317a41703251890586.js";const N=m({__name:"radars",setup(b){const c=f(),a=i({show:!0,color:"#00c0ff",radius:300}),s=new u({title:"雷达效果",expanded:!0}),o=s.addFolder({title:"A型"});o.addBinding(a,"show",{label:"显示"}),o.addBinding(a,"color",{label:"颜色"}),o.addBinding(a,"radius",{label:"大小",min:1,max:400,step:10});const e=i({show:!0,color:"#ffff00",maxRadius:300}),r=s.addFolder({title:"B型"});return r.addBinding(e,"show",{label:"显示"}),r.addBinding(e,"color",{label:"颜色"}),r.addBinding(e,"maxRadius",{label:"大小",min:10,max:400,step:10}),(k,R)=>(t(),_(x,null,[n(B),n(h,null,{ability:p(()=>[a.show?(t(),d(g,{key:0,ref_key:"radraARef",ref:c,color:a.color,radius:a.radius,size:300,position:[10,60,0]},null,8,["color","radius"])):l("",!0),e.show?(t(),d(w,{key:1,position:[600,30,0],color:e.color,height:80,maxRadius:e.maxRadius},null,8,["color","maxRadius"])):l("",!0)]),_:1})],64))}});export{N as default};