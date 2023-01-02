"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[5581],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,y=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1959:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],p={title:"Setup",slug:"/",keywords:["python","programming","tutorial","jupyter","matplotlib","numpy","pandas","scipy","data visualization","numerical python"]},i=void 0,s={unversionedId:"setup",id:"setup",title:"Setup",description:"Installing Python 3",source:"@site/docs/setup.md",sourceDirName:".",slug:"/",permalink:"/python-tutorial/",draft:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/setup.md",tags:[],version:"current",frontMatter:{title:"Setup",slug:"/",keywords:["python","programming","tutorial","jupyter","matplotlib","numpy","pandas","scipy","data visualization","numerical python"]},sidebar:"docs",next:{title:"Basics",permalink:"/python-tutorial/category/basics"}},u={},c=[{value:"Installing Python 3",id:"installing-python-3",level:3},{value:"pip",id:"pip",level:3},{value:"Installing Jupyterlab",id:"installing-jupyterlab",level:3},{value:"virtualenv",id:"virtualenv",level:3},{value:"Docker",id:"docker",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"installing-python-3"},"Installing Python 3"),(0,o.kt)("p",null,"If you use macOS (Big Sur/11 or higher), you should have Python 3 already\ninstalled. However, you might need to install Xcode Command Line Tools, you can\ndo that by opening Terminal and issuing following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"xcode-select --install\n")),(0,o.kt)("p",null,"You can check whether Python 3 is installed in your system or not by typing\nfollowing in a terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 --version\n")),(0,o.kt)("p",null,"If python 3 is installed, it will print the version number, otherwise you will\nsee some sort of error."),(0,o.kt)("p",null,"If you use Ubuntu/Debian, you can install Python and pip (python package\nmanager) by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install python3 python3-pip\n")),(0,o.kt)("p",null,"If you use Windows, you can go to ",(0,o.kt)("a",{parentName:"p",href:"https://www.python.org"},"https://www.python.org"),", download and\ninstall the latest version of Python 3."),(0,o.kt)("h3",{id:"pip"},"pip"),(0,o.kt)("p",null,"We can install python packages using the ",(0,o.kt)("inlineCode",{parentName:"p"},"pip")," package manager. To install a\nspecific package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install <package-name>\npip install numpy\npip install scipy matplotlib  # install multiple packages\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note that in some operating systems, ",(0,o.kt)("inlineCode",{parentName:"p"},"pip")," is referred as ",(0,o.kt)("inlineCode",{parentName:"p"},"pip3")," specifically\nfor the version corresponding to Python 3.")),(0,o.kt)("p",null,"We can list outdated python packages by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip list --outdated\n")),(0,o.kt)("p",null,"We can update outdated python packages by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade <package-name>\npip install --upgrade jupyterlab\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--upgrade")," flag can be used even if the package is not already installed,\nit will install the latest version. If a package is installed and a newer\nversion is available, it will upgrade to the latest version.")),(0,o.kt)("p",null,"You can install a list of python packages from a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pranabdas/python-tutorial/blob/master/requirements.txt"},"requirements.txt")," file.\nList each package name on separate line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="requirements.txt" showLineNumbers',title:'"requirements.txt"',showLineNumbers:!0},"jupyterlab\nnumpy\nscipy\nmatplotlib\n")),(0,o.kt)("p",null,"Installing a list of packages from ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade -r requirements.txt\n")),(0,o.kt)("h3",{id:"installing-jupyterlab"},"Installing Jupyterlab"),(0,o.kt)("p",null,"Jupyter notebook is a convenient way to run and document your python code. We\ncan install Jupyterlab by issuing following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install jupyterlab\n")),(0,o.kt)("p",null,"Now we can launch Jupyterlab by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"jupyter-lab")," in the terminal."),(0,o.kt)("h3",{id:"virtualenv"},"virtualenv"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv")," is a powerful way to manage dependencies in a python project. We\noften need some python packages specific to a project. Therefore it is not a\ngood idea to install every python packages globally. Instead we can use\n",(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv")," and keep our specific python packages local to that specific\nproject. First we need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv")," globally though:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade virtualenv\n")),(0,o.kt)("p",null,"Activate ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-project/\nvirtualenv venv\nsource venv/bin/activate\n")),(0,o.kt)("p",null,"Now we can install dependencies using ",(0,o.kt)("inlineCode",{parentName:"p"},"pip"),", and it will be stored inside the\n",(0,o.kt)("inlineCode",{parentName:"p"},"venv")," directory."),(0,o.kt)("p",null,"To leave the ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv")," run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deactivate\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt")," to list all required python packages for a project,\nand include ",(0,o.kt)("inlineCode",{parentName:"p"},"venv")," path in the ",(0,o.kt)("inlineCode",{parentName:"p"},".gitigone"),".")),(0,o.kt)("h3",{id:"docker"},"Docker"),(0,o.kt)("p",null,"We can run our whole python setup inside a container, isolated from our main\noperating system. First you need to install ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"docker"),". Then we can build our container image\nusing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pranabdas/python-tutorial/blob/master/Dockerfile"},"Dockerfile"),", you can\nadjust according to your needs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="Dockerfile" showLineNumbers',title:'"Dockerfile"',showLineNumbers:!0},'# Start from Ubuntu 22.04 LTS\nFROM ubuntu:jammy\n\n# Update OS\nRUN apt update && apt upgrade -y\n\n# Install software packages\nRUN apt install -y python3 python3-pip\n\n# Install pip packages\nRUN pip3 install jupyterlab numpy scipy matplotlib\n\n# jupyter-lab settings\nRUN mkdir /etc/jupyter && \\\n    (echo "c.ServerApp.ip = \'0.0.0.0\'" && \\\n     echo "c.ServerApp.allow_root = True" && \\\n     echo "c.ServerApp.open_browser = False") \\\n        >> /etc/jupyter/jupyter_server_config.py\n\n# leave in `/home` which we can map with the host\nWORKDIR /home\n')),(0,o.kt)("p",null,"Build the Docker image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t jupyter .\n")),(0,o.kt)("p",null,"Run Docker (you can either forward a specific port or if are using Linux, map\nhost network):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -ti -p 8888:8888 -v ${PWD}:/home jupyter bash\ndocker run -ti --net=host -v /host/path:/home jupyter bash\n")),(0,o.kt)("p",null,"Launch Jupyter notebook inside the container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"jupyter-lab\n")),(0,o.kt)("p",null,"Now we can create a new python 3 notebook, and start writing our python code.\nIn order to properly close a notebook, save the notebook (either from ",(0,o.kt)("em",{parentName:"p"},"File"),"\nmenu or the save icon) \u2192 ",(0,o.kt)("em",{parentName:"p"},"Close and Shutdown the Notebook")," (from ",(0,o.kt)("em",{parentName:"p"},"File")," menu),\nand finally shutdown the Jupyter server from the ",(0,o.kt)("em",{parentName:"p"},"File")," menu \u2192 ",(0,o.kt)("em",{parentName:"p"},"Shut down"),"."))}d.isMDXComponent=!0}}]);