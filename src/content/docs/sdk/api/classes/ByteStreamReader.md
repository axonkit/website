---
title: "ByteStreamReader"
---

Defined in: [client-sdk-js/src/data-stream/DataStreamManager.ts:126](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/data-stream/DataStreamManager.ts#L126)

## Implements

- `AsyncIterable`\<`Uint8Array`\>

## Properties

### info

```ts
readonly info: ByteStreamInfo;
```

Defined in: [client-sdk-js/src/data-stream/DataStreamManager.ts:127](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/data-stream/DataStreamManager.ts#L127)

## Methods

### \[asyncIterator\]()

```ts
[asyncIterator](): AsyncIterator<Uint8Array<ArrayBufferLike>>;
```

Defined in: [client-sdk-js/src/data-stream/DataStreamManager.ts:136](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/data-stream/DataStreamManager.ts#L136)

#### Returns

`AsyncIterator`\<`Uint8Array`\<`ArrayBufferLike`\>\>

#### Implementation of

`AsyncIterable.[asyncIterator]`

***

### readAll()

```ts
readAll(): Promise<Uint8Array<ArrayBufferLike>>;
```

Defined in: [client-sdk-js/src/data-stream/DataStreamManager.ts:151](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/data-stream/DataStreamManager.ts#L151)

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>
