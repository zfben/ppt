import{d,i as _,a as p,u as h,b as u,c as m,e as f,f as n,g as t,t as o,h as a,F as g,r as v,n as x,j as b,o as l,k as y,l as N,m as k,p as P,q as w,_ as S}from"./index-0b128d02.js";import{N as V}from"./NoteDisplay-6fd8e6e3.js";const j={class:"m-4"},C={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},z={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(q){_(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const i=f(()=>b.slice(0,-1).map(s=>{var r;return(r=s.meta)==null?void 0:r.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,r)=>(l(),n("div",{id:"page-root",style:x(a(w))},[t("div",j,[t("div",C,[t("h1",L,o(a(m).title),1),t("div",T,o(new Date().toLocaleString()),1)]),(l(!0),n(g,null,v(a(i),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",z,[t("div",B,[t("div",D,o(e==null?void 0:e.no)+"/"+o(a(y)),1),N(" "+o(e==null?void 0:e.title)+" ",1),H])]),k(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(l(),n("hr",F)):P("v-if",!0)]))),128))])],4))}}),R=S(M,[["__file","/Users/ben/Codes/zfben/ppt/2023-04-06/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
