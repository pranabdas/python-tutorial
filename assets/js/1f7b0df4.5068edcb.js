"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[3732],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},u=Object.keys(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(i,".").concat(f)]||m[f]||s[f]||u;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,l=new Array(u);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<u;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(6010),u="tabItem_OmH5";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(u,l),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7462),r=n(7294),u=n(2389),l=n(7392),o=n(7094),i=n(2466),p=n(6010),c="tabList_uSqn",s="tabItem_LplD";function m(e){var t,n,u,m=e.lazy,f=e.block,d=e.defaultValue,b=e.values,v=e.groupId,g=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var T=null===d?d:null!=(t=null!=d?d:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(u=y[0])?void 0:u.props.value;if(null!==T&&!h.some((function(e){return e.value===T})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var O=(0,o.U)(),w=O.tabGroupChoices,N=O.setTabGroupChoices,x=(0,r.useState)(T),E=x[0],Z=x[1],_=[],I=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var j=w[v];null!=j&&j!==E&&h.some((function(e){return e.value===j}))&&Z(j)}var D=function(e){var t=e.currentTarget,n=_.indexOf(t),a=h[n].value;a!==E&&(I(t),Z(a),null!=v&&N(v,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=_.indexOf(e.currentTarget)+1;n=_[a]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.currentTarget)-1;n=_[r]||_[_.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,p.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":f},g)},h.map((function(e){var t=e.value,n=e.label,u=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return _.push(e)},onKeyDown:P,onFocus:D,onClick:D},u,{className:(0,p.Z)("tabs__item",s,null==u?void 0:u.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),m?(0,r.cloneElement)(y.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function f(e){var t=(0,u.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},9620:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return f}});var a=n(7462),r=n(3366),u=(n(7294),n(3905)),l=n(9877),o=n(2360),i=["components"],p={title:"Function"},c=void 0,s={unversionedId:"basics/function",id:"basics/function",title:"Function",description:"Defining a function:",source:"@site/docs/basics/function.mdx",sourceDirName:"basics",slug:"/basics/function",permalink:"/python-tutorial/basics/function",draft:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/basics/function.mdx",tags:[],version:"current",frontMatter:{title:"Function"},sidebar:"docs",previous:{title:"Loop",permalink:"/python-tutorial/basics/loop"},next:{title:"Global variables",permalink:"/python-tutorial/basics/global-var"}},m={},f=[],d={toc:f};function b(e){var t=e.components,n=(0,r.Z)(e,i);return(0,u.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"Defining a function:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'def greeting():\n    name = "Pranab Das"\n    print("Good morning " + name)\n')),(0,u.kt)("p",null,"Later calling the function to print the greeting:"),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"greeting()\n"))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"Good morning Pranab Das\n")))),(0,u.kt)("p",null,"Function with argument:"),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'def greeting_new(name):\n    print("Good morning", name)\n\ngreeting_new("Pranab")\n'))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"Good morning Pranab\n")))),(0,u.kt)("p",null,"Some mathematical operations:"),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"def add_two_numbers(input_1, input_2):\n    result = input_1 + input_2\n    return result\n\nadd_two_numbers(23, 43)\n"))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"66\n")))),(0,u.kt)("p",null,"Get arbitrary number of input in a function:"),(0,u.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"input",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"def get_biggest_number(*args):\n    return max(args)\n\nget_biggest_number(2, 4, 1, 8)\n"))),(0,u.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"8\n")))))}b.isMDXComponent=!0}}]);