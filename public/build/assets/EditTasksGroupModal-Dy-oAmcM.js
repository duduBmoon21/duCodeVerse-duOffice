import{ap as a,j as r,a as p}from"./app-CWuogeuA.js";import{u as l}from"./useForm-CE__LUR5.js";import{T as n}from"./Text-DBjpm_Fk.js";import{T as i}from"./TextInput-B7I0J4Fq.js";import{F as d}from"./Flex-CNYIBZmK.js";import"./index-DzNBzU-A.js";import"./InputBase-CS0Y85uP.js";import"./Input-BJ3Z7SeR.js";import"./create-optional-context-D29aDTej.js";function c({item:e}){const[o,s,u]=l("post",route("projects.task-groups.update",[route().params.project,e.id]),{_method:"put",name:e.name||""}),m=t=>{s(t,{onSuccess:()=>a.closeAll(),preserveScroll:!0})};return r.jsxs("form",{onSubmit:m,children:[r.jsx(i,{label:"Name",placeholder:"Group name",required:!0,"data-autofocus":!0,value:o.data.name,onChange:t=>u("name",t.target.value),error:o.errors.name}),r.jsx(d,{justify:"flex-end",mt:"xl",children:r.jsx(p,{type:"submit",w:100,loading:o.processing,children:"Update"})})]})}const x=e=>{a.open({title:r.jsx(n,{size:"xl",fw:700,mb:-10,children:"Edit tasks group"}),centered:!0,padding:"xl",overlayProps:{backgroundOpacity:.55,blur:3},children:r.jsx(c,{item:e})})},E=x;export{E as default};