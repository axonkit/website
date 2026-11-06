---
title: "StreamBytesOptions"
---

Defined in: [client-sdk-js/src/types.ts:57](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L57)

Options when streaming raw bytes.

## Properties

### attributes?

```ts
attributes?: Record<string, string>;
```

Defined in: [client-sdk-js/src/types.ts:65](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L65)

Key-value attributes attached to the stream.

***

### destinationIdentities?

```ts
destinationIdentities?: string[];
```

Defined in: [client-sdk-js/src/types.ts:67](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L67)

Participant identities to send to. If empty, sends to all.

***

### mimeType?

```ts
mimeType?: string;
```

Defined in: [client-sdk-js/src/types.ts:63](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L63)

MIME type of the data.

***

### name?

```ts
name?: string;
```

Defined in: [client-sdk-js/src/types.ts:59](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L59)

Human-readable name for the stream.

***

### topic?

```ts
topic?: string;
```

Defined in: [client-sdk-js/src/types.ts:61](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L61)

Topic identifier.

***

### totalSize?

```ts
totalSize?: number;
```

Defined in: [client-sdk-js/src/types.ts:69](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L69)

Total size in bytes if known ahead of time.
