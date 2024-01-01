(self.webpackChunkcar_rent_app_react=self.webpackChunkcar_rent_app_react||[]).push([[381],{350:(n,e,r)=>{"use strict";r.d(e,{Z:()=>l});r(791);var t,i=r(168);const o=r(686).Z.button(t||(t=(0,i.Z)(["\n  width: 100%;\n  height: 44px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  color: var(--clr-primary-inv);\n\n  border: none;\n  border-radius: 12px;\n  background-color: var(--clr-brand);\n\n  cursor: pointer;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: var(--clr-hover);\n  }\n\n  ","\n\n  ","\n\n  ","\n\n\n  ","\n\n  ","\n\n  ","\n  \n  ","\n"])),(n=>{let{variant:e}=n;return"search"===e&&"\n    position: relative;\n    width: 136px;\n    height: 48px;\n    z-index: 1;\n  "}),(n=>{let{variant:e}=n;return"close"===e&&"\n    position: absolute;\n    top: 0;\n    right: 1px;\n    width: 48px;\n    height: 48px;\n    background-color: var(--clr-brand-red);\n    z-index: 0;\n    transition: transform 0.5s cubic-bezier(.17,1.26,.54,1.19), background-color 0.3s;\n    \n    & > svg {\n      width: 20px;\n      height: 20px;\n      fill: var(--clr-primary-inv);\n      transition: transform 0.3s cubic-bezier(0.65, 1.79, 0.78, 1.02);\n\n    }\n\n    &:hover {\n      background-color: var(--clr-hover-red);\n\n      & > svg {\n        transform: rotate(180deg) scale(1.2);\n      }\n    }\n  "}),(n=>{let{areLocalFiltersSet:e}=n;return e&&"transform: translateX(66px);"}),(n=>{let{variant:e}=n;return"rental"===e&&"\n    max-width: auto;\n  "}),(n=>{let{variant:e}=n;return"main"===e&&"\n    width: 200px;\n    height: 50px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    font-weight: 600;\n    font-size: 16px;\n    color: var(--clr-primary-inv);\n\n    background: none;\n    border: 2px solid var(--clr-bcg);\n    border-radius: 14px;\n\n    cursor: pointer;\n    transition: background-color 0.3s, color 0.3s;\n\n    &:hover {\n      background-color: white;\n      color: var(--clr-primary);\n    }\n  "}),(n=>{let{variant:e}=n;return"pagination"===e&&"\n    width: 210px;\n    height: 48px;\n\n    display: block;\n    margin: 0 auto;\n    margin-top: 50px;\n\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 24px;\n    color: var(--clr-brand);\n\n    background: transparent;\n    border: 2px solid var(--clr-brand);\n    border-radius: 12px;\n    cursor: pointer;\n    transition: border-color 0.3s, background-color 0.3s, color 0.3s;\n\n    &:hover {\n      background-color: var(--clr-brand);\n      border-color: var(--clr-brand);\n      color: var(--clr-primary-inv);\n    }\n  "}),(n=>{let{variant:e}=n;return"learnMore"===e&&"\n    order: 1;\n\n    &:hover + div > img {\n    transform: scale(1.1);\n  }\n  "}));var a=r(87),s=r(184);const l=n=>{let{children:e,variant:r,href:t,onClick:i,areLocalFiltersSet:l,to:c}=n,d=t?"a":"button";return c&&(d=a.rU),"close"===r?(0,s.jsx)(o,{variant:r,as:d,to:c,href:t,onClick:i,areLocalFiltersSet:l,children:e}):(0,s.jsx)(o,{variant:r,as:d,to:c,href:t,onClick:i,children:e})}},251:(n,e,r)=>{"use strict";r.d(e,{Z:()=>rn});var t,i,o,a,s,l,c,d,p,h,u,x,g=r(791),v=r(168),f=r(686);const m=f.Z.div(t||(t=(0,v.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: var(--clr-bcg-backdrop);\n"]))),b=f.Z.div(i||(i=(0,v.Z)(["\n  display: flex;\n  position: relative;\n  padding: 40px 40px;\n  gap: 20px;\n\n  background-color: var(--clr-bcg);\n  border-radius: 24px;\n"]))),w=f.Z.button(o||(o=(0,v.Z)(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 24px;\n  height: 24px;\n\n  padding: 0;\n  margin: 0;\n  font-weight: bold;\n\n  background: none;\n  border: none;\n  cursor: pointer;\n\n  svg {\n    transition: transform 0.3s;\n    pointer-events: none;\n  }\n\n  &:hover > svg {\n    transform: rotate(180deg);\n  }\n"]))),j=f.Z.div(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),y=f.Z.img(s||(s=(0,v.Z)(["\n  display: block;\n  width: 440px;\n  object-fit: cover;\n  border-radius: 14px;\n  flex-grow: 1;\n"]))),k=f.Z.div(l||(l=(0,v.Z)(["\n  width: 380px;\n"]))),Z=f.Z.h3(c||(c=(0,v.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  color: var(--clr-primary);\n  margin-bottom: 8px;\n"]))),L=f.Z.ul(d||(d=(0,v.Z)(['\n  width: 400px;\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 12px;\n  row-gap: 4px;\n  color: var(--clr-secondary);\n  margin-bottom: 40px;\n\n  & > li {\n    position: relative;\n  }\n\n  & > li:not(:last-of-type)::after {\n    content: "";\n    position: absolute;\n    top: 0;\n    right: -6px;\n\n    display: block;\n    width: 0.9px;\n    height: 16px;\n    background-color: var(--clr-bcg-list-decor);\n  }\n\n  ',"\n"])),(n=>{let{accessories:e}=n;return e&&" margin-bottom: 0px;\n    width: auto;\n    "})),C=f.Z.p(p||(p=(0,v.Z)(["\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  margin-bottom: 40px;\n"]))),z=f.Z.h4(h||(h=(0,v.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  margin-bottom: 8px;\n"]))),S=f.Z.ul(u||(u=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 40px;\n\n  letter-spacing: -0.24px;\n\n  & > li {\n    padding: 7px 14px;\n    border-radius: 35px;\n    background-color: var(--clr-bcg-filter);\n  }\n"]))),O=f.Z.span(x||(x=(0,v.Z)(["\n  font-weight: 600;\n  color: var(--clr-brand);\n"])));var F,M,E,T,P,_,R,I;const B=f.Z.li(F||(F=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 274px;\n\n  div > img {\n    transition: transform 0.3s;\n  }\n"]))),D=f.Z.button(M||(M=(0,v.Z)(["\n  position: absolute;\n  z-index: 1;\n  top: 14px;\n  right: 14px;\n  width: var(--svg-size-heart);\n  height: var(--svg-size-heart);\n\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n\n  & > svg {\n    width: 100%;\n    height: 100%;\n    stroke: var(--clr-brand);\n\n    fill: ",";\n\n    transition: scale 0.3s, fill 0.3s;\n  }\n\n  &:hover > svg {\n    scale: 1.2;\n  }\n\n  &:active > svg {\n    scale: 0.9;\n  }\n"])),(n=>{let{favorites:e,id:r}=n;return null===e?"transparent":e.includes(r)?"var(--clr-brand)":"transparent"})),N=f.Z.div(E||(E=(0,v.Z)(["\n  width: 274px;\n  height: 274px;\n  overflow: hidden;\n  border-radius: 14px;\n  margin-bottom: 14px;\n"]))),A=f.Z.img(T||(T=(0,v.Z)(["\n  object-fit: cover;\n"]))),W=f.Z.div(P||(P=(0,v.Z)(["\n  display: flex;\n  flex-grow: 1;\n  margin-bottom: 8px;\n\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  color: var(--clr-primary);\n\n  & > h3 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n"]))),U=f.Z.h3(_||(_=(0,v.Z)(["\n  flex-grow: 1;\n"]))),H=f.Z.span(R||(R=(0,v.Z)(["\n  color: var(--clr-brand);\n"]))),J=f.Z.ul(I||(I=(0,v.Z)(['\n  height: 40px;\n  overflow: hidden;\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 12px;\n  row-gap: 4px;\n  margin-bottom: 28px;\n  color: var(--clr-secondary);\n\n  & > li {\n    position: relative;\n  }\n\n  & > li:not(:last-child)::after {\n    content: "";\n    position: absolute;\n    top: 0;\n    right: -6px;\n\n    display: block;\n    width: 0.9px;\n    height: 16px;\n    background-color: var(--clr-bcg-list-decor);\n  }\n'])));var V=r(984),Y=r(350),q=r(184);const $=()=>(0,q.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,q.jsx)("path",{d:"M18 6L6 18",stroke:"#121417",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,q.jsx)("path",{d:"M6 6L18 18",stroke:"#121417",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),X=n=>{let{item:e,isModalOpen:r,setIsModalOpen:t}=n;const{largeImg:i,make:o,model:a,year:s,fuelConsumption:l,address:c,engineSize:d,type:p,id:h,description:u,accessories:x,functionalities:v,rentalConditions:f,mileage:F,rentalPrice:M}=e,E=n=>{n.currentTarget===n.target&&t(!r)};return(0,g.useEffect)((()=>{const n=n=>{"Escape"===n.code&&t(!r)};return window.addEventListener("keydown",n),document.body.style.overflowY="hidden",()=>{window.removeEventListener("keydown",n),document.body.style.overflowY="auto"}}),[r,t]),(0,q.jsx)(m,{onClick:E,children:(0,q.jsxs)(b,{children:[(0,q.jsx)(w,{onClick:E,children:(0,q.jsx)($,{})}),(0,q.jsxs)(j,{children:[(0,q.jsx)(y,{src:i,alt:o,width:461,height:248}),(0,q.jsx)(Y.Z,{variant:"rental",href:"tel:+380730000000",children:"Rental car"})]}),(0,q.jsxs)(k,{children:[(0,q.jsxs)(Z,{children:[o,(0,q.jsxs)(H,{children:[" ",a]}),", ",s]}),(0,q.jsxs)(L,{children:[(0,q.jsx)("li",{children:c.split(", ")[1]}),(0,q.jsx)("li",{children:c.split(", ")[2]}),(0,q.jsxs)("li",{children:["Id: ",h]}),(0,q.jsxs)("li",{children:["Year: ",s]}),(0,q.jsxs)("li",{children:["Type: ",p]}),(0,q.jsxs)("li",{children:["Fuel Consumption: ",l]}),(0,q.jsxs)("li",{children:["Engine Size: ",d]})]}),(0,q.jsx)(C,{children:u}),(0,q.jsx)(z,{children:"Rental Conditions: "}),(0,q.jsxs)(S,{children:[f.split("\n").map(((n,e)=>0===e?(0,q.jsxs)("li",{children:[n.split(" ")[0]+" ",n.split(" ")[1],(0,q.jsxs)(O,{children:[" ",n.split(": ")[1]]})]},(0,V.x0)()):n.includes("Security")?(0,q.jsx)("li",{children:n.replace("and insurance","")},(0,V.x0)()):(0,q.jsx)("li",{children:n},(0,V.x0)()))),(0,q.jsxs)("li",{children:["Mileage: ",(0,q.jsx)(O,{children:F})]}),(0,q.jsxs)("li",{children:["Price: ",(0,q.jsx)(O,{children:M})]})]}),(0,q.jsx)(z,{children:"Accessories and functionalities:"}),(0,q.jsxs)(L,{accessories:!0,children:[x.map(((n,e)=>(0,q.jsx)("li",{children:n},(0,V.x0)()))),v.map(((n,e)=>(0,q.jsx)("li",{children:n},(0,V.x0)())))]})]})]})})};var G=r(164),K=r(306),Q=r(434),nn=r(225),en=r(351);const rn=n=>{let{item:e}=n;const{img:r,make:t,model:i,year:o,rentalPrice:a,address:s,rentalCompany:l,type:c,id:d,accessories:p,functionalities:h}=e,u=document.getElementById("modal"),[x,v]=(0,g.useState)(!1),f=(0,Q.v9)(en._l),m=(0,Q.I0)();return(0,q.jsxs)(B,{children:[(0,q.jsx)(Y.Z,{variant:"learnMore",onClick:()=>{v(!x)},children:"Learn more"}),(0,q.jsx)(N,{children:(0,q.jsx)(A,{src:r,alt:t,width:274,height:274})}),(0,q.jsx)(D,{id:d,favorites:f,onClick:()=>{(n=>{m((0,nn.mN)(n))})(d)},children:(0,q.jsx)(K.Z,{})}),(0,q.jsxs)(W,{children:[(0,q.jsxs)(U,{children:[t,(0,q.jsxs)(H,{children:[" ",i]}),", ",o]}),(0,q.jsx)("span",{children:a})]}),(0,q.jsxs)(J,{children:[(0,q.jsx)("li",{children:s.split(", ")[1]}),(0,q.jsx)("li",{children:s.split(", ")[2]}),(0,q.jsx)("li",{children:l}),(0,q.jsx)("li",{children:c}),(0,q.jsx)("li",{children:t}),(0,q.jsx)("li",{children:d}),(0,q.jsx)("li",{children:p.find((n=>n.split(" ").length<3))||h.find((n=>n.split(" ").length<3))||"Power liftgate"})]}),x&&(0,G.createPortal)((0,q.jsx)(X,{item:e,isModalOpen:x,setIsModalOpen:v}),u)]})}},731:(n,e,r)=>{"use strict";r.d(e,{Z:()=>U});var t,i,o,a=r(791),s=r(168),l=r(686);const c=l.Z.div(t||(t=(0,s.Z)(["\n  position: relative;\n  padding-bottom: 50px;\n  transition: transform 0.3s;\n  ","\n  z-index: 2;\n"])),(n=>{let{areLocalFiltersSet:e}=n;return e&&"transform: translateX(-33px);"})),d=l.Z.div(i||(i=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n\n  gap: 18px;\n"]))),p=l.Z.div(o||(o=(0,s.Z)(["\n  position: relative;\n"])));var h=r(87);const u=JSON.parse('["Buick","Volvo","Hummer","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land Rover"]'),x=JSON.parse('["30","40","50","60","70","80","90","100","150","200","250","300","350","400","450","500"]');var g,v,f,m,b=r(350);const w=l.Z.div(g||(g=(0,s.Z)(["\n  position: relative;\n  & > p {\n    font-size: 14px;\n    font-weight: 500;\n    color: var(--clr-secondary-lt);\n    margin-bottom: 8px;\n  }\n"]))),j=l.Z.button(v||(v=(0,s.Z)(["\n  ","\n  ","\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 20px;\n\n  border: none;\n  border-radius: 14px;\n  background-color: var(--clr-bcg-filter);\n  cursor: pointer;\n\n  & > span {\n    flex-grow: 1;\n    text-align: left;\n  }\n\n  & > svg {\n    width: var(--svg-size-chevron);\n    height: var(--svg-size-chevron);\n    transform: rotate(",");\n    transition: transform 0.3s cubic-bezier(0.65, 1.79, 0.78, 1.02);\n  }\n"])),(n=>{let{parameter:e}=n;return"brand"===e&&"width: 224px;"}),(n=>{let{parameter:e}=n;return"price"===e&&"width: 125px;"}),(n=>{let{isDropdownOpen:e}=n;return e?"180deg":"0deg"})),y=l.Z.ul(f||(f=(0,s.Z)(["\n  position: absolute;\n  top: 80px;\n  left: 0;\n\n  ","\n\n  ","\n\n  padding: 14px 8px;\n\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 18.6px;\n  color: var(--clr-filter-inactive);\n\n  border: 1px solid rgba(18, 20, 23, 0.05);\n  border-radius: 14px;\n  background-color: var(--clr-bcg);\n  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);\n\n  & > div {\n    width: 100%;\n    height: 99%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0);\n    transition: background-color 0.3s;\n\n    &:hover {\n      background-color: var(--clr-bcg-scrollbar);\n    }\n\n    &::-webkit-scrollbar {\n      width: var(--scrollbar-filter-width);\n    }\n\n    /* Track */\n    &::-webkit-scrollbar-track {\n      background: var(--clr-bcg);\n    }\n\n    /* Handle */\n    &::-webkit-scrollbar-thumb {\n      background-color: inherit;\n      border-radius: var(--scrollbar-border-radius);\n    }\n\n    & > ul {\n      display: flex;\n      flex-direction: column;\n      background-color: var(--clr-bcg);\n    }\n  }\n"])),(n=>{let{parameter:e}=n;return"brand"===e&&"width: 224px;\n    height: 272px;"}),(n=>{let{parameter:e}=n;return"price"===e&&"width: 125px;    \n    height: 190px;"})),k=l.Z.li(m||(m=(0,s.Z)(["\n  ","\n  ","\n\n  padding: 4px 10px;\n  color: ",";\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background-color 0.3s, color 0.3s;\n\n  &:hover {\n    color: var(--clr-primary);\n    background-color: var(--clr-bcg-scrollbar);\n  }\n"])),(n=>{let{parameter:e}=n;return"brand"===e&&"width: 192px;"}),(n=>{let{parameter:e}=n;return"price"===e&&"width: 92px;"}),(n=>{let{parameter:e,chosenOption:r}=n;return e!==r?"inherit":"var(--clr-primary)"}));var Z=r(184);const L=()=>(0,Z.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,Z.jsx)("title",{children:"chevron-down"}),(0,Z.jsx)("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"3.2",stroke:"#000",d:"M8 12l8 8 8-8"})]});var C=r(984);const z=n=>{let{areParamsSet:e,dropdownDefault:r,title:t,parameter:i,options:o,localFilters:s,setLocalFilters:l}=n;const[c]=(0,h.lr)(),d=c.get(i),p=(0,a.useMemo)((()=>{if(d&&"price"!==i){const n=o.map((n=>n.toLowerCase())).findIndex((n=>n===d.toLowerCase()));return-1!==n&&o[n]}if(d&&"price"===i){return!!o.find((n=>n===d))&&d}}),[d,o,i]),[u,x]=(0,a.useState)(!1),[g,v]=(0,a.useState)(d&&p?p:r),f=(0,a.useRef)(null),m=(0,a.useRef)(null),b=(0,a.useRef)(null);(0,a.useEffect)((()=>{d&&p?(v(p),l((n=>({...n,[i]:"price"!==i?p.toLowerCase():p})))):v(r),e||(v(r),l({}))}),[d,p,i,r,l,e]),(0,a.useEffect)((()=>{s[i]||v(r)}),[s,i,r]),(0,a.useEffect)((()=>{u&&m.current&&(f.current.scrollTop=m.current.offsetTop-14);const n=n=>{!f.current||f.current.contains(n.target)||b.current.contains(n.target)||x(!u)};return document.addEventListener("click",n),()=>{document.removeEventListener("click",n)}}),[u]);const z=n=>{n.target.innerText!==g&&(v(n.target.innerText),l((e=>({...e,[i]:"price"!==i?n.target.innerText.toLowerCase():n.target.innerText})))),x(!u)};return(0,Z.jsxs)(w,{children:[(0,Z.jsx)("p",{children:t}),(0,Z.jsxs)(j,{onClick:()=>{x(!u)},isDropdownOpen:u,ref:b,parameter:i,children:[(0,Z.jsx)("span",{children:g}),(0,Z.jsx)(L,{})]}),u&&(0,Z.jsx)(y,{parameter:i,children:(0,Z.jsx)("div",{ref:f,children:(0,Z.jsx)("ul",{children:o.map((n=>(0,Z.jsx)(k,{onClick:z,chosenOption:g,parameter:i,ref:g===n?m:null,children:n},(0,C.x0)())))})})})]})};var S,O,F,M;const E=l.Z.p(S||(S=(0,s.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--clr-secondary-lt);\n  margin-bottom: 8px;\n"]))),T=l.Z.div(O||(O=(0,s.Z)(["\n  display: flex;\n  width: 320px;\n  height: 48px;\n\n  background-color: var(--clr-bcg-filter);\n  border-radius: 14px;\n  cursor: pointer;\n"]))),P=l.Z.div(F||(F=(0,s.Z)(["\n  position: relative;\n\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 20px;\n\n  & > span {\n    display: flex;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    height: 100%;\n    left: 18px;\n  }\n\n  &:first-of-type > input {\n    border-right: 0.9px solid var(--clr-input-decor);\n    padding-left: 74px;\n  }\n"]))),_=l.Z.input(M||(M=(0,s.Z)(["\n  display: block;\n  position: relative;\n  padding: 12px 18px 12px 52px;\n  width: 160px;\n  height: 48px;\n\n  font: inherit;\n  line-height: inherit;\n\n  border: none;\n  background: none;\n\n  &:focus {\n    outline: none;\n  }\n"])));var R=r(7),I=r.n(R);const B=function(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;const[r,t]=(0,a.useState)(n);return(0,a.useEffect)((()=>{const r=setTimeout((()=>{t(n)}),e);return()=>clearTimeout(r)}),[n,e]),r};B.propTypes={value:I().string.isRequired,delay:I().number.isRequired};const D=B,N=n=>{var e;let{type:r,name:t,autoComplete:i,localFilters:o,setLocalFilters:s}=n;const[l]=(0,h.lr)(),c=l.get(t),[d,p]=(0,a.useState)(c&&x(c)?c:""),u=D(d);(0,a.useEffect)((()=>{c&&x(c)?(s((n=>({...n,[t]:c}))),p(c)):p("")}),[c,s,t]),(0,a.useEffect)((()=>{o[t]||p("")}),[o,t]),(0,a.useEffect)((()=>{s(u?n=>({...n,[t]:u}):n=>{const{[t]:e,...r}=n;return r})}),[u,s,t]);function x(n){return/^[0-9]*$/.test(n)}return(0,Z.jsxs)(P,{children:[(0,Z.jsxs)("span",{children:[(g=t,g.charAt(0).toUpperCase()+g.slice(1)),":"]}),(0,Z.jsx)(_,{type:r,value:null!==(e=function(n){if(n)return Number(n).toLocaleString()}(d))&&void 0!==e?e:"",name:t,autoComplete:i,onChange:n=>{const e=n.target.value.split("\xa0").join("");x(e)&&p(e)}})]});var g},A=n=>{let{localFilters:e,setLocalFilters:r}=n;return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(E,{children:"\u0421ar mileage / km"}),(0,Z.jsxs)(T,{children:[(0,Z.jsx)(N,{type:"text",name:"from",autoComplete:"off",localFilters:e,setLocalFilters:r}),(0,Z.jsx)(N,{type:"text",name:"to",autoComplete:"off",localFilters:e,setLocalFilters:r})]})]})},W=()=>(0,Z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"30px",height:"30px",children:(0,Z.jsx)("path",{d:"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"})}),U=()=>{const[n,e]=(0,h.lr)(),r=Object.fromEntries(n),t=Object.values(r).some((n=>n)),[i,o]=(0,a.useState)(t?r:{}),s=Object.values(i).some((n=>n)),l=(g=i,v=r,!(JSON.stringify(g)===JSON.stringify(v)));var g,v;return(0,Z.jsx)(c,{areLocalFiltersSet:s,children:(0,Z.jsxs)(d,{children:[(0,Z.jsx)(z,{options:u,localFilters:i,setLocalFilters:o,parameter:"brand",title:"Car brand",dropdownDefault:"Select a brand",areParamsSet:t,areLocalFiltersSet:s}),(0,Z.jsx)(z,{options:x,localFilters:i,setLocalFilters:o,parameter:"price",title:"Price/ 1 hour",dropdownDefault:"To $",areParamsSet:t,areLocalFiltersSet:s}),(0,Z.jsx)(A,{localFilters:i,setLocalFilters:o}),(0,Z.jsxs)(p,{children:[(0,Z.jsx)(b.Z,{variant:"search",onClick:()=>{l&&e(i)},children:"Search"}),(0,Z.jsx)(b.Z,{variant:"close",onClick:()=>{o({}),e({})},areLocalFiltersSet:s,children:(0,Z.jsx)(W,{})})]})]})})}},924:(n,e,r)=>{"use strict";r.d(e,{Z:()=>i});var t=r(184);const i=()=>(0,t.jsxs)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"682.7",height:"682.7",viewBox:"0 0 512 512",children:[(0,t.jsx)("path",{d:"M360.7 27.6c-20.1 3.6-38 12.5-52.6 26l-6 5.5-5.2-1.5c-4.4-1.3-11.7-1.6-42.8-1.6-41.4 0-44.9.4-57 6.2-6.1 2.9-13.6 10.1-96.7 93.2-87.8 87.8-90.2 90.3-93.8 97.7A62.1 62.1 0 0 0 8.7 312c5 8.7 62.9 66.8 71.6 71.9a61.6 61.6 0 0 0 69-3c2.3-1.8 24.1-23 48.3-47.2 39.6-39.3 44.2-43.6 44.7-41.5 1.3 4.9 9.3 15.6 19.3 25.8l10.4 10.6-18.1 17.9c-10 9.9-18.7 19.4-19.5 21.2a29 29 0 0 0-1.4 9.3v6h-6.5c-7.8 0-10.4 1.2-16.6 7.7-6.2 6.4-6.9 8-6.9 15.7v6.6h-6c-8.4 0-11.4 1.6-19.6 10.2-9.3 9.8-10.4 13-10.4 30.2 0 15.5.9 19.4 5.8 24.8 6.1 6.8 9.4 7.8 26.7 7.8 14 0 15.4-.2 20.5-2.6 4.6-2.1 13.3-10.3 55.2-52.1l49.7-49.7 11.3 11c12.4 11.9 20.5 17.3 31.3 20.7 5.9 1.8 9.3 2.2 21 2.2 12.6 0 14.7-.3 21.3-2.7 13.1-4.7 17.5-8.1 42-32.3 35.9-35.3 43.9-46 52.7-70.5a125.3 125.3 0 0 0-25.3-126.7l-7.2-8.1 1.9-4.6a104.2 104.2 0 0 0-113.2-143zm32.8 14.9a90.7 90.7 0 0 1 64.3 48 92 92 0 0 1 5.1 66.9 34.2 34.2 0 0 1-2.9 7c-.4.4-2.9-.6-5.3-2.3a154.7 154.7 0 0 0-30-14.5c-24.7-8.1-56-8-80.1.3a47.4 47.4 0 0 1-6.8 2.1c-.4 0-.8-11.2-.8-24.9 0-21.9-.2-25.6-2-31.2a51.2 51.2 0 0 0-13.7-22l-5.4-5.6 3.8-3.3c5.5-4.9 16-11.4 22.8-14.3a87 87 0 0 1 51-6.2zM291 72c0 .5-1.6 3.9-3.6 7.5-2.7 4.9-4.3 6.7-6.2 7.1-8.4 1.8-13.5 5.7-16.8 12.9-4 8.5-2.8 16.9 3.4 23.7a21.8 21.8 0 0 0 33.4 0c7.6-8.4 7.7-20.3.2-29.1l-3.4-3.9 4.1-6.2 4-6.3 4.5 4.4c2.5 2.4 5.9 7.3 7.7 10.9l3.2 6.5.3 29.2.3 29.2-4.3 2.7c-9.3 5.9-17.2 12.7-38.1 33.3-23.7 23.3-31 31.6-35.2 40.1a58.4 58.4 0 0 0-7.2 27.5l-.5 11-47.7 47.8c-34 34.2-49.2 48.8-53.4 51.2a46.2 46.2 0 0 1-45.7.7 461.8 461.8 0 0 1-35.7-33.6c-28.1-28.1-31.5-31.8-34.3-37.8a47.4 47.4 0 0 1-.3-40.3c2.4-5.5 9.6-12.9 88.2-91.8 47.1-47.2 87.8-87.5 90.6-89.5 2.7-2 7.9-4.7 11.5-5.9 6.3-2.2 7.9-2.2 43.8-2.3 23.2 0 37.2.4 37.2 1zm-4 31.8c1.9.2 3.8 1 4.2 1.6 2.5 3.8-1.8 10.6-6.7 10.6-3.2 0-7.5-4.1-7.5-7.2 0-3.5 2.8-7.1 4.9-6.2.9.4 3.2.9 5.1 1.2zm121.5 55.1c8.9 1.8 23.7 7.3 30.5 11.3a47.9 47.9 0 0 1 13 9.3 93.3 93.3 0 0 1-26.8 26.1l-4.4 2.6-5.6-2.5a66.6 66.6 0 0 0-32.1-6.5c-12.4.5-16.6 2.2-22.8 9.2a24.3 24.3 0 0 0-6.3 18.2c0 14.1 12.1 25.5 29 27.4 11 1.2 14.8 5 16 16 2.5 22.6 22.1 35.5 40.3 26.6C450 291.4 454 283.7 454 268c0-16.9-5.5-32.2-15.7-43.9l-4.7-5.4 3.3-2.6c9.5-7.3 17.4-14.7 21.7-20.1 2.6-3.3 5-6 5.5-6 2.5 0 15.9 18.1 21.3 28.8a126.2 126.2 0 0 1 11.6 49.7c0 14.5-5 35.6-11.6 48.7-7.1 14.2-13.6 22.1-39.9 48.4-27.4 27.5-30.8 30.1-43.4 33.8a63.9 63.9 0 0 1-28.2 0c-13.3-3.9-14.6-5-63.2-53.3-26-25.8-47.5-48.1-49.7-51.4a46.9 46.9 0 0 1-8.8-26.3c-.5-10.8.9-18.1 5-26.6 2.6-5.4 7.3-10.5 31.2-34.4 20.1-20 30.2-29.5 35.6-32.9 13.3-8.7 31-15.2 47.2-17.5 8.8-1.2 26.6-.3 37.3 1.9zm-9.4 56.6c2.2 1.4-9.2 3.4-19.5 3.5-8 0-8.7-.1-7.5-1.6.7-.9 2.2-2 3.4-2.5 2.5-1.1 21.6-.6 23.6.6zm26 16.3a52 52 0 0 1 12.4 22.3c1.9 7.1 1.9 21.1.1 24.7-2.9 5.5-11.2 7.4-16.3 3.6-4.9-3.7-6.5-6.8-7.3-14.7-1.9-16.9-11.2-26.1-28.6-28.5a31 31 0 0 1-10-2.9l-2.8-1.8 11-.6a110.4 110.4 0 0 0 35-7.8c.7-.1 3.6 2.5 6.5 5.7zM268 417.6c-25.6 25.6-48.3 48-50.5 49.7-3.7 3.1-4.4 3.2-14 3.5l-10 .3 48.3-48.3c42.4-42.6 48.2-48.7 48.2-51.4 0-4.1-3.2-7.4-7.3-7.4-2.9 0-7.9 4.7-51.9 48.7L182 461.5v-9.2c0-11.1.8-13.5 6.8-19.6l4.6-4.7h9.4c5.1 0 10.2-.4 11.2-1 2.7-1.4 4-6.4 4-15.3 0-7.4.2-8.3 2.7-10.9 2.5-2.7 3.1-2.8 11.5-2.8 9.3 0 14-1.4 15.2-4.5.3-.9.6-5.8.6-10.8v-9.2l17.2-17.2 17.3-17.3 16 16 16 16-46.5 46.6z"}),(0,t.jsx)("path",{d:"M209.5 106.6c-4.7 1.4-10.5 7-84.8 81.2-53.6 53.6-80.4 81-81.7 83.8a22.6 22.6 0 0 0-.1 18.2c1.1 2 14.9 16.6 30.8 32.3 27.6 27.5 29 28.7 33.8 29.7 3.5.7 6.5.7 10 0 4.9-1 6.2-2.2 54.8-50.6a1152 1152 0 0 0 51.8-53.5 29 29 0 0 0-1.4-28.4 357 357 0 0 0-21.6-22.6c-16.4-16.3-19.2-18.7-22-18.7-4.8 0-7.8 3.8-7.1 9 .1.8 8.9 10.3 19.5 21 20.5 20.7 22 22.9 20.4 29.9-.6 2.7-5.2 7.9-21.1 23.8L170.5 282l-22.6-22.6c-22.2-22.1-22.7-22.5-26.4-22.2-4.9.4-8.1 4.2-7.1 8.5.5 1.8 8.3 10.4 22.9 25.1l22.2 22.2-22.1 22.1c-18.1 18.1-22.7 22.2-24.9 22.2-2.2-.1-7.5-4.8-29.6-26.9C59.7 287.2 56 283.1 56 280.5c0-2.6 9.4-12.4 77.3-80.3 45.7-45.9 78.5-78 80.5-78.8 2.5-1.1 3.8-1.2 5.5-.3 1.2.6 13.7 12.5 27.7 26.5 22.8 22.6 25.9 25.4 28.8 25.4a7 7 0 0 0 7.2-7.3c0-2.9-2.7-5.9-26.7-29.9a499 499 0 0 0-29.8-28.1 24.1 24.1 0 0 0-17-1.1z"})]})},760:(n,e,r)=>{"use strict";r.d(e,{Z:()=>g});var t,i=r(791),o=r(168);const a=r(686).Z.div(t||(t=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  ","\n\n  ","\n\n  ","\n"])),(n=>{let{variant:e,isFiltersShown:r}=n;return("initialization"===e||Boolean(r))&&"\n    min-height: calc(100vh - 440px);\n  "}),(n=>{let{variant:e,isFiltersShown:r}=n;return"favorites"===e&&!r&&" \n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 100%;\n    pointer-events: none;\n  "}),(n=>{let{variant:e}=n;return"pagination"===e&&"\n    padding-top: 29px;\n    margin-bottom: -21px;\n  "}));var s={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function l(n){var e=function(n){if("number"===typeof n)return{value:n,unit:"px"};var e,r=(n.match(/^[0-9.]*/)||"").toString();e=r.includes(".")?parseFloat(r):parseInt(r,10);var t=(n.match(/[^0-9]*$/)||"").toString();return s[t]?{value:e,unit:t}:(console.warn("React Spinners: ".concat(n," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}(n);return"".concat(e.value).concat(e.unit)}var c=function(n,e,r){var t="react-spinners-".concat(n,"-").concat(r);if("undefined"==typeof window||!window.document)return t;var i=document.createElement("style");document.head.appendChild(i);var o=i.sheet,a="\n    @keyframes ".concat(t," {\n      ").concat(e,"\n    }\n  ");return o&&o.insertRule(a,0),t},d=function(){return d=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},d.apply(this,arguments)},p=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(n);i<t.length;i++)e.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(n,t[i])&&(r[t[i]]=n[t[i]])}return r},h=[c("PuffLoader","0% {transform: scale(0)} 100% {transform: scale(1.0)}","puff-1"),c("PuffLoader","0% {opacity: 1} 100% {opacity: 0}","puff-2")];const u=function(n){var e=n.loading,r=void 0===e||e,t=n.color,o=void 0===t?"#000000":t,a=n.speedMultiplier,s=void 0===a?1:a,c=n.cssOverride,u=void 0===c?{}:c,x=n.size,g=void 0===x?60:x,v=p(n,["loading","color","speedMultiplier","cssOverride","size"]),f=d({display:"inherit",position:"relative",width:l(g),height:l(g)},u),m=function(n){return{position:"absolute",height:l(g),width:l(g),border:"thick solid ".concat(o),borderRadius:"50%",opacity:"1",top:"0",left:"0",animationFillMode:"both",animation:"".concat(h[0],", ").concat(h[1]),animationDuration:"".concat(2/s,"s"),animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.3, 0.61, 0.355, 1)",animationDelay:1===n?"-1s":"0s"}};return r?i.createElement("span",d({style:f},v),i.createElement("span",{style:m(1)}),i.createElement("span",{style:m(2)})):null};var x=r(184);const g=n=>{let{variant:e,size:r,isFiltersShown:t}=n;return(0,x.jsx)(a,{variant:e,isFiltersShown:t,children:(0,x.jsx)(u,{size:r})})}},351:(n,e,r)=>{"use strict";r.d(e,{Br:()=>t,M1:()=>l,Vc:()=>i,_l:()=>a,bp:()=>o,p1:()=>s});const t=n=>n.adverts.items,i=n=>n.adverts.isLoading,o=n=>n.adverts.generalCount,a=n=>n.favorites.idList,s=n=>n.favorites.items,l=n=>n.favorites.isLoading},888:(n,e,r)=>{"use strict";var t=r(47);function i(){}function o(){}o.resetWarningCache=i,n.exports=function(){function n(n,e,r,i,o,a){if(a!==t){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return n}n.isRequired=n;var r={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return r.PropTypes=r,r}},7:(n,e,r)=>{n.exports=r(888)()},47:n=>{"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},984:(n,e,r)=>{"use strict";r.d(e,{x0:()=>t});let t=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce(((n,e)=>n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"")}}}]);
//# sourceMappingURL=381.8d32607d.chunk.js.map