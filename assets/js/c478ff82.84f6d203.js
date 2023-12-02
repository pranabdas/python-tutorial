"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[5348],{251:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(5893),a=n(1151);const r={title:"Global variables"},s=void 0,o={id:"basics/global-var",title:"Global variables",description:"The variables we declare inside a function are local to the function. It cannot",source:"@site/docs/basics/global-var.md",sourceDirName:"basics",slug:"/basics/global-var",permalink:"/python-tutorial/basics/global-var",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/basics/global-var.md",tags:[],version:"current",frontMatter:{title:"Global variables"},sidebar:"docs",previous:{title:"Function",permalink:"/python-tutorial/basics/function"},next:{title:"Class",permalink:"/python-tutorial/basics/class"}},c={},l=[];function d(t){const e={code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["The variables we declare inside a function are local to the function. It cannot\nbe used by another function. However, a global variable once declared/set, it\ncan be accessed by other functions. Here is an example: we will write a program\n(equivalent of MATLAB ",(0,i.jsx)(e.code,{children:"tic"})," and ",(0,i.jsx)(e.code,{children:"toc"})," commands) that is combination of two\nfunctions: ",(0,i.jsx)(e.strong,{children:"tic"})," which starts the timer and ",(0,i.jsx)(e.strong,{children:"toc"})," which stops the timer and\nprints the time interval between calling ",(0,i.jsx)(e.code,{children:"tic"})," and ",(0,i.jsx)(e.code,{children:"toc"})," functions."]}),"\n",(0,i.jsx)(e.p,{children:"First let us write the tic program and set the current time as a global\nvariable:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",metastring:"showLineNumbers",children:"def tic():\n    import time\n\n    global tictoc_start_time\n    tictoc_start_time = time.time()\n\n    return\n"})}),"\n",(0,i.jsx)(e.p,{children:"toc program that prints the elapsed time:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",metastring:"showLineNumbers",children:'def toc():\n    import time\n\n    if "tictoc_start_time" in globals():\n        elapsed_time = time.time() - tictoc_start_time\n        print("Elapsed time =", elapsed_time, "sec.")\n    else:\n        print("First run the tic() program, start time is not set.")\n        elapsed_time = 0.0\n\n    return elapsed_time\n'})}),"\n",(0,i.jsx)(e.p,{children:"Of course, you should introduce global variables with care, as they might\nconflict with other parts of the program."})]})}function h(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>s});var i=n(7294);const a={},r=i.createContext(a);function s(t){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),i.createElement(r.Provider,{value:e},t.children)}}}]);