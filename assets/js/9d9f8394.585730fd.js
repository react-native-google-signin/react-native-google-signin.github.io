"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[360],{6458:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=o(5893),r=o(1151);const s={sidebar_label:"Troubleshooting",sidebar_position:70},t="FAQ / Troubleshooting",a={id:"troubleshooting",title:"FAQ / Troubleshooting",description:"Android",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/react-native-google-signin/docs/edit/main/docs/troubleshooting.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_label:"Troubleshooting",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Error handling",permalink:"/docs/errors"},next:{title:"License",permalink:"/docs/license"}},c={},l=[{value:"Android",id:"android",level:2},{value:"&quot;A non-recoverable sign in failure occurred&quot;",id:"a-non-recoverable-sign-in-failure-occurred",level:3},{value:"Login does not work when downloading from the Play Store.",id:"login-does-not-work-when-downloading-from-the-play-store",level:3},{value:"<code>DEVELOPER_ERROR</code> or <code>code: 10</code> or <code>Developer console is not set up correctly</code> error message",id:"developer_error",level:3},{value:"Login does not work when using Internal App Sharing.",id:"login-does-not-work-when-using-internal-app-sharing",level:3},{value:"Changing <code>play-services-auth</code> version",id:"changing-play-services-auth-version",level:3},{value:"<code>Missing api_key/current_key object</code>",id:"missing-api_keycurrent_key-object",level:3},{value:"Package name !== application id",id:"package-name--application-id",level:3},{value:"iOS",id:"ios",level:2},{value:"On iOS the app crashes when tapping Sign In button",id:"on-ios-the-app-crashes-when-tapping-sign-in-button",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"faq--troubleshooting",children:"FAQ / Troubleshooting"})}),"\n",(0,i.jsx)(n.h2,{id:"android",children:"Android"}),"\n",(0,i.jsx)(n.h3,{id:"a-non-recoverable-sign-in-failure-occurred",children:'"A non-recoverable sign in failure occurred"'}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/react-native-community/google-signin/issues/659#issuecomment-513555464",children:"this comment"}),". Or ",(0,i.jsx)(n.a,{href:"https://stackoverflow.com/questions/53816227/google-signin-sdk-is-failing-by-throwing-error-a-non-recoverable-sign-in-failur",children:"this SO question"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"login-does-not-work-when-downloading-from-the-play-store",children:"Login does not work when downloading from the Play Store."}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"#developer_error",children:"the next paragraph"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"developer_error",children:[(0,i.jsx)(n.code,{children:"DEVELOPER_ERROR"})," or ",(0,i.jsx)(n.code,{children:"code: 10"})," or ",(0,i.jsx)(n.code,{children:"Developer console is not set up correctly"})," error message"]}),"\n",(0,i.jsxs)(n.p,{children:["This is always (",(0,i.jsx)(n.em,{children:"always"}),"!) a configuration mismatch between your app and Google's servers. The problem is on your app's side."]}),"\n",(0,i.jsx)(n.p,{children:"Follow these pointers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/react-native-google-signin/google-signin/issues?q=is%3Aissue+DEVELOPER+ERROR+is%3Aclosed",children:"Search the issue tracker"})," for old reports of the error"]}),"\n",(0,i.jsxs)(n.li,{children:["Make sure that your SHA certificate fingerprints and package name you entered in Firebase / Google Cloud Console are correct. ",(0,i.jsx)(n.a,{href:"https://x.com/vonovak/status/1692127631473529226",children:"See how your app was signed"}),". If you are in development, make sure your development signing fingerprint is added as well."]}),"\n",(0,i.jsxs)(n.li,{children:["Follow the ",(0,i.jsx)(n.a,{href:"/docs/setting-up/get-config-file",children:"setup guide"})," and perform its steps once again."]}),"\n",(0,i.jsxs)(n.li,{children:["If you're passing ",(0,i.jsx)(n.code,{children:"webClientId"})," in configuration object to ",(0,i.jsx)(n.code,{children:"GoogleSignin.configure()"})," make sure it's correct and that it is of type web (NOT Android!). You can get your ",(0,i.jsx)(n.code,{children:"webClientId"})," from ",(0,i.jsx)(n.a,{href:"https://console.developers.google.com/apis/credentials",children:"Google Developer Console"}),'. It is listed under "OAuth 2.0 client IDs".']}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"login-does-not-work-when-using-internal-app-sharing",children:"Login does not work when using Internal App Sharing."}),"\n",(0,i.jsxs)(n.p,{children:["If you get a ",(0,i.jsx)(n.code,{children:"DEVELOPER_ERROR"})," when using Internal App Sharing, it is because Google resigns your application with its own key."]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"#developer_error",children:"the previous paragraph"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"changing-play-services-auth-version",children:["Changing ",(0,i.jsx)(n.code,{children:"play-services-auth"})," version"]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/setting-up/android#choose-dependency-versions-optional",children:'"Choose Dependency versions"'})," above."]}),"\n",(0,i.jsx)(n.h3,{id:"missing-api_keycurrent_key-object",children:(0,i.jsx)(n.code,{children:"Missing api_key/current_key object"})}),"\n",(0,i.jsxs)(n.p,{children:["open ",(0,i.jsx)(n.code,{children:"android/app/google-services.json"})," and replace ",(0,i.jsx)(n.code,{children:'"api_key":[]'})," with ",(0,i.jsx)(n.code,{children:'"api_key":[{ "current_key": "" }]'})]}),"\n",(0,i.jsx)(n.h3,{id:"package-name--application-id",children:"Package name !== application id"}),"\n",(0,i.jsxs)(n.p,{children:["When adding a new oauth client, google asks you to add your package name. In some cases your package name is not equal to your application id. Check if your package name in the ",(0,i.jsx)(n.code,{children:"AndroidManifest.xml"})," is the same as your application/bundle id. Find your application id in the play console or ",(0,i.jsx)(n.code,{children:"android/app/build.gradle"}),". The format looks like ",(0,i.jsx)(n.code,{children:"com.yourapp.id"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"ios",children:"iOS"}),"\n",(0,i.jsx)(n.h3,{id:"on-ios-the-app-crashes-when-tapping-sign-in-button",children:"On iOS the app crashes when tapping Sign In button"}),"\n",(0,i.jsx)(n.p,{children:'Along with "Your app is missing support for the following URL schemes" error in console.'}),"\n",(0,i.jsxs)(n.p,{children:["Your ",(0,i.jsx)(n.code,{children:"Url Schemes"})," configuration is incorrect."]}),"\n",(0,i.jsxs)(n.p,{children:["If you use Expo, make sure that the ",(0,i.jsx)(n.a,{href:"setting-up/expo#add-config-plugin",children:"config plugin"})," is configured correctly."]}),"\n",(0,i.jsxs)(n.p,{children:["In vanilla React Native projects, add URL type like this: ",(0,i.jsx)(n.img,{alt:"configure URL schemes",src:o(576).Z+"",width:"2717",height:"1836"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},576:(e,n,o)=>{o.d(n,{Z:()=>i});const i=o.p+"assets/images/add-url-scheme-ios-a4d1e60b6c16020c80e078dd58dccbb9.png"},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>t});var i=o(7294);const r={},s=i.createContext(r);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);