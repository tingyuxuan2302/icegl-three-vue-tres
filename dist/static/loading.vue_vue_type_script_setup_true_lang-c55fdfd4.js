import{Y as r,ak as l,w as _,o as d,s as p,B as u,an as y,G as f,H as h,I as t,U as i,E as m,t as v,a as w,ao as x}from"./vendor-19b019cc.js";import{v as g}from"./trescientos-a922f233.js";const k={style:{"background-color":"black"},class:"absolute bg-grey-600 t-0 l-0 w-full h-full z-20 flex justify-center items-center text-black font-mono"},b={class:"w-200px text-white"},V=r({__name:"loading",async setup(B){let a,e;const{hasFinishLoading:c,progress:s}=([a,e]=l(()=>g()),a=await a,e(),a);return _(()=>s.value,async(o,n)=>{console.log(o,n)}),(o,n)=>(d(),p(y,{name:"fade-overlay","enter-active-class":"opacity-1 transition-opacity duration-100","leave-active-class":"opacity-0 transition-opacity duration-200"},{default:u(()=>[f(i("div",k,[i("div",b,[m(" 载入中... "+v(t(s))+" % ",1),w(t(x),{class:"text-yellow"})])],512),[[h,!t(c)]])]),_:1}))}});export{V as _};