---
title: "BaseStreamInfo"
---

Defined in: [client-sdk-js/src/types.ts:89](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L89)

Base information about an incoming data stream.

## Extended by

- [`ByteStreamInfo`](ByteStreamInfo)

## Properties

### attributes?

```ts
attributes?: Record<string, string>;
```

Defined in: [client-sdk-js/src/types.ts:96](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L96)

***

### id

```ts
id: string;
```

Defined in: [client-sdk-js/src/types.ts:90](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L90)

***

### mimeType

```ts
mimeType: string;
```

Defined in: [client-sdk-js/src/types.ts:91](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L91)

***

### size?

```ts
size?: number;
```

Defined in: [client-sdk-js/src/types.ts:95](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L95)

Total size in bytes for finite streams, `undefined` for unknown-size streams.

***

### timestamp

```ts
timestamp: number;
```

Defined in: [client-sdk-js/src/types.ts:93](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L93)

***

### topic

```ts
topic: string;
```

Defined in: [client-sdk-js/src/types.ts:92](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L92)
