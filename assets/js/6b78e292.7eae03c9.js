"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[196],{9451:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var o=n(5893),t=n(1151);const r={sidebar_position:15},s="Obtaining configuration information",d={id:"setting-up/get-config-file",title:"Obtaining configuration information",description:"Please note that you do not need Firebase to configure Google Sign In. However, if you use it, it's a little easier to set up the sign in experience because Firebase gives you one file to download and put into your project.",source:"@site/docs/setting-up/get-config-file.md",sourceDirName:"setting-up",slug:"/setting-up/get-config-file",permalink:"/docs/setting-up/get-config-file",draft:!1,unlisted:!1,editUrl:"https://github.com/react-native-google-signin/docs/edit/main/docs/setting-up/get-config-file.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"iOS setup guide",permalink:"/docs/setting-up/ios"},next:{title:"One-tap Google sign in",permalink:"/docs/one-tap"}},a={},c=[{value:"Android SHA-1 certificate fingerprint note",id:"android-sha-1-certificate-fingerprint-note",level:3},{value:"Without Firebase",id:"without-firebase",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Web Client ID",id:"web-client-id",level:2},{value:"With Firebase",id:"with-firebase",level:2},{value:"1. Add your iOS and Android App inside Project settings",id:"1-add-your-ios-and-android-app-inside-project-settings",level:3},{value:"2. Enter required information and download the config file",id:"2-enter-required-information-and-download-the-config-file",level:3}];function l(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"obtaining-configuration-information",children:"Obtaining configuration information"}),"\n",(0,o.jsxs)(i.p,{children:["Please note that you ",(0,o.jsx)(i.strong,{children:"do not"})," need Firebase to configure Google Sign In. However, if you use it, it's a little easier to set up the sign in experience because Firebase gives you one file to download and put into your project."]}),"\n",(0,o.jsxs)(i.p,{children:["If you're using Expo EAS, read ",(0,o.jsx)(i.a,{href:"https://docs.expo.dev/app-signing/managed-credentials/#inspecting-credentials-configuration",children:"credentials docs"})," to learn how to obtain information about how your app is signed with EAS."]}),"\n",(0,o.jsx)(i.h3,{id:"android-sha-1-certificate-fingerprint-note",children:"Android SHA-1 certificate fingerprint note"}),"\n",(0,o.jsxs)(i.p,{children:["You could have multiple signing configurations - for example for building debug APK, release APK, and ",(0,o.jsx)(i.a,{href:"https://support.google.com/googleplay/android-developer/answer/9842756?hl=en",children:"Play App Signing"})," for production deployments. You will need to get the SHA1 certificate fingerprints\nfor all keystores you intend to use and enter them in Firebase or Google Cloud Console."]}),"\n",(0,o.jsx)(i.h2,{id:"without-firebase",children:"Without Firebase"}),"\n",(0,o.jsx)(i.h3,{id:"ios",children:"iOS"}),"\n",(0,o.jsxs)(i.p,{children:["You need to obtain the ",(0,o.jsx)(i.code,{children:"ios client id"})," and ",(0,o.jsx)(i.code,{children:"reversed client id"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["Follow the instructions at ",(0,o.jsx)(i.a,{href:"https://developers.google.com/identity/sign-in/ios/start-integrating#get_an_oauth_client_id",children:'"Get an OAuth client ID"'})," and then ",(0,o.jsx)(i.a,{href:"https://developers.google.com/identity/sign-in/ios/start-integrating#configure_app_project",children:'"Configure your application project"'}),"."]}),"\n",(0,o.jsx)(i.h3,{id:"android",children:"Android"}),"\n",(0,o.jsxs)(i.p,{children:["Follow the instructions at ",(0,o.jsx)(i.a,{href:"https://developers.google.com/identity/sign-in/android/start#configure-a-google-api-console-project",children:'"Configure a Google API Console project"'}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["Please see ",(0,o.jsx)(i.a,{href:"https://support.google.com/cloud/answer/6158849#installedapplications&android",children:"more details here"})," if needed.\nIt's important that OAuth 2.0 Android ID has the SHA-1 certificate fingerprint set correspondingly to the one which is used to sign the APK. Also, package name should be the same as apk package name."]}),"\n",(0,o.jsx)(i.h2,{id:"web-client-id",children:"Web Client ID"}),"\n",(0,o.jsxs)(i.p,{children:["When done configuring your project, take note of Web Client ID which you may need later. It can be found ",(0,o.jsx)(i.a,{href:"https://console.developers.google.com/apis/credentials",children:"here"}),".\nMake sure you select the correct project. The Web Client ID should be under OAuth section."]}),"\n",(0,o.jsx)(i.h2,{id:"with-firebase",children:"With Firebase"}),"\n",(0,o.jsx)(i.p,{children:"If you don't already have a project in Firebase you need to create one in order to add credentials for your iOS and Android application."}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://console.firebase.google.com/u/0/",children:"Firebase console link"})}),"\n",(0,o.jsx)(i.h3,{id:"1-add-your-ios-and-android-app-inside-project-settings",children:"1. Add your iOS and Android App inside Project settings"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{alt:"Project settings",src:n(4046).Z+"",width:"992",height:"394"})}),"\n",(0,o.jsx)(i.h3,{id:"2-enter-required-information-and-download-the-config-file",children:"2. Enter required information and download the config file"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.em,{children:"Note: For Android, adding the SHA1 hash is an obligation"})}),"\n",(0,o.jsxs)(i.p,{children:["You can use your debug keystore's SHA1 hash, read this ",(0,o.jsx)(i.a,{href:"https://stackoverflow.com/questions/15727912/sha-1-fingerprint-of-keystore-certificate",children:"StackOverflow thread"})," to obtain it. When running the ",(0,o.jsx)(i.code,{children:"keytool"})," command, ",(0,o.jsx)(i.strong,{children:"MAKE SURE"})," you provide path to the correct keystore, you may have multiple keystores on your system! (eg in home directory, and also directly in the ",(0,o.jsx)(i.code,{children:"android/app"})," folder). To see what keystore is being used to sign your app, go to ",(0,o.jsx)(i.code,{children:"android/app/build.gradle"})," and look for ",(0,o.jsx)(i.code,{children:"storeFile"})," entries."]}),"\n",(0,o.jsxs)(i.p,{children:["If you don't have a keystore, you need to generate one. To generate your keystore follow ",(0,o.jsx)(i.a,{href:"https://facebook.github.io/react-native/docs/signed-apk-android.html",children:"this guide"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},4046:(e,i,n)=>{n.d(i,{Z:()=>o});const o=n.p+"assets/images/project-settings-c683fe8fd621687b531cfd49f3c4b42f.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>s});var o=n(7294);const t={},r=o.createContext(t);function s(e){const i=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:i},e.children)}}}]);