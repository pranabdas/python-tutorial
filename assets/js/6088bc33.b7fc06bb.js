"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[5312],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2360:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(7294),a=t(6010),o="tabItem_OmH5";function l(e){var n=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7462),a=t(7294),o=t(2389),l=t(7392),u=t(7094),i=t(2466),p=t(6010),s="tabList_uSqn",c="tabItem_LplD";function m(e){var n,t,o,m=e.lazy,d=e.block,f=e.defaultValue,b=e.values,v=e.groupId,h=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=b?b:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,l.l)(y,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===f?f:null!=(n=null!=f?f:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=g[0])?void 0:o.props.value;if(null!==w&&!y.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),T=N.tabGroupChoices,O=N.setTabGroupChoices,E=(0,a.useState)(w),x=E[0],j=E[1],I=[],Z=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var D=T[v];null!=D&&D!==x&&y.some((function(e){return e.value===D}))&&j(D)}var P=function(e){var n=e.currentTarget,t=I.indexOf(n),r=y[t].value;r!==x&&(Z(n),j(r),null!=v&&O(v,r))},_=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=I.indexOf(e.currentTarget)+1;t=I[r]||I[0];break;case"ArrowLeft":var a=I.indexOf(e.currentTarget)-1;t=I[a]||I[I.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,p.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":d},h)},y.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return I.push(e)},onKeyDown:_,onFocus:P,onClick:P},o,{className:(0,p.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),m?(0,a.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function d(e){var n=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},2634:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=t(9877),u=t(2360),i=["components"],p={title:"Loop"},s=void 0,c={unversionedId:"basics/loop",id:"basics/loop",title:"Loop",description:"for loop",source:"@site/docs/basics/loop.mdx",sourceDirName:"basics",slug:"/basics/loop",permalink:"/python-tutorial/basics/loop",draft:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/basics/loop.mdx",tags:[],version:"current",frontMatter:{title:"Loop"},sidebar:"docs",previous:{title:"Flow control",permalink:"/python-tutorial/basics/flow-control"},next:{title:"Function",permalink:"/python-tutorial/basics/function"}},m={},d=[{value:"for loop",id:"for-loop",level:3},{value:"while loop",id:"while-loop",level:3},{value:"break",id:"break",level:3},{value:"continue",id:"continue",level:3}],f={toc:d};function b(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"for-loop"},"for loop"),(0,o.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"input",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"for i in range(10):\n    print(i)\n"))),(0,o.kt)(u.Z,{value:"output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n")))),(0,o.kt)("h3",{id:"while-loop"},"while loop"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'prompt = "\\nTell me something, and I will repeat it back to you:"\nprompt += "\\nEnter \'quit\' to end the program. "\n\nmessage = ""\nwhile message != \'quit\':\n    message = input(prompt)\n    print(message)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use a ",(0,o.kt)("inlineCode",{parentName:"li"},"flag")," to do the same:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"prompt = \"\\nTell me something, and I will repeat it back to you:\"\nprompt += \"\\nEnter 'quit' to end the program. \"\n\nactive = True\nwhile active:\n    message = input(prompt)\n\n    if message == 'quit':\n        active = False\n    else:\n        print(message)\n")),(0,o.kt)("h3",{id:"break"},"break"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"prompt = \"\\nTell me something, and I will repeat it back to you:\"\nprompt += \"\\nEnter 'quit' to end the program. \"\n\nwhile True:\n    message = input(prompt)\n\n    if message == 'quit':\n        break\n    else:\n        print(message)\n")),(0,o.kt)("h3",{id:"continue"},"continue"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"continue")," takes to the beginging of loop."),(0,o.kt)(l.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"input",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"current_num = 0\nwhile current_num < 10:\n    current_num += 1\n    if current_num % 2 == 0:\n        continue\n    print(current_num)  # print odd numbers only\n"))),(0,o.kt)(u.Z,{value:"output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"1\n3\n5\n7\n9\n")))))}b.isMDXComponent=!0}}]);