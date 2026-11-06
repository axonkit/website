---
title: "ByteStreamInfo"
---

Defined in: [client-sdk-js/src/types.ts:102](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L102)

Information about an incoming byte stream.

## Extends

- [`BaseStreamInfo`](BaseStreamInfo)

## Properties

### attributes?

```ts
attributes?: Record<string, string>;
```

Defined in: [client-sdk-js/src/types.ts:96](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L96)

#### Inherited from

[`BaseStreamInfo`](BaseStreamInfo).[`attributes`](BaseStreamInfo#attributes)

***

### id

```ts
id: string;
```

Defined in: [client-sdk-js/src/types.ts:90](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L90)

#### Inherited from

[`BaseStreamInfo`](BaseStreamInfo).[`id`](BaseStreamInfo#id)

***

### mimeType

```ts
mimeType: string;
```

Defined in: [client-sdk-js/src/types.ts:91](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L91)

#### Inherited from

[`BaseStreamInfo`](BaseStreamInfo).[`mimeType`](BaseStreamInfo#mimetype)

***

### name

```ts
name: string;
```

Defined in: [client-sdk-js/src/types.ts:103](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L103)

***

### size?

```ts
size?: number;
```

Defined in: [client-sdk-js/src/types.ts:95](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L95)

Total size in bytes for finite streams, `undefined` for unknown-size streams.

#### Inherited from

[`BaseStreamInfo`](BaseStreamInfo).[`size`](BaseStreamInfo#size)

***

### timestamp

```ts
timestamp: number;
```

Defined in: [client-sdk-js/src/types.ts:93](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L93)

#### Inherited from

[`BaseStreamInfo`](BaseStreamInfo).[`timestamp`](BaseStreamInfo#timestamp)

***

### topic

```ts
topic: string;
```

Defined in: [client-sdk-js/src/types.ts:92](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L92)

#### Inherited from

[`BaseStreamInfo`](BaseStreamInfo).[`topic`](BaseStreamInfo#topic)
