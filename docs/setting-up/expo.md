# Expo setup

## Prepare your Expo project[​](#prepare-your-expo-project "Direct link to Prepare your Expo project")

note

This package cannot be used in [Expo Go](https://docs.expo.dev/workflow/overview/#expo-go-an-optional-tool-for-learning) because it uses native code. This applies to both the [Original](/docs/original.md) and [Universal](/docs/one-tap.md) modules.

However, you can add custom native code to an Expo app by using a [development build](https://docs.expo.dev/workflow/overview/#development-builds). That is the recommended approach for production apps, and is documented in this guide.

## Add config plugin[​](#add-config-plugin "Direct link to Add config plugin")

After installing the npm package, add a config plugin (read more details below) to the [`plugins`](https://docs.expo.io/versions/latest/config/app/#plugins) array of your `app.json` or `app.config.js`. There are 2 config plugins available: for projects with Firebase, and without Firebase.

### Expo without Firebase[​](#expo-without-firebase "Direct link to Expo without Firebase")

If you're *not* using Firebase, provide the `iosUrlScheme` option to the config plugin.

To obtain `iosUrlScheme`, follow [these instructions](/docs/setting-up/get-config-file.md?firebase-or-not=cloud-console#ios).

app.json | js

```json
{
  "expo": {
    "plugins": [
      [
        "@react-native-google-signin/google-signin",
        {
          "iosUrlScheme": "com.googleusercontent.apps._some_id_here_"
        }
      ]
    ]
  }
}

```

### Expo and Firebase Authentication[​](#expo-and-firebase-authentication "Direct link to Expo and Firebase Authentication")

If you are using Firebase Authentication, follow [these instructions](/docs/setting-up/get-config-file.md?firebase-or-not=firebase#step-2) to get `google-services.json` file for Android and [these instructions](/docs/setting-up/get-config-file.md?firebase-or-not=firebase#ios)) to get `GoogleService-Info.plist` for iOS.

Place them into your project and specify the paths to the files:

app.json | js

```json
{
  "expo": {
    "plugins": ["@react-native-google-signin/google-signin"],
    "android": {
      "googleServicesFile": "./google-services.json"
    },
    "ios": {
      "googleServicesFile": "./GoogleService-Info.plist"
    }
  }
}

```

## Build the native app[​](#build-the-native-app "Direct link to Build the native app")

Run the following to generate the native project directories.

```sh
npx expo prebuild --clean

```

Rebuild your app and read the [config guide](/docs/setting-up/get-config-file.md)!

```sh
npx expo run:android && npx expo run:ios

```
