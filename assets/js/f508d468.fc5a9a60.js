"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[1066],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),f=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=f(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=f(n),b=i,g=p["".concat(c,".").concat(b)]||p[b]||s[b]||a;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:i,o[1]=u;for(var f=2;f<a;f++)o[f]=n[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},3514:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],u={title:"Curve fitting"},c=void 0,f={unversionedId:"scipy/curve-fitting",id:"scipy/curve-fitting",title:"Curve fitting",description:"The order of arguments for curve_fit: fitting function, independent variables,",source:"@site/docs/scipy/curve-fitting.md",sourceDirName:"scipy",slug:"/scipy/curve-fitting",permalink:"/python-tutorial/scipy/curve-fitting",draft:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/scipy/curve-fitting.md",tags:[],version:"current",frontMatter:{title:"Curve fitting"},sidebar:"docs",previous:{title:"Integration",permalink:"/python-tutorial/scipy/integration"},next:{title:"Convolution",permalink:"/python-tutorial/scipy/convolution"}},l={},p=[],s={toc:p};function b(e){var t=e.components,u=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'import numpy as np\nimport matplotlib.pyplot as plt\n%matplotlib inline\nplt.rcParams["figure.dpi"]=150\nplt.rcParams["figure.facecolor"]="white"\n\n# Generate our data\nx = np.linspace(0, 5, num=100)\ny = 2.5 * np.exp(0.5 * x) + np.random.rand(100)\n\n# plot our data\nplt.plot(x, y, \'.\')\nplt.show()\n')),(0,a.kt)("picture",null,(0,a.kt)("source",{type:"image/webp",srcSet:n(3515).Z}),(0,a.kt)("img",{src:n(2314).Z,alt:"scipy-curve-fit-data"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Input:" showLineNumbers',title:'"Input:"',showLineNumbers:!0},"from scipy import optimize\n\ndef fit_func(x, a, b):\n    return a * np.exp(b * x)\n\nparams, params_covariance = optimize.curve_fit(fit_func, x, y, p0=[1, 1])\n\nprint(params)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Output:"',title:'"Output:"'},"[2.77004013 0.48224117]\n")),(0,a.kt)("p",null,"The order of arguments for ",(0,a.kt)("inlineCode",{parentName:"p"},"curve_fit"),": fitting function, independent variables,\ndependent variable, initialization values for the coefficients (",(0,a.kt)("inlineCode",{parentName:"p"},"p0"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"# plot both data and fit function\nplt.plot(x, y, 'o', markersize='4', label='Data')\nplt.plot(x, fit_func(x, params[0], params[1]), c = 'r', label='Fit')\nplt.legend(frameon=False, loc=\"upper center\")\nplt.show()\n")),(0,a.kt)("picture",null,(0,a.kt)("source",{type:"image/webp",srcSet:n(2989).Z}),(0,a.kt)("img",{src:n(6039).Z,alt:"scipy-curve-fit"})))}b.isMDXComponent=!0},2314:function(e,t,n){t.Z=n.p+"assets/images/scipy-curve-fit-data-6309ed78efb92dc8323c3935d0ed789b.png"},3515:function(e,t){t.Z="data:image/webp;base64,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"},6039:function(e,t,n){t.Z=n.p+"assets/images/scipy-curve-fit-9ae89c32a6b46df884c0f8ba2176767b.png"},2989:function(e,t,n){t.Z=n.p+"assets/images/scipy-curve-fit-5b9a72087e2aaf4ea134526147bf8ca8.webp"}}]);