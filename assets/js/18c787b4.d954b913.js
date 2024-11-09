"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([["5024"],{8509:function(t,e,n){n.r(e),n.d(e,{metadata:()=>i,contentTitle:()=>p,default:()=>u,assets:()=>s,toc:()=>a,frontMatter:()=>l});var i=JSON.parse('{"id":"matplotlib/interactive-plots","title":"Interactive plots using ipywidgets","description":"Please try the interactive slider in a jupyter notebook, and see how the figure","source":"@site/docs/matplotlib/interactive-plots.md","sourceDirName":"matplotlib","slug":"/matplotlib/interactive-plots","permalink":"/python-tutorial/matplotlib/interactive-plots","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/python-tutorial/blob/main/docs/matplotlib/interactive-plots.md","tags":[],"version":"current","frontMatter":{"title":"Interactive plots using ipywidgets","sidebar_label":"Interactive plots"},"sidebar":"docs","previous":{"title":"Inset zoom","permalink":"/python-tutorial/matplotlib/inset-zoom"},"next":{"title":"3D spherical plots","permalink":"/python-tutorial/matplotlib/3d-sph"}}'),o=n("5893"),r=n("65");let l={title:"Interactive plots using ipywidgets",sidebar_label:"Interactive plots"},p=void 0,s={},a=[];function c(t){let e={code:"code",p:"p",pre:"pre",...(0,r.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",metastring:"showLineNumbers",children:'import numpy as np\nimport matplotlib.pyplot as plt\nfrom ipywidgets import interactive\n%matplotlib inline\nplt.rcParams["figure.dpi"]=150\nplt.rcParams["figure.facecolor"]="white"\n\ndef plot_func(m, n):\n    x = np.linspace(0, 4*np.pi, num=1000)\n    y = np.sin(2*np.pi*x/m) + np.sin(2*np.pi*x/n)\n    plt.plot(x, y)\n    plt.xlabel("x")\n    plt.ylabel("sin(2$\\\\pi$x/m) + sin(2$\\\\pi$x/n)")\n    plt.show()\n\ninteractive_plot = interactive(plot_func, m=(0, 5, 1), n=(0, 5, 1))\noutput = interactive_plot.children[-1]\ninteractive_plot\n'})}),"\n",(0,o.jsxs)("picture",{children:[(0,o.jsx)("source",{type:"image/webp",srcSet:n(1818).Z}),(0,o.jsx)("img",{src:n(6032).Z,alt:"ipywidgets"})]}),"\n",(0,o.jsx)(e.p,{children:"Please try the interactive slider in a jupyter notebook, and see how the figure\nchanges."})]})}function u(t={}){let{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(c,{...t})}):c(t)}},6032:function(t,e,n){n.d(e,{Z:function(){return i}});let i=n.p+"assets/images/ipywidgets-a7500ee00afb97de3b1c870052ce5910.png"},1818:function(t,e,n){n.d(e,{Z:function(){return i}});let i=n.p+"assets/images/ipywidgets-ce97f31b13df40c636af93059128bb85.webp"},65:function(t,e,n){n.d(e,{Z:function(){return p},a:function(){return l}});var i=n(7294);let o={},r=i.createContext(o);function l(t){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function p(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:l(t.components),i.createElement(r.Provider,{value:e},t.children)}}}]);