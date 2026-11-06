---
title: "Message"
---

Defined in: [client-sdk-js/src/types.ts:4](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L4)

A message exchanged between participants (chat, whiteboard, document, etc.).

## Properties

### attachedFiles?

```ts
attachedFiles?: string[];
```

Defined in: [client-sdk-js/src/types.ts:18](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L18)

Optional file attachment identifiers.

***

### editTimestamp?

```ts
editTimestamp?: number;
```

Defined in: [client-sdk-js/src/types.ts:14](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L14)

Unix timestamp in milliseconds of the last edit, if edited.

***

### id

```ts
id: string;
```

Defined in: [client-sdk-js/src/types.ts:6](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L6)

Unique message identifier.

***

### message

```ts
message: string;
```

Defined in: [client-sdk-js/src/types.ts:12](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L12)

The text content of the message.

***

### timestamp

```ts
timestamp: number;
```

Defined in: [client-sdk-js/src/types.ts:10](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L10)

Unix timestamp in milliseconds when the message was sent.

***

### transient?

```ts
transient?: boolean;
```

Defined in: [client-sdk-js/src/types.ts:16](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L16)

If true, the message is not persisted (e.g. mouse coordinates).

***

### type?

```ts
type?: string;
```

Defined in: [client-sdk-js/src/types.ts:8](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L8)

Message type: "text", "whiteboard", "document", "image", "video", "audio", "file", "system", etc.
