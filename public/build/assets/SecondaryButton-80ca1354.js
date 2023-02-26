import{e as m,r as u,b as Ie,a as M,j as Oe}from"./app-c68310f4.js";import{l as V,s as B,a as j,u as D,b as re,V as x,X as $,o as y,y as T,p as He,t as oe,f as we,T as Be,j as fe,c as je,d as pe,m as Ue,K}from"./transition-c7b6b338.js";var me;let N=(me=m.useId)!=null?me:function(){let e=V(),[t,n]=m.useState(e?()=>B.nextId():null);return j(()=>{t===null&&n(B.nextId())},[t]),t!=null?""+t:void 0};function le(e){return B.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let J=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var S=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(S||{}),Ee=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ee||{}),_e=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(_e||{});function We(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(J)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var be=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(be||{});function Ye(e,t=0){var n;return e===((n=le(e))==null?void 0:n.body)?!1:D(t,{[0](){return e.matches(J)},[1](){let r=e;for(;r!==null;){if(r.matches(J))return!0;r=r.parentElement}return!1}})}function A(e){e==null||e.focus({preventScroll:!0})}let Ge=["textarea","input"].join(",");function Ve(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Ge))!=null?n:!1}function qe(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),a=t(r);if(o===null||a===null)return 0;let l=o.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function W(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?n?qe(e):e:We(e);o.length>0&&l.length>1&&(l=l.filter(p=>!o.includes(p))),r=r??a.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(r))-1;if(t&4)return Math.max(0,l.indexOf(r))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},s=0,f=l.length,v;do{if(s>=f||s+f<=0)return 0;let p=d+s;if(t&16)p=(p+f)%f;else{if(p<0)return 3;if(p>=f)return 1}v=l[p],v==null||v.focus(c),s+=i}while(v!==a.activeElement);return t&6&&Ve(v)&&v.select(),v.hasAttribute("tabindex")||v.setAttribute("tabindex","0"),2}function Q(e,t,n){let r=re(t);u.useEffect(()=>{function o(a){r.current(a)}return document.addEventListener(e,o,n),()=>document.removeEventListener(e,o,n)},[e,n])}function Xe(e,t,n=!0){let r=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function o(l,i){if(!r.current||l.defaultPrevented)return;let d=function s(f){return typeof f=="function"?s(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e),c=i(l);if(c!==null&&c.getRootNode().contains(c)){for(let s of d){if(s===null)continue;let f=s instanceof HTMLElement?s:s.current;if(f!=null&&f.contains(c)||l.composed&&l.composedPath().includes(f))return}return!Ye(c,be.Loose)&&c.tabIndex!==-1&&l.preventDefault(),t(l,c)}}let a=u.useRef(null);Q("mousedown",l=>{var i,d;r.current&&(a.current=((d=(i=l.composedPath)==null?void 0:i.call(l))==null?void 0:d[0])||l.target)},!0),Q("click",l=>{!a.current||(o(l,()=>a.current),a.current=null)},!0),Q("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ze(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&Ke(n)?!1:r}function Ke(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let Qe="div";var Y=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Y||{});let Z=x(function(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return $({ourProps:o,theirProps:r,slot:{},defaultTag:Qe,name:"Hidden"})});var ye=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(ye||{});function xe(e,t){let n=u.useRef([]),r=y(e);u.useEffect(()=>{let o=[...n.current];for(let[a,l]of t.entries())if(n.current[a]!==l){let i=r(t,o);return n.current=t,i}},[r,...t])}function Je(e,t,n){let r=re(t);u.useEffect(()=>{function o(a){r.current(a)}return window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)},[e,n])}var H=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(H||{});function Ze(){let e=u.useRef(0);return Je("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function q(...e){return u.useMemo(()=>le(...e),[...e])}function ae(e,t,n,r){let o=re(n);u.useEffect(()=>{e=e??window;function a(l){o.current(l)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}let et="div";var $e=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))($e||{});let O=Object.assign(x(function(e,t){let n=u.useRef(null),r=T(n,t),{initialFocus:o,containers:a,features:l=30,...i}=e;V()||(l=1);let d=q(n);tt({ownerDocument:d},Boolean(l&16));let c=nt({ownerDocument:d,container:n,initialFocus:o},Boolean(l&2));rt({ownerDocument:d,container:n,containers:a,previousActiveElement:c},Boolean(l&8));let s=Ze(),f=y(w=>{let E=n.current;E&&(F=>F())(()=>{D(s.current,{[H.Forwards]:()=>{W(E,S.First,{skipElements:[w.relatedTarget]})},[H.Backwards]:()=>{W(E,S.Last,{skipElements:[w.relatedTarget]})}})})}),v=He(),p=u.useRef(!1),I={ref:r,onKeyDown(w){w.key=="Tab"&&(p.current=!0,v.requestAnimationFrame(()=>{p.current=!1}))},onBlur(w){let E=new Set(a==null?void 0:a.current);E.add(n);let F=w.relatedTarget;F instanceof HTMLElement&&F.dataset.headlessuiFocusGuard!=="true"&&(Te(E,F)||(p.current?W(n.current,D(s.current,{[H.Forwards]:()=>S.Next,[H.Backwards]:()=>S.Previous})|S.WrapAround,{relativeTo:w.target}):w.target instanceof HTMLElement&&A(w.target)))}};return m.createElement(m.Fragment,null,Boolean(l&4)&&m.createElement(Z,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:Y.Focusable}),$({ourProps:I,theirProps:i,defaultTag:et,name:"FocusTrap"}),Boolean(l&4)&&m.createElement(Z,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:Y.Focusable}))}),{features:$e});function tt({ownerDocument:e},t){let n=u.useRef(null);ae(e==null?void 0:e.defaultView,"focusout",o=>{!t||n.current||(n.current=o.target)},!0),xe(()=>{t||((e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&A(n.current),n.current=null)},[t]);let r=u.useRef(!1);u.useEffect(()=>(r.current=!1,()=>{r.current=!0,oe(()=>{!r.current||(A(n.current),n.current=null)})}),[])}function nt({ownerDocument:e,container:t,initialFocus:n},r){let o=u.useRef(null),a=we();return xe(()=>{if(!r)return;let l=t.current;!l||oe(()=>{if(!a.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){o.current=i;return}}else if(l.contains(i)){o.current=i;return}n!=null&&n.current?A(n.current):W(l,S.First)===Ee.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[r]),o}function rt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let a=we();ae(e==null?void 0:e.defaultView,"focus",l=>{if(!o||!a.current)return;let i=new Set(n==null?void 0:n.current);i.add(t);let d=r.current;if(!d)return;let c=l.target;c&&c instanceof HTMLElement?Te(i,c)?(r.current=c,A(c)):(l.preventDefault(),l.stopPropagation(),A(d)):A(r.current)},!0)}function Te(e,t){var n;for(let r of e)if((n=r.current)!=null&&n.contains(t))return!0;return!1}let k=new Set,P=new Map;function ve(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function ge(e){let t=P.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function ot(e,t=!0){j(()=>{if(!t||!e.current)return;let n=e.current,r=le(n);if(r){k.add(n);for(let o of P.keys())o.contains(n)&&(ge(o),P.delete(o));return r.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement){for(let a of k)if(o.contains(a))return;k.size===1&&(P.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),ve(o))}}),()=>{if(k.delete(n),k.size>0)r.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement&&!P.has(o)){for(let a of k)if(o.contains(a))return;P.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),ve(o)}});else for(let o of P.keys())ge(o),P.delete(o)}}},[t])}let Fe=u.createContext(!1);function lt(){return u.useContext(Fe)}function ee(e){return m.createElement(Fe.Provider,{value:e.force},e.children)}function at(e){let t=lt(),n=u.useContext(Pe),r=q(e),[o,a]=u.useState(()=>{if(!t&&n!==null||B.isServer)return null;let l=r==null?void 0:r.getElementById("headlessui-portal-root");if(l)return l;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return u.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),u.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),o}let it=u.Fragment,ut=x(function(e,t){let n=e,r=u.useRef(null),o=T(Be(s=>{r.current=s}),t),a=q(r),l=at(r),[i]=u.useState(()=>{var s;return B.isServer?null:(s=a==null?void 0:a.createElement("div"))!=null?s:null}),d=V(),c=u.useRef(!1);return j(()=>{if(c.current=!1,!(!l||!i))return l.contains(i)||(i.setAttribute("data-headlessui-portal",""),l.appendChild(i)),()=>{c.current=!0,oe(()=>{var s;!c.current||!l||!i||(i instanceof Node&&l.contains(i)&&l.removeChild(i),l.childNodes.length<=0&&((s=l.parentElement)==null||s.removeChild(l)))})}},[l,i]),d?!l||!i?null:Ie.createPortal($({ourProps:{ref:o},theirProps:n,defaultTag:it,name:"Portal"}),i):null}),st=u.Fragment,Pe=u.createContext(null),ct=x(function(e,t){let{target:n,...r}=e,o={ref:T(t)};return m.createElement(Pe.Provider,{value:n},$({ourProps:o,theirProps:r,defaultTag:st,name:"Popover.Group"}))}),te=Object.assign(ut,{Group:ct}),Se=u.createContext(null);function De(){let e=u.useContext(Se);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,De),t}return e}function dt(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=y(a=>(t(l=>[...l,a]),()=>t(l=>{let i=l.slice(),d=i.indexOf(a);return d!==-1&&i.splice(d,1),i}))),o=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return m.createElement(Se.Provider,{value:o},n.children)},[t])]}let ft="p",pt=x(function(e,t){let n=N(),{id:r=`headlessui-description-${n}`,...o}=e,a=De(),l=T(t);j(()=>a.register(r),[r,a.register]);let i={ref:l,...a.props,id:r};return $({ourProps:i,theirProps:o,slot:a.slot||{},defaultTag:ft,name:a.name||"Description"})}),ie=u.createContext(()=>{});ie.displayName="StackContext";var ne=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ne||{});function mt(){return u.useContext(ie)}function vt({children:e,onUpdate:t,type:n,element:r,enabled:o}){let a=mt(),l=y((...i)=>{t==null||t(...i),a(...i)});return j(()=>{let i=o===void 0||o===!0;return i&&l(0,n,r),()=>{i&&l(1,n,r)}},[l,n,r,o]),m.createElement(ie.Provider,{value:l},e)}function gt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var ht=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ht||{}),wt=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(wt||{});let Et={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},G=u.createContext(null);G.displayName="DialogContext";function U(e){let t=u.useContext(G);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,U),n}return t}function bt(e,t,n=()=>[document.body]){u.useEffect(()=>{var r;if(!t||!e)return;let o=Ue(),a=window.pageYOffset;function l(c,s,f){let v=c.style.getPropertyValue(s);return Object.assign(c.style,{[s]:f}),o.add(()=>{Object.assign(c.style,{[s]:v})})}let i=e.documentElement,d=((r=e.defaultView)!=null?r:window).innerWidth-i.clientWidth;if(l(i,"overflow","hidden"),d>0){let c=i.clientWidth-i.offsetWidth,s=d-c;l(i,"paddingRight",`${s}px`)}if(gt()){l(e.body,"marginTop",`-${a}px`),window.scrollTo(0,0);let c=null;o.addEventListener(e,"click",s=>{if(s.target instanceof HTMLElement)try{let f=s.target.closest("a");if(!f)return;let{hash:v}=new URL(f.href),p=e.querySelector(v);p&&!n().some(I=>I.contains(p))&&(c=p)}catch{}},!0),o.addEventListener(e,"touchmove",s=>{s.target instanceof HTMLElement&&!n().some(f=>f.contains(s.target))&&s.preventDefault()},{passive:!1}),o.add(()=>{window.scrollTo(0,window.pageYOffset+a),c&&c.isConnected&&(c.scrollIntoView({block:"nearest"}),c=null)})}return o.dispose},[e,t])}function yt(e,t){return D(t.type,Et,e,t)}let xt="div",$t=fe.RenderStrategy|fe.Static,Tt=x(function(e,t){let n=N(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:a,initialFocus:l,__demoMode:i=!1,...d}=e,[c,s]=u.useState(0),f=je();o===void 0&&f!==null&&(o=D(f,{[pe.Open]:!0,[pe.Closed]:!1}));let v=u.useRef(new Set),p=u.useRef(null),I=T(p,t),w=u.useRef(null),E=q(p),F=e.hasOwnProperty("open")||f!==null,ue=e.hasOwnProperty("onClose");if(!F&&!ue)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!F)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!ue)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let b=o?0:1,[R,Ae]=u.useReducer(yt,{titleId:null,descriptionId:null,panelRef:u.createRef()}),L=y(()=>a(!1)),se=y(g=>Ae({type:0,id:g})),X=V()?i?!1:b===0:!1,_=c>1,Re=u.useContext(G)!==null,Le=_?"parent":"leaf";ot(p,_?X:!1);let ce=y(()=>{var g,C;return[...Array.from((g=E==null?void 0:E.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?g:[]).filter(h=>!(h===document.body||h===document.head||!(h instanceof HTMLElement)||h.contains(w.current)||R.panelRef.current&&h.contains(R.panelRef.current))),(C=R.panelRef.current)!=null?C:p.current]});Xe(()=>ce(),L,X&&!_),ae(E==null?void 0:E.defaultView,"keydown",g=>{g.defaultPrevented||g.key===ye.Escape&&b===0&&(_||(g.preventDefault(),g.stopPropagation(),L()))}),bt(E,b===0&&!Re,ce),u.useEffect(()=>{if(b!==0||!p.current)return;let g=new IntersectionObserver(C=>{for(let h of C)h.boundingClientRect.x===0&&h.boundingClientRect.y===0&&h.boundingClientRect.width===0&&h.boundingClientRect.height===0&&L()});return g.observe(p.current),()=>g.disconnect()},[b,p,L]);let[Ce,ke]=dt(),Me=u.useMemo(()=>[{dialogState:b,close:L,setTitleId:se},R],[b,R,L,se]),de=u.useMemo(()=>({open:b===0}),[b]),Ne={ref:I,id:r,role:"dialog","aria-modal":b===0?!0:void 0,"aria-labelledby":R.titleId,"aria-describedby":Ce};return m.createElement(vt,{type:"Dialog",enabled:b===0,element:p,onUpdate:y((g,C,h)=>{C==="Dialog"&&D(g,{[ne.Add](){v.current.add(h),s(z=>z+1)},[ne.Remove](){v.current.add(h),s(z=>z-1)}})})},m.createElement(ee,{force:!0},m.createElement(te,null,m.createElement(G.Provider,{value:Me},m.createElement(te.Group,{target:p},m.createElement(ee,{force:!1},m.createElement(ke,{slot:de,name:"Dialog.Description"},m.createElement(O,{initialFocus:l,containers:v,features:X?D(Le,{parent:O.features.RestoreFocus,leaf:O.features.All&~O.features.FocusLock}):O.features.None},$({ourProps:Ne,theirProps:d,slot:de,defaultTag:xt,features:$t,visible:b===0,name:"Dialog"})))))))),m.createElement(Z,{features:Y.Hidden,ref:w}))}),Ft="div",Pt=x(function(e,t){let n=N(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:a,close:l}]=U("Dialog.Overlay"),i=T(t),d=y(s=>{if(s.target===s.currentTarget){if(ze(s.currentTarget))return s.preventDefault();s.preventDefault(),s.stopPropagation(),l()}}),c=u.useMemo(()=>({open:a===0}),[a]);return $({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:d},theirProps:o,slot:c,defaultTag:Ft,name:"Dialog.Overlay"})}),St="div",Dt=x(function(e,t){let n=N(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:a},l]=U("Dialog.Backdrop"),i=T(t);u.useEffect(()=>{if(l.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[l.panelRef]);let d=u.useMemo(()=>({open:a===0}),[a]);return m.createElement(ee,{force:!0},m.createElement(te,null,$({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:o,slot:d,defaultTag:St,name:"Dialog.Backdrop"})))}),At="div",Rt=x(function(e,t){let n=N(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:a},l]=U("Dialog.Panel"),i=T(t,l.panelRef),d=u.useMemo(()=>({open:a===0}),[a]),c=y(s=>{s.stopPropagation()});return $({ourProps:{ref:i,id:r,onClick:c},theirProps:o,slot:d,defaultTag:At,name:"Dialog.Panel"})}),Lt="h2",Ct=x(function(e,t){let n=N(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:a,setTitleId:l}]=U("Dialog.Title"),i=T(t);u.useEffect(()=>(l(r),()=>l(null)),[r,l]);let d=u.useMemo(()=>({open:a===0}),[a]);return $({ourProps:{ref:i,id:r},theirProps:o,slot:d,defaultTag:Lt,name:"Dialog.Title"})}),he=Object.assign(Tt,{Backdrop:Dt,Panel:Rt,Overlay:Pt,Title:Ct,Description:pt});function Nt({id:e="modal",children:t,show:n=!1,maxWidth:r="2xl",closeable:o=!0,onClose:a=()=>{},data:l={}}){const i=()=>{o&&a()},d={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[r];return M(K,{show:n,as:u.Fragment,leave:"duration-200",children:Oe(he,{as:"div",id:e,name:e,className:"fixed inset-0 z-50 flex items-center px-4 py-6 overflow-y-auto transition-all transform sm:px-0",onClose:i,children:[M(K.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:M("div",{className:"absolute inset-0 bg-gray-500/75"})}),M(K.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:M(he.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${d}`,children:t})})]})})}function It({type:e="button",className:t="",processing:n,children:r,onClick:o}){return M("button",{type:e,onClick:o,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}export{Nt as M,It as S};
