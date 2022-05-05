"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[3484],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),m=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=m(t.components);return a.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,l=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),g=m(n),u=r,h=g["".concat(l,".").concat(u)]||g[u]||c[u]||s;return n?a.createElement(h,i(i({ref:e},o),{},{components:n})):a.createElement(h,i({ref:e},o))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,i=new Array(s);i[0]=g;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<s;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6813:function(t,e,n){n.r(e),n.d(e,{assets:function(){return o},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return c}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),i=["components"],p={title:"Image plot"},l=void 0,m={unversionedId:"matplotlib/image-plot",id:"matplotlib/image-plot",title:"Image plot",description:"Here we will read some two dimensional array data from web url.",source:"@site/docs/matplotlib/image-plot.md",sourceDirName:"matplotlib",slug:"/matplotlib/image-plot",permalink:"/python-tutorial/matplotlib/image-plot",draft:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/matplotlib/image-plot.md",tags:[],version:"current",frontMatter:{title:"Image plot"},sidebar:"docs",previous:{title:"Contour plot",permalink:"/python-tutorial/matplotlib/contour-plot"},next:{title:"Function plot",permalink:"/python-tutorial/matplotlib/function-plot"}},o={},c=[{value:"pcolormesh",id:"pcolormesh",level:3}],g={toc:c};function u(t){var e=t.components,p=(0,r.Z)(t,i);return(0,s.kt)("wrapper",(0,a.Z)({},g,p,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Here we will read some two dimensional array data from web url."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"import urllib\nurl = \"https://pranabdas.github.io/drive/datasets/arpes/sample_spectrum.txt\"\nheaders = {'User-Agent': 'Mozilla/5.0'}\nreq = urllib.request.Request(url = url, headers = headers)\ndata = urllib.request.urlopen(req).read().decode()\n")),(0,s.kt)("p",null,"Write a helper function to extract data:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'def load_data(data) :\n    import numpy as np\n    contents = data.splitlines()\n    energy_length = contents[7]\n    start_string = contents[7].find("=") + 1\n    end_string = len(contents[7])\n    energy_length = int(contents[7][start_string : end_string])\n\n    angle_length = contents[10]\n    start_string = contents[10].find("=") + 1\n    end_string = len(contents[10])\n    angle_length = int(contents[10][start_string : end_string])\n\n    angle = contents[11]\n    start_string = contents[11].find("=") + 1\n    end_string = len(contents[11])\n    angle_temp = contents[11][start_string : end_string]\n\n    angle = np.linspace(0, 0, angle_length)\n\n    start_string = 0\n    for ii in range(angle_length):\n        end_string = angle_temp.find(" ", start_string)\n        angle[ii] = float(angle_temp[start_string : end_string])\n        start_string = end_string + 1\n\n    energy = np.linspace(0, 0, energy_length)\n\n    intensity = np.ndarray((energy_length, angle_length))\n\n    for ii in range(energy_length):\n        intensity_temp = contents[57 + ii]\n        end_string = len(intensity_temp)\n        intensity_temp = intensity_temp[1 : end_string]\n\n        start_string = 0\n        for jj in range(angle_length + 1):\n            end_string = intensity_temp.find("  ", start_string)\n            if jj == 0 :\n                energy[ii] = float(intensity_temp[start_string : end_string])\n                start_string = end_string + 1\n            elif jj > 0 :\n                intensity[ii][jj - 1] = float(intensity_temp[start_string : \\\n                         end_string])\n                start_string = end_string + 1\n    return energy, angle, intensity\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"import matplotlib.pyplot as plt\n%matplotlib inline\nplt.rcParams[\"figure.dpi\"]=150\nplt.rcParams[\"figure.facecolor\"]=\"white\"\n\nenergy, angle, spectra = load_data(data)\n\nplt.imshow(spectra, origin = 'lower', aspect = 'auto')\nplt.set_cmap('magma_r')\nplt.show()\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-plot",src:n(7577).Z,width:"781",height:"524"})),(0,s.kt)("p",null,"With some customizations:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"plt.imshow(spectra, origin = 'lower', aspect = 'auto', \\\n           extent = (angle[0], angle[-1], energy[0], energy[-1]))\nplt.xlabel(\"$\\\\theta$ (deg)\")\nplt.ylabel('$E_{kin}$ (eV)')\nplt.set_cmap('magma_r')\nplt.show()\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-plot",src:n(1164).Z,width:"820",height:"549"})),(0,s.kt)("h3",{id:"pcolormesh"},"pcolormesh"),(0,s.kt)("p",null,"There is also MATLAB style image plot function, which accepts ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),", ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"y")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"))))),", and\n",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(x,y)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," as inputs. Let us also set a different colormap style."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"plt.pcolormesh(angle, energy, spectra, cmap='jet', shading='auto')\nplt.show()\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"pcolormesh",src:n(7853).Z,width:"788",height:"517"})))}u.isMDXComponent=!0},1164:function(t,e,n){e.Z=n.p+"assets/images/image-plot-2-c5013947bb286d5ca32b0020aa6deafb.png"},7577:function(t,e,n){e.Z=n.p+"assets/images/image-plot-ef2ec4209a2509ba80b57935a622a392.png"},7853:function(t,e,n){e.Z=n.p+"assets/images/pcolormesh-447876e70aaa3cd2703fc2aff0c846e3.png"}}]);