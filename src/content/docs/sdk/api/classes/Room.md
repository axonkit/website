---
title: "Room"
---

Defined in: [client-sdk-js/src/Room.ts:184](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L184)

A typed wrapper over Node's `EventEmitter`.

Extends `EventEmitter` with `declare` overrides so that `emit`, `on`,
`off`, etc. are type-safe without introducing circular-reference issues
that arise when using `typed-emitter` directly in `extends` clauses
whose event maps reference the class itself.

Runtime behaviour is 100% `EventEmitter`; this class adds zero runtime
code.

## Extends

- [`TypedEmitter`](TypedEmitter)\<[`RoomEvents`](../type-aliases/RoomEvents)\>

## Constructors

### Constructor

```ts
new Room(options?): Room;
```

Defined in: [client-sdk-js/src/Room.ts:233](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L233)

#### Parameters

##### options?

[`RoomOptions`](../interfaces/RoomOptions)

#### Returns

`Room`

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

`E` *extends* keyof [`RoomEvents`](../type-aliases/RoomEvents) ? [`RoomEvents`](../type-aliases/RoomEvents)\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`TypedEmitter`](TypedEmitter).[`addListener`](TypedEmitter#addlistener)

***

### emit

```ts
emit: <E>(event, ...args) => boolean;
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:17](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L17)

#### Type Parameters

##### E

`E` *extends* [`RoomEvent`](../enumerations/RoomEvent)

#### Parameters

##### event

`E`

##### args

...`Parameters`\<[`RoomEvents`](../type-aliases/RoomEvents)\[`E`\]\>

#### Returns

`boolean`

#### Inherited from

[`TypedEmitter`](TypedEmitter).[`emit`](TypedEmitter#emit)

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
listeners: <E>(event) => E extends keyof RoomEvents ? RoomEvents[E][] : ((...args) => void)[];
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:49](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L49)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

#### Returns

`E` *extends* keyof [`RoomEvents`](../type-aliases/RoomEvents) ? [`RoomEvents`](../type-aliases/RoomEvents)\[`E`\][] : ((...`args`) => `void`)[]

#### Inherited from

[`TypedEmitter`](TypedEmitter).[`listeners`](TypedEmitter#listeners)

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

`E` *extends* keyof [`RoomEvents`](../type-aliases/RoomEvents) ? [`RoomEvents`](../type-aliases/RoomEvents)\[`E`\] : (...`args`) => `void`

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

`E` *extends* keyof [`RoomEvents`](../type-aliases/RoomEvents) ? [`RoomEvents`](../type-aliases/RoomEvents)\[`E`\] : (...`args`) => `void`

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

`E` *extends* keyof [`RoomEvents`](../type-aliases/RoomEvents) ? [`RoomEvents`](../type-aliases/RoomEvents)\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`TypedEmitter`](TypedEmitter).[`once`](TypedEmitter#once)

***

### rawListeners

```ts
rawListeners: <E>(event) => E extends keyof RoomEvents ? RoomEvents[E][] : ((...args) => void)[];
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:53](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L53)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

#### Returns

`E` *extends* keyof [`RoomEvents`](../type-aliases/RoomEvents) ? [`RoomEvents`](../type-aliases/RoomEvents)\[`E`\][] : ((...`args`) => `void`)[]

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

`E` *extends* keyof [`RoomEvents`](../type-aliases/RoomEvents) ? [`RoomEvents`](../type-aliases/RoomEvents)\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`TypedEmitter`](TypedEmitter).[`removeListener`](TypedEmitter#removelistener)

***

### defaultMaxListeners

```ts
static defaultMaxListeners: number;
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:5

#### Inherited from

[`TypedEmitter`](TypedEmitter).[`defaultMaxListeners`](TypedEmitter#defaultmaxlisteners)

## Accessors

### activeSpeakers

#### Get Signature

```ts
get activeSpeakers(): Participant<TrackPublication>[];
```

Defined in: [client-sdk-js/src/Room.ts:363](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L363)

List of participants currently speaking, ordered by audio level.

##### Returns

[`Participant`](Participant)\<[`TrackPublication`](TrackPublication)\>[]

***

### canPlaybackAudio

#### Get Signature

```ts
get canPlaybackAudio(): boolean;
```

Defined in: [client-sdk-js/src/Room.ts:328](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L328)

Whether audio can be played back automatically (i.e. no autoplay restriction).

##### Returns

`boolean`

***

### canPlaybackVideo

#### Get Signature

```ts
get canPlaybackVideo(): boolean;
```

Defined in: [client-sdk-js/src/Room.ts:333](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L333)

Whether video can be played back automatically.

##### Returns

`boolean`

***

### groups

#### Get Signature

```ts
get groups(): ReadonlyMap<string, GroupInfo>;
```

Defined in: [client-sdk-js/src/Room.ts:285](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L285)

All active groups (breakout rooms) in this room.

##### Returns

`ReadonlyMap`\<`string`, [`GroupInfo`](../interfaces/GroupInfo)\>

***

### isRecording

#### Get Signature

```ts
get isRecording(): boolean;
```

Defined in: [client-sdk-js/src/Room.ts:338](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L338)

Whether the room is currently being recorded.

##### Returns

`boolean`

***

### localParticipant

#### Get Signature

```ts
get localParticipant(): LocalParticipant;
```

Defined in: [client-sdk-js/src/Room.ts:269](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L269)

##### Returns

[`LocalParticipant`](LocalParticipant)

***

### metadata

#### Get Signature

```ts
get metadata(): string | undefined;
```

Defined in: [client-sdk-js/src/Room.ts:343](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L343)

Room-level metadata (set by the server).

##### Returns

`string` \| `undefined`

***

### name

#### Get Signature

```ts
get name(): string;
```

Defined in: [client-sdk-js/src/Room.ts:257](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L257)

##### Returns

`string`

***

### numParticipants

#### Get Signature

```ts
get numParticipants(): number;
```

Defined in: [client-sdk-js/src/Room.ts:348](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L348)

Number of participants currently in the room.

##### Returns

`number`

***

### numPublishers

#### Get Signature

```ts
get numPublishers(): number;
```

Defined in: [client-sdk-js/src/Room.ts:353](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L353)

Number of participants that are actively publishing tracks.

##### Returns

`number`

***

### remoteParticipants

#### Get Signature

```ts
get remoteParticipants(): Map<string, RemoteParticipant>;
```

Defined in: [client-sdk-js/src/Room.ts:273](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L273)

##### Returns

`Map`\<`string`, [`RemoteParticipant`](RemoteParticipant)\>

***

### rtt

#### Get Signature

```ts
get rtt(): number;
```

Defined in: [client-sdk-js/src/Room.ts:925](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L925)

##### Returns

`number`

***

### serverInfo

#### Get Signature

```ts
get serverInfo(): ServerInfo | undefined;
```

Defined in: [client-sdk-js/src/Room.ts:265](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L265)

##### Returns

[`ServerInfo`](../interfaces/ServerInfo) \| `undefined`

***

### sharedState

#### Get Signature

```ts
get sharedState(): ReadonlyMap<string, string>;
```

Defined in: [client-sdk-js/src/Room.ts:290](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L290)

Room-level shared state KV (for collaboration features like whiteboard, shared documents).

##### Returns

`ReadonlyMap`\<`string`, `string`\>

***

### sid

#### Get Signature

```ts
get sid(): string;
```

Defined in: [client-sdk-js/src/Room.ts:261](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L261)

##### Returns

`string`

***

### state

#### Get Signature

```ts
get state(): ConnectionState;
```

Defined in: [client-sdk-js/src/Room.ts:253](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L253)

##### Returns

[`ConnectionState`](../enumerations/ConnectionState)

## Methods

### connect()

```ts
connect(
   url, 
   token?, 
   options?
): Promise<void>;
```

Defined in: [client-sdk-js/src/Room.ts:501](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L501)

#### Parameters

##### url

`string`

##### token?

`string`

##### options?

`Partial`\<`InternalRoomConnectOptions`\>

#### Returns

`Promise`\<`void`\>

***

### createGroup()

```ts
createGroup(name, permissions?): Promise<GroupInfo>;
```

Defined in: [client-sdk-js/src/Room.ts:395](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L395)

Create a new group (breakout room) within this room.
Requires `canManageGroups` permission.

#### Parameters

##### name

`string`

##### permissions?

[`ParticipantPermission`](../interfaces/ParticipantPermission)

#### Returns

`Promise`\<[`GroupInfo`](../interfaces/GroupInfo)\>

***

### deleteGroup()

```ts
deleteGroup(groupId): Promise<void>;
```

Defined in: [client-sdk-js/src/Room.ts:411](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L411)

Delete a group. All participants in the group are returned to the main room
and their permissions revert to room-level defaults.
Requires `canManageGroups` permission.

#### Parameters

##### groupId

`string`

#### Returns

`Promise`\<`void`\>

***

### disconnect()

```ts
disconnect(stopTracks?): Promise<void>;
```

Defined in: [client-sdk-js/src/Room.ts:653](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L653)

Disconnect from the room.

#### Parameters

##### stopTracks?

`boolean` = `true`

Whether to stop local tracks after disconnecting.
  Defaults to `true`.

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

[`TypedEmitter`](TypedEmitter).[`eventNames`](TypedEmitter#eventnames)

***

### getActiveDevice()

```ts
getActiveDevice(kind): string | undefined;
```

Defined in: [client-sdk-js/src/Room.ts:1012](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L1012)

Returns the device ID currently active for a given kind, if known.

#### Parameters

##### kind

`MediaDeviceKind`

#### Returns

`string` \| `undefined`

***

### getGroupParticipants()

```ts
getGroupParticipants(groupId): Participant<TrackPublication>[];
```

Defined in: [client-sdk-js/src/Room.ts:298](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L298)

Get all participants currently in the specified group.
Includes the local participant if they are in the group.

#### Parameters

##### groupId

`string`

#### Returns

[`Participant`](Participant)\<[`TrackPublication`](TrackPublication)\>[]

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

### getParticipantByIdentity()

```ts
getParticipantByIdentity(identity): RemoteParticipant | undefined;
```

Defined in: [client-sdk-js/src/Room.ts:376](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L376)

Look up a remote participant by their identity.

#### Parameters

##### identity

`string`

#### Returns

[`RemoteParticipant`](RemoteParticipant) \| `undefined`

***

### getParticipants()

```ts
getParticipants(): Participant<TrackPublication>[];
```

Defined in: [client-sdk-js/src/Room.ts:314](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L314)

Get all participants.

#### Returns

[`Participant`](Participant)\<[`TrackPublication`](TrackPublication)\>[]

***

### getTransportStats()

```ts
getTransportStats(): Promise<{
  recv?: RTCStatsReport;
  send?: RTCStatsReport;
}>;
```

Defined in: [client-sdk-js/src/Room.ts:280](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L280)

Returns WebRTC stats for the underlying send and receive transports.

#### Returns

`Promise`\<\{
  `recv?`: `RTCStatsReport`;
  `send?`: `RTCStatsReport`;
\}\>

***

### listGroups()

```ts
listGroups(): Promise<GroupInfo[]>;
```

Defined in: [client-sdk-js/src/Room.ts:418](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L418)

List all active groups in this room.

#### Returns

`Promise`\<[`GroupInfo`](../interfaces/GroupInfo)[]\>

***

### pinParticipant()

```ts
pinParticipant(participantSid): Promise<void>;
```

Defined in: [client-sdk-js/src/Room.ts:430](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L430)

Pin a remote participant so their media tracks are always received,
regardless of active speaker rotation. Pinned participants occupy
lastN slots with highest priority.

#### Parameters

##### participantSid

`string`

#### Returns

`Promise`\<`void`\>

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

### registerByteStreamHandler()

```ts
registerByteStreamHandler(topic, handler): void;
```

Defined in: [client-sdk-js/src/Room.ts:1062](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L1062)

Register a handler for incoming byte streams on a specific topic.

#### Parameters

##### topic

`string`

##### handler

[`ByteStreamHandler`](../type-aliases/ByteStreamHandler)

#### Returns

`void`

***

### registerRpcMethod()

```ts
registerRpcMethod(method, handler): void;
```

Defined in: [client-sdk-js/src/Room.ts:1026](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L1026)

Register an RPC method handler. When a remote participant calls
`performRpc` with the given method name, the handler is invoked.

#### Parameters

##### method

`string`

Method name to handle.

##### handler

(`data`) => `Promise`\<`string`\>

Async function that receives invocation data and returns
  a string payload.

#### Returns

`void`

***

### registerTextStreamHandler()

```ts
registerTextStreamHandler(topic, handler): void;
```

Defined in: [client-sdk-js/src/Room.ts:1048](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L1048)

Register a handler for incoming text streams on a specific topic.

#### Parameters

##### topic

`string`

##### handler

[`TextStreamHandler`](../type-aliases/TextStreamHandler)

#### Returns

`void`

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

### startAudio()

```ts
startAudio(): Promise<void>;
```

Defined in: [client-sdk-js/src/Room.ts:958](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L958)

Attempt to start audio playback on all remote audio tracks.
Should be called from a user interaction handler when
`canPlaybackAudio` is `false`.

#### Returns

`Promise`\<`void`\>

***

### startVideo()

```ts
startVideo(): Promise<void>;
```

Defined in: [client-sdk-js/src/Room.ts:986](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L986)

Attempt to start video playback on all remote video tracks.
Should be called from a user interaction handler when
`canPlaybackVideo` is `false`.

#### Returns

`Promise`\<`void`\>

***

### switchActiveDevice()

```ts
switchActiveDevice(
   kind, 
   deviceId, 
   exact?
): Promise<void>;
```

Defined in: [client-sdk-js/src/Room.ts:463](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L463)

Switch the active device for a given kind across all published tracks.

#### Parameters

##### kind

`MediaDeviceKind`

`videoinput`, `audioinput`, or `audiooutput`.

##### deviceId

`string`

The device ID to switch to.

##### exact?

`boolean` = `true`

If `true`, sets the `deviceId` constraint to `exact`.
  Defaults to `true`.

#### Returns

`Promise`\<`void`\>

***

### unpinParticipant()

```ts
unpinParticipant(participantSid): Promise<void>;
```

Defined in: [client-sdk-js/src/Room.ts:438](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L438)

Unpin a previously pinned participant. Their media subscription will
then be subject to active speaker rotation under lastN rules.

#### Parameters

##### participantSid

`string`

#### Returns

`Promise`\<`void`\>

***

### unregisterByteStreamHandler()

```ts
unregisterByteStreamHandler(topic): void;
```

Defined in: [client-sdk-js/src/Room.ts:1069](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L1069)

Unregister a previously registered byte stream handler.

#### Parameters

##### topic

`string`

#### Returns

`void`

***

### unregisterRpcMethod()

```ts
unregisterRpcMethod(method): void;
```

Defined in: [client-sdk-js/src/Room.ts:1038](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L1038)

Remove a previously registered RPC method handler.

#### Parameters

##### method

`string`

#### Returns

`void`

***

### unregisterTextStreamHandler()

```ts
unregisterTextStreamHandler(topic): void;
```

Defined in: [client-sdk-js/src/Room.ts:1055](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L1055)

Unregister a previously registered text stream handler.

#### Parameters

##### topic

`string`

#### Returns

`void`

***

### getLocalDevices()

```ts
static getLocalDevices(kind?): Promise<MediaDeviceInfo[]>;
```

Defined in: [client-sdk-js/src/Room.ts:448](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L448)

Enumerate available media input/output devices.

#### Parameters

##### kind?

`MediaDeviceKind`

Filter by device kind. If omitted, all devices are returned.

#### Returns

`Promise`\<`MediaDeviceInfo`[]\>

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
