"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[4197],{8003:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var i=t(7462),o=t(3366),a=(t(7294),t(3905)),r=t(5710),c=["components"],l={title:"Flow control"},s=void 0,u={unversionedId:"basics/flow-control",id:"basics/flow-control",title:"Flow control",description:"if-else condition",source:"@site/docs/basics/flow-control.mdx",sourceDirName:"basics",slug:"/basics/flow-control",permalink:"/python-tutorial/basics/flow-control",draft:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/basics/flow-control.mdx",tags:[],version:"current",frontMatter:{title:"Flow control"},sidebar:"docs",previous:{title:"List, tuple, dictionary",permalink:"/python-tutorial/basics/list-tuple-dict"},next:{title:"Loop",permalink:"/python-tutorial/basics/loop"}},p={},m=[{value:"if-else condition",id:"if-else-condition",level:3},{value:"Tax calculator",id:"tax-calculator",level:3}],d={toc:m};function f(n){var e=n.components,t=(0,o.Z)(n,c);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"if-else-condition"},"if-else condition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'age = 33\n\nif (age >= 18):\n    print("You are adult person.")\nelse:\n    print("You are not an adult yet.")\n')),(0,a.kt)("p",null,"You can have multiple conditions with ",(0,a.kt)("inlineCode",{parentName:"p"},"elif")," statements:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'age = 70\n\nif (age >=18 and age <65):\n    print("You are adult person.")\nelif (age >=65):\n    print("You are a senior.")\nelse:\n    print("You are not an adult yet.")\n')),(0,a.kt)("p",null,"Now try with different age to see the results yourself. Note the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"and")," to\ncombine conditions. In case of ",(0,a.kt)("inlineCode",{parentName:"p"},"if/else")," condition check, once a ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," condition\nis satisfied, the code exits there, it does not check for next conditions."),(0,a.kt)("h3",{id:"tax-calculator"},"Tax calculator"),(0,a.kt)("p",null,"Another practical example: calculate personal income tax for Singapore\nresidents."),(0,a.kt)(r.Z,{language:"python",title:"src/sg_tax_calculator.py",showLineNumbers:!0,mdxType:"CodeBlock"},'#!/usr/bin/env python3\n# -*- coding: utf-8 -*-\n"""\nProgram: Calculate individual tax in Singapore\nVersion: 20220107\n@author: Pranab Das (GitHub: @pranabdas)\n"""\n\nincome = input("Please enter your taxable yearly income (in SGD): ")\n\n# check input is not null\nif income:\n    pass\nelse:\n    print("Input not recognized.")\n    exit()\n\n# check input is number\ntry:\n    income = float(income)\nexcept:\n    print("Please enter number (float or integer) input.")\n    exit()\n\nif   (income <=      0):\n    print("You have no positive income. There is no tax.")\n    exit()\nelif (income <=  20000):\n    print("Good news. You don\'t have to pay any income tax.")\n    exit()\nelif (income <=  30000):\n    tax =         (income -  20000) *  2.0 / 100\nelif (income <=  40000):\n    tax =   200 + (income -  30000) *  3.5 / 100\nelif (income <=  80000):\n    tax =   550 + (income -  40000) *  7.0 / 100\nelif (income <= 120000):\n    tax =  3350 + (income -  80000) * 11.5 / 100\nelif (income <= 160000):\n    tax =  7950 + (income - 120000) * 15.0 / 100\nelif (income <= 200000):\n    tax = 13950 + (income - 160000) * 18.0 / 100\nelif (income <= 240000):\n    tax = 21150 + (income - 200000) * 19.0 / 100\nelif (income <= 280000):\n    tax = 28750 + (income - 240000) * 19.5 / 100\nelif (income <= 320000):\n    tax = 36550 + (income - 280000) * 20.0 / 100\nelse:\n    tax = 44550 + (income - 320000) * 22.0 / 100\n\nprint("Payable tax: SGD", round(tax, 2))\nprint("Your take home amount: SGD", round(income-tax, 2))\n'),(0,a.kt)("p",null,"Tax rates are correct as of January 2022. Please check with ",(0,a.kt)("a",{parentName:"p",href:"https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/new-to-tax/individual-income-tax-rates"},"IRAS website"),"."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you want to calculate your tax right now on the browser, you can use\n",(0,a.kt)("a",{parentName:"p",href:"https://pranabdas.github.io/sg-tax-calculator/"},"this web app"),"."))))}f.isMDXComponent=!0}}]);