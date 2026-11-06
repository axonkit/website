---
title: "RemoteParticipant"
---

Defined in: [client-sdk-js/src/participant/RemoteParticipant.ts:29](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/RemoteParticipant.ts#L29)

A typed wrapper over Node's `EventEmitter`.

Extends `EventEmitter` with `declare` overrides so that `emit`, `on`,
`off`, etc. are type-safe without introducing circular-reference issues
that arise when using `typed-emitter` directly in `extends` clauses
whose event maps reference the class itself.

Runtime behaviour is 100% `EventEmitter`; this class adds zero runtime
code.

## Extends

- [`Participant`](Participant)\<[`RemoteTrackPublication`](RemoteTrackPublication)\>

## Properties

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

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`RemoteTrackPublication`](RemoteTrackPublication)\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`RemoteTrackPublication`](RemoteTrackPublication)\>\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`Participant`](Participant).[`addListener`](Participant#addlistener)

***

### attributes

```ts
attributes: Record<string, string> = {};
```

Defined in: [client-sdk-js/src/participant/Participant.ts:157](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L157)

#### Inherited from

[`Participant`](Participant).[`attributes`](Participant#attributes)

***

### audioLevel

```ts
audioLevel: number = 0;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:156](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L156)

#### Inherited from

[`Participant`](Participant).[`audioLevel`](Participant#audiolevel)

***

### audioTrackPublications

```ts
audioTrackPublications: Map<string, RemoteTrackPublication>;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:162](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L162)

#### Inherited from

[`Participant`](Participant).[`audioTrackPublications`](Participant#audiotrackpublications)

***

### emit

```ts
emit: <E>(event, ...args) => boolean;
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:17](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L17)

#### Type Parameters

##### E

`E` *extends* [`ParticipantEvent`](../enumerations/ParticipantEvent)

#### Parameters

##### event

`E`

##### args

...`Parameters`\<[`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`RemoteTrackPublication`](RemoteTrackPublication)\>\[`E`\]\>

#### Returns

`boolean`

#### Inherited from

[`Participant`](Participant).[`emit`](Participant#emit)

***

### groupId?

```ts
groupId?: string;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:160](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L160)

The group (breakout room) this participant is currently in. `undefined` = main room.

#### Inherited from

[`Participant`](Participant).[`groupId`](Participant#groupid)

***

### identity

```ts
identity: string;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:151](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L151)

#### Inherited from

[`Participant`](Participant).[`identity`](Participant#identity)

***

### isSpeaking

```ts
isSpeaking: boolean = false;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:155](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L155)

#### Inherited from

[`Participant`](Participant).[`isSpeaking`](Participant#isspeaking)

***

### joinedAt?

```ts
joinedAt?: Date;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:165](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L165)

#### Inherited from

[`Participant`](Participant).[`joinedAt`](Participant#joinedat)

***

### lastSpokeAt?

```ts
lastSpokeAt?: Date;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:164](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L164)

#### Inherited from

[`Participant`](Participant).[`lastSpokeAt`](Participant#lastspokeat)

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

[`Participant`](Participant).[`listenerCount`](Participant#listenercount)

***

### listeners

```ts
listeners: <E>(event) => E extends keyof ParticipantEvents<RemoteTrackPublication> ? ParticipantEvents<RemoteTrackPublication>[E][] : ((...args) => void)[];
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:49](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L49)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

#### Returns

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`RemoteTrackPublication`](RemoteTrackPublication)\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`RemoteTrackPublication`](RemoteTrackPublication)\>\[`E`\][] : ((...`args`) => `void`)[]

#### Inherited from

[`Participant`](Participant).[`listeners`](Participant#listeners)

***

### metadata?

```ts
metadata?: string;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:153](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L153)

#### Inherited from

[`Participant`](Participant).[`metadata`](Participant#metadata)

***

### name?

```ts
name?: string;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:152](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L152)

#### Inherited from

[`Participant`](Participant).[`name`](Participant#name)

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

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`RemoteTrackPublication`](RemoteTrackPublication)\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`RemoteTrackPublication`](RemoteTrackPublication)\>\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`Participant`](Participant).[`off`](Participant#off)

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

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`RemoteTrackPublication`](RemoteTrackPublication)\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`RemoteTrackPublication`](RemoteTrackPublication)\>\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`Participant`](Participant).[`on`](Participant#on)

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

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`RemoteTrackPublication`](RemoteTrackPublication)\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`RemoteTrackPublication`](RemoteTrackPublication)\>\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`Participant`](Participant).[`once`](Participant#once)

***

### permissions?

```ts
permissions?: ParticipantPermission;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:158](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L158)

#### Inherited from

[`Participant`](Participant).[`permissions`](Participant#permissions)

***

### rawListeners

```ts
rawListeners: <E>(event) => E extends keyof ParticipantEvents<RemoteTrackPublication> ? ParticipantEvents<RemoteTrackPublication>[E][] : ((...args) => void)[];
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:53](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L53)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

#### Returns

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`RemoteTrackPublication`](RemoteTrackPublication)\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`RemoteTrackPublication`](RemoteTrackPublication)\>\[`E`\][] : ((...`args`) => `void`)[]

#### Inherited from

[`Participant`](Participant).[`rawListeners`](Participant#rawlisteners)

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

[`Participant`](Participant).[`removeAllListeners`](Participant#removealllisteners)

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

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`RemoteTrackPublication`](RemoteTrackPublication)\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`RemoteTrackPublication`](RemoteTrackPublication)\>\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`Participant`](Participant).[`removeListener`](Participant#removelistener)

***

### sid

```ts
sid: string;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:150](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L150)

#### Inherited from

[`Participant`](Participant).[`sid`](Participant#sid)

***

### state

```ts
state: ParticipantState;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:154](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L154)

#### Inherited from

[`Participant`](Participant).[`state`](Participant#state)

***

### trackPublications

```ts
trackPublications: Map<string, RemoteTrackPublication>;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:161](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L161)

#### Inherited from

[`Participant`](Participant).[`trackPublications`](Participant#trackpublications)

***

### videoTrackPublications

```ts
videoTrackPublications: Map<string, RemoteTrackPublication>;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:163](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L163)

#### Inherited from

[`Participant`](Participant).[`videoTrackPublications`](Participant#videotrackpublications)

***

### defaultMaxListeners

```ts
static defaultMaxListeners: number;
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:5

#### Inherited from

[`Participant`](Participant).[`defaultMaxListeners`](Participant#defaultmaxlisteners)

## Accessors

### connectionQuality

#### Get Signature

```ts
get connectionQuality(): ConnectionQuality;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:217](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L217)

Current connection quality for this participant.

##### Returns

[`ConnectionQuality`](../enumerations/ConnectionQuality)

#### Inherited from

[`Participant`](Participant).[`connectionQuality`](Participant#connectionquality)

***

### isActive

#### Get Signature

```ts
get isActive(): boolean;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:200](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L200)

Whether the participant is in an active (joined) state.

##### Returns

`boolean`

#### Inherited from

[`Participant`](Participant).[`isActive`](Participant#isactive)

***

### isAgent

#### Get Signature

```ts
get isAgent(): boolean;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:195](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L195)

Whether this participant is an AI agent.

##### Returns

`boolean`

#### Inherited from

[`Participant`](Participant).[`isAgent`](Participant#isagent)

***

### isCameraEnabled

#### Get Signature

```ts
get isCameraEnabled(): boolean;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:251](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L251)

Whether the participant has an enabled camera track.

##### Returns

`boolean`

#### Inherited from

[`Participant`](Participant).[`isCameraEnabled`](Participant#iscameraenabled)

***

### isLocal

#### Get Signature

```ts
get isLocal(): boolean;
```

Defined in: [client-sdk-js/src/participant/RemoteParticipant.ts:53](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/RemoteParticipant.ts#L53)

##### Returns

`boolean`

#### Overrides

[`Participant`](Participant).[`isLocal`](Participant#islocal)

***

### isMicrophoneEnabled

#### Get Signature

```ts
get isMicrophoneEnabled(): boolean;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:256](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L256)

Whether the participant has an enabled microphone track.

##### Returns

`boolean`

#### Inherited from

[`Participant`](Participant).[`isMicrophoneEnabled`](Participant#ismicrophoneenabled)

***

### isScreenShareEnabled

#### Get Signature

```ts
get isScreenShareEnabled(): boolean;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:261](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L261)

Whether the participant is sharing their screen.

##### Returns

`boolean`

#### Inherited from

[`Participant`](Participant).[`isScreenShareEnabled`](Participant#isscreenshareenabled)

***

### kind

#### Get Signature

```ts
get kind(): ParticipantKind;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:190](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L190)

The kind of participant (Standard, Agent, etc.).

##### Returns

[`ParticipantKind`](../enumerations/ParticipantKind)

#### Inherited from

[`Participant`](Participant).[`kind`](Participant#kind)

## Methods

### eventNames()

```ts
eventNames(): (string | number)[];
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:7

#### Returns

(`string` \| `number`)[]

#### Inherited from

[`Participant`](Participant).[`eventNames`](Participant#eventnames)

***

### getMaxListeners()

```ts
getMaxListeners(): number;
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:9

#### Returns

`number`

#### Inherited from

[`Participant`](Participant).[`getMaxListeners`](Participant#getmaxlisteners)

***

### getTrackPublication()

```ts
getTrackPublication(source): RemoteTrackPublication | undefined;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:344](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L344)

#### Parameters

##### source

[`TrackSource`](../enumerations/TrackSource)

#### Returns

[`RemoteTrackPublication`](RemoteTrackPublication) \| `undefined`

#### Inherited from

[`Participant`](Participant).[`getTrackPublication`](Participant#gettrackpublication)

***

### getTrackPublicationByName()

```ts
getTrackPublicationByName(name): RemoteTrackPublication | undefined;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:359](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L359)

Find a track publication by its name.

#### Parameters

##### name

`string`

#### Returns

[`RemoteTrackPublication`](RemoteTrackPublication) \| `undefined`

#### Inherited from

[`Participant`](Participant).[`getTrackPublicationByName`](Participant#gettrackpublicationbyname)

***

### getTrackPublications()

```ts
getTrackPublications(): RemoteTrackPublication[];
```

Defined in: [client-sdk-js/src/participant/Participant.ts:268](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L268)

Returns all track publications as an array.

#### Returns

[`RemoteTrackPublication`](RemoteTrackPublication)[]

#### Inherited from

[`Participant`](Participant).[`getTrackPublications`](Participant#gettrackpublications)

***

### getVolume()

```ts
getVolume(): number;
```

Defined in: [client-sdk-js/src/participant/RemoteParticipant.ts:88](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/RemoteParticipant.ts#L88)

Get the current output volume for this participant's audio tracks.
Returns the volume of the first audio track, or 1 if none.

#### Returns

`number`

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

[`Participant`](Participant).[`prependListener`](Participant#prependlistener)

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

[`Participant`](Participant).[`prependOnceListener`](Participant#prependoncelistener)

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

[`Participant`](Participant).[`setMaxListeners`](Participant#setmaxlisteners)

***

### setVolume()

```ts
setVolume(volume): void;
```

Defined in: [client-sdk-js/src/participant/RemoteParticipant.ts:77](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/RemoteParticipant.ts#L77)

Set the output volume for all audio tracks from this participant.

#### Parameters

##### volume

`number`

Value between 0 and 1.

#### Returns

`void`

***

### updateFromInfo()

```ts
updateFromInfo(info): void;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:272](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L272)

#### Parameters

##### info

[`ParticipantInfo`](../interfaces/ParticipantInfo)

#### Returns

`void`

#### Inherited from

[`Participant`](Participant).[`updateFromInfo`](Participant#updatefrominfo)

***

### waitUntilActive()

```ts
waitUntilActive(): Promise<void>;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:209](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L209)

Returns a promise that resolves once the participant is active
and ready to receive data messages. Rejects if the participant
transitions away from the active state first.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Participant`](Participant).[`waitUntilActive`](Participant#waituntilactive)

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

[`Participant`](Participant).[`listenerCount`](Participant#listenercount-1)
