---
title: "AdaptiveStreamSettings"
---

Defined in: [client-sdk-js/src/room/options.ts:17](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/options.ts#L17)

Configuration for the adaptive stream feature. When enabled the SDK
automatically manages video subscription quality based on element
visibility and dimensions.

## Properties

### pauseVideoInBackground?

```ts
pauseVideoInBackground?: boolean;
```

Defined in: [client-sdk-js/src/room/options.ts:31](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/options.ts#L31)

Pause video subscriptions when the browser tab is hidden.

#### Default Value

`true`

***

### pixelDensity?

```ts
pixelDensity?: number | "screen";
```

Defined in: [client-sdk-js/src/room/options.ts:24](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/options.ts#L24)

Pixel density to use when computing the required video resolution.
Set to `'screen'` to use `window.devicePixelRatio`.

#### Default Value

`1`
