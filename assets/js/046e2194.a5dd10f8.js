"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[667],{2825:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var r=t(5893),s=t(1151),a=t(4866),i=t(5162);const o={sidebar_position:1},l="Installation",c={id:"install",title:"Installation",description:"There are two ways to consume the package: The latest version of the package which",source:"@site/docs/install.mdx",sourceDirName:".",slug:"/install",permalink:"/docs/install",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Setting up",permalink:"/docs/category/setting-up"}},u={},h=[{value:"Accessing the new package for sponsors",id:"accessing-the-new-package-for-sponsors",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Installing",id:"installing",level:2},{value:"Invitation Note",id:"invitation-note",level:5}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:"There are two ways to consume the package: The latest version of the package which"}),"\n",(0,r.jsx)(n.p,{children:"\u2705 is documented on this website"}),"\n",(0,r.jsxs)(n.p,{children:["\u2705 supports the new One-tap sign-in on Android, through the ",(0,r.jsx)(n.a,{href:"https://developers.google.com/identity/android-credential-manager",children:"Credential Manager"})," and ",(0,r.jsx)(n.a,{href:"https://developers.google.com/identity/gsi/web/guides/features",children:"Web"}),", fully compatible (same API) with iOS"]}),"\n",(0,r.jsxs)(n.p,{children:["\u2705 supports the ",(0,r.jsx)(n.a,{href:"https://reactnative.dev/docs/new-architecture-intro",children:"React Native New Architecture"})]}),"\n",(0,r.jsx)(n.p,{children:"\u2705 includes various API improvements (synchronous methods and more) and fixes"}),"\n",(0,r.jsxs)(n.p,{children:["is only available to ",(0,r.jsx)(n.a,{href:"https://github.com/sponsors/vonovak",children:"GitHub sponsors"})," of the maintainer."]}),"\n",(0,r.jsxs)(n.p,{children:["When you become a sponsor (using one of the tiers that grants invitation to the private repo), you will ",(0,r.jsx)(n.a,{href:"#invitation-note",children:"automatically*"})," be invited to the private repo with the latest version of the package."]}),"\n",(0,r.jsx)(n.p,{children:"Thank you for supporting continued maintenance and development of this module! \u2764\ufe0f"}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, you can install from the public registry which will install an older version."}),"\n",(0,r.jsx)(n.h2,{id:"accessing-the-new-package-for-sponsors",children:"Accessing the new package for sponsors"}),"\n",(0,r.jsxs)(n.p,{children:["Three steps are needed to access the sponsored package, which is hosted on ",(0,r.jsx)(n.a,{href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry",children:"GitHub npm packages registry"}),"."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/sponsors/vonovak",children:"Become a sponsor"})," - it takes just a few clicks."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/settings/tokens",children:"Obtain here"})," a Personal Access Token with ",(0,r.jsx)(n.code,{children:"packages:read"})," permission."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set up your package manager so that it fetches the package from the GH packages registry. In this example, we're using an ",(0,r.jsx)(n.code,{children:"NPM_TOKEN_GOOGLE_SIGN_IN"})," environment variable."]}),"\n"]}),"\n"]}),"\n","\n","\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(i.Z,{value:"yarn v3",label:"yarn v3",children:[(0,r.jsxs)(n.p,{children:["create a ",(0,r.jsx)(n.code,{children:".yarnrc.yml"})," file in your project root with the following content:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"npmScopes:\n  react-native-google-signin:\n    npmRegistryServer: https://npm.pkg.github.com\n    npmAuthToken: '${NPM_TOKEN_GOOGLE_SIGN_IN}'\n"})})]}),(0,r.jsxs)(i.Z,{value:"classic",label:"npm / yarn v1",children:[(0,r.jsxs)(n.p,{children:["create a ",(0,r.jsx)(n.code,{children:".npmrc"})," file in your project root with the following content:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"//npm.pkg.github.com/:_authToken=${NPM_TOKEN_GOOGLE_SIGN_IN}\n\n@react-native-google-signin:registry=https://npm.pkg.github.com/\n"})})]})]}),"\n",(0,r.jsxs)(n.p,{children:["If you use another package manager (",(0,r.jsx)(n.a,{href:"https://bun.sh/docs/install/registries",children:"such as bun"}),"), please refer to its documentation on how to set up a custom registry."]}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsx)(n.p,{children:"The package requires React Native 0.60 or higher."}),"\n",(0,r.jsxs)(n.p,{children:["If you're using the ",(0,r.jsx)(n.a,{href:"https://reactnative.dev/docs/new-architecture-intro",children:"New Architecture"}),", you need to be on React Native 0.72 or higher."]}),"\n",(0,r.jsx)(n.h2,{id:"installing",children:"Installing"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @react-native-google-signin/google-signin\n"})}),"\n",(0,r.jsx)(n.p,{children:"There are several guides to follow now:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"setting-up/expo",children:"Expo guide"})," for native mobile apps built with Expo"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"setting-up/web",children:"Web guide"})," if you want to use the package on the Web"]}),"\n",(0,r.jsxs)(n.li,{children:["If you're not using Expo but plain React Native, follow ",(0,r.jsx)(n.a,{href:"setting-up/android",children:"Android guide"})," and ",(0,r.jsx)(n.a,{href:"setting-up/ios",children:"iOS guide"})]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h5,{id:"invitation-note",children:"Invitation Note"}),"\n",(0,r.jsxs)(n.p,{children:["As a sponsor, you will be added automatically if you sponsor from a personal account. If you sponsor from an organization account, please let me know and I'll add you manually. This is because of how ",(0,r.jsx)(n.a,{href:"https://docs.github.com/en/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers#about-adding-repositories-to-a-sponsorship-tier",children:"GitHub handles this case"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var r=t(6905);const s={tabItem:"tabItem_Ymn6"};var a=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(7294),s=t(6905),a=t(2466),i=t(6550),o=t(469),l=t(1980),c=t(7392),u=t(12);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,h]=g({queryString:t,groupId:s}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),b=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,a]),tabValues:a}}var m=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function x(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==r&&(c(n),i(s))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:h,onClick:u,...a,className:(0,s.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function w(e){const n=(0,m.Z)();return(0,v.jsx)(y,{...e,children:h(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(7294);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);