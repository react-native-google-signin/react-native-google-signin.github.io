"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[226],{7213:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var o=s(5893),i=s(1151);const r={sidebar_position:40},c="Original Google sign in",t={id:"original",title:"Original Google sign in",description:"This module exposes the Google Sign-In for Android (legacy) and Google Sign-In for iOS SDKs.",source:"@site/docs/original.md",sourceDirName:".",slug:"/original",permalink:"/docs/original",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/original.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"One-tap Google sign in",permalink:"/docs/one-tap"},next:{title:"React components",permalink:"/docs/category/react-components"}},l={},d=[{value:"<code>configure</code>",id:"configure",level:3},{value:"<code>signIn</code>",id:"signin",level:3},{value:"<code>addScopes</code>",id:"addscopes",level:3},{value:"<code>signInSilently</code>",id:"signinsilently",level:3},{value:"<code>hasPreviousSignIn</code>",id:"hasprevioussignin",level:3},{value:"<code>getCurrentUser</code>",id:"getcurrentuser",level:3},{value:"<code>clearCachedAccessToken</code>",id:"clearcachedaccesstoken",level:3},{value:"<code>getTokens</code>",id:"gettokens",level:3},{value:"<code>signOut</code>",id:"signout",level:3},{value:"<code>revokeAccess</code>",id:"revokeaccess",level:3},{value:"<code>hasPlayServices</code>",id:"hasplayservices",level:3},{value:"Notes",id:"notes",level:2},{value:"Additional scopes",id:"additional-scopes",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"original-google-sign-in",children:"Original Google sign in"}),"\n",(0,o.jsxs)(n.p,{children:["This module exposes the ",(0,o.jsx)(n.a,{href:"https://developers.google.com/identity/sign-in/android/start-integrating",children:"Google Sign-In for Android (legacy)"})," and ",(0,o.jsx)(n.a,{href:"https://developers.google.com/identity/sign-in/ios/start",children:"Google Sign-In for iOS"})," SDKs."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Please note this documentation is for the latest version of the module which is ",(0,o.jsx)(n.a,{href:"install",children:"only available to sponsors"}),". If you're not a sponsor, read the ",(0,o.jsx)(n.a,{href:"https://github.com/react-native-google-signin/google-signin",children:"docs here"}),"."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import {\n  GoogleSignin,\n  GoogleSigninButton,\n  statusCodes,\n} from '@react-native-google-signin/google-signin';\n"})}),"\n",(0,o.jsx)(n.h3,{id:"configure",children:(0,o.jsx)(n.code,{children:"configure"})}),"\n",(0,o.jsxs)(n.p,{children:["signature: (",(0,o.jsx)(n.code,{children:"options"}),": ",(0,o.jsx)(n.a,{href:"api#configureparams",children:(0,o.jsx)(n.code,{children:"ConfigureParams"})}),") => ",(0,o.jsx)(n.code,{children:"void"})]}),"\n",(0,o.jsxs)(n.p,{children:["It is mandatory to call this method before attempting to call ",(0,o.jsx)(n.code,{children:"signIn()"})," and ",(0,o.jsx)(n.code,{children:"signInSilently()"}),". This method is sync meaning you can call ",(0,o.jsx)(n.code,{children:"signIn"})," / ",(0,o.jsx)(n.code,{children:"signInSilently"})," right after it. In typical scenarios, ",(0,o.jsx)(n.code,{children:"configure"})," needs to be called only once, after your app starts. In the native layer, this is a synchronous call. All parameters are optional."]}),"\n",(0,o.jsx)(n.p,{children:"Example usage with default options: you'll get user email and basic profile info."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import { GoogleSignin } from '@react-native-google-signin/google-signin';\n\nGoogleSignin.configure();\n"})}),"\n",(0,o.jsx)(n.p,{children:"An example with all options enumerated:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"GoogleSignin.configure({\n  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile\n  webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)\n  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER\n  hostedDomain: '', // specifies a hosted domain restriction\n  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.\n  accountName: '', // [Android] specifies an account name on the device that should be used\n  iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)\n  googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging\n  openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.\n  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["* ",(0,o.jsx)(n.a,{href:"https://developers.google.com/android/reference/com/google/android/gms/auth/api/signin/GoogleSignInOptions.Builder#public-googlesigninoptions.builder-requestserverauthcode-string-serverclientid,-boolean-forcecodeforrefreshtoken",children:"forceCodeForRefreshToken docs"})]}),"\n",(0,o.jsx)(n.h3,{id:"signin",children:(0,o.jsx)(n.code,{children:"signIn"})}),"\n",(0,o.jsxs)(n.p,{children:["signature: (",(0,o.jsx)(n.code,{children:"options"}),": ",(0,o.jsx)(n.a,{href:"api#signinparams",children:(0,o.jsx)(n.code,{children:"SignInParams"})}),") => ",(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.a,{href:"api#user",children:(0,o.jsx)(n.code,{children:"User"})}),">"]}),"\n",(0,o.jsxs)(n.p,{children:["Prompts a modal to let the user sign in into your application. Resolved promise returns an ",(0,o.jsxs)(n.a,{href:"api#user",children:[(0,o.jsx)(n.code,{children:"userInfo"})," object"]}),". Rejects with error otherwise."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// import statusCodes along with GoogleSignin\nimport {\n  GoogleSignin,\n  statusCodes,\n} from '@react-native-google-signin/google-signin';\n\n// Somewhere in your code\nconst signIn = async () => {\n  try {\n    await GoogleSignin.hasPlayServices();\n    const userInfo = await GoogleSignin.signIn();\n    setState({ userInfo });\n  } catch (error) {\n    if (error.code === statusCodes.SIGN_IN_CANCELLED) {\n      // user cancelled the login flow\n    } else if (error.code === statusCodes.IN_PROGRESS) {\n      // operation (e.g. sign in) is in progress already\n    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {\n      // play services not available or outdated\n    } else {\n      // some other error happened\n    }\n  }\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"addscopes",children:(0,o.jsx)(n.code,{children:"addScopes"})}),"\n",(0,o.jsxs)(n.p,{children:["signature: (",(0,o.jsx)(n.code,{children:"options"}),": ",(0,o.jsx)(n.a,{href:"api#addscopesparams",children:(0,o.jsx)(n.code,{children:"AddScopesParams"})}),") => ",(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.a,{href:"api#user",children:(0,o.jsx)(n.code,{children:"User"})})," | ",(0,o.jsx)(n.code,{children:"null"}),">"]}),"\n",(0,o.jsxs)(n.p,{children:["This method resolves with user object or with ",(0,o.jsx)(n.code,{children:"null"})," if no user is currently logged in."]}),"\n",(0,o.jsxs)(n.p,{children:["You may not need this call: you can supply required scopes to the ",(0,o.jsx)(n.code,{children:"configure"})," call. However, if you want to gain access to more scopes later, use this call."]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const user = await GoogleSignin.addScopes({\n  scopes: ['https://www.googleapis.com/auth/user.gender.read'],\n});\n"})}),"\n",(0,o.jsx)(n.h3,{id:"signinsilently",children:(0,o.jsx)(n.code,{children:"signInSilently"})}),"\n",(0,o.jsxs)(n.p,{children:["signature: () => ",(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.a,{href:"api#user",children:(0,o.jsx)(n.code,{children:"User"})}),">"]}),"\n",(0,o.jsxs)(n.p,{children:["May be called e.g. after of your main component mounts. This method returns a ",(0,o.jsx)(n.code,{children:"Promise"})," that resolves with the current user and rejects with an error otherwise."]}),"\n",(0,o.jsxs)(n.p,{children:["To see how to handle errors read ",(0,o.jsxs)(n.a,{href:"#signin",children:[(0,o.jsx)(n.code,{children:"signIn()"})," method"]})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const getCurrentUserInfo = async () => {\n  try {\n    const userInfo = await GoogleSignin.signInSilently();\n    setState({ userInfo });\n  } catch (error) {\n    if (error.code === statusCodes.SIGN_IN_REQUIRED) {\n      // user has not signed in yet\n    } else {\n      // some other error\n    }\n  }\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"hasprevioussignin",children:(0,o.jsx)(n.code,{children:"hasPreviousSignIn"})}),"\n",(0,o.jsxs)(n.p,{children:["signature: () => ",(0,o.jsx)(n.code,{children:"boolean"})]}),"\n",(0,o.jsx)(n.p,{children:"This synchronous method may be used to find out whether some user previously signed in."}),"\n",(0,o.jsxs)(n.p,{children:["Note that ",(0,o.jsx)(n.code,{children:"hasPreviousSignIn()"})," can return ",(0,o.jsx)(n.code,{children:"true"})," but ",(0,o.jsx)(n.code,{children:"getCurrentUser()"})," can return ",(0,o.jsx)(n.code,{children:"null"}),", in which case you can call ",(0,o.jsx)(n.code,{children:"signInSilently()"})," to recover the user.\nHowever, it may happen that calling ",(0,o.jsx)(n.code,{children:"signInSilently()"})," rejects with an error (e.g. due to a network issue)."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const hasPreviousSignIn = async () => {\n  const hasPreviousSignIn = GoogleSignin.hasPreviousSignIn();\n  setState({ hasPreviousSignIn });\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"getcurrentuser",children:(0,o.jsx)(n.code,{children:"getCurrentUser"})}),"\n",(0,o.jsxs)(n.p,{children:["signature: () => ",(0,o.jsx)(n.a,{href:"api#user",children:(0,o.jsx)(n.code,{children:"User"})})," | ",(0,o.jsx)(n.code,{children:"null"})]}),"\n",(0,o.jsxs)(n.p,{children:["This is a synchronous method that returns ",(0,o.jsx)(n.code,{children:"null"})," or ",(0,o.jsx)(n.code,{children:"userInfo"})," object of the currently signed-in user."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const getCurrentUser = async () => {\n  const currentUser = GoogleSignin.getCurrentUser();\n  setState({ currentUser });\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"clearcachedaccesstoken",children:(0,o.jsx)(n.code,{children:"clearCachedAccessToken"})}),"\n",(0,o.jsxs)(n.p,{children:["signature: (",(0,o.jsx)(n.code,{children:"accessTokenString"}),": ",(0,o.jsx)(n.code,{children:"string"}),") => ",(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.code,{children:"null"}),">"]}),"\n",(0,o.jsxs)(n.p,{children:["This method only has an effect on Android. You may run into a ",(0,o.jsx)(n.code,{children:"401 Unauthorized"})," error when a token is invalid. Call this method to remove the token from local cache and then call ",(0,o.jsx)(n.code,{children:"getTokens()"})," to get fresh tokens. Calling this method on iOS does nothing and always resolves. This is because on iOS, ",(0,o.jsx)(n.code,{children:"getTokens()"})," always returns valid tokens, refreshing them first if they have expired or are about to expire (see ",(0,o.jsx)(n.a,{href:"https://developers.google.com/identity/sign-in/ios/reference/Classes/GIDGoogleUser#-refreshtokensifneededwithcompletion:",children:"docs"}),")."]}),"\n",(0,o.jsx)(n.h3,{id:"gettokens",children:(0,o.jsx)(n.code,{children:"getTokens"})}),"\n",(0,o.jsxs)(n.p,{children:["signature: () => ",(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.a,{href:"api#gettokensresponse",children:(0,o.jsx)(n.code,{children:"GetTokensResponse"})}),">"]}),"\n",(0,o.jsxs)(n.p,{children:["Resolves with an object containing ",(0,o.jsx)(n.code,{children:"{ idToken: string, accessToken: string, }"})," or rejects with an error. Note that using ",(0,o.jsx)(n.code,{children:"accessToken"})," for identity assertion on your backend server is ",(0,o.jsx)(n.a,{href:"https://developers.google.com/identity/sign-in/android/migration-guide",children:"discouraged"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"signout",children:(0,o.jsx)(n.code,{children:"signOut"})}),"\n",(0,o.jsxs)(n.p,{children:["signature: () => ",(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.code,{children:"null"}),">"]}),"\n",(0,o.jsx)(n.p,{children:"Signs out the current user."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const signOut = async () => {\n  try {\n    await GoogleSignin.signOut();\n    setState({ user: null }); // Remember to remove the user from your app's state as well\n  } catch (error) {\n    console.error(error);\n  }\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"revokeaccess",children:(0,o.jsx)(n.code,{children:"revokeAccess"})}),"\n",(0,o.jsxs)(n.p,{children:["signature: () => ",(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.code,{children:"null"}),">"]}),"\n",(0,o.jsxs)(n.p,{children:["Removes your application from the user authorized applications. Read more about it ",(0,o.jsx)(n.a,{href:"https://developers.google.com/identity/sign-in/ios/disconnect#objective-c",children:"here"})," and ",(0,o.jsx)(n.a,{href:"https://developers.google.com/android/reference/com/google/android/gms/auth/api/signin/GoogleSignInClient#revokeAccess()",children:"here"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const revokeAccess = async () => {\n  try {\n    await GoogleSignin.revokeAccess();\n    // Google Account disconnected from your app.\n    // Perform clean-up actions, such as deleting data associated with the disconnected account.\n  } catch (error) {\n    console.error(error);\n  }\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"hasplayservices",children:(0,o.jsx)(n.code,{children:"hasPlayServices"})}),"\n",(0,o.jsxs)(n.p,{children:["signature: (",(0,o.jsx)(n.code,{children:"options"}),": ",(0,o.jsx)(n.a,{href:"api#hasplayservicesparams",children:(0,o.jsx)(n.code,{children:"HasPlayServicesParams"})}),") => ",(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.code,{children:"boolean"}),">"]}),"\n",(0,o.jsx)(n.p,{children:"Checks if device has Google Play Services installed. Always resolves to true on iOS."}),"\n",(0,o.jsxs)(n.p,{children:["Presence of up-to-date Google Play Services is required to show the sign in modal, but it is ",(0,o.jsx)(n.em,{children:"not"})," required to perform calls to ",(0,o.jsx)(n.code,{children:"configure"})," and ",(0,o.jsx)(n.code,{children:"signInSilently"}),". Therefore, we recommend to call ",(0,o.jsx)(n.code,{children:"hasPlayServices"})," directly before ",(0,o.jsx)(n.code,{children:"signIn"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"try {\n  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });\n  // google services are available\n} catch (err) {\n  console.error('play services are not available');\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"hasPlayServices"})," accepts one parameter, an object which contains a single key: ",(0,o.jsx)(n.code,{children:"showPlayServicesUpdateDialog"})," (defaults to ",(0,o.jsx)(n.code,{children:"true"}),"). When ",(0,o.jsx)(n.code,{children:"showPlayServicesUpdateDialog"})," is set to true the library will prompt the user to take action to solve the issue, as seen in the figure below."]}),"\n",(0,o.jsx)(n.p,{children:"You may also use this call at any time to find out if Google Play Services are available and react to the result as necessary."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"#prompt-install",children:(0,o.jsx)(n.img,{alt:"prompt install",src:s(523).Z+"",width:"614",height:"350"})})}),"\n",(0,o.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsx)(n.p,{children:"Calling the methods exposed by this package may involve remote network calls and you should thus take into account that such calls may take a long time to complete (e.g. in case of poor network connection)."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"idToken Note"}),": idToken is not null only if you specify a valid ",(0,o.jsx)(n.code,{children:"webClientId"}),". ",(0,o.jsx)(n.code,{children:"webClientId"})," corresponds to your server clientID on the developers console. It ",(0,o.jsx)(n.strong,{children:"HAS TO BE"})," of type ",(0,o.jsx)(n.strong,{children:"WEB"})]}),"\n",(0,o.jsxs)(n.p,{children:["Read ",(0,o.jsx)(n.a,{href:"https://developers.google.com/identity/sign-in/ios/backend-auth",children:"iOS documentation"})," and ",(0,o.jsx)(n.a,{href:"https://developers.google.com/identity/sign-in/android/backend-auth",children:"Android documentation"})," for more information"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"serverAuthCode Note"}),": serverAuthCode is not null only if you specify a valid ",(0,o.jsx)(n.code,{children:"webClientId"})," and set ",(0,o.jsx)(n.code,{children:"offlineAccess"})," to true. Once you get the auth code, you can send it to your backend server and exchange the code for an access token. Only with this freshly acquired token can you access user data."]}),"\n",(0,o.jsxs)(n.p,{children:["Read ",(0,o.jsx)(n.a,{href:"https://developers.google.com/identity/sign-in/ios/offline-access",children:"iOS documentation"})," and ",(0,o.jsx)(n.a,{href:"https://developers.google.com/identity/sign-in/android/offline-access",children:"Android documentation"})," for more information."]}),"\n",(0,o.jsx)(n.h2,{id:"additional-scopes",children:"Additional scopes"}),"\n",(0,o.jsxs)(n.p,{children:["The default requested scopes are ",(0,o.jsx)(n.code,{children:"email"})," and ",(0,o.jsx)(n.code,{children:"profile"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"If you want to manage other data from your application (for example access user agenda or upload a file to drive) you need to request additional permissions. This can be accomplished by adding the necessary scopes when configuring the GoogleSignin instance."}),"\n",(0,o.jsxs)(n.p,{children:["Please visit ",(0,o.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/googlescopes",children:"https://developers.google.com/identity/protocols/googlescopes"})," or ",(0,o.jsx)(n.a,{href:"https://developers.google.com/oauthplayground/",children:"https://developers.google.com/oauthplayground/"})," for a list of available scopes."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},523:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/prompt-install-b928a962a8d2c0a416628bffd0c95448.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>c});var o=s(7294);const i={},r=o.createContext(i);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);