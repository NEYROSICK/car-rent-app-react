"use strict";(self.webpackChunkcar_rent_app_react=self.webpackChunkcar_rent_app_react||[]).push([[516],{516:(e,n,t)=>{t.r(n),t.d(n,{default:()=>B});var r,a=t(434),i=t(351),s=t(251),l=t(168),c=t(686);const o=c.Z.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 29px;\n  align-items: stretch;\n"])));var h=t(791),p=t(714),x=t(234),u=t(760),m=t(87),g=t(350),d=t(184);const f=()=>{const e=(0,a.I0)(),n=(0,a.v9)(i.Br),t=(0,a.v9)(i.Vc),r=(0,a.v9)(i.bp),[l]=(0,m.lr)(),[c,f]=(0,h.useState)(1);(0,h.useEffect)((()=>{l.get("brand")||e((0,x.GA)({page:c,limit:12}))}),[e,c,l]),(0,h.useEffect)((()=>(e((0,x.w_)()),()=>{e((0,p.Uw)([]))})),[e]);return(0,d.jsxs)(d.Fragment,{children:[!n.length&&(0,d.jsx)(u.Z,{variant:"initialization",size:90}),Boolean(n.length)&&(0,d.jsx)(o,{children:n.map((e=>(0,d.jsx)(s.Z,{item:e},e.id)))}),n.length<r&&!t&&(0,d.jsx)(g.Z,{variant:"pagination",onClick:()=>{f(c+1)},children:"Load more"}),Boolean(n.length)&&t&&(0,d.jsx)(u.Z,{variant:"pagination",size:90})]})};var j,v,Z=t(731);const w=c.Z.main(j||(j=(0,l.Z)(["\n  position: relative;\n  min-height: calc(100vh - 93.6px);\n"]))),b=c.Z.section(v||(v=(0,l.Z)(["\n  padding: 50px 0;\n"])));var C;const k=c.Z.p(C||(C=(0,l.Z)(["\n  min-height: calc(100vh - 440px);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  text-align: center;\n  color: var(--clr-favorites-message);\n\n  & > svg {\n    fill: currentColor;\n    width: 200px;\n    height: 200px;\n  }\n"])));var _=t(924);const y=e=>{let{params:n}=e;const t=(0,a.v9)(i.Br),r=(0,a.v9)(i.Vc),l=(0,a.I0)(),[c,m]=(0,h.useState)([]),[f,j]=(0,h.useState)([]),[v,Z]=(0,h.useState)(12),{brand:w,price:b,from:C,to:y}=n,z=c.length,B=f.length;(0,h.useEffect)((()=>(l((0,x.GA)({})),()=>{l((0,p.Uw)([]))})),[l]),(0,h.useEffect)((()=>{m(t.filter((e=>{let{make:n}=e;return!w||n.toLowerCase()===w.toLowerCase()})).filter((e=>{let{rentalPrice:n}=e;return!b||n.split("$").join("")<=Number(b)})).filter((e=>{let{mileage:n}=e;return!C||n>=Number(C)})).filter((e=>{let{mileage:n}=e;return!y||n<=Number(y)}))),Z(12)}),[t,w,b,C,y]),(0,h.useEffect)((()=>{j(c.slice(0,v))}),[c,v]);return(0,d.jsxs)(d.Fragment,{children:[Boolean(!B)&&!r&&(0,d.jsxs)(k,{children:[(0,d.jsx)(_.Z,{}),"Sorry, there are no matches for your request :("]}),Boolean(B)&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{children:f.map((e=>(0,d.jsx)(s.Z,{item:e},e.id)))}),z>12&&B<z&&(0,d.jsx)(g.Z,{variant:"pagination",onClick:()=>{Z(v+12)},children:"Load more"})]}),r&&(0,d.jsx)(u.Z,{variant:"initialization",size:90})]})};var z=t(383);const B=()=>{const[e]=(0,m.lr)(),n=Object.fromEntries(e),t=Object.values(n).some((e=>e));return(0,d.jsx)(w,{children:(0,d.jsx)(b,{children:(0,d.jsxs)(z.Z,{children:[(0,d.jsx)("h2",{className:"visually-hidden",children:"Car advertisement catalog"}),(0,d.jsx)(Z.Z,{}),t?(0,d.jsx)(y,{params:n}):(0,d.jsx)(f,{})]})})})}}}]);
//# sourceMappingURL=516.91803e93.chunk.js.map