---
title: "Track"
---

Defined in: [client-sdk-js/src/track/Track.ts:26](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L26)

A typed wrapper over Node's `EventEmitter`.

Extends `EventEmitter` with `declare` overrides so that `emit`, `on`,
`off`, etc. are type-safe without introducing circular-reference issues
that arise when using `typed-emitter` directly in `extends` clauses
whose event maps reference the class itself.

Runtime behaviour is 100% `EventEmitter`; this class adds zero runtime
code.

## Extends

- [`TypedEmitter`](TypedEmitter)\<[`TrackEvents`](../type-aliases/TrackEvents)\>

## Extended by

- [`LocalTrack`](LocalTrack)
- [`RemoteTrack`](RemoteTrack)

## Constructors

### Constructor

```ts
new Track(
   kind, 
   source?, 
   mediaStreamTrack
): Track;
```

Defined in: [client-sdk-js/src/track/Track.ts:50](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L50)

#### Parameters

##### kind

[`TrackKind`](../enumerations/TrackKind)

##### source?

[`TrackSource`](../enumerations/TrackSource) = `TrackSource.Unknown`

##### mediaStreamTrack

`MediaStreamTrack`

#### Returns

`Track`

#### Overrides

[`TypedEmitter`](TypedEmitter).[`constructor`](TypedEmitter#constructor)

## Properties

### \_currentBitrate

```ts
protected _currentBitrate: number = 0;
```

Defined in: [client-sdk-js/src/track/Track.ts:43](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L43)

***

### \_isMuted

```ts
protected _isMuted: boolean = false;
```

Defined in: [client-sdk-js/src/track/Track.ts:37](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L37)

***

### \_mediaStreamTrack

```ts
protected _mediaStreamTrack: MediaStreamTrack;
```

Defined in: [client-sdk-js/src/track/Track.ts:31](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L31)

***

### \_prevBytes

```ts
protected _prevBytes: number = 0;
```

Defined in: [client-sdk-js/src/track/Track.ts:47](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L47)

Previous byte count from the last monitor sample.

***

### \_prevStatsTime

```ts
protected _prevStatsTime: number = 0;
```

Defined in: [client-sdk-js/src/track/Track.ts:48](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L48)

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

[`TypedEmitter`](TypedEmitter).[`addListener`](TypedEmitter#addlistener)

***

### attachedElements

```ts
attachedElements: HTMLMediaElement[] = [];
```

Defined in: [client-sdk-js/src/track/Track.ts:41](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L41)

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

[`TypedEmitter`](TypedEmitter).[`emit`](TypedEmitter#emit)

***

### kind

```ts
kind: TrackKind;
```

Defined in: [client-sdk-js/src/track/Track.ts:27](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L27)

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

[`TypedEmitter`](TypedEmitter).[`listenerCount`](TypedEmitter#listenercount)

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

[`TypedEmitter`](TypedEmitter).[`listeners`](TypedEmitter#listeners)

***

### monitorInterval?

```ts
protected monitorInterval?: number;
```

Defined in: [client-sdk-js/src/track/Track.ts:44](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L44)

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

[`TypedEmitter`](TypedEmitter).[`off`](TypedEmitter#off)

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

[`TypedEmitter`](TypedEmitter).[`on`](TypedEmitter#on)

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

[`TypedEmitter`](TypedEmitter).[`once`](TypedEmitter#once)

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

[`TypedEmitter`](TypedEmitter).[`rawListeners`](TypedEmitter#rawlisteners)

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

[`TypedEmitter`](TypedEmitter).[`removeAllListeners`](TypedEmitter#removealllisteners)

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

[`TypedEmitter`](TypedEmitter).[`removeListener`](TypedEmitter#removelistener)

***

### sid?

```ts
sid?: string;
```

Defined in: [client-sdk-js/src/track/Track.ts:29](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L29)

***

### source

```ts
source: TrackSource;
```

Defined in: [client-sdk-js/src/track/Track.ts:28](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L28)

***

### defaultMaxListeners

```ts
static defaultMaxListeners: number;
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:5

#### Inherited from

[`TypedEmitter`](TypedEmitter).[`defaultMaxListeners`](TypedEmitter#defaultmaxlisteners)

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

***

### isLocal

#### Get Signature

```ts
get abstract isLocal(): boolean;
```

Defined in: [client-sdk-js/src/track/Track.ts:81](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L81)

##### Returns

`boolean`

***

### isMuted

#### Get Signature

```ts
get isMuted(): boolean;
```

Defined in: [client-sdk-js/src/track/Track.ts:88](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L88)

Whether the track is currently muted.
This reflects the publisher's intent and is independent of consumer
pause state or [streamState](#streamstate).

##### Returns

`boolean`

***

### mediaStreamTrack

#### Get Signature

```ts
get mediaStreamTrack(): MediaStreamTrack;
```

Defined in: [client-sdk-js/src/track/Track.ts:33](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L33)

##### Returns

`MediaStreamTrack`

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

***

### eventNames()

```ts
eventNames(): (string | number)[];
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:7

#### Returns

(`string` \| `number`)[]

#### Inherited from

[`TypedEmitter`](TypedEmitter).[`eventNames`](TypedEmitter#eventnames)

***

### getMaxListeners()

```ts
getMaxListeners(): number;
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:9

#### Returns

`number`

#### Inherited from

[`TypedEmitter`](TypedEmitter).[`getMaxListeners`](TypedEmitter#getmaxlisteners)

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

Samples RTP bytes from a stats report and updates [currentBitrate](#currentbitrate).
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

***

### onEnded()

```ts
protected onEnded(): void;
```

Defined in: [client-sdk-js/src/track/Track.ts:67](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L67)

Hook fired when the underlying MediaStreamTrack ends.

#### Returns

`void`

***

### onEndedListener()

```ts
protected onEndedListener(): void;
```

Defined in: [client-sdk-js/src/track/Track.ts:62](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L62)

#### Returns

`void`

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

[`TypedEmitter`](TypedEmitter).[`prependListener`](TypedEmitter#prependlistener)

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

[`TypedEmitter`](TypedEmitter).[`prependOnceListener`](TypedEmitter#prependoncelistener)

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

[`TypedEmitter`](TypedEmitter).[`setMaxListeners`](TypedEmitter#setmaxlisteners)

***

### stop()

```ts
stop(): void;
```

Defined in: [client-sdk-js/src/track/Track.ts:233](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/Track.ts#L233)

#### Returns

`void`

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

[`TypedEmitter`](TypedEmitter).[`listenerCount`](TypedEmitter#listenercount-1)
