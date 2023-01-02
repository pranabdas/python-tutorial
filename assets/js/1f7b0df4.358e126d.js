"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[3732],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},u=Object.keys(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,d=s["".concat(i,".").concat(f)]||s[f]||m[f]||u;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,l=new Array(u);l[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<u;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(6010),u="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(u,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7462),r=n(7294),u=n(6010),l=n(2389),o=n(7392),i=n(7094),p=n(2466),c="tabList__CuJ",s="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,f=e.defaultValue,d=e.values,b=e.groupId,v=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.l)(y,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===f?f:null!=(t=null!=f?f:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,i.U)(),O=T.tabGroupChoices,N=T.setTabGroupChoices,w=(0,r.useState)(k),x=w[0],E=w[1],Z=[],_=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var I=O[b];null!=I&&I!==x&&y.some((function(e){return e.value===I}))&&E(I)}var P=function(e){var t=e.currentTarget,n=Z.indexOf(t),a=y[n].value;a!==x&&(_(t),E(a),null!=b&&N(b,String(a)))},j=function(e){var t,n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":var a,r=Z.indexOf(e.currentTarget)+1;n=null!=(a=Z[r])?a:Z[0];break;case"ArrowLeft":var u,l=Z.indexOf(e.currentTarget)-1;n=null!=(u=Z[l])?u:Z[Z.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},v)},y.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:j,onClick:P},l,{className:(0,u.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function f(e){var t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},9620:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return f}});var a=n(7462),r=n(3366),u=(n(7294),n(3905)),l=n(5488),o=n(5162),i=["components"],p={title:"Function"},c=void 0,s={unversionedId:"basics/function",id:"basics/function",title:"Function",description:"Defining a function:",source:"@site/docs/basics/function.mdx",sourceDirName:"basics",slug:"/basics/function",permalink:"/python-tutorial/basics/function",draft:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/basics/function.mdx",tags:[],version:"current",frontMatter:{title:"Function"},sidebar:"docs",previous:{title:"Loop",permalink:"/python-tutorial/basics/loop"},next:{title:"Global variables",permalink:"/python-tutorial/basics/global-var"}},m={},f=[],d={toc:f};function b(e){var t=e.components,n=(0,r.Z)(e,i);return(0,u.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"Defining a function:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'def greeting():\n    name = "Pranab Das"\n    print("Good morning " + name)\n')),(0,u.kt)("p",null,"Later calling the function to print the greeting:"),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"greeting()\n"))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"Good morning Pranab Das\n")))),(0,u.kt)("p",null,"Function with argument:"),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'def greeting_new(name):\n    print("Good morning", name)\n\ngreeting_new("Pranab")\n'))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"Good morning Pranab\n")))),(0,u.kt)("p",null,"Some mathematical operations:"),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"def add_two_numbers(input_1, input_2):\n    result = input_1 + input_2\n    return result\n\nadd_two_numbers(23, 43)\n"))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"66\n")))),(0,u.kt)("p",null,"Get arbitrary number of input in a function:"),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"def get_biggest_number(*args):\n    return max(args)\n\nget_biggest_number(2, 4, 1, 8)\n"))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"8\n")))))}b.isMDXComponent=!0}}]);