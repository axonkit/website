---
title: "StreamTextOptions"
---

Defined in: [client-sdk-js/src/types.ts:43](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L43)

Options when opening an incremental text stream.

## Properties

### attributes?

```ts
attributes?: Record<string, string>;
```

Defined in: [client-sdk-js/src/types.ts:49](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L49)

Key-value attributes attached to the stream.

***

### destinationIdentities?

```ts
destinationIdentities?: string[];
```

Defined in: [client-sdk-js/src/types.ts:47](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L47)

Participant identities to send to. If empty, sends to all.

***

### topic?

```ts
topic?: string;
```

Defined in: [client-sdk-js/src/types.ts:45](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L45)

Topic identifier.

***

### totalSize?

```ts
totalSize?: number;
```

Defined in: [client-sdk-js/src/types.ts:51](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L51)

Total size in bytes if known ahead of time.
