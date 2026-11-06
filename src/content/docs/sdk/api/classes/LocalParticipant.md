---
title: "LocalParticipant"
---

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:69](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L69)

A typed wrapper over Node's `EventEmitter`.

Extends `EventEmitter` with `declare` overrides so that `emit`, `on`,
`off`, etc. are type-safe without introducing circular-reference issues
that arise when using `typed-emitter` directly in `extends` clauses
whose event maps reference the class itself.

Runtime behaviour is 100% `EventEmitter`; this class adds zero runtime
code.

## Extends

- [`Participant`](Participant)\<[`LocalTrackPublication`](LocalTrackPublication)\>

## Constructors

### Constructor

```ts
new LocalParticipant(
   sid, 
   identity, 
   name?, 
   metadata?
): LocalParticipant;
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

`LocalParticipant`

#### Inherited from

[`Participant`](Participant).[`constructor`](Participant#constructor)

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

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`LocalTrackPublication`](LocalTrackPublication)\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`LocalTrackPublication`](LocalTrackPublication)\>\[`E`\] : (...`args`) => `void`

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
audioTrackPublications: Map<string, LocalTrackPublication>;
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

...`Parameters`\<[`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`LocalTrackPublication`](LocalTrackPublication)\>\[`E`\]\>

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
listeners: <E>(event) => E extends keyof ParticipantEvents<LocalTrackPublication> ? ParticipantEvents<LocalTrackPublication>[E][] : ((...args) => void)[];
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:49](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L49)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

#### Returns

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`LocalTrackPublication`](LocalTrackPublication)\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`LocalTrackPublication`](LocalTrackPublication)\>\[`E`\][] : ((...`args`) => `void`)[]

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

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`LocalTrackPublication`](LocalTrackPublication)\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`LocalTrackPublication`](LocalTrackPublication)\>\[`E`\] : (...`args`) => `void`

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

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`LocalTrackPublication`](LocalTrackPublication)\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`LocalTrackPublication`](LocalTrackPublication)\>\[`E`\] : (...`args`) => `void`

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

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`LocalTrackPublication`](LocalTrackPublication)\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`LocalTrackPublication`](LocalTrackPublication)\>\[`E`\] : (...`args`) => `void`

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
rawListeners: <E>(event) => E extends keyof ParticipantEvents<LocalTrackPublication> ? ParticipantEvents<LocalTrackPublication>[E][] : ((...args) => void)[];
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:53](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L53)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

#### Returns

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`LocalTrackPublication`](LocalTrackPublication)\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`LocalTrackPublication`](LocalTrackPublication)\>\[`E`\][] : ((...`args`) => `void`)[]

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

`E` *extends* keyof [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`LocalTrackPublication`](LocalTrackPublication)\> ? [`ParticipantEvents`](../type-aliases/ParticipantEvents)\<[`LocalTrackPublication`](LocalTrackPublication)\>\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`Participant`](Participant).[`removeListener`](Participant#removelistener)

***

### roomOptions?

```ts
roomOptions?: RoomOptions;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:86](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L86)

Room-level options passed in from the Room instance.

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
trackPublications: Map<string, LocalTrackPublication>;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:161](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L161)

#### Inherited from

[`Participant`](Participant).[`trackPublications`](Participant#trackpublications)

***

### videoTrackPublications

```ts
videoTrackPublications: Map<string, LocalTrackPublication>;
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

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:88](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L88)

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

***

### lastCameraError

#### Get Signature

```ts
get lastCameraError(): Error | undefined;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:125](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L125)

Last error encountered while creating a camera track.

##### Returns

`Error` \| `undefined`

***

### lastMicrophoneError

#### Get Signature

```ts
get lastMicrophoneError(): Error | undefined;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:130](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L130)

Last error encountered while creating a microphone track.

##### Returns

`Error` \| `undefined`

## Methods

### createScreenTracks()

```ts
createScreenTracks(options?): Promise<LocalTrack[]>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:1104](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L1104)

Create screen share tracks without publishing.

#### Parameters

##### options?

[`ScreenShareCaptureOptions`](../interfaces/ScreenShareCaptureOptions)

#### Returns

`Promise`\<[`LocalTrack`](LocalTrack)[]\>

***

### createTracks()

```ts
createTracks(options?): Promise<LocalTrack[]>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:1079](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L1079)

Create local tracks without publishing. Useful for creating preview tracks.

#### Parameters

##### options?

###### audio?

`boolean` \| [`AudioCaptureOptions`](../interfaces/AudioCaptureOptions)

###### video?

`boolean` \| [`VideoCaptureOptions`](../interfaces/VideoCaptureOptions)

#### Returns

`Promise`\<[`LocalTrack`](LocalTrack)[]\>

***

### deleteMessage()

```ts
deleteMessage(id): Promise<void>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:853](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L853)

Delete a single message by ID.

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### deleteRoomState()

```ts
deleteRoomState(key): Promise<void>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:869](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L869)

Delete a key from the room's shared state.

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`void`\>

***

### ~~editChatMessage()~~

```ts
editChatMessage(editText, originalMessage): Promise<Message>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:879](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L879)

#### Parameters

##### editText

`string`

##### originalMessage

[`Message`](../interfaces/Message)

#### Returns

`Promise`\<[`Message`](../interfaces/Message)\>

#### Deprecated

Use [editMessage](#editmessage) instead.

***

### editMessage()

```ts
editMessage(editText, originalMessage): Promise<Message>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:839](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L839)

Edit a previously sent message.

#### Parameters

##### editText

`string`

##### originalMessage

[`Message`](../interfaces/Message)

#### Returns

`Promise`\<[`Message`](../interfaces/Message)\>

***

### enableCameraAndMicrophone()

```ts
enableCameraAndMicrophone(captureOptions?, publishOptions?): Promise<void>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:224](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L224)

Enable both camera and microphone simultaneously.
Uses a single `getUserMedia` call so the user only grants permission once.

#### Parameters

##### captureOptions?

###### audio?

[`AudioCaptureOptions`](../interfaces/AudioCaptureOptions)

###### video?

[`VideoCaptureOptions`](../interfaces/VideoCaptureOptions)

##### publishOptions?

[`TrackPublishOptions`](../interfaces/TrackPublishOptions)

#### Returns

`Promise`\<`void`\>

***

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
getTrackPublication(source): LocalTrackPublication | undefined;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:344](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L344)

#### Parameters

##### source

[`TrackSource`](../enumerations/TrackSource)

#### Returns

[`LocalTrackPublication`](LocalTrackPublication) \| `undefined`

#### Inherited from

[`Participant`](Participant).[`getTrackPublication`](Participant#gettrackpublication)

***

### getTrackPublicationByName()

```ts
getTrackPublicationByName(name): LocalTrackPublication | undefined;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:359](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L359)

Find a track publication by its name.

#### Parameters

##### name

`string`

#### Returns

[`LocalTrackPublication`](LocalTrackPublication) \| `undefined`

#### Inherited from

[`Participant`](Participant).[`getTrackPublicationByName`](Participant#gettrackpublicationbyname)

***

### getTrackPublications()

```ts
getTrackPublications(): LocalTrackPublication[];
```

Defined in: [client-sdk-js/src/participant/Participant.ts:268](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L268)

Returns all track publications as an array.

#### Returns

[`LocalTrackPublication`](LocalTrackPublication)[]

#### Inherited from

[`Participant`](Participant).[`getTrackPublications`](Participant#gettrackpublications)

***

### joinGroup()

```ts
joinGroup(groupId): Promise<ParticipantInfo[]>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:764](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L764)

Join a group (breakout room). The server will rewire subscriptions
so that only participants in the same group exchange media.
Permissions may change to the group-level permissions.

#### Parameters

##### groupId

`string`

#### Returns

`Promise`\<[`ParticipantInfo`](../interfaces/ParticipantInfo)[]\>

The list of other participants already in the group.

***

### leaveGroup()

```ts
leaveGroup(): Promise<void>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:774](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L774)

Leave the current group and return to the main room.
Permissions revert to room-level defaults.

#### Returns

`Promise`\<`void`\>

***

### performRpc()

```ts
performRpc(params): Promise<string>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:928](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L928)

Perform an RPC call to a specific remote participant.
The remote participant must have registered a handler for the method
via `room.registerRpcMethod`.

#### Parameters

##### params

[`PerformRpcParams`](../interfaces/PerformRpcParams)

#### Returns

`Promise`\<`string`\>

The response payload string.

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

### publishData()

```ts
publishData(data, options?): Promise<void>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:643](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L643)

#### Parameters

##### data

`Uint8Array`

##### options?

[`DataPublishOptions`](../interfaces/DataPublishOptions)

#### Returns

`Promise`\<`void`\>

***

### publishTrack()

```ts
publishTrack(track, options?): Promise<LocalTrackPublication>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:264](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L264)

#### Parameters

##### track

`MediaStreamTrack` \| [`LocalTrack`](LocalTrack)

##### options?

[`TrackPublishOptions`](../interfaces/TrackPublishOptions)

#### Returns

`Promise`\<[`LocalTrackPublication`](LocalTrackPublication)\>

***

### republishAllTracks()

```ts
republishAllTracks(options?, restartTracks?): Promise<void>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:1116](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L1116)

Re-publish all currently published tracks. Useful after a full reconnect
or when changing publish options globally.

The transportclose handler only clears `producers`, not
`trackPublications`, so the publications are still available here even
after the old transport has been closed.

#### Parameters

##### options?

[`TrackPublishOptions`](../interfaces/TrackPublishOptions)

##### restartTracks?

`boolean` = `true`

#### Returns

`Promise`\<`void`\>

***

### ~~sendChatMessage()~~

```ts
sendChatMessage(text, options?): Promise<Message>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:874](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L874)

#### Parameters

##### text

`string`

##### options?

[`SendTextOptions`](../interfaces/SendTextOptions)

#### Returns

`Promise`\<[`Message`](../interfaces/Message)\>

#### Deprecated

Use [sendMessage](#sendmessage) instead.

***

### sendFile()

```ts
sendFile(file, options?): Promise<{
  id: string;
}>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:905](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L905)

Send a file to participants via data stream.

#### Parameters

##### file

`File`

##### options?

[`SendFileOptions`](../interfaces/SendFileOptions)

#### Returns

`Promise`\<\{
  `id`: `string`;
\}\>

***

### sendMessage()

```ts
sendMessage(text, options?): Promise<Message>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:815](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L815)

Send a message to all participants in the room.

#### Parameters

##### text

`string`

The message text / payload.

##### options?

[`SendTextOptions`](../interfaces/SendTextOptions) & `object`

Optional settings such as `type`, `transient`, `topic`, etc.

#### Returns

`Promise`\<[`Message`](../interfaces/Message)\>

***

### sendText()

```ts
sendText(text, options?): Promise<{
  id: string;
}>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:888](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L888)

Send a complete text message to participants via data stream.

#### Parameters

##### text

`string`

##### options?

[`SendTextOptions`](../interfaces/SendTextOptions)

#### Returns

`Promise`\<\{
  `id`: `string`;
\}\>

***

### setAttributes()

```ts
setAttributes(attributes): Promise<void>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:751](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L751)

Set or update participant attributes. It will make updates only to keys that
are present in `attributes`, and will not override others.
Note: this requires `canUpdateMetadata` permission.

#### Parameters

##### attributes

`Record`\<`string`, `string`\>

#### Returns

`Promise`\<`void`\>

***

### setCameraEnabled()

```ts
setCameraEnabled(
   enabled, 
   captureOptions?, 
   publishOptions?
): Promise<LocalTrackPublication | undefined>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:134](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L134)

#### Parameters

##### enabled

`boolean`

##### captureOptions?

[`VideoCaptureOptions`](../interfaces/VideoCaptureOptions)

##### publishOptions?

[`TrackPublishOptions`](../interfaces/TrackPublishOptions)

#### Returns

`Promise`\<[`LocalTrackPublication`](LocalTrackPublication) \| `undefined`\>

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

### setMetadata()

```ts
setMetadata(metadata): Promise<void>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:732](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L732)

Sets and updates the metadata of the local participant.
Note: this requires `canUpdateMetadata` permission.

#### Parameters

##### metadata

`string`

#### Returns

`Promise`\<`void`\>

***

### setMicrophoneEnabled()

```ts
setMicrophoneEnabled(
   enabled, 
   captureOptions?, 
   publishOptions?
): Promise<LocalTrackPublication | undefined>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:163](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L163)

#### Parameters

##### enabled

`boolean`

##### captureOptions?

[`AudioCaptureOptions`](../interfaces/AudioCaptureOptions)

##### publishOptions?

[`TrackPublishOptions`](../interfaces/TrackPublishOptions)

#### Returns

`Promise`\<[`LocalTrackPublication`](LocalTrackPublication) \| `undefined`\>

***

### setName()

```ts
setName(name): Promise<void>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:741](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L741)

Sets and updates the name of the local participant.
Note: this requires `canUpdateMetadata` permission.

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`void`\>

***

### setScreenShareEnabled()

```ts
setScreenShareEnabled(
   enabled, 
   captureOptions?, 
   publishOptions?
): Promise<LocalTrackPublication | undefined>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:192](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L192)

#### Parameters

##### enabled

`boolean`

##### captureOptions?

[`ScreenShareCaptureOptions`](../interfaces/ScreenShareCaptureOptions)

##### publishOptions?

[`TrackPublishOptions`](../interfaces/TrackPublishOptions)

#### Returns

`Promise`\<[`LocalTrackPublication`](LocalTrackPublication) \| `undefined`\>

***

### setTrackSubscriptionPermissions()

```ts
setTrackSubscriptionPermissions(allParticipantsAllowed, participantTrackPermissions?): void;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:790](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L790)

Control who can subscribe to LocalParticipant's published tracks.

By default, all participants can subscribe. This allows fine-grained control over
who is able to subscribe at a participant and track level.

#### Parameters

##### allParticipantsAllowed

`boolean`

Allows all participants to subscribe all tracks.
  Takes precedence over `participantTrackPermissions` if set to true.

##### participantTrackPermissions?

[`ParticipantTrackPermission`](../interfaces/ParticipantTrackPermission)[] = `[]`

Full list of individual permissions per
  participant/track. Any omitted participants will not receive any permissions.

#### Returns

`void`

***

### streamBytes()

```ts
streamBytes(options?): Promise<ByteStreamWriter>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:914](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L914)

Open an incremental byte stream to participants.
Returns a writer that can be used to send byte chunks.

#### Parameters

##### options?

[`StreamBytesOptions`](../interfaces/StreamBytesOptions)

#### Returns

`Promise`\<[`ByteStreamWriter`](ByteStreamWriter)\>

***

### streamText()

```ts
streamText(options?): Promise<TextStreamWriter>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:897](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L897)

Open an incremental text stream to participants.
Returns a writer that can be used to send text chunks.

#### Parameters

##### options?

[`StreamTextOptions`](../interfaces/StreamTextOptions)

#### Returns

`Promise`\<[`TextStreamWriter`](TextStreamWriter)\>

***

### unpublishTrack()

```ts
unpublishTrack(track, stopOnUnpublish?): Promise<LocalTrackPublication | undefined>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:586](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L586)

Unpublish a track from the room.

#### Parameters

##### track

`MediaStreamTrack` \| [`LocalTrack`](LocalTrack)

The track or MediaStreamTrack to unpublish.

##### stopOnUnpublish?

`boolean`

Whether to stop the track after unpublishing.
  Defaults to [RoomOptions.stopLocalTrackOnUnpublish](../interfaces/RoomOptions#stoplocaltrackonunpublish) (`true`).

#### Returns

`Promise`\<[`LocalTrackPublication`](LocalTrackPublication) \| `undefined`\>

***

### unpublishTracks()

```ts
unpublishTracks(tracks): Promise<void>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:1072](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L1072)

Unpublish all tracks matching the given sources, or all tracks if no sources specified.

#### Parameters

##### tracks

[`LocalTrack`](LocalTrack)[]

#### Returns

`Promise`\<`void`\>

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

### updateRoomState()

```ts
updateRoomState(key, value): Promise<void>;
```

Defined in: [client-sdk-js/src/participant/LocalParticipant.ts:862](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/LocalParticipant.ts#L862)

Update a key in the room's shared state.

#### Parameters

##### key

`string`

##### value

`string`

#### Returns

`Promise`\<`void`\>

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
