import{j as r,G as a}from"./app-CWuogeuA.js";import{A as p}from"./ActionButton-1oerYmGA.js";import{B as s}from"./BackButton-38sLd19F.js";import{u as l}from"./useForm-CE__LUR5.js";import{C as n}from"./ContainerBox-Dh3CZYdL.js";import{M as c}from"./MainLayout-CE7MuGsf.js";import{a as d}from"./route-HpiTa34D.js";import{B as u}from"./Breadcrumbs-D_Kk8znN.js";import{A as x}from"./Anchor-BBg-j18l.js";import{G as e}from"./Grid-COkziOVk.js";import{T as f}from"./Title-bWYyVAL-.js";import{T as h}from"./TextInput-B7I0J4Fq.js";import{C as j}from"./ColorInput-CgxhKx1F.js";import"./createReactComponent-BZslM3T3.js";import"./index-DzNBzU-A.js";import"./FlashNotification-CUEjPccD.js";import"./use-disclosure-DdlN0XeZ.js";import"./IconInfoCircle-BU4LTY3o.js";import"./IconCircleX-C_rRrgjf.js";import"./useWebSockets-BSR8MU8Y.js";import"./index-BYaGWh-B.js";import"./useTaskGroupsStore-YIpScD4-.js";import"./reorder-DEPdcA2I.js";import"./_baseClone-j4chtsIi.js";import"./useTasksStore-c3WoVS5K.js";import"./use-computed-color-scheme-DxTmAknQ.js";import"./Text-DBjpm_Fk.js";import"./get-style-object-DUJZA7T_.js";import"./user-IyQLa11_.js";import"./Menu-LLfB-uq4.js";import"./use-resolved-styles-api-D8xKo8RY.js";import"./Popover-aOZF2sDJ.js";import"./DirectionProvider-D0Syn9za.js";import"./use-floating-auto-update-B-_0Oi9q.js";import"./use-uncontrolled-Dq7POLQj.js";import"./Avatar-BCESiNXx.js";import"./upper-first-sQkIoMXG.js";import"./IconLayoutList-CcvDTy9J.js";import"./IconUsers-DgTwuMK6.js";import"./ScrollArea-CoM5ddBT.js";import"./useTranslation-BMED3SRO.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./EmptyWithIcon-Ed5vXGFV.js";import"./datetime-ChC_71Zn.js";import"./IconMessage-Cma70nuv.js";import"./ActionIcon-CHZoSw_v.js";import"./Center-DiF0sA08.js";import"./get-sorted-breakpoints-CRzXWRXT.js";import"./get-base-value-JqT_q0U7.js";import"./InputBase-CS0Y85uP.js";import"./Input-BJ3Z7SeR.js";import"./create-optional-context-D29aDTej.js";import"./ColorPicker-D_03y0_n.js";import"./ColorSwatch-Bl7DmEKn.js";import"./clamp-DTmYCdls.js";const C=()=>{const[o,m,i]=l("post",route("settings.labels.store"),{name:"",color:""});return r.jsxs(r.Fragment,{children:[r.jsxs(u,{fz:14,mb:30,children:[r.jsx(x,{href:"#",onClick:()=>d("settings.labels.index"),fz:14,children:"Labels"}),r.jsx("div",{children:"Create"})]}),r.jsxs(e,{justify:"space-between",align:"flex-end",gutter:"xl",mb:"lg",children:[r.jsx(e.Col,{span:"auto",children:r.jsx(f,{order:1,children:"Create label"})}),r.jsx(e.Col,{span:"content"})]}),r.jsx(n,{maw:400,children:r.jsxs("form",{onSubmit:m,children:[r.jsx(h,{label:"Name",placeholder:"Label name",required:!0,value:o.data.name,onChange:t=>i("name",t.target.value),error:o.errors.name}),r.jsx(j,{label:"Color",placeholder:"Label color",required:!0,mt:"md",swatches:["#343A40","#E03231","#C2255C","#9C36B5","#6741D9","#3B5BDB","#2771C2","#2A8599","#2B9267","#309E44","#66A810","#F08C00","#E7590D"],swatchesPerRow:7,value:o.data.color,onChange:t=>i("color",t),error:o.errors.color}),r.jsxs(a,{justify:"space-between",mt:"xl",children:[r.jsx(s,{route:"settings.labels.index"}),r.jsx(p,{loading:o.processing,children:"Create"})]})]})})]})};C.layout=o=>r.jsx(c,{title:"Create label",children:o});export{C as default};