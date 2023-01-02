"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[6077],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),f=a,d=c["".concat(i,".").concat(f)]||c[f]||m[f]||o;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[c]="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),u=n(7392),i=n(7094),s=n(2466),p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,f=e.defaultValue,d=e.values,h=e.groupId,b=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,u.l)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===f?f:null!=(t=null!=f?f:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),N=w.tabGroupChoices,_=w.setTabGroupChoices,T=(0,a.useState)(k),x=T[0],O=T[1],P=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=N[h];null!=I&&I!==x&&g.some((function(e){return e.value===I}))&&O(I)}var j=function(e){var t=e.currentTarget,n=P.indexOf(t),r=g[n].value;r!==x&&(E(t),O(r),null!=h&&_(h,String(r)))},Z=function(e){var t,n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":var r,a=P.indexOf(e.currentTarget)+1;n=null!=(r=P[a])?r:P[0];break;case"ArrowLeft":var o,l=P.indexOf(e.currentTarget)-1;n=null!=(o=P[l])?o:P[P.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},b)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return P.push(e)},onKeyDown:Z,onClick:j},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(y.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function f(e){var t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},7729:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(5488),u=n(5162),i=["components"],s={title:"Python multiprocessing",sidebar_label:"Multiprocessing"},p=void 0,c={unversionedId:"multiprocessing",id:"multiprocessing",title:"Python multiprocessing",description:"Most likely the computer you are reading this has multiple processor cores. So",source:"@site/docs/multiprocessing.mdx",sourceDirName:".",slug:"/multiprocessing",permalink:"/python-tutorial/multiprocessing",draft:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/multiprocessing.mdx",tags:[],version:"current",frontMatter:{title:"Python multiprocessing",sidebar_label:"Multiprocessing"},sidebar:"docs",previous:{title:"Pandas",permalink:"/python-tutorial/pandas"},next:{title:"SQL database",permalink:"/python-tutorial/sql-database"}},m={},f=[{value:"MPI for Python",id:"mpi-for-python",level:2},{value:"MPI Examples",id:"mpi-examples",level:3},{value:"Resources",id:"resources",level:2}],d={toc:f};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Most likely the computer you are reading this has multiple processor cores. So\nfar the python programs we have written, runs on a single processor. Often part\nof our code can be distributed in parallel to multiple processor and could be\nperformed simultaneously. Here we start with an example. First, with usual\nserial processing:"),(0,o.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"input",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'import time\n\ndef sleep(sec):\n    time.sleep(sec)\n    return sec\n\nt0 = time.perf_counter()\n\nfor ii in range(5):\n    print(sleep(ii))\n\nt_final = time.perf_counter()\nprint("The program took", t_final - t0, "second(s).")\n'))),(0,o.kt)(u.Z,{value:"output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"0\n1\n2\n3\n4\nThe program took 10.027701000000889 second(s).\n")))),(0,o.kt)("p",null,"With multiprocessing (I am allocating two cores for below examples):"),(0,o.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"input",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'import concurrent.futures\n\nt0 = time.perf_counter()\n\nwith concurrent.futures.ProcessPoolExecutor() as executor:\n    results = [executor.submit(sleep, ii) for ii in range(5)]\n\n    for f in concurrent.futures.as_completed(results):\n        print(f.result())\n\nt_final = time.perf_counter()\nprint("The program took", t_final - t0, "second(s).")\n'))),(0,o.kt)(u.Z,{value:"output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"0\n1\n2\n3\n4\nThe program took 6.067244100000607 second(s).\n")))),(0,o.kt)("p",null,"We can see the performance is almost doubled while using two cores in parallel.\nWe could collect the output in a list, or convert to an array as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"with concurrent.futures.ProcessPoolExecutor() as executor:\n    results = [executor.submit(sleep, ii) for ii in range(5)]\n\n    result_list = []\n    for f in concurrent.futures.as_completed(results):\n        result_list.append(f.result())\n\n# convert to array\nresult_array = np.array(result_list)\n# or\nresult_array = np.vstack(result_list)\n")),(0,o.kt)("p",null,"There is another alternative way of doing the multiprocessing:"),(0,o.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"input",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'import multiprocessing\n\ndef sleep(sec, return_dict):\n    time.sleep(sec)\n    return_dict[sec] = sec\n\nt0 = time.perf_counter()\n\nif __name__ == "__main__":\n    manager = multiprocessing.Manager()\n    return_dict = manager.dict()\n    jobs = []\n    for i in range(5):\n        p = multiprocessing.Process(target=sleep, args=(i, return_dict))\n        jobs.append(p)\n        p.start()\n\n    for proc in jobs:\n        proc.join()\n\n    for key in range(5):\n        print(return_dict[key])\n\nt_final = time.perf_counter()\nprint("The program took", t_final - t0, "second(s).")\n'))),(0,o.kt)(u.Z,{value:"output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"0\n1\n2\n3\n4\nThe program took 4.119128827000168 second(s).\n")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We must have unique keys, if we want to collect the results in order. In some\ncases, that might not be necessary, e.g., batch processing of images.")),(0,o.kt)("h2",{id:"mpi-for-python"},"MPI for Python"),(0,o.kt)("p",null,"Installation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install mpi4py\n")),(0,o.kt)("p",null,"A python code can be run by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mpirun -np 4 python3 code.py\n")),(0,o.kt)("h3",{id:"mpi-examples"},"MPI Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'import sys\nfrom mpi4py import MPI\n\ncomm = MPI.COMM_WORLD\nid = comm.Get_rank()\np = comm.Get_size()\n\nif (id == 0):\n    print("There are ", p, "MPI processes running.")\n')),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=fKl2JW_qrso"},"https://www.youtube.com/watch?v=fKl2JW_qrso")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mpi4py.readthedocs.io/"},"https://mpi4py.readthedocs.io/"))))}h.isMDXComponent=!0}}]);