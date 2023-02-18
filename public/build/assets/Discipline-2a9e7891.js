import{r as c,K as E,j as a,a as e,d as L}from"./app-7a49f6f3.js";import{M as T,S as j}from"./SecondaryButton-458481d6.js";import{T as f,I as g}from"./TextInput-b9aa7f80.js";import{I as y}from"./InputLabel-feab5f30.js";import{P as N}from"./PrimaryButton-ff818526.js";import{N as R}from"./NoData-a7b9a533.js";import{D as n,S as B}from"./SmallText-a964b077.js";import{Q as o}from"./react-toastify.esm-f5364701.js";import"./transition-d0ee8aef.js";function G({className:w,disciplines:d,stateChanger:z}){const[b,m]=c.useState(!1),[l,v]=c.useState([]),D=c.useRef(),C=d.length>0,{data:i,setData:p,post:k,processing:S,reset:h,errors:u}=E({}),x=t=>{m(!0),h()},I=t=>{t.preventDefault(),k(route("settings.discipline.create"),{preserveScroll:!0,onSuccess:()=>r(),onError:()=>D.current.focus(),onFinish:()=>h()})},M=t=>{t.preventDefault(),L.post(route("settings.discipline.update",l.id),{name:i.name??l.name,code:i.code??l.code}).then(s=>{s.data.status&&s.data.status==="success"?o.success(s.data.message):s.data.status&&s.data.status==="fail"&&o.error(s.data.message),r()}).catch(s=>{o.error("An internal error has occured, please contact your administrator")})},r=()=>{m(!1),window.location.reload()},A=(t,s)=>{t.preventDefault(),v(s),x()};return a("section",{className:`space-y-6 ${w}`,children:[a("header",{children:[e("h2",{className:"text-lg font-medium font-bold text-gray-900",children:"Disciplines"}),e("p",{className:"mt-1 text-xs text-gray-600",children:"View the currently configured disciplines"})]}),C?e("div",{children:a("table",{className:"min-w-full rounded-md",children:[e("thead",{className:"bg-gray-600 border-b",children:a("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 text-sm text-left text-white font-large",children:"Id"}),e("th",{scope:"col",className:"px-6 py-4 text-sm text-left text-white font-large",children:"Name"}),e("th",{scope:"col",className:"px-6 py-4 text-sm text-left text-white font-large",children:"Code"}),e("th",{scope:"col",className:"px-6 py-4 text-sm text-left text-white font-large",children:"Status"}),e("th",{scope:"col",className:"px-6 py-4 text-sm text-white font-large",children:"Actions"})]})}),e("tbody",{children:d.map(t=>a("tr",{className:"bg-white border-b",children:[e("td",{className:"px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap",children:t.id}),e("td",{className:"px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap",children:t.name}),e("td",{className:"px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap",children:t.code}),e("td",{className:"px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap",children:t.status=="active"?e("span",{className:"bg-green-100 text-green-800 uppercase text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300",children:"active"}):e("span",{className:"bg-yellow-100 text-yellow-800 text-xs uppercase font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300",children:"inactive"})}),e("td",{className:"px-6 py-4 text-sm font-light text-center text-gray-900 whitespace-nowrap",children:a(n,{children:[e(n.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:a("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md hover:text-sky-200 focus:outline-none",children:["Actions",e("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),a(n.Content,{children:[e(n.Link,{onClick:s=>{A(s,t)},children:"Edit"}),e(n.Link,{href:route("settings.discipline.archive",t),method:"post",as:"button",children:t.status=="active"?"Archive":"Restore"}),e(n.Link,{href:route("settings.discipline.delete",t),method:"delete",as:"button",children:"Delete"})]})]})})]},t.id))})]})}):e(R,{title:"No Disciplines",blurb:"To add a discipline, click the 'Add Discipline' button."}),e(N,{onClick:x,children:"Add Discipline"}),a(T,{show:b,onClose:r,children:[e("span",{className:"float-right mx-4 mt-2 text-2xl font-bold text-gray-300 cursor-pointer hover:text-sky-700",onClick:r,children:"×"}),a("form",{onSubmit:l.id?M:I,className:"p-6",children:[e("h2",{className:"text-lg font-medium font-bold text-gray-900",children:l.id?"Update Discipline":"Create New Discipline"}),e(B,{value:l.id?"Update the selected discipline":"Create a new discipline to apply to documents"}),e("hr",{className:"mt-2 text-gray-300"}),a("div",{className:"mt-6",children:[e(y,{className:"font-bold",for:"name",value:"Name"}),e(f,{id:"name",type:"text",name:"name",value:i.name??l.name??"",handleChange:t=>p("name",t.target.value),className:"block w-full mt-1 capitalize",isFocused:!0,placeholder:"Mechanical"}),e(g,{message:u.name,className:"mt-2"})]}),a("div",{className:"mt-6",children:[e(y,{className:"font-bold",for:"name",value:"Code"}),e(f,{id:"code",type:"text",name:"code",value:i.code??l.code??"",handleChange:t=>p("code",t.target.value),className:"block w-full mt-1 uppercase",placeholder:"MECH"}),e(g,{message:u.name,className:"mt-2"})]}),a("div",{className:"flex justify-end mt-6",children:[e(N,{className:"mr-3",processing:S,children:"Save"}),e(j,{onClick:r,children:"Cancel"})]})]})]})]})}export{G as default};