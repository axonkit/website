---
title: "createAudioAnalyser"
---

```ts
function createAudioAnalyser(track, options?): object;
```

Defined in: [client-sdk-js/src/utils/browser.ts:289](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/browser.ts#L289)

Create a Web Audio `AnalyserNode` connected to a track's audio.
Returns the analyser and a cleanup function.

## Parameters

### track

[`Track`](../classes/Track)

### options?

[`AudioAnalyserOptions`](../interfaces/AudioAnalyserOptions)

## Returns

`object`

### analyser

```ts
analyser: AnalyserNode;
```

### cleanup

```ts
cleanup: () => void;
```

#### Returns

`void`
