import{q as l,j as t,G as c,a as d}from"./app-CWuogeuA.js";import{S as x,A as j}from"./SearchInput-BFWr_vAA.js";import{p as u,a as h,T as b,b as f,P as C}from"./table-CJSrhknK.js";import{M as y}from"./MainLayout-CE7MuGsf.js";import{a as g,b as e}from"./route-HpiTa34D.js";import T from"./TableRow-Dqj7IxPW.js";import{G as i}from"./Grid-COkziOVk.js";import{I as S}from"./IconPlus-CTmqzJPW.js";import{T as m}from"./Table-DBjO8eKt.js";import"./use-disclosure-DdlN0XeZ.js";import"./Tooltip-DPD_X-vc.js";import"./DirectionProvider-D0Syn9za.js";import"./use-floating-auto-update-B-_0Oi9q.js";import"./get-style-object-DUJZA7T_.js";import"./ActionIcon-CHZoSw_v.js";import"./IconArchive-Bkr4SLne.js";import"./createReactComponent-BZslM3T3.js";import"./TextInput-B7I0J4Fq.js";import"./InputBase-CS0Y85uP.js";import"./Input-BJ3Z7SeR.js";import"./create-optional-context-D29aDTej.js";import"./IconSearch-D7lV0oNS.js";import"./IconX-BOXkk-2Q.js";import"./Menu-LLfB-uq4.js";import"./use-resolved-styles-api-D8xKo8RY.js";import"./Popover-aOZF2sDJ.js";import"./use-uncontrolled-Dq7POLQj.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./Text-DBjpm_Fk.js";import"./Center-DiF0sA08.js";import"./FlashNotification-CUEjPccD.js";import"./IconInfoCircle-BU4LTY3o.js";import"./IconCircleX-C_rRrgjf.js";import"./useWebSockets-BSR8MU8Y.js";import"./index-BYaGWh-B.js";import"./useTaskGroupsStore-YIpScD4-.js";import"./reorder-DEPdcA2I.js";import"./_baseClone-j4chtsIi.js";import"./useTasksStore-c3WoVS5K.js";import"./use-computed-color-scheme-DxTmAknQ.js";import"./user-IyQLa11_.js";import"./Avatar-BCESiNXx.js";import"./upper-first-sQkIoMXG.js";import"./IconLayoutList-CcvDTy9J.js";import"./IconUsers-DgTwuMK6.js";import"./ScrollArea-CoM5ddBT.js";import"./useTranslation-BMED3SRO.js";import"./EmptyWithIcon-Ed5vXGFV.js";import"./datetime-ChC_71Zn.js";import"./IconMessage-Cma70nuv.js";import"./Title-bWYyVAL-.js";import"./get-sorted-breakpoints-CRzXWRXT.js";import"./TableRowActions-BoBYXahe.js";import"./index-DzNBzU-A.js";import"./ConfirmModal-BiBfjp2e.js";import"./IconPencil-Cp32rb9d.js";import"./IconDots-CYpA-CHs.js";import"./Badge--AGtcWOL.js";import"./get-base-value-JqT_q0U7.js";const w=()=>{const{items:o}=l().props,p=u([{label:"Company",column:"name"},{label:"Email",column:"email"},{label:"Clients",sortable:!1},{label:"Actions",sortable:!1,visible:h("client company")}]),a=o.data.length?o.data.map(r=>t.jsx(T,{item:r},r.id)):t.jsx(b,{colSpan:p.length}),s=r=>e({search:r}),n=r=>e(r);return t.jsxs(t.Fragment,{children:[t.jsxs(i,{justify:"space-between",align:"center",children:[t.jsx(i.Col,{span:"content",children:t.jsxs(c,{children:[t.jsx(x,{placeholder:"Search companies",search:s}),t.jsx(j,{})]})}),t.jsx(i.Col,{span:"content",children:can("create client company")&&t.jsx(d,{leftSection:t.jsx(S,{size:14}),radius:"xl",onClick:()=>g("clients.companies.create"),children:"Create"})})]}),t.jsx(m.ScrollContainer,{miw:800,my:"lg",children:t.jsxs(m,{verticalSpacing:"sm",children:[t.jsx(f,{columns:p,sort:n}),t.jsx(m.Tbody,{children:a})]})}),t.jsx(C,{current:o.meta.current_page,pages:o.meta.last_page})]})};w.layout=o=>t.jsx(y,{title:"Clients",children:o});export{w as default};