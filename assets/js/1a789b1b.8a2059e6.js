"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[509],{7239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(5893),a=n(1151),s=n(4866),o=n(5162);const l={sidebar_position:2},i="Web setup guide",c={id:"setting-up/web",title:"Web setup guide",description:"On the web, there is one extra step necessary to use the library: to load the Google Client Library and make it available in the browser before calling any of the APIs exposed by this package.",source:"@site/docs/setting-up/web.mdx",sourceDirName:"setting-up",slug:"/setting-up/web",permalink:"/docs/setting-up/web",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Expo setup",permalink:"/docs/setting-up/expo"},next:{title:"Android setup guide",permalink:"/docs/setting-up/android"}},u={},d=[];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"web-setup-guide",children:"Web setup guide"}),"\n",(0,r.jsxs)(t.p,{children:["On the web, there is one extra step necessary to use the library: to load the Google Client Library and make it available in the browser ",(0,r.jsx)(t.strong,{children:"before"})," calling any of the APIs exposed by this package."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Please note that Web support is only available to sponsors\ufe0f. ",(0,r.jsx)(t.a,{href:"/docs/install#accessing-the-private-package-for-sponsors",children:"It takes just a few clicks to get access"})," \u2764\ufe0f."]})}),"\n",(0,r.jsx)(t.p,{children:"There are different ways to load the client script. Some of them are:"}),"\n","\n","\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(o.Z,{value:"Next.js",label:"Next.js",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import Script from \'next/script\';\n\n<Script\n  src="https://accounts.google.com/gsi/client"\n  strategy="lazyOnload"\n  onLoad={() => {\n    // present the one-tap popup\n  }}\n/>;\n'})})}),(0,r.jsx)(o.Z,{value:"html",label:"Simple html",children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://developers.google.com/identity/gsi/web/guides/client-library",children:"See here"})})}),(0,r.jsx)(o.Z,{value:"useEffect",label:"useEffect",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"useEffect(() => {\n  const scriptTag = document.createElement('script');\n  scriptTag.src = 'https://accounts.google.com/gsi/client';\n  scriptTag.async = true;\n  scriptTag.onload = () => {\n    setLoaded(true);\n  };\n  scriptTag.onerror = () => {\n    console.error('Failed to load Google One-tap script');\n  };\n\ndocument.body.appendChild(scriptTag);\n}, []);\n\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["After the script is loaded, you can call the functions for signing in and render the ",(0,r.jsx)(t.code,{children:"WebGoogleSigninButton"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If you call any of the One-tap functions before the client library is loaded, such calls will reject with the ",(0,r.jsxs)(t.a,{href:"../errors",children:[(0,r.jsx)(t.code,{children:"PLAY_SERVICES_NOT_AVAILABLE"})," error code"]}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You can read the official docs for loading the Client Library ",(0,r.jsx)(t.a,{href:"https://developers.google.com/identity/gsi/web/guides/client-library",children:"here"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var r=n(6905);const a={tabItem:"tabItem_Ymn6"};var s=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7294),a=n(6905),s=n(2466),o=n(6550),l=n(469),i=n(1980),c=n(7392),u=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=b({queryString:n,groupId:a}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),m=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=n(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(5893);function v(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==r&&(c(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(y,{...e,...t})]})}function w(e){const t=(0,g.Z)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var r=n(7294);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);