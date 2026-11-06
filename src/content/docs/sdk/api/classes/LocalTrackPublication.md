---
title: "LocalTrackPublication"
---

Defined in: [client-sdk-js/src/participant/LocalTrackPublication.ts:11](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalTrackPublication.ts#L11)

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

### options?

```ts
options?: TrackPublishOptions;
```

Defined in: [client-sdk-js/src/participant/LocalTrackPublication.ts:16](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalTrackPublication.ts#L16)

The options used when publishing the track.

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

### isEnabled

#### Get Signature

```ts
get isEnabled(): boolean;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:84](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L84)

Whether the track is enabled (not muted).

##### Returns

`boolean`

#### Inherited from

[`TrackPublication`](TrackPublication).[`isEnabled`](TrackPublication#isenabled)

***

### isLocal

#### Get Signature

```ts
get isLocal(): boolean;
```

Defined in: [client-sdk-js/src/participant/LocalTrackPublication.ts:35](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalTrackPublication.ts#L35)

Whether this publication belongs to the local participant.

##### Returns

`boolean`

#### Overrides

[`TrackPublication`](TrackPublication).[`isLocal`](TrackPublication#islocal)

***

### isMuted

#### Get Signature

```ts
get isMuted(): boolean;
```

Defined in: [client-sdk-js/src/participant/LocalTrackPublication.ts:39](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalTrackPublication.ts#L39)

Whether the track is muted.

##### Returns

`boolean`

#### Overrides

[`TrackPublication`](TrackPublication).[`isMuted`](TrackPublication#ismuted)

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

#### Inherited from

[`TrackPublication`](TrackPublication).[`isSubscribed`](TrackPublication#issubscribed)

***

### isUpstreamPaused

#### Get Signature

```ts
get isUpstreamPaused(): boolean;
```

Defined in: [client-sdk-js/src/participant/LocalTrackPublication.ts:48](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalTrackPublication.ts#L48)

Whether upstream publishing is paused for this track.

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

#### Inherited from

[`TrackPublication`](TrackPublication).[`videoTrack`](TrackPublication#videotrack)

## Methods

### getTrackFeatures()

```ts
getTrackFeatures(): AudioTrackFeature[];
```

Defined in: [client-sdk-js/src/participant/LocalTrackPublication.ts:89](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalTrackPublication.ts#L89)

Returns a list of audio track features detected from the current track settings.
Only applicable to audio tracks.

#### Returns

[`AudioTrackFeature`](../enumerations/AudioTrackFeature)[]

***

### mute()

```ts
mute(): void;
```

Defined in: [client-sdk-js/src/participant/LocalTrackPublication.ts:53](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalTrackPublication.ts#L53)

Mute the track associated with this publication.

#### Returns

`void`

***

### pauseUpstream()

```ts
pauseUpstream(): Promise<void>;
```

Defined in: [client-sdk-js/src/participant/LocalTrackPublication.ts:74](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalTrackPublication.ts#L74)

Pause publishing to the server without disabling the local MediaStreamTrack.

#### Returns

`Promise`\<`void`\>

***

### resumeUpstream()

```ts
resumeUpstream(): Promise<void>;
```

Defined in: [client-sdk-js/src/participant/LocalTrackPublication.ts:81](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalTrackPublication.ts#L81)

Resume publishing after a call to [pauseUpstream](#pauseupstream).

#### Returns

`Promise`\<`void`\>

***

### unmute()

```ts
unmute(): void;
```

Defined in: [client-sdk-js/src/participant/LocalTrackPublication.ts:63](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalTrackPublication.ts#L63)

Unmute the track associated with this publication.

#### Returns

`void`
