import{$ as N,q as V,o as e,c as t,a as c,D as o,H as v,t as y,K as s,dd as z,W as h,v as b,de as B,df as P,X as g,dg as E,E as n,G as p,dh as O,di as L,k as S,r as D,dj as j,dk as A,dl as I}from"./vendor.jNLcW6ym1710249609010.js";import{a as R}from"./utils.wdw4Uoqx1710249609010.js";const U=["href"],q={class:"flex flex-wrap flex-justify-start content-start mt-6 pl-6"},G={key:0,controls:"",class:"w-full max-h-70 h-14em"},H=["src"],K={key:2,class:"w-full h-48 text-3 text-left mb-2",style:{"background-color":"rgb(55 56 61)",overflow:"hidden","border-radius":"10px"}},M={class:"p-2",style:{color:"white"}},W=["onClick"],T=N({__name:"cardList",props:{onePlugin:{}},setup($){const u=$;let _="./";const k=V(),x=(a,d)=>{let l="/plugins/".concat(a.name,"/").concat(d);a.pNode&&(l="/plugins/".concat(a.pNode,"/").concat(a.name,"/").concat(d));let f=k.resolve({path:l});window.open(f.href,"_blank")};return(a,d)=>(e(),t(n,null,[c(s(z),{titlePlacement:"left"},{default:o(()=>[v(y(u.onePlugin.title+" - "+u.onePlugin.name),1)]),_:1}),c(s(E),{vertical:""},{default:o(()=>[h("a",{target:"_blank",href:u.onePlugin.website,style:{"text-decoration":"none",color:"black"}},[u.onePlugin.author?(e(),b(s(P),{key:0,class:"text-right ml-[10px] w-95/100 mt-[-24px] block position-relative",style:{color:"#0f1222"},size:"small"},{default:o(()=>[c(s(B),{class:"position-relative top-[2px]"}),v(" 作者： "+y(u.onePlugin.author),1)]),_:1})):g("",!0)],8,U),c(s(P),{class:"ml-13",tag:"i",size:"small"},{default:o(()=>[v(y(u.onePlugin.intro),1)]),_:1})]),_:1}),h("div",q,[(e(!0),t(n,null,p(a.onePlugin.preview,(l,f)=>(e(),t("div",{class:"w-80 mr-10 mb-10 overflow-hidden",key:f},[c(s(L),{header:l.title,shadow:"hover"},{default:o(()=>[l.type==="video"?(e(),t("video",G,[h("source",{src:s(_)+l.src,type:"video/mp4",autoplay:"true",loop:"true"},null,8,H)])):l.type==="img"?(e(),b(s(O),{key:1,class:"w-full max-h-70 h-14em",src:s(_)+l.src,lazy:""},null,8,["src"])):l.type==="text"?(e(),t("div",K,[h("div",M,y(l.src),1)])):g("",!0),h("div",{class:"cursor-pointer",onClick:w=>x(u.onePlugin,l.name)},"点击查看详情",8,W)]),_:2},1032,["header"])]))),128))])],64))}}),X={class:"flex h-full"},J={class:"w-50",style:{"background-color":"#0f1222"}},Q={class:"flex-1 overflow-scroll",style:{height:"calc(100vh - 54px)"}},ee=N({__name:"preview",setup($){const u=S([]);let _=R();const k=a=>{var d;(d=u.value[a.value])==null||d.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},x=a=>{if(a){const d=new Date(a),l=new Date,f=d.getTime(),i=l.getTime()-f,r=1e3*60*60*24;if(Math.floor(i/r)<7)return!0}return!1};return(a,d)=>{const l=D("f-menu-item"),f=D("f-sub-menu"),w=D("f-menu");return e(),t("div",X,[h("div",J,[c(w,{mode:"vertical",defaultExpandAll:!0,inverted:!0,onSelect:k},{default:o(()=>[c(f,{value:"1"},{icon:o(()=>[c(s(j))]),label:o(()=>[v("基础功能展示")]),default:o(()=>[(e(!0),t(n,null,p(s(_),(i,r)=>(e(),t(n,null,[r==="basic"?(e(!0),t(n,{key:0},p(i.child,(m,C)=>(e(),b(l,{value:m.name},{label:o(()=>[v(y(m.title),1)]),_:2},1032,["value"]))),256)):g("",!0)],64))),256))]),_:1}),c(f,{value:"2"},{icon:o(()=>[c(s(A))]),label:o(()=>[v("插件中心")]),default:o(()=>[(e(!0),t(n,null,p(s(_),(i,r)=>(e(),t(n,null,[r!=="basic"?(e(),b(l,{key:0,value:r},{label:o(()=>[x(i.updateTime)?(e(),b(s(I),{key:0,style:{position:"absolute",left:"13px",top:"20px"},size:12,rotate:135,color:"#ffffff"})):g("",!0),v(y(i.title),1)]),_:2},1032,["value"])):g("",!0)],64))),256))]),_:1})]),_:1})]),h("div",Q,[(e(!0),t(n,null,p(s(_),(i,r)=>(e(),t(n,{key:r},[r==="basic"?(e(!0),t(n,{key:0},p(i.child,(m,C)=>(e(),t("div",{style:{"background-color":"#f1f1f2"},key:C,ref_for:!0,ref:F=>u.value[m.name]=F},[c(T,{onePlugin:m},null,8,["onePlugin"])]))),128)):g("",!0)],64))),128)),(e(!0),t(n,null,p(s(_),(i,r)=>(e(),t(n,{key:r},[r!=="basic"?(e(),t("div",{key:0,style:{"background-color":"#f1f1f2"},ref_for:!0,ref:m=>u.value[r]=m},[c(T,{onePlugin:i},null,8,["onePlugin"])],512)):g("",!0)],64))),128))])])}}});export{ee as default};
