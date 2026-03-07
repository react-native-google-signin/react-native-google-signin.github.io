# Web setup guide

The web implementation doesn't depend on React Native (or React Native Web). That means you can use it even with regular web apps created with NextJS, Vite and etc.

<!-- -->

tip

The functionality covered in this page is available in the licensed version. [You can get a license here](https://universal-sign-in.com/#pricing) ⭐️.

On the web, you need to load the Google Client Library and make it available in the browser **before** calling any of the APIs exposed by this package.

There are different ways to load the client script. Some of them are:

<!-- -->

* Next.js
* Simple html
* useEffect

```tsx
import Script from 'next/script';

<Script
  src="https://accounts.google.com/gsi/client"
  strategy="lazyOnload"
  onLoad={() => {
    // present the sign in popup
  }}
/>;

```

[See here](https://developers.google.com/identity/gsi/web/guides/client-library)

```tsx
useEffect(() => {
  const scriptTag = document.createElement('script');
  scriptTag.src = 'https://accounts.google.com/gsi/client';
  scriptTag.async = true;
  scriptTag.onload = () => {
    setLoaded(true);
  };
  scriptTag.onerror = () => {
    console.error('Failed to load Google script');
  };

  document.body.appendChild(scriptTag);
}, []);

```

After the script is loaded, you can call the functions for signing in and render the [`WebGoogleSigninButton`](/docs/buttons/web.md).

If you call any of the module functions before the client library is loaded, such calls trigger the [`onError` callback](/docs/api.md#webonetapsignincallbacks) with the [`PLAY_SERVICES_NOT_AVAILABLE` error code](/docs/errors.md#status-codes).

You can read the official docs for loading the Client Library [here](https://developers.google.com/identity/gsi/web/guides/client-library).

## Usage[​](#usage "Direct link to Usage")

See [here](/docs/web-support.md#usage).
