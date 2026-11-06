---
title: "TrackPublication"
---

Defined in: [client-sdk-js/src/participant/Participant.ts:36](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L36)

## Extended by

- [`LocalTrackPublication`](LocalTrackPublication)
- [`RemoteTrackPublication`](RemoteTrackPublication)

## Constructors

### Constructor

```ts
new TrackPublication(init): TrackPublication;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:54](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L54)

#### Parameters

##### init

###### info?

[`TrackInfo`](../interfaces/TrackInfo)

###### kind

`string`

###### muted

`boolean`

###### source

[`TrackSource`](../enumerations/TrackSource)

###### track?

[`Track`](Track)

###### trackName

`string`

###### trackSid

`string`

#### Returns

`TrackPublication`

## Properties

### dimensions?

```ts
dimensions?: object;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:52](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L52)

Original video dimensions from the publisher.

#### height

```ts
height: number;
```

#### width

```ts
width: number;
```

***

### info?

```ts
info?: TrackInfo;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:43](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L43)

***

### kind

```ts
kind: string;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:39](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L39)

***

### mimeType?

```ts
mimeType?: string;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:46](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L46)

MIME type of the track (e.g. `video/VP8`, `audio/opus`).

***

### muted

```ts
muted: boolean;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:42](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L42)

***

### simulcasted?

```ts
simulcasted?: boolean;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:49](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L49)

Whether the track was published with simulcast.

***

### source

```ts
source: TrackSource;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:40](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L40)

***

### track?

```ts
track?: Track;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:41](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L41)

***

### trackName

```ts
trackName: string;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:38](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L38)

***

### trackSid

```ts
trackSid: string;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:37](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L37)

## Accessors

### audioTrack

#### Get Signature

```ts
get audioTrack(): 
  | LocalAudioTrack
  | RemoteAudioTrack
  | undefined;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:94](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L94)

Type-safe audio track getter. Returns `undefined` if the track is video.

##### Returns

  \| [`LocalAudioTrack`](LocalAudioTrack)
  \| [`RemoteAudioTrack`](RemoteAudioTrack)
  \| `undefined`

***

### isEnabled

#### Get Signature

```ts
get isEnabled(): boolean;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:84](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L84)

Whether the track is enabled (not muted).

##### Returns

`boolean`

***

### isLocal

#### Get Signature

```ts
get isLocal(): boolean;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:110](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L110)

Whether this publication belongs to the local participant.

##### Returns

`boolean`

***

### isMuted

#### Get Signature

```ts
get isMuted(): boolean;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:89](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L89)

Whether the track is muted.

##### Returns

`boolean`

***

### isSubscribed

#### Get Signature

```ts
get isSubscribed(): boolean;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:79](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L79)

Whether the track is subscribed (i.e. a concrete [Track](Track) is available).

##### Returns

`boolean`

***

### videoTrack

#### Get Signature

```ts
get videoTrack(): 
  | LocalVideoTrack
  | RemoteVideoTrack
  | undefined;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:102](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L102)

Type-safe video track getter. Returns `undefined` if the track is audio.

##### Returns

  \| [`LocalVideoTrack`](LocalVideoTrack)
  \| [`RemoteVideoTrack`](RemoteVideoTrack)
  \| `undefined`
