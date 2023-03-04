import{r as i,K as I,a,j as e,g as D}from"./app-a5a2f0d4.js";import{M,S as A}from"./SecondaryButton-3d18aa7f.js";import{T as L,I as T}from"./TextInput-af895238.js";import{I as j}from"./InputLabel-94fe065d.js";import{P as u}from"./PrimaryButton-243eb1ea.js";/* empty css                         */import{D as r}from"./Dropdown-0b99a495.js";import{N as B}from"./NoData-e2227503.js";import{S as E,Q as x}from"./SmallText-b637ac0b.js";import"./transition-0e1e8dab.js";function J({className:f,revisions:l}){const[g,c]=i.useState(!1),[s,d]=i.useState([]),v=i.useRef(),y=l.length>0,{data:m,setData:b,post:N,processing:w,reset:p,errors:R}=I({}),h=()=>{c(!0)},k=t=>{t.preventDefault(),N(route("settings.revision.create"),{preserveScroll:!0,onSuccess:()=>n(),onError:()=>v.current.focus(),onFinish:()=>p()})},n=()=>{c(!1),p(),d([])},S=(t,o)=>{t.preventDefault(),d(o),h()},C=()=>{D.post(route("settings.revision.update",s.id),{name:m.revision??s.name}).then(t=>{typeof t.data.status<"u"&&t.data.status==="success"?x.success(t.data.message??"Success"):x.error(t.data.message??"An error occurred, please contact your administrator for assistance")}).catch(t=>{}),n()};return a("section",{className:`space-y-6 ${f}`,children:[a("header",{children:[e("h2",{className:"text-lg font-medium font-bold text-gray-900",children:"Revisions"}),e("p",{className:"mt-1 text-xs text-gray-600",children:"Manage the revisions that can be applied to your documents."})]}),y?a("table",{className:"min-w-full rounded-md",children:[e("thead",{className:"bg-gray-600 border-b",children:a("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 text-sm text-left text-white font-large",children:"Id"}),e("th",{scope:"col",className:"px-6 py-4 text-sm text-left text-white font-large",children:"Name"}),e("th",{scope:"col",className:"px-6 py-4 text-sm text-left text-white font-large",children:"Status"}),e("th",{scope:"col",className:"px-6 py-4 text-sm text-white font-large",children:"Actions"})]})}),e("tbody",{children:l.map(t=>a("tr",{className:t.status=="active"?"bg-white border-b":"bg-gray-200 border-b",children:[e("td",{className:"px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap",children:t.id}),e("td",{className:"px-6 py-4 text-sm font-light font-bold text-gray-900 whitespace-nowrap",children:t.name}),e("td",{className:"px-6 py-4 text-sm font-light text-gray-900 uppercase whitespace-nowrap",children:t.status=="active"?e("span",{className:"bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300",children:"active"}):e("span",{className:"bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300",children:"inactive"})}),e("td",{className:"px-6 py-4 text-sm font-light text-center text-gray-900 whitespace-nowrap",children:a(r,{children:[e(r.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:a("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md hover:text-sky-200 focus:outline-none",children:["Actions",e("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),a(r.Content,{children:[e(r.Link,{onClick:o=>{S(o,t)},children:"Edit"}),e(r.Link,{href:route("settings.revision.archive",t),method:"post",as:"button",children:t.status=="active"?"Archive":"Restore"}),e(r.Link,{href:route("settings.revision.delete",t),method:"delete",as:"button",children:"Delete"})]})]})})]},t.id))})]}):e(B,{title:"No Revisions",blurb:"To add a revision, click the 'Add Revision' button."}),e(u,{onClick:h,children:"Add Revision"}),a(M,{show:g,onClose:n,children:[e("span",{className:"float-right mx-4 mt-2 text-2xl font-bold text-gray-300 cursor-pointer hover:text-sky-700",onClick:n,children:"×"}),a("form",{onSubmit:s.id?C:k,className:"p-6",children:[e("h2",{className:"text-lg font-medium font-bold text-gray-900",children:s.id?"Update Revision":"Create New Revision"}),e(E,{value:s.id?"Update revision - click save to keep your changes":"Create a new revision to apply to documents"}),e("hr",{className:"mt-2 text-gray-300"}),a("div",{className:"mt-6",children:[e(j,{className:"font-bold",for:"name",value:"Revision"}),e(L,{id:"revision",type:"text",name:"revision",value:m.revision??s.name??"",handleChange:t=>b("revision",t.target.value),className:"block w-full mt-1",isFocused:!0,placeholder:"A, B, 0, 1"}),e(T,{message:R.revision,className:"mt-2"})]}),a("div",{className:"flex justify-end mt-6",children:[e(u,{className:"mr-3",processing:w,children:"Save"}),e(A,{onClick:n,children:"Cancel"})]})]})]})]})}export{J as default};