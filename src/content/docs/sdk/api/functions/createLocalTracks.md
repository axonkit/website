---
title: "createLocalTracks"
---

```ts
function createLocalTracks(options?): Promise<LocalTrack[]>;
```

Defined in: [client-sdk-js/src/track/create.ts:55](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/create.ts#L55)

Create local audio and video tracks with the given options.

## Parameters

### options?

[`CreateLocalTracksOptions`](../interfaces/CreateLocalTracksOptions) = `...`

Capture options for audio and video. Defaults to
  `{ audio: true, video: true }`.

## Returns

`Promise`\<[`LocalTrack`](../classes/LocalTrack)[]\>

An array of created local tracks.
