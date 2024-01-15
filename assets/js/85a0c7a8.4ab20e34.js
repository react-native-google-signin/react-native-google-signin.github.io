"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[751],{2687:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var i=t(5893),s=t(1151);const d={},o="WebGoogleSigninButton",r={id:"buttons/web",title:"WebGoogleSigninButton",description:"This is the sign in button that you can use in Web apps. It renders null when used in native apps.",source:"@site/docs/buttons/web.md",sourceDirName:"buttons",slug:"/buttons/web",permalink:"/docs/buttons/web",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GoogleSigninButton",permalink:"/docs/buttons/native"},next:{title:"Jest module mock",permalink:"/docs/jest-mock"}},c={},l=[{value:"Props",id:"props",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"webgooglesigninbutton",children:"WebGoogleSigninButton"}),"\n",(0,i.jsxs)(n.p,{children:["This is the sign in button that you can use in Web apps. It renders ",(0,i.jsx)(n.code,{children:"null"})," when used in native apps.\nIt has a slightly different API than the native ",(0,i.jsx)(n.code,{children:"GoogleSigninButton"})," component which is why it exists as a separate component."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Please note that Web support is only available to sponsors\ufe0f. ",(0,i.jsx)(n.a,{href:"/docs/install#accessing-the-private-package-for-sponsors",children:"It takes just a few clicks to get access"})," \u2764\ufe0f."]})}),"\n",(0,i.jsxs)(n.p,{children:["The button will ",(0,i.jsx)(n.em,{children:"not render"})," before the ",(0,i.jsx)(n.a,{href:"../setting-up/web",children:"Google Client API has been loaded"}),". You can use the ",(0,i.jsx)(n.code,{children:"onError"})," prop to detect this case."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { WebGoogleSigninButton } from '@react-native-google-signin/google-signin';\n\n<WebGoogleSigninButton\n  webClientId={config.webClientId}\n  onPress={() => {\n    // initiate sign in\n  }}\n/>;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"webClientId"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"Required. The web client ID."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"onPress?"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"() => void"})}),(0,i.jsx)(n.td,{children:"Optional. The function to call when the button is pressed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"type?"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"standard"'})," | ",(0,i.jsx)(n.code,{children:'"icon"'})]}),(0,i.jsx)(n.td,{children:"Optional. The type of the sign-in button."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"theme?"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"outline"'})," | ",(0,i.jsx)(n.code,{children:'"filled_blue"'})," | ",(0,i.jsx)(n.code,{children:'"filled_black"'})]}),(0,i.jsx)(n.td,{children:"Optional. The theme of the sign-in button."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"size?"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"large"'})," | ",(0,i.jsx)(n.code,{children:'"medium"'})," | ",(0,i.jsx)(n.code,{children:'"small"'})]}),(0,i.jsx)(n.td,{children:"Optional. The size of the sign-in button."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"text?"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"signin_with"'})," | ",(0,i.jsx)(n.code,{children:'"signup_with"'})," | ",(0,i.jsx)(n.code,{children:'"continue_with"'})," | ",(0,i.jsx)(n.code,{children:'"signin"'})]}),(0,i.jsx)(n.td,{children:"Optional. The text to display on the sign-in button."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"shape?"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"rectangular"'})," | ",(0,i.jsx)(n.code,{children:'"pill"'})," | ",(0,i.jsx)(n.code,{children:'"circle"'})," | ",(0,i.jsx)(n.code,{children:'"square"'})]}),(0,i.jsx)(n.td,{children:"Optional. The shape of the sign-in button."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"width?"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"Optional. The width of the sign-in button."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"locale?"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"Optional. The locale for the sign-in button."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"logoAlignment?"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"left"'})," | ",(0,i.jsx)(n.code,{children:'"center"'})]}),(0,i.jsx)(n.td,{children:"Optional. The alignment of the logo on the button."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"onError?"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(error: Error) => void"})}),(0,i.jsx)(n.td,{children:"Optional. Called when you try to render the button before the Client SDK is loaded."})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(7294);const s={},d=i.createContext(s);function o(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);