import{t as E,f as R,d as C,j as o,U as G,B as g,n as J,e as Q,z as V,h as X,r as y,m as Y,q as Z}from"./app-CWuogeuA.js";import{E as oo}from"./EmptyWithIcon-Ed5vXGFV.js";import{C as to,M as eo}from"./MainLayout-CE7MuGsf.js";import no from"./Task-CHjuLbHw.js";import{B as ro}from"./Breadcrumbs-D_Kk8znN.js";import{T as io}from"./Title-bWYyVAL-.js";import{A as M}from"./AccordionChevron-8oTGXrZN.js";import{a as so}from"./Menu-LLfB-uq4.js";import{u as ao}from"./use-uncontrolled-Dq7POLQj.js";import{I as co}from"./IconStarFilled-CVV2pk_r.js";import{I as lo}from"./IconStar-CnMZfBoJ.js";import{T as mo}from"./Text-DBjpm_Fk.js";import{S as po}from"./Stack-Dp1Xcxwn.js";import{C as ho}from"./Center-DiF0sA08.js";import{I as uo}from"./IconRocket-DwevH86o.js";import"./FlashNotification-CUEjPccD.js";import"./use-disclosure-DdlN0XeZ.js";import"./IconInfoCircle-BU4LTY3o.js";import"./createReactComponent-BZslM3T3.js";import"./IconCircleX-C_rRrgjf.js";import"./useWebSockets-BSR8MU8Y.js";import"./index-BYaGWh-B.js";import"./useTaskGroupsStore-YIpScD4-.js";import"./reorder-DEPdcA2I.js";import"./_baseClone-j4chtsIi.js";import"./useTasksStore-c3WoVS5K.js";import"./use-computed-color-scheme-DxTmAknQ.js";import"./route-HpiTa34D.js";import"./get-style-object-DUJZA7T_.js";import"./user-IyQLa11_.js";import"./Avatar-BCESiNXx.js";import"./upper-first-sQkIoMXG.js";import"./IconLayoutList-CcvDTy9J.js";import"./IconUsers-DgTwuMK6.js";import"./ScrollArea-CoM5ddBT.js";import"./DirectionProvider-D0Syn9za.js";import"./useTranslation-BMED3SRO.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./datetime-ChC_71Zn.js";import"./IconMessage-Cma70nuv.js";import"./ActionIcon-CHZoSw_v.js";import"./get-sorted-breakpoints-CRzXWRXT.js";import"./Label-D22xLK7T.js";import"./ColorSwatch-Bl7DmEKn.js";import"./TaskGroupLabel-B428MXF0.js";import"./Pill-B1m13iod.js";import"./create-optional-context-D29aDTej.js";import"./task-_FQpNCw_.js";import"./Flex-CNYIBZmK.js";import"./Tooltip-DPD_X-vc.js";import"./use-floating-auto-update-B-_0Oi9q.js";import"./use-resolved-styles-api-D8xKo8RY.js";import"./Popover-aOZF2sDJ.js";function D(n,i){return t=>{if(typeof t!="string"||t.trim().length===0)throw new Error(i);return`${n}-${t}`}}const[vo,T]=E("Accordion component was not found in the tree"),[fo,F]=E("Accordion.Item component was not found in the tree");var A={root:"m_9bdbb667",panel:"m_df78851f",content:"m_4ba554d4",itemTitle:"m_8fa820a0",control:"m_4ba585b8","control--default":"m_6939a5e9","control--contained":"m_4271d21b",label:"m_df3ffa0f",chevron:"m_3f35ae96",icon:"m_9bd771fe",item:"m_9bd7b098","item--default":"m_fe19b709","item--contained":"m_1f921b3b","item--filled":"m_2cdf939a","item--separated":"m_9f59b069"};const xo={},k=R((n,i)=>{const{classNames:t,className:e,style:d,styles:c,vars:f,chevron:m,icon:p,onClick:l,onKeyDown:s,children:S,disabled:I,mod:_,...w}=C("AccordionControl",xo,n),{value:v}=F(),r=T(),x=r.isItemActive(v),W=typeof r.order=="number",P=`h${r.order}`,b=o.jsxs(G,{...w,...r.getStyles("control",{className:e,classNames:t,style:d,styles:c,variant:r.variant}),unstyled:r.unstyled,mod:["accordion-control",{active:x,"chevron-position":r.chevronPosition,disabled:I},_],ref:i,onClick:j=>{l==null||l(j),r.onChange(v)},type:"button",disabled:I,"aria-expanded":x,"aria-controls":r.getRegionId(v),id:r.getControlId(v),onKeyDown:so({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:r.loop,orientation:"vertical",onKeyDown:s}),children:[o.jsx(g,{component:"span",mod:{rotate:!r.disableChevronRotation&&x,position:r.chevronPosition},...r.getStyles("chevron",{classNames:t,styles:c}),children:m||r.chevron}),o.jsx("span",{...r.getStyles("label",{classNames:t,styles:c}),children:S}),p&&o.jsx(g,{component:"span",mod:{"chevron-position":r.chevronPosition},...r.getStyles("icon",{classNames:t,styles:c}),children:p})]});return W?o.jsx(P,{...r.getStyles("itemTitle",{classNames:t,styles:c}),children:b}):b});k.displayName="@mantine/core/AccordionControl";k.classes=A;const yo={},$=R((n,i)=>{const{classNames:t,className:e,style:d,styles:c,vars:f,value:m,mod:p,...l}=C("AccordionItem",yo,n),s=T();return o.jsx(fo,{value:{value:m},children:o.jsx(g,{ref:i,mod:[{active:s.isItemActive(m)},p],...s.getStyles("item",{className:e,classNames:t,styles:c,style:d,variant:s.variant}),...l})})});$.displayName="@mantine/core/AccordionItem";$.classes=A;const go={},B=R((n,i)=>{const{classNames:t,className:e,style:d,styles:c,vars:f,children:m,...p}=C("AccordionPanel",go,n),{value:l}=F(),s=T();return o.jsx(to,{ref:i,...s.getStyles("panel",{className:e,classNames:t,style:d,styles:c}),...p,in:s.isItemActive(l),transitionDuration:s.transitionDuration??200,role:"region",id:s.getRegionId(l),"aria-labelledby":s.getControlId(l),children:o.jsx("div",{...s.getStyles("content",{classNames:t,styles:c}),children:m})})});B.displayName="@mantine/core/AccordionPanel";B.classes=A;const Ao={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevron:o.jsx(M,{})},Io=X((n,{transitionDuration:i,chevronSize:t,radius:e})=>({root:{"--accordion-transition-duration":i===void 0?void 0:`${i}ms`,"--accordion-chevron-size":t===void 0?void 0:y(t),"--accordion-radius":e===void 0?void 0:Y(e)}}));function a(n){const i=C("Accordion",Ao,n),{classNames:t,className:e,style:d,styles:c,unstyled:f,vars:m,children:p,multiple:l,value:s,defaultValue:S,onChange:I,id:_,loop:w,transitionDuration:v,disableChevronRotation:r,chevronPosition:x,chevronSize:W,order:P,chevron:b,variant:j,radius:_o,...H}=i,N=J(_),[h,K]=ao({value:s,defaultValue:S,finalValue:l?[]:null,onChange:I}),U=u=>Array.isArray(h)?h.includes(u):u===h,q=u=>{const L=Array.isArray(h)?h.includes(u)?h.filter(O=>O!==u):[...h,u]:u===h?null:u;K(L)},z=Q({name:"Accordion",classes:A,props:i,className:e,style:d,classNames:t,styles:c,unstyled:f,vars:m,varsResolver:Io});return o.jsx(vo,{value:{isItemActive:U,onChange:q,getControlId:D(`${N}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:D(`${N}-panel`,"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:v,disableChevronRotation:r,chevronPosition:x,order:P,chevron:b,loop:w,getStyles:z,variant:j,unstyled:f},children:o.jsx(g,{...z("root"),id:N,...H,variant:j,"data-accordion":!0,children:p})})}const bo=n=>n;a.extend=bo;a.withProps=V(a);a.classes=A;a.displayName="@mantine/core/Accordion";a.Item=$;a.Panel=B;a.Control=k;a.Chevron=M;const jo="_accordionControl_i0t8x_1",Co={accordionControl:jo},So=()=>{var t;let{projects:n}=Z().props;n=n.filter(e=>e.tasks.length);let i=n.filter(e=>e.favorite).map(e=>e.id.toString());return i.length===0&&(i=((t=n[0])==null?void 0:t.id.toString())||""),o.jsxs(o.Fragment,{children:[o.jsxs(ro,{fz:14,mb:30,children:[o.jsx("div",{children:"My Work"}),o.jsx("div",{children:"Tasks"})]}),o.jsx(io,{order:1,mb:20,children:"Tasks assigned to you"}),o.jsx(g,{maw:1e3,children:n.length?o.jsx(a,{variant:"separated",radius:"md",multiple:!0,defaultValue:i,children:n.map(e=>o.jsxs(a.Item,{value:e.id.toString(),className:Co.accordionControl,children:[o.jsx(a.Control,{icon:e.favorite?o.jsx(co,{style:{color:"var(--mantine-color-yellow-4)",width:y(20),height:y(20)}}):o.jsx(lo,{style:{width:y(20),height:y(20)}}),children:o.jsx(mo,{fz:20,fw:600,children:e.name})}),o.jsx(a.Panel,{children:o.jsx(po,{gap:8,children:e.tasks.map(d=>o.jsx(no,{task:d},d.id))})})]},e.id))}):o.jsx(ho,{mih:300,children:o.jsx(oo,{title:"All caught up!",subtitle:"No tasks assigned at the moment",icon:uo})})})]})};So.layout=n=>o.jsx(eo,{title:"My Tasks",children:n});export{So as default};
