---
title: "LocalAudioTrack"
---

Defined in: [client-sdk-js/src/track/LocalAudioTrack.ts:8](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalAudioTrack.ts#L8)

A typed wrapper over Node's `EventEmitter`.

Extends `EventEmitter` with `declare` overrides so that `emit`, `on`,
`off`, etc. are type-safe without introducing circular-reference issues
that arise when using `typed-emitter` directly in `extends` clauses
whose event maps reference the class itself.

Runtime behaviour is 100% `EventEmitter`; this class adds zero runtime
code.

## Extends

- [`LocalTrack`](LocalTrack)

## Constructors

### Constructor

```ts
new LocalAudioTrack(mediaStreamTrack, constraints?): LocalAudioTrack;
```

Defined in: [client-sdk-js/src/track/LocalAudioTrack.ts:25](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalAudioTrack.ts#L25)

#### Parameters

##### mediaStreamTrack

`MediaStreamTrack`

##### constraints?

`MediaTrackConstraints`

#### Returns

`LocalAudioTrack`

#### Overrides

[`LocalTrack`](LocalTrack).[`constructor`](LocalTrack#constructor)

## Properties

### \_currentBitrate

```ts
protected _currentBitrate: number = 0;
```

Defined in: [client-sdk-js/src/track/Track.ts:43](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L43)

#### Inherited from

[`LocalTrack`](LocalTrack).[`_currentBitrate`](LocalTrack#_currentbitrate)

***

### \_isMuted

```ts
protected _isMuted: boolean = false;
```

Defined in: [client-sdk-js/src/track/Track.ts:37](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L37)

#### Inherited from

[`LocalTrack`](LocalTrack).[`_isMuted`](LocalTrack#_ismuted)

***

### \_mediaStreamTrack

```ts
protected _mediaStreamTrack: MediaStreamTrack;
```

Defined in: [client-sdk-js/src/track/Track.ts:31](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L31)

#### Inherited from

[`LocalTrack`](LocalTrack).[`_mediaStreamTrack`](LocalTrack#_mediastreamtrack)

***

### \_prevBytes

```ts
protected _prevBytes: number = 0;
```

Defined in: [client-sdk-js/src/track/Track.ts:47](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L47)

Previous byte count from the last monitor sample.

#### Inherited from

[`LocalTrack`](LocalTrack).[`_prevBytes`](LocalTrack#_prevbytes)

***

### \_prevStatsTime

```ts
protected _prevStatsTime: number = 0;
```

Defined in: [client-sdk-js/src/track/Track.ts:48](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L48)

#### Inherited from

[`LocalTrack`](LocalTrack).[`_prevStatsTime`](LocalTrack#_prevstatstime)

***

### \_processor?

```ts
protected _processor?: TrackProcessor<TrackKind>;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:22](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L22)

#### Inherited from

[`LocalTrack`](LocalTrack).[`_processor`](LocalTrack#_processor)

***

### addListener

```ts
addListener: <E>(event, listener) => this;
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:37](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L37)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

##### listener

`E` *extends* keyof [`TrackEvents`](../type-aliases/TrackEvents) ? [`TrackEvents`](../type-aliases/TrackEvents)\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`LocalTrack`](LocalTrack).[`addListener`](LocalTrack#addlistener)

***

### attachedElements

```ts
attachedElements: HTMLMediaElement[] = [];
```

Defined in: [client-sdk-js/src/track/Track.ts:41](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L41)

#### Inherited from

[`LocalTrack`](LocalTrack).[`attachedElements`](LocalTrack#attachedelements)

***

### emit

```ts
emit: <E>(event, ...args) => boolean;
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:17](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L17)

#### Type Parameters

##### E

`E` *extends* 
  \| [`Muted`](../enumerations/TrackEvent#muted)
  \| [`Unmuted`](../enumerations/TrackEvent#unmuted)
  \| [`Ended`](../enumerations/TrackEvent#ended)
  \| [`ElementAttached`](../enumerations/TrackEvent#elementattached)
  \| [`ElementDetached`](../enumerations/TrackEvent#elementdetached)
  \| [`AudioPlaybackStarted`](../enumerations/TrackEvent#audioplaybackstarted)
  \| [`AudioPlaybackFailed`](../enumerations/TrackEvent#audioplaybackfailed)
  \| [`VideoPlaybackStarted`](../enumerations/TrackEvent#videoplaybackstarted)
  \| [`VideoPlaybackFailed`](../enumerations/TrackEvent#videoplaybackfailed)
  \| [`VisibilityChanged`](../enumerations/TrackEvent#visibilitychanged)
  \| [`VideoDimensionsChanged`](../enumerations/TrackEvent#videodimensionschanged)
  \| [`UpstreamPaused`](../enumerations/TrackEvent#upstreampaused)
  \| [`UpstreamResumed`](../enumerations/TrackEvent#upstreamresumed)
  \| [`AudioSilenceDetected`](../enumerations/TrackEvent#audiosilencedetected)
  \| [`StreamStateChanged`](../enumerations/TrackEvent#streamstatechanged)
  \| [`TimeSyncUpdate`](../enumerations/TrackEvent#timesyncupdate)

#### Parameters

##### event

`E`

##### args

...`Parameters`\<[`TrackEvents`](../type-aliases/TrackEvents)\[`E`\]\>

#### Returns

`boolean`

#### Inherited from

[`LocalTrack`](LocalTrack).[`emit`](LocalTrack#emit)

***

### kind

```ts
kind: TrackKind;
```

Defined in: [client-sdk-js/src/track/Track.ts:27](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L27)

#### Inherited from

[`LocalTrack`](LocalTrack).[`kind`](LocalTrack#kind)

***

### listenerCount

```ts
listenerCount: (event) => number;
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:57](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L57)

#### Parameters

##### event

`string` \| `number`

#### Returns

`number`

#### Inherited from

[`LocalTrack`](LocalTrack).[`listenerCount`](LocalTrack#listenercount)

***

### listeners

```ts
listeners: <E>(event) => E extends keyof TrackEvents ? TrackEvents[E][] : ((...args) => void)[];
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:49](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L49)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

#### Returns

`E` *extends* keyof [`TrackEvents`](../type-aliases/TrackEvents) ? [`TrackEvents`](../type-aliases/TrackEvents)\[`E`\][] : ((...`args`) => `void`)[]

#### Inherited from

[`LocalTrack`](LocalTrack).[`listeners`](LocalTrack#listeners)

***

### monitorInterval?

```ts
protected monitorInterval?: number;
```

Defined in: [client-sdk-js/src/track/Track.ts:44](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L44)

#### Inherited from

[`LocalTrack`](LocalTrack).[`monitorInterval`](LocalTrack#monitorinterval)

***

### off

```ts
off: <E>(event, listener) => this;
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:32](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L32)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

##### listener

`E` *extends* keyof [`TrackEvents`](../type-aliases/TrackEvents) ? [`TrackEvents`](../type-aliases/TrackEvents)\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`LocalTrack`](LocalTrack).[`off`](LocalTrack#off)

***

### on

```ts
on: <E>(event, listener) => this;
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:22](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L22)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

##### listener

`E` *extends* keyof [`TrackEvents`](../type-aliases/TrackEvents) ? [`TrackEvents`](../type-aliases/TrackEvents)\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`LocalTrack`](LocalTrack).[`on`](LocalTrack#on)

***

### once

```ts
once: <E>(event, listener) => this;
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:27](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L27)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

##### listener

`E` *extends* keyof [`TrackEvents`](../type-aliases/TrackEvents) ? [`TrackEvents`](../type-aliases/TrackEvents)\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`LocalTrack`](LocalTrack).[`once`](LocalTrack#once)

***

### pauseUpstreamLock

```ts
protected pauseUpstreamLock: Mutex;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:35](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L35)

#### Inherited from

[`LocalTrack`](LocalTrack).[`pauseUpstreamLock`](LocalTrack#pauseupstreamlock)

***

### processorElement?

```ts
protected processorElement?: HTMLMediaElement;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:23](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L23)

#### Inherited from

[`LocalTrack`](LocalTrack).[`processorElement`](LocalTrack#processorelement)

***

### rawListeners

```ts
rawListeners: <E>(event) => E extends keyof TrackEvents ? TrackEvents[E][] : ((...args) => void)[];
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:53](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L53)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

#### Returns

`E` *extends* keyof [`TrackEvents`](../type-aliases/TrackEvents) ? [`TrackEvents`](../type-aliases/TrackEvents)\[`E`\][] : ((...`args`) => `void`)[]

#### Inherited from

[`LocalTrack`](LocalTrack).[`rawListeners`](LocalTrack#rawlisteners)

***

### removeAllListeners

```ts
removeAllListeners: (event?) => this;
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:47](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L47)

#### Parameters

##### event?

`string` \| `number`

#### Returns

`this`

#### Inherited from

[`LocalTrack`](LocalTrack).[`removeAllListeners`](LocalTrack#removealllisteners)

***

### removeListener

```ts
removeListener: <E>(event, listener) => this;
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:42](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L42)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

##### listener

`E` *extends* keyof [`TrackEvents`](../type-aliases/TrackEvents) ? [`TrackEvents`](../type-aliases/TrackEvents)\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`LocalTrack`](LocalTrack).[`removeListener`](LocalTrack#removelistener)

***

### sid?

```ts
sid?: string;
```

Defined in: [client-sdk-js/src/track/Track.ts:29](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L29)

#### Inherited from

[`LocalTrack`](LocalTrack).[`sid`](LocalTrack#sid)

***

### source

```ts
source: TrackSource;
```

Defined in: [client-sdk-js/src/track/Track.ts:28](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L28)

#### Inherited from

[`LocalTrack`](LocalTrack).[`source`](LocalTrack#source)

***

### stopOnMute

```ts
stopOnMute: boolean = false;
```

Defined in: [client-sdk-js/src/track/LocalAudioTrack.ts:14](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalAudioTrack.ts#L14)

When `true`, the underlying `MediaStreamTrack` is stopped when the track
is muted and restarted when unmuted. Useful for disabling the microphone
recording indicator on some platforms.

***

### trackChangeLock

```ts
protected trackChangeLock: Mutex;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:34](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L34)

#### Inherited from

[`LocalTrack`](LocalTrack).[`trackChangeLock`](LocalTrack#trackchangelock)

***

### defaultMaxListeners

```ts
static defaultMaxListeners: number;
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:5

#### Inherited from

[`LocalTrack`](LocalTrack).[`defaultMaxListeners`](LocalTrack#defaultmaxlisteners)

## Accessors

### constraints

#### Get Signature

```ts
get constraints(): MediaTrackConstraints | undefined;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:69](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L69)

Current capture constraints.

##### Returns

`MediaTrackConstraints` \| `undefined`

#### Inherited from

[`LocalTrack`](LocalTrack).[`constraints`](LocalTrack#constraints)

***

### currentBitrate

#### Get Signature

```ts
get currentBitrate(): number;
```

Defined in: [client-sdk-js/src/track/Track.ts:77](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L77)

Current bitrate in bits per second, updated by the monitor.

##### Returns

`number`

#### Inherited from

[`LocalTrack`](LocalTrack).[`currentBitrate`](LocalTrack#currentbitrate)

***

### dimensions

#### Get Signature

```ts
get dimensions(): TrackDimensions | undefined;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:77](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L77)

Video dimensions from the current track settings.
Returns `undefined` for audio tracks.

##### Returns

[`TrackDimensions`](../interfaces/TrackDimensions) \| `undefined`

#### Inherited from

[`LocalTrack`](LocalTrack).[`dimensions`](LocalTrack#dimensions)

***

### id

#### Get Signature

```ts
get id(): string;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:64](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L64)

The MediaStreamTrack id.

##### Returns

`string`

#### Inherited from

[`LocalTrack`](LocalTrack).[`id`](LocalTrack#id)

***

### isLocal

#### Get Signature

```ts
get isLocal(): boolean;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:59](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L59)

##### Returns

`boolean`

#### Inherited from

[`LocalTrack`](LocalTrack).[`isLocal`](LocalTrack#islocal)

***

### isMuted

#### Get Signature

```ts
get isMuted(): boolean;
```

Defined in: [client-sdk-js/src/track/Track.ts:88](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L88)

Whether the track is currently muted.
This reflects the publisher's intent and is independent of consumer
pause state or [streamState](Track#streamstate).

##### Returns

`boolean`

#### Inherited from

[`LocalTrack`](LocalTrack).[`isMuted`](LocalTrack#ismuted)

***

### isUpstreamPaused

#### Get Signature

```ts
get isUpstreamPaused(): boolean;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:85](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L85)

Whether upstream publishing has been paused via [pauseUpstream](LocalTrack#pauseupstream).

##### Returns

`boolean`

#### Inherited from

[`LocalTrack`](LocalTrack).[`isUpstreamPaused`](LocalTrack#isupstreampaused)

***

### isUserProvided

#### Get Signature

```ts
get isUserProvided(): boolean;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:90](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L90)

Whether the track was provided by the user (not managed by the SDK).

##### Returns

`boolean`

#### Inherited from

[`LocalTrack`](LocalTrack).[`isUserProvided`](LocalTrack#isuserprovided)

***

### mediaStreamTrack

#### Get Signature

```ts
get mediaStreamTrack(): MediaStreamTrack;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:55](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L55)

Returns the processed track if a processor is active, otherwise the
raw source track. Consumers should use this for playback and
publishing.

##### Returns

`MediaStreamTrack`

#### Inherited from

[`LocalTrack`](LocalTrack).[`mediaStreamTrack`](LocalTrack#mediastreamtrack)

***

### streamState

#### Get Signature

```ts
get streamState(): StreamState;
```

Defined in: [client-sdk-js/src/track/Track.ts:98](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L98)

The current stream state of the track.
[StreamState.Active](../enumerations/StreamState#active) means the server is actively forwarding media;
[StreamState.Paused](../enumerations/StreamState#paused) means the server has temporarily stopped forwarding (e.g. bandwidth limits).
This is separate from `isMuted`, which reflects the publisher's intent.

##### Returns

[`StreamState`](../enumerations/StreamState)

#### Inherited from

[`LocalTrack`](LocalTrack).[`streamState`](LocalTrack#streamstate)

## Methods

### addVisibilityListener()

```ts
addVisibilityListener(): void;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:471](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L471)

Start listening for visibility changes (should be called after publishing).

#### Returns

`void`

#### Inherited from

[`LocalTrack`](LocalTrack).[`addVisibilityListener`](LocalTrack#addvisibilitylistener)

***

### attach()

```ts
attach(element?): HTMLMediaElement;
```

Defined in: [client-sdk-js/src/track/Track.ts:156](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L156)

#### Parameters

##### element?

`HTMLMediaElement`

#### Returns

`HTMLMediaElement`

#### Inherited from

[`LocalTrack`](LocalTrack).[`attach`](LocalTrack#attach)

***

### detach()

```ts
detach(element?): HTMLMediaElement[];
```

Defined in: [client-sdk-js/src/track/Track.ts:199](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L199)

#### Parameters

##### element?

`HTMLMediaElement`

#### Returns

`HTMLMediaElement`[]

#### Inherited from

[`LocalTrack`](LocalTrack).[`detach`](LocalTrack#detach)

***

### detachEndedListener()

```ts
protected detachEndedListener(track): void;
```

Defined in: [client-sdk-js/src/track/Track.ts:72](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L72)

Detach the base-class 'ended' listener from the given track.

#### Parameters

##### track

`MediaStreamTrack`

#### Returns

`void`

#### Inherited from

[`LocalTrack`](LocalTrack).[`detachEndedListener`](LocalTrack#detachendedlistener)

***

### eventNames()

```ts
eventNames(): (string | number)[];
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:7

#### Returns

(`string` \| `number`)[]

#### Inherited from

[`LocalTrack`](LocalTrack).[`eventNames`](LocalTrack#eventnames)

***

### getDeviceId()

```ts
getDeviceId(): Promise<string | undefined>;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:267](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L267)

Get the device ID currently used by this track.

#### Returns

`Promise`\<`string` \| `undefined`\>

#### Inherited from

[`LocalTrack`](LocalTrack).[`getDeviceId`](LocalTrack#getdeviceid)

***

### getMaxListeners()

```ts
getMaxListeners(): number;
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:9

#### Returns

`number`

#### Inherited from

[`LocalTrack`](LocalTrack).[`getMaxListeners`](LocalTrack#getmaxlisteners)

***

### getProcessor()

```ts
getProcessor(): 
  | TrackProcessor<TrackKind>
  | undefined;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:105](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L105)

Returns the currently active processor, or `undefined`.

#### Returns

  \| [`TrackProcessor`](../interfaces/TrackProcessor)\<[`TrackKind`](../enumerations/TrackKind)\>
  \| `undefined`

#### Inherited from

[`LocalTrack`](LocalTrack).[`getProcessor`](LocalTrack#getprocessor)

***

### getRTCStatsReport()

```ts
getRTCStatsReport(): Promise<RTCStatsReport | undefined>;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:259](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L259)

Gets the RTCStatsReport for the underlying RTP sender.

#### Returns

`Promise`\<`RTCStatsReport` \| `undefined`\>

#### Inherited from

[`LocalTrack`](LocalTrack).[`getRTCStatsReport`](LocalTrack#getrtcstatsreport)

***

### getSourceTrackSettings()

```ts
getSourceTrackSettings(): MediaTrackSettings;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:114](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L114)

Returns the settings of the *original* source track, ignoring any
active processor.  Useful when you need the real capture resolution
or device info regardless of post-processing.

#### Returns

`MediaTrackSettings`

#### Inherited from

[`LocalTrack`](LocalTrack).[`getSourceTrackSettings`](LocalTrack#getsourcetracksettings)

***

### monitorStats()

```ts
protected monitorStats(
   getStats, 
   reportType, 
   bytesField
): Promise<void>;
```

Defined in: [client-sdk-js/src/track/Track.ts:130](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L130)

Samples RTP bytes from a stats report and updates [currentBitrate](Track#currentbitrate).
Shared by local (producer/outbound) and remote (consumer/inbound) tracks:
they only differ in which report type and byte field to read.

#### Parameters

##### getStats

() => `Promise`\<`RTCStatsReport`\> \| `undefined`

returns the underlying transport/producer/consumer stats,
                 or undefined when the source is already closed.

##### reportType

`string`

the RTC stats report type to aggregate (e.g. outbound-rtp).

##### bytesField

`string`

the byte field name on that report (e.g. bytesSent).

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`LocalTrack`](LocalTrack).[`monitorStats`](LocalTrack#monitorstats)

***

### mute()

```ts
mute(): Promise<void>;
```

Defined in: [client-sdk-js/src/track/LocalAudioTrack.ts:29](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalAudioTrack.ts#L29)

Mute the track (disables the MediaStreamTrack).

#### Returns

`Promise`\<`void`\>

#### Overrides

[`LocalTrack`](LocalTrack).[`mute`](LocalTrack#mute)

***

### onEnded()

```ts
protected onEnded(): void;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:129](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L129)

Hook fired when the underlying MediaStreamTrack ends.

#### Returns

`void`

#### Inherited from

[`LocalTrack`](LocalTrack).[`onEnded`](LocalTrack#onended)

***

### onEndedListener()

```ts
protected onEndedListener(): void;
```

Defined in: [client-sdk-js/src/track/Track.ts:62](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L62)

#### Returns

`void`

#### Inherited from

[`LocalTrack`](LocalTrack).[`onEndedListener`](LocalTrack#onendedlistener)

***

### pauseUpstream()

```ts
pauseUpstream(): Promise<void>;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:223](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L223)

Pause publishing to the server without disabling the local
MediaStreamTrack. Useful for showing a local preview while
not sending to remote participants.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`LocalTrack`](LocalTrack).[`pauseUpstream`](LocalTrack#pauseupstream)

***

### prependListener()

```ts
prependListener(type, listener): this;
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:14

#### Parameters

##### type

`string` \| `number`

##### listener

`Listener`

#### Returns

`this`

#### Inherited from

[`LocalTrack`](LocalTrack).[`prependListener`](LocalTrack#prependlistener)

***

### prependOnceListener()

```ts
prependOnceListener(type, listener): this;
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:15

#### Parameters

##### type

`string` \| `number`

##### listener

`Listener`

#### Returns

`this`

#### Inherited from

[`LocalTrack`](LocalTrack).[`prependOnceListener`](LocalTrack#prependoncelistener)

***

### replaceTrack()

```ts
replaceTrack(newTrack): Promise<void>;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:350](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L350)

#### Parameters

##### newTrack

`MediaStreamTrack`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`LocalTrack`](LocalTrack).[`replaceTrack`](LocalTrack#replacetrack)

***

### restart()

```ts
restart(constraints?): Promise<void>;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:307](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L307)

#### Parameters

##### constraints?

`MediaTrackConstraints`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`LocalTrack`](LocalTrack).[`restart`](LocalTrack#restart)

***

### resumeUpstream()

```ts
resumeUpstream(): Promise<void>;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:240](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L240)

Resume publishing after a call to [pauseUpstream](LocalTrack#pauseupstream).

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`LocalTrack`](LocalTrack).[`resumeUpstream`](LocalTrack#resumeupstream)

***

### setDeviceId()

```ts
setDeviceId(deviceId, exact?): Promise<void>;
```

Defined in: [client-sdk-js/src/track/LocalAudioTrack.ts:64](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalAudioTrack.ts#L64)

#### Parameters

##### deviceId

`string`

##### exact?

`boolean` = `true`

#### Returns

`Promise`\<`void`\>

***

### setMaxListeners()

```ts
setMaxListeners(n): this;
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:8

#### Parameters

##### n

`number`

#### Returns

`this`

#### Inherited from

[`LocalTrack`](LocalTrack).[`setMaxListeners`](LocalTrack#setmaxlisteners)

***

### setProcessor()

```ts
setProcessor(processor, showProcessedStreamLocally?): Promise<void>;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:142](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L142)

Set a [TrackProcessor](../interfaces/TrackProcessor) on this track. Pass `undefined` to remove
the current processor.

#### Parameters

##### processor

  \| [`TrackProcessor`](../interfaces/TrackProcessor)\<[`TrackKind`](../enumerations/TrackKind)\>
  \| `undefined`

##### showProcessedStreamLocally?

`boolean` = `true`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`LocalTrack`](LocalTrack).[`setProcessor`](LocalTrack#setprocessor)

***

### setTrackMuted()

```ts
protected setTrackMuted(muted): void;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:419](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L419)

#### Parameters

##### muted

`boolean`

#### Returns

`void`

#### Inherited from

[`LocalTrack`](LocalTrack).[`setTrackMuted`](LocalTrack#settrackmuted)

***

### stop()

```ts
stop(): void;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:400](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L400)

#### Returns

`void`

#### Inherited from

[`LocalTrack`](LocalTrack).[`stop`](LocalTrack#stop)

***

### stopMediaTrackQuietly()

```ts
protected stopMediaTrackQuietly(track): void;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:123](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L123)

Suppresses the [TrackEvent.Ended](../enumerations/TrackEvent#ended) emission for tracks the SDK stops
on purpose (device switch, stopOnMute, Safari restart, stop()) so that
consumers can treat Ended as an actual device/source failure.

#### Parameters

##### track

`MediaStreamTrack` \| `undefined`

#### Returns

`void`

#### Inherited from

[`LocalTrack`](LocalTrack).[`stopMediaTrackQuietly`](LocalTrack#stopmediatrackquietly)

***

### stopProcessor()

```ts
stopProcessor(): Promise<void>;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:189](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L189)

Stop and remove the current processor.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`LocalTrack`](LocalTrack).[`stopProcessor`](LocalTrack#stopprocessor)

***

### unmute()

```ts
unmute(): Promise<void>;
```

Defined in: [client-sdk-js/src/track/LocalAudioTrack.ts:44](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalAudioTrack.ts#L44)

Unmute the track (enables the MediaStreamTrack).

#### Returns

`Promise`\<`void`\>

#### Overrides

[`LocalTrack`](LocalTrack).[`unmute`](LocalTrack#unmute)

***

### waitForDimensions()

```ts
waitForDimensions(timeout?): Promise<TrackDimensions>;
```

Defined in: [client-sdk-js/src/track/LocalTrack.ts:277](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/LocalTrack.ts#L277)

Wait until the video track reports valid dimensions.

#### Parameters

##### timeout?

`number` = `DEFAULT_DIMENSIONS_TIMEOUT`

#### Returns

`Promise`\<[`TrackDimensions`](../interfaces/TrackDimensions)\>

#### Throws

Error if the track is audio or dimensions don't become
        available within the timeout.

#### Inherited from

[`LocalTrack`](LocalTrack).[`waitForDimensions`](LocalTrack#waitfordimensions)

***

### listenerCount()

```ts
static listenerCount(emitter, type): number;
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:4

#### Parameters

##### emitter

`EventEmitter`

##### type

`string` \| `number`

#### Returns

`number`

#### Inherited from

[`LocalTrack`](LocalTrack).[`listenerCount`](LocalTrack#listenercount-1)
