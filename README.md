## React Native Expo App Template with Typescript, NativeWind and Jest

App template using React Native with Expo, Expo App-Router, Typescript, NativeWind and Jest with an opinionated directory structure and some preconfigured bloat.

## Installation

1. Clone this repository
2. Run `npm i`
3. copy `.env.dist` to `.env`
4. check output for Prettier error, if it can't find the `.prettierrc`, add this line to `.vscode/settings.json`:

```json
"prettier.configPath": ".prettierrc"
```

## Running your app

With yarn:

1. Run `yarn start` to start your Expo app
2. Use the `--web` flag to test your app in the browser

With npm:

1. Run `npm run start` to start your Expo app
2. Use the `--web` flag to test your app in the browser

Developing in WSL or container:

1. use `npm run start:tunnel` instead

Test on an iOS device:

1. Download the Expo Go app
2. Scan the QR code generated with the `start` command from above with your camera app and follow the link to open the app on your device

## Upgrading Expo

1. Upgrade Expo SDK `npm install expo@latest`
2. Upgrade dependencies `npx expo install --fix`

_Refer to [documentation ](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/)for further guidance_

## Dependencies

### ESLint

ESLint is provided in a bare-bones configuration and can be easily extended.

### NativeWind

NativeWind is provided and configured in v2, working in mobile and web. Some workarounds had to be implemented to make it work for web. V2 was used as v4 is currently prone to breaking, so waiting for a stable v4 is crucial (and v2 is feature-complete enough).

### MaskedView

MaskedView is installed to provide alpha masking with gradients (see Tab Header on mobile or `<GradientText>`). MaskedView is [not supported](https://docs.expo.dev/versions/latest/sdk/masked-view/) on Web!

### ExpoLinearGradient

ExpoLinearGradient is installed to provide linear gradients that can be masked over text using MaskedView. In the future this can be improved with `reanimated`.
