var B=Object.defineProperty;var m=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var _=(s,a,e)=>a in s?B(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,c=(s,a)=>{for(var e in a||(a={}))R.call(a,e)&&_(s,e,a[e]);if(m)for(var e of m(a))z.call(a,e)&&_(s,e,a[e]);return s};import{y as g,I as b,P as k}from"./trescientos-01522e33.js";import{_ as Y}from"./pagesShow.vue_vue_type_style_index_0_lang-a8487244.js";import{_ as S}from"./loading.vue_vue_type_script_setup_true_lang-2affd703.js";import{Y as h,a7 as p,ai as P,j as v,ac as x,w as X,o as f,s as C,I as Z,ak as y,c as $,a as d,B as w,C as I,a9 as j,aa as E,aj as F}from"./vendor-4c6c5ef6.js";import"./three.module-eabffd14.js";const M=h({__name:"precipitation",props:{speed:{default:12},randomness:{default:0},count:{default:6e3},size:{default:7},areaX:{default:1500},areaY:{default:1e3},areaZ:{default:1500},type:{default:"snow"},color:{default:"#fff"}},async setup(s){let a,e;const t=s,n={snow:"./plugins/digitalCity/image/snow.png",rain:"./plugins/digitalCity/image/rain.png",cilcle:"./plugins/digitalCity/image/cilcle.png"},i=p({});n[t.type]&&(i.value=([a,e]=P(()=>g({map:n[t.type]})),a=await a,e(),a));const o=v();return x(async()=>{}),X(()=>t.type,async(r,l)=>{var u;r!=l&&((u=i.value)!=null&&u.map&&i.value.map.dispose(),i.value=await g({map:n[r]?n[r]:n.cilcle}))}),(r,l)=>(f(),C(Z(b),{ref_key:"precipitationRef",ref:o,position:[0,t.areaY/2,0],speed:t.speed,color:t.color,alphaTest:.5,area:[t.areaX,t.areaY,t.areaZ],count:t.count,depthWrite:!0,randomness:t.randomness,size:t.size,opacity:1,map:i.value.map,alphaMap:i.value.map},null,8,["position","speed","color","area","count","randomness","size","map","alphaMap"]))}}),q=h({__name:"weather",setup(s){const a=v();x(()=>{a.value&&a.value.$refs.perspectiveCameraRef.position.set(750,500,800)});const e=p({speed:12,size:10,count:6e3,color:"#fff",type:"snow"}),t=p({areaX:1500,areaY:1e3,areaZ:1500}),n=p(c(c({},y(e)),y(t))),o=new k({title:"天气",expanded:!0}).addFolder({title:"下落物"});return o.addBinding(e,"speed",{label:"速度",min:0,max:30,step:1}),o.addBinding(e,"color",{label:"颜色"}),o.addBinding(e,"size",{label:"大小",min:0,max:26,step:1}),o.addBinding(e,"count",{label:"数量",min:1e3,max:1e4,step:100}),o.addBinding(e,"type",{view:"list",label:"类型",options:[{text:"雪",value:"snow"},{text:"雨",value:"rain"},{text:"点",value:"point"}]}),(r,l)=>(f(),$(I,null,[d(S),d(Y,{ref_key:"pagesShowRef",ref:a,autoRotate:!1},{ability:w(()=>[(f(),C(F,null,{default:w(()=>[d(M,j(E(n)),null,16)]),_:1}))]),_:1},512)],64))}});export{q as default};