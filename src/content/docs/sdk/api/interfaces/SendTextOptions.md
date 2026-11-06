---
title: "SendTextOptions"
---

Defined in: [client-sdk-js/src/types.ts:27](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L27)

Options when sending a text message.

## Properties

### attachments?

```ts
attachments?: string[];
```

Defined in: [client-sdk-js/src/types.ts:33](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L33)

Optional file attachment identifiers.

***

### attributes?

```ts
attributes?: Record<string, string>;
```

Defined in: [client-sdk-js/src/types.ts:37](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L37)

Key-value attributes attached to the stream.

***

### destinationIdentities?

```ts
destinationIdentities?: string[];
```

Defined in: [client-sdk-js/src/types.ts:31](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L31)

Participant identities to send to. If empty, sends to all.

***

### onProgress?

```ts
onProgress?: (progress) => void;
```

Defined in: [client-sdk-js/src/types.ts:35](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L35)

Progress callback (0–1).

#### Parameters

##### progress

`number`

#### Returns

`void`

***

### topic?

```ts
topic?: string;
```

Defined in: [client-sdk-js/src/types.ts:29](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L29)

Topic identifier used to route the message to appropriate handlers.
