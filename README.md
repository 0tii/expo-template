## React Native Expo App Template with Typescript, NativeWind and Jest

App template using React Native with Expo, Expo App-Router, Typescript, NativeWind and Jest.

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
