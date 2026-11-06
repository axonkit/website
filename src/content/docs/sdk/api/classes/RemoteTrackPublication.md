---
title: "RemoteTrackPublication"
---

Defined in: [client-sdk-js/src/participant/RemoteTrackPublication.ts:11](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/RemoteTrackPublication.ts#L11)

## Extends

- [`TrackPublication`](TrackPublication)

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

#### Inherited from

[`TrackPublication`](TrackPublication).[`dimensions`](TrackPublication#dimensions)

***

### info?

```ts
info?: TrackInfo;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:43](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L43)

#### Inherited from

[`TrackPublication`](TrackPublication).[`info`](TrackPublication#info)

***

### kind

```ts
kind: string;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:39](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L39)

#### Inherited from

[`TrackPublication`](TrackPublication).[`kind`](TrackPublication#kind)

***

### mimeType?

```ts
mimeType?: string;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:46](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L46)

MIME type of the track (e.g. `video/VP8`, `audio/opus`).

#### Inherited from

[`TrackPublication`](TrackPublication).[`mimeType`](TrackPublication#mimetype)

***

### muted

```ts
muted: boolean;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:42](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L42)

#### Inherited from

[`TrackPublication`](TrackPublication).[`muted`](TrackPublication#muted)

***

### simulcasted?

```ts
simulcasted?: boolean;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:49](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L49)

Whether the track was published with simulcast.

#### Inherited from

[`TrackPublication`](TrackPublication).[`simulcasted`](TrackPublication#simulcasted)

***

### source

```ts
source: TrackSource;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:40](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L40)

#### Inherited from

[`TrackPublication`](TrackPublication).[`source`](TrackPublication#source)

***

### streamState

```ts
streamState: StreamState = StreamState.Active;
```

Defined in: [client-sdk-js/src/participant/RemoteTrackPublication.ts:12](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/RemoteTrackPublication.ts#L12)

***

### track?

```ts
track?: Track;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:41](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L41)

#### Inherited from

[`TrackPublication`](TrackPublication).[`track`](TrackPublication#track)

***

### trackName

```ts
trackName: string;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:38](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L38)

#### Inherited from

[`TrackPublication`](TrackPublication).[`trackName`](TrackPublication#trackname)

***

### trackSid

```ts
trackSid: string;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:37](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L37)

#### Inherited from

[`TrackPublication`](TrackPublication).[`trackSid`](TrackPublication#tracksid)

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

#### Inherited from

[`TrackPublication`](TrackPublication).[`audioTrack`](TrackPublication#audiotrack)

***

### isDesired

#### Get Signature

```ts
get isDesired(): boolean;
```

Defined in: [client-sdk-js/src/participant/RemoteTrackPublication.ts:59](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/RemoteTrackPublication.ts#L59)

Returns `true` if the client wants to subscribe to this track.

##### Returns

`boolean`

***

### isEnabled

#### Get Signature

```ts
get isEnabled(): boolean;
```

Defined in: [client-sdk-js/src/participant/RemoteTrackPublication.ts:76](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/RemoteTrackPublication.ts#L76)

Whether the server is enabled to send data for this track.

##### Returns

`boolean`

#### Overrides

[`TrackPublication`](TrackPublication).[`isEnabled`](TrackPublication#isenabled)

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

#### Inherited from

[`TrackPublication`](TrackPublication).[`isLocal`](TrackPublication#islocal)

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

#### Inherited from

[`TrackPublication`](TrackPublication).[`isMuted`](TrackPublication#ismuted)

***

### isSubscribed

#### Get Signature

```ts
get isSubscribed(): boolean;
```

Defined in: [client-sdk-js/src/participant/RemoteTrackPublication.ts:53](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/RemoteTrackPublication.ts#L53)

Whether this track is currently subscribed.

##### Returns

`boolean`

#### Overrides

[`TrackPublication`](TrackPublication).[`isSubscribed`](TrackPublication#issubscribed)

***

### subscriptionStatus

#### Get Signature

```ts
get subscriptionStatus(): SubscriptionStatus;
```

Defined in: [client-sdk-js/src/participant/RemoteTrackPublication.ts:64](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/RemoteTrackPublication.ts#L64)

Current subscription status.

##### Returns

[`SubscriptionStatus`](../enumerations/SubscriptionStatus)

***

### videoQuality

#### Get Signature

```ts
get videoQuality(): VideoQuality | undefined;
```

Defined in: [client-sdk-js/src/participant/RemoteTrackPublication.ts:71](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/RemoteTrackPublication.ts#L71)

The currently requested video quality.

##### Returns

[`VideoQuality`](../enumerations/VideoQuality) \| `undefined`

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

#### Inherited from

[`TrackPublication`](TrackPublication).[`videoTrack`](TrackPublication#videotrack)

## Methods

### setEnabled()

```ts
setEnabled(enabled): void;
```

Defined in: [client-sdk-js/src/participant/RemoteTrackPublication.ts:84](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/RemoteTrackPublication.ts#L84)

Enable or disable the server from sending data for this track.
Useful when a track is off-screen.

#### Parameters

##### enabled

`boolean`

#### Returns

`void`

***

### setSubscribed()

```ts
setSubscribed(subscribed): void;
```

Defined in: [client-sdk-js/src/participant/RemoteTrackPublication.ts:110](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/RemoteTrackPublication.ts#L110)

Control whether the subscription for this track is desired.
When set to `false`, the server will stop sending media for this track.

#### Parameters

##### subscribed

`boolean`

#### Returns

`void`

***

### setVideoDimensions()

```ts
setVideoDimensions(dimensions): void;
```

Defined in: [client-sdk-js/src/participant/RemoteTrackPublication.ts:150](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/RemoteTrackPublication.ts#L150)

Explicitly set the desired video dimensions for this track.
Maps to spatialLayer using [TrackInfo](../interfaces/TrackInfo) width/height as the high layer
and typical simulcast factors (1/2, 1/4) when layer metadata is not on the wire.

#### Parameters

##### dimensions

###### height

`number`

###### width

`number`

#### Returns

`void`

***

### setVideoFPS()

```ts
setVideoFPS(fps): void;
```

Defined in: [client-sdk-js/src/participant/RemoteTrackPublication.ts:167](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/RemoteTrackPublication.ts#L167)

Set the desired video FPS for this subscription.
In simulcast and SVC scenarios, fps controls the temporal layer.

#### Parameters

##### fps

`number`

#### Returns

`void`

***

### setVideoQuality()

```ts
setVideoQuality(quality): void;
```

Defined in: [client-sdk-js/src/participant/RemoteTrackPublication.ts:138](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/RemoteTrackPublication.ts#L138)

Set the preferred video quality for this subscription.
Only applicable to video tracks.

#### Parameters

##### quality

[`VideoQuality`](../enumerations/VideoQuality)

#### Returns

`void`
