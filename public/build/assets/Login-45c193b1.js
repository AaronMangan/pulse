import{a as e,K as g,r as h,j as s,n as x,f as b}from"./app-c68310f4.js";import{G as w}from"./GuestLayout-e0b9ba71.js";import{T as i,I as c}from"./TextInput-8f4f9872.js";import{I as d}from"./InputLabel-a4254704.js";import{P as N}from"./PrimaryButton-c995457d.js";import"./ApplicationLogo-1a89ed6d.js";function y({name:t,value:o,handleChange:r}){return e("input",{type:"checkbox",name:t,value:o,className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500",onChange:m=>r(m)})}function P({status:t,canResetPassword:o}){const{data:r,setData:m,post:u,processing:p,errors:l,reset:f}=g({email:"",password:"",remember:""});h.useEffect(()=>()=>{f("password")},[]);const n=a=>{m(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)};return s(w,{children:[e(x,{title:"Log in"}),t&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),s("form",{onSubmit:a=>{a.preventDefault(),u(route("login"))},children:[s("div",{children:[e(d,{forInput:"email",value:"Email"}),e(i,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,handleChange:n}),e(c,{message:l.email,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(d,{forInput:"password",value:"Password"}),e(i,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"current-password",handleChange:n}),e(c,{message:l.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:s("label",{className:"flex items-center",children:[e(y,{name:"remember",value:r.remember,handleChange:n}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),s("div",{className:"flex items-center justify-end mt-4",children:[o&&e(b,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e(N,{className:"ml-4",processing:p,children:"Log in"})]})]})]})}export{P as default};
