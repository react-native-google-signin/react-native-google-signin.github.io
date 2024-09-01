"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[378],{7726:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=i(5893),t=i(1151);const s={sidebar_position:4},l="iOS setup guide",d={id:"setting-up/ios",title:"iOS setup guide",description:"If you use Expo, please follow this guide instead. This guide applies to vanilla React Native apps only.",source:"@site/docs/setting-up/ios.md",sourceDirName:"setting-up",slug:"/setting-up/ios",permalink:"/docs/setting-up/ios",draft:!1,unlisted:!1,editUrl:"https://github.com/react-native-google-signin/docs/edit/main/docs/setting-up/ios.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Android setup guide",permalink:"/docs/setting-up/android"},next:{title:"Obtaining configuration information",permalink:"/docs/setting-up/get-config-file"}},r={},c=[{value:"Link the native module",id:"link-the-native-module",level:3},{value:"Google project configuration",id:"google-project-configuration",level:3},{value:"Xcode configuration",id:"xcode-configuration",level:3},{value:"Optional: modify your app to respond to the URL scheme",id:"optional-modify-your-app-to-respond-to-the-url-scheme",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"ios-setup-guide",children:"iOS setup guide"})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["If you use Expo, please follow ",(0,o.jsx)(n.a,{href:"/docs/setting-up/expo",children:"this guide"})," instead. This guide applies to vanilla React Native apps only."]})}),"\n",(0,o.jsx)(n.h3,{id:"link-the-native-module",children:"Link the native module"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["run ",(0,o.jsx)(n.code,{children:"pod install"})," in ",(0,o.jsx)(n.code,{children:"ios/"})," directory to install the module"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"google-project-configuration",children:"Google project configuration"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Follow ",(0,o.jsx)(n.a,{href:"./get-config-file",children:"this"})," guide to get the configuration information which you need for the next steps."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"xcode-configuration",children:"Xcode configuration"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Configure URL types in the ",(0,o.jsx)(n.code,{children:"Info"})," panel (see screenshot)","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["add a URL with scheme set to your ",(0,o.jsx)(n.code,{children:"REVERSED_CLIENT_ID"})," (found inside ",(0,o.jsx)(n.code,{children:"GoogleService-Info.plist"})," or Google Cloud console)"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"If you need to support Mac Catalyst, you will need to enable the Keychain Sharing capability on each build target. No keychain groups need to be added."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"link config",src:i(7898).Z+"",width:"768",height:"393"})}),"\n",(0,o.jsx)(n.h3,{id:"optional-modify-your-app-to-respond-to-the-url-scheme",children:"Optional: modify your app to respond to the URL scheme"}),"\n",(0,o.jsxs)(n.p,{children:["This is only required if you have multiple listeners for ",(0,o.jsx)(n.code,{children:"openURL"})," - for instance if you have both Google and Facebook OAuth (as seen in the code snippet below)."]}),"\n",(0,o.jsxs)(n.p,{children:["Because only one ",(0,o.jsx)(n.code,{children:"openURL"})," method can be defined, if you have multiple listeners for ",(0,o.jsx)(n.code,{children:"openURL"}),", you must combine them into a single function in your ",(0,o.jsx)(n.code,{children:"AppDelegate.m"})," like so:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Open ",(0,o.jsx)(n.code,{children:"AppDelegate.m"})]}),"\n",(0,o.jsxs)(n.li,{children:["Add an import: ",(0,o.jsx)(n.code,{children:"#import <GoogleSignIn/GoogleSignIn.h>"})]}),"\n",(0,o.jsxs)(n.li,{children:["Add a method to respond to the URL scheme. This is just an example of a method that you can add at the bottom of your file if you're using both ",(0,o.jsx)(n.code,{children:"FBSDKApplicationDelegate"})," and ",(0,o.jsx)(n.code,{children:"GIDSignIn"})," :"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-objc",children:"// AppDelegate.m\n- (BOOL)application:(UIApplication *)application openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<NSString *,id> *)options {\n  return [[FBSDKApplicationDelegate sharedInstance] application:application openURL:url options:options] || [GIDSignIn.sharedInstance handleURL:url];\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},7898:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/urlTypes-de517476eed3b4c47fd57f1889ffbcfb.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>l});var o=i(7294);const t={},s=o.createContext(t);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);