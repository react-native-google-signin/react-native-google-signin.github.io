# Original Google sign in

tip

To migrate to Universal sign in, follow [this guide](/docs/migrating.md#migrating-from-original-to-universal-sign-in).

This module exposes

* [Legacy Google Sign-In for Android](https://web.archive.org/web/20240308064911/https://developers.google.com/identity/sign-in/android/start-integrating). The underlying SDK is deprecated but remains functional.
* [Google Sign-In SDK](https://developers.google.com/identity/sign-in/ios/start) for iOS and macOS (macOS support is only available to [in the paid version](/docs/install.md#premium)).

imports example

```ts
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

```

### `configure`[​](#configure "Direct link to configure")

signature: (`options`: [`ConfigureParams`](/docs/api.md#configureparams)) => `void`

It is mandatory to call this method before attempting to call `signIn()` and `signInSilently()`. This method is synchronous, meaning you can call `signIn` / `signInSilently` right after it. Typically, you would call `configure` only once, soon after your app starts. All parameters are optional.

Example usage with default options: you'll get user email and basic profile info.

```js
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure();

```

An *example* with all options enumerated:

```ts
GoogleSignin.configure({
  webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
  scopes: [
    /* what APIs you want to access on behalf of the user, default is email and profile
    this is just an example, most likely you don't need this option at all! */
    'https://www.googleapis.com/auth/drive.readonly',
  ],
  offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: '', // specifies a hosted domain restriction
  forceCodeForRefreshToken: false, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. "GoogleService-Info-Staging"
  openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

```

\* [forceCodeForRefreshToken docs](https://developers.google.com/android/reference/com/google/android/gms/auth/api/signin/GoogleSignInOptions.Builder#public-googlesigninoptions.builder-requestserverauthcode-string-serverclientid,-boolean-forcecodeforrefreshtoken)

***

### `signIn`[​](#signin "Direct link to signin")

signature: (`options`: [`SignInParams`](/docs/api.md#signinparams)) => `Promise`<[`SignInResponse`](/docs/api.md#signinresponse)>

Prompts a modal to let the user sign in into your application. Resolved promise returns an [`SignInResponse` object](/docs/api.md#signinresponse). Rejects with an error otherwise.

signIn example

```ts
// import statusCodes along with GoogleSignin
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

// Somewhere in your code
const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    if (isSuccessResponse(response)) {
      setState({ userInfo: response.data });
    } else {
      // sign in was cancelled by user
    }
  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // Android only, play services not available or outdated
          break;
        default:
        // some other error happened
      }
    } else {
      // an error that's not related to google sign in occurred
    }
  }
};

```

***

<!-- -->

### Utility Functions[​](#utility-functions "Direct link to Utility Functions")

tip

There are 4 helper functions available:

* [`isErrorWithCode`](/docs/errors.md#iserrorwithcodevalue) for processing errors
* [`isSuccessResponse`](/docs/api.md#issuccessresponse) for checking if a response represents a successful operation. Same as checking `response.type === 'success'`.
* [`isNoSavedCredentialFoundResponse`](/docs/api.md#isnosavedcredentialfoundresponse) for checking if a response represents no saved credentials case. Same as checking `response.type === 'noSavedCredentialFound'`.
* [`isCancelledResponse`](/docs/api.md#iscancelledresponse) for checking if a response represents user cancellation case. Same as checking `response.type === 'cancelled'`.

***

### `addScopes`[​](#addscopes "Direct link to addscopes")

signature: (`options`: [`AddScopesParams`](/docs/api.md#addscopesparams)) => `Promise`<[`SignInResponse`](/docs/api.md#signinresponse) | `null`>

This method resolves with `SignInResponse` object or with `null` if no user is currently logged in.

You may not need this call: you can supply required scopes to the `configure` call. However, if you want to gain access to more scopes later, use this call.

Example:

```js
const response = await GoogleSignin.addScopes({
  scopes: ['https://www.googleapis.com/auth/user.gender.read'],
});

```

***

### `signInSilently`[​](#signinsilently "Direct link to signinsilently")

signature: () => `Promise`<[`SignInSilentlyResponse`](/docs/api.md#signinsilentlyresponse)>

May be called e.g. after of your main component mounts. This method returns a `Promise` that resolves with the `SignInSilentlyResponse` object and rejects with an error otherwise.

To see how to handle errors read [`signIn()` method](#signin)

```ts
const getCurrentUser = async () => {
  try {
    const response = await GoogleSignin.signInSilently();
    if (isSuccessResponse(response)) {
      setState({ userInfo: response.data });
    } else if (isNoSavedCredentialFoundResponse(response)) {
      // user has not signed in yet, or they have revoked access
    }
  } catch (error) {
    // handle errror
  }
};

```

***

### `hasPreviousSignIn`[​](#hasprevioussignin "Direct link to hasprevioussignin")

signature: () => `boolean`

This synchronous method may be used to find out whether some user previously signed in.

Note that `hasPreviousSignIn()` can return `true` but `getCurrentUser()` can return `null`, in which case you can call `signInSilently()` to recover the user. However, it may happen that calling `signInSilently()` rejects with an error (e.g. due to a network issue).

```js
const hasPreviousSignIn = async () => {
  const hasPreviousSignIn = GoogleSignin.hasPreviousSignIn();
  setState({ hasPreviousSignIn });
};

```

***

### `getCurrentUser`[​](#getcurrentuser "Direct link to getcurrentuser")

signature: () => [`User`](/docs/api.md#user) | `null`

This is a synchronous method that returns `null` or `User` object of the currently signed-in user.

```js
const getCurrentUser = async () => {
  const currentUser = GoogleSignin.getCurrentUser();
  setState({ currentUser });
};

```

***

### `clearCachedAccessToken`[​](#clearcachedaccesstoken "Direct link to clearcachedaccesstoken")

signature: (`accessTokenString`: `string`) => `Promise`<`null`>

This method only has an effect on Android. You may run into a `401 Unauthorized` error when a token is invalid. Call this method to remove the token from local cache and then call `getTokens()` to get fresh tokens. Calling this method on iOS does nothing and always resolves. This is because on iOS, `getTokens()` always returns valid tokens, refreshing them first if they have expired or are about to expire (see [docs](https://developers.google.com/identity/sign-in/ios/reference/Classes/GIDGoogleUser#-refreshtokensifneededwithcompletion:)).

***

### `getTokens`[​](#gettokens "Direct link to gettokens")

signature: () => `Promise`<[`GetTokensResponse`](/docs/api.md#gettokensresponse)>

Resolves with an object containing `{ idToken: string, accessToken: string, }` or rejects with an error. Note that using `accessToken` for identity assertion on your backend server is [discouraged](https://developers.google.com/identity/sign-in/android/migration-guide).

***

### `signOut`[​](#signout "Direct link to signout")

signature: () => `Promise`<`null`>

Signs out the current user.

```js
const signOut = async () => {
  try {
    await GoogleSignin.signOut();
    setState({ user: null }); // Remember to remove the user from your app's state as well
  } catch (error) {
    console.error(error);
  }
};

```

***

### `revokeAccess`[​](#revokeaccess "Direct link to revokeaccess")

signature: () => `Promise`<`null`>

Removes your application from the user authorized applications. Read more about it [here](https://developers.google.com/identity/sign-in/ios/disconnect#objective-c) and [here](https://developers.google.com/android/reference/com/google/android/gms/auth/api/signin/GoogleSignInClient#revokeAccess\(\)).

```js
const revokeAccess = async () => {
  try {
    await GoogleSignin.revokeAccess();
    // Google Account disconnected from your app.
    // Perform clean-up actions, such as deleting data associated with the disconnected account.
  } catch (error) {
    console.error(error);
  }
};

```

***

### `hasPlayServices`[​](#hasplayservices "Direct link to hasplayservices")

signature: (`options`: [`HasPlayServicesParams`](/docs/api.md#hasplayservicesparams)) => `Promise`<`boolean`>

Checks if device has Google Play Services installed. Always resolves to true on iOS.

Presence of up-to-date Google Play Services is required to show the sign in modal, but it is *not* required to perform calls to `configure` and `signInSilently`. Therefore, we recommend to call `hasPlayServices` directly before `signIn`.

```js
try {
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // google services are available
} catch (err) {
  console.error('play services are not available');
}

```

`hasPlayServices` accepts one parameter, an object which contains a single key: `showPlayServicesUpdateDialog` (defaults to `true`). When `showPlayServicesUpdateDialog` is set to true the library prompts the user to take action to solve the issue, as seen in the figure below.

You may also use this call at any time to find out if Google Play Services are available and react to the result as necessary.

![prompt install](/assets/images/prompt-install-b928a962a8d2c0a416628bffd0c95448.png)
