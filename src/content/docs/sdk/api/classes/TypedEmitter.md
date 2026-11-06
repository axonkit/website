---
title: "TypedEmitter"
---

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:14](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L14)

A typed wrapper over Node's `EventEmitter`.

Extends `EventEmitter` with `declare` overrides so that `emit`, `on`,
`off`, etc. are type-safe without introducing circular-reference issues
that arise when using `typed-emitter` directly in `extends` clauses
whose event maps reference the class itself.

Runtime behaviour is 100% `EventEmitter`; this class adds zero runtime
code.

## Extends

- `EventEmitter`

## Extended by

- [`Room`](Room)
- [`Participant`](Participant)
- [`Track`](Track)
- [`ConnectionCheck`](ConnectionCheck)

## Type Parameters

### T

`T` *extends* `Record`\<`string`, (...`args`) => `void`\> = `Record`\<`string`, `never`\>

## Constructors

### Constructor

```ts
new TypedEmitter<T>(): TypedEmitter<T>;
```

#### Returns

`TypedEmitter`\<`T`\>

#### Inherited from

`EventEmitter.constructor`

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

`E` *extends* keyof `T` ? `T`\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Overrides

`EventEmitter.addListener`

***

### emit

```ts
emit: <E>(event, ...args) => boolean;
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:17](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L17)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

##### args

...`Parameters`\<`T`\[`E`\]\>

#### Returns

`boolean`

#### Overrides

`EventEmitter.emit`

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

#### Overrides

`EventEmitter.listenerCount`

***

### listeners

```ts
listeners: <E>(event) => E extends keyof T ? T[E][] : ((...args) => void)[];
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:49](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L49)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

#### Returns

`E` *extends* keyof `T` ? `T`\[`E`\][] : ((...`args`) => `void`)[]

#### Overrides

`EventEmitter.listeners`

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

`E` *extends* keyof `T` ? `T`\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Overrides

`EventEmitter.off`

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

`E` *extends* keyof `T` ? `T`\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Overrides

`EventEmitter.on`

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

`E` *extends* keyof `T` ? `T`\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Overrides

`EventEmitter.once`

***

### rawListeners

```ts
rawListeners: <E>(event) => E extends keyof T ? T[E][] : ((...args) => void)[];
```

Defined in: [client-sdk-js/src/utils/typedEmitter.ts:53](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/typedEmitter.ts#L53)

#### Type Parameters

##### E

`E` *extends* `string` \| `number`

#### Parameters

##### event

`E`

#### Returns

`E` *extends* keyof `T` ? `T`\[`E`\][] : ((...`args`) => `void`)[]

#### Overrides

`EventEmitter.rawListeners`

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

#### Overrides

`EventEmitter.removeAllListeners`

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

`E` *extends* keyof `T` ? `T`\[`E`\] : (...`args`) => `void`

#### Returns

`this`

#### Overrides

`EventEmitter.removeListener`

***

### defaultMaxListeners

```ts
static defaultMaxListeners: number;
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:5

#### Inherited from

`EventEmitter.defaultMaxListeners`

## Methods

### eventNames()

```ts
eventNames(): (string | number)[];
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:7

#### Returns

(`string` \| `number`)[]

#### Inherited from

`EventEmitter.eventNames`

***

### getMaxListeners()

```ts
getMaxListeners(): number;
```

Defined in: client-sdk-js/node\_modules/.pnpm/@types+events@3.0.3/node\_modules/@types/events/index.d.ts:9

#### Returns

`number`

#### Inherited from

`EventEmitter.getMaxListeners`

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

`EventEmitter.prependListener`

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

`EventEmitter.prependOnceListener`

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

`EventEmitter.setMaxListeners`

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

`EventEmitter.listenerCount`
