import{al as t,j as o}from"./app-CWuogeuA.js";import{T as r}from"./Text-DBjpm_Fk.js";const d=({type:e="info",title:n,content:i,confirmLabel:l,cancelLabel:s="Cancel",...a})=>{const c={info:"blue",warning:"orange",danger:"red"};t({title:o.jsx(r,{size:"xl",fw:700,children:n}),centered:!0,overlayProps:{backgroundOpacity:.55,blur:3},children:o.jsx(r,{size:"sm",children:i}),labels:{confirm:l,cancel:s},confirmProps:{color:c[e]},...a})};export{d as o};
