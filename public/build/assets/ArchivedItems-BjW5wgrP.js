import{j as e}from"./app-CWuogeuA.js";import{u as m}from"./use-computed-color-scheme-DxTmAknQ.js";import{F as a}from"./Flex-CNYIBZmK.js";import{T as c}from"./Title-bWYyVAL-.js";import{T as i}from"./Text-DBjpm_Fk.js";import l from"./ArchivedTask-DTA-65Ir.js";import h from"./ArchivedTaskGroup-t3t_5Q8m.js";function d({title:o,subtitle:r}){const s=m();return e.jsxs(a,{gap:"xs",justify:"center",align:"center",direction:"column",wrap:"nowrap",mih:"80vh",opacity:.5,children:[e.jsx(c,{order:2,ta:"center",c:s==="light"?"gray.8":"gray",children:o}),e.jsx(i,{size:"sm",ta:"center",c:"gray.6",children:r})]})}function p({groups:o,tasks:r}){const s=Object.keys(r).some(t=>r[t].length>0);return o.length||s?e.jsxs(e.Fragment,{children:[s&&e.jsxs(e.Fragment,{children:[e.jsx(i,{fz:24,fw:600,mb:20,children:"Tasks"}),Object.keys(r).map(t=>r[t].map(n=>e.jsx(l,{task:n},`task-${n.id}`)))]}),o.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(i,{fz:24,fw:600,mt:35,mb:20,children:"Task groups"}),o.map(t=>e.jsx(h,{group:t},`group-${t.id}`))]})]}):e.jsx(d,{title:"No tasks or groups found",subtitle:"or none match your search criteria"})}const b=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"}));export{p as A,d as E,b as a};