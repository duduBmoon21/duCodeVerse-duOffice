import{j as r,G as l,r as o}from"./app-CWuogeuA.js";import{o as s}from"./ConfirmModal-BiBfjp2e.js";import{u as i}from"./index-DzNBzU-A.js";import{M as t}from"./Menu-LLfB-uq4.js";import{A as h}from"./ActionIcon-CHZoSw_v.js";import{I as d,a as u}from"./IconDots-CYpA-CHs.js";import{I as f}from"./IconArchive-Bkr4SLne.js";import"./Text-DBjpm_Fk.js";import"./use-resolved-styles-api-D8xKo8RY.js";import"./Popover-aOZF2sDJ.js";import"./DirectionProvider-D0Syn9za.js";import"./use-floating-auto-update-B-_0Oi9q.js";import"./use-uncontrolled-Dq7POLQj.js";import"./createReactComponent-BZslM3T3.js";function S({task:e,...n}){const a=i("delete",route("projects.tasks.destroy",[e.project_id,e.id])),c=i("post",route("projects.tasks.restore",[e.project_id,e.id])),m=()=>s({type:"danger",title:"Archive task",content:"Are you sure you want to archive this task?",confirmLabel:"Archive",confirmProps:{color:"red"},onConfirm:()=>a.submit({preserveScroll:!0})}),p=()=>s({type:"info",title:"Restore task",content:"Are you sure you want to restore this task?",confirmLabel:"Restore",confirmProps:{color:"blue"},onConfirm:()=>c.submit({preserveScroll:!0})});return r.jsx(l,{gap:0,justify:"flex-end",...n,children:(can("archive task")&&!route().params.archived||can("restore task")&&route().params.archived)&&r.jsxs(t,{withArrow:!0,position:"bottom-end",withinPortal:!0,shadow:"md",transitionProps:{duration:100,transition:"pop-top-right"},offset:{mainAxis:3,alignmentAxis:5},children:[r.jsx(t.Target,{children:r.jsx(h,{variant:"subtle",color:"gray",children:r.jsx(d,{style:{width:o(20),height:o(20)},stroke:1.5})})}),r.jsxs(t.Dropdown,{children:[can("restore task")&&route().params.archived&&r.jsx(t.Item,{leftSection:r.jsx(u,{style:{width:o(16),height:o(16)},stroke:1.5}),color:"blue",onClick:p,children:"Restore"}),can("archive task")&&!route().params.archived&&r.jsx(t.Item,{leftSection:r.jsx(f,{style:{width:o(16),height:o(16)},stroke:1.5}),color:"red",onClick:m,children:"Archive"})]})]})})}export{S as default};
