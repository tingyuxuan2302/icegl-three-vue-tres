var Re=Object.defineProperty,Ee=Object.defineProperties;var Se=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var U=(t,n,e)=>n in t?Re(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,O=(t,n)=>{for(var e in n||(n={}))q.call(n,e)&&U(t,e,n[e]);if(B)for(var e of B(n))Z.call(n,e)&&U(t,e,n[e]);return t},N=(t,n)=>Ee(t,Se(n));var J=(t,n)=>{var e={};for(var a in t)q.call(t,a)&&n.indexOf(a)<0&&(e[a]=t[a]);if(t!=null&&B)for(var a of B(t))n.indexOf(a)<0&&Z.call(t,a)&&(e[a]=t[a]);return e};import{_ as M,F as we,r as T,o as d,c as P,a as r,u as Y,t as E,d as Le,b as $,e as ke,p as S,A as K,f as H,i as Ce,g as Me,h as ee,j as L,k as Oe,l as Fe,m as G,n as z,q as k,w as te,s as R,v as Ie,x as Ve,y as De,z as He,R as Ke,M as Be,P as Ne,B as _,C as V,D as je,E as D,G as ze,H as We,I as w,J as Ge,K as Ue,L as qe,N as Ze,O as Je,Q as Qe,S as Xe,T as Ye,U as u,V as A,W as I,X as C,Y as F,Z as j,$ as ne,a0 as ae,a1 as oe,a2 as se,a3 as le,a4 as ie,a5 as re,a6 as ce,a7 as ue,a8 as de,a9 as fe,aa as $e,ab as et,ac as tt,ad as nt}from"./vendor-00aadd22.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();const at="modulepreload",ot=function(t){return"/icegl-three-vue-tres/"+t},Q={},f=function(n,e,a){if(!e||e.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(e.map(s=>{if(s=ot(s),s in Q)return;Q[s]=!0;const l=s.endsWith(".css"),v=l?'[rel="stylesheet"]':"";if(!!a)for(let m=o.length-1;m>=0;m--){const x=o[m];if(x.href===s&&(!l||x.rel==="stylesheet"))return}else if(document.querySelector('link[href="'.concat(s,'"]').concat(v)))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":at,l||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),l)return new Promise((m,x)=>{c.addEventListener("load",m),c.addEventListener("error",()=>x(new Error("Unable to preload CSS for ".concat(s))))})})).then(()=>n()).catch(s=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s})};const st={components:{FSpin:we},setup(){return{}}},lt={class:"page-loading"};function it(t,n,e,a,o,s){const l=T("f-spin");return d(),P("div",lt,[r(l,{size:"large",stroke:"#5384ff"})])}const rt=M(st,[["render",it]]);const ct={setup(){return{userModel:Y("user")}}},ut={class:"right"};function dt(t,n,e,a,o,s){return d(),P("div",ut,E(a.userModel.user.userName),1)}const ft=M(ct,[["render",dt]]);const _t=Le({beforeRender:{loading:r(rt,null,null),action(){const{signin:t}=Y("user");t()}},layout:{renderCustom:()=>r(ft,null,null)}});function pt({app:t}){t.use($)}const mt=t=>{const n=/plugins\/([^/]+)\/pages\//,e=t.match(n);return e&&e[1]?e[1]:null};function ht({routes:t}){const n=Object.assign({"./plugins/basic/pages/base/penetrateEvent.vue":()=>f(()=>import("./penetrateEvent-f8067c3d.js"),["static/penetrateEvent-f8067c3d.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/base/shaderParticles.vue":()=>f(()=>import("./shaderParticles-993dacd4.js"),["static/shaderParticles-993dacd4.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/base/theBasic.vue":()=>f(()=>import("./theBasic-ea47361d.js"),["static/theBasic-ea47361d.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/base/theConditional.vue":()=>f(()=>import("./theConditional-48cd8b57.js"),["static/theConditional-48cd8b57.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/base/theEvents.vue":()=>f(()=>import("./theEvents-3934d291.js"),["static/theEvents-3934d291.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/base/theGroups.vue":()=>f(()=>import("./theGroups-ad4a3338.js"),["static/theGroups-ad4a3338.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/controls/cameraControls.vue":()=>f(()=>import("./cameraControls-3313bd02.js"),["static/cameraControls-3313bd02.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/controls/firstPersonControls.vue":()=>f(()=>import("./firstPersonControls-556a4592.js"),["static/firstPersonControls-556a4592.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/controls/mapControls.vue":()=>f(()=>import("./mapControls-3330d5a9.js"),["static/mapControls-3330d5a9.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/controls/orbitControls.vue":()=>f(()=>import("./orbitControls-c7f9c158.js"),["static/orbitControls-c7f9c158.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/controls/scrollControls.vue":()=>f(()=>import("./scrollControls-6a03e5ef.js"),["static/scrollControls-6a03e5ef.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css","static/scrollControls-e984f4d2.css"]),"./plugins/basic/pages/controls/transformControls.vue":()=>f(()=>import("./transformControls-2a387b73.js"),["static/transformControls-2a387b73.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/htmls/htmls.vue":()=>f(()=>import("./htmls-24862973.js"),["static/htmls-24862973.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css","static/htmls-c0c7ec5a.css"]),"./plugins/basic/pages/htmls/website.vue":()=>f(()=>import("./website-5c5b0db9.js"),["static/website-5c5b0db9.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/materials/glassMaterial.vue":()=>f(()=>import("./glassMaterial-4b1afa37.js"),["static/glassMaterial-4b1afa37.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/materials/wobbleMaterial.vue":()=>f(()=>import("./wobbleMaterial-0e044086.js"),["static/wobbleMaterial-0e044086.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css"]),"./plugins/digitalCity/pages/buildings.vue":()=>f(()=>import("./buildings-1c01516f.js"),["static/buildings-1c01516f.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css","static/pagesShow.vue_vue_type_style_index_0_lang-f0df3339.js","static/_commonjsHelpers-725317a4.js"]),"./plugins/digitalCity/pages/heatmap.vue":()=>f(()=>import("./heatmap-0e3b2817.js"),["static/heatmap-0e3b2817.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css","static/heatmapJS.vue_vue_type_script_setup_true_lang-dbb3d5b2.js","static/heatmap-d02141de.js","static/_commonjsHelpers-725317a4.js","static/loading.vue_vue_type_script_setup_true_lang-0abac5ce.js","static/pagesShow.vue_vue_type_style_index_0_lang-f0df3339.js"]),"./plugins/digitalCity/pages/heatmap2.vue":()=>f(()=>import("./heatmap2-3f671b5b.js"),["static/heatmap2-3f671b5b.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css","static/pagesShow.vue_vue_type_style_index_0_lang-f0df3339.js","static/_commonjsHelpers-725317a4.js","static/heatmap-d02141de.js"]),"./plugins/digitalCity/pages/radars.vue":()=>f(()=>import("./radars-8bbca459.js"),["static/radars-8bbca459.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css","static/loading.vue_vue_type_script_setup_true_lang-0abac5ce.js","static/pagesShow.vue_vue_type_style_index_0_lang-f0df3339.js","static/_commonjsHelpers-725317a4.js"]),"./plugins/digitalCity/pages/weather.vue":()=>f(()=>import("./weather-c8343042.js"),["static/weather-c8343042.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css","static/pagesShow.vue_vue_type_style_index_0_lang-f0df3339.js","static/_commonjsHelpers-725317a4.js","static/loading.vue_vue_type_script_setup_true_lang-0abac5ce.js"]),"./plugins/earthSample/pages/earthA.vue":()=>f(()=>import("./earthA-69015ea0.js"),["static/earthA-69015ea0.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css","static/loading.vue_vue_type_script_setup_true_lang-0abac5ce.js"]),"./plugins/earthSample/pages/lowpolyPlanet.vue":()=>f(()=>import("./lowpolyPlanet-ff6a3cb4.js"),["static/lowpolyPlanet-ff6a3cb4.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css","static/loading.vue_vue_type_script_setup_true_lang-0abac5ce.js"]),"./plugins/earthSample/pages/menuA.vue":()=>f(()=>import("./menuA-745578d4.js"),["static/menuA-745578d4.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css","static/menuA-ddaff78a.css"]),"./plugins/heatMap/pages/heatmapExample.vue":()=>f(()=>import("./heatmapExample-e42ec2e9.js"),["static/heatmapExample-e42ec2e9.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css","static/heatmapJS.vue_vue_type_script_setup_true_lang-dbb3d5b2.js","static/heatmap-d02141de.js","static/_commonjsHelpers-725317a4.js"]),"./plugins/heatMap/pages/simpleExample.vue":()=>f(()=>import("./simpleExample-4282358a.js"),["static/simpleExample-4282358a.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css"]),"./plugins/industry4/pages/deviceLight.vue":()=>f(()=>import("./deviceLight-3754f3db.js"),["static/deviceLight-3754f3db.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css","static/BufferGeometryUtils-43011580.js"]),"./plugins/medical/pages/digitalBrain.vue":()=>f(()=>import("./digitalBrain-6d9fe1df.js"),["static/digitalBrain-6d9fe1df.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css","static/BufferGeometryUtils-43011580.js"]),"./plugins/vantaJS/pages/loadingA.vue":()=>f(()=>import("./loadingA-fbfb4654.js"),["static/loadingA-fbfb4654.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css","static/_commonjsHelpers-725317a4.js","static/loadingA-ef980813.css"])}),e={path:"/plugins",component:()=>f(()=>import("./suspenseLayout-da9cb9d9.js"),["static/suspenseLayout-da9cb9d9.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css"]),children:[]};for(const[a,o]of Object.entries(n)){const s=mt(a),l=a.match(/\.\/(.+)\.vue$/)[1].split("/");if(l.length===4)e.children.unshift({path:"/plugins/".concat(s,"/").concat(l[3]),component:o});else if(l.length===5)e.children.unshift({path:"/plugins/".concat(s,"/").concat(l[3],"/").concat(l[4]),component:o});else return}t.unshift(e)}function gt(t){{console.log("预览模式下 直接替换index的路由为 plugins/preview.vue");let n=t.routes.find(e=>e.path==="/");n&&(n=n.children.find(e=>e.path==="/"),n&&(n.component=()=>f(()=>import("./preview-179ab98b.js"),["static/preview-179ab98b.js","static/vendor-00aadd22.js","static/vendor-28ba1523.css","static/preview-6af5d8e1.css"]),n.meta={name:"preview",title:"开源框架展示"}))}return N(O({},t),{routes:[...t.routes]})}const yt=Object.freeze(Object.defineProperty({__proto__:null,default:_t,modifyRoute:gt,onAppCreated:pt,patchRoutes:ht},Symbol.toStringTag,{value:"Module"}));function vt({app:t,routes:n}){const e=ke(n);t.use(e)}const bt=Object.freeze(Object.defineProperty({__proto__:null,onAppCreated:vt},Symbol.toStringTag,{value:"Module"}));function Pt({router:t}){t.beforeEach(async(n,e,a)=>{const o=S.applyPlugins({key:"access",type:K.modify,initialValue:{}});if(n.matched.length===0)return o.noFoundHandler&&typeof o.noFoundHandler=="function"?o.noFoundHandler({router:t,to:n,from:e,next:a}):a(!1);if(Array.isArray(o.ignoreAccess)&&await H.match(n.matched[n.matched.length-1].path,o.ignoreAccess)||await H.hasAccess(n.matched[n.matched.length-1].path))return a();if(o.unAccessHandler&&typeof o.unAccessHandler=="function")return o.unAccessHandler({router:t,to:n,from:e,next:a});a(!1)})}function Tt({app:t}){Ce(t)}const xt=Object.freeze(Object.defineProperty({__proto__:null,onAppCreated:Tt,onRouterCreated:Pt},Symbol.toStringTag,{value:"Module"})),_e=()=>{const t={title:"Icegl",footer:null,navigation:"top",multiTabs:!1,isFixedHeader:!0,logo:"logo.png",menus:[{name:"preview",path:"/",title:"开源框架展示"}]};return S.applyPlugins({key:"layout",type:K.modify,initialValue:t,args:{initialState:Me}})};if(!H)throw new Error("[plugin-layout]: plugin-layout depends on plugin-access，please install plugin-access first！");const At=t=>{const n=_e(),e=H.getAccess();return e.includes("/403")||H.setAccess(e.concat("/403")),e.includes("/404")||H.setAccess(e.concat("/404")),O({unAccessHandler({router:a,to:o,from:s,next:l}){if(n.unAccessHandler&&typeof n.unAccessHandler=="function")return n.unAccessHandler({router:a,to:o,from:s,next:l});l("/403")},noFoundHandler({router:a,to:o,from:s,next:l}){if(n.noFoundHandler&&typeof n.noFoundHandler=="function")return n.noFoundHandler({router:a,to:o,from:s,next:l});l("/404")}},t)},Rt=Object.freeze(Object.defineProperty({__proto__:null,access:At},Symbol.toStringTag,{value:"Module"}));function W(t){if(t["default"]){const e=t,{default:a}=e,o=J(e,["default"]);return O(O({},a),o)}return t}S.register({apply:W(yt),path:"/Volumes/L-SSD/ice.GL/OpenSourceLib/icegl/icegl-three-vue-tres/src/app.jsx"});S.register({apply:W(bt),path:"@@/core/routes/runtime.js"});S.register({apply:W(xt),path:"@@/plugin-access/runtime.js"});S.register({apply:W(Rt),path:"@@/plugin-layout/runtime.js"});const pe=(t,n)=>{let e={};if(Array.isArray(t))for(let a=0;a<t.length;a++){const o=t[a];if(o.meta&&o.meta.name===n){e=o.meta,e.path=o.path;break}if(o.children&&o.children.length>0&&(e=pe(o.children,n),e.path))break}return e},me=(t,n,e=0)=>{e+=1,e>3&&console.warn("[plugin-layout]: 菜单层级最好不要超出三层！");const a=[];return Array.isArray(t)&&Array.isArray(n)&&t.forEach(o=>{const s={};o.name&&Object.assign(s,pe(n,o.name)),Object.keys(s).forEach(l=>{(o[l]===void 0||o[l]===null||o[l]==="")&&(o[l]=s[l])}),o.children&&o.children.length>0&&(o.children=me(o.children,n,e)),a.push(o)}),a},Et="/icegl-three-vue-tres/static/logo-fad90dd5.png";if(!ee)throw new Error("[plugin-layout]: pLugin-layout depends on plugin-access，please install plugin-access first！");const he=t=>{const n=t.children&&t.children.length;return t.path&&!n?ee(t.path):n?t.children.some(e=>he(e)):!0},ge=t=>t.map(n=>he(n)?(n.children&&(n.children=ge(n.children)),n):!1).filter(Boolean),ye=t=>{if(!/^\$\S+$/.test(t))return t;const n=S.getShared("locale");if(n){const{t:e}=n.locale;return e(t.slice(1))}return t},ve=t=>t.map(n=>{const e=N(O({},n),{label:ye(n.label)});return n.children&&(e.children=ve(n.children)),e}),be=(t=[])=>t.reduce((n,e)=>(n.push(e),e.children&&(n=n.concat(be(e.children))),n),[]),St={},wt=function(t){return typeof t=="string"},Pe=t=>{if(t.nodeType===1){if(t.nodeName.toLowerCase()==="script")return!1;for(let n=0;n<t.attributes.length;n++){const e=t.attributes[n].value;if(wt(e)&&e.toLowerCase().indexOf("on")===0)return!1}for(let n=0;n<t.childNodes.length;n++)if(!Pe(t.childNodes[n]))return!1}return!0},Lt=t=>{const n=document.createElement("div");n.innerHTML=t;for(let a=n.childNodes.length-1;a>=0;a--)n.childNodes[a].nodeName.toLowerCase()!=="svg"&&n.removeChild(n.childNodes[a]);const e=n.firstElementChild;return e&&e.nodeName.toLowerCase()==="svg"&&Pe(e)?n.innerHTML:""},kt=/^((https?|ftp|file):\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,Ct=t=>kt.test(t)||t.includes(".svg"),Mt={props:{icon:[String,Object]},setup(t){const n=L(null),e=L(null);return Oe(()=>{typeof t.icon=="string"&&(Ct(t.icon)?fetch(t.icon).then(a=>{if(a.ok)return a.text().then(o=>{e.value=Lt(o)})}):n.value=St[t.icon])}),()=>Fe(t.icon)?t.icon:n.value?r(n.value,null,null):e.value?r("span",{class:"fes-layout-icon",innerHTML:e.value},null):null}};const Te=(t,n=1)=>t.map((e,a)=>{const o=N(O({},e),{label:e.title,value:e.path||"".concat(n,"_").concat(a)});return e.icon&&(o.icon=()=>Ie(Mt,{icon:e.icon})),e.children&&(o.children=Te(e.children,n+1)),o}),Ot={components:{FMenu:$},props:{menus:{type:Array,default(){return[]}},mode:{type:String,default:"vertical"},inverted:{type:Boolean,default:!1},expandedKeys:{type:Array,default(){return[]}},defaultExpandAll:{type:Boolean,default:!1},accordion:{type:Boolean,default:!1}},setup(t){const n=G(),e=z(),a=k(()=>ve(ge(Te(t.menus)))),o=k(()=>be(a.value)),s=k(()=>{const g=o.value.filter(c=>{const m=c.match;return!m||!Array.isArray(m)?!1:m.some(x=>new RegExp(x).test(n.path))});return g.length===0?n.path:g[0].path}),l=L(t.expandedKeys);return te([o,s],()=>{var x;let g=o.value.findIndex(h=>h.value===s.value);if(g===-1)return;const c=o.value[g],m=(x=c.children)!=null&&x.length?[c]:[];for(;g>0;){g=g-1;const h=o.value[g];h.children&&h.children.indexOf(m[m.length-1])!==-1&&m.push(h)}l.value=l.value.concat(m.filter(h=>!l.value.includes(h.value)).map(h=>h.value))},{immediate:!0}),{activePath:s,expandedKeysRef:l,transformedMenus:a,onMenuClick:g=>{const c=g.value;/^https?:\/\//.test(c)?window.open(c,"_blank"):/^\//.test(c)?e.push(c):console.warn("[plugin-layout]: 菜单的path只能使以http(s)开头的网址或者路由地址")}}}};function Ft(t,n,e,a,o,s){const l=T("f-menu");return d(),R(l,{expandedKeys:a.expandedKeysRef,"onUpdate:expandedKeys":n[0]||(n[0]=v=>a.expandedKeysRef=v),modelValue:a.activePath,inverted:e.inverted,mode:e.mode,options:a.transformedMenus,defaultExpandAll:e.defaultExpandAll,accordion:e.accordion,onSelect:a.onMenuClick},null,8,["expandedKeys","modelValue","inverted","mode","options","defaultExpandAll","accordion","onSelect"])}const It=M(Ot,[["render",Ft]]);let Vt=0;const X=()=>++Vt,Dt={components:{FTabs:Ve,FTabPane:De,FDropdown:He,ReloadOutlined:Ke,MoreOutlined:Be,Page:Ne},props:{multiTabs:Boolean},setup(){const t=L(),n=G(),e=z(),a=p=>{var y;const i=k(()=>{const b=w(Ge(p.path));return b!=null?b:ye(p.meta.title)});return{path:p.path,route:p,name:(y=p.meta.name)!=null?y:p.name,title:i,key:X()}},o=L([a(e.currentRoute.value)]),s=[{value:"closeOtherPage",label:"关闭其他页签"},{value:"reloadPage",label:"刷新当前页签"}],l=p=>o.value.find(i=>w(i.path)===w(p));e.beforeEach(p=>{const i=l(p.path);return i?i.route=p:o.value=[...o.value,a(p)],!0});const v=async p=>{const i=l(p);i&&await e.push({path:p,query:i.route.query,params:i.route.params})},g=async p=>{const i=l(p),y=[...o.value],b=y.indexOf(i);n.path===i.path&&y.length>1&&(y.length-1===b?await v(y[b-1].path):await v(y[b+1].path)),y.splice(b,1),o.value=y,t.value.removeKeepAlive(i.name),Ue(i.path)},c=p=>{const i=l(p||w(n.path));i&&(i.key=X())},m=p=>{const i=l(p||w(n.path));o.value=[i],t.value.removeAllAndSaveKeepAlive(i.name)};return{pageRef:t,route:n,pageList:o,getPageKey:p=>{const i=l(p.path);return i?i.key:""},reloadPage:c,switchPage:v,handlerMore:p=>{switch(p){case"closeOtherPage":m();break;case"reloadPage":c();break}},handleCloseTab:g,actions:s}}};function Ht(t,n,e,a,o,s){const l=T("ReloadOutlined"),v=T("FTabPane"),g=T("MoreOutlined"),c=T("FDropdown"),m=T("FTabs"),x=T("Page");return e.multiTabs?(d(),P(V,{key:0},[r(m,{modelValue:a.route.path,closable:"",tabsPadding:24,type:"card",class:"layout-content-tabs",onClose:a.handleCloseTab,"onUpdate:modelValue":a.switchPage},{suffix:_(()=>[r(c,{arrow:"",options:a.actions,onClick:a.handlerMore},{default:_(()=>[r(g)]),_:1},8,["options","onClick"])]),default:_(()=>[(d(!0),P(V,null,je(a.pageList,h=>(d(),R(v,{key:h.path,value:h.path,closable:a.pageList.length>1},{tab:_(()=>[D(E(h.title)+" ",1),ze(r(l,{class:"layout-tabs-close-icon",onClick:p=>a.reloadPage(h.path)},null,8,["onClick"]),[[We,a.route.path===h.path]])]),_:2},1032,["value","closable"]))),128))]),_:1},8,["modelValue","onClose","onUpdate:modelValue"]),r(x,{ref:"pageRef",pageKey:a.getPageKey,isAllKeepAlive:""},null,8,["pageKey"])],64)):(d(),R(x,{key:1}))}const Kt=M(Dt,[["render",Ht]]);const Bt={components:{FLayout:qe,FAside:Ze,FMain:Je,FFooter:Qe,FHeader:Xe,Menu:It,MultiTabProvider:Kt},props:{menus:{type:Array,default(){return[]}},locale:{type:Boolean,default:!1},title:{type:String,default:""},logo:{type:String,default:Et},theme:{type:String,default:"dark"},navigation:{type:String,default:"side"},isFixedHeader:{type:Boolean,default:!1},isFixedSidebar:{type:Boolean,default:!0},multiTabs:{type:Boolean,default:!1},sideWidth:{type:Number,default:200},footer:String,menuProps:{type:Object}},setup(t){const n=L(),e=L(0),a=L(!1),o=G(),s=z(),l=k(()=>o.meta.layout&&o.meta.layout.navigation!==void 0?o.meta.layout.navigation:t.navigation),v=k(()=>t.isFixedHeader||t.navigation==="mixin"),g=k(()=>v.value?{top:"".concat(e.value,"px")}:null),c=k(()=>{const m=a.value?"48px":"".concat(t.sideWidth,"px");return t.isFixedSidebar?{left:m}:null});return te(s.currentRoute,()=>{Ye(()=>{n.value&&(e.value=n.value.$el.offsetHeight)})},{immediate:!0}),{headerRef:n,headerHeightRef:e,route:o,collapsedRef:a,currentFixedHeaderRef:v,headerStyleRef:g,sideStyleRef:c,currentNavigation:l}}},Nt={class:"layout-logo"},jt=["src"],zt={key:1,class:"logo-name"},Wt={class:"layout-header-custom"},Gt={class:"flex-between"},Ut={class:"layout-logo"},qt=["src"],Zt={key:1,class:"logo-name"},Jt={class:"layout-aside-custom"},Qt={key:0,class:"layout-aside-locale"},Xt={class:"layout-logo"},Yt=["src"],$t={key:1,class:"logo-name"},en={class:"layout-header-custom"},tn={class:"layout-logo"},nn=["src"],an={key:1,class:"logo-name"},on={class:"layout-header-custom"};function sn(t,n,e,a,o,s){const l=T("Menu"),v=T("f-aside"),g=T("f-header"),c=T("MultiTabProvider"),m=T("f-main"),x=T("f-footer"),h=T("f-layout"),p=T("router-view");return d(),R(h,{class:"main-layout"},{default:_(()=>[a.currentNavigation==="side"?(d(),P(V,{key:0},[r(v,{collapsed:a.collapsedRef,"onUpdate:collapsed":n[0]||(n[0]=i=>a.collapsedRef=i),fixed:e.isFixedSidebar,width:"".concat(e.sideWidth,"px"),class:"layout-aside",collapsible:"",inverted:e.theme==="dark"},{default:_(()=>{var i,y,b;return[u("div",Nt,[e.logo?(d(),P("img",{key:0,src:e.logo,class:"logo-img"},null,8,jt)):A("",!0),e.title?(d(),P("div",zt,E(e.title),1)):A("",!0)]),r(l,{class:"layout-menu",menus:e.menus,collapsed:a.collapsedRef,mode:"vertical",inverted:e.theme==="dark",expandedKeys:(i=e.menuProps)==null?void 0:i.expandedKeys,defaultExpandAll:(y=e.menuProps)==null?void 0:y.defaultExpandAll,accordion:(b=e.menuProps)==null?void 0:b.accordion},null,8,["menus","collapsed","inverted","expandedKeys","defaultExpandAll","accordion"])]}),_:1},8,["collapsed","fixed","width","inverted"]),r(h,{fixed:e.isFixedSidebar,style:I(a.sideStyleRef)},{default:_(()=>[r(g,{ref:"headerRef",class:"layout-header",fixed:a.currentFixedHeaderRef},{default:_(()=>[u("div",Wt,[C(t.$slots,"renderCustom",{menus:e.menus},void 0,!0)]),e.locale?C(t.$slots,"locale",{key:0},void 0,!0):A("",!0)]),_:3},8,["fixed"]),r(h,{embedded:!e.multiTabs,fixed:a.currentFixedHeaderRef,style:I(a.headerStyleRef)},{default:_(()=>[r(m,{class:"layout-main"},{default:_(()=>[r(c,{multiTabs:e.multiTabs},null,8,["multiTabs"])]),_:1}),e.footer?(d(),R(x,{key:0,class:"layout-footer"},{default:_(()=>[D(E(e.footer),1)]),_:1})):A("",!0)]),_:1},8,["embedded","fixed","style"])]),_:3},8,["fixed","style"])],64)):a.currentNavigation==="left-right"?(d(),P(V,{key:1},[r(v,{collapsed:a.collapsedRef,"onUpdate:collapsed":n[1]||(n[1]=i=>a.collapsedRef=i),fixed:e.isFixedSidebar,width:"".concat(e.sideWidth,"px"),class:"layout-aside",collapsible:"",inverted:e.theme==="dark"},{default:_(()=>{var i,y,b;return[u("div",Gt,[u("div",null,[u("div",Ut,[e.logo?(d(),P("img",{key:0,src:e.logo,class:"logo-img"},null,8,qt)):A("",!0),e.title?(d(),P("div",Zt,E(e.title),1)):A("",!0)]),r(l,{class:"layout-menu",menus:e.menus,collapsed:a.collapsedRef,mode:"vertical",inverted:e.theme==="dark",expandedKeys:(i=e.menuProps)==null?void 0:i.expandedKeys,defaultExpandAll:(y=e.menuProps)==null?void 0:y.defaultExpandAll,accordion:(b=e.menuProps)==null?void 0:b.accordion},null,8,["menus","collapsed","inverted","expandedKeys","defaultExpandAll","accordion"])]),u("div",null,[u("div",Jt,[C(t.$slots,"renderCustom",{menus:e.menus},void 0,!0)]),e.locale?(d(),P("div",Qt,[C(t.$slots,"locale",{},void 0,!0)])):A("",!0)])])]}),_:3},8,["collapsed","fixed","width","inverted"]),r(h,{fixed:e.isFixedSidebar,style:I(a.sideStyleRef)},{default:_(()=>[r(h,{embedded:!e.multiTabs},{default:_(()=>[r(m,{class:"layout-main"},{default:_(()=>[r(c,{multiTabs:e.multiTabs},null,8,["multiTabs"])]),_:1}),e.footer?(d(),R(x,{key:0,class:"layout-footer"},{default:_(()=>[D(E(e.footer),1)]),_:1})):A("",!0)]),_:1},8,["embedded"])]),_:1},8,["fixed","style"])],64)):a.currentNavigation==="top"?(d(),P(V,{key:2},[r(g,{ref:"headerRef",class:"layout-header",inverted:e.theme==="dark",fixed:a.currentFixedHeaderRef},{default:_(()=>{var i,y,b;return[u("div",Xt,[e.logo?(d(),P("img",{key:0,src:e.logo,class:"logo-img"},null,8,Yt)):A("",!0),e.title?(d(),P("div",$t,E(e.title),1)):A("",!0)]),r(l,{class:"layout-menu",menus:e.menus,mode:"horizontal",inverted:e.theme==="dark",expandedKeys:(i=e.menuProps)==null?void 0:i.expandedKeys,defaultExpandAll:(y=e.menuProps)==null?void 0:y.defaultExpandAll,accordion:(b=e.menuProps)==null?void 0:b.accordion},null,8,["menus","inverted","expandedKeys","defaultExpandAll","accordion"]),u("div",en,[C(t.$slots,"renderCustom",{menus:e.menus},void 0,!0)]),e.locale?C(t.$slots,"locale",{key:0},void 0,!0):A("",!0)]}),_:3},8,["inverted","fixed"]),r(h,{embedded:!e.multiTabs,fixed:a.currentFixedHeaderRef,style:I(a.headerStyleRef)},{default:_(()=>[r(m,{class:"layout-main"},{default:_(()=>[r(c,{multiTabs:e.multiTabs},null,8,["multiTabs"])]),_:1}),e.footer?(d(),R(x,{key:0,class:"layout-footer"},{default:_(()=>[D(E(e.footer),1)]),_:1})):A("",!0)]),_:1},8,["embedded","fixed","style"])],64)):a.currentNavigation==="mixin"?(d(),P(V,{key:3},[r(g,{ref:"headerRef",class:"layout-header",fixed:a.currentFixedHeaderRef,inverted:e.theme==="dark"},{default:_(()=>[u("div",tn,[e.logo?(d(),P("img",{key:0,src:e.logo,class:"logo-img"},null,8,nn)):A("",!0),e.title?(d(),P("div",an,E(e.title),1)):A("",!0)]),u("div",on,[C(t.$slots,"renderCustom",{menus:e.menus},void 0,!0)]),e.locale?C(t.$slots,"locale",{key:0},void 0,!0):A("",!0)]),_:3},8,["fixed","inverted"]),r(h,{fixed:a.currentFixedHeaderRef,style:I(a.headerStyleRef)},{default:_(()=>[r(v,{collapsed:a.collapsedRef,"onUpdate:collapsed":n[2]||(n[2]=i=>a.collapsedRef=i),fixed:e.isFixedSidebar,width:"".concat(e.sideWidth,"px"),collapsible:"",class:"layout-aside"},{default:_(()=>{var i,y,b;return[r(l,{class:"layout-menu",menus:e.menus,collapsed:a.collapsedRef,mode:"vertical",expandedKeys:(i=e.menuProps)==null?void 0:i.expandedKeys,defaultExpandAll:(y=e.menuProps)==null?void 0:y.defaultExpandAll,accordion:(b=e.menuProps)==null?void 0:b.accordion},null,8,["menus","collapsed","expandedKeys","defaultExpandAll","accordion"])]}),_:1},8,["collapsed","fixed","width"]),r(h,{embedded:!e.multiTabs,fixed:e.isFixedSidebar,style:I(a.sideStyleRef)},{default:_(()=>[r(m,{class:"layout-main"},{default:_(()=>[r(c,{multiTabs:e.multiTabs},null,8,["multiTabs"])]),_:1}),e.footer?(d(),R(x,{key:0,class:"layout-footer"},{default:_(()=>[D(E(e.footer),1)]),_:1})):A("",!0)]),_:1},8,["embedded","fixed","style"])]),_:1},8,["fixed","style"])],64)):(d(),R(m,{key:4,class:"layout-main"},{default:_(()=>[r(p)]),_:1}))]),_:3})}const ln=M(Bt,[["render",sn],["__scopeId","data-v-69422c84"]]),rn=F({name:"Layout",setup(){const t=_e(),n=typeof t.menus=="function"?t.menus():t.menus,e=Ae(),a=k(()=>{var s;return me((s=w(n))!=null?s:[],e)}),o=S.getShared("locale");return()=>{const s={renderCustom:t.renderCustom,locale:()=>o?r(o.SelectLang,null,null):null};return r(ln,{menus:a.value,locale:!!o,title:t.title,logo:t.logo,theme:t.theme,navigation:t.navigation,isFixedHeader:t.isFixedHeader,isFixedSidebar:t.isFixedSidebar,multiTabs:t.multiTabs,sideWidth:t.sideWidth,footer:t.footer,menuProps:t.menuProps},s)}}}),cn=u("TresPerspectiveCamera",{position:[15,15,15],fov:45,near:.1,far:1e3,"look-at":[0,0,0]},null,-1),un=u("TresAmbientLight",{intensity:.5},null,-1),dn={ref:"sphereRef",position:[0,4,0],"cast-shadow":""},fn=u("TresSphereGeometry",{args:[2,32,32]},null,-1),_n=u("TresMeshToonMaterial",{color:"#006060"},null,-1),pn=[fn,_n],mn={ref:"TDirectionalLight",position:[10,8,4],intensity:1,"cast-shadow":""},hn=u("TresDirectionalLight",{position:[10,2,4],intensity:1,"cast-shadow":""},null,-1),gn=u("TresGridHelper",null,null,-1),yn=F({__name:"test",setup(t){const n=j({clearColor:"#201919",shadows:!0,alpha:!1,shadowMapType:ne,outputColorSpace:ae,toneMapping:oe}),e=j({enableDamping:!0,dampingFactor:.05,enableZoom:!0,autoRotate:!1,autoRotateSpeed:2,maxPolarAngle:Math.PI,minPolarAngle:0,maxAzimuthAngle:Math.PI,minAzimuthAngle:-Math.PI,enablePan:!0,keyPanSpeed:7,maxDistance:100,minDistance:0,minZoom:0,maxZoom:100,zoomSpeed:1,enableRotate:!0,rotateSpeed:1}),{onLoop:a}=se();return a(({elapsed:o})=>{}),le(()=>{}),ie(()=>{}),(o,s)=>(d(),R(w(ce),re(n,{"window-size":""}),{default:_(()=>[cn,r(w(fe),ue(de(e)),null,16),un,u("TresMesh",dn,pn,512),u("TresDirectionalLight",mn,null,512),hn,gn]),_:1},16))}}),vn=u("TresPerspectiveCamera",{position:[15,15,15],fov:45,near:.1,far:1e3,"look-at":[0,0,0]},null,-1),bn=u("TresAmbientLight",{intensity:.5},null,-1),Pn=u("TresSphereGeometry",{args:[2,32,32]},null,-1),Tn=u("TresMeshToonMaterial",{color:"#006060"},null,-1),xn=[Pn,Tn],An=u("TresSphereGeometry",{args:[2,32,32]},null,-1),Rn=u("TresMeshToonMaterial",{color:"#006060"},null,-1),En=[An,Rn],Sn=["rotation"],wn=u("TresPlaneGeometry",{args:[20,20,20,20]},null,-1),Ln=u("TresMeshToonMaterial",null,null,-1),kn=[wn,Ln],Cn=u("TresDirectionalLight",{position:[10,2,4],intensity:1,"cast-shadow":""},null,-1),Mn=u("TresGridHelper",null,null,-1),On=F({__name:"index",setup(t){const n=j({clearColor:"#201919",shadows:!0,alpha:!1,shadowMapType:ne,outputColorSpace:ae,toneMapping:oe}),e=j({enableDamping:!0,dampingFactor:.05,enableZoom:!0,autoRotate:!1,autoRotateSpeed:2,maxPolarAngle:Math.PI,minPolarAngle:0,maxAzimuthAngle:Math.PI,minAzimuthAngle:-Math.PI,enablePan:!0,keyPanSpeed:7,maxDistance:100,minDistance:0,minZoom:0,maxZoom:100,zoomSpeed:1,enableRotate:!0,rotateSpeed:1}),a=L(),o=L(),s=$e(),{onLoop:l}=se();l(({elapsed:c})=>{a.value&&(a.value.position.y+=Math.sin(c)*.01,o.value.position.y+=Math.sin(c)*.01)});function v(c){c&&c.object.material.color.set("#DFFF45")}function g(c){c&&c.material.color.set("#006060")}return le(()=>{s.value&&(s.value.shadow.mapSize.set(1e3,1e3),s.value.shadow.camera.near=.5,s.value.shadow.camera.top=20,s.value.shadow.camera.right=20,s.value.shadow.camera.left=-20,s.value.shadow.camera.bottom=-20)}),ie(()=>{}),(c,m)=>(d(),R(w(ce),re(n,{"window-size":""}),{default:_(()=>[vn,r(w(fe),ue(de(e)),null,16),bn,u("TresMesh",{ref_key:"sphereRef",ref:a,position:[0,4,0],"cast-shadow":"",onPointerEnter:v,onPointerLeave:g},xn,544),u("TresMesh",{ref_key:"sphereRef2",ref:o,position:[4,4,0],"cast-shadow":"",onPointerEnter:v,onPointerLeave:g},En,544),u("TresMesh",{rotation:[-Math.PI/2,0,0],"receive-shadow":""},kn,8,Sn),u("TresDirectionalLight",{ref_key:"TDirectionalLight",ref:s,position:[10,8,4],intensity:1,"cast-shadow":""},null,512),Cn,Mn]),_:1},16))}}),Fn="/icegl-three-vue-tres/static/403-c37bd830.png";const In=F({components:{FButton:et},props:{iconSrc:{required:!0},title:{type:String,required:!0},subTitle:{type:String}},setup(){const t=z();return{click:()=>{t.back()}}}}),Vn={class:"wrapper"},Dn=["src"],Hn={class:"title"},Kn={key:0,class:"sub-title"},Bn={class:"btn-wrapper"};function Nn(t,n,e,a,o,s){const l=T("FButton");return d(),P("div",Vn,[u("img",{src:t.iconSrc,class:"icon"},null,8,Dn),u("div",Hn,E(t.title),1),t.subTitle?(d(),P("div",Kn,E(t.subTitle),1)):A("",!0),u("div",Bn,[r(l,{type:"primary",onClick:t.click},{default:_(()=>[D(" 返回上一页 ")]),_:1},8,["onClick"])])])}const xe=M(In,[["render",Nn],["__scopeId","data-v-25581ede"]]),jn=F({components:{Wrapper:xe},setup(){return{img403:Fn}}});function zn(t,n,e,a,o,s){const l=T("Wrapper");return d(),R(l,{iconSrc:t.img403,title:"没有访问权限，请联系管理人员",subTitle:""},null,8,["iconSrc"])}const Wn=M(jn,[["render",zn]]),Gn="/icegl-three-vue-tres/static/404-ec600539.png",Un=F({components:{Wrapper:xe},setup(){return{img404:Gn}}});function qn(t,n,e,a,o,s){const l=T("Wrapper");return d(),R(l,{iconSrc:t.img404,title:"哎呀！这个页面找不到了",subTitle:""},null,8,["iconSrc"])}const Zn=M(Un,[["render",qn]]);function Ae(){return[{path:"/",component:rn,children:[{path:"/test",component:yn,name:"test",meta:{},count:7},{path:"/",component:On,name:"index",meta:{},count:5},{path:"/403",name:"Exception403",component:Wn,meta:{title:"403"}},{path:"/404",name:"Exception404",component:Zn,meta:{title:"404"}}]}]}const Jn=F(()=>()=>r(tt,null,null));const Qn=(t={})=>{const{plugin:n,routes:e,rootElement:a}=t,o=n.applyPlugins({type:K.modify,key:"rootContainer",initialValue:Jn,args:{routes:e,plugin:n}}),s=nt(o);return n.applyPlugins({key:"onAppCreated",type:K.event,args:{app:s,routes:e}}),a&&s.mount(a),s},Xn=(t={})=>S.applyPlugins({key:"render",type:K.compose,initialValue:()=>{const n=S.applyPlugins({key:"modifyClientRenderOpts",type:K.modify,initialValue:{routes:t.routes||Ae(),plugin:S,rootElement:"#app",defaultTitle:"fes.js"}});return Qn(n)},args:t}),Yn=Xn();Yn();
