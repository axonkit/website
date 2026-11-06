---
title: "VideoPreset"
---

Defined in: [client-sdk-js/src/track/options.ts:241](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L241)

Encapsulates a video resolution together with its target encoding
parameters. Used for simulcast layers and default presets.

## Constructors

### Constructor

```ts
new VideoPreset(options): VideoPreset;
```

Defined in: [client-sdk-js/src/track/options.ts:247](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L247)

#### Parameters

##### options

[`VideoPresetOptions`](../interfaces/VideoPresetOptions)

#### Returns

`VideoPreset`

### Constructor

```ts
new VideoPreset(
   width, 
   height, 
   maxBitrate, 
   maxFramerate?, 
   priority?
): VideoPreset;
```

Defined in: [client-sdk-js/src/track/options.ts:248](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L248)

#### Parameters

##### width

`number`

##### height

`number`

##### maxBitrate

`number`

##### maxFramerate?

`number`

##### priority?

`RTCPriorityType`

#### Returns

`VideoPreset`

## Properties

### aspectRatio?

```ts
aspectRatio?: number;
```

Defined in: [client-sdk-js/src/track/options.ts:245](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L245)

***

### encoding

```ts
encoding: VideoEncoding;
```

Defined in: [client-sdk-js/src/track/options.ts:242](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L242)

***

### height

```ts
height: number;
```

Defined in: [client-sdk-js/src/track/options.ts:244](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L244)

***

### width

```ts
width: number;
```

Defined in: [client-sdk-js/src/track/options.ts:243](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L243)

## Accessors

### resolution

#### Get Signature

```ts
get resolution(): VideoResolution;
```

Defined in: [client-sdk-js/src/track/options.ts:286](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L286)

Convenience getter that returns a [VideoResolution](../interfaces/VideoResolution) from this preset.

##### Returns

[`VideoResolution`](../interfaces/VideoResolution)
