---
title: "createLocalAudioTrack"
---

```ts
function createLocalAudioTrack(options?): Promise<LocalAudioTrack>;
```

Defined in: [client-sdk-js/src/track/create.ts:82](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/create.ts#L82)

Create a local audio track from the microphone.

## Parameters

### options?

[`AudioCaptureOptions`](../interfaces/AudioCaptureOptions)

Audio capture options. Uses defaults when omitted.

## Returns

`Promise`\<[`LocalAudioTrack`](../classes/LocalAudioTrack)\>
