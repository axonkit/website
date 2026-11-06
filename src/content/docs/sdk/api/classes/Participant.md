---
title: "Participant"
---

Defined in: [client-sdk-js/src/participant/Participant.ts:147](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L147)

A typed wrapper over Node's `EventEmitter`.

Extends `EventEmitter` with `declare` overrides so that `emit`, `on`,
`off`, etc. are type-safe without introducing circular-reference issues
that arise when using `typed-emitter` directly in `extends` clauses
whose event maps reference the class itself.

Runtime behaviour is 100% `EventEmitter`; this class adds zero runtime
code.

## Extends

- [`TypedEmitter`](TypedEmitter)\<[`ParticipantEvents`](../type-aliases/ParticipantEvents)\<`TPublication`\>\>

## Extended by

- [`LocalParticipant`](LocalParticipant)
- [`RemoteParticipant`](RemoteParticipant)

## Type Parameters

### TPublication

`TPublication` *extends* [`TrackPublication`](TrackPublication) = [`TrackPublication`](TrackPublication)

## Constructors

### Constructor

```ts
new Participant<TPublication>(
   sid, 
   identity, 
   name?, 
   metadata?
): Participant<TPublication>;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:178](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L178)

#### Parameters

##### sid

`string`

##### identity

`string`

##### name?

`string`

##### metadata?

`string`

#### Returns

`Participant`\<`TPublication`\>

#### Overrides

[`TypedEmitter`](TypedEmitter).[`constructor`](TypedEmitter#constructor)

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

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<`TPublication`\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<`TPublication`\>\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`TypedEmitter`](TypedEmitter).[`addListener`](TypedEmitter#addlistener)

***

### attributes

```ts
attributes: Record<string, string> = {};
```

Defined in: [client-sdk-js/src/participant/Participant.ts:157](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L157)

***

### audioLevel

```ts
audioLevel: number = 0;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:156](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L156)

***

### audioTrackPublications

```ts
audioTrackPublications: Map<string, TPublication>;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:162](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L162)

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

...`Parameters`\<[`ParticipantEvents`](../type-aliases/ParticipantEvents)\<`TPublication`\>\[`E`\]\>

#### Returns

`boolean`

#### Inherited from

[`TypedEmitter`](TypedEmitter).[`emit`](TypedEmitter#emit)

***

### groupId?

```ts
groupId?: string;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:160](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L160)

The group (breakout room) this participant is currently in. `undefined` = main room.

***

### identity

```ts
identity: string;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:151](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L151)

***

### isSpeaking

```ts
isSpeaking: boolean = false;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:155](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L155)

***

### joinedAt?

```ts
joinedAt?: Date;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:165](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L165)

***

### lastSpokeAt?

```ts
lastSpokeAt?: Date;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:164](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L164)

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
listeners: <E>(event) => E extends keyof ParticipantEvents<TPublication> ? ParticipantEvents<TPublication>[E][] : ((...args) => void)[];
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:49](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L49)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

#### Returns

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<`TPublication`\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<`TPublication`\>\[`E`\][] : ((...`args`) => `void`)[]

#### Inherited from

[`TypedEmitter`](TypedEmitter).[`listeners`](TypedEmitter#listeners)

***

### metadata?

```ts
metadata?: string;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:153](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L153)

***

### name?

```ts
name?: string;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:152](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L152)

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

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<`TPublication`\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<`TPublication`\>\[`E`\] : (...`args`) => `void`

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

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<`TPublication`\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<`TPublication`\>\[`E`\] : (...`args`) => `void`

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

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<`TPublication`\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<`TPublication`\>\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`TypedEmitter`](TypedEmitter).[`once`](TypedEmitter#once)

***

### permissions?

```ts
permissions?: ParticipantPermission;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:158](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L158)

***

### rawListeners

```ts
rawListeners: <E>(event) => E extends keyof ParticipantEvents<TPublication> ? ParticipantEvents<TPublication>[E][] : ((...args) => void)[];
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:53](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L53)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

#### Returns

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<`TPublication`\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<`TPublication`\>\[`E`\][] : ((...`args`) => `void`)[]

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

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<`TPublication`\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<`TPublication`\>\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`TypedEmitter`](TypedEmitter).[`removeListener`](TypedEmitter#removelistener)

***

### sid

```ts
sid: string;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:150](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L150)

***

### state

```ts
state: ParticipantState;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:154](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L154)

***

### trackPublications

```ts
trackPublications: Map<string, TPublication>;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:161](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L161)

***

### videoTrackPublications

```ts
videoTrackPublications: Map<string, TPublication>;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:163](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L163)

***

### defaultMaxListeners

```ts
static defaultMaxListeners: number;
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:5

#### Inherited from

[`TypedEmitter`](TypedEmitter).[`defaultMaxListeners`](TypedEmitter#defaultmaxlisteners)

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

***

### isLocal

#### Get Signature

```ts
get abstract isLocal(): boolean;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:187](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L187)

##### Returns

`boolean`

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

## Methods

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

### getTrackPublication()

```ts
getTrackPublication(source): TPublication | undefined;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:344](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L344)

#### Parameters

##### source

[`TrackSource`](../enumerations/TrackSource)

#### Returns

`TPublication` \| `undefined`

***

### getTrackPublicationByName()

```ts
getTrackPublicationByName(name): TPublication | undefined;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:359](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L359)

Find a track publication by its name.

#### Parameters

##### name

`string`

#### Returns

`TPublication` \| `undefined`

***

### getTrackPublications()

```ts
getTrackPublications(): TPublication[];
```

Defined in: [client-sdk-js/src/participant/Participant.ts:268](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L268)

Returns all track publications as an array.

#### Returns

`TPublication`[]

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
