"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[738],{8200:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var o=i(5893),s=i(1151);const t={sidebar_position:3},r="Android setup guide",l={id:"setting-up/android",title:"Android setup guide",description:"This applies to vanilla React Native apps, not Expo.",source:"@site/docs/setting-up/android.md",sourceDirName:"setting-up",slug:"/setting-up/android",permalink:"/docs/setting-up/android",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Web setup guide",permalink:"/docs/setting-up/web"},next:{title:"iOS setup guide",permalink:"/docs/setting-up/ios"}},a={},d=[{value:"1. Google project configuration",id:"1-google-project-configuration",level:3},{value:"1.a - if you&#39;re using Firebase",id:"1a---if-youre-using-firebase",level:4},{value:"2. Installation",id:"2-installation",level:3},{value:"Choose Dependency versions (optional)",id:"choose-dependency-versions-optional",level:4},{value:"3. Running on simulator",id:"3-running-on-simulator",level:3},{value:"Running on device",id:"running-on-device",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"android-setup-guide",children:"Android setup guide"}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"This applies to vanilla React Native apps, not Expo."})}),"\n",(0,o.jsx)(n.h3,{id:"1-google-project-configuration",children:"1. Google project configuration"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Follow ",(0,o.jsx)(n.a,{href:"/docs/setting-up/get-config-file",children:"this"})," guide to get the configuration information."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"1a---if-youre-using-firebase",children:"1.a - if you're using Firebase"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Place the generated configuration file (",(0,o.jsx)(n.code,{children:"google-services.json"}),") into project according to ",(0,o.jsx)(n.a,{href:"https://developers.google.com/android/guides/google-services-plugin#adding_the_json_file",children:"this guide"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Please see ",(0,o.jsx)(n.a,{href:"https://support.google.com/cloud/answer/6158849#installedapplications&android",children:"more details here"})," if needed.\nIt's important that OAuth 2.0 android id has fingerprint set correspondingly to the fingerprint of certificate which is used to sign the apk. Also, package name should be the same as apk package name."]}),"\n",(0,o.jsx)(n.h3,{id:"2-installation",children:"2. Installation"}),"\n",(0,o.jsxs)(n.p,{children:["1 . Update ",(0,o.jsx)(n.code,{children:"android/build.gradle"})," with"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-groovy",metastring:'title="android/build.gradle"',children:'buildscript {\n    ext {\n        buildToolsVersion = "27.0.3"\n        minSdkVersion = 16\n        compileSdkVersion = 27\n        targetSdkVersion = 26\n        supportLibVersion = "27.1.1"\n        // highlight-next-line\n        googlePlayServicesAuthVersion = "19.2.0" // <--- use this version or newer\n    }\n// ...\n    dependencies {\n        // highlight-start\n        classpath \'com.android.tools.build:gradle:4.2.1\' // <--- use this version or newer\n        classpath \'com.google.gms:google-services:4.3.10\' // <--- use this version or newer\n        // highlight-end\n    }\n// ...\n    allprojects {\n        repositories {\n            mavenLocal()\n            // highlight-next-line\n            google() // <--- make sure this is included\n            jcenter()\n            maven {\n                // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm\n                url "$rootDir/../node_modules/react-native/android"\n            }\n        }\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["2 . Update ",(0,o.jsx)(n.code,{children:"android/app/build.gradle"})," with"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-groovy",metastring:'title="android/app/build.gradle"',children:'dependencies {\n    implementation fileTree(dir: "libs", include: ["*.jar"])\n    implementation "com.facebook.react:react-native:+"\n    // highlight-next-line\n    implementation \'androidx.swiperefreshlayout:swiperefreshlayout:1.0.0\' // <-- add this; newer versions should work too\n}\n\n// highlight-next-line\napply plugin: \'com.google.gms.google-services\' // <--- this should be the last line\n'})}),"\n",(0,o.jsx)(n.h4,{id:"choose-dependency-versions-optional",children:"Choose Dependency versions (optional)"}),"\n",(0,o.jsxs)(n.p,{children:["The library depends on ",(0,o.jsx)(n.code,{children:"com.google.android.gms:play-services-auth"}),", as seen in ",(0,o.jsx)(n.a,{href:"https://github.com/react-native-community/google-signin/blob/master/android/build.gradle",children:"build.gradle"}),". If needed, you may control their versions by the ",(0,o.jsx)(n.code,{children:"ext"})," closure, as seen in ",(0,o.jsx)(n.a,{href:"https://github.com/react-native-community/google-signin/blob/master/example/android/build.gradle",children:"build.gradle"})," of the example app."]}),"\n",(0,o.jsx)(n.h3,{id:"3-running-on-simulator",children:"3. Running on simulator"}),"\n",(0,o.jsx)(n.p,{children:"Make sure you have a simulator with Google Play Services installed."}),"\n",(0,o.jsxs)(n.p,{children:["To ensure best performance, you should have ",(0,o.jsx)(n.a,{href:"https://developer.android.com/studio/run/emulator-acceleration#accel-vm",children:"HW acceleration"})," working."]}),"\n",(0,o.jsx)(n.h3,{id:"running-on-device",children:"Running on device"}),"\n",(0,o.jsx)(n.p,{children:"Nothing special here, as long as you run your app on an Android device with Google Play Services installed."})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var o=i(7294);const s={},t=o.createContext(s);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);