import{N,d as R,b as i,e as S,j as p,B as u,h,m as k}from"./app-CWuogeuA.js";var d={root:"m_9e117634"};const B={},P=h((a,{radius:s,fit:e})=>({root:{"--image-radius":s===void 0?void 0:k(s),"--image-object-fit":e}})),g=N((a,s)=>{const e=R("Image",B,a),{classNames:f,className:y,style:v,styles:x,unstyled:j,vars:I,onError:o,src:t,radius:_,fit:F,fallbackSrc:r,mod:c,...m}=e,[b,l]=i.useState(!t);i.useEffect(()=>l(!t),[t]);const n=S({name:"Image",classes:d,props:e,className:y,style:v,classNames:f,styles:x,unstyled:j,vars:I,varsResolver:P});return b&&r?p.jsx(u,{component:"img",ref:s,src:r,...n("root"),onError:o,mod:["fallback",c],...m}):p.jsx(u,{component:"img",ref:s,...n("root"),src:t,onError:E=>{o==null||o(E),l(!0)},mod:c,...m})});g.classes=d;g.displayName="@mantine/core/Image";export{g as I};