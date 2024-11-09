"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([["1713"],{9657:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>u,default:()=>h,assets:()=>c,toc:()=>p,frontMatter:()=>i});var r=JSON.parse('{"id":"multiprocessing","title":"Python multiprocessing","description":"Most likely the computer you are reading this has multiple processor cores. So","source":"@site/docs/multiprocessing.mdx","sourceDirName":".","slug":"/multiprocessing","permalink":"/python-tutorial/multiprocessing","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/python-tutorial/blob/main/docs/multiprocessing.mdx","tags":[],"version":"current","frontMatter":{"title":"Python multiprocessing","sidebar_label":"Multiprocessing"},"sidebar":"docs","previous":{"title":"Pandas","permalink":"/python-tutorial/pandas"},"next":{"title":"SQL database","permalink":"/python-tutorial/sql-database"}}'),s=t("5893"),l=t("65"),a=t("7902"),o=t("5525");let i={title:"Python multiprocessing",sidebar_label:"Multiprocessing"},u=void 0,c={},p=[{value:"MPI for Python",id:"mpi-for-python",level:2},{value:"MPI Examples",id:"mpi-examples",level:3},{value:"Resources",id:"resources",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Most likely the computer you are reading this has multiple processor cores. So\nfar the python programs we have written, runs on a single processor. Often part\nof our code can be distributed in parallel to multiple processor and could be\nperformed simultaneously. Here we start with an example. First, with usual\nserial processing:"}),"\n",(0,s.jsxs)(a.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,s.jsx)(o.Z,{value:"input",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'import time\n\ndef sleep(sec):\n    time.sleep(sec)\n    return sec\n\nt0 = time.perf_counter()\n\nfor ii in range(5):\n    print(sleep(ii))\n\nt_final = time.perf_counter()\nprint("The program took", t_final - t0, "second(s).")\n'})})}),(0,s.jsx)(o.Z,{value:"output",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"0\n1\n2\n3\n4\nThe program took 10.027701000000889 second(s).\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"With multiprocessing (I am allocating two cores for below examples):"}),"\n",(0,s.jsxs)(a.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,s.jsx)(o.Z,{value:"input",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'import concurrent.futures\n\nt0 = time.perf_counter()\n\nwith concurrent.futures.ProcessPoolExecutor() as executor:\n    results = [executor.submit(sleep, ii) for ii in range(5)]\n\n    for f in concurrent.futures.as_completed(results):\n        print(f.result())\n\nt_final = time.perf_counter()\nprint("The program took", t_final - t0, "second(s).")\n'})})}),(0,s.jsx)(o.Z,{value:"output",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"0\n1\n2\n3\n4\nThe program took 6.067244100000607 second(s).\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"We can see the performance is almost doubled while using two cores in parallel.\nWe could collect the output in a list, or convert to an array as well:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:"with concurrent.futures.ProcessPoolExecutor() as executor:\n    results = [executor.submit(sleep, ii) for ii in range(5)]\n\n    result_list = []\n    for f in concurrent.futures.as_completed(results):\n        result_list.append(f.result())\n\n# convert to array\nresult_array = np.array(result_list)\n# or\nresult_array = np.vstack(result_list)\n"})}),"\n",(0,s.jsx)(n.p,{children:"There is another alternative way of doing the multiprocessing:"}),"\n",(0,s.jsxs)(a.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,s.jsx)(o.Z,{value:"input",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'import multiprocessing\n\ndef sleep(sec, return_dict):\n    time.sleep(sec)\n    return_dict[sec] = sec\n\nt0 = time.perf_counter()\n\nif __name__ == "__main__":\n    manager = multiprocessing.Manager()\n    return_dict = manager.dict()\n    jobs = []\n    for i in range(5):\n        p = multiprocessing.Process(target=sleep, args=(i, return_dict))\n        jobs.append(p)\n        p.start()\n\n    for proc in jobs:\n        proc.join()\n\n    for key in range(5):\n        print(return_dict[key])\n\nt_final = time.perf_counter()\nprint("The program took", t_final - t0, "second(s).")\n'})})}),(0,s.jsx)(o.Z,{value:"output",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"0\n1\n2\n3\n4\nThe program took 4.119128827000168 second(s).\n"})})})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"We must have unique keys, if we want to collect the results in order. In some\ncases, that might not be necessary, e.g., batch processing of images."})}),"\n",(0,s.jsx)(n.h2,{id:"mpi-for-python",children:"MPI for Python"}),"\n",(0,s.jsx)(n.p,{children:"Installation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install mpi4py\n"})}),"\n",(0,s.jsx)(n.p,{children:"A python code can be run by:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mpirun -np 4 python3 code.py\n"})}),"\n",(0,s.jsx)(n.h3,{id:"mpi-examples",children:"MPI Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'import sys\nfrom mpi4py import MPI\n\ncomm = MPI.COMM_WORLD\nid = comm.Get_rank()\np = comm.Get_size()\n\nif (id == 0):\n    print("There are ", p, "MPI processes running.")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=fKl2JW_qrso",children:"https://www.youtube.com/watch?v=fKl2JW_qrso"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://mpi4py.readthedocs.io/",children:"https://mpi4py.readthedocs.io/"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5525:function(e,n,t){t.d(n,{Z:()=>a});var r=t("5893");t("7294");var s=t("7026");let l="tabItem_Ymn6";function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(l,a),hidden:t,children:n})}},7902:function(e,n,t){t.d(n,{Z:()=>y});var r=t("5893"),s=t("7294"),l=t("7026"),a=t("9599"),o=t("6550"),i=t("2000"),u=t("4520"),c=t("8341"),p=t("6009");function d(e){var n,t;return null!==(t=null===(n=s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function h(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var m=t("7227");let f="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:i}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),p=e=>{let n=e.currentTarget,t=i[u.indexOf(n)].value;t!==s&&(c(n),o(t))},d=e=>{var n,t;let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;r=null!==(n=u[t])&&void 0!==n?n:u[0];break}case"ArrowLeft":{let n=u.indexOf(e.currentTarget)-1;r=null!==(t=u[n])&&void 0!==t?t:u[u.length-1]}}null==r||r.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n),children:i.map(e=>{let{value:n,label:t,attributes:a}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>u.push(e),onKeyDown:d,onClick:p,...a,className:(0,l.Z)("tabs__item",g,null==a?void 0:a.className,{"tabs__item--active":s===n}),children:null!=t?t:n},n)})})}function x(e){let{lazy:n,children:t,selectedValue:a}=e,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=o.find(e=>e.props.value===a);return e?(0,s.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,l=function(e){let{values:n,children:t}=e;return(0,s.useMemo)(()=>{let e=null!=n?n:d(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(n.map(e=>e.value).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[n,t])}(e),[a,m]=(0,s.useState)(()=>(function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(t,'" but none of its children has the corresponding value. Available values are: ').concat(r.map(e=>e.value).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return t}let s=null!==(n=r.find(e=>e.default))&&void 0!==n?n:r[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:l})),[f,g]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t}),a=(0,u._X)(l);return[a,(0,s.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})},[l,r])]}({queryString:t,groupId:r}),[v,x]=function(e){var n;let{groupId:t}=e;let r=(n=t)?"docusaurus.tab.".concat(n):null,[l,a]=(0,p.Nk)(r);return[l,(0,s.useCallback)(e=>{if(!!r)a.set(e)},[r,a])]}({groupId:r}),b=(()=>{let e=null!=f?f:v;return h({value:e,tabValues:l})?e:null})();return(0,i.Z)(()=>{b&&m(b)},[b]),{selectedValue:a,selectValue:(0,s.useCallback)(e=>{if(!h({value:e,tabValues:l}))throw Error("Can't select invalid tab value=".concat(e));m(e),g(e),x(e)},[g,x,l]),tabValues:l}}(e);return(0,r.jsxs)("div",{className:(0,l.Z)("tabs-container",f),children:[(0,r.jsx)(v,{...n,...e}),(0,r.jsx)(x,{...n,...e})]})}function y(e){let n=(0,m.Z)();return(0,r.jsx)(b,{...e,children:d(e.children)},String(n))}},65:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var r=t(7294);let s={},l=r.createContext(s);function a(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);