"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[253],{8020:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var o=i(5893),s=i(1151);const d={},t="GoogleSigninButton",r={id:"buttons/native",title:"GoogleSigninButton",description:"This is the sign in button that you can use in native apps. It renders null when used on the web.",source:"@site/docs/buttons/native.md",sourceDirName:"buttons",slug:"/buttons/native",permalink:"/google-signin/docs/buttons/native",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/buttons/native.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React components",permalink:"/google-signin/docs/category/react-components"},next:{title:"WebGoogleSigninButton",permalink:"/google-signin/docs/buttons/web"}},l={},c=[{value:"Props",id:"props",level:2},{value:"<code>size</code>",id:"size",level:3},{value:"<code>color</code>",id:"color",level:3},{value:"<code>disabled</code>",id:"disabled",level:3},{value:"<code>onPress</code>",id:"onpress",level:3},{value:"Inherited <code>View</code> props...",id:"inherited-view-props",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"googlesigninbutton",children:"GoogleSigninButton"}),"\n",(0,o.jsxs)(n.p,{children:["This is the sign in button that you can use in native apps. It renders ",(0,o.jsx)(n.code,{children:"null"})," when used on the web."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"signin button",src:i(7101).Z+"",width:"382",height:"92"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { GoogleSigninButton } from '@react-native-google-signin/google-signin';\n\n<GoogleSigninButton\n  size={GoogleSigninButton.Size.Wide}\n  color={GoogleSigninButton.Color.Dark}\n  onPress={() => {\n    // initiate sign in\n  }}\n  disabled={isInProgress}\n/>;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,o.jsx)(n.h3,{id:"size",children:(0,o.jsx)(n.code,{children:"size"})}),"\n",(0,o.jsx)(n.p,{children:"Possible values:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Size.Icon"}),": display only Google icon. Recommended size of 48 x 48."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Size.Standard"}),": icon with 'Sign in'. Recommended size of 230 x 48."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Size.Wide"}),": icon with 'Sign in with Google'. Recommended size of 312 x 48."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Default: ",(0,o.jsx)(n.code,{children:"GoogleSigninButton.Size.Standard"}),". Given the ",(0,o.jsx)(n.code,{children:"size"})," prop you pass, we'll automatically apply the recommended size, but you can override it by passing the style prop as in ",(0,o.jsx)(n.code,{children:"style={{ width, height }}"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"color",children:(0,o.jsx)(n.code,{children:"color"})}),"\n",(0,o.jsx)(n.p,{children:"Possible values:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Color.Dark"}),": apply a blue background"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Color.Light"}),": apply a light gray background"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"disabled",children:(0,o.jsx)(n.code,{children:"disabled"})}),"\n",(0,o.jsx)(n.p,{children:"Boolean. If true, all interactions for the button are disabled."}),"\n",(0,o.jsx)(n.h3,{id:"onpress",children:(0,o.jsx)(n.code,{children:"onPress"})}),"\n",(0,o.jsx)(n.p,{children:"Handler to be called when the user taps the button"}),"\n",(0,o.jsx)(n.h3,{id:"inherited-view-props",children:(0,o.jsxs)(n.a,{href:"https://facebook.github.io/react-native/docs/view#props",children:["Inherited ",(0,o.jsx)(n.code,{children:"View"})," props..."]})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},7101:(e,n,i)=>{i.d(n,{Z:()=>o});const o="data:image/png;base64,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"},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>t});var o=i(7294);const s={},d=o.createContext(s);function t(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);