import{d,e as m,o as u,f as p,a as e,w as n,g as s,u as c,h,i as f,r as v,c as w,j as x,b as g,E}from"./index-C12CmZqc.js";const b={class:"Aside"},B=s("i",{class:"el-icon-menu"},null,-1),C=s("span",null,"数据概览",-1),A=s("i",{class:"el-icon-document"},null,-1),M=s("span",null,"项目管理",-1),I=s("i",{class:"el-icon-setting"},null,-1),N=s("span",null,"预算管理",-1),S=d({__name:"Aside",setup(r){const l=m("1"),i=(t,a)=>{t==="1"&&c().push("/dashboard/town_gov"),t==="2"&&c().push("/dashboard/town_gov/table"),t==="3"&&c().push("/dashboard/town_gov/budget"),console.log(t,a)};return(t,a)=>{const o=h,_=f;return u(),p("div",b,[e(_,{"default-active":l.value,class:"el-menu-vertical-demo",onSelect:i},{default:n(()=>[e(o,{index:"1"},{title:n(()=>[B,C]),_:1}),e(o,{index:"2"},{title:n(()=>[A,M]),_:1}),e(o,{index:"3"},{title:n(()=>[I,N]),_:1})]),_:1},8,["default-active"])])}}}),j=d({__name:"index",setup(r){return(l,i)=>{const t=x,a=v("router-view"),o=g,_=E;return u(),w(_,null,{default:n(()=>[e(t,{width:"200px",class:"town_aside"},{default:n(()=>[e(S)]),_:1}),e(o,{class:"town_main"},{default:n(()=>[e(a)]),_:1})]),_:1})}}});export{j as default};
