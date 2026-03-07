# WebGoogleSigninButton

This is the sign-in button that you can use in web apps. It renders `null` when used in native apps. It has a slightly different API than the native `GoogleSigninButton` component which is why it exists as a separate component.

<!-- -->

tip

The functionality covered in this page is available in the licensed version. [You can get a license here](https://universal-sign-in.com/#pricing) ⭐️.

The button will *not render* before the [Google Client API has been loaded](/docs/setting-up/web.md). You can use the `onError` prop to detect this case.

### Usage[​](#usage "Direct link to Usage")

As the Universal sign in Guide explains, there are two ways to sign in on the web: using the One-tap UI or using the Google Sign-In button.

One-tap UI may not always be available: This happens if user has [opted out](https://developers.google.com/identity/gsi/web/guides/features#globally_opt_out) or when they close the dialog several times in a row, entering the [cooldown period](https://developers.google.com/identity/gsi/web/guides/features#exponential_cooldown).

The Google Sign-In button serves as a fallback. Tapping it opens the regular Google Sign-In dialog.

```tsx
import { WebGoogleSigninButton } from '@react-native-google-signin/google-signin';

<WebGoogleSigninButton />;

```

## Props[​](#props "Direct link to Props")

All props are optional.

| Name             | Type                                                                  | Description                                                               |
| ---------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `type?`          | `"standard"` \| `"icon"`                                              | The type of the sign-in button.                                           |
| `theme?`         | `"outline"` \| `"filled_blue"` \| `"filled_black"`                    | The theme of the sign-in button.                                          |
| `size?`          | `"large"` \| `"medium"` \| `"small"`                                  | The size of the sign-in button.                                           |
| `text?`          | `"signin_with"` \| `"signup_with"` \| `"continue_with"` \| `"signin"` | The text to display on the sign-in button.                                |
| `shape?`         | `"rectangular"` \| `"pill"` \| `"circle"` \| `"square"`               | The shape of the sign-in button.                                          |
| `width?`         | `number`                                                              | The width of the sign-in button.                                          |
| `locale?`        | `string`                                                              | The locale for the sign-in button.                                        |
| `logoAlignment?` | `"left"` \| `"center"`                                                | The alignment of the logo on the button.                                  |
| `onError?`       | `(error: Error) => void`                                              | Called when you try to render the button before the Client SDK is loaded. |
