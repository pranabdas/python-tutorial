"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([["7048"],{2520:function(e,n,t){t.d(n,{Z:()=>p});var i=t("5893");t("7294");var l=t("7026"),s=t("4681"),a=t("9369"),r=t("9246"),o=t("3012"),c=t("6025"),d=t("4757");function u(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}let h="breadcrumbHomeIcon_YNFT";function m(){let e=(0,d.ZP)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(o.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(u,{className:h})})})}let x="breadcrumbsContainer_Z_bl";function f(e){let{children:n,href:t,isLast:l}=e,s="breadcrumbs__link";return l?(0,i.jsx)("span",{className:s,itemProp:"name",children:n}):t?(0,i.jsx)(o.Z,{className:s,href:t,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:n})}):(0,i.jsx)("span",{className:s,children:n})}function j(e){let{children:n,active:t,index:s,addMicrodata:a}=e;return(0,i.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,i.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function p(){let e=(0,a.s1)(),n=(0,r.Ns)();return e?(0,i.jsx)("nav",{className:(0,l.Z)(s.k.docs.docBreadcrumbs,x),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,i.jsx)(m,{}),e.map((n,t)=>{let l=t===e.length-1,s="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,i.jsx)(j,{active:l,index:t,addMicrodata:!!s,children:(0,i.jsx)(f,{href:s,isLast:l,children:n.label})},t)})]})}):null}},1069:function(e,n,t){t.r(n),t.d(n,{default:()=>eP});var i=t("5893"),l=t("7294"),s=t("4713"),a=t("5346");let r=l.createContext(null);function o(e){var n;let{children:t,content:s}=e;let a=(n=s,(0,l.useMemo)(()=>({metadata:n.metadata,frontMatter:n.frontMatter,assets:n.assets,contentTitle:n.contentTitle,toc:n.toc}),[n]));return(0,i.jsx)(r.Provider,{value:a,children:t})}function c(){let e=(0,l.useContext)(r);if(null===e)throw new a.i6("DocProvider");return e}function d(){var e;let{metadata:n,frontMatter:t,assets:l}=c();return(0,i.jsx)(s.d,{title:n.title,description:n.description,keywords:t.keywords,image:null!==(e=l.image)&&void 0!==e?e:t.image})}var u=t("7026"),h=t("4704"),m=t("3944");function x(){let{metadata:e}=c();return(0,i.jsx)(m.Z,{previous:e.previous,next:e.next})}var f=t("9580"),j=t("6035"),p=t("4681"),v=t("6025"),b=t("3012");let g={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function N(e){let{permalink:n,label:t,count:l,description:s}=e;return(0,i.jsxs)(b.Z,{href:n,title:s,className:(0,u.Z)(g.tag,l?g.tagWithCount:g.tagRegular),children:[t,l&&(0,i.jsx)("span",{children:l})]})}let Z="tags_jXut",_="tag_QGVx";function C(e){let{tags:n}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(v.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,u.Z)(Z,"padding--none","margin-left--sm"),children:n.map(e=>(0,i.jsx)("li",{className:_,children:(0,i.jsx)(N,{...e})},e.permalink))})]})}let y="iconEdit_Z9Sw";function k(e){let{className:n,...t}=e;return(0,i.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(y,n),"aria-hidden":"true",...t,children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function T(e){let{editUrl:n}=e;return(0,i.jsxs)(b.Z,{to:n,className:p.k.common.editThisPage,children:[(0,i.jsx)(k,{}),(0,i.jsx)(v.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var L=t("2933");function w(e){let{lastUpdatedAt:n}=e,t=new Date(n),l=(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{i18n:{currentLocale:n}}=(0,L.Z)(),t=function(){let{i18n:{currentLocale:e,localeConfigs:n}}=(0,L.Z)();return n[e].calendar}();return new Intl.DateTimeFormat(n,{calendar:t,...e})})({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(t);return(0,i.jsx)(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:t.toISOString(),itemProp:"dateModified",children:l})})},children:" on {date}"})}function B(e){let{lastUpdatedBy:n}=e;return(0,i.jsx)(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:n})},children:" by {user}"})}function E(e){let{lastUpdatedAt:n,lastUpdatedBy:t}=e;return(0,i.jsxs)("span",{className:p.k.common.lastUpdated,children:[(0,i.jsx)(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:n?(0,i.jsx)(w,{lastUpdatedAt:n}):"",byUser:t?(0,i.jsx)(B,{lastUpdatedBy:t}):""},children:"Last updated{atDate}{byUser}"}),!1]})}let M="lastUpdated_JAkA";function A(e){let{className:n,editUrl:t,lastUpdatedAt:l,lastUpdatedBy:s}=e;return(0,i.jsxs)("div",{className:(0,u.Z)("row",n),children:[(0,i.jsx)("div",{className:"col",children:t&&(0,i.jsx)(T,{editUrl:t})}),(0,i.jsx)("div",{className:(0,u.Z)("col",M),children:(l||s)&&(0,i.jsx)(E,{lastUpdatedAt:l,lastUpdatedBy:s})})]})}function H(){let{metadata:e}=c(),{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:l,tags:s}=e,a=s.length>0,r=!!(n||t||l);return a||r?(0,i.jsxs)("footer",{className:(0,u.Z)(p.k.docs.docFooter,"docusaurus-mt-lg"),children:[a&&(0,i.jsx)("div",{className:(0,u.Z)("row margin-top--sm",p.k.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(C,{tags:s})})}),r&&(0,i.jsx)(A,{className:(0,u.Z)("margin-top--sm",p.k.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:l})]}):null}var I=t("7455"),z=t("140");function U(e){let n=e.getBoundingClientRect();return n.top===n.bottom?U(e.parentNode):n}let V=l.memo(function e(n){let{toc:t,className:l,linkClassName:s,isChild:a}=n;return t.length?(0,i.jsx)("ul",{className:a?void 0:l,children:t.map(n=>(0,i.jsxs)("li",{children:[(0,i.jsx)(b.Z,{to:"#".concat(n.id),className:null!=s?s:void 0,dangerouslySetInnerHTML:{__html:n.value}}),(0,i.jsx)(e,{isChild:!0,toc:n.children,className:l,linkClassName:s})]},n.id))}):null});function R(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:o,...c}=e,d=(0,z.L)(),u=null!=r?r:d.tableOfContents.minHeadingLevel,h=null!=o?o:d.tableOfContents.maxHeadingLevel,m=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,l.useMemo)(()=>(function e(n){let{toc:t,minHeadingLevel:i,maxHeadingLevel:l}=n;return t.flatMap(n=>{var t;let s=e({toc:n.children,minHeadingLevel:i,maxHeadingLevel:l});return(t=n).level>=i&&t.level<=l?[{...n,children:s}]:s})})({toc:function(e){let n=e.map(e=>({...e,parentIndex:-1,children:[]})),t=Array(7).fill(-1);n.forEach((e,n)=>{let i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n});let i=[];return n.forEach(e=>{let{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):i.push(l)}),i}(n),minHeadingLevel:t,maxHeadingLevel:i}),[n,t,i])}({toc:n,minHeadingLevel:u,maxHeadingLevel:h});return!function(e){let n=(0,l.useRef)(void 0),t=function(){let e=(0,l.useRef)(0),{navbar:{hideOnScroll:n}}=(0,z.L)();return(0,l.useEffect)(()=>{e.current=n?0:document.querySelector(".navbar").clientHeight},[n]),e}();(0,l.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:i,linkActiveClassName:l,minHeadingLevel:s,maxHeadingLevel:a}=e;function r(){var e;let r=(e=i,Array.from(document.getElementsByClassName(e))),o=function(e,n){var t,i,l;let{anchorTopOffset:s}=n,a=e.find(e=>U(e).top>=s);if(a){;return(l=U(a)).top>0&&l.bottom<window.innerHeight/2?a:null!==(t=e[e.indexOf(a)-1])&&void 0!==t?t:null}return null!==(i=e[e.length-1])&&void 0!==i?i:null}(function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e,i=[];for(let e=n;e<=t;e+=1)i.push("h".concat(e,".anchor"));return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:a}),{anchorTopOffset:t.current}),c=r.find(e=>{var n;return o&&o.id===decodeURIComponent((n=e).href.substring(n.href.indexOf("#")+1))});r.forEach(e=>{var t;t=e,e===c?(n.current&&n.current!==t&&n.current.classList.remove(l),t.classList.add(l),n.current=t):t.classList.remove(l)})}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}},[e,t])}((0,l.useMemo)(()=>{if(s&&a)return{linkClassName:s,linkActiveClassName:a,minHeadingLevel:u,maxHeadingLevel:h}},[s,a,u,h])),(0,i.jsx)(V,{toc:m,className:t,linkClassName:s,...c})}let S={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function D(e){let{collapsed:n,...t}=e;return(0,i.jsx)("button",{type:"button",...t,className:(0,u.Z)("clean-btn",S.tocCollapsibleButton,!n&&S.tocCollapsibleButtonExpanded,t.className),children:(0,i.jsx)(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}let F={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function P(e){let{toc:n,className:t,minHeadingLevel:l,maxHeadingLevel:s}=e,{collapsed:a,toggleCollapsed:r}=(0,I.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,u.Z)(F.tocCollapsible,!a&&F.tocCollapsibleExpanded,t),children:[(0,i.jsx)(D,{collapsed:a,onClick:r}),(0,i.jsx)(I.z,{lazy:!0,className:F.tocCollapsibleContent,collapsed:a,children:(0,i.jsx)(R,{toc:n,minHeadingLevel:l,maxHeadingLevel:s})})]})}let O="tocMobile_ITEo";function q(){let{toc:e,frontMatter:n}=c();return(0,i.jsx)(P,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.Z)(p.k.docs.docTocMobile,O)})}let G="tableOfContents_bqdL";function J(e){let{className:n,...t}=e;return(0,i.jsx)("div",{className:(0,u.Z)(G,"thin-scrollbar",n),children:(0,i.jsx)(R,{...t,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}function W(){let{toc:e,frontMatter:n}=c();return(0,i.jsx)(J,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:p.k.docs.docTocDesktop})}var Y=t("4403"),Q=t("65"),X=t("4819"),K=t("5056");function $(e){return(0,i.jsx)("code",{...e})}var ee=t("1065"),en=t("7227");let et={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function ei(e){return!!e&&("SUMMARY"===e.tagName||ei(e.parentElement))}function el(e){let{summary:n,children:t,...s}=e;(0,ee.Z)().collectAnchor(s.id);let a=(0,en.Z)(),r=(0,l.useRef)(null),{collapsed:o,setCollapsed:c}=(0,I.u)({initialState:!s.open}),[d,h]=(0,l.useState)(s.open),m=l.isValidElement(n)?n:(0,i.jsx)("summary",{children:null!=n?n:"Details"});return(0,i.jsxs)("details",{...s,ref:r,open:d,"data-collapsed":o,className:(0,u.Z)(et.details,a&&et.isBrowser,s.className),onMouseDown:e=>{ei(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();let n=e.target;if(!!(ei(n)&&function e(n,t){return!!n&&(n===t||e(n.parentElement,t))}(n,r.current)))e.preventDefault(),o?(c(!1),h(!0)):c(!0)},children:[m,(0,i.jsx)(I.z,{lazy:!1,collapsed:o,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),h(!e)},children:(0,i.jsx)("div",{className:et.collapsibleContent,children:t})})]})}let es="details_b_Ee";function ea(e){let{...n}=e;return(0,i.jsx)(el,{...n,className:(0,u.Z)("alert alert--info",es,n.className)})}function er(e){let n=l.Children.toArray(e.children),t=n.find(e=>l.isValidElement(e)&&"summary"===e.type),s=(0,i.jsx)(i.Fragment,{children:n.filter(e=>e!==t)});return(0,i.jsx)(ea,{...e,summary:t,children:s})}function eo(e){return(0,i.jsx)(Y.Z,{...e})}let ec={containsTaskList:"containsTaskList_mC6p"},ed="img_ev3q",eu={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function eh(e){let{type:n,className:t,children:l}=e;return(0,i.jsx)("div",{className:(0,u.Z)(p.k.common.admonition,p.k.common.admonitionType(n),eu.admonition,t),children:l})}function em(e){let{icon:n,title:t}=e;return(0,i.jsxs)("div",{className:eu.admonitionHeading,children:[(0,i.jsx)("span",{className:eu.admonitionIcon,children:n}),t]})}function ex(e){let{children:n}=e;return n?(0,i.jsx)("div",{className:eu.admonitionContent,children:n}):null}function ef(e){let{type:n,icon:t,title:l,children:s,className:a}=e;return(0,i.jsxs)(eh,{type:n,className:a,children:[l||t?(0,i.jsx)(em,{title:l,icon:t}):null,(0,i.jsx)(ex,{children:s})]})}let ej={icon:(0,i.jsx)(function(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},{}),title:(0,i.jsx)(v.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function ep(e){return(0,i.jsx)(ef,{...ej,...e,className:(0,u.Z)("alert alert--secondary",e.className),children:e.children})}let ev={icon:(0,i.jsx)(function(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},{}),title:(0,i.jsx)(v.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function eb(e){return(0,i.jsx)(ef,{...ev,...e,className:(0,u.Z)("alert alert--success",e.className),children:e.children})}let eg={icon:(0,i.jsx)(function(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},{}),title:(0,i.jsx)(v.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function eN(e){return(0,i.jsx)(ef,{...eg,...e,className:(0,u.Z)("alert alert--info",e.className),children:e.children})}function eZ(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}let e_={icon:(0,i.jsx)(eZ,{}),title:(0,i.jsx)(v.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})},eC={icon:(0,i.jsx)(function(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},{}),title:(0,i.jsx)(v.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},ey={icon:(0,i.jsx)(eZ,{}),title:(0,i.jsx)(v.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})},ek={note:ep,tip:eb,info:eN,warning:function(e){return(0,i.jsx)(ef,{...e_,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(ef,{...eC,...e,className:(0,u.Z)("alert alert--danger",e.className),children:e.children})},secondary:e=>(0,i.jsx)(ep,{title:"secondary",...e}),important:e=>(0,i.jsx)(eN,{title:"important",...e}),success:e=>(0,i.jsx)(eb,{title:"success",...e}),caution:function(e){return(0,i.jsx)(ef,{...ey,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})}};function eT(e){let n=function(e){var n;let{mdxAdmonitionTitle:t,rest:s}=function(e){let n=l.Children.toArray(e),t=n.find(e=>l.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),s=n.filter(e=>e!==t);return{mdxAdmonitionTitle:null==t?void 0:t.props.children,rest:s.length>0?(0,i.jsx)(i.Fragment,{children:s}):null}}(e.children),a=null!==(n=e.title)&&void 0!==n?n:t;return{...e,...a&&{title:a},children:s}}(e),t=function(e){let n=ek[e];return n?n:(console.warn('No admonition component found for admonition type "'.concat(e,'". Using Info as fallback.')),ek.info)}(n.type);return(0,i.jsx)(t,{...n})}let eL={Head:X.Z,details:er,Details:er,code:function(e){var n;return void 0!==(n=e).children&&l.Children.toArray(n.children).every(e=>"string"==typeof e&&!e.includes("\n"))?(0,i.jsx)($,{...e}):(0,i.jsx)(K.Z,{...e})},a:function(e){return(0,i.jsx)(b.Z,{...e})},pre:function(e){return(0,i.jsx)(i.Fragment,{children:e.children})},ul:function(e){return(0,i.jsx)("ul",{...e,className:function(e){if(void 0!==e)return(0,u.Z)(e,(null==e?void 0:e.includes("contains-task-list"))&&ec.containsTaskList)}(e.className)})},li:function(e){return(0,ee.Z)().collectAnchor(e.id),(0,i.jsx)("li",{...e})},img:function(e){var n;return(0,i.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(n=e.className,(0,u.Z)(n,ed))})},h1:e=>(0,i.jsx)(eo,{as:"h1",...e}),h2:e=>(0,i.jsx)(eo,{as:"h2",...e}),h3:e=>(0,i.jsx)(eo,{as:"h3",...e}),h4:e=>(0,i.jsx)(eo,{as:"h4",...e}),h5:e=>(0,i.jsx)(eo,{as:"h5",...e}),h6:e=>(0,i.jsx)(eo,{as:"h6",...e}),admonition:eT,mermaid:()=>null};function ew(e){let{children:n}=e;return(0,i.jsx)(Q.Z,{components:eL,children:n})}function eB(e){let{children:n}=e,t=function(){let{metadata:e,frontMatter:n,contentTitle:t}=c();return!n.hide_title&&void 0===t?e.title:null}();return(0,i.jsxs)("div",{className:(0,u.Z)(p.k.docs.docMarkdown,"markdown"),children:[t&&(0,i.jsx)("header",{children:(0,i.jsx)(Y.Z,{as:"h1",children:t})}),(0,i.jsx)(ew,{children:n})]})}var eE=t("2520");function eM(){return(0,i.jsx)(v.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function eA(){return(0,i.jsx)(v.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function eH(){return(0,i.jsx)(X.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function eI(){return(0,i.jsx)(v.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function ez(){return(0,i.jsx)(v.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}function eU(e){let{className:n}=e;return(0,i.jsx)(eT,{type:"caution",title:(0,i.jsx)(eI,{}),className:(0,u.Z)(n,p.k.common.draftBanner),children:(0,i.jsx)(ez,{})})}function eV(e){let{className:n}=e;return(0,i.jsx)(eT,{type:"caution",title:(0,i.jsx)(eM,{}),className:(0,u.Z)(n,p.k.common.unlistedBanner),children:(0,i.jsx)(eA,{})})}function eR(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eH,{}),(0,i.jsx)(eV,{...e})]})}function eS(e){let{metadata:n}=e,{unlisted:t,frontMatter:l}=n;return(0,i.jsxs)(i.Fragment,{children:[(t||l.unlisted)&&(0,i.jsx)(eR,{}),l.draft&&(0,i.jsx)(eU,{})]})}let eD={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function eF(e){let{children:n}=e,t=function(){let{frontMatter:e,toc:n}=c(),t=(0,h.i)(),l=e.hide_table_of_contents,s=!l&&n.length>0,a=s?(0,i.jsx)(q,{}):void 0;return{hidden:l,mobile:a,desktop:s&&("desktop"===t||"ssr"===t)?(0,i.jsx)(W,{}):void 0}}(),{metadata:l}=c();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,u.Z)("col",!t.hidden&&eD.docItemCol),children:[(0,i.jsx)(eS,{metadata:l}),(0,i.jsx)(f.Z,{}),(0,i.jsxs)("div",{className:eD.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(eE.Z,{}),(0,i.jsx)(j.Z,{}),t.mobile,(0,i.jsx)(eB,{children:n}),(0,i.jsx)(H,{})]}),(0,i.jsx)(x,{})]})]}),t.desktop&&(0,i.jsx)("div",{className:"col col--3",children:t.desktop})]})}function eP(e){let n="docs-doc-id-".concat(e.content.metadata.id),t=e.content;return(0,i.jsx)(o,{content:e.content,children:(0,i.jsxs)(s.FG,{className:n,children:[(0,i.jsx)(d,{}),(0,i.jsx)(eF,{children:(0,i.jsx)(t,{})})]})})}},3944:function(e,n,t){t.d(n,{Z:()=>o});var i=t("5893");t("7294");var l=t("6025"),s=t("7026"),a=t("3012");function r(e){let{permalink:n,title:t,subLabel:l,isNext:r}=e;return(0,i.jsxs)(a.Z,{className:(0,s.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:t})]})}function o(e){let{previous:n,next:t}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,i.jsx)(r,{...n,subLabel:(0,i.jsx)(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,i.jsx)(r,{...t,subLabel:(0,i.jsx)(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},6035:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(5893);t(7294);var l=t(7026),s=t(6025),a=t(4681),r=t(8529);function o(e){let{className:n}=e,t=(0,r.E)();return t.badge?(0,i.jsx)("span",{className:(0,l.Z)(n,a.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}},9580:function(e,n,t){t.d(n,{Z:function(){return j}});var i=t(5893);t(7294);var l=t(7026),s=t(2933),a=t(3012),r=t(6025),o=t(8057),c=t(4681),d=t(3896),u=t(8529);let h={unreleased:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,i.jsx)(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,i.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,i.jsx)(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,i.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function m(e){let n=h[e.versionMetadata.banner];return(0,i.jsx)(n,{...e})}function x(e){let{versionLabel:n,to:t,onClick:l}=e;return(0,i.jsx)(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(a.Z,{to:t,onClick:l,children:(0,i.jsx)(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function f(e){let n,{className:t,versionMetadata:a}=e,{siteConfig:{title:r}}=(0,s.Z)(),{pluginId:u}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:h}=(0,d.J)(u),{latestDocSuggestion:f,latestVersionSuggestion:j}=(0,o.Jo)(u);let p=null!=f?f:(n=j).docs.find(e=>e.id===n.mainDocId);return(0,i.jsxs)("div",{className:(0,l.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(m,{siteTitle:r,versionMetadata:a})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(x,{versionLabel:j.label,to:p.path,onClick:()=>h(j.name)})})]})}function j(e){let{className:n}=e,t=(0,u.E)();return t.banner?(0,i.jsx)(f,{className:n,versionMetadata:t}):null}}}]);