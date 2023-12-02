"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[9882],{1568:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var n=o(5893),i=o(1151);const l={title:"Customizing matplotlib plots",sidebar_label:"Customizing matplotlib"},a=void 0,r={id:"matplotlib/mpl-customizations",title:"Customizing matplotlib plots",description:"You can customize every aspect of Matplotlib according to your needs and likes.",source:"@site/docs/matplotlib/mpl-customizations.md",sourceDirName:"matplotlib",slug:"/matplotlib/mpl-customizations",permalink:"/python-tutorial/matplotlib/mpl-customizations",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/matplotlib/mpl-customizations.md",tags:[],version:"current",frontMatter:{title:"Customizing matplotlib plots",sidebar_label:"Customizing matplotlib"},sidebar:"docs",previous:{title:"Geo-plots",permalink:"/python-tutorial/matplotlib/geo-plot"},next:{title:"Custom colormap",permalink:"/python-tutorial/matplotlib/custom-colormap"}},s={},c=[{value:"Interactive backend",id:"interactive-backend",level:3},{value:"Overriding default colors",id:"overriding-default-colors",level:3}];function p(t){const e={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:["You can customize every aspect of Matplotlib according to your needs and likes.\nIf you want to apply certain set of styles universally, you can edit the\n",(0,n.jsx)(e.code,{children:"matplotlibrc"})," file. In macOS, the files resides in\n",(0,n.jsx)(e.code,{children:"/Library/Frameworks/Python.framework/Versions/3.7/lib/python3.7/site-packages/matplotlib/mpl-data/matplotlibrc"}),".\nThe path may differ depending on your installation type and operating system.\nYou can edit the file there, but the problem is it will be overwritten if you\nupgrade matplotlib. To avoid overwriting, copy the file to\n",(0,n.jsx)(e.code,{children:"~/.matplotlib/matplotlibrc"})," and edit under your home directory. The\n",(0,n.jsx)(e.code,{children:"matplotlibrc"})," file locations maybe different depending on the operating system.\nYou can get a copy of sample ",(0,n.jsx)(e.code,{children:"matplotlibrc"})," file ",(0,n.jsx)(e.a,{href:"https://matplotlib.org/tutorials/introductory/customizing.html#matplotlibrc-sample",children:"here"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["Unfortunately, some settings are not correctly applied while using\n",(0,n.jsx)(e.code,{children:"%matplotlib inline"})," in Jupyter notebook. Settings we need to apply in the\nJupyter notebook:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:'plt.rcParams["figure.figsize"] = (8, 6)\nplt.rcParams["figure.dpi"] = 150\n'})}),"\n",(0,n.jsx)(e.h3,{id:"interactive-backend",children:"Interactive backend"}),"\n",(0,n.jsx)(e.p,{children:"If you want interactive plots, like ability to zoom, pan, read cursor position\netc., you can use notebook backend in your jupyter notebook:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"%matplotlib notebook\n"})}),"\n",(0,n.jsxs)(e.admonition,{type:"danger",children:[(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.code,{children:"notebook"})," interactive mode does not work in Jupyterlab at the moment, it is\nonly supported in classic notebooks. However, you can install ",(0,n.jsx)(e.code,{children:"ipympl"})," backend\nand instead use:"]}),(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-py",children:"%matplotlib widget\n"})})]}),"\n",(0,n.jsx)(e.p,{children:"There are also Qt based backend that can show plot on it's own window and allows\nmore interactivity."}),"\n",(0,n.jsx)(e.h3,{id:"overriding-default-colors",children:"Overriding default colors"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",metastring:"showLineNumbers",children:"import numpy as np\nimport matplotlib.pyplot as plt\n%matplotlib inline\nplt.rcParams[\"figure.dpi\"]=150\nplt.rcParams[\"figure.facecolor\"]=\"white\"\n\ncolor = ['#CD6155','#808B96','#9B59B6','#99A3A4','#7D6608',\\\n         '#F39C12','#2980B9','#16A085','#ABEBC6','#AED6F1']\n\nx = np.linspace(0, 4*np.pi, 100)\n\nfor i in range(10):\n    plt.plot(x, (i+1)*np.sin(x))\nplt.show()\n"})}),"\n",(0,n.jsxs)("picture",{children:[(0,n.jsx)("source",{type:"image/webp",srcSet:o(9330).Z}),(0,n.jsx)("img",{src:o(5657).Z,alt:"custom-color"})]})]})}function d(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(p,{...t})}):p(t)}},5657:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/custom-color-6e5d6ea6b641cea7a943f382b03c2b7a.png"},9330:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/custom-color-569f19c3dee344be1d57a03e6d0373e0.webp"},1151:(t,e,o)=>{o.d(e,{Z:()=>r,a:()=>a});var n=o(7294);const i={},l=n.createContext(i);function a(t){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),n.createElement(l.Provider,{value:e},t.children)}}}]);