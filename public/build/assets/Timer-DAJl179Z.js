import{b as o,x as I,q as R,j as e,B as k,G as h,r as p,c as S}from"./app-CWuogeuA.js";import{h as w,u as N,i as T}from"./useTasksStore-c3WoVS5K.js";import{c as A}from"./datetime-ChC_71Zn.js";import{S as v}from"./Stack-Dp1Xcxwn.js";import{A as j}from"./ActionIcon-CHZoSw_v.js";import{c as g}from"./createReactComponent-BZslM3T3.js";import{T as P}from"./TextInput-B7I0J4Fq.js";import{I as C}from"./IconPlus-CTmqzJPW.js";import{T as f}from"./Text-DBjpm_Fk.js";import{I as E}from"./IconX-BOXkk-2Q.js";import{T as V}from"./Tooltip-DPD_X-vc.js";import{D as F}from"./Divider-DOmUVigq.js";import"./index-BYaGWh-B.js";import"./reorder-DEPdcA2I.js";import"./_baseClone-j4chtsIi.js";import"./InputBase-CS0Y85uP.js";import"./Input-BJ3Z7SeR.js";import"./create-optional-context-D29aDTej.js";import"./DirectionProvider-D0Syn9za.js";import"./use-floating-auto-update-B-_0Oi9q.js";import"./get-style-object-DUJZA7T_.js";function M(i,d,{autoInvoke:u=!1}={}){const[n,c]=o.useState(!1),r=o.useRef(),m=o.useRef(),l=()=>{c(_=>(!_&&!r.current&&(r.current=window.setInterval(m.current,d)),!0))},t=()=>{c(!1),window.clearInterval(r.current),r.current=void 0},x=()=>{n?t():l()};return o.useEffect(()=>(m.current=i,n&&l(),t),[i,n,d]),o.useEffect(()=>{u&&l()},[]),{start:l,stop:t,toggle:x,active:n}}/**
 * @license @tabler/icons-react v3.14.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var $=g("filled","player-play-filled","IconPlayerPlayFilled",[["path",{d:"M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.14.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var D=g("filled","player-stop-filled","IconPlayerStopFilled",[["path",{d:"M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z",key:"svg-0"}]]);function B(i){const[d,u]=o.useState(""),n=t=>t.minutes===null&&t.timer_start!==null,[c,r]=o.useState(i.time_logs.find(t=>n(t))),m=()=>{if(c){const t=Math.round((I().unix()-c.timer_start)/60);u(w(t))}},l=M(m,1e3);return o.useEffect(()=>{const t=i.time_logs.find(x=>n(x));return r(t),t?(m(),l.start()):(u(""),l.stop()),l.stop},[i.time_logs,c]),{timerValue:d,setTimerValue:u,isTimerRunning:n,runningTimer:c}}const G="_container_1xolz_1",q="_timer_1xolz_14",O="_input_1xolz_24",X="_invalid_1xolz_33",H="_list_1xolz_38",J="_row_1xolz_50",K="_summary_1xolz_67",Q="_blink_1xolz_72",U="_blinkAnimation_1xolz_1",a={container:G,timer:q,input:O,invalid:X,list:H,row:J,delete:"_delete_1xolz_52",summary:K,blink:Q,blinkAnimation:U};function _e({task:i,...d}){const{auth:{user:u}}=R().props,[n,c]=o.useState(0),{timerValue:r,setTimerValue:m,isTimerRunning:l,runningTimer:t}=B(i),{saveTimeLog:x,deleteTimerLog:_,startTimer:y,stopTimer:z}=N();return o.useEffect(()=>{c(i.time_logs.reduce((s,b)=>s+b.minutes,0)),m("")},[i.time_logs]),e.jsx(k,{className:a.container,...d,children:e.jsxs(v,{children:[can("add time log")?e.jsxs(h,{className:a.timer,justify:"space-between",wrap:"nowrap",children:[t?e.jsx(j,{size:32,radius:"xl",variant:"filled",onClick:()=>z(i,t.id),children:e.jsx(D,{style:{width:p(16),height:p(16)}})}):e.jsx(j,{size:32,radius:"xl",variant:"filled",onClick:()=>y(i),children:e.jsx($,{style:{width:p(16),height:p(16)}})}),e.jsx(h,{wrap:"nowrap",gap:5,children:e.jsx(P,{variant:"unstyled",size:"sm",placeholder:"0:00",readOnly:t!==void 0,className:`
                  ${a.input}
                  ${t?a.blink:null}
                  ${T(r)?null:r.length&&a.invalid}
                `,value:r,onChange:s=>{/^(\d|\.|,|:)*$/.test(s.currentTarget.value)&&m(s.currentTarget.value)}})}),e.jsx(j,{size:32,radius:"xl",variant:"filled",onClick:()=>x(i,r),disabled:!T(r)||t,children:e.jsx(C,{style:{width:p(16),height:p(16)},stroke:3})})]}):e.jsx(f,{ml:10,fz:15,fw:500,children:"Time logs"}),i.time_logs.length>0&&can("view time logs")&&e.jsxs(e.Fragment,{children:[e.jsx(v,{className:a.list,gap:5,children:i.time_logs.map(s=>e.jsxs(h,{wrap:"nowrap",justify:"space-between",className:a.row,children:[e.jsx(f,{fz:14,children:e.jsx(S,{href:route("users.edit",s.user_id),children:s.user.name})}),l(s)?e.jsx(f,{fz:14,fw:600,c:"blue",className:a.blink,children:"running"}):e.jsxs(h,{gap:7,children:[can("delete time log")&&s.user_id===u.id&&e.jsx(E,{className:a.delete,stroke:1.5,onClick:()=>_(i,s.id)}),e.jsx(V,{label:A(s.created_at),openDelay:250,withArrow:!0,children:e.jsxs(f,{fz:14,c:"dimmed",children:[w(s.minutes),"h"]})})]})]},s.id))}),e.jsx(F,{my:-5}),e.jsxs(h,{wrap:"nowrap",justify:"space-between",className:a.summary,children:[e.jsx(f,{fz:15,fw:500,children:"Total:"}),e.jsxs(f,{fw:600,children:[w(n),"h"]})]})]})]})})}export{_e as default};
