"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[5946],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,m=u["".concat(p,".").concat(c)]||u[c]||f[c]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6714:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"File read write"},p=void 0,s={unversionedId:"basics/file-io",id:"basics/file-io",title:"File read write",description:"Reading data from file",source:"@site/docs/basics/file-io.md",sourceDirName:"basics",slug:"/basics/file-io",permalink:"/python-tutorial/basics/file-io",draft:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/basics/file-io.md",tags:[],version:"current",frontMatter:{title:"File read write"},sidebar:"docs",previous:{title:"Class",permalink:"/python-tutorial/basics/class"},next:{title:"Visualization",permalink:"/python-tutorial/category/visualization"}},d={},f=[{value:"Reading data from file",id:"reading-data-from-file",level:3},{value:"Writing data to file",id:"writing-data-to-file",level:3},{value:"Using with open",id:"using-with-open",level:3},{value:"File I/O using numpy",id:"file-io-using-numpy",level:3}],u={toc:f};function c(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"reading-data-from-file"},"Reading data from file"),(0,i.kt)("p",null,"Being able to read data from files and write the data generated by your program\nis an essential part of programming."),(0,i.kt)("p",null,"Here we will open a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"xps-data.txt")," which is stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"datafiles"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pranabdas/python-tutorial/"},"directory"),"."),(0,i.kt)("p",null,"Our data file contains two columns of numbers; energy and intensity. We can read\nthe data following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# create two empty lists to store our energy and intensity values\nenergy = []\nintensity = []\n\nfid = open('../datafiles/xps-data.txt', 'r')\n# read one line at a time\ndata = fid.readlines()\nfid.close()\n\n# number of lines we have\nlines = len(data);\nfor lines in range(lines):\n    data_row = data[lines]\n\n    # remove the last newline character from each line\n    data_row = data_row[:-1]\n\n    # split in the tab character to separate energy and intensity strings\n    data_row = data_row.split('\\t')\n\n    # store them in our energy and intensity variables as float\n    energy.append(float(data_row[0]))\n    intensity.append(float(data_row[1]))\n")),(0,i.kt)("p",null,"Now that our data is stored in the energy and intensity variables. Best way to\nvisualize our data is to make a plot using matplotlib:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\n%matplotlib inline\n\nplt.figure(figsize = (10, 8))\nplt.plot(energy, intensity)\nplt.xlabel('Kinetic energy (eV)')\nplt.ylabel('Intensity (a.u.)')\nplt.show()\n")),(0,i.kt)("picture",null,(0,i.kt)("source",{type:"image/webp",srcset:n(4895).Z}),(0,i.kt)("img",{src:n(5711).Z,alt:"plot-two-col-data"})),(0,i.kt)("h3",{id:"writing-data-to-file"},"Writing data to file"),(0,i.kt)("p",null,"Now that we are able to read data from a file, and use in our program, let us\ntry to generate and save some data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nx = np.linspace(-2*np.pi, 2*np.pi, num = 100)\ny = (np.sin(x)/x)**2\n\nplt.figure(figsize = (10, 8))\nplt.plot(x, y)\nplt.xlabel('x')\nplt.ylabel('f(x)')\nplt.show()\n")),(0,i.kt)("picture",null,(0,i.kt)("source",{type:"image/webp",srcset:n(1133).Z}),(0,i.kt)("img",{src:n(2199).Z,alt:"func-plot"})),(0,i.kt)("p",null,"We can save the data as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"fid = open('../datafiles/data.txt', 'w')\n\nfor index in range(len(x)):\n    fid.write('{0}\\t{1}\\n'.format(x[index], y[index]))\nfid.close()\n")),(0,i.kt)("p",null,"We have stored our data in a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"data.txt"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The read mode is the default while opening files, if you need only read\npermission while opening a file, you can simply omit file mode argument after\nthe file name. It is important to close the files when it is not required in\norder to clear system resources. See the ",(0,i.kt)("inlineCode",{parentName:"p"},"with")," statement below, which\nautomatically closes the files."))),(0,i.kt)("h3",{id:"using-with-open"},"Using with open"),(0,i.kt)("p",null,"We can use another method to handle file operations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"with open('data.txt', 'r') as f:\n    data = f.read()\n")),(0,i.kt)("p",null,"There is an advantage of using the ",(0,i.kt)("inlineCode",{parentName:"p"},"with")," statement: the file is automatically\nclosed when it\u2019s not needed anymore."),(0,i.kt)("h3",{id:"file-io-using-numpy"},"File I/O using numpy"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"numpy")," has a helpful library to read/write formatted data files. We can do\nabove tasks following way using ",(0,i.kt)("inlineCode",{parentName:"p"},"numpy"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# read from file\ndata = np.loadtxt(\"../datafiles/xps-data.txt\")\n\n# plot\nplt.plot(data[:, 0], data[:, 1])\nplt.xlabel('Kinetic energy (eV)')\nplt.ylabel('Intensity (a.u.)')\nplt.show()\n\n# save to file\ndata = np.array([x, y]).T\nnp.savetxt(\"../datafiles/data.txt\", data)\n")),(0,i.kt)("p",null,"For loading a bit more complex data file with headers and comments lines, see\nthis example: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pranabdas/python-tutorial/blob/master/notebooks/Quantum-Design-SQIUD-data-loader.ipynb"},"Quantum Design SQUID data loader notebook"),"."))}c.isMDXComponent=!0},2199:function(e,t,n){t.Z=n.p+"assets/images/func-plot-b5d83c4e3eacda17ed72fddaa79d57cd.png"},1133:function(e,t){t.Z="data:image/webp;base64,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"},5711:function(e,t,n){t.Z=n.p+"assets/images/plot-two-col-data-ac1e24056f10166f600f85acffb7ddbd.png"},4895:function(e,t,n){t.Z=n.p+"assets/images/plot-two-col-data-6878b253cee00958af41027a39fcd5b4.webp"}}]);