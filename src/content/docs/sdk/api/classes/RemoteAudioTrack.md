---
title: "RemoteAudioTrack"
---

Defined in: [client-sdk-js/src/track/RemoteAudioTrack.ts:4](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/RemoteAudioTrack.ts#L4)

A typed wrapper over Node's `EventEmitter`.

Extends `EventEmitter` with `declare` overrides so that `emit`, `on`,
`off`, etc. are type-safe without introducing circular-reference issues
that arise when using `typed-emitter` directly in `extends` clauses
whose event maps reference the class itself.

Runtime behaviour is 100% `EventEmitter`; this class adds zero runtime
code.

## Extends

- [`RemoteTrack`](RemoteTrack)

## Constructors

### Constructor

```ts
new RemoteAudioTrack(mediaStreamTrack): RemoteAudioTrack;
```

Defined in: [client-sdk-js/src/track/RemoteAudioTrack.ts:7](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/RemoteAudioTrack.ts#L7)

#### Parameters

##### mediaStreamTrack

`MediaStreamTrack`

#### Returns

`RemoteAudioTrack`

#### Overrides

[`RemoteTrack`](RemoteTrack).[`constructor`](RemoteTrack#constructor)

## Properties

### \_currentBitrate

```ts
protected _currentBitrate: number = 0;
```

Defined in: [client-sdk-js/src/track/Track.ts:43](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L43)

#### Inherited from

[`RemoteTrack`](RemoteTrack).[`_currentBitrate`](RemoteTrack#_currentbitrate)

***

### \_isMuted

```ts
protected _isMuted: boolean = false;
```

Defined in: [client-sdk-js/src/track/Track.ts:37](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L37)

#### Inherited from

[`RemoteTrack`](RemoteTrack).[`_isMuted`](RemoteTrack#_ismuted)

***

### \_mediaStreamTrack

```ts
protected _mediaStreamTrack: MediaStreamTrack;
```

Defined in: [client-sdk-js/src/track/Track.ts:31](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L31)

#### Inherited from

[`RemoteTrack`](RemoteTrack).[`_mediaStreamTrack`](RemoteTrack#_mediastreamtrack)

***

### \_prevBytes

```ts
protected _prevBytes: number = 0;
```

Defined in: [client-sdk-js/src/track/Track.ts:47](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L47)

Previous byte count from the last monitor sample.

#### Inherited from

[`RemoteTrack`](RemoteTrack).[`_prevBytes`](RemoteTrack#_prevbytes)

***

### \_prevStatsTime

```ts
protected _prevStatsTime: number = 0;
```

Defined in: [client-sdk-js/src/track/Track.ts:48](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L48)

#### Inherited from

[`RemoteTrack`](RemoteTrack).[`_prevStatsTime`](RemoteTrack#_prevstatstime)

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

[`RemoteTrack`](RemoteTrack).[`addListener`](RemoteTrack#addlistener)

***

### attachedElements

```ts
attachedElements: HTMLMediaElement[] = [];
```

Defined in: [client-sdk-js/src/track/Track.ts:41](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L41)

#### Inherited from

[`RemoteTrack`](RemoteTrack).[`attachedElements`](RemoteTrack#attachedelements)

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

[`RemoteTrack`](RemoteTrack).[`emit`](RemoteTrack#emit)

***

### kind

```ts
kind: TrackKind;
```

Defined in: [client-sdk-js/src/track/Track.ts:27](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L27)

#### Inherited from

[`RemoteTrack`](RemoteTrack).[`kind`](RemoteTrack#kind)

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

[`RemoteTrack`](RemoteTrack).[`listenerCount`](RemoteTrack#listenercount)

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

[`RemoteTrack`](RemoteTrack).[`listeners`](RemoteTrack#listeners)

***

### monitorInterval?

```ts
protected monitorInterval?: number;
```

Defined in: [client-sdk-js/src/track/Track.ts:44](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L44)

#### Inherited from

[`RemoteTrack`](RemoteTrack).[`monitorInterval`](RemoteTrack#monitorinterval)

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

[`RemoteTrack`](RemoteTrack).[`off`](RemoteTrack#off)

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

[`RemoteTrack`](RemoteTrack).[`on`](RemoteTrack#on)

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

[`RemoteTrack`](RemoteTrack).[`once`](RemoteTrack#once)

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

[`RemoteTrack`](RemoteTrack).[`rawListeners`](RemoteTrack#rawlisteners)

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

[`RemoteTrack`](RemoteTrack).[`removeAllListeners`](RemoteTrack#removealllisteners)

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

[`RemoteTrack`](RemoteTrack).[`removeListener`](RemoteTrack#removelistener)

***

### sid?

```ts
sid?: string;
```

Defined in: [client-sdk-js/src/track/Track.ts:29](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L29)

#### Inherited from

[`RemoteTrack`](RemoteTrack).[`sid`](RemoteTrack#sid)

***

### source

```ts
source: TrackSource;
```

Defined in: [client-sdk-js/src/track/Track.ts:28](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L28)

#### Inherited from

[`RemoteTrack`](RemoteTrack).[`source`](RemoteTrack#source)

***

### defaultMaxListeners

```ts
static defaultMaxListeners: number;
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:5

#### Inherited from

[`RemoteTrack`](RemoteTrack).[`defaultMaxListeners`](RemoteTrack#defaultmaxlisteners)

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

[`RemoteTrack`](RemoteTrack).[`currentBitrate`](RemoteTrack#currentbitrate)

***

### isLocal

#### Get Signature

```ts
get isLocal(): boolean;
```

Defined in: [client-sdk-js/src/track/RemoteTrack.ts:30](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/RemoteTrack.ts#L30)

##### Returns

`boolean`

#### Inherited from

[`RemoteTrack`](RemoteTrack).[`isLocal`](RemoteTrack#islocal)

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

[`RemoteTrack`](RemoteTrack).[`isMuted`](RemoteTrack#ismuted)

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

[`RemoteTrack`](RemoteTrack).[`mediaStreamTrack`](RemoteTrack#mediastreamtrack)

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

[`RemoteTrack`](RemoteTrack).[`streamState`](RemoteTrack#streamstate)

***

### volume

#### Get Signature

```ts
get volume(): number;
```

Defined in: [client-sdk-js/src/track/RemoteAudioTrack.ts:11](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/RemoteAudioTrack.ts#L11)

##### Returns

`number`

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

[`RemoteTrack`](RemoteTrack).[`attach`](RemoteTrack#attach)

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

[`RemoteTrack`](RemoteTrack).[`detach`](RemoteTrack#detach)

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

[`RemoteTrack`](RemoteTrack).[`detachEndedListener`](RemoteTrack#detachendedlistener)

***

### eventNames()

```ts
eventNames(): (string | number)[];
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:7

#### Returns

(`string` \| `number`)[]

#### Inherited from

[`RemoteTrack`](RemoteTrack).[`eventNames`](RemoteTrack#eventnames)

***

### getMaxListeners()

```ts
getMaxListeners(): number;
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:9

#### Returns

`number`

#### Inherited from

[`RemoteTrack`](RemoteTrack).[`getMaxListeners`](RemoteTrack#getmaxlisteners)

***

### getPlayoutDelay()

```ts
getPlayoutDelay(): number;
```

Defined in: [client-sdk-js/src/track/RemoteTrack.ts:94](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/RemoteTrack.ts#L94)

Returns the current playout delay (in seconds).

#### Returns

`number`

#### Inherited from

[`RemoteTrack`](RemoteTrack).[`getPlayoutDelay`](RemoteTrack#getplayoutdelay)

***

### getRTCStatsReport()

```ts
getRTCStatsReport(): Promise<RTCStatsReport | undefined>;
```

Defined in: [client-sdk-js/src/track/RemoteTrack.ts:75](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/RemoteTrack.ts#L75)

Gets the RTCStatsReport for the underlying RTP receiver.

#### Returns

`Promise`\<`RTCStatsReport` \| `undefined`\>

#### Inherited from

[`RemoteTrack`](RemoteTrack).[`getRTCStatsReport`](RemoteTrack#getrtcstatsreport)

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

[`RemoteTrack`](RemoteTrack).[`monitorStats`](RemoteTrack#monitorstats)

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

[`RemoteTrack`](RemoteTrack).[`onEnded`](RemoteTrack#onended)

***

### onEndedListener()

```ts
protected onEndedListener(): void;
```

Defined in: [client-sdk-js/src/track/Track.ts:62](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L62)

#### Returns

`void`

#### Inherited from

[`RemoteTrack`](RemoteTrack).[`onEndedListener`](RemoteTrack#onendedlistener)

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

[`RemoteTrack`](RemoteTrack).[`prependListener`](RemoteTrack#prependlistener)

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

[`RemoteTrack`](RemoteTrack).[`prependOnceListener`](RemoteTrack#prependoncelistener)

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

[`RemoteTrack`](RemoteTrack).[`setMaxListeners`](RemoteTrack#setmaxlisteners)

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

#### Inherited from

[`RemoteTrack`](RemoteTrack).[`setPlayoutDelay`](RemoteTrack#setplayoutdelay)

***

### setVolume()

```ts
setVolume(volume): void;
```

Defined in: [client-sdk-js/src/track/RemoteAudioTrack.ts:15](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/RemoteAudioTrack.ts#L15)

#### Parameters

##### volume

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

#### Inherited from

[`RemoteTrack`](RemoteTrack).[`stop`](RemoteTrack#stop)

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

[`RemoteTrack`](RemoteTrack).[`listenerCount`](RemoteTrack#listenercount-1)
