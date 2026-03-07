# iOS setup guide

warning

If you use Expo, follow [this guide](/docs/setting-up/expo.md) instead. This guide applies to vanilla React Native apps only.

### Link the native module[​](#link-the-native-module "Direct link to Link the native module")

* run `pod install` in the `ios/` directory to install the module

### Google project configuration[​](#google-project-configuration "Direct link to Google project configuration")

* Follow [this](/docs/setting-up/get-config-file.md) guide to get the configuration information which you need for the next steps.

### Firebase Authentication[​](#firebase-authentication "Direct link to Firebase Authentication")

If you're using Firebase Authentication, download the `GoogleService-Info.plist` file and place it into your Xcode project.

### Xcode configuration[​](#xcode-configuration "Direct link to Xcode configuration")

* Configure URL types in the `Info` panel (see screenshot)
  <!-- -->
  * add your "iOS URL scheme" (also known as `reversed client id`), which can be found in [Google Cloud Console](https://console.cloud.google.com/apis/credentials?project=_) under your iOS client ID.
* If you need to support Mac Catalyst, you need to enable the Keychain Sharing capability on each build target. No keychain groups need to be added.

![link config](/assets/images/urlTypes-2096dbcdf48dfe2cb07c1e98f33d423f.png)

## Rebuild the native project[​](#rebuild-the-native-project "Direct link to Rebuild the native project")

Do not forget to rebuild the native app after the setup is done.

### Optional: modify your app to respond to the URL scheme[​](#optional-modify-your-app-to-respond-to-the-url-scheme "Direct link to Optional: modify your app to respond to the URL scheme")

This is only required if you have multiple listeners for `openURL` - for instance if you have both Google and Facebook OAuth.

Because only one `openURL` method can be defined, if you have multiple listeners for `openURL`, you must combine them into a single function as shown below:

#### For AppDelegate written in Swift[​](#for-appdelegate-written-in-swift "Direct link to For AppDelegate written in Swift")

If your AppDelegate a Swift file (the default in React Native 0.77.0 or higher), you'll need to:

1. Add the following import to your project's [bridging header](https://developer.apple.com/documentation/swift/importing-objective-c-into-swift#Import-Code-Within-an-App-Target) file (usually `ios/YourProject-Bridging-Header.h`):

```objc
// …

// ⬇️ Add this import
#import <GoogleSignIn/GoogleSignIn.h>

```

2. Modify your `AppDelegate.swift` file:

```swift
// …

@main
class AppDelegate: RCTAppDelegate {
  // …

  // ⬇️ Add this method
  override func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
    // Add any other URL handlers you're using (e.g. Facebook SDK)
    return ApplicationDelegate.shared.application(app, open: url, options: options) ||
           GIDSignIn.sharedInstance.handle(url)
  }

}

```

#### For AppDelegate written in Objective-C[​](#for-appdelegate-written-in-objective-c "Direct link to For AppDelegate written in Objective-C")

For AppDelegate written in Objective-C (the default prior to React Native 0.77), modify your `AppDelegate.m` file:

```objc
#import "AppDelegate.h"
#import <GoogleSignIn/GoogleSignIn.h> // ⬅️ add the header import

// …

@implementation AppDelegate

// …

// ⬇️ Add this method before file @end
- (BOOL)application:(UIApplication *)application openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<NSString *,id> *)options {
  // Add any other URL handlers you're using (e.g. Facebook SDK)
  return [[FBSDKApplicationDelegate sharedInstance] application:application openURL:url options:options] || [GIDSignIn.sharedInstance handleURL:url];
}

@end

```
