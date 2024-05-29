"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[898],{779:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=i(5893),t=i(1151);i(2764);const r={sidebar_position:30,sidebar_class_name:"sponsor-heart"},o="One-tap Google sign in",l={id:"one-tap",title:"One-tap Google sign in",description:"This is the easiest and recommended way to implement Google Sign In. It is a sign in flow that (on Android) requires very little user interaction, thus increasing conversions. This api is available on Android, iOS, macOS and Web (with a little extra work described below).",source:"@site/docs/one-tap.mdx",sourceDirName:".",slug:"/one-tap",permalink:"/docs/one-tap",draft:!1,unlisted:!1,editUrl:"https://github.com/react-native-google-signin/docs/edit/main/docs/one-tap.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,sidebar_class_name:"sponsor-heart"},sidebar:"tutorialSidebar",previous:{title:"Obtaining configuration information",permalink:"/docs/setting-up/get-config-file"},next:{title:"Original Google sign in",permalink:"/docs/original"}},a={},d=[{value:"<code>signIn</code>",id:"signin",level:3},{value:"<code>createAccount</code>",id:"createaccount",level:3},{value:"<code>presentExplicitSignIn</code>",id:"presentexplicitsignin",level:3},{value:"<code>signOut</code>",id:"signout",level:3},{value:"<code>requestAuthorization</code>",id:"requestauthorization",level:3},{value:"Web support",id:"web-support",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"one-tap-google-sign-in",children:"One-tap Google sign in"}),"\n",(0,s.jsxs)(n.p,{children:["This is the easiest and recommended way to implement Google Sign In. It is a sign in flow that (on Android) requires very little user interaction, thus increasing conversions. This api is available on Android, iOS, macOS and Web (with a little extra work ",(0,s.jsx)(n.a,{href:"#web-support",children:"described below"}),")."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On Android, it is built on top of the ",(0,s.jsx)(n.a,{href:"https://developers.google.com/identity/android-credential-manager",children:"Credential Manager"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On iOS and macOS, the provided API is a wrapper of the ",(0,s.jsx)(n.a,{href:"https://developers.google.com/identity/sign-in/ios/start-integrating",children:"iOS Google Sign In SDK"}),", same as the ",(0,s.jsx)(n.a,{href:"original",children:"Original Google Sign In"}),". This is so that you can use the same API for both Android and iOS."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On the Web, it covers both the ",(0,s.jsx)(n.a,{href:"https://developers.google.com/identity/gsi/web/guides/offerings#one_tap",children:"One-tap"})," flow and the ",(0,s.jsx)(n.a,{href:"https://developers.google.com/identity/gsi/web/guides/offerings#sign_in_with_google_button",children:"Google Sign-In button"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["The functionality covered in this page is only available to sponsors\ufe0f. ",(0,s.jsx)(n.a,{href:"install#accessing-the-private-package-for-sponsors",children:"It takes just a few clicks to get access"})," \u2764\ufe0f."]}),(0,s.jsx)(n.p,{children:"This module is being actively developed, and new features are added regularly. Since the first release in July 2023, there has been more than 1 release per month on average (last updated in May 2024)."})]}),"\n",(0,s.jsxs)(n.p,{children:["Note that on iOS and Android, you can combine the one-tap methods with those one from the ",(0,s.jsx)(n.a,{href:"original",children:"Original Google Sign In"}),". To do that, use the One-tap sign in to sign in the user. Then call ",(0,s.jsx)(n.code,{children:"signInSilently()"})," and then (for example) ",(0,s.jsx)(n.code,{children:"getCurrentUser()"})," to get the current user's information. However, this shouldn't be necessary because this module should cover all your needs. Please open an issue if that's not the case."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="example of importing the module"',children:'import {\n  GoogleOneTapSignIn,\n  statusCodes,\n  type OneTapUser,\n} from "@react-native-google-signin/google-signin";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"signin",children:(0,s.jsx)(n.code,{children:"signIn"})}),"\n",(0,s.jsxs)(n.p,{children:["signature: (",(0,s.jsx)(n.code,{children:"params"}),": ",(0,s.jsx)(n.a,{href:"api#onetapsigninparams",children:(0,s.jsx)(n.code,{children:"OneTapSignInParams"})}),") => ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.a,{href:"api#onetapuser",children:(0,s.jsx)(n.code,{children:"OneTapUser"})}),">"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Platform"}),(0,s.jsx)(n.th,{children:"Behavior"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Android"}),(0,s.jsxs)(n.td,{children:["Attempts to sign in user automatically. ",(0,s.jsx)(n.a,{href:"https://developers.google.com/identity/android-credential-manager/android/reference/kotlin/com/google/android/libraries/identity/googleid/GetGoogleIdOption.Builder#setAutoSelectEnabled(kotlin.Boolean)",children:"Docs"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"iOS"}),(0,s.jsxs)(n.td,{children:["Attempts to restore a previous user sign-in without interaction. ",(0,s.jsx)(n.a,{href:"https://developers.google.com/identity/sign-in/ios/reference/Classes/GIDSignIn#-restoreprevioussigninwithcompletion:",children:"Docs"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Web"}),(0,s.jsxs)(n.td,{children:["This call rejects - please ",(0,s.jsx)(n.a,{href:"#web-support",children:"read below"})," for web support."]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Returns a ",(0,s.jsx)(n.code,{children:"Promise"})," that resolves with an object containing the user data or rejects in case of error. If there is no user that previously signed in, the promise will reject with ",(0,s.jsx)(n.a,{href:"errors#status-codes-specific-to-one-tap-sign-in",children:(0,s.jsx)(n.code,{children:"NO_SAVED_CREDENTIAL_FOUND"})})," error. In that case, you can call ",(0,s.jsx)(n.a,{href:"one-tap#createaccount",children:(0,s.jsx)(n.code,{children:"createAccount"})})," to start a flow to create a new account. You don't need to call ",(0,s.jsx)(n.code,{children:"signIn"})," as a response to a user action - you can call it when your app starts or when suitable."]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"UI screenshot"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Android"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"iOS"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:["No UI, no user interaction the first time. If user has signed up previously, they will see this: ",(0,s.jsx)("br",{})," ",(0,s.jsx)("img",{src:"/img/onetap/signing-in-android.png",style:{maxWidth:400}})]}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"(no UI, no user interaction)"})]})})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import {\n  GoogleOneTapSignIn,\n  statusCodes,\n  isErrorWithCode,\n  GoogleSignin,\n} from "@react-native-google-signin/google-signin";\n\n// Somewhere in your code\nconst signIn = async () => {\n  try {\n    await GoogleSignin.hasPlayServices();\n    const userInfo = await GoogleOneTapSignIn.signIn({\n      webClientId: config.webClientId,\n      iosClientId: config.iosClientId, // only needed if you\'re not using the Firebase config file\n      nonce: "your_nonce",\n    });\n    setState({ userInfo });\n  } catch (error) {\n    if (isErrorWithCode(error)) {\n      switch (error.code) {\n        case statusCodes.NO_SAVED_CREDENTIAL_FOUND:\n          // Android only. No saved credential found, try calling `createAccount`\n          break;\n        case statusCodes.SIGN_IN_CANCELLED:\n          // sign in was cancelled\n          break;\n        case statusCodes.ONE_TAP_START_FAILED:\n          // Android and Web only, you probably have hit rate limiting.\n          // On Android, you can still call `presentExplicitSignIn` in this case.\n          // On the web, user needs to click the `WebGoogleSigninButton` to sign in.\n          break;\n        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:\n          // Android-only: play services not available or outdated\n          break;\n        default:\n        // something else happened\n      }\n    } else {\n      // an error that\'s not related to google sign in occurred\n    }\n  }\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"createaccount",children:(0,s.jsx)(n.code,{children:"createAccount"})}),"\n",(0,s.jsxs)(n.p,{children:["signature: (",(0,s.jsx)(n.code,{children:"params"}),": ",(0,s.jsx)(n.a,{href:"api#onetapsigninparams",children:(0,s.jsx)(n.code,{children:"OneTapSignInParams"})}),") => ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.a,{href:"api#onetapuser",children:(0,s.jsx)(n.code,{children:"OneTapUser"})}),">"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Platform"}),(0,s.jsx)(n.th,{children:"Behavior"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Android"}),(0,s.jsx)(n.td,{children:"Starts a flow to sign in with your app for the first time (to create a user account). It offers a list of user accounts to choose from (multiple Google accounts can be logged in on the device)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"iOS"}),(0,s.jsxs)(n.td,{children:["Starts an interactive sign-in flow on iOS. ",(0,s.jsx)(n.a,{href:"https://developers.google.com/identity/sign-in/ios/reference/Classes/GIDSignIn#-signinwithpresentingviewcontroller:hint:completion:",children:"Docs"}),". It offers a list of user accounts to choose from (multiple Google accounts can be logged in on the device)."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Web"}),(0,s.jsxs)(n.td,{children:["This call rejects - please ",(0,s.jsx)(n.a,{href:"#web-support",children:"read below"})," for web support."]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["You don't need to call ",(0,s.jsx)(n.code,{children:"createAccount"})," as a response to a user action - you can call it some time after your app starts (the way the dialog is presented on iOS might be inconvenient to users) or when suitable."]}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"createAccount"})," if ",(0,s.jsx)(n.code,{children:"signIn"})," rejected with ",(0,s.jsx)(n.a,{href:"errors#status-codes-specific-to-one-tap-sign-in",children:(0,s.jsx)(n.code,{children:"NO_SAVED_CREDENTIAL_FOUND"})})," error, as shown in the code snippet above."]}),"\n",(0,s.jsxs)(n.p,{children:["Returns a ",(0,s.jsx)(n.code,{children:"Promise"})," that resolves with an object containing the user data or rejects in case of error."]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"UI screenshot"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Android"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"iOS"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:"/img/onetap/signing-up-android.png",style:{maxWidth:400}})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:"/img/onetap/signing-up-ios.png",style:{maxWidth:400}})})]})})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'await GoogleOneTapSignIn.createAccount({\n  webClientId: config.webClientId,\n  nonce: "your_nonce",\n});\n'})}),"\n",(0,s.jsx)(n.h3,{id:"presentexplicitsignin",children:(0,s.jsx)(n.code,{children:"presentExplicitSignIn"})}),"\n",(0,s.jsx)(n.p,{children:"\u2728since v14.2.0"}),"\n",(0,s.jsxs)(n.p,{children:["signature: (",(0,s.jsx)(n.code,{children:"params"}),": ",(0,s.jsx)(n.a,{href:"api#onetapsigninparams",children:(0,s.jsx)(n.code,{children:"OneTapSignInParams"})}),") => ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.a,{href:"api#onetapuser",children:(0,s.jsx)(n.code,{children:"OneTapUser"})}),">"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Platform"}),(0,s.jsx)(n.th,{children:"Behavior"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Android"}),(0,s.jsxs)(n.td,{children:["Presents the sign in dialog explicitly. This is useful when the user has hit rate limiting (",(0,s.jsx)(n.a,{href:"errors#status-codes-specific-to-one-tap-sign-in",children:(0,s.jsx)(n.code,{children:"ONE_TAP_START_FAILED"})}),") and the one-tap flow is thus not available, or if both ",(0,s.jsx)(n.code,{children:"signIn"})," and ",(0,s.jsx)(n.code,{children:"createAccount"})," reject with ",(0,s.jsx)(n.code,{children:"NO_SAVED_CREDENTIAL_FOUND"})," error - which happens on Android (in the unlikely case) when no Google account is present on the device. This will prompt the user to add a Google account."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"iOS"}),(0,s.jsxs)(n.td,{children:["Starts an interactive sign-in flow on iOS, same as ",(0,s.jsx)(n.code,{children:"createAccount"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Web"}),(0,s.jsxs)(n.td,{children:["This call rejects - please ",(0,s.jsx)(n.a,{href:"#web-support",children:"read below"})," for web support."]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:'Call this method only as a reaction to when user taps a "sign in with Google" button.'}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"UI screenshot"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Android"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"iOS"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:"/img/onetap/explicit-android.png",style:{maxWidth:400}})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:"/img/onetap/signing-up-ios.png",style:{maxWidth:400}})})]})})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'await GoogleOneTapSignIn.presentExplicitSignIn({\n  webClientId: config.webClientId,\n  nonce: "your_nonce",\n});\n'})}),"\n",(0,s.jsx)(n.h3,{id:"signout",children:(0,s.jsx)(n.code,{children:"signOut"})}),"\n",(0,s.jsxs)(n.p,{children:["signature: (",(0,s.jsx)(n.code,{children:"emailOrUniqueId"}),": ",(0,s.jsx)(n.code,{children:"string"}),") => ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"null"}),">"]}),"\n",(0,s.jsxs)(n.p,{children:["Signs out the current user. On the web, you need to provide the ",(0,s.jsx)(n.code,{children:"id"})," or email of the user. On Android and iOS, this parameter does not have any effect."]}),"\n",(0,s.jsxs)(n.p,{children:["Returns a Promise that resolves with ",(0,s.jsx)(n.code,{children:"null"})," or rejects in case of error."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"await GoogleOneTapSignIn.signOut(user.id);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"requestauthorization",children:(0,s.jsx)(n.code,{children:"requestAuthorization"})}),"\n",(0,s.jsx)(n.p,{children:"\u2728since v15.0.0"}),"\n",(0,s.jsxs)(n.p,{children:["signature: (",(0,s.jsx)(n.code,{children:"params"}),": ",(0,s.jsx)(n.a,{href:"api#requestauthorizationparams",children:(0,s.jsx)(n.code,{children:"RequestAuthorizationParams"})}),") => ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.a,{href:"api#authorizationresponse",children:(0,s.jsx)(n.code,{children:"AuthorizationResponse"})}),">"]}),"\n",(0,s.jsx)(n.p,{children:"The underlying Android SDK separates authentication and authorization. This method is used to request extra authorization from the user."}),"\n",(0,s.jsxs)(n.p,{children:["Use this on Android to obtain server-side access (offline access) to the user's data or for requesting an access token that has access to additional scopes (The default requested scopes are ",(0,s.jsx)(n.code,{children:"email"})," and ",(0,s.jsx)(n.code,{children:"profile"}),".)."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Platform"}),(0,s.jsx)(n.th,{children:"Behavior"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Android"}),(0,s.jsxs)(n.td,{children:["Presents a modal that asks user for additional access to their Google account. Uses ",(0,s.jsx)(n.a,{href:"https://developers.google.com/android/reference/com/google/android/gms/auth/api/identity/AuthorizationRequest.Builder",children:"AuthorizationRequest.Builder"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"iOS"}),(0,s.jsxs)(n.td,{children:["Calls ",(0,s.jsx)(n.a,{href:"/docs/original#addscopes",children:(0,s.jsx)(n.code,{children:"addScopes"})}),". If you need server-side access, specify ",(0,s.jsx)(n.code,{children:"offlineAccess: true"})," in ",(0,s.jsx)(n.code,{children:"createAccount"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Web"}),(0,s.jsxs)(n.td,{children:["Not implemented yet - please ",(0,s.jsx)(n.a,{href:"#web-support",children:"read below"})," for web support."]})]})]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"There are minor differences between the Android and iOS implementations stemming from the underlying Google SDKs. For example, iOS will return all granted scopes, while Android may only return the requested scopes."}),"\n"]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"UI screenshot"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Android"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"iOS"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:"/img/onetap/authorize-android.jpg",style:{maxWidth:400}})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:"/img/onetap/add-scopes-ios.png",style:{maxWidth:400}})})]})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"web-support",children:"Web support"}),"\n",(0,s.jsx)(n.p,{children:"Providing a unified API for the web is a bit more complex than it may seem. This is because the web experience is quite different from the mobile one, and so are the underlying apis."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"WebGoogleOneTapSignIn.signIn"})," function exists to handle the web-specific logic. Its interface is as close as possible to the native one, allowing to reuse the logic for both success and error handling across all platforms."]}),"\n",(0,s.jsx)(n.p,{children:"To implement web support, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Call ",(0,s.jsx)(n.code,{children:"WebGoogleOneTapSignIn.signIn"})," upon page load. This will attempt to present the One-tap UI. It also sets up a listener for authentication events and calls the ",(0,s.jsx)(n.code,{children:"onSuccess"})," callback when the user signs in (either with One-tap flow or the Sign-In button)."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["You should display the One Tap UI on page load or other window events, instead of it being displayed by a user action (e.g. a button press). Otherwise, you may get a broken UX. Users may not see any UI after a user action, due to ",(0,s.jsx)(n.a,{href:"https://developers.google.com/identity/gsi/web/guides/features#globally_opt_out",children:"globally opt-out"}),", ",(0,s.jsx)(n.a,{href:"https://developers.google.com/identity/gsi/web/guides/features#exponential_cooldown",children:"cool-down"}),", or no Google session."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'useEffect(() => {\n  if (Platform.OS === "web") {\n    WebGoogleOneTapSignIn.signIn(\n      {\n        webClientId: config.webClientId,\n      },\n      {\n        onError: (error: NativeModuleError) => {\n          // this might be cancellation, one-tap rate limiting, or other errors\n        },\n        onSuccess: (userInfo: OneTapUser) => {\n          // user has signed in, do something with the user info\n        },\n        momentListener: (moment) => {\n          // optional\n        },\n      },\n    );\n  }\n}, []);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Optionally, you can provide a ",(0,s.jsx)(n.code,{children:"momentListener"})," callback function. The callback is called when important events take place. ",(0,s.jsx)(n.a,{href:"https://developers.google.com/identity/gsi/web/reference/js-reference#PromptMomentNotification",children:"See reference."})]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Render the ",(0,s.jsx)(n.a,{href:"/docs/buttons/web",children:(0,s.jsx)(n.code,{children:"WebGoogleSigninButton"})})," component"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["One-tap UI may not always be available: This happens if user has ",(0,s.jsx)(n.a,{href:"https://developers.google.com/identity/gsi/web/guides/features#globally_opt_out",children:"opted out"})," or when they cancel the dialog several times in a row, entering the ",(0,s.jsx)(n.a,{href:"https://developers.google.com/identity/gsi/web/guides/features#exponential_cooldown",children:"cooldown period"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"WebGoogleSigninButton"})," serves as a fallback. Tapping it will open the regular Google Sign-In dialog. When user signs in, the ",(0,s.jsx)(n.code,{children:"onSuccess"})," callback will be called."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The reason the ",(0,s.jsx)(n.code,{children:"WebGoogleOneTapSignIn.signIn"}),' api is callback-based rather than promise-based is that it\'s possible to get into an "error" state (when one-tap is not available) and later get a successful sign in from the button flow. Because of how the Google Sign In for Web SDK is done, modeling this with a promise-based api is not possible. In a future release, there will be a single function that supports both the Promise and callback-based usage.']})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);