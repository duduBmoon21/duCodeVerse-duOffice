import{j as r,B as l,G as a}from"./app-CWuogeuA.js";import{C as p}from"./Card-Cay6ppqK.js";import{E as c}from"./EmptyWithIcon-Ed5vXGFV.js";import{T as d}from"./TaskGroupLabel-B428MXF0.js";import{b as f,a as u}from"./datetime-ChC_71Zn.js";import{a as j}from"./route-HpiTa34D.js";import{u as x}from"./useTranslation-BMED3SRO.js";import{T as h}from"./Title-bWYyVAL-.js";import{D as _}from"./Divider-DOmUVigq.js";import{S as k}from"./ScrollArea-CoM5ddBT.js";import{S as m}from"./Stack-Dp1Xcxwn.js";import{T as s}from"./Text-DBjpm_Fk.js";import{T as n}from"./Tooltip-DPD_X-vc.js";import{C as b}from"./Center-DiF0sA08.js";import{I as T}from"./IconRocket-DwevH86o.js";import"./Card-C_bx3538.js";import"./use-computed-color-scheme-DxTmAknQ.js";import"./Pill-B1m13iod.js";import"./create-optional-context-D29aDTej.js";import"./_baseClone-j4chtsIi.js";import"./DirectionProvider-D0Syn9za.js";import"./use-floating-auto-update-B-_0Oi9q.js";import"./get-style-object-DUJZA7T_.js";import"./createReactComponent-BZslM3T3.js";const w="_task_1fkob_1",g="_link_1fkob_12",y="_due_1fkob_16",i={task:w,link:g,due:y};function V({tasks:t}){const{t:e}=x();return r.jsxs(p,{bg:"none",children:[r.jsxs(h,{order:3,ml:15,children:[e("overdue_tasks")," "]}),r.jsx(_,{my:14}),t.length>0?r.jsx(k,{h:300,scrollbarSize:7,children:r.jsx(m,{gap:10,children:t.map(o=>r.jsx(l,{className:i.task,children:r.jsxs(a,{wrap:"nowrap",justify:"space-between",children:[r.jsxs(m,{gap:3,children:[r.jsx(s,{fz:13,fw:600,onClick:()=>j("projects.tasks.open",[o.project_id,o.id]),className:i.link,children:o.name}),r.jsxs(a,{children:[r.jsx(n,{label:e("task_group_tooltip"),openDelay:500,withArrow:!0,children:r.jsx(d,{children:o.task_group.name})}),r.jsx(s,{fz:11,c:"dimmed",children:o.project.name})]})]}),r.jsx(n,{label:f(o.due_on),openDelay:500,withArrow:!0,children:r.jsx(s,{fz:11,c:"red",fw:700,className:i.due,children:u(o.due_on)})})]})},o.id))})}):r.jsx(b,{my:30,children:r.jsx(c,{title:e("all_done_title"),subtitle:e("no_overdue_tasks"),icon:T})})]})}export{V as default};
