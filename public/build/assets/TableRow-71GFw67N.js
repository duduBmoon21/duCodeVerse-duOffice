import{j as e,G as o,c as n}from"./app-CWuogeuA.js";import{T as l}from"./TableRowActions-BoBYXahe.js";import{g as c}from"./user-IyQLa11_.js";import{T as i}from"./Table-DBjO8eKt.js";import{A as a}from"./Avatar-BCESiNXx.js";import{T as t}from"./Text-DBjpm_Fk.js";import{B as m}from"./Badge--AGtcWOL.js";import"./route-HpiTa34D.js";import"./_baseClone-j4chtsIi.js";import"./index-DzNBzU-A.js";import"./ConfirmModal-BiBfjp2e.js";import"./ActionIcon-CHZoSw_v.js";import"./IconPencil-Cp32rb9d.js";import"./createReactComponent-BZslM3T3.js";import"./Menu-LLfB-uq4.js";import"./use-resolved-styles-api-D8xKo8RY.js";import"./Popover-aOZF2sDJ.js";import"./DirectionProvider-D0Syn9za.js";import"./use-floating-auto-update-B-_0Oi9q.js";import"./use-uncontrolled-Dq7POLQj.js";import"./IconDots-CYpA-CHs.js";import"./IconArchive-Bkr4SLne.js";import"./ScrollArea-CoM5ddBT.js";function k({item:r}){return e.jsxs(i.Tr,{children:[e.jsx(i.Td,{children:e.jsxs(o,{gap:"sm",children:[e.jsx(a,{src:r.avatar,size:40,radius:40,color:"blue",alt:r.name,children:c(r.name)}),e.jsxs("div",{children:[e.jsx(t,{fz:"sm",fw:500,children:r.name}),e.jsx(t,{fz:"xs",c:"dimmed",children:r.job_title})]})]})}),e.jsxs(i.Td,{children:[e.jsx(t,{fz:"sm",children:r.email}),e.jsx(t,{fz:"xs",c:"dimmed",children:"Email"})]}),e.jsx(i.Td,{children:e.jsx(o,{gap:"sm",children:r.companies.map(s=>e.jsx(n,{href:route("clients.companies.edit",s.id),children:e.jsx(m,{variant:"light",color:"grape",tt:"unset",children:s.name})},s.id))})}),(can("edit client user")||can("archive client user")||can("restore client user"))&&e.jsx(i.Td,{children:e.jsx(l,{item:r,editRoute:"clients.users.edit",editPermission:"edit client user",archivePermission:"archive client user",restorePermission:"restore client user",archive:{route:"clients.users.destroy",title:"Archive client",content:`Are you sure you want to archive this client? This action will prevent
                the client from logging in, while all other aspects related to the
                client's actions will remain unaffected.`,confirmLabel:"Archive"},restore:{route:"clients.users.restore",title:"Restore client",content:"Are you sure you want to restore this client? This action will allow the client to login.",confirmLabel:"Restore"}})})]},r.id)}export{k as default};
