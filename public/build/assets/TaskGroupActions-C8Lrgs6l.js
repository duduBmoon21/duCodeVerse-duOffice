import{j as r,G as d,r as o}from"./app-CWuogeuA.js";import{o as i}from"./ConfirmModal-BiBfjp2e.js";import{u as s}from"./index-DzNBzU-A.js";import u from"./EditTasksGroupModal-Dy-oAmcM.js";import{M as t}from"./Menu-LLfB-uq4.js";import{A as h}from"./ActionIcon-CHZoSw_v.js";import{I as f,a as k}from"./IconDots-CYpA-CHs.js";import{I as j}from"./IconPencil-Cp32rb9d.js";import{I as v}from"./IconArchive-Bkr4SLne.js";import"./Text-DBjpm_Fk.js";import"./useForm-CE__LUR5.js";import"./TextInput-B7I0J4Fq.js";import"./InputBase-CS0Y85uP.js";import"./Input-BJ3Z7SeR.js";import"./create-optional-context-D29aDTej.js";import"./Flex-CNYIBZmK.js";import"./use-resolved-styles-api-D8xKo8RY.js";import"./Popover-aOZF2sDJ.js";import"./DirectionProvider-D0Syn9za.js";import"./use-floating-auto-update-B-_0Oi9q.js";import"./use-uncontrolled-Dq7POLQj.js";import"./createReactComponent-BZslM3T3.js";function B({group:e,...a}){const n=s("delete",route("projects.task-groups.destroy",[e.project_id,e.id])),c=s("post",route("projects.task-groups.restore",[e.project_id,e.id])),p=()=>i({type:"danger",title:"Archive task group",content:"Are you sure you want to archive this task group?",confirmLabel:"Archive",confirmProps:{color:"red"},onConfirm:()=>n.submit({preserveScroll:!0})}),m=()=>i({type:"info",title:"Restore task group",content:"Are you sure you want to restore this task group?",confirmLabel:"Restore",confirmProps:{color:"blue"},onConfirm:()=>c.submit({preserveScroll:!0})}),l=()=>u(e);return r.jsx(d,{gap:0,justify:"flex-end",...a,children:(can("archive task group")&&!route().params.archived||can("restore task group")&&route().params.archived||can("edit task group")&&!route().params.archived)&&r.jsxs(t,{withArrow:!0,position:"bottom-end",withinPortal:!0,shadow:"md",transitionProps:{duration:100,transition:"pop-top-right"},offset:{mainAxis:3,alignmentAxis:5},children:[r.jsx(t.Target,{children:r.jsx(h,{variant:"subtle",color:"gray",children:r.jsx(f,{style:{width:o(20),height:o(20)},stroke:1.5})})}),r.jsxs(t.Dropdown,{children:[can("edit task group")&&!route().params.archived&&r.jsx(t.Item,{leftSection:r.jsx(j,{style:{width:o(16),height:o(16)},stroke:1.5}),onClick:l,children:"Edit"}),can("restore task group")&&route().params.archived&&r.jsx(t.Item,{leftSection:r.jsx(k,{style:{width:o(16),height:o(16)},stroke:1.5}),color:"blue",onClick:m,children:"Restore"}),can("archive task group")&&!route().params.archived&&r.jsx(t.Item,{leftSection:r.jsx(v,{style:{width:o(16),height:o(16)},stroke:1.5}),color:"red",onClick:p,children:"Archive"})]})]})})}export{B as default};
