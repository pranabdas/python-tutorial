"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[1140],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return N}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),l=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),c=l(a),N=r,d=c["".concat(m,".").concat(N)]||c[N]||u[N]||s;return a?n.createElement(d,p(p({ref:t},o),{},{components:a})):n.createElement(d,p({ref:t},o))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,p=new Array(s);p[0]=c;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<s;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2360:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),r=a(6010),s="tabItem_OmH5";function p(e){var t=e.children,a=e.hidden,p=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,p),hidden:a},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(7462),r=a(7294),s=a(2389),p=a(7392),i=a(7094),m=a(2466),l=a(6010),o="tabList_uSqn",u="tabItem_LplD";function c(e){var t,a,s,c=e.lazy,N=e.block,d=e.defaultValue,f=e.values,h=e.groupId,y=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,p.l)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(s=g[0])?void 0:s.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),x=w.tabGroupChoices,O=w.setTabGroupChoices,T=(0,r.useState)(b),E=T[0],I=T[1],j=[],D=(0,m.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var Z=x[h];null!=Z&&Z!==E&&k.some((function(e){return e.value===Z}))&&I(Z)}var P=function(e){var t=e.currentTarget,a=j.indexOf(t),n=k[a].value;n!==E&&(D(t),I(n),null!=h&&O(h,n))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=j.indexOf(e.currentTarget)+1;a=j[n]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;a=j[r]||j[j.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",o)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":N},y)},k.map((function(e){var t=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return j.push(e)},onKeyDown:C,onFocus:P,onClick:P},s,{className:(0,l.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),c?(0,r.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function N(e){var t=(0,s.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},9492:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return N}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),p=a(9877),i=a(2360),m=["components"],l={title:"Integration"},o=void 0,u={unversionedId:"scipy/integration",id:"scipy/integration",title:"Integration",description:"Let's say, we want to perform the following integration:",source:"@site/docs/scipy/integration.mdx",sourceDirName:"scipy",slug:"/scipy/integration",permalink:"/python-tutorial/scipy/integration",draft:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/scipy/integration.mdx",tags:[],version:"current",frontMatter:{title:"Integration"},sidebar:"docs",previous:{title:"scipy",permalink:"/python-tutorial/category/scipy"},next:{title:"Curve fitting",permalink:"/python-tutorial/scipy/curve-fitting"}},c={},N=[],d={toc:N};function f(e){var t=e.components,a=(0,r.Z)(e,m);return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Let's say, we want to perform the following integration:"),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"I"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("msubsup",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"msubsup"},"\u222b"),(0,s.kt)("mn",{parentName:"msubsup"},"0"),(0,s.kt)("mi",{parentName:"msubsup"},"\u03c0")),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"I = \\int_{0}^{\\pi} sin(x) dx")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"2.3262em",verticalAlign:"-0.9119em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},(0,s.kt)("span",{parentName:"span",className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011em"}},"\u222b"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.4143em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-1.7881em",marginLeft:"-0.4445em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.8129em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"\u03c0"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9119em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"in"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))),(0,s.kt)(p.Z,{defaultValue:"input",values:[{label:"Input",value:"input"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"input",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"from scipy.integrate import quad\nimport numpy as np\n\n# Define the function\ndef integrand(x):\n    return np.sin(x)\n\nI = quad(integrand, 0, np.pi)\nprint(I)\n"))),(0,s.kt)(i.Z,{value:"output",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"(2.0, 2.220446049250313e-14)\n")))),(0,s.kt)("p",null,"It returns the result and error bound."))}f.isMDXComponent=!0}}]);