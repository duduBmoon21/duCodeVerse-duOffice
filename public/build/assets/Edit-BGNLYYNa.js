import{q as p,j as r,G as n}from"./app-CWuogeuA.js";import{A as d}from"./ActionButton-1oerYmGA.js";import{u}from"./useForm-CE__LUR5.js";import{C as c}from"./ContainerBox-Dh3CZYdL.js";import{M as h}from"./MainLayout-CE7MuGsf.js";import{g as f}from"./user-IyQLa11_.js";import{G as i}from"./Grid-COkziOVk.js";import{T as x}from"./Title-bWYyVAL-.js";import{A as j}from"./Avatar-BCESiNXx.js";import{F as g}from"./FileInput-BMIjsayl.js";import{T as v}from"./Text-DBjpm_Fk.js";import{A as b}from"./Anchor-BBg-j18l.js";import{T as m}from"./TextInput-B7I0J4Fq.js";import{D as w}from"./Divider-DOmUVigq.js";import{P as l}from"./PasswordInput-DXyXkjpU.js";import"./index-DzNBzU-A.js";import"./FlashNotification-CUEjPccD.js";import"./use-disclosure-DdlN0XeZ.js";import"./IconInfoCircle-BU4LTY3o.js";import"./createReactComponent-BZslM3T3.js";import"./IconCircleX-C_rRrgjf.js";import"./useWebSockets-BSR8MU8Y.js";import"./index-BYaGWh-B.js";import"./useTaskGroupsStore-YIpScD4-.js";import"./reorder-DEPdcA2I.js";import"./_baseClone-j4chtsIi.js";import"./useTasksStore-c3WoVS5K.js";import"./use-computed-color-scheme-DxTmAknQ.js";import"./route-HpiTa34D.js";import"./get-style-object-DUJZA7T_.js";import"./Menu-LLfB-uq4.js";import"./use-resolved-styles-api-D8xKo8RY.js";import"./Popover-aOZF2sDJ.js";import"./DirectionProvider-D0Syn9za.js";import"./use-floating-auto-update-B-_0Oi9q.js";import"./use-uncontrolled-Dq7POLQj.js";import"./upper-first-sQkIoMXG.js";import"./IconLayoutList-CcvDTy9J.js";import"./IconUsers-DgTwuMK6.js";import"./ScrollArea-CoM5ddBT.js";import"./useTranslation-BMED3SRO.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./EmptyWithIcon-Ed5vXGFV.js";import"./datetime-ChC_71Zn.js";import"./IconMessage-Cma70nuv.js";import"./ActionIcon-CHZoSw_v.js";import"./Center-DiF0sA08.js";import"./get-sorted-breakpoints-CRzXWRXT.js";import"./get-base-value-JqT_q0U7.js";import"./Input-BJ3Z7SeR.js";import"./create-optional-context-D29aDTej.js";import"./InputBase-CS0Y85uP.js";const C=()=>{const{user:t}=p().props,[e,s,a]=u("post",route("account.profile.update",t.id),{_method:"put",avatar:null,job_title:t.job_title,name:t.name,phone:t.phone||"",email:t.email,password:"",password_confirmation:""});return r.jsxs(r.Fragment,{children:[r.jsxs(i,{justify:"space-between",align:"flex-end",gutter:"xl",mb:"lg",children:[r.jsx(i.Col,{span:"auto",children:r.jsx(x,{order:1,children:"My Profile"})}),r.jsx(i.Col,{span:"content"})]}),r.jsx(c,{maw:600,children:r.jsxs("form",{onSubmit:o=>s(o,{forceFormData:!0}),children:[r.jsxs(i,{justify:"flex-start",align:"flex-start",gutter:"lg",children:[r.jsx(i.Col,{span:"content",children:r.jsx(j,{src:e.data.avatar===null?t.avatar:URL.createObjectURL(e.data.avatar),size:120,color:"blue",children:f(e.data.name)})}),r.jsxs(i.Col,{span:"auto",children:[r.jsx(g,{label:"Profile image",placeholder:"Choose image",accept:"image/png,image/jpeg",onChange:o=>a("avatar",o),clearable:!0,error:e.errors.avatar}),r.jsxs(v,{size:"xs",c:"dimmed",mt:"sm",children:["If no image is uploaded we will try to fetch it via"," ",r.jsx(b,{href:"https://unavatar.io",target:"_blank",opacity:.6,children:"unavatar.io"})," ","service."]})]})]}),r.jsx(m,{label:"Name",placeholder:"User full name",required:!0,mt:"md",value:e.data.name,onChange:o=>a("name",o.target.value),error:e.errors.name}),r.jsx(m,{label:"Job title",placeholder:"e.g. Frontend Developer",required:!0,mt:"md",value:e.data.job_title,onChange:o=>a("job_title",o.target.value),error:e.errors.job_title}),r.jsx(m,{label:"Phone",placeholder:"Users phone number",mt:"md",value:e.data.phone,onChange:o=>a("phone",o.target.value),error:e.errors.phone}),r.jsx(w,{mt:"xl",mb:"md",label:"Login credentials",labelPosition:"center"}),r.jsx(m,{label:"Email",placeholder:"User email",required:!0,value:e.data.email,onChange:o=>a("email",o.target.value),onBlur:()=>e.validate("email"),error:e.errors.email}),r.jsx(l,{label:"Password",placeholder:"User password",mt:"md",value:e.data.password,onChange:o=>a("password",o.target.value),error:e.errors.password}),r.jsx(l,{label:"Confirm password",placeholder:"Confirm password",mt:"md",value:e.data.password_confirmation,onChange:o=>a("password_confirmation",o.target.value),error:e.errors.password_confirmation}),r.jsx(n,{justify:"flex-end",mt:"xl",children:r.jsx(d,{loading:e.processing,children:"Update"})})]})})]})};C.layout=t=>r.jsx(h,{title:"Profile",children:t});export{C as default};