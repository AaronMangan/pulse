import{r as a,a as n,j as m,F as d,f}from"./app-7a49f6f3.js";import{K as u}from"./transition-d0ee8aef.js";const c=a.createContext(),i=({children:e})=>{const[o,t]=a.useState(!1),r=()=>{t(s=>!s)};return n(c.Provider,{value:{open:o,setOpen:t,toggleOpen:r},children:n("div",{className:"relative",children:e})})},x=({children:e})=>{const{open:o,setOpen:t,toggleOpen:r}=a.useContext(c);return m(d,{children:[n("div",{onClick:r,children:e}),o&&n("div",{className:"fixed inset-0 z-40",onClick:()=>t(!1)})]})},h=({align:e="right",width:o="48",contentClasses:t="py-1 bg-white",children:r})=>{const{open:s,setOpen:p}=a.useContext(c);let l="origin-top";e==="left"?l="origin-top-left left-0":e==="right"&&(l="origin-top-right right-0");let g="";return o==="48"&&(g="w-48"),n(d,{children:n(u,{as:a.Fragment,show:s,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:n("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${l} ${g}`,onClick:()=>p(!1),children:n("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+t,children:r})})})})},v=({href:e,method:o,as:t,children:r,onClick:s})=>n(f,{href:e,method:o,as:t,className:"block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100",onClick:s,children:r});i.Trigger=x;i.Content=h;i.Link=v;const w=i;function k({id:e,value:o,className:t}){return n("small",{id:e,name:e,className:`text-light font-xs text-gray-400 ${t}`,children:o})}export{w as D,k as S};