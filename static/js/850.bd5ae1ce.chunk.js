"use strict";(self.webpackChunkcar_rent_app_react=self.webpackChunkcar_rent_app_react||[]).push([[850],{350:(n,e,r)=>{r.d(e,{Z:()=>l});r(791);var i,t=r(168);const s=r(686).Z.button(i||(i=(0,t.Z)(["\n  width: 100%;\n  height: 44px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  color: var(--clr-primary-inv);\n\n  border: none;\n  border-radius: 12px;\n  background-color: var(--clr-brand);\n\n  cursor: pointer;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: var(--clr-hover);\n  }\n\n  ","\n\n  ","\n"])),(n=>{let{variant:e}=n;return"search"===e&&"\n    max-width: 136px;\n    height: 48px;\n  "}),(n=>{let{variant:e}=n;return"rental"===e&&"\n    max-width: 168px;\n  "}));var o=r(184);const l=n=>{let{children:e,variant:r,href:i,onClick:t}=n;const l=i?"a":"button";return(0,o.jsx)(s,{variant:r,as:l,href:i,onClick:t,children:e})}},263:(n,e,r)=>{r.d(e,{Z:()=>q});var i,t,s,o,l,a,c,d,p=r(791),h=r(168),x=r(686);const g=x.Z.div(i||(i=(0,h.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: var(--clr-bcg-backdrop);\n"]))),m=x.Z.div(t||(t=(0,h.Z)(["\n  position: relative;\n  width: 541px;\n  height: 752px;\n\n  padding: 40px;\n\n  background-color: var(--clr-bcg);\n  border-radius: 24px;\n"]))),u=x.Z.button(s||(s=(0,h.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 24px;\n  height: 24px;\n\n  font-weight: bold;\n\n  background: none;\n  border: none;\n\n  cursor: pointer;\n"]))),v=x.Z.img(o||(o=(0,h.Z)(["\n  display: block;\n  object-fit: cover;\n  border-radius: 14px;\n  margin-bottom: 14px;\n"]))),j=x.Z.h3(l||(l=(0,h.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  color: var(--clr-primary);\n  margin-bottom: 8px;\n"]))),f=x.Z.ul(a||(a=(0,h.Z)(["\n  width: 400px;\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 12px;\n  row-gap: 4px;\n  margin-bottom: 28px;\n  color: var(--clr-secondary);\n  margin-bottom: 14px;\n"]))),b=x.Z.p(c||(c=(0,h.Z)(["\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  margin-bottom: 24px;\n"]))),Z=x.Z.h4(d||(d=(0,h.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  margin-bottom: 8px;\n\n  ","\n"])),(n=>{let{accessories:e}=n;return e&&"margin-bottom: 24px;"}));var w,y,k,C,z,_,S,E;const M=x.Z.li(w||(w=(0,h.Z)(["\n  position: relative;\n  width: 274px;\n"]))),O=x.Z.button(y||(y=(0,h.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: var(--svg-size-heart);\n  height: var(--svg-size-heart);\n\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n\n  & > svg {\n    width: 100%;\n    height: 100%;\n    stroke: var(--clr-brand);\n\n    fill: ",";\n\n    transition: scale 0.3s, fill 0.3s;\n  }\n\n  &:hover > svg {\n    scale: 1.2;\n  }\n\n  &:active > svg {\n    scale: 0.9;\n  }\n"])),(n=>{let{favorites:e,item:r}=n;return null===e?"transparent":e.some((n=>{return e=n,i=r,JSON.stringify(e)===JSON.stringify(i);var e,i}))?"var(--clr-brand)":"transparent"})),I=x.Z.div(k||(k=(0,h.Z)(["\n  overflow: hidden;\n  border-radius: 14px;\n  margin-bottom: 14px;\n"]))),L=x.Z.img(C||(C=(0,h.Z)(["\n  object-fit: cover;\n"]))),N=x.Z.div(z||(z=(0,h.Z)(["\n  display: flex;\n  margin-bottom: 8px;\n\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  color: var(--clr-primary);\n\n  & > h3 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n"]))),P=x.Z.h3(_||(_=(0,h.Z)(["\n  flex-grow: 1;\n"]))),R=x.Z.span(S||(S=(0,h.Z)(["\n  color: var(--clr-brand);\n"]))),Y=x.Z.ul(E||(E=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 12px;\n  row-gap: 4px;\n  margin-bottom: 28px;\n  color: var(--clr-secondary);\n"])));var A=r(984),B=r(350),J=r(184);const T=n=>{let{item:e,isModalOpen:r,setIsModalOpen:i}=n;const{img:t,make:s,model:o,year:l,fuelConsumption:a,address:c,engineSize:d,type:h,id:x,description:w,accessories:y,functionalities:k,rentalConditions:C}=e,z=n=>{n.currentTarget===n.target&&i(!r)};return(0,p.useEffect)((()=>{const n=n=>{"Escape"===n.code&&i(!r)};return window.addEventListener("keydown",n),document.body.style.overflowY="hidden",()=>{window.removeEventListener("keydown",n),document.body.style.overflowY="auto"}}),[r,i]),(0,J.jsx)(g,{onClick:z,children:(0,J.jsxs)(m,{children:[(0,J.jsx)(u,{onClick:z,children:"X"}),(0,J.jsx)(v,{src:t,alt:s,width:461,height:248}),(0,J.jsxs)(j,{children:[s,(0,J.jsxs)(R,{children:[" ",o]}),", ",l]}),(0,J.jsxs)(f,{children:[(0,J.jsx)("li",{children:c.split(", ")[1]}),(0,J.jsx)("li",{children:c.split(", ")[2]}),(0,J.jsxs)("li",{children:["Id: ",x]}),(0,J.jsxs)("li",{children:["Year: ",l]}),(0,J.jsxs)("li",{children:["Type: ",h]}),(0,J.jsxs)("li",{children:["Fuel Consumption: ",a]}),(0,J.jsxs)("li",{children:["Engine Size: ",d]})]}),(0,J.jsx)(b,{children:w}),(0,J.jsx)(Z,{children:"Accessories and functionalities:"}),(0,J.jsxs)(f,{accessories:!0,children:[y.map((n=>(0,J.jsx)("li",{children:n},A.x0))),k.map((n=>(0,J.jsx)("li",{children:n},A.x0)))]}),(0,J.jsx)(Z,{children:"Rental Conditions: "}),(0,J.jsxs)("ul",{children:[C.split("\n").map((n=>(0,J.jsx)("li",{children:n},A.x0))),(0,J.jsx)("li",{children:"Mileage: "}),(0,J.jsx)("li",{children:"Price"})]}),(0,J.jsx)(B.Z,{variant:"rental",href:"tel:+380730000000",children:"Rental car"})]})})};var U=r(164),V=r(306),F=r(420),K=r(20),X=r(351);const q=n=>{let{item:e}=n;const{img:r,make:i,model:t,year:s,rentalPrice:o,address:l,rentalCompany:a,type:c,id:d,accessories:h}=e,[x,g]=(0,p.useState)(!1),m=document.getElementById("modal"),u=(0,F.I0)(),v=(0,F.v9)(X._l);return(0,J.jsxs)(M,{children:[(0,J.jsx)(O,{favorites:v,item:e,onClick:()=>{(n=>{u((0,K.m)(n))})(e)},children:(0,J.jsx)(V.Z,{})}),(0,J.jsx)(I,{children:(0,J.jsx)(L,{src:r,alt:i,width:274,height:274})}),(0,J.jsxs)(N,{children:[(0,J.jsxs)(P,{children:[i,(0,J.jsxs)(R,{children:[" ",t]}),", ",s]}),(0,J.jsx)("span",{children:o})]}),(0,J.jsxs)(Y,{children:[(0,J.jsx)("li",{children:l.split(", ")[1]}),(0,J.jsx)("li",{children:l.split(", ")[2]}),(0,J.jsx)("li",{children:a}),(0,J.jsx)("li",{children:c}),(0,J.jsx)("li",{children:i}),(0,J.jsx)("li",{children:d}),(0,J.jsx)("li",{children:h[2].split(" ")[0]})]}),(0,J.jsx)(B.Z,{onClick:()=>{g(!x)},children:"Learn more"}),x&&(0,U.createPortal)((0,J.jsx)(T,{item:e,isModalOpen:x,setIsModalOpen:g}),m)]})}},351:(n,e,r)=>{r.d(e,{Br:()=>i,KM:()=>s,Vc:()=>t,_l:()=>l,jN:()=>o});const i=n=>n.adverts.items,t=n=>n.adverts.isLoading,s=n=>n.adverts.count,o=n=>n.filters.brand,l=n=>n.favorites.items},850:(n,e,r)=>{r.r(e),r.d(e,{default:()=>m});r(791);var i,t,s=r(420),o=r(351),l=r(383),a=r(263),c=r(168),d=r(686);const p=d.Z.section(i||(i=(0,c.Z)(["\n  padding: 50px;\n"]))),h=d.Z.ul(t||(t=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 29px;\n"])));var x=r(184);const g=()=>{const n=(0,s.v9)(o._l);return(0,x.jsx)(p,{children:(0,x.jsx)(l.Z,{children:(0,x.jsx)(h,{children:n.map((n=>(0,x.jsx)(a.Z,{item:n},n.id)))})})})},m=n=>(0,x.jsx)("main",{children:(0,x.jsx)(g,{})})},984:(n,e,r)=>{r.d(e,{x0:()=>i});let i=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce(((n,e)=>n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"")}}}]);
//# sourceMappingURL=850.bd5ae1ce.chunk.js.map