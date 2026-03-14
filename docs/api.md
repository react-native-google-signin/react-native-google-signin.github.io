# API reference

## Universal sign in module[​](#universal-sign-in-module "Direct link to Universal sign in module")

### AuthorizationResponse[​](#authorizationresponse "Direct link to AuthorizationResponse")

> **AuthorizationResponse** = [`CancelledResponse`](#cancelledresponse) | [`AuthorizationSuccessResponse`](#authorizationsuccessresponse)

The response object of `requestAuthorization`. Either the user cancelled the flow or they successfully gave authorization.

***

### AuthorizationSuccessResponse[​](#authorizationsuccessresponse "Direct link to AuthorizationSuccessResponse")

> **AuthorizationSuccessResponse** = { `data`: { `accessToken`: `string`; `grantedScopes`: `string`\[]; `serverAuthCode`: `string` | `null`; }; `type`: `"success"`; }

An object that contains an access token that has access to the `grantedScopes`. It contains also the `serverAuthCode` if `offlineAccess` was requested.

On iOS, you can also obtain `serverAuthCode` by calling `createAccount()`.

#### Properties[​](#properties "Direct link to Properties")

| Property              | Type                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------ |
| []()`data`            | { `accessToken`: `string`; `grantedScopes`: `string`\[]; `serverAuthCode`: `string` \| `null`; } |
| `data.accessToken`    | `string`                                                                                         |
| `data.grantedScopes`  | `string`\[]                                                                                      |
| `data.serverAuthCode` | `string` \| `null`                                                                               |
| []()`type`            | `"success"`                                                                                      |

***

### EnableAppCheckParams[​](#enableappcheckparams "Direct link to EnableAppCheckParams")

> **EnableAppCheckParams** = { `debugProviderAPIKey?`: `string`; }

Parameters for enabling [App Check](/docs/security.md#appcheck). Provide `debugProviderAPIKey` to enable App Check with [debug provider](https://developers.google.com/identity/sign-in/ios/appcheck/debug-provider).

#### Properties[​](#properties-1 "Direct link to Properties")

| Property                   | Type     |
| -------------------------- | -------- |
| []()`debugProviderAPIKey?` | `string` |

***

### OneTapConfigureParams[​](#onetapconfigureparams "Direct link to OneTapConfigureParams")

> **OneTapConfigureParams** = [`ClientIdOrPlistPath`](#clientidorplistpath) & { `hostedDomain?`: `string`; `logLevel?`: `"debug"` | `"info"` | `"warn"`; `openIdRealm?`: `string`; `profileImageSize?`: `number`; `scopes?`: `string`\[]; `webClientId`: `WebClientId`; }

`webClientId` is the most important parameter in the configuration. It is required.

#### Type Declaration[​](#type-declaration "Direct link to Type Declaration")

| Name                | Type                              | Description                                                                                                                                                                  |
| ------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hostedDomain?`     | `string`                          | iOS only. Specifies a hosted domain restriction. By setting this, authorization will be restricted to accounts of the user in the specified domain.                          |
| `logLevel?`         | `"debug"` \| `"info"` \| `"warn"` | Web only. Controls debug logging in browser console. This is implemented in Google's web SDK and is not part of their public API so it may change or be removed at any time. |
| `openIdRealm?`      | `string`                          | iOS only. The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.                               |
| `profileImageSize?` | `number`                          | iOS only. The desired height and width of the profile image. **Default** `120px`                                                                                             |
| `scopes?`           | `string`\[]                       | iOS only. The Google API scopes to request access to. Use `requestAuthorization` to request additional scopes on Android. **Default** `["email", "profile"]`                 |
| `webClientId`       | `WebClientId`                     | The web client ID obtained from Google Cloud console. In the Universal module only, pass `autoDetect` to automatically determine the value from Firebase config file.        |

***

### OneTapCreateAccountParams[​](#onetapcreateaccountparams "Direct link to OneTapCreateAccountParams")

> **OneTapCreateAccountParams** = [`OneTapSignInParams`](#onetapsigninparams) & { `accountName?`: `string`; `requestVerifiedPhoneNumber?`: `boolean`; }

#### Type Declaration[​](#type-declaration-1 "Direct link to Type Declaration")

| Name                          | Type      | Description                                                                                                                                                                 |
| ----------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountName?`                | `string`  | iOS only. An account name present on the device that should be used. **Example** `your_email@gmail.com`                                                                     |
| `requestVerifiedPhoneNumber?` | `boolean` | Android only. Whether to request for a verified phone number during sign-ups. Requesting it doesn't guarantee that it will be provided in the response. **Default** `false` |

***

### OneTapExplicitSignInParams[​](#onetapexplicitsigninparams "Direct link to OneTapExplicitSignInParams")

> **OneTapExplicitSignInParams** = [`OneTapSignInParams`](#onetapsigninparams) & { `accountName?`: `string`; }

#### Type Declaration[​](#type-declaration-2 "Direct link to Type Declaration")

| Name           | Type     | Description                                                                                             |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------- |
| `accountName?` | `string` | iOS only. An account name present on the device that should be used. **Example** `your_email@gmail.com` |

***

### OneTapExplicitSignInResponse[​](#onetapexplicitsigninresponse "Direct link to OneTapExplicitSignInResponse")

> **OneTapExplicitSignInResponse** = [`OneTapSuccessResponse`](#onetapsuccessresponse) | [`CancelledResponse`](#cancelledresponse)

***

### OneTapResponse[​](#onetapresponse "Direct link to OneTapResponse")

> **OneTapResponse** = [`OneTapSuccessResponse`](#onetapsuccessresponse) | [`CancelledResponse`](#cancelledresponse) | [`NoSavedCredentialFound`](#nosavedcredentialfound)

The response object for OneTap's `signIn` and `createAccount`.

***

### OneTapSignInParams[​](#onetapsigninparams "Direct link to OneTapSignInParams")

> **OneTapSignInParams** = { `nonce?`: `string`; `skipPrompt?`: `boolean`; } & `ReducedWebSignInOptions`

Learn more about additional web-only parameters at [Google's reference documentation](https://developers.google.com/identity/gsi/web/reference/js-reference#IdConfiguration).

#### Type Declaration[​](#type-declaration-3 "Direct link to Type Declaration")

| Name          | Type      | Description                                                                                                                                                                                                          |
| ------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nonce?`      | `string`  | A cryptographically random value used to mitigate replay attacks. Supported on all platforms.                                                                                                                        |
| `skipPrompt?` | `boolean` | Web only. When calling any of the sign-in methods, a prompt is displayed by default on the top-right of the web page. Set this to true to only allow signing in via the `WebGoogleSigninButton`. **Default** `false` |

***

### OneTapSuccessResponse[​](#onetapsuccessresponse "Direct link to OneTapSuccessResponse")

> **OneTapSuccessResponse** = { `data`: [`OneTapUser`](#onetapuser); `type`: `"success"`; }

The response object when the user successfully signs in.

#### Properties[​](#properties-2 "Direct link to Properties")

| Property   | Type                        |
| ---------- | --------------------------- |
| []()`data` | [`OneTapUser`](#onetapuser) |
| []()`type` | `"success"`                 |

***

### OneTapUser[​](#onetapuser "Direct link to OneTapUser")

> **OneTapUser** = { `credentialOrigin`: `CredentialResponse`\[`"select_by"`]; `idToken`: `string`; `serverAuthCode`: `string` | `null`; `user`: { `email`: `string` | `null`; `familyName`: `string` | `null`; `givenName`: `string` | `null`; `id`: `string`; `name`: `string` | `null`; `phoneNumber`: `string` | `null`; `photo`: `string` | `null`; }; }

#### Properties[​](#properties-3 "Direct link to Properties")

| Property               | Type                                                                                                                                                                                                            | Description                                                                                                                                                         |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| []()`credentialOrigin` | `CredentialResponse`\[`"select_by"`]                                                                                                                                                                            | The credential origin. This is the method that was used to sign in the user. On native platforms, this is always "user". On the web it's a value from a union type. |
| []()`idToken`          | `string`                                                                                                                                                                                                        | -                                                                                                                                                                   |
| []()`serverAuthCode`   | `string` \| `null`                                                                                                                                                                                              | iOS only. Not null only if a valid `webClientId` and `offlineAccess: true` was specified in `configure()`. Call `requestAuthorization()` to obtain it on Android.   |
| []()`user`             | { `email`: `string` \| `null`; `familyName`: `string` \| `null`; `givenName`: `string` \| `null`; `id`: `string`; `name`: `string` \| `null`; `phoneNumber`: `string` \| `null`; `photo`: `string` \| `null`; } | -                                                                                                                                                                   |
| `user.email`           | `string` \| `null`                                                                                                                                                                                              | -                                                                                                                                                                   |
| `user.familyName`      | `string` \| `null`                                                                                                                                                                                              | -                                                                                                                                                                   |
| `user.givenName`       | `string` \| `null`                                                                                                                                                                                              | -                                                                                                                                                                   |
| `user.id`              | `string`                                                                                                                                                                                                        | An immutable identifier for the user. Unique among all Google accounts and never reused (user's email can change, this value cannot).                               |
| `user.name`            | `string` \| `null`                                                                                                                                                                                              | -                                                                                                                                                                   |
| `user.phoneNumber`     | `string` \| `null`                                                                                                                                                                                              | Android only, and only for `createAccount`. Requires setting `requestVerifiedPhoneNumber` to `true`.                                                                |
| `user.photo`           | `string` \| `null`                                                                                                                                                                                              | -                                                                                                                                                                   |

***

### PlayServicesInfo[​](#playservicesinfo "Direct link to PlayServicesInfo")

> **PlayServicesInfo** = { `installedVersion`: `number`; `minRequiredVersion`: `number`; }

The response object for successful `checkPlayServices` call. It denotes that the necessary prerequisites for calling the module in methods are met.

#### Properties[​](#properties-4 "Direct link to Properties")

| Property                 | Type     |
| ------------------------ | -------- |
| []()`installedVersion`   | `number` |
| []()`minRequiredVersion` | `number` |

***

### RequestAuthorizationParams[​](#requestauthorizationparams "Direct link to RequestAuthorizationParams")

> **RequestAuthorizationParams** = { `accountName?`: `string`; `hostedDomain?`: `string`; `offlineAccess?`: { `enabled`: `boolean`; `forceCodeForRefreshToken?`: `boolean`; }; `prompt?`: [`AuthorizationPrompt`](#authorizationprompt) | [`AuthorizationPrompt`](#authorizationprompt)\[]; `scopes`: `string`\[]; }

Learn more in the [guide](/docs/one-tap.md#requestauthorization).

#### Properties[​](#properties-5 "Direct link to Properties")

| Property                                  | Type                                                              | Description                                                                                                                                                                                 |
| ----------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| []()`accountName?`                        | `string`                                                          | Android only. Specifies an account on the device that should be used.                                                                                                                       |
| []()`hostedDomain?`                       | `string`                                                          | Android only. Specifies a hosted domain restriction. By setting this, authorization will be restricted to accounts of the user in the specified domain.                                     |
| []()`offlineAccess?`                      | { `enabled`: `boolean`; `forceCodeForRefreshToken?`: `boolean`; } | -                                                                                                                                                                                           |
| `offlineAccess.enabled`                   | `boolean`                                                         | Whether to enable offline access. If enabled, `serverAuthCode` will be returned in the response.                                                                                            |
| `offlineAccess.forceCodeForRefreshToken?` | `boolean`                                                         | Android only. If true, the granted code can be exchanged for an access token and a refresh token. Only use true if your server has suffered some failure and lost the user's refresh token. |
| []()`scopes`                              | `string`\[]                                                       | The Google API scopes to request access to. See [scopes docs](/docs/integration-notes#additional-scopes).                                                                                   |

***

### GoogleOneTapSignIn[​](#googleonetapsignin "Direct link to GoogleOneTapSignIn")

> `const` **GoogleOneTapSignIn**: { `checkPlayServices`: (`showErrorResolutionDialog?`: `boolean`) => `Promise`<[`PlayServicesInfo`](#playservicesinfo)>; `clearCachedAccessToken`: (`tokenString`: `string`) => `Promise`<`null`>; `configure`: (`options`: [`OneTapConfigureParams`](#onetapconfigureparams)) => `void`; `createAccount`: `CreateAccountInterface`; `enableAppCheck`: (`params?`: [`EnableAppCheckParams`](#enableappcheckparams)) => `Promise`<`null`>; `presentExplicitSignIn`: `ExplicitSignInInterface`; `requestAuthorization`: (`options`: [`RequestAuthorizationParams`](#requestauthorizationparams)) => `Promise`<[`AuthorizationResponse`](#authorizationresponse)>; `revokeAccess`: (`emailOrUniqueId`: `string`) => `Promise`<`null`>; `signIn`: `SignInInterface`; `signOut`: () => `Promise`<`null`>; }

The entry point of the Universal Sign In API, exposed as `GoogleOneTapSignIn`.

On the web, the signatures of `signIn`, `presentExplicitSignIn`, and `createAccount` are callback-based and on native they are Promise-based. Read more in the [guide](/docs/one-tap.md#web-support).

#### Type Declaration[​](#type-declaration-4 "Direct link to Type Declaration")

| Name                           | Type                                                                                                                                                                           |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| []()`checkPlayServices()`      | (`showErrorResolutionDialog?`: `boolean`) => `Promise`<[`PlayServicesInfo`](#playservicesinfo)>                                                                                |
| []()`clearCachedAccessToken()` | (`tokenString`: `string`) => `Promise`<`null`>                                                                                                                                 |
| []()`configure()`              | (`options`: [`OneTapConfigureParams`](#onetapconfigureparams)) => `void`                                                                                                       |
| `createAccount`                | (`params?`: [`OneTapCreateAccountParams`](/docs/api.md#onetapcreateaccountparams)) => `Promise`<[`OneTapResponse`](/docs/api.md#onetapresponse)>                               |
| []()`enableAppCheck()`         | (`params?`: [`EnableAppCheckParams`](#enableappcheckparams)) => `Promise`<`null`>                                                                                              |
| `presentExplicitSignIn`        | (`params?`: [`OneTapExplicitSignInParams`](/docs/api.md#onetapexplicitsigninparams)) => `Promise`<[`OneTapExplicitSignInResponse`](/docs/api.md#onetapexplicitsigninresponse)> |
| []()`requestAuthorization()`   | (`options`: [`RequestAuthorizationParams`](#requestauthorizationparams)) => `Promise`<[`AuthorizationResponse`](#authorizationresponse)>                                       |
| []()`revokeAccess()`           | (`emailOrUniqueId`: `string`) => `Promise`<`null`>                                                                                                                             |
| `signIn`                       | (`params?`: [`OneTapSignInParams`](/docs/api.md#onetapsigninparams)) => `Promise`<[`OneTapResponse`](/docs/api.md#onetapresponse)>                                             |
| []()`signOut()`                | () => `Promise`<`null`>                                                                                                                                                        |

## Original Google sign in[​](#original-google-sign-in "Direct link to Original Google sign in")

### AddScopesParams[​](#addscopesparams "Direct link to AddScopesParams")

> **AddScopesParams** = { `scopes`: `string`\[]; }

#### Properties[​](#properties-6 "Direct link to Properties")

| Property     | Type        | Description                                                                    |
| ------------ | ----------- | ------------------------------------------------------------------------------ |
| []()`scopes` | `string`\[] | The Google API scopes to request access to. **Default** `["email", "profile"]` |

***

### ConfigureParams[​](#configureparams "Direct link to ConfigureParams")

> **ConfigureParams** = [`ClientIdOrPlistPath`](#clientidorplistpath) & { `accountName?`: `string`; `forceCodeForRefreshToken?`: `boolean`; `hostedDomain?`: `string`; `offlineAccess?`: `boolean`; `openIdRealm?`: `string`; `profileImageSize?`: `number`; `scopes?`: `string`\[]; `webClientId?`: `WebClientId`; }

#### Type Declaration[​](#type-declaration-5 "Direct link to Type Declaration")

| Name                        | Type          | Description                                                                                                                                                                                                                                                                                                                                 |
| --------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountName?`              | `string`      | Android only. An account name that should be prioritized.                                                                                                                                                                                                                                                                                   |
| `forceCodeForRefreshToken?` | `boolean`     | Android only. Only set to `true` if your server has suffered some failure and lost the user's refresh token.                                                                                                                                                                                                                                |
| `hostedDomain?`             | `string`      | Specifies a hosted domain restriction. By setting this, authorization will be restricted to accounts of the user in the specified domain.                                                                                                                                                                                                   |
| `offlineAccess?`            | `boolean`     | Must be `true` if you wish to access user APIs on behalf of the user from your own server. When offline access is requested, an authorization code is returned so the server can use the authorization code to exchange for access token and refresh token. The access token allows the server to access Google data on behalf of the user. |
| `openIdRealm?`              | `string`      | iOS only. The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.                                                                                                                                                                                              |
| `profileImageSize?`         | `number`      | iOS only. The desired height and width of the profile image. **Default** `120px`                                                                                                                                                                                                                                                            |
| `scopes?`                   | `string`\[]   | The Google API scopes to request access to. **Default** `["email", "profile"]`                                                                                                                                                                                                                                                              |
| `webClientId?`              | `WebClientId` | The web client ID obtained from Google Cloud console. Required for offline access.                                                                                                                                                                                                                                                          |

***

### GetTokensResponse[​](#gettokensresponse "Direct link to GetTokensResponse")

> **GetTokensResponse** = { `accessToken`: `string`; `idToken`: `string`; }

#### Properties[​](#properties-7 "Direct link to Properties")

| Property          | Type     |
| ----------------- | -------- |
| []()`accessToken` | `string` |
| []()`idToken`     | `string` |

***

### HasPlayServicesParams[​](#hasplayservicesparams "Direct link to HasPlayServicesParams")

> **HasPlayServicesParams** = { `showPlayServicesUpdateDialog?`: `boolean`; }

#### Properties[​](#properties-8 "Direct link to Properties")

| Property                            | Type      | Description                                                                                                                           |
| ----------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| []()`showPlayServicesUpdateDialog?` | `boolean` | Whether to show a dialog that prompts the user to install Google Play Services, if they don't have them installed. **Default** `true` |

***

### SignInParams[​](#signinparams "Direct link to SignInParams")

> **SignInParams** = { `loginHint?`: `string`; `nonce?`: `string`; }

#### Properties[​](#properties-9 "Direct link to Properties")

| Property         | Type     | Description                                                                                                                                                                                                                                            |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| []()`loginHint?` | `string` | iOS only. The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/reference/Classes/GIDSignIn#-signinwithpresentingviewcontroller:hint:completion:). |
| []()`nonce?`     | `string` | iOS only. A cryptographically random value used to mitigate replay attacks. Only available in the paid version. For support across all platforms, use the Universal sign in module.                                                                    |

***

### SignInResponse[​](#signinresponse "Direct link to SignInResponse")

> **SignInResponse** = [`SignInSuccessResponse`](#signinsuccessresponse) | [`CancelledResponse`](#cancelledresponse)

***

### SignInSilentlyResponse[​](#signinsilentlyresponse "Direct link to SignInSilentlyResponse")

> **SignInSilentlyResponse** = [`SignInSuccessResponse`](#signinsuccessresponse) | [`NoSavedCredentialFound`](#nosavedcredentialfound)

The response object for calling `signInSilently`. Either the user details are available (without user interaction) or there was no saved credential found.

***

### SignInSuccessResponse[​](#signinsuccessresponse "Direct link to SignInSuccessResponse")

> **SignInSuccessResponse** = { `data`: [`User`](#user); `type`: `"success"`; }

The response object when the user signs in successfully.

#### Properties[​](#properties-10 "Direct link to Properties")

| Property   | Type            | Description       |
| ---------- | --------------- | ----------------- |
| []()`data` | [`User`](#user) | The user details. |
| []()`type` | `"success"`     | -                 |

***

### User[​](#user "Direct link to User")

> **User** = { `idToken`: `string` | `null`; `scopes`: `string`\[]; `serverAuthCode`: `string` | `null`; `user`: { `email`: `string`; `familyName`: `string` | `null`; `givenName`: `string` | `null`; `id`: `string`; `name`: `string` | `null`; `photo`: `string` | `null`; }; }

#### Properties[​](#properties-11 "Direct link to Properties")

| Property             | Type                                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| []()`idToken`        | `string` \| `null`                                                                                                                                                 | JWT (JSON Web Token) that serves as a secure credential for your user's identity.                                                                                                                                                                                                                                                                         |
| []()`scopes`         | `string`\[]                                                                                                                                                        | The Google API scopes that the user granted access to.                                                                                                                                                                                                                                                                                                    |
| []()`serverAuthCode` | `string` \| `null`                                                                                                                                                 | Code that you can securely send to your server to exchange for an access and refresh token. Use the access token to call Google APIs on behalf of the user and, optionally, store the refresh token to acquire a new access token when the access token expires. Not null only if a valid `webClientId` and `offlineAccess` was enabled in `configure()`. |
| []()`user`           | { `email`: `string`; `familyName`: `string` \| `null`; `givenName`: `string` \| `null`; `id`: `string`; `name`: `string` \| `null`; `photo`: `string` \| `null`; } | -                                                                                                                                                                                                                                                                                                                                                         |
| `user.email`         | `string`                                                                                                                                                           | -                                                                                                                                                                                                                                                                                                                                                         |
| `user.familyName`    | `string` \| `null`                                                                                                                                                 | -                                                                                                                                                                                                                                                                                                                                                         |
| `user.givenName`     | `string` \| `null`                                                                                                                                                 | -                                                                                                                                                                                                                                                                                                                                                         |
| `user.id`            | `string`                                                                                                                                                           | -                                                                                                                                                                                                                                                                                                                                                         |
| `user.name`          | `string` \| `null`                                                                                                                                                 | -                                                                                                                                                                                                                                                                                                                                                         |
| `user.photo`         | `string` \| `null`                                                                                                                                                 | -                                                                                                                                                                                                                                                                                                                                                         |

***

### GoogleSignin[​](#googlesignin "Direct link to GoogleSignin")

> `const` **GoogleSignin**: { `addScopes`: (`options`: [`AddScopesParams`](#addscopesparams)) => `Promise`<[`SignInResponse`](#signinresponse) | `null`>; `clearCachedAccessToken`: (`tokenString`: `string`) => `Promise`<`null`>; `configure`: (`options?`: [`ConfigureParams`](#configureparams)) => `void`; `enableAppCheck`: (`params?`: [`EnableAppCheckParams`](#enableappcheckparams)) => `Promise`<`null`>; `getCurrentUser`: () => [`User`](#user) | `null`; `getTokens`: () => `Promise`<[`GetTokensResponse`](#gettokensresponse)>; `hasPlayServices`: (`options?`: [`HasPlayServicesParams`](#hasplayservicesparams)) => `Promise`<`boolean`>; `hasPreviousSignIn`: () => `boolean`; `revokeAccess`: () => `Promise`<`null`>; `signIn`: (`options`: [`SignInParams`](#signinparams)) => `Promise`<[`SignInResponse`](#signinresponse)>; `signInSilently`: () => `Promise`<[`SignInSilentlyResponse`](#signinsilentlyresponse)>; `signOut`: () => `Promise`<`null`>; }

The entry point of the Google Sign In API, exposed as `GoogleSignin`.

#### Type Declaration[​](#type-declaration-6 "Direct link to Type Declaration")

| Name                           | Type                                                                                                           |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| []()`addScopes()`              | (`options`: [`AddScopesParams`](#addscopesparams)) => `Promise`<[`SignInResponse`](#signinresponse) \| `null`> |
| []()`clearCachedAccessToken()` | (`tokenString`: `string`) => `Promise`<`null`>                                                                 |
| []()`configure()`              | (`options?`: [`ConfigureParams`](#configureparams)) => `void`                                                  |
| []()`enableAppCheck()`         | (`params?`: [`EnableAppCheckParams`](#enableappcheckparams)) => `Promise`<`null`>                              |
| []()`getCurrentUser()`         | () => [`User`](#user) \| `null`                                                                                |
| []()`getTokens()`              | () => `Promise`<[`GetTokensResponse`](#gettokensresponse)>                                                     |
| []()`hasPlayServices()`        | (`options?`: [`HasPlayServicesParams`](#hasplayservicesparams)) => `Promise`<`boolean`>                        |
| []()`hasPreviousSignIn()`      | () => `boolean`                                                                                                |
| []()`revokeAccess()`           | () => `Promise`<`null`>                                                                                        |
| []()`signIn()`                 | (`options`: [`SignInParams`](#signinparams)) => `Promise`<[`SignInResponse`](#signinresponse)>                 |
| []()`signInSilently()`         | () => `Promise`<[`SignInSilentlyResponse`](#signinsilentlyresponse)>                                           |
| []()`signOut()`                | () => `Promise`<`null`>                                                                                        |

## Constants[​](#constants "Direct link to Constants")

### statusCodes[​](#statuscodes "Direct link to statusCodes")

> `const` **statusCodes**: `Readonly`<{ `IN_PROGRESS`: `string`; `NULL_PRESENTER`: `"NULL_PRESENTER"`; `ONE_TAP_START_FAILED`: `"ONE_TAP_START_FAILED"`; `PLAY_SERVICES_NOT_AVAILABLE`: `string`; }>

Read more about the meaning of the error codes in the [guide](/docs/errors.md).

## Functions[​](#functions "Direct link to Functions")

### isCancelledResponse()[​](#iscancelledresponse "Direct link to isCancelledResponse()")

> **isCancelledResponse**(`response`: [`OneTapResponse`](#onetapresponse)): `response is CancelledResponse`

TypeScript helper to check if a response is a `cancelled` response. This is the same as checking if the `response.type === "cancelled"`.

Use this if you prefer to use a function instead of comparing with a raw string.

It supports both One Tap and Original Google Sign In responses.

#### Parameters[​](#parameters "Direct link to Parameters")

| Parameter  | Type                                |
| ---------- | ----------------------------------- |
| `response` | [`OneTapResponse`](#onetapresponse) |

#### Returns[​](#returns "Direct link to Returns")

`response is CancelledResponse`

#### Example[​](#example "Direct link to Example")

```ts
const response = await GoogleOneTapSignIn.createAccount();

if (isCancelledResponse(response)) {
  // handle cancelled response
}

```

***

### isErrorWithCode()[​](#iserrorwithcode "Direct link to isErrorWithCode()")

> **isErrorWithCode**(`error`: `unknown`): `error is NativeModuleError`

TypeScript helper to check if an object has the `code` property. This is used to avoid `as` casting when you access the `code` property on errors returned by the module.

#### Parameters[​](#parameters-1 "Direct link to Parameters")

| Parameter | Type      |
| --------- | --------- |
| `error`   | `unknown` |

#### Returns[​](#returns-1 "Direct link to Returns")

`error is NativeModuleError`

***

### isNoSavedCredentialFoundResponse()[​](#isnosavedcredentialfoundresponse "Direct link to isNoSavedCredentialFoundResponse()")

> **isNoSavedCredentialFoundResponse**(`response`: [`OneTapResponse`](#onetapresponse)): `response is NoSavedCredentialFound`

TypeScript helper to check if a response is a `noSavedCredentialFound` response. This is the same as checking if the `response.type === "noSavedCredentialFound"`.

Use this if you prefer to use a function instead of comparing with a raw string.

It supports both One Tap and Original Google Sign In responses.

#### Parameters[​](#parameters-2 "Direct link to Parameters")

| Parameter  | Type                                |
| ---------- | ----------------------------------- |
| `response` | [`OneTapResponse`](#onetapresponse) |

#### Returns[​](#returns-2 "Direct link to Returns")

`response is NoSavedCredentialFound`

#### Example[​](#example-1 "Direct link to Example")

```ts
const response = await GoogleOneTapSignIn.signIn();

if (isNoSavedCredentialFoundResponse(response)) {
  // the case when no user was previously signed in
}

```

***

### isSuccessResponse()[​](#issuccessresponse "Direct link to isSuccessResponse()")

> **isSuccessResponse**(`response`: [`OneTapResponse`](#onetapresponse)): `response is OneTapSuccessResponse`

TypeScript helper to check if a response is a `cancelled` response. This is the same as checking if the `response.type === "cancelled"`.

Use this if you prefer to use a function instead of comparing with a raw string.

It supports both One Tap and Original Google Sign In responses.

#### Parameters[​](#parameters-3 "Direct link to Parameters")

| Parameter  | Type                                |
| ---------- | ----------------------------------- |
| `response` | [`OneTapResponse`](#onetapresponse) |

#### Returns[​](#returns-3 "Direct link to Returns")

`response is OneTapSuccessResponse`

#### Example[​](#example-2 "Direct link to Example")

```ts
const response = await GoogleOneTapSignIn.createAccount();

if (isSuccessResponse(response)) {
  // handle user signed in
}

```

## React Components[​](#react-components "Direct link to React Components")

### GoogleLogoButtonProps[​](#googlelogobuttonprops "Direct link to GoogleLogoButtonProps")

> **GoogleLogoButtonProps** = { `label?`: `string`; `shape?`: `"rectangular"` | `"circular"`; `textStyle?`: `StyleProp`<`TextStyle`>; `theme?`: `"light"` | `"dark"` | `"neutral"`; `variant?`: `"standard"` | `"icon"`; }

#### Properties[​](#properties-12 "Direct link to Properties")

| Property         | Type                                 | Description                                                                     |
| ---------------- | ------------------------------------ | ------------------------------------------------------------------------------- |
| []()`label?`     | `string`                             | -                                                                               |
| []()`shape?`     | `"rectangular"` \| `"circular"`      | -                                                                               |
| []()`textStyle?` | `StyleProp`<`TextStyle`>             | Style for the button text. Provide the Roboto font family with a weight of 500. |
| []()`theme?`     | `"light"` \| `"dark"` \| `"neutral"` | -                                                                               |
| []()`variant?`   | `"standard"` \| `"icon"`             | -                                                                               |

***

### GoogleSigninButtonProps[​](#googlesigninbuttonprops "Direct link to GoogleSigninButtonProps")

> **GoogleSigninButtonProps** = `ViewProps` & { `color?`: `"dark"` | `"light"`; `disabled?`: `boolean`; `onPress?`: () => `void`; `size?`: `number`; }

#### Type Declaration[​](#type-declaration-7 "Direct link to Type Declaration")

| Name         | Type                  |
| ------------ | --------------------- |
| `color?`     | `"dark"` \| `"light"` |
| `disabled?`  | `boolean`             |
| `onPress()?` | () => `void`          |
| `size?`      | `number`              |

***

### WebGoogleSignInButtonProps[​](#webgooglesigninbuttonprops "Direct link to WebGoogleSignInButtonProps")

> **WebGoogleSignInButtonProps** = `Omit`<`GsiButtonConfiguration`, `"logo_alignment"`> & { `logoAlignment?`: `GsiButtonConfiguration`\[`"logo_alignment"`]; `onError?`: (`error`: `Error`) => `void`; }

#### Type Declaration[​](#type-declaration-8 "Direct link to Type Declaration")

| Name             | Type                                          |
| ---------------- | --------------------------------------------- |
| `logoAlignment?` | `GsiButtonConfiguration`\[`"logo_alignment"`] |
| `onError()?`     | (`error`: `Error`) => `void`                  |

***

### GoogleLogoButton[​](#googlelogobutton "Direct link to GoogleLogoButton")

> `const` **GoogleLogoButton**: `React.FC`<`PressableProps` & [`GoogleLogoButtonProps`](#googlelogobuttonprops)>

Sign in button that follows the [Google branding guidelines](https://developers.google.com/identity/branding-guidelines).

***

### WebGoogleSigninButton[​](#webgooglesigninbutton "Direct link to WebGoogleSigninButton")

> `const` **WebGoogleSigninButton**: `React.FC`<[`WebGoogleSignInButtonProps`](#webgooglesigninbuttonprops)>

***

### GoogleSigninButton()[​](#googlesigninbutton "Direct link to GoogleSigninButton()")

> **GoogleSigninButton**(`props`: [`GoogleSigninButtonProps`](#googlesigninbuttonprops)): `Element`

Native Google Sign-In button component. Prefer using the [`GoogleLogoButton`](#googlelogobutton) for a more customizable button.

#### Parameters[​](#parameters-4 "Direct link to Parameters")

| Parameter | Type                                                  |
| --------- | ----------------------------------------------------- |
| `props`   | [`GoogleSigninButtonProps`](#googlesigninbuttonprops) |

#### Returns[​](#returns-4 "Direct link to Returns")

`Element`

## Type Aliases[​](#type-aliases "Direct link to Type Aliases")

### AuthorizationPrompt[​](#authorizationprompt "Direct link to AuthorizationPrompt")

> **AuthorizationPrompt** = `"consent"` | `"select_account"`

***

### CancelledResponse[​](#cancelledresponse "Direct link to CancelledResponse")

> **CancelledResponse** = { `data`: `null`; `type`: `"cancelled"`; }

The response object when the user cancels the flow for any operation that requires user interaction.

On the web, this is also returned while [cooldown period](https://developers.google.com/identity/gsi/web/guides/features#exponential_cooldown) is active. Detecting the cooldown period itself is not possible on the web for user privacy reasons.

#### Properties[​](#properties-13 "Direct link to Properties")

| Property   | Type          |
| ---------- | ------------- |
| []()`data` | `null`        |
| []()`type` | `"cancelled"` |

***

### ClientIdOrPlistPath[​](#clientidorplistpath "Direct link to ClientIdOrPlistPath")

> **ClientIdOrPlistPath** = { `iosClientId?`: `string`; } | { `googleServicePlistPath?`: `string`; }

iOS only. Configures the iOS client ID. By default, the iOS client ID is taken from the `GoogleService-Info.plist` Firebase config file (if present).

You can specify a different bundle path for the config file, e.g. "GoogleService-Info-Staging".

Alternatively, set the client ID explicitly by providing `iosClientId`.

#### Type Declaration[​](#type-declaration-9 "Direct link to Type Declaration")

{ `iosClientId?`: `string`; }

| Name           | Type     | Description                                                                                                        |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `iosClientId?` | `string` | If you want to specify the client ID of type iOS. It is taken from the `GoogleService-Info.plist` file by default. |

{ `googleServicePlistPath?`: `string`; }

| Name                      | Type     | Description                                                                                                                                              |
| ------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `googleServicePlistPath?` | `string` | iOS only. Use this to specify a different bundle path name for the `GoogleService-Info` Firebase config file. **Example** `"GoogleService-Info-Staging"` |

***

### NoSavedCredentialFound[​](#nosavedcredentialfound "Direct link to NoSavedCredentialFound")

> **NoSavedCredentialFound** = { `data`: `null`; `type`: `"noSavedCredentialFound"`; }

The response to calling One Tap's `signIn` and Original Google Sign In's `signInSilently` when no user was previously signed in, or they have since signed out or revoked access.

#### Properties[​](#properties-14 "Direct link to Properties")

| Property   | Type                       |
| ---------- | -------------------------- |
| []()`data` | `null`                     |
| []()`type` | `"noSavedCredentialFound"` |

## Web Universal sign in module[​](#web-universal-sign-in-module "Direct link to Web Universal sign in module")

### WebOneTapSignInCallbacks[​](#webonetapsignincallbacks "Direct link to WebOneTapSignInCallbacks")

> **WebOneTapSignInCallbacks** = { `momentListener?`: `MomentListener`; `onError`: (`error`: `NativeModuleError`) => `void` | `Promise`<`void`>; `onResponse`: (`userInfo`: [`OneTapExplicitSignInResponse`](#onetapexplicitsigninresponse)) => `void` | `Promise`<`void`>; }

When using Universal sign in on the web, the sign in result is delivered via a callback, not via a promise. The shape of data delivered to the callback is the same as the shape of the data in the promise, enabling code reuse. Read more in the [guide](/docs/one-tap.md#web-support).

#### Properties[​](#properties-15 "Direct link to Properties")

| Property              | Type                                                                                                         | Description                                                                                                                                                                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| []()`momentListener?` | `MomentListener`                                                                                             | A callback function that is called when important events take place. See [reference](https://developers.google.com/identity/gsi/web/reference/js-reference#PromptMomentNotification).                                                                             |
| []()`onError`         | (`error`: `NativeModuleError`) => `void` \| `Promise`<`void`>                                                | Called when an error occurs. You can use the `code` property of the error to determine the reason for the error. The reported errors on the web are in the same format as the errors reported on the native platforms, so you can reuse your error handling code. |
| []()`onResponse`      | (`userInfo`: [`OneTapExplicitSignInResponse`](#onetapexplicitsigninresponse)) => `void` \| `Promise`<`void`> | Called when the user successfully signs in, or cancels the sign in, either using the web One-tap flow or the button flow.                                                                                                                                         |
