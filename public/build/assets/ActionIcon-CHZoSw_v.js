import{f as B,d as b,e as N,j as c,B as h,h as R,r as w,N as U,U as $,a1 as k,a7 as D,i as E,m as F}from"./app-CWuogeuA.js";var l={root:"m_8d3f4000",icon:"m_8d3afb97",loader:"m_302b9fb1",group:"m_1a0f1b21"};const z={orientation:"horizontal"},L=R((o,{borderWidth:e})=>({group:{"--ai-border-width":w(e)}})),g=B((o,e)=>{const t=b("ActionIconGroup",z,o),{className:s,style:n,classNames:a,styles:d,unstyled:r,orientation:p,vars:i,borderWidth:x,variant:u,mod:A,...I}=b("ActionIconGroup",z,o),m=N({name:"ActionIconGroup",props:t,classes:l,className:s,style:n,classNames:a,styles:d,unstyled:r,vars:i,varsResolver:L,rootSelector:"group"});return c.jsx(h,{...m("group"),ref:e,variant:u,mod:[{"data-orientation":p},A],role:"group",...I})});g.classes=l;g.displayName="@mantine/core/ActionIconGroup";const T={},V=R((o,{size:e,radius:t,variant:s,gradient:n,color:a,autoContrast:d})=>{const r=o.variantColorResolver({color:a||o.primaryColor,theme:o,gradient:n,variant:s||"filled",autoContrast:d});return{root:{"--ai-size":E(e,"ai-size"),"--ai-radius":t===void 0?void 0:F(t),"--ai-bg":a||s?r.background:void 0,"--ai-hover":a||s?r.hover:void 0,"--ai-hover-color":a||s?r.hoverColor:void 0,"--ai-color":r.color,"--ai-bd":a||s?r.border:void 0}}}),f=U((o,e)=>{const t=b("ActionIcon",T,o),{className:s,unstyled:n,variant:a,classNames:d,styles:r,style:p,loading:i,loaderProps:x,size:u,color:A,radius:I,__staticSelector:m,gradient:W,vars:G,children:S,disabled:v,"data-disabled":j,autoContrast:q,mod:_,...C}=t,y=N({name:["ActionIcon",m],props:t,className:s,style:p,classes:l,classNames:d,styles:r,unstyled:n,vars:G,varsResolver:V});return c.jsxs($,{...y("root",{active:!v&&!i&&!j}),...C,unstyled:n,variant:a,size:u,disabled:v||i,ref:e,mod:[{loading:i,disabled:v||j},_],children:[c.jsx(k,{mounted:!!i,transition:"slide-down",duration:150,children:P=>c.jsx(h,{component:"span",...y("loader",{style:P}),"aria-hidden":!0,children:c.jsx(D,{color:"var(--ai-color)",size:"calc(var(--ai-size) * 0.55)",...x})})}),c.jsx(h,{component:"span",mod:{loading:i},...y("icon"),children:S})]})});f.classes=l;f.displayName="@mantine/core/ActionIcon";f.Group=g;export{f as A};
