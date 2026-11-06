---
title: "TextStreamReader"
---

Defined in: [client-sdk-js/src/data-stream/DataStreamManager.ts:92](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/data-stream/DataStreamManager.ts#L92)

## Implements

- `AsyncIterable`\<`string`\>

## Properties

### info

```ts
readonly info: BaseStreamInfo;
```

Defined in: [client-sdk-js/src/data-stream/DataStreamManager.ts:93](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/data-stream/DataStreamManager.ts#L93)

## Methods

### \[asyncIterator\]()

```ts
[asyncIterator](): AsyncIterator<string>;
```

Defined in: [client-sdk-js/src/data-stream/DataStreamManager.ts:102](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/data-stream/DataStreamManager.ts#L102)

#### Returns

`AsyncIterator`\<`string`\>

#### Implementation of

`AsyncIterable.[asyncIterator]`

***

### readAll()

```ts
readAll(): Promise<string>;
```

Defined in: [client-sdk-js/src/data-stream/DataStreamManager.ts:117](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/data-stream/DataStreamManager.ts#L117)

#### Returns

`Promise`\<`string`\>
