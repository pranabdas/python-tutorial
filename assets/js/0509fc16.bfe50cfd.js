"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[707],{1186:(a,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>_,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var p=t(5893),e=t(1151);const s={title:"3D volume plots"},d=void 0,r={id:"matplotlib/3d-vol",title:"3D volume plots",description:"Visualizing 3D slices:",source:"@site/docs/matplotlib/3d-vol.md",sourceDirName:"matplotlib",slug:"/matplotlib/3d-vol",permalink:"/python-tutorial/matplotlib/3d-vol",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/matplotlib/3d-vol.md",tags:[],version:"current",frontMatter:{title:"3D volume plots"},sidebar:"docs",previous:{title:"3D spherical plots",permalink:"/python-tutorial/matplotlib/3d-sph"},next:{title:"Geo-plots",permalink:"/python-tutorial/matplotlib/geo-plot"}},i={},o=[];function l(a){const n={code:"code",p:"p",pre:"pre",...(0,e.a)(),...a.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n.p,{children:"Visualizing 3D slices:"}),"\n",(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:"import numpy as np\nimport matplotlib.image as image\nimport matplotlib.pyplot as plt\nimport matplotlib.cm as cm\nimport sys\nsys.path.append(\"/root/\")\n# https://github.com/pranabdas/arpespythontools\nimport arpespythontools as arp\n%matplotlib inline\nplt.rcParams[\"figure.dpi\"] = 300\nplt.style.use('dark_background')\n# plt.style.use('default')\n\ndata, x, y = arp.import_itx('../datafiles/FS.itx')\ndata_0p1, x, y = arp.import_itx('../datafiles/FS-0p1.itx')\ndata_0p2, x, y = arp.import_itx('../datafiles/FS-0p2.itx')\ndata_0p3, x, y = arp.import_itx('../datafiles/FS-0p3.itx')\ndata_0p4, x, y = arp.import_itx('../datafiles/FS-0p4.itx')\n\ndata = data[150:350, :]\ndata_0p1 = data_0p1[150:350, :]\ndata_0p2 = data_0p2[150:350, :]\ndata_0p3 = data_0p3[150:350, :]\ndata_0p4 = data_0p4[150:350, :]\n\ndata[np.isnan(data)] = 0\ndata_0p1[np.isnan(data_0p1)] = 0\ndata_0p2[np.isnan(data_0p2)] = 0\ndata_0p3[np.isnan(data_0p3)] = 0\ndata_0p4[np.isnan(data_0p4)] = 0\n\nxp, yp = data.shape\nx = np.arange(0, xp, 1)\ny = np.arange(0, yp, 1)\nY, X = np.meshgrid(y, x)\n\nfig = plt.figure(figsize=(12, 12))\nax = plt.subplot(projection='3d')\n\nax.dist=20\nax.view_init(elev=30, azim=40)\n\ncm_style = cm.get_cmap('afmhot')\n# normed_data = (data - np.min(data)) / (np.max(data) - np.min(data))\nnormed_data = data / np.max(data)\nnormed_data_0p1 = data_0p1 / np.max(data_0p1)\nnormed_data_0p2 = data_0p2 / np.max(data_0p2)\nnormed_data_0p3 = data_0p3 / np.max(data_0p3)\nnormed_data_0p4 = data_0p4 / np.max(data_0p4)\n\nmapped_data = cm_style(normed_data)\nmapped_data_0p1 = cm_style(normed_data_0p1)\nmapped_data_0p2 = cm_style(normed_data_0p2)\nmapped_data_0p3 = cm_style(normed_data_0p3)\nmapped_data_0p4 = cm_style(normed_data_0p4)\n\n# a_thresold = 0.075\n\n# transparent = data/np.max(data) < a_thresold\n# mapped_data[:, :, 3][transparent] = 0\n# transparent = data_0p1/np.max(data_0p1) < a_thresold\n# mapped_data_0p1[:, :, 3][transparent] = 0\n# transparent = data_0p2/np.max(data_0p2) < a_thresold\n# mapped_data_0p2[:, :, 3][transparent] = 0\n# transparent = data_0p3/np.max(data_0p3) < a_thresold\n# mapped_data_0p3[:, :, 3][transparent] = 0\n# transparent = data_0p4/np.max(data_0p4) < a_thresold\n# mapped_data_0p4[:, :, 3][transparent] = 0\n\nax.plot_surface(X, Y, X - X + 0, facecolors=mapped_data,\n                rstride=1, cstride=1,\n                antialiased=False, shade=False)\n\nax.plot_surface(X, Y, X - X - 100, facecolors=mapped_data_0p1,\n                rstride=1, cstride=1,\n                antialiased=False, shade=False)\n\nax.plot_surface(X, Y, X - X - 200, facecolors=mapped_data_0p2,\n                rstride=1, cstride=1,\n                antialiased=False, shade=False)\n\nax.plot_surface(X, Y, X - X - 300, facecolors=mapped_data_0p3,\n                rstride=1, cstride=1,\n                antialiased=False, shade=False)\n\nax.plot_surface(X, Y, X - X - 400, facecolors=mapped_data_0p4,\n                rstride=1, cstride=1,\n                antialiased=False, shade=False)\n\n# ax.plot([xp/2, xp/2], [yp/2, yp/2], [0, -400], linewidth=0.5, c='orange')\n# ax.plot([xp/2, xp/2], [yp/2+10, yp/2], [0, -300], linewidth=0.5, c='orange')\n# ax.plot([xp/2, xp/2], [yp/2-10, yp/2], [0, -300], linewidth=0.5, c='orange')\n\nax.set_xlim3d([-50, 580])\nax.set_ylim3d([-30, 80])\n# ax.text(250, 55, 50, 'FS')\n# ax.text(250, 55, -40, 'FS - 0.1 eV')\n# ax.text(250, 55, -140, 'FS - 0.2 eV')\n# ax.text(250, 55, -240, 'FS - 0.3 eV')\n# ax.text(250, 55, -330, 'FS - 0.4 eV')\nplt.axis('off')\nplt.show()\n"})}),"\n",(0,p.jsxs)("picture",{children:[(0,p.jsx)("source",{type:"image/webp",srcSet:t(4989).Z}),(0,p.jsx)("img",{src:t(2645).Z,alt:"3d-slices"})]}),"\n",(0,p.jsx)(n.p,{children:"3D Volume plot:"}),"\n",(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:"FS, x, y = arp.import_itx('../datafiles/FS.itx')\nGX, x, y = arp.import_itx('../datafiles/GX.itx')\nGY, x, y = arp.import_itx('../datafiles/GY.itx')\nFS[np.isnan(FS)] = 0\n\nFS_back = FS[150:403, 16:30]\nFS_front = FS[150:252, 0:16]\nGX = GX[0:168, 252:403].T\nGY = GY[0:168, 0:16].T\n\nxp, yp = FS_back.shape\nxp2, yp2 = FS_front.shape\nxp3, zp3 = GX.shape\nyp4, zp4 = GY.shape\n\n# masks\nxp5, zp5 = xp2, zp3\nyp6, zp6 = yp, zp3\n\nx = np.arange(0, xp, 1)\ny = np.arange(0, yp, 1)\nY, X = np.meshgrid(y, x)\n\nx = np.arange(0, xp2, 1)\ny = np.arange(-yp, -yp+yp2, 1)\nY2, X2 = np.meshgrid(y, x)\n\nx = np.arange(xp-xp3, xp, 1)\nz = -np.arange(0, zp3, 1)\nZ3, X3 = np.meshgrid(z, x)\n\ny = np.arange(yp, yp+yp4, 1)\nz = -np.arange(0, zp4, 1)\nZ4, Y4 = np.meshgrid(z, y)\n\nx = np.arange(0, xp5, 1)\nz = -np.arange(0, zp5, 1)\nZ5, X5 = np.meshgrid(z, x)\nM_front = np.zeros([xp5, zp5])\nM_front[0, 0] = 1\n\ny = np.arange(0, yp6, 1)\nz = -np.arange(0, zp6, 1)\nZ6, Y6 = np.meshgrid(z, y)\nM_right = np.zeros([yp6, zp6])\nM_right[0, 0] = 1\n\nplt.style.use('default')\nfig = plt.figure(figsize=(12, 12))\nax = plt.subplot(projection='3d')\n\nax.dist=20\nax.view_init(elev=30, azim=-55)\n\ncm_style = cm.get_cmap('plasma')\n\nnormed_FS_back = FS_back / np.max(FS_back)\nmapped_FS_back = cm_style(normed_FS_back)\n\nnormed_FS_front = FS_front / np.max(FS_front)\nmapped_FS_front = cm_style(normed_FS_front)\n\nnormed_GX = GX / np.max(GX)\nmapped_GX = cm_style(normed_GX*4)\n\nnormed_GY = GY / np.max(GY)\nmapped_GY = cm_style(normed_GY*3)\n\nmapped_M_front = cm_style(M_front)\nmapped_M_right = cm_style(M_right)\n\nax.plot_surface(X, Y, X - X + 0, facecolors=mapped_FS_back,\n                rstride=1, cstride=1,\n                antialiased=False, shade=False)\n\nax.plot_surface(X2, Y2, X2 - X2 + 0, facecolors=mapped_FS_front,\n                rstride=1, cstride=1,\n                antialiased=False, shade=False)\n\nax.plot_surface(X3, Z3-Z3, -Z3 -zp3, facecolors=mapped_GX,\n                rstride=1, cstride=1,\n                antialiased=False, shade=False)\n\nax.plot_surface(Z4-Z4+xp2, Y4-2*yp, -Z4-zp4, facecolors=mapped_GY,\n                rstride=1, cstride=1,\n                antialiased=False, shade=False)\n\nax.plot_surface(X5, Z5-Z5-yp, -Z5 -zp5, facecolors=mapped_M_front,\n                rstride=1, cstride=1,\n                antialiased=False, shade=False)\n\nax.plot_surface(Z6-Z6+xp, Y6, -Z6-zp6, facecolors=mapped_M_right,\n                rstride=1, cstride=1,\n                antialiased=False, shade=False)\n\nax.plot([xp2, xp2+(xp-xp2)/2-1, xp, xp2, xp2, xp, xp, xp, xp, xp, xp], \\\n        [0, 0, 0, -yp2/2+1, -yp2+2, yp-1, yp/2, yp-1, yp-1, yp-1, yp-1], \\\n        [-zp3, -zp3, -zp3, -zp3, -zp3, -zp3, -zp3, -zp3*0.25, -zp3*0.50, -zp3*0.75, 0], \\\n        'o', c='r', markersize= 3)\n\nax.set_ylim3d([-22, 22])\nax.set_zlim3d([-250, 50])\nplt.axis('off')\nplt.show()\n"})}),"\n",(0,p.jsxs)("picture",{children:[(0,p.jsx)("source",{type:"image/webp",srcSet:t(4364).Z}),(0,p.jsx)("img",{src:t(2602).Z,alt:"3d-vol"})]})]})}function _(a={}){const{wrapper:n}={...(0,e.a)(),...a.components};return n?(0,p.jsx)(n,{...a,children:(0,p.jsx)(l,{...a})}):l(a)}},2645:(a,n,t)=>{t.d(n,{Z:()=>p});const p=t.p+"assets/images/3d-slices-fd948e23efbdee9dd3d52bf80a7c0f9d.png"},4989:(a,n,t)=>{t.d(n,{Z:()=>p});const p=t.p+"assets/images/3d-slices-82d0a10c96d2aa3f25d720d1a1572f5c.webp"},2602:(a,n,t)=>{t.d(n,{Z:()=>p});const p=t.p+"assets/images/3d-vol-9abb83d5ac9ee64ef197f945644b674f.png"},4364:(a,n,t)=>{t.d(n,{Z:()=>p});const p=t.p+"assets/images/3d-vol-574ad993eebd2c873f5d1a7868d69fa0.webp"},1151:(a,n,t)=>{t.d(n,{Z:()=>r,a:()=>d});var p=t(7294);const e={},s=p.createContext(e);function d(a){const n=p.useContext(s);return p.useMemo((function(){return"function"==typeof a?a(n):{...n,...a}}),[n,a])}function r(a){let n;return n=a.disableParentContext?"function"==typeof a.components?a.components(e):a.components||e:d(a.components),p.createElement(s.Provider,{value:n},a.children)}}}]);