"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[360],{8059:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var i=n(5893),r=n(1151);const t={sidebar_label:"Troubleshooting",sidebar_position:70},s="FAQ / Troubleshooting",a={id:"troubleshooting",title:"FAQ / Troubleshooting",description:"I'm getting an error and I'm not able to fix it",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/troubleshooting.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_label:"Troubleshooting",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Error handling",permalink:"/docs/errors"},next:{title:"Reference",permalink:"/docs/api/"}},l={},d=[{value:"I&#39;m getting an error and I&#39;m not able to fix it",id:"im-getting-an-error-and-im-not-able-to-fix-it",level:4},{value:"Android",id:"android",level:2},{value:"I&#39;m getting &quot;A non-recoverable sign in failure occurred&quot;",id:"im-getting-a-non-recoverable-sign-in-failure-occurred",level:4},{value:"Getting <code>DEVELOPER_ERROR</code> or <code>code: 10</code> error message on Android when trying to login. OR signin() hangs and never resolves the promise.",id:"getting-developer_error-or-code-10-error-message-on-android-when-trying-to-login-or-signin-hangs-and-never-resolves-the-promise",level:4},{value:"Google Login does NOT work when using Internal App Sharing.",id:"google-login-does-not-work-when-using-internal-app-sharing",level:4},{value:"Google Login does NOT work when downloading my app from the play store.",id:"google-login-does-not-work-when-downloading-my-app-from-the-play-store",level:4},{value:"My project includes other react-native plugins which have different google play services versions. What to do?",id:"my-project-includes-other-react-native-plugins-which-have-different-google-play-services-versions-what-to-do",level:4},{value:"After upgrading and thoroughly following the guide the build fail with <code>Missing api_key/current_key object</code>. What to do?",id:"after-upgrading-and-thoroughly-following-the-guide-the-build-fail-with-missing-api_keycurrent_key-object-what-to-do",level:4},{value:"After the sign-in completes I get the following error <code>error code 12501</code>. What to do?",id:"after-the-sign-in-completes-i-get-the-following-error-error-code-12501-what-to-do",level:4},{value:"I did everything and I still have problems to compile my project.",id:"i-did-everything-and-i-still-have-problems-to-compile-my-project",level:4},{value:"Troubleshooting for non-firebase users",id:"troubleshooting-for-non-firebase-users",level:3},{value:"Try different SHA1 keys",id:"try-different-sha1-keys",level:4},{value:"Package name !== application id",id:"package-name--application-id",level:4},{value:"iOS",id:"ios",level:2},{value:"On iOS the app crashes when tapping Sign In button",id:"on-ios-the-app-crashes-when-tapping-sign-in-button",level:4}];function c(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"faq--troubleshooting",children:"FAQ / Troubleshooting"}),"\n",(0,i.jsx)(o.h4,{id:"im-getting-an-error-and-im-not-able-to-fix-it",children:"I'm getting an error and I'm not able to fix it"}),"\n",(0,i.jsxs)(o.p,{children:["Configuring google sign in can sometimes be tricky. If you're hitting a wall, you can get in touch with the maintainer (",(0,i.jsx)(o.a,{href:"https://github.com/vonovak",children:"@vonovak"}),") via his ",(0,i.jsx)(o.a,{href:"https://react-native-training.eu/",children:"personal site"}),". Please note that this is a paid service."]}),"\n",(0,i.jsx)(o.h2,{id:"android",children:"Android"}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"#troubleshooting-for-non-firebase-users",children:"See troubleshooting for non-firebase users below"})}),"\n",(0,i.jsx)(o.h4,{id:"im-getting-a-non-recoverable-sign-in-failure-occurred",children:'I\'m getting "A non-recoverable sign in failure occurred"'}),"\n",(0,i.jsxs)(o.p,{children:["See ",(0,i.jsx)(o.a,{href:"https://github.com/react-native-community/google-signin/issues/659#issuecomment-513555464",children:"this comment"}),". Or ",(0,i.jsx)(o.a,{href:"https://stackoverflow.com/questions/53816227/google-signin-sdk-is-failing-by-throwing-error-a-non-recoverable-sign-in-failur",children:"this SO question"}),"."]}),"\n",(0,i.jsxs)(o.h4,{id:"getting-developer_error-or-code-10-error-message-on-android-when-trying-to-login-or-signin-hangs-and-never-resolves-the-promise",children:["Getting ",(0,i.jsx)(o.code,{children:"DEVELOPER_ERROR"})," or ",(0,i.jsx)(o.code,{children:"code: 10"})," error message on Android when trying to login. OR signin() hangs and never resolves the promise."]}),"\n",(0,i.jsx)(o.p,{children:"This is configuration mismatch. Make sure that your SHA certificate fingerprint and package name you entered in Firebase are correct. If you are in development, make sure your development signing fingerprint is added as well."}),"\n",(0,i.jsx)(o.p,{children:"To get the SHA1:"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["From your project root, ",(0,i.jsx)(o.code,{children:"cd android && ./gradlew signingReport"}),"."]}),"\n",(0,i.jsx)(o.li,{children:"Scroll to the top of output, see the fingerprints. Debug fingerprint is used in dev, release fingerprint is used in production."}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"To add the SHA1:"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsx)(o.li,{children:"Sign in to Firebase and open your project."}),"\n",(0,i.jsx)(o.li,{children:"Click the Settings icon and select Project settings."}),"\n",(0,i.jsx)(o.li,{children:"In the Your apps card, select the package name of the app you need a to add SHA1 to."}),"\n",(0,i.jsx)(o.li,{children:'Click "Add fingerprint".'}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Firebase, add Android keystore&#39;s SHA1 to your project",src:n(3640).Z+"",width:"1928",height:"1296"})}),"\n",(0,i.jsxs)(o.p,{children:["Then re-download the ",(0,i.jsx)(o.code,{children:"google-services.json"})," file, put it into your project (usually, the path is ",(0,i.jsx)(o.code,{children:"android/app/google-services.json"}),") and rebuild your project."]}),"\n",(0,i.jsxs)(o.p,{children:["You may need to add your SHA certificate fingerprint to your Firebase config. Find your SHA1 fingerprint by following the instructions at ",(0,i.jsx)(o.a,{href:"https://stackoverflow.com/questions/15727912/sha-1-fingerprint-of-keystore-certificate/33479550#33479550",children:"stackoverflow"}),". Then, go to ",(0,i.jsx)(o.a,{href:"https://console.firebase.google.com/",children:"https://console.firebase.google.com/"}),", select your app, and add the SHA1 value under Project Settings (gear icon in the upper left) -> Your Apps -> SHA certificate fingerprints"]}),"\n",(0,i.jsxs)(o.p,{children:["If you're passing ",(0,i.jsx)(o.code,{children:"webClientId"})," in configuration object to ",(0,i.jsx)(o.code,{children:"GoogleSignin.configure()"})," make sure it's correct and that it is of type web (NOT Android!). You can get your ",(0,i.jsx)(o.code,{children:"webClientId"})," from ",(0,i.jsx)(o.a,{href:"https://console.developers.google.com/apis/credentials",children:"Google Developer Console"}),'. They\'re listed under "OAuth 2.0 client IDs".']}),"\n",(0,i.jsxs)(o.p,{children:["If you're running your app in debug mode and not using ",(0,i.jsx)(o.code,{children:"webClientId"})," or you're sure it's correct the problem might be signature (SHA-1 or SHA-256) mismatch. You need to add the following to ",(0,i.jsx)(o.code,{children:"android/app/build.gradle"}),":"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-diff",children:"signingConfigs {\n+ \xa0  debug {\n+ \xa0 \xa0 \xa0 \xa0storeFile file(MYAPP_RELEASE_STORE_FILE)\n+        storePassword MYAPP_RELEASE_STORE_PASSWORD\n+        keyAlias MYAPP_RELEASE_KEY_ALIAS\n+        keyPassword MYAPP_RELEASE_KEY_PASSWORD\n+    }\n    release {\n        ...\n    }\n }\n"})}),"\n",(0,i.jsx)(o.h4,{id:"google-login-does-not-work-when-using-internal-app-sharing",children:"Google Login does NOT work when using Internal App Sharing."}),"\n",(0,i.jsx)(o.p,{children:"If you get a DEVELOPER_ERROR when using Internal App Sharing, it is because Google resigns your application with its own key. In the Google Play Console go to Development Tools-> Internal App Sharing->App Certificate and there is another SHA-1 fingerprint to add to firebase."}),"\n",(0,i.jsx)(o.p,{children:"This is separate from the release app signing certificate explained below."}),"\n",(0,i.jsxs)(o.p,{children:["Also see ",(0,i.jsx)(o.a,{href:"https://stackoverflow.com/questions/57780620/how-to-get-android-internal-app-sharing-key-sha1-to-enable-google-apis",children:"here"}),"."]}),"\n",(0,i.jsx)(o.h4,{id:"google-login-does-not-work-when-downloading-my-app-from-the-play-store",children:"Google Login does NOT work when downloading my app from the play store."}),"\n",(0,i.jsxs)(o.p,{children:['Check if "Google Play App Signing" is enabled for your app.\nIf it is enabled, you will need to add the "App signing certificate" ',(0,i.jsx)(o.code,{children:"SHA-1"})," to your firebase console."]}),"\n",(0,i.jsxs)(o.p,{children:["You can find it at: App -> Release (in left sidebar) -> Setup -> App integrity. Under the App signing key certificate, copy ",(0,i.jsx)(o.code,{children:"SHA-1 certificate fingerprint"})," into firebase console for the Android app."]}),"\n",(0,i.jsxs)(o.p,{children:['If you are not using firebase, and your app is enabled for "Google Play App Signing":\nGo to "',(0,i.jsx)(o.a,{href:"https://console.developers.google.com/",children:"https://console.developers.google.com/"}),'" -> click "Credential" in the right panel -> Find "Client ID" for type "Android" under "OAuth 2.0 Client IDs" section -> Edit -> replace "SHA-1 certificate fingerprint" with the one from App -> Release (in left sidebar) -> Setup -> App integrity -> App signing key certificate.']}),"\n",(0,i.jsx)(o.h4,{id:"my-project-includes-other-react-native-plugins-which-have-different-google-play-services-versions-what-to-do",children:"My project includes other react-native plugins which have different google play services versions. What to do?"}),"\n",(0,i.jsxs)(o.p,{children:["See ",(0,i.jsx)(o.a,{href:"#choose-dependency-versions-optional",children:'"Choose Dependency versions"'})," above."]}),"\n",(0,i.jsxs)(o.h4,{id:"after-upgrading-and-thoroughly-following-the-guide-the-build-fail-with-missing-api_keycurrent_key-object-what-to-do",children:["After upgrading and thoroughly following the guide the build fail with ",(0,i.jsx)(o.code,{children:"Missing api_key/current_key object"}),". What to do?"]}),"\n",(0,i.jsxs)(o.p,{children:["open ",(0,i.jsx)(o.code,{children:"android/app/google-services.json"})," and replace ",(0,i.jsx)(o.code,{children:'"api_key":[]'})," with ",(0,i.jsx)(o.code,{children:'"api_key":[{ "current_key": "" }]'})]}),"\n",(0,i.jsxs)(o.h4,{id:"after-the-sign-in-completes-i-get-the-following-error-error-code-12501-what-to-do",children:["After the sign-in completes I get the following error ",(0,i.jsx)(o.code,{children:"error code 12501"}),". What to do?"]}),"\n",(0,i.jsxs)(o.p,{children:["This is a permission error. Make sure the ",(0,i.jsx)(o.code,{children:"certificate_hash"})," in ",(0,i.jsx)(o.code,{children:"android/app/google-services.json"})," matches your certificate."]}),"\n",(0,i.jsx)(o.p,{children:"To get your sha1-hash"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"keytool -exportcert -keystore ~/.android/debug.keystore -list -v\n"})}),"\n",(0,i.jsx)(o.p,{children:"Also make sure the application id matches the one you enter on the cloud console."}),"\n",(0,i.jsx)(o.h4,{id:"i-did-everything-and-i-still-have-problems-to-compile-my-project",children:"I did everything and I still have problems to compile my project."}),"\n",(0,i.jsxs)(o.p,{children:["Read this ",(0,i.jsx)(o.a,{href:"https://medium.com/@suchydan/how-to-solve-google-play-services-version-collision-in-gradle-dependencies-ef086ae5c75f",children:"medium article"}),". Basically, if you have other play services libraries installed, you have to exclude some dependencies."]}),"\n",(0,i.jsx)(o.h3,{id:"troubleshooting-for-non-firebase-users",children:"Troubleshooting for non-firebase users"}),"\n",(0,i.jsxs)(o.p,{children:["If you are not using firebase you can ignore all docs related to google services. You don't need a ",(0,i.jsx)(o.code,{children:"google-services.json"})," or any ",(0,i.jsx)(o.code,{children:"build.gradle"})," changes from this docs. Simply follow the instructions from the ",(0,i.jsx)(o.a,{href:"https://developers.google.com/identity/sign-in/android/start-integrating",children:"the official docs"}),". However, be aware of following common issues which can lead to a ",(0,i.jsx)(o.code,{children:"DEVELOPER ERROR"})," or an ",(0,i.jsx)(o.code,{children:"A non-recoverable sign in failure occurred"})," error."]}),"\n",(0,i.jsx)(o.h4,{id:"try-different-sha1-keys",children:"Try different SHA1 keys"}),"\n",(0,i.jsxs)(o.p,{children:["Depending on your config you may need to add multiple SHA1 keys. Go to your android folder and run ",(0,i.jsx)(o.code,{children:"./gradlew signingReport"}),". You should see different SHA1 keys for debug and release. Add them to the ",(0,i.jsx)(o.a,{href:"https://console.developers.google.com/apis/credentials",children:"google developer console"})," under the oauth section. Select Android as client type. You may also need your SHA1 key from the ",(0,i.jsx)(o.a,{href:"https://play.google.com",children:"play console"}),". Find it in the app signature area and add it as well."]}),"\n",(0,i.jsx)(o.h4,{id:"package-name--application-id",children:"Package name !== application id"}),"\n",(0,i.jsxs)(o.p,{children:["When adding a new oauth client, google asks you to add your package name. In some cases your package name is not equal to your application id. Check if your package name in the ",(0,i.jsx)(o.code,{children:"AndroidManifest.xml"})," is the same as your application/bundle id. Find your application id in the play console or ",(0,i.jsx)(o.code,{children:"android/app/build.gradle"}),". The format looks like ",(0,i.jsx)(o.code,{children:"com.yourapp.id"}),"."]}),"\n",(0,i.jsx)(o.h2,{id:"ios",children:"iOS"}),"\n",(0,i.jsx)(o.h4,{id:"on-ios-the-app-crashes-when-tapping-sign-in-button",children:"On iOS the app crashes when tapping Sign In button"}),"\n",(0,i.jsxs)(o.p,{children:["You're most likely missing ",(0,i.jsx)(o.code,{children:"Url Schemes"})," configuration. How to do it: ",(0,i.jsx)(o.img,{alt:"configure URL schemes",src:n(5100).Z+"",width:"2717",height:"1836"})]})]})}function h(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},5100:(e,o,n)=>{n.d(o,{Z:()=>i});const i=n.p+"assets/images/add-url-scheme-ios-a4d1e60b6c16020c80e078dd58dccbb9.png"},3640:(e,o,n)=>{n.d(o,{Z:()=>i});const i=n.p+"assets/images/android-fingerprint-firebase-5381019c8870df86888cdc8bb082d603.png"},1151:(e,o,n)=>{n.d(o,{Z:()=>a,a:()=>s});var i=n(7294);const r={},t=i.createContext(r);function s(e){const o=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:o},e.children)}}}]);