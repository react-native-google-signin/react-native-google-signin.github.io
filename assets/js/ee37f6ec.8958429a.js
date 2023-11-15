"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[595],{868:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=o(5893),t=o(1151);const s={sidebar_position:30,sidebar_class_name:"onetap"},r="One-tap Google sign in",a={id:"one-tap",title:"One-tap Google sign in",description:"This is the easiest and recommended way to implement Google Sign In. It is a one-tap sign in flow that requires very little user interaction, thus increasing conversions. It is available on Android, iOS and Web.",source:"@site/docs/one-tap.md",sourceDirName:".",slug:"/one-tap",permalink:"/google-signin/docs/one-tap",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/one-tap.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,sidebar_class_name:"onetap"},sidebar:"tutorialSidebar",previous:{title:"Obtaining configuration information",permalink:"/google-signin/docs/setting-up/get-config-file"},next:{title:"Original Google sign in",permalink:"/google-signin/docs/original"}},c={},d=[{value:"<code>signIn</code>",id:"signin",level:3},{value:"<code>createAccount</code>",id:"createaccount",level:3},{value:"<code>signOut</code>",id:"signout",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"one-tap-google-sign-in",children:"One-tap Google sign in"}),"\n",(0,i.jsx)(n.p,{children:"This is the easiest and recommended way to implement Google Sign In. It is a one-tap sign in flow that requires very little user interaction, thus increasing conversions. It is available on Android, iOS and Web."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Please note this module is ",(0,i.jsx)(n.a,{href:"install",children:"only available to sponsors"})]})}),"\n",(0,i.jsxs)(n.p,{children:["For detailed documentation, you can read the original docs for ",(0,i.jsx)(n.a,{href:"https://developers.google.com/identity/one-tap/android/overview",children:"Android"})," and for ",(0,i.jsx)(n.a,{href:"https://developers.google.com/identity/gsi/web/guides/offerings#one_tap",children:"Web"}),". On iOS, the provided API is a wrapper of the ",(0,i.jsx)(n.a,{href:"https://developers.google.com/identity/sign-in/ios/start-integrating",children:"iOS Google Sign In SDK"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that on iOS and Android, you can combine the one-tap methods with those one from the ",(0,i.jsx)(n.a,{href:"original",children:"Original Google Sign In"}),", i.e. you can use the One Tap sign in to sign in the user. Then call ",(0,i.jsx)(n.code,{children:"signInSilently()"})," and then (for example) ",(0,i.jsx)(n.code,{children:"getCurrentUser()"})," to get the user data."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import {\n  GoogleOneTapSignIn,\n  statusCodes,\n  type OneTapUser,\n} from '@react-native-google-signin/google-signin';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"signin",children:(0,i.jsx)(n.code,{children:"signIn"})}),"\n",(0,i.jsxs)(n.p,{children:["signature: (",(0,i.jsx)(n.code,{children:"params"}),": ",(0,i.jsx)(n.a,{href:"api#onetapsigninparams",children:(0,i.jsx)(n.code,{children:"OneTapSignInParams"})}),", ",(0,i.jsx)(n.code,{children:"momentListener?"}),": (",(0,i.jsx)(n.code,{children:"promptMomentNotification"}),": ",(0,i.jsx)(n.code,{children:"PromptMomentNotification"}),") => ",(0,i.jsx)(n.code,{children:"void"}),") => ",(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.a,{href:"api#onetapuser",children:(0,i.jsx)(n.code,{children:"OneTapUser"})}),">"]}),"\n",(0,i.jsxs)(n.p,{children:["Attempts to sign in user automatically as explained ",(0,i.jsx)(n.a,{href:"https://developers.google.com/android/reference/com/google/android/gms/auth/api/identity/BeginSignInRequest.Builder#setAutoSelectEnabled(boolean)",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Returns a ",(0,i.jsx)(n.code,{children:"Promise"})," that resolves with an object containing the user data or rejects in case of error."]}),"\n",(0,i.jsxs)(n.p,{children:["Optionally, you can provide a ",(0,i.jsx)(n.code,{children:"momentListener"})," callback function. The callback that is called only on Web when important events take place. ",(0,i.jsx)(n.a,{href:"https://developers.google.com/identity/gsi/web/reference/js-reference#PromptMomentNotification",children:"See reference."})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import {\n  GoogleOneTapSignIn,\n  statusCodes,\n} from '@react-native-google-signin/google-signin';\n\n// Somewhere in your code\nsignIn = async () => {\n  try {\n    const userInfo = await GoogleOneTapSignIn.signIn({\n      webClientId: config.webClientId,\n      nonce: 'your_nonce',\n    });\n    setState({ userInfo });\n  } catch (error) {\n    if (error.code === statusCodes.SIGN_IN_CANCELLED) {\n      // user cancelled the login flow\n    } else if (error.code === statusCodes.IN_PROGRESS) {\n      // operation (e.g. sign in) is in progress already\n    } else if (error.code === statusCodes.ONE_TAP_START_FAILED) {\n      // starting the one tap dialog failed\n    } else if (error.code === statusCodes.NO_SAVED_CREDENTIAL_FOUND) {\n      // No saved credentials found. Launch the One Tap sign-up flow (use GoogleOneTapSignIn.signUp)\n      // or do nothing and continue presenting the signed-out UI.\n    } else {\n      // some other error happened\n    }\n  }\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"createaccount",children:(0,i.jsx)(n.code,{children:"createAccount"})}),"\n",(0,i.jsxs)(n.p,{children:["signature: (",(0,i.jsx)(n.code,{children:"params"}),": ",(0,i.jsx)(n.a,{href:"api#onetapsigninparams",children:(0,i.jsx)(n.code,{children:"OneTapSignInParams"})}),", ",(0,i.jsx)(n.code,{children:"momentListener?"}),": (",(0,i.jsx)(n.code,{children:"promptMomentNotification"}),": ",(0,i.jsx)(n.code,{children:"PromptMomentNotification"}),") => ",(0,i.jsx)(n.code,{children:"void"}),") => ",(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.a,{href:"api#onetapuser",children:(0,i.jsx)(n.code,{children:"OneTapUser"})}),">"]}),"\n",(0,i.jsxs)(n.p,{children:["Starts a flow to create a user account. It will offer the user a list of the accounts to choose from (When multiple Google accounts are logged in on the device). Also, it can be used if ",(0,i.jsx)(n.code,{children:"signIn"})," rejects with ",(0,i.jsx)(n.code,{children:"NO_SAVED_CREDENTIAL_FOUND"})," error, as shown in the code snippet above."]}),"\n",(0,i.jsxs)(n.p,{children:["Returns a ",(0,i.jsx)(n.code,{children:"Promise"})," that resolves with an object containing the user data or rejects in case of error."]}),"\n",(0,i.jsxs)(n.p,{children:["Optionally, you can provide a ",(0,i.jsx)(n.code,{children:"momentListener"})," callback function. The callback that is called only on Web when important events take place. ",(0,i.jsx)(n.a,{href:"https://developers.google.com/identity/gsi/web/reference/js-reference#PromptMomentNotification",children:"See reference."})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await GoogleOneTapSignIn.createAccount({\n  webClientId: config.webClientId,\n  nonce: 'your_nonce',\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"signout",children:(0,i.jsx)(n.code,{children:"signOut"})}),"\n",(0,i.jsxs)(n.p,{children:["signature: (",(0,i.jsx)(n.code,{children:"emailOrUniqueId"}),": ",(0,i.jsx)(n.code,{children:"string"}),") => ",(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"null"}),">"]}),"\n",(0,i.jsxs)(n.p,{children:["Signs out the current user. On the web, you need to provide the ",(0,i.jsx)(n.code,{children:"id"})," or email of the user. On Android and iOS, this parameter does not have any effect."]}),"\n",(0,i.jsxs)(n.p,{children:["Returns a Promise that resolves with ",(0,i.jsx)(n.code,{children:"null"})," or rejects in case of error."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await GoogleOneTapSignIn.signOut(user.id);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>r});var i=o(7294);const t={},s=i.createContext(t);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);