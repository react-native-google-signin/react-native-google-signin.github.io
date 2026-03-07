# GoogleLogoButton

A Google Sign-In button that follows Google's official branding guidelines. Intended for native apps. It renders null when used on the web.

<!-- -->

tip

The functionality covered in this page is available in the licensed version. [You can get a license here](https://universal-sign-in.com/#pricing) ⭐️.

## Features[​](#features "Direct link to Features")

* Available in standard and icon-only variants
* Customizable shape (rectangular or circular)
* Supports light, dark, and neutral themes
* Full customization possible via [Pressable props](https://reactnative.dev/docs/pressable#props)

![screenshot of buttons](/img/google-logo-buttons.jpg)

## Usage[​](#usage "Direct link to Usage")

See [API reference](/docs/api.md#googlelogobuttonprops) for props.

```tsx
import { GoogleLogoButton } from '@react-native-google-signin/google-signin';

function SignInScreen() {
  return (
    <GoogleLogoButton
      onPress={() => {
        // Handle sign in
      }}
      label="Sign in with Google"
      textStyle={{ fontFamily: 'Roboto' }}
    />
  );
}

```

## Font Requirements[​](#font-requirements "Direct link to Font Requirements")

The button should render its label using the [Roboto font](https://fonts.google.com/specimen/Roboto) with weight of 500 to match Google's branding guidelines. Make sure to:

1. Include the Roboto font in your app (see [example for Expo](https://docs.expo.dev/versions/latest/sdk/font/#example-appjson-with-config-plugin)).
2. Provide the font family in the `textStyle` prop:

```tsx
<GoogleLogoButton textStyle={{ fontFamily: 'Roboto' }} />

```
