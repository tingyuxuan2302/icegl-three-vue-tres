import{P as m}from"./trescientos-01522e33.js";import{_ as b,l as _,a as y,b as w}from"./pagesShow.vue_vue_type_style_index_0_lang-a8487244.js";import{Y as C,j as h,ai as f,ad as B,a7 as u,o as d,s,B as x,I as p,V as g}from"./vendor-4c6c5ef6.js";import"./three.module-eabffd14.js";const P=C({__name:"buildings",async setup(k){let n,r;const e=h(!1),c=([n,r]=f(()=>_()),n=await n,r(),n);e.value=!0,B(()=>{const l=new m({title:"建筑效果",expanded:!0}),o=l.addFolder({title:"线条"});o.addBinding(i,"show",{label:"显示"}),o.addBinding(i,"color",{label:"颜色"}),o.addBinding(i,"width",{label:"宽度",min:0,max:10,step:1}),o.addBinding(i,"opacity",{label:"透明度",min:0,max:1,step:.1});const t=l.addFolder({title:"建筑物"});t.addBinding(a,"show",{label:"显示"}),t.addBinding(a,"bulidingsColor",{label:"楼宇颜色"}),t.addBinding(a,"gradient",{label:"渐变"}),t.addBinding(a,"opacity",{label:"透明度",min:0,max:1,step:.1}),t.addBinding(a,"landColor",{label:"地面颜色"})});const i=u({width:1,color:"#000",opacity:1,show:!0}),a=u({bulidingsColor:"#d88de2",landColor:"#112233",opacity:.9,show:!0,gradient:!0});return(l,o)=>(d(),s(b,{showBuildings:!1},{ability:x(()=>[a.show&&e.value?(d(),s(y,{key:0,model:p(c),bulidingsColor:a.bulidingsColor,landColor:a.landColor,gradient:a.gradient,opacity:a.opacity},null,8,["model","bulidingsColor","landColor","gradient","opacity"])):g("",!0),i.show&&e.value?(d(),s(w,{key:1,builds:p(c).city,width:i.width,color:i.color,opacity:i.opacity},null,8,["builds","width","color","opacity"])):g("",!0)]),_:1}))}});export{P as default};