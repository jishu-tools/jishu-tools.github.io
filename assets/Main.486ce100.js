import{t as e,v as a,u as t,z as s,A as l,o,c as d,w as n,B as u,y as r,C as c,r as f,D as i,E as p}from"./vendor.6a65fb56.js";const _=r();e("data-v-2b0cbe47");const v={class:"head"},m=n("a",{href:"/"},[n("img",{class:"logo",src:"/images/logo_s.jpg"})],-1),h=c("文档"),g=c("博客");a();const y={props:{nav:{type:String,default:"0"}},setup(e){const a=t(),r=s(),{state:c,commit:i}=a,p=l((()=>a.state.nav)),y=e=>{console.log(e),i("changeNav",{nav:e}),"1"===e&&r.push("/docs"),"2"===e&&r.push("/blog")};return(e,a)=>{const t=f("el-menu-item"),s=f("el-menu");return o(),d("div",v,[m,n(s,{"default-active":u(p),mode:"horizontal",onSelect:y},{default:_((()=>[n(t,{index:"1"},{default:_((()=>[h])),_:1}),n(t,{index:"2"},{default:_((()=>[g])),_:1})])),_:1},8,["default-active"])])}},__scopeId:"data-v-2b0cbe47"},b={};b.render=function(e,a){return null};const B=r(),k={props:{header:{type:Boolean,default:!0},footer:{type:Boolean,default:!1},aside:{type:Boolean,default:!0}},setup:e=>(a,t)=>{const s=f("el-header"),l=f("el-aside"),u=f("el-main"),r=f("el-footer"),c=f("el-container");return o(),d(c,null,{default:B((()=>[e.header?(o(),d(s,{key:0,class:"header"},{default:B((()=>[n(y)])),_:1})):i("",!0),n(c,null,{default:B((()=>[e.aside?(o(),d(l,{key:0},{default:B((()=>[p(a.$slots,"side",{},void 0,!0)])),_:3})):i("",!0),n(c,null,{default:B((()=>[n(u,{class:"main"},{default:B((()=>[p(a.$slots,"default",{},void 0,!0)])),_:3}),e.footer?(o(),d(r,{key:0},{default:B((()=>[n(b)])),_:1})):i("",!0)])),_:1})])),_:1})])),_:1})},__scopeId:"data-v-1e49c67d"};export{k as _};