import{j as r,G as a,c as t,r as i}from"./app-CWuogeuA.js";import{L as p}from"./Label-D22xLK7T.js";import{T as l}from"./TaskGroupLabel-B428MXF0.js";import{a as d}from"./datetime-ChC_71Zn.js";import{a as c}from"./route-HpiTa34D.js";import{i as n}from"./task-_FQpNCw_.js";import{s as u}from"./user-IyQLa11_.js";import{F as _}from"./Flex-CNYIBZmK.js";import{T as m}from"./Tooltip-DPD_X-vc.js";import{P as x}from"./Pill-B1m13iod.js";import{T as f}from"./Text-DBjpm_Fk.js";import"./ColorSwatch-Bl7DmEKn.js";import"./use-computed-color-scheme-DxTmAknQ.js";import"./_baseClone-j4chtsIi.js";import"./DirectionProvider-D0Syn9za.js";import"./use-floating-auto-update-B-_0Oi9q.js";import"./get-style-object-DUJZA7T_.js";import"./create-optional-context-D29aDTej.js";const h="_user_dbn3x_1",j="_task_dbn3x_17",w="_name_dbn3x_28",b="_completed_dbn3x_32",o={user:h,task:j,name:w,completed:b};function q({task:e}){return r.jsx(_,{className:`${o.task} ${e.completed_at!==null&&o.completed}`,wrap:"nowrap",children:r.jsxs(a,{gap:"sm",wrap:"nowrap",children:[r.jsx(m,{label:"Task group",openDelay:1e3,withArrow:!0,children:r.jsx(l,{size:"sm",children:e.task_group.name})}),e.assigned_to_user&&r.jsx(t,{href:route("users.edit",e.assigned_to_user.id),children:r.jsx(m,{label:e.assigned_to_user.name,openDelay:1e3,withArrow:!0,children:r.jsx(x,{size:"sm",className:o.user,children:u(e.assigned_to_user.name)})})}),r.jsx(m,{disabled:!n(e),label:`${d(e.due_on,!0)} overdue`,openDelay:1e3,withArrow:!0,children:r.jsxs(f,{className:o.name,size:"sm",fw:500,truncate:"end",c:n(e)&&e.completed_at===null?"red":"",onClick:()=>c("projects.tasks.open",[e.project_id,e.id]),children:["#",e.number+": "+e.name]})}),r.jsx(a,{wrap:"wrap",style:{rowGap:i(3),columnGap:i(12)},children:e.labels.map(s=>r.jsx(p,{name:s.name,color:s.color},s.id))})]})})}export{q as default};
