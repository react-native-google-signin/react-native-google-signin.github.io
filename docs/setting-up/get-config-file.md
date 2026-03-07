# Collecting configuration information

Before getting your hands dirty with code, some configuration needs to be taken care of. Configuration information collected in this guide is used in later steps of the setup and in the `configure()` call: [1](/docs/one-tap.md#configure) or [2](/docs/original.md#configure).

You **do not** need to use Firebase to configure Google Sign In.

## Android[​](#android "Direct link to Android")

Follow the two steps below to set up Google Sign In for your Android app.

warning

In case you encounter any of the following issues, revisit this guide - it means the steps below weren't fully completed.

* if you ever get the infamous `DEVELOPER_ERROR` error
* if you can sign in with debug APK and not in release (or vice versa)

### Step 1: Collect SHA-1 (not SHA-256) certificate fingerprints[​](#step-1-collect-sha-1-not-sha-256-certificate-fingerprints "Direct link to Step 1: Collect SHA-1 (not SHA-256) certificate fingerprints")

Your Android app probably uses multiple signing configurations. For example, an app might be signed differently when building `debug` and `release` APKs locally or when building on [Expo EAS](https://docs.expo.dev/app-signing/managed-credentials/#inspecting-credentials-configuration). Then there's the [Play App Signing](https://support.google.com/googleplay/android-developer/answer/9842756?hl=en) for store deployments — Google Play Store may *re-sign* your app using one of its own signing configurations.

important

If your app is not yet in the Play Store, focus only on the development APK and its SHA-1 certificate fingerprint. You can come back to this guide later when you upload your app to the Play Store.

However, be advised that in the end, you need to get the SHA-1 certificate fingerprints for *all* signing configurations and then use *all* of those SHA-1 fingerprints in [Step 2](#step-2) below.

#### Collect SHA-1 certificate fingerprints from:[​](#collect-sha-1-certificate-fingerprints-from "Direct link to Collect SHA-1 certificate fingerprints from:")

<!-- -->

* A device or any APK file
* Google Play Store (when downloading from it)
* EAS Build
* Local build

Use the [Configuration Doctor](/docs/config-doctor.md). (Requires an [Universal sign in](/docs/install.md#premium) license.)

1. Get a device / emulator with the app installed, or get the APK (build it locally or in cloud, download from the Play Console / Play Store...)
2. Run the tool and follow its instructions:

```bash
npx @react-native-google-signin/config-doctor

```

Check if "Google Play App Signing" is enabled for your app [in the console](https://play.google.com/console/). If it is enabled, you need to take the following steps:

1. In Google Play Console, navigate to: \<Your App> -> Release section (in the left sidebar) -> Setup -> App Signing.
2. Under the "App signing key certificate", take note of `SHA-1 certificate fingerprint`(s). Play Store sometimes has more than one "App signing key certificate"!

If you use [Expo EAS](https://expo.dev/eas), run `eas credentials` to obtain the Keystore information, which includes the SHA-1 fingerprint. See [EAS credentials docs](https://docs.expo.dev/app-signing/managed-credentials/#inspecting-credentials-configuration) to learn more.

1. From your project root, `cd android && ./gradlew signingReport`.
2. Scroll to the top of output, see the fingerprints. Debug fingerprint is used for locally-built debug APK, release fingerprint is used for release APK.

<br />

<br />

### Step 2: Add SHA-1 fingerprints to Firebase or Google Cloud Console[​](#step-2 "Direct link to Step 2: Add SHA-1 fingerprints to Firebase or Google Cloud Console")

For *each* of the SHA-1 fingerprints obtained in the previous step, follow the instructions below.

* When using Firebase
* When not using Firebase

1. Sign in to [Firebase Console](https://console.firebase.google.com/) and open your project.
2. Ensure that in the "Authentication" menu, "Google" is enabled as "Sign-in method".
3. Click the settings icon and go to "Project settings".
4. Scroll down to "Your apps" section, and select the app.
5. Click "Add fingerprint".
6. Check that "Package name" is correct.
7. Download the `google-services.json` file.

![Firebase, add Android keystore\&#39;s SHA-1 to your project](/assets/images/android-fingerprint-firebase-5381019c8870df86888cdc8bb082d603.png)

*For each* of the SHA-1 fingerprints you obtained, create an OAuth Client ID of type Android in [Google Cloud Console](https://console.cloud.google.com/apis/credentials?project=_) - see the screenshot below.

Alternatively, use [this wizard](https://console.developers.google.com/henhouse/?pb=%5B%22hh-0%22%2Cnull%2Cnull%2Cnull%2C%22https%3A%2F%2Fdevelopers.google.com%22%2Cnull%2Cnull%2Cnull%2C%22Configure%20a%20project%20for%20Google%20Sign-In%22%2C1%2Cnull%2Cnull%2C0%2C1%2Cnull%2Cnull%2Cnull%2Cnull%2C0%2Cnull%2Cnull%2C0%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2C0%2Cnull%2Cnull%2Cnull%2C0%5D).

You will *NOT* need the created IDs later - the only goal here is for them to be created in the Google Cloud Console.

![Google Cloud Console - creating Android OAuth ID](/assets/images/android-client-id-2a2f8705a27c0cd9f2ed70529d8f29f4.png)

***

## iOS[​](#ios "Direct link to iOS")

Read below on how to set up Google Sign In for your iOS app.

* When using Firebase
* When not using Firebase

1. Sign in to [Firebase Console](https://console.firebase.google.com/) and open your project.
2. Ensure that in the "Authentication" menu, "Google" is enabled as "Sign-in method".
3. Click the settings icon and go to "Project settings".
4. Scroll down to "Your apps" section, and select the app.
5. Check that "Bundle ID" is correct.
6. Download the `GoogleService-Info.plist` file.

Remember that *all* created client IDs can be found in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials?project=_).

Obtain the "iOS OAuth Client ID" *and* "iOS URL scheme" (also known as `reversed client id`): Create an OAuth Client ID of type iOS in [Google Cloud Console](https://console.cloud.google.com/apis/credentials?project=_) as seen in the screenshot below. Alternatively, use [this wizard](https://console.developers.google.com/henhouse/?pb=%5B%22hh-0%22%2Cnull%2Cnull%2Cnull%2C%22https%3A%2F%2Fdevelopers.google.com%22%2Cnull%2Cnull%2Cnull%2C%22Configure%20a%20project%20for%20Google%20Sign-In%22%2C1%2Cnull%2Cnull%2C0%2C1%2Cnull%2Cnull%2Cnull%2Cnull%2C0%2Cnull%2Cnull%2C0%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2C0%2Cnull%2Cnull%2Cnull%2C0%5D).

You will need the iOS Client ID and iOS URL scheme later.

![Google Cloud Console - creating iOS OAuth ID](/assets/images/ios-client-id-0235e70ba063cac062966a2ce5847ed0.png)

***

## Web Client ID[​](#web-client-id "Direct link to Web Client ID")

To get a Web Client ID (for the `configure()` call), go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials?project=_) and find an existing one (it may have been already created by Firebase) or create a new OAuth Client ID of type **Web**.

***

## Summary[​](#summary "Direct link to Summary")

At the end of this guide, regardless of whether you use Firebase, when you visit [Google Cloud Console](https://console.cloud.google.com/apis/credentials?project=_), you should have in the "OAuth 2.0 Client IDs" section:

* Android OAuth Client ID(s) with SHA-1 fingerprints
* iOS OAuth Client ID(s) with iOS URL scheme
* Web Client ID
