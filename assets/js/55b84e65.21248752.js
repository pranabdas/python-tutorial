"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([["2440"],{8757:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>u});var a=JSON.parse('{"id":"basics/gs","title":"Python Basics","description":"Python is a dynamically typed, interpreted language. Python interpreter is","source":"@site/docs/basics/gs.mdx","sourceDirName":"basics","slug":"/basics/gs","permalink":"/python-tutorial/basics/gs","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/python-tutorial/blob/main/docs/basics/gs.mdx","tags":[],"version":"current","frontMatter":{"title":"Python Basics","sidebar_label":"Get started"},"sidebar":"docs","previous":{"title":"Basics","permalink":"/python-tutorial/category/basics"},"next":{"title":"List, tuple, dictionary","permalink":"/python-tutorial/basics/list-tuple-dict"}}'),l=t("5893"),r=t("65"),i=t("7902"),s=t("5525");let u={title:"Python Basics",sidebar_label:"Get started"},o=void 0,c={},d=[{value:"Hello Python",id:"hello-python",level:3},{value:"Assigning variables",id:"assigning-variables",level:3},{value:"String concatenation",id:"string-concatenation",level:3},{value:"Loosely typed",id:"loosely-typed",level:3},{value:"Input",id:"input",level:3},{value:"Type conversion",id:"type-conversion",level:3},{value:"String formatting",id:"string-formatting",level:3}];function p(e){let n={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Python is a dynamically typed, interpreted language. Python interpreter is\nwritten in C-language. Interpreter program reads and performs the Python codes/\ninstructions. The interpreters interacts with the operating system layer (use\nnetwork, keyboard, mouse, monitor, hard drive etc.)."}),"\n",(0,l.jsx)(n.h3,{id:"hello-python",children:"Hello Python"}),"\n",(0,l.jsx)(n.p,{children:"It is customary to write our first program that prints some message in the\nscreen:"}),"\n",(0,l.jsxs)(i.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(s.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'print("Hello Python!")\n'})})}),(0,l.jsx)(s.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"Hello Python!\n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"assigning-variables",children:"Assigning variables"}),"\n",(0,l.jsxs)(i.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(s.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"a = 5\nb = 3\na + b\n"})})}),(0,l.jsx)(s.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"8\n"})})})]}),"\n",(0,l.jsxs)(i.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(s.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"a * b\n"})})}),(0,l.jsx)(s.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"15\n"})})})]}),"\n",(0,l.jsxs)(i.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(s.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"a - b\n"})})}),(0,l.jsx)(s.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"2\n"})})})]}),"\n",(0,l.jsxs)(n.admonition,{title:"Good to know",type:"tip",children:[(0,l.jsx)(n.p,{children:"Due to how the numbers are stored in computer memory, floating point algebra\nsometimes might produce unexpected results. Notice the following discrepancy\n(floating point addition/ subtraction is not associative):"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:">>> (1.2 + 1E20) - 1E20\n0.0\n>>> 1.2 + (1E20 - 1E20)\n1.2\n"})})]}),"\n",(0,l.jsx)(n.h3,{id:"string-concatenation",children:"String concatenation"}),"\n",(0,l.jsxs)(i.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(s.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'greeting = "Hello"\nname = "Pranab"\nprint(greeting + " " + name)\n'})})}),(0,l.jsx)(s.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"Hello Pranab\n"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["For performance improvement and better readability, consider using ",(0,l.jsx)(n.code,{children:"join"}),"\ninstead of in-place string concatenation."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'" ".join([greeting, name])\n'})}),"\n",(0,l.jsx)(n.h3,{id:"loosely-typed",children:"Loosely typed"}),"\n",(0,l.jsx)(n.p,{children:"As we have seen, we do not need to define the datatype in python. Interestingly,\nfor certain operations, we can even mix types:"}),"\n",(0,l.jsxs)(i.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(s.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'my_str = "Rain! "\nmy_str * 3  # multiplying a str with int\n'})})}),(0,l.jsx)(s.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"'Rain! Rain! Rain! '\n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"input",children:"Input"}),"\n",(0,l.jsx)(n.p,{children:"Collecting user input:"}),"\n",(0,l.jsxs)(i.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(s.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'age = input("How old are you? ")\ntype(age)\n'})})}),(0,l.jsx)(s.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"How old are you? 34\n<class 'str'>\n"})})})]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["Notice that variable assigned from ",(0,l.jsx)(n.code,{children:"input"})," is a string, even if a number is\nentered."]})}),"\n",(0,l.jsx)(n.h3,{id:"type-conversion",children:"Type conversion"}),"\n",(0,l.jsxs)(i.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(s.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"age = int(age)\ntype(age)\n"})})}),(0,l.jsx)(s.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"<class 'int'>\n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"string-formatting",children:"String formatting"}),"\n",(0,l.jsxs)(i.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(s.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'"Singapore".upper()\n'})})}),(0,l.jsx)(s.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"'SINGAPORE'\n"})})})]}),"\n",(0,l.jsxs)(i.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(s.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'"Singapore".lower()\n'})})}),(0,l.jsx)(s.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"'singapore'\n"})})})]}),"\n",(0,l.jsxs)(i.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(s.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'"das".capitalize()\n'})})}),(0,l.jsx)(s.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"'Das'\n"})})})]}),"\n",(0,l.jsxs)(i.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(s.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'"pranab das".title()\n'})})}),(0,l.jsx)(s.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"'Pranab Das'\n"})})})]}),"\n",(0,l.jsxs)(i.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(s.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'"ABCDefgh".swapcase()\n'})})}),(0,l.jsx)(s.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"'abcdEFGH'\n"})})})]}),"\n",(0,l.jsxs)(i.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],children:[(0,l.jsx)(s.Z,{value:"input",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"name = 'Pranab'\nage = 34\nprint(\"Name: {0}. Age: {1} years.\".format(name, age))\n"})})}),(0,l.jsx)(s.Z,{value:"output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"Name: Pranab. Age: 34 years.\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"You can also format in the following way:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'print("Name: {name}. Age: {age} years.".format(name=name, age=age))\n'})}),"\n",(0,l.jsx)(n.p,{children:"Starting from Python 3.6 and above:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'print(f"Name: {name}. Age: {age} years.")\n'})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},5525:function(e,n,t){t.d(n,{Z:()=>i});var a=t("5893");t("7294");var l=t("7026");let r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t,children:n})}},7902:function(e,n,t){t.d(n,{Z:()=>f});var a=t("5893"),l=t("7294"),r=t("7026"),i=t("9599"),s=t("6550"),u=t("2000"),o=t("4520"),c=t("8341"),d=t("6009");function p(e){var n,t;return null!==(t=null===(n=l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function h(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var g=t("7227");let v="tabList__CuJ",x="tabItem_LNqP";function m(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:u}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let n=e.currentTarget,t=u[o.indexOf(n)].value;t!==l&&(c(n),s(t))},p=e=>{var n,t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=o.indexOf(e.currentTarget)+1;a=null!==(n=o[t])&&void 0!==n?n:o[0];break}case"ArrowLeft":{let n=o.indexOf(e.currentTarget)-1;a=null!==(t=o[n])&&void 0!==t?t:o[o.length-1]}}null==a||a.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:u.map(e=>{let{value:n,label:t,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>o.push(e),onKeyDown:p,onClick:d,...i,className:(0,r.Z)("tabs__item",x,null==i?void 0:i.className,{"tabs__item--active":l===n}),children:null!=t?t:n},n)})})}function j(e){let{lazy:n,children:t,selectedValue:i}=e,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===i);return e?(0,l.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function y(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:a}=e,r=function(e){let{values:n,children:t}=e;return(0,l.useMemo)(()=>{let e=null!=n?n:p(t).map(e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(n.map(e=>e.value).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[n,t])}(e),[i,g]=(0,l.useState)(()=>(function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(t,'" but none of its children has the corresponding value. Available values are: ').concat(a.map(e=>e.value).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return t}let l=null!==(n=a.find(e=>e.default))&&void 0!==n?n:a[0];if(!l)throw Error("Unexpected error: 0 tabValues");return l.value})({defaultValue:n,tabValues:r})),[v,x]=function(e){let{queryString:n=!1,groupId:t}=e,a=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t}),i=(0,o._X)(r);return[i,(0,l.useCallback)(e=>{if(!r)return;let n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})},[r,a])]}({queryString:t,groupId:a}),[m,j]=function(e){var n;let{groupId:t}=e;let a=(n=t)?"docusaurus.tab.".concat(n):null,[r,i]=(0,d.Nk)(a);return[r,(0,l.useCallback)(e=>{if(!!a)i.set(e)},[a,i])]}({groupId:a}),y=(()=>{let e=null!=v?v:m;return h({value:e,tabValues:r})?e:null})();return(0,u.Z)(()=>{y&&g(y)},[y]),{selectedValue:i,selectValue:(0,l.useCallback)(e=>{if(!h({value:e,tabValues:r}))throw Error("Can't select invalid tab value=".concat(e));g(e),x(e),j(e)},[x,j,r]),tabValues:r}}(e);return(0,a.jsxs)("div",{className:(0,r.Z)("tabs-container",v),children:[(0,a.jsx)(m,{...n,...e}),(0,a.jsx)(j,{...n,...e})]})}function f(e){let n=(0,g.Z)();return(0,a.jsx)(y,{...e,children:p(e.children)},String(n))}},65:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return i}});var a=t(7294);let l={},r=a.createContext(l);function i(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);