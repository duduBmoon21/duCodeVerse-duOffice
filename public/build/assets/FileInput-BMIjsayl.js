import{b as f,d as _,ai as N,j as t,a4 as O,f as T,a2 as z}from"./app-CWuogeuA.js";import{I as D}from"./Input-BJ3Z7SeR.js";import{I as B}from"./InputBase-CS0Y85uP.js";import{u as M}from"./use-uncontrolled-Dq7POLQj.js";const U={multiple:!1},V=f.forwardRef((e,r)=>{const{onChange:l,children:i,multiple:m,accept:d,name:h,form:y,resetRef:o,disabled:g,capture:x,inputProps:j,...C}=_("FileButton",U,e),a=f.useRef(),F=()=>{var s;!g&&((s=a.current)==null||s.click())},u=s=>{l(m?Array.from(s.currentTarget.files):s.currentTarget.files[0]||null)};return N(o,()=>{a.current.value=""}),t.jsxs(t.Fragment,{children:[i({onClick:F,...C}),t.jsx("input",{style:{display:"none"},type:"file",accept:d,multiple:m,onChange:u,ref:O(r,a),name:h,form:y,capture:x,...j})]})});V.displayName="@mantine/core/FileButton";const $=({value:e})=>t.jsx("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Array.isArray(e)?e.map(r=>r.name).join(", "):e==null?void 0:e.name}),q={valueComponent:$},I=T((e,r)=>{const l=_("FileInput",q,e),{unstyled:i,vars:m,onChange:d,value:h,defaultValue:y,multiple:o,accept:g,name:x,form:j,valueComponent:C,clearable:a,clearButtonProps:F,readOnly:u,capture:P,fileInputProps:s,rightSection:w,size:A,placeholder:S,...v}=l,c=f.useRef(null),[n,b]=M({value:h,defaultValue:y,onChange:d,finalValue:o?[]:null}),R=Array.isArray(n)?n.length!==0:n!==null,k=w||(a&&R&&!u?t.jsx(z,{...F,variant:"subtle",onClick:()=>b(o?[]:null),size:A,unstyled:i}):null);f.useEffect(()=>{var p;(Array.isArray(n)&&n.length===0||n===null)&&((p=c.current)==null||p.call(c))},[n]);const E=C;return t.jsx(V,{onChange:b,multiple:o,accept:g,name:x,form:j,resetRef:c,disabled:u,capture:P,inputProps:s,children:p=>t.jsx(B,{component:"button",ref:r,rightSection:k,...p,...v,__staticSelector:"FileInput",multiline:!0,type:"button",pointer:!0,__stylesApiProps:l,unstyled:i,size:A,children:R?t.jsx(E,{value:n}):t.jsx(D.Placeholder,{children:S})})})});I.classes=B.classes;I.displayName="@mantine/core/FileInput";const L=I;export{L as F};