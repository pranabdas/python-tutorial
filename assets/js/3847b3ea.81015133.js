"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[5581],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),d=l,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return t?a.createElement(h,r(r({ref:n},u),{},{components:t})):a.createElement(h,r({ref:n},u))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1959:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=t(7462),l=t(3366),o=(t(7294),t(3905)),r=["components"],i={title:"Setup",slug:"/",keywords:["python","programming","tutorial","jupyter","matplotlib","numpy","pandas","scipy","data visualization","numerical python"]},p=void 0,s={unversionedId:"setup",id:"setup",title:"Setup",description:"Installing Python 3",source:"@site/docs/setup.md",sourceDirName:".",slug:"/",permalink:"/python-tutorial/",draft:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/setup.md",tags:[],version:"current",frontMatter:{title:"Setup",slug:"/",keywords:["python","programming","tutorial","jupyter","matplotlib","numpy","pandas","scipy","data visualization","numerical python"]},sidebar:"docs",next:{title:"Basics",permalink:"/python-tutorial/category/basics"}},u={},c=[{value:"Installing Python 3",id:"installing-python-3",level:2},{value:"pip",id:"pip",level:2},{value:"Installing Jupyterlab",id:"installing-jupyterlab",level:2},{value:"virtualenv",id:"virtualenv",level:2},{value:"Pyenv",id:"pyenv",level:2},{value:"Docker",id:"docker",level:2},{value:"Intel\xae Distribution for Python",id:"intel-distribution-for-python",level:2}],m={toc:c},d="wrapper";function h(e){var n=e.components,t=(0,l.Z)(e,r);return(0,o.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installing-python-3"},"Installing Python 3"),(0,o.kt)("p",null,"If you use macOS (Big Sur/11 or higher), you should have Python 3 already\ninstalled. However, you might need to install Xcode Command Line Tools, you can\ndo that by opening Terminal and issuing following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"xcode-select --install\n")),(0,o.kt)("p",null,"You can check whether Python 3 is installed in your system or not by typing\nfollowing in a terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 --version\n")),(0,o.kt)("p",null,"If python 3 is installed, it will print the version number, otherwise you will\nsee some sort of error."),(0,o.kt)("p",null,"If you use Ubuntu/Debian, you can install Python and pip (python package\nmanager) by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install python3 python3-pip\n")),(0,o.kt)("p",null,"If you use Windows, you can go to ",(0,o.kt)("a",{parentName:"p",href:"https://www.python.org"},"https://www.python.org"),", download and\ninstall the latest version of Python 3."),(0,o.kt)("h2",{id:"pip"},"pip"),(0,o.kt)("p",null,"We can install python packages using the ",(0,o.kt)("inlineCode",{parentName:"p"},"pip")," package manager. To install a\nspecific package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install <package-name>\npip install numpy\npip install scipy matplotlib  # install multiple packages\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note that in some operating systems, ",(0,o.kt)("inlineCode",{parentName:"p"},"pip")," is referred as ",(0,o.kt)("inlineCode",{parentName:"p"},"pip3")," specifically\nfor the version corresponding to Python 3.")),(0,o.kt)("p",null,"We can list outdated python packages by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip list --outdated\n")),(0,o.kt)("p",null,"We can update outdated python packages by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade <package-name>\npip install --upgrade jupyterlab\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--upgrade")," flag can be used even if the package is not already installed,\nit will install the latest version. If a package is installed and a newer\nversion is available, it will upgrade to the latest version.")),(0,o.kt)("p",null,"You can install a list of python packages from a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pranabdas/python-tutorial/blob/master/requirements.txt"},"requirements.txt")," file.\nList each package name on separate line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="requirements.txt" showLineNumbers',title:'"requirements.txt"',showLineNumbers:!0},"jupyterlab\nnumpy\nscipy\nmatplotlib\n")),(0,o.kt)("p",null,"Installing a list of packages from ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade -r requirements.txt\n")),(0,o.kt)("h2",{id:"installing-jupyterlab"},"Installing Jupyterlab"),(0,o.kt)("p",null,"Jupyter notebook is a convenient way to run and document your python code. We\ncan install Jupyterlab by issuing following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install jupyterlab\n")),(0,o.kt)("p",null,"Now we can launch Jupyterlab by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"jupyter-lab")," in the terminal."),(0,o.kt)("h2",{id:"virtualenv"},"virtualenv"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv")," is a powerful way to manage dependencies in a python project. We\noften need some python packages specific to a project. Therefore it is not a\ngood idea to install every python packages globally. Instead we can use\n",(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv")," and keep our specific python packages local to that specific\nproject. First we need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv")," globally though:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade virtualenv\n")),(0,o.kt)("p",null,"Activate ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-project/\nvirtualenv venv\nsource venv/bin/activate\n")),(0,o.kt)("p",null,"Now we can install dependencies using ",(0,o.kt)("inlineCode",{parentName:"p"},"pip"),", and it will be stored inside the\n",(0,o.kt)("inlineCode",{parentName:"p"},"venv")," directory."),(0,o.kt)("p",null,"To leave the ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv")," run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deactivate\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt")," to list all required python packages for a project,\nand include ",(0,o.kt)("inlineCode",{parentName:"p"},"venv")," path in the ",(0,o.kt)("inlineCode",{parentName:"p"},".gitigone"),".")),(0,o.kt)("h2",{id:"pyenv"},"Pyenv"),(0,o.kt)("p",null,"If you need multiple versions of Python (say, different projects requires\ndifferent version of Python, or you want to test your code on multiple versions)\nin the same system, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv"},"pyenv")," gives handy way to\nswitch between different versions of Python."),(0,o.kt)("p",null,"If you are using macOS, you can install ",(0,o.kt)("inlineCode",{parentName:"p"},"pyenv")," via ",(0,o.kt)("inlineCode",{parentName:"p"},"homebrew"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew update && brew install pyenv\n")),(0,o.kt)("p",null,"On Linux you may use following installation script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# make sure you have curl\nsudo apt update && sudo apt install -y --no-install-recommends curl\ncurl https://pyenv.run | bash\n")),(0,o.kt)("p",null,"After installation, you need to add following to your ",(0,o.kt)("inlineCode",{parentName:"p"},".bashrc")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".zshrc"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export PYENV_ROOT="$HOME/.pyenv"\ncommand -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"\neval "$(pyenv init -)"\n')),(0,o.kt)("p",null,"Useful ",(0,o.kt)("inlineCode",{parentName:"p"},"pyenv")," commands:"),(0,o.kt)("p",null,"List installed python versions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv versions\n")),(0,o.kt)("p",null,"Install a new version of Python:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv install 3.10\n")),(0,o.kt)("p",null,"Switch version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv global 3.10\n")),(0,o.kt)("p",null,"Uninstall a version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv uninstall 3.10.12\n")),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"We can run our whole python setup inside a container, isolated from our main\noperating system. First you need to install ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"docker"),". Then we can build our container image\nusing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pranabdas/python-tutorial/blob/master/Dockerfile"},"Dockerfile"),", you can\nadjust according to your needs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="Dockerfile" showLineNumbers',title:'"Dockerfile"',showLineNumbers:!0},'# Start from Ubuntu 22.04 LTS\nFROM ubuntu:jammy\n\n# Update OS\nRUN apt update && apt upgrade -y\n\n# Install software packages\nRUN apt install -y python3 python3-pip\n\n# Install pip packages\nRUN pip3 install jupyterlab numpy scipy matplotlib\n\n# jupyter-lab settings\nRUN mkdir /etc/jupyter && \\\n    (echo "c.ServerApp.ip = \'0.0.0.0\'" && \\\n     echo "c.ServerApp.allow_root = True" && \\\n     echo "c.ServerApp.open_browser = False") \\\n        >> /etc/jupyter/jupyter_server_config.py\n\n# leave in `/home` which we can map with the host\nWORKDIR /home\n')),(0,o.kt)("p",null,"Build the Docker image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t jupyter .\n")),(0,o.kt)("p",null,"Run Docker (you can either forward a specific port or if are using Linux, map\nhost network):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -ti -p 8888:8888 -v ${PWD}:/home jupyter bash\ndocker run -ti --net=host -v /host/path:/home jupyter bash\n")),(0,o.kt)("p",null,"Launch Jupyter notebook inside the container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"jupyter-lab\n")),(0,o.kt)("p",null,"Now we can create a new python 3 notebook, and start writing our python code.\nIn order to properly close a notebook, save the notebook (either from ",(0,o.kt)("em",{parentName:"p"},"File"),"\nmenu or the save icon) \u2192 ",(0,o.kt)("em",{parentName:"p"},"Close and Shutdown the Notebook")," (from ",(0,o.kt)("em",{parentName:"p"},"File")," menu),\nand finally shutdown the Jupyter server from the ",(0,o.kt)("em",{parentName:"p"},"File")," menu \u2192 ",(0,o.kt)("em",{parentName:"p"},"Shut down"),"."),(0,o.kt)("h2",{id:"intel-distribution-for-python"},"Intel","\xae"," Distribution for Python"),(0,o.kt)("p",null,"For running computational intensive tasks, you might consider using\n",(0,o.kt)("a",{parentName:"p",href:"https://www.intel.com/content/www/us/en/developer/tools/oneapi/distribution-for-python.html"},(0,o.kt)("strong",{parentName:"a"},"Intel","\xae"," Distribution for Python")),",\nwhich could be better optimized for Intel processors and perform better in some\ncases. In my experience, it is not consistently better in all scenarios."),(0,o.kt)("p",null,"Install Intel","\xae"," distribution for python:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://registrationcenter-download.intel.com/akdlm/irc_nas/19093/l_pythoni39_oneapi_p_2023.0.0.25636_offline.sh\nsudo sh ./l_pythoni39_oneapi_p_2023.0.0.25636_offline.sh -a --silent --eula accept\n")),(0,o.kt)("p",null,"If you need more tools such as TensorFlow, PyTorch, XGBoost etc., install\n",(0,o.kt)("a",{parentName:"p",href:"https://www.intel.com/content/www/us/en/developer/tools/oneapi/ai-analytics-toolkit.html"},(0,o.kt)("strong",{parentName:"a"},"Intel","\xae"," AI Analytics Toolkit")),"\ninstead (some of the packages are available as standalone downloadable component\nas well):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://registrationcenter-download.intel.com/akdlm/irc_nas/19090/l_AIKit_p_2023.0.0.26100_offline.sh\n\n# install everything bundled in the toolkit\nsudo sh ./l_AIKit_p_2023.0.0.26100_offline.sh -a --silent --eula accept\n\n# list components bundled in toolkit\nsh ./l_AIKit_p_2023.0.0.26100_offline.sh -a --list-components\n\n# install subset of components:\nsudo sh ./l_AIKit_p_2023.0.0.26100_offline.sh -a --silent --eula accept --components intel.oneapi.lin.python3:intel.oneapi.lin.tensorflow:intel.oneapi.lin.pytorch\n")),(0,o.kt)("p",null,"Initialize oneAPI environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source /opt/intel/oneapi/setvars.sh\n")),(0,o.kt)("p",null,"You can confirm intel python:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python --version\n")),(0,o.kt)("p",null,"You can install additional python packages via ",(0,o.kt)("inlineCode",{parentName:"p"},"pip")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"conda"),"."))}h.isMDXComponent=!0}}]);