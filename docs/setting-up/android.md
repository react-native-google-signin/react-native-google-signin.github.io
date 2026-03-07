# Android setup guide

warning

If you use Expo, follow [this guide](/docs/setting-up/expo.md) instead. This guide applies to vanilla React Native apps only.

## Google project configuration[​](#google-project-configuration "Direct link to Google project configuration")

* Follow [this](/docs/setting-up/get-config-file.md) guide to set up your project and get the configuration information which you'll need later.

### Without Firebase Authentication[​](#without-firebase-authentication "Direct link to Without Firebase Authentication")

You don't need to do any more modifications.

### With Firebase Authentication[​](#with-firebase-authentication "Direct link to With Firebase Authentication")

#### 1. Download the configuration file[​](#1-download-the-configuration-file "Direct link to 1. Download the configuration file")

* Download the configuration file (`google-services.json`) from Firebase. Then, place it into your project according to [these instructions](https://developers.google.com/android/guides/google-services-plugin#adding_the_json_file).

#### 2. Update gradle files[​](#2-update-gradle-files "Direct link to 2. Update gradle files")

Update `android/build.gradle` with

android/build.gradle

```groovy
buildscript {
// ...
    dependencies {
        classpath 'com.google.gms:google-services:4.4.0' // <--- use this version or newer
    }
}

```

Update `android/app/build.gradle` with

android/app/build.gradle

```groovy
apply plugin: "com.android.application"
apply plugin: "org.jetbrains.kotlin.android"
apply plugin: "com.facebook.react"
apply plugin: 'com.google.gms.google-services'

```

This ends the setup for Firebase.

## Rebuild the native project[​](#rebuild-the-native-project "Direct link to Rebuild the native project")

Do not forget to rebuild the native app after the setup is done.
