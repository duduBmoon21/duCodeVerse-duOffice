import{q as n,j as r,G as c,a as u}from"./app-CWuogeuA.js";import{S as d,A as x}from"./SearchInput-BFWr_vAA.js";import{p as j,a as h,T as b,b as f,P as g}from"./table-CJSrhknK.js";import{M as y}from"./MainLayout-CE7MuGsf.js";import{a as T,b as s}from"./route-HpiTa34D.js";import C from"./TableRow-C-fAL_BS.js";import{G as i}from"./Grid-COkziOVk.js";import{I as S}from"./IconPlus-CTmqzJPW.js";import{T as e}from"./Table-DBjO8eKt.js";import"./use-disclosure-DdlN0XeZ.js";import"./Tooltip-DPD_X-vc.js";import"./DirectionProvider-D0Syn9za.js";import"./use-floating-auto-update-B-_0Oi9q.js";import"./get-style-object-DUJZA7T_.js";import"./ActionIcon-CHZoSw_v.js";import"./IconArchive-Bkr4SLne.js";import"./createReactComponent-BZslM3T3.js";import"./TextInput-B7I0J4Fq.js";import"./InputBase-CS0Y85uP.js";import"./Input-BJ3Z7SeR.js";import"./create-optional-context-D29aDTej.js";import"./IconSearch-D7lV0oNS.js";import"./IconX-BOXkk-2Q.js";import"./Menu-LLfB-uq4.js";import"./use-resolved-styles-api-D8xKo8RY.js";import"./Popover-aOZF2sDJ.js";import"./use-uncontrolled-Dq7POLQj.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./Text-DBjpm_Fk.js";import"./Center-DiF0sA08.js";import"./FlashNotification-CUEjPccD.js";import"./IconInfoCircle-BU4LTY3o.js";import"./IconCircleX-C_rRrgjf.js";import"./useWebSockets-BSR8MU8Y.js";import"./index-BYaGWh-B.js";import"./useTaskGroupsStore-YIpScD4-.js";import"./reorder-DEPdcA2I.js";import"./_baseClone-j4chtsIi.js";import"./useTasksStore-c3WoVS5K.js";import"./use-computed-color-scheme-DxTmAknQ.js";import"./user-IyQLa11_.js";import"./Avatar-BCESiNXx.js";import"./upper-first-sQkIoMXG.js";import"./IconLayoutList-CcvDTy9J.js";import"./IconUsers-DgTwuMK6.js";import"./ScrollArea-CoM5ddBT.js";import"./useTranslation-BMED3SRO.js";import"./EmptyWithIcon-Ed5vXGFV.js";import"./datetime-ChC_71Zn.js";import"./IconMessage-Cma70nuv.js";import"./Title-bWYyVAL-.js";import"./get-sorted-breakpoints-CRzXWRXT.js";import"./useRoles-B9NxArVJ.js";import"./Badge--AGtcWOL.js";import"./TableRowActions-BoBYXahe.js";import"./index-DzNBzU-A.js";import"./ConfirmModal-BiBfjp2e.js";import"./IconPencil-Cp32rb9d.js";import"./IconDots-CYpA-CHs.js";import"./currency-DZ4b1XLM.js";import"./Flex-CNYIBZmK.js";import"./get-base-value-JqT_q0U7.js";const w=()=>{const{items:t}=n().props,m=j([{label:"User",column:"name"},{label:"Role",sortable:!1},{label:"Email",column:"email"},{label:"Rate",column:"rate",visible:can("view user rate")},{label:"Actions",sortable:!1,visible:h("user")}]),p=t.data.length?t.data.map(o=>r.jsx(C,{item:o},o.id)):r.jsx(b,{colSpan:m.length}),a=o=>s({search:o}),l=o=>s(o);return r.jsxs(r.Fragment,{children:[r.jsxs(i,{justify:"space-between",align:"center",children:[r.jsx(i.Col,{span:"content",children:r.jsxs(c,{children:[r.jsx(d,{placeholder:"Search users",search:a}),r.jsx(x,{})]})}),r.jsx(i.Col,{span:"content",children:can("create user")&&r.jsx(u,{leftSection:r.jsx(S,{size:14}),radius:"xl",onClick:()=>T("users.create"),children:"Create"})})]}),r.jsx(e.ScrollContainer,{miw:800,my:"lg",children:r.jsxs(e,{verticalSpacing:"sm",children:[r.jsx(f,{columns:m,sort:l}),r.jsx(e.Tbody,{children:p})]})}),r.jsx(g,{current:t.meta.current_page,pages:t.meta.last_page})]})};w.layout=t=>r.jsx(y,{title:"Users",children:t});export{w as default};