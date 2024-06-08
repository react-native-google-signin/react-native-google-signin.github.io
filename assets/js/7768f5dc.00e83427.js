"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[738],{797:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var o=n(5893),s=n(1151);const t={sidebar_position:3},r="Android setup guide",d={id:"setting-up/android",title:"Android setup guide",description:"If you use Expo, please follow this guide instead. This guide applies to vanilla React Native apps only.",source:"@site/docs/setting-up/android.md",sourceDirName:"setting-up",slug:"/setting-up/android",permalink:"/docs/setting-up/android",draft:!1,unlisted:!1,editUrl:"https://github.com/react-native-google-signin/docs/edit/main/docs/setting-up/android.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Web setup guide",permalink:"/docs/setting-up/web"},next:{title:"iOS setup guide",permalink:"/docs/setting-up/ios"}},l={},a=[{value:"Ensure compatibility",id:"ensure-compatibility",level:3},{value:"Google project configuration",id:"google-project-configuration",level:2},{value:"Without Firebase",id:"without-firebase",level:3},{value:"With Firebase",id:"with-firebase",level:3},{value:"1. Download the configuration file",id:"1-download-the-configuration-file",level:4},{value:"2. Update gradle files",id:"2-update-gradle-files",level:4},{value:"Choose Dependency versions (optional)",id:"choose-dependency-versions-optional",level:2},{value:"Running on simulator or device",id:"running-on-simulator-or-device",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"android-setup-guide",children:"Android setup guide"}),"\n",(0,o.jsx)(i.admonition,{type:"warning",children:(0,o.jsxs)(i.p,{children:["If you use Expo, please follow ",(0,o.jsx)(i.a,{href:"/docs/setting-up/expo",children:"this guide"})," instead. This guide applies to vanilla React Native apps only."]})}),"\n",(0,o.jsx)(i.h3,{id:"ensure-compatibility",children:"Ensure compatibility"}),"\n",(0,o.jsx)(i.p,{children:"If you're using the sponsor package:"}),"\n",(0,o.jsx)(i.p,{children:"If you're using RN >= 0.73, you're good to go."}),"\n",(0,o.jsx)(i.p,{children:"But if you're using RN 0.72 or older, you need to either:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["install version ",(0,o.jsx)(i.code,{children:"12.1.0"})," of the package"]}),"\n",(0,o.jsxs)(i.li,{children:["or install version >= ",(0,o.jsx)(i.code,{children:"13"})," AND specify ",(0,o.jsx)(i.code,{children:"compileSdkVersion"})," 34 in ",(0,o.jsx)(i.code,{children:"android/build.gradle"})," of your project as highlighted below"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"google-project-configuration",children:"Google project configuration"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Follow ",(0,o.jsx)(i.a,{href:"./get-config-file",children:"this"})," guide to set up your project and get the configuration information which you'll need later."]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"without-firebase",children:"Without Firebase"}),"\n",(0,o.jsx)(i.p,{children:"You don't need to do any more modifications."}),"\n",(0,o.jsx)(i.h3,{id:"with-firebase",children:"With Firebase"}),"\n",(0,o.jsx)(i.h4,{id:"1-download-the-configuration-file",children:"1. Download the configuration file"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Download the configuration file (",(0,o.jsx)(i.code,{children:"google-services.json"}),") from Firebase into your project according to ",(0,o.jsx)(i.a,{href:"https://developers.google.com/android/guides/google-services-plugin#adding_the_json_file",children:"this guide"}),"."]}),"\n"]}),"\n",(0,o.jsx)(i.h4,{id:"2-update-gradle-files",children:"2. Update gradle files"}),"\n",(0,o.jsxs)(i.p,{children:["Update ",(0,o.jsx)(i.code,{children:"android/build.gradle"})," with"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-groovy",metastring:'title="android/build.gradle"',children:'buildscript {\n    ext {\n        buildToolsVersion = "a.b.c"\n        minSdkVersion = x\n        compileSdkVersion = y\n        targetSdkVersion = z\n        // highlight-next-line\n        googlePlayServicesAuthVersion = "20.7.0" // <--- use this version or newer\n    }\n// ...\n    dependencies {\n        // highlight-start\n        classpath \'com.google.gms:google-services:4.4.0\' // <--- use this version or newer\n        // highlight-end\n    }\n}\n'})}),"\n",(0,o.jsxs)(i.p,{children:["Update ",(0,o.jsx)(i.code,{children:"android/app/build.gradle"})," with"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-groovy",metastring:'title="android/app/build.gradle"',children:'apply plugin: "com.android.application"\napply plugin: "org.jetbrains.kotlin.android"\napply plugin: "com.facebook.react"\n// highlight-next-line\napply plugin: \'com.google.gms.google-services\'\n'})}),"\n",(0,o.jsx)(i.p,{children:"This ends the setup for Firebase."}),"\n",(0,o.jsx)(i.h2,{id:"choose-dependency-versions-optional",children:"Choose Dependency versions (optional)"}),"\n",(0,o.jsxs)(i.p,{children:["The library depends on ",(0,o.jsx)(i.code,{children:"com.google.android.gms:play-services-auth"}),", as seen in ",(0,o.jsx)(i.a,{href:"https://github.com/react-native-community/google-signin/blob/master/android/build.gradle",children:"build.gradle"}),". If needed, you may control their versions by the ",(0,o.jsx)(i.code,{children:"ext"})," closure, as seen in the code snippet above."]}),"\n",(0,o.jsx)(i.h2,{id:"running-on-simulator-or-device",children:"Running on simulator or device"}),"\n",(0,o.jsx)(i.p,{children:"Make sure you have an emulator / device with Google Play Services installed."})]})}function u(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>r});var o=n(7294);const s={},t=o.createContext(s);function r(e){const i=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(t.Provider,{value:i},e.children)}}}]);