---
title: "ConnectionCheck"
---

Defined in: [client-sdk-js/src/connectionHelper/ConnectionCheck.ts:27](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/connectionHelper/ConnectionCheck.ts#L27)

Runs a series of connectivity checks against a given server URL.
Useful for diagnosing connection problems before entering a room.

## Extends

- [`TypedEmitter`](TypedEmitter)\<`ConnectionCheckEvents`\>

## Constructors

### Constructor

```ts
new ConnectionCheck(url): ConnectionCheck;
```

Defined in: [client-sdk-js/src/connectionHelper/ConnectionCheck.ts:30](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/connectionHelper/ConnectionCheck.ts#L30)

#### Parameters

##### url

`string`

#### Returns

`ConnectionCheck`

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

`E` *extends* `"statusChanged"` ? `ConnectionCheckEvents`\[`E`\] : (...`args`) => `void`

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

`E` *extends* `"statusChanged"`

#### Parameters

##### event

`E`

##### args

...`Parameters`\<`ConnectionCheckEvents`\[`E`\]\>

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
listeners: <E>(event) => E extends "statusChanged" ? ConnectionCheckEvents[E][] : ((...args) => void)[];
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:49](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L49)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

#### Returns

`E` *extends* `"statusChanged"` ? `ConnectionCheckEvents`\[`E`\][] : ((...`args`) => `void`)[]

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

`E` *extends* `"statusChanged"` ? `ConnectionCheckEvents`\[`E`\] : (...`args`) => `void`

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

`E` *extends* `"statusChanged"` ? `ConnectionCheckEvents`\[`E`\] : (...`args`) => `void`

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

`E` *extends* `"statusChanged"` ? `ConnectionCheckEvents`\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Inherited from

[`TypedEmitter`](TypedEmitter).[`once`](TypedEmitter#once)

***

### rawListeners

```ts
rawListeners: <E>(event) => E extends "statusChanged" ? ConnectionCheckEvents[E][] : ((...args) => void)[];
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:53](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L53)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

#### Returns

`E` *extends* `"statusChanged"` ? `ConnectionCheckEvents`\[`E`\][] : ((...`args`) => `void`)[]

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

`E` *extends* `"statusChanged"` ? `ConnectionCheckEvents`\[`E`\] : (...`args`) => `void`

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

## Methods

### checkAll()

```ts
checkAll(): Promise<CheckInfo[]>;
```

Defined in: [client-sdk-js/src/connectionHelper/ConnectionCheck.ts:75](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/connectionHelper/ConnectionCheck.ts#L75)

#### Returns

`Promise`\<[`CheckInfo`](../interfaces/CheckInfo)[]\>

***

### checkPublishAudio()

```ts
checkPublishAudio(): Promise<CheckInfo>;
```

Defined in: [client-sdk-js/src/connectionHelper/ConnectionCheck.ts:63](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/connectionHelper/ConnectionCheck.ts#L63)

#### Returns

`Promise`\<[`CheckInfo`](../interfaces/CheckInfo)\>

***

### checkPublishVideo()

```ts
checkPublishVideo(): Promise<CheckInfo>;
```

Defined in: [client-sdk-js/src/connectionHelper/ConnectionCheck.ts:69](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/connectionHelper/ConnectionCheck.ts#L69)

#### Returns

`Promise`\<[`CheckInfo`](../interfaces/CheckInfo)\>

***

### checkSignalConnectivity()

```ts
checkSignalConnectivity(): Promise<CheckInfo>;
```

Defined in: [client-sdk-js/src/connectionHelper/ConnectionCheck.ts:35](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/connectionHelper/ConnectionCheck.ts#L35)

#### Returns

`Promise`\<[`CheckInfo`](../interfaces/CheckInfo)\>

***

### checkWebRTC()

```ts
checkWebRTC(): Promise<CheckInfo>;
```

Defined in: [client-sdk-js/src/connectionHelper/ConnectionCheck.ts:51](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/connectionHelper/ConnectionCheck.ts#L51)

#### Returns

`Promise`\<[`CheckInfo`](../interfaces/CheckInfo)\>

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
