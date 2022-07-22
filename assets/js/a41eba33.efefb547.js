"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[6849],{8398:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return h}});var a=t(7462),s=t(3366),o=(t(7294),t(3905)),r=t(814),p=["components"],i={title:"Miscellaneous projects",sidebar_label:"Miscellaneous"},l=void 0,u={unversionedId:"misc",id:"misc",title:"Miscellaneous projects",description:"Running shell commands in python",source:"@site/docs/misc.mdx",sourceDirName:".",slug:"/misc",permalink:"/python-tutorial/misc",draft:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/misc.mdx",tags:[],version:"current",frontMatter:{title:"Miscellaneous projects",sidebar_label:"Miscellaneous"},sidebar:"docs",previous:{title:"Learning log",permalink:"/python-tutorial/django/learning-log"},next:{title:"Resources",permalink:"/python-tutorial/resources"}},c={},h=[{value:"Running shell commands in python",id:"running-shell-commands-in-python",level:3},{value:"Jupyter notebooks of various python projects",id:"jupyter-notebooks-of-various-python-projects",level:3}],m={toc:h};function d(e){var n=e.components,t=(0,s.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"running-shell-commands-in-python"},"Running shell commands in python"),(0,o.kt)("p",null,"Single line shell commands examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'import subprocess\n\n# example 1\nsubprocess.run("echo \'hello\'", shell=True, check=True, text=True)\n\n# example 2\nsubprocess.run(\'cd /tmp; pwd\', shell=True)\n\n# example 3\ninput_text = "Welcome guest"\nmessage = subprocess.run(["echo", input_text], text=True, \\\n    capture_output=True)\nprint(message.stdout)\n')),(0,o.kt)("p",null,"Multiline example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"cmd = '''cd /tmp;\npwd;\n'''\n\nsubprocess.run(cmd, shell=True, check=True, text=True, \\\n    universal_newlines=True, executable='/bin/bash')\n")),(0,o.kt)("p",null,"A more comprehensive example: Encrypt a folder recursively using ",(0,o.kt)("inlineCode",{parentName:"p"},"openssl"),"."),(0,o.kt)(r.Z,{language:"python",title:"src/encrypt_folder_openssl.py",showLineNumbers:!0,mdxType:"CodeBlock"},'#!/usr/bin/env python3\n# -*- coding: utf-8 -*-\n"""\nProgram: Encrypt folder recursively using openssl\nVersion: 20220105\n@author: Pranab Das (GitHub: @pranabdas)\n"""\nimport os\nimport subprocess\nimport getpass\n\n# ask folder to encrypt\npath = input("Please enter the directoy/path to encrypt: ")\n\n# Remove any trailing \'/\'\nif(path[-1]==\'/\') :\n    path = path[:-1]\n\n# Get absolute path in case relative path is entered\npath = os.path.abspath(path)\n\n# New directory name\nnew_path = path + "_enc"\n\n# check openssl is installed\ntry:\n    openssl_version = subprocess.run(["openssl", "version"], \\\n        text=True, capture_output=True)\nexcept:\n    print("openssl not found. Exiting ...")\n    exit()\n\n# ask and confirm password\npasswd = getpass.getpass(prompt="Please eneter encryption password: ")\npasswd_2 = getpass.getpass(prompt="Please confirm your password: ")\n\nif (passwd == passwd_2):\n    pass\nelse:\n    print("Password mismatch! Exiting ...")\n    exit()\n\nprint("\\nPlease wait. Encrypting...")\n\nfor root, dirs, files in os.walk(path):\n\n    # Create the folder structure\n    if path in root:\n        try:\n            os.mkdir(root.replace(path, new_path))\n        except FileExistsError:\n            pass\n\n    # encrypt files using openssl\n    if (files != []) :\n        for file in files:\n            file_path = root + \'/\' + file\n            new_file_path = file_path.replace(path, new_path) + \'.enc\'\n\n            cmd = f\'\'\'openssl enc -e -aes-256-cbc \\\n                      -salt \\\n                      -pbkdf2 \\\n                      -iter 1000000 \\\n                      -md sha512 \\\n                      -k {passwd} \\\n                      -in {file_path} \\\n                      -out {new_file_path}\n                   \'\'\'\n            subprocess.run(cmd, shell=True, check=True, text=True, \\\n                universal_newlines=True, executable=\'/bin/bash\')\n\nprint("\\nDone. Encrypted files are placed under:\\n", new_path)\n'),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Conversely, you can also include ",(0,o.kt)("a",{parentName:"p",href:"https://pranabdas.github.io/linux/shell-scripting#running-python-code-in-bash-script"},"python code in shell script"),".")),(0,o.kt)("h3",{id:"jupyter-notebooks-of-various-python-projects"},"Jupyter notebooks of various python projects"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pranabdas/python-tutorial/blob/master/notebooks/Quantum-Design-SQIUD-data-loader.ipynb"},"Quantum Design SQUID data loader")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pranabdas/python-tutorial/blob/master/notebooks/encrypt-decrypt-directory.ipynb"},"How to encrypt (and decrypt) a directory?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pranabdas/python-tutorial/blob/master/notebooks/dataframe-encryption.ipynb"},"Encryption pandas dataframe")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pranabdas/python-tutorial/blob/master/notebooks/encrypt-dropbox.ipynb"},"Encrypt and upload to Dropbox")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pranabdas/python-tutorial/blob/master/notebooks/save-any-data-as-text-in-google-docs.ipynb"},"Save any data as text in Google Docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pranabdas/python-tutorial/blob/master/notebooks/singapore-traffic-camera.ipynb"},"Singapore traffic camera"))))}d.isMDXComponent=!0}}]);