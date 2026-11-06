---
title: "RemoteTrack"
---

Defined in: [client-sdk-js/src/track/RemoteTrack.ts:10](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/RemoteTrack.ts#L10)

A typed wrapper over Node's `EventEmitter`.

Extends `EventEmitter` with `declare` overrides so that `emit`, `on`,
`off`, etc. are type-safe without introducing circular-reference issues
that arise when using `typed-emitter` directly in `extends` clauses
whose event maps reference the class itself.

Runtime behaviour is 100% `EventEmitter`; this class adds zero runtime
code.

## Extends

- [`Track`](Track)

## Extended by

- [`RemoteAudioTrack`](RemoteAudioTrack)
- [`RemoteVideoTrack`](RemoteVideoTrack)

## Constructors

### Constructor

```ts
new RemoteTrack(
   kind, 
   source?, 
   mediaStreamTrack
): RemoteTrack;
```

Defined in: [client-sdk-js/src/track/RemoteTrack.ts:22](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/RemoteTrack.ts#L22)

#### Parameters

##### kind

[`TrackKind`](../enumerations/TrackKind)

##### source?

[`TrackSource`](../enumerations/TrackSource) = `TrackSource.Unknown`

##### mediaStreamTrack

`MediaStreamTrack`

#### Returns

`RemoteTrack`

#### Overrides

[`Track`](Track).[`constructor`](Track#constructor)

## Properties

### \_currentBitrate

```ts
protected _currentBitrate: number = 0;
```

Defined in: [client-sdk-js/src/track/Track.ts:43](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L43)

#### Inherited from

[`Track`](Track).[`_currentBitrate`](Track#_currentbitrate)

***

### \_isMuted

```ts
protected _isMuted: boolean = false;
```

Defined in: [client-sdk-js/src/track/Track.ts:37](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L37)

#### Inherited from

[`Track`](Track).[`_isMuted`](Track#_ismuted)

***

### \_mediaStreamTrack

```ts
protected _mediaStreamTrack: MediaStreamTrack;
```

Defined in: [client-sdk-js/src/track/Track.ts:31](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L31)

#### Inherited from

[`Track`](Track).[`_mediaStreamTrack`](Track#_mediastreamtrack)

***

### \_prevBytes

```ts
protected _prevBytes: number = 0;
```

Defined in: [client-sdk-js/src/track/Track.ts:47](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L47)

Previous byte count from the last monitor sample.

#### Inherited from

[`Track`](Track).[`_prevBytes`](Track#_prevbytes)

***

### \_prevStatsTime

```ts
protected _prevStatsTime: number = 0;
```

Defined in: [client-sdk-js/src/track/Track.ts:48](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L48)

#### Inherited from

[`Track`](Track).[`_prevStatsTime`](Track#_prevstatstime)

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

[`Track`](Track).[`addListener`](Track#addlistener)

***

### attachedElements

```ts
attachedElements: HTMLMediaElement[] = [];
```

Defined in: [client-sdk-js/src/track/Track.ts:41](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L41)

#### Inherited from

[`Track`](Track).[`attachedElements`](Track#attachedelements)

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

[`Track`](Track).[`emit`](Track#emit)

***

### kind

```ts
kind: TrackKind;
```

Defined in: [client-sdk-js/src/track/Track.ts:27](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L27)

#### Inherited from

[`Track`](Track).[`kind`](Track#kind)

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

[`Track`](Track).[`listenerCount`](Track#listenercount)

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

[`Track`](Track).[`listeners`](Track#listeners)

***

### monitorInterval?

```ts
protected monitorInterval?: number;
```

Defined in: [client-sdk-js/src/track/Track.ts:44](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L44)

#### Inherited from

[`Track`](Track).[`monitorInterval`](Track#monitorinterval)

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

[`Track`](Track).[`off`](Track#off)

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

[`Track`](Track).[`on`](Track#on)

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

[`Track`](Track).[`once`](Track#once)

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

[`Track`](Track).[`rawListeners`](Track#rawlisteners)

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

[`Track`](Track).[`removeAllListeners`](Track#removealllisteners)

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

[`Track`](Track).[`removeListener`](Track#removelistener)

***

### sid?

```ts
sid?: string;
```

Defined in: [client-sdk-js/src/track/Track.ts:29](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L29)

#### Inherited from

[`Track`](Track).[`sid`](Track#sid)

***

### source

```ts
source: TrackSource;
```

Defined in: [client-sdk-js/src/track/Track.ts:28](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L28)

#### Inherited from

[`Track`](Track).[`source`](Track#source)

***

### defaultMaxListeners

```ts
static defaultMaxListeners: number;
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:5

#### Inherited from

[`Track`](Track).[`defaultMaxListeners`](Track#defaultmaxlisteners)

## Accessors

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

[`Track`](Track).[`currentBitrate`](Track#currentbitrate)

***

### isLocal

#### Get Signature

```ts
get isLocal(): boolean;
```

Defined in: [client-sdk-js/src/track/RemoteTrack.ts:30](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/RemoteTrack.ts#L30)

##### Returns

`boolean`

#### Overrides

[`Track`](Track).[`isLocal`](Track#islocal)

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

[`Track`](Track).[`isMuted`](Track#ismuted)

***

### mediaStreamTrack

#### Get Signature

```ts
get mediaStreamTrack(): MediaStreamTrack;
```

Defined in: [client-sdk-js/src/track/Track.ts:33](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L33)

##### Returns

`MediaStreamTrack`

#### Inherited from

[`Track`](Track).[`mediaStreamTrack`](Track#mediastreamtrack)

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

[`Track`](Track).[`streamState`](Track#streamstate)

## Methods

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

[`Track`](Track).[`attach`](Track#attach)

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

[`Track`](Track).[`detach`](Track#detach)

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

[`Track`](Track).[`detachEndedListener`](Track#detachendedlistener)

***

### eventNames()

```ts
eventNames(): (string | number)[];
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:7

#### Returns

(`string` \| `number`)[]

#### Inherited from

[`Track`](Track).[`eventNames`](Track#eventnames)

***

### getMaxListeners()

```ts
getMaxListeners(): number;
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:9

#### Returns

`number`

#### Inherited from

[`Track`](Track).[`getMaxListeners`](Track#getmaxlisteners)

***

### getPlayoutDelay()

```ts
getPlayoutDelay(): number;
```

Defined in: [client-sdk-js/src/track/RemoteTrack.ts:94](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/RemoteTrack.ts#L94)

Returns the current playout delay (in seconds).

#### Returns

`number`

***

### getRTCStatsReport()

```ts
getRTCStatsReport(): Promise<RTCStatsReport | undefined>;
```

Defined in: [client-sdk-js/src/track/RemoteTrack.ts:75](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/RemoteTrack.ts#L75)

Gets the RTCStatsReport for the underlying RTP receiver.

#### Returns

`Promise`\<`RTCStatsReport` \| `undefined`\>

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

[`Track`](Track).[`monitorStats`](Track#monitorstats)

***

### onEnded()

```ts
protected onEnded(): void;
```

Defined in: [client-sdk-js/src/track/Track.ts:67](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L67)

Hook fired when the underlying MediaStreamTrack ends.

#### Returns

`void`

#### Inherited from

[`Track`](Track).[`onEnded`](Track#onended)

***

### onEndedListener()

```ts
protected onEndedListener(): void;
```

Defined in: [client-sdk-js/src/track/Track.ts:62](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L62)

#### Returns

`void`

#### Inherited from

[`Track`](Track).[`onEndedListener`](Track#onendedlistener)

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

[`Track`](Track).[`prependListener`](Track#prependlistener)

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

[`Track`](Track).[`prependOnceListener`](Track#prependoncelistener)

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

[`Track`](Track).[`setMaxListeners`](Track#setmaxlisteners)

***

### setPlayoutDelay()

```ts
setPlayoutDelay(delayInSeconds): void;
```

Defined in: [client-sdk-js/src/track/RemoteTrack.ts:84](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/RemoteTrack.ts#L84)

Set a playout delay (in seconds) for this track. Higher values allow
more buffering in the browser and add latency.

#### Parameters

##### delayInSeconds

`number`

#### Returns

`void`

***

### stop()

```ts
stop(): void;
```

Defined in: [client-sdk-js/src/track/RemoteTrack.ts:53](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/RemoteTrack.ts#L53)

Stop the remote track.

#### Returns

`void`

#### Overrides

[`Track`](Track).[`stop`](Track#stop)

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

[`Track`](Track).[`listenerCount`](Track#listenercount-1)
