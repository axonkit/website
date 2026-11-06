---
title: "ScreenShareCaptureOptions"
---

Defined in: [client-sdk-js/src/track/options.ts:126](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L126)

Options for capturing a screen share.

## Properties

### audio?

```ts
audio?: boolean | AudioCaptureOptions;
```

Defined in: [client-sdk-js/src/track/options.ts:133](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L133)

`true` to capture audio shared alongside the screen. Browser support for
audio capturing in screen share is limited.

#### See

https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia#browser_compatibility

***

### contentHint?

```ts
contentHint?: "detail" | "text" | "motion";
```

Defined in: [client-sdk-js/src/track/options.ts:175](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L175)

Specify the type of content.

#### See

https://www.w3.org/TR/mst-content-hint/#video-content-hints

***

### controller?

```ts
controller?: unknown;
```

Defined in: [client-sdk-js/src/track/options.ts:197](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L197)

A CaptureController instance for further manipulation of the capture
session if included.

***

### frameRate?

```ts
frameRate?: number;
```

Defined in: [client-sdk-js/src/track/options.ts:150](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L150)

Target frame rate for the screen share capture.

***

### preferCurrentTab?

```ts
preferCurrentTab?: boolean;
```

Defined in: [client-sdk-js/src/track/options.ts:191](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L191)

**`Experimental`**

Instructs the browser to offer the current tab as the most prominent
capture source.

#### See

https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia#prefercurrenttab

***

### resolution?

```ts
resolution?: VideoResolution;
```

Defined in: [client-sdk-js/src/track/options.ts:145](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L145)

Capture resolution. Defaults to 1080 for most browsers.

***

### selfBrowserSurface?

```ts
selfBrowserSurface?: "include" | "exclude";
```

Defined in: [client-sdk-js/src/track/options.ts:156](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L156)

Specifies whether the browser should allow the user to select the
current tab for capture.

***

### suppressLocalAudioPlayback?

```ts
suppressLocalAudioPlayback?: boolean;
```

Defined in: [client-sdk-js/src/track/options.ts:182](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L182)

**`Experimental`**

Controls whether the audio playing in a tab will continue to be played
out of a user's local speakers when the tab is captured.

***

### surfaceSwitching?

```ts
surfaceSwitching?: "include" | "exclude";
```

Defined in: [client-sdk-js/src/track/options.ts:162](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L162)

Specifies whether the browser should display a control to allow the user
to dynamically switch the shared tab during screen-sharing.

***

### systemAudio?

```ts
systemAudio?: "include" | "exclude";
```

Defined in: [client-sdk-js/src/track/options.ts:168](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L168)

Specifies whether the browser should include the system audio among the
possible audio sources offered to the user.

***

### video?

```ts
video?: 
  | true
  | {
  displaySurface?: "window" | "browser" | "monitor";
};
```

Defined in: [client-sdk-js/src/track/options.ts:140](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L140)

`true` to capture video. Chrome allows additional options.

#### See

https://developer.chrome.com/docs/web-platform/screen-sharing-controls/#displaySurface
