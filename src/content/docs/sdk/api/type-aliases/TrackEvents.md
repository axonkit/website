---
title: "TrackEvents"
---

```ts
type TrackEvents = object;
```

Defined in: [client-sdk-js/src/track/Track.ts:5](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L5)

## Properties

### audioPlaybackFailed

```ts
audioPlaybackFailed: (error?) => void;
```

Defined in: [client-sdk-js/src/track/Track.ts:12](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L12)

#### Parameters

##### error?

`Error`

#### Returns

`void`

***

### audioPlaybackStarted

```ts
audioPlaybackStarted: () => void;
```

Defined in: [client-sdk-js/src/track/Track.ts:11](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L11)

#### Returns

`void`

***

### audioSilenceDetected

```ts
audioSilenceDetected: () => void;
```

Defined in: [client-sdk-js/src/track/Track.ts:19](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L19)

#### Returns

`void`

***

### elementAttached

```ts
elementAttached: (element) => void;
```

Defined in: [client-sdk-js/src/track/Track.ts:9](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L9)

#### Parameters

##### element

`HTMLMediaElement`

#### Returns

`void`

***

### elementDetached

```ts
elementDetached: (element) => void;
```

Defined in: [client-sdk-js/src/track/Track.ts:10](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L10)

#### Parameters

##### element

`HTMLMediaElement`

#### Returns

`void`

***

### ended

```ts
ended: (track) => void;
```

Defined in: [client-sdk-js/src/track/Track.ts:8](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L8)

#### Parameters

##### track

[`Track`](../classes/Track)

#### Returns

`void`

***

### muted

```ts
muted: (track) => void;
```

Defined in: [client-sdk-js/src/track/Track.ts:6](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L6)

#### Parameters

##### track

[`Track`](../classes/Track)

#### Returns

`void`

***

### streamStateChanged

```ts
streamStateChanged: (track, streamState) => void;
```

Defined in: [client-sdk-js/src/track/Track.ts:20](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L20)

#### Parameters

##### track

[`Track`](../classes/Track)

##### streamState

[`StreamState`](../enumerations/StreamState)

#### Returns

`void`

***

### timeSyncUpdate

```ts
timeSyncUpdate: (update) => void;
```

Defined in: [client-sdk-js/src/track/Track.ts:21](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L21)

#### Parameters

##### update

###### rtpTimestamp

`number`

###### timestamp

`number`

#### Returns

`void`

***

### unmuted

```ts
unmuted: (track) => void;
```

Defined in: [client-sdk-js/src/track/Track.ts:7](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L7)

#### Parameters

##### track

[`Track`](../classes/Track)

#### Returns

`void`

***

### upstreamPaused

```ts
upstreamPaused: (track) => void;
```

Defined in: [client-sdk-js/src/track/Track.ts:15](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L15)

#### Parameters

##### track

[`Track`](../classes/Track)

#### Returns

`void`

***

### upstreamResumed

```ts
upstreamResumed: (track) => void;
```

Defined in: [client-sdk-js/src/track/Track.ts:16](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L16)

#### Parameters

##### track

[`Track`](../classes/Track)

#### Returns

`void`

***

### videoDimensionsChanged

```ts
videoDimensionsChanged: (dimensions, track) => void;
```

Defined in: [client-sdk-js/src/track/Track.ts:18](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L18)

#### Parameters

##### dimensions

[`TrackDimensions`](../interfaces/TrackDimensions)

##### track

[`Track`](../classes/Track)

#### Returns

`void`

***

### videoPlaybackFailed

```ts
videoPlaybackFailed: (error?) => void;
```

Defined in: [client-sdk-js/src/track/Track.ts:14](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L14)

#### Parameters

##### error?

`Error`

#### Returns

`void`

***

### videoPlaybackStarted

```ts
videoPlaybackStarted: () => void;
```

Defined in: [client-sdk-js/src/track/Track.ts:13](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L13)

#### Returns

`void`

***

### visibilityChanged

```ts
visibilityChanged: (visible, track) => void;
```

Defined in: [client-sdk-js/src/track/Track.ts:17](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L17)

#### Parameters

##### visible

`boolean`

##### track

[`Track`](../classes/Track)

#### Returns

`void`
