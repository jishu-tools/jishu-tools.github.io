import{u as e,a as s,o as t,c as n,r as o,b as a,d as r,e as c,f as d,_ as m,g as i,h as l,i as u,j as p,k as h,l as _,m as f,n as v,p as E,q as g,s as j}from"./vendor.6a65fb56.js";const L={setup(a){const{state:r,commit:c}=e();return s({url:"/md/tree.json"}).then((e=>{const{data:s}=e;console.log(s),c("setMd",{md:s})})),(e,s)=>{const a=o("router-view");return t(),n(a)}}};var P=a({state:()=>({nav:"0",md:[]}),mutations:{changeNav(e,s){e.nav=s.nav},setMd(e,s){e.md=s.md}}});let D;const I={},b=function(e,s){if(!s||0===s.length)return e();if(void 0===D){const e=document.createElement("link").relList;D=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(s.map((e=>{if((e=`/${e}`)in I)return;I[e]=!0;const s=e.endsWith(".css"),t=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const n=document.createElement("link");return n.rel=s?"stylesheet":D,s||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),s?new Promise(((e,s)=>{n.addEventListener("load",e),n.addEventListener("error",s)})):void 0}))).then((()=>e()))};var k=r({history:c(),routes:[{name:"Index",path:"/",component:()=>b((()=>import("./Index.2c32004d.js")),["assets/Index.2c32004d.js","assets/Index.1fe222d1.css","assets/Main.486ce100.js","assets/Main.61f62db0.css","assets/vendor.6a65fb56.js","assets/Markdown.cc979d7d.js","assets/Markdown.7c4bdc2e.css"])},{name:"Docs",path:"/docs",component:()=>b((()=>import("./Docs.253fcbc7.js")),["assets/Docs.253fcbc7.js","assets/Main.486ce100.js","assets/Main.61f62db0.css","assets/vendor.6a65fb56.js"]),children:[]},{name:"Blog",path:"/blog",component:()=>b((()=>import("./Blog.66603307.js")),["assets/Blog.66603307.js","assets/Main.486ce100.js","assets/Main.61f62db0.css","assets/vendor.6a65fb56.js","assets/Markdown.cc979d7d.js","assets/Markdown.7c4bdc2e.css"])}]});const y=[m,i,l,u,p,h,_,f,v,E,g,j],O=d(L);y.forEach((e=>{O.component(e.name,e)})),[].forEach((e=>{O.use(Plugin)})),O.use(P).use(k).mount("#app");