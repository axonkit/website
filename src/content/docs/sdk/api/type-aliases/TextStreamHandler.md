---
title: "TextStreamHandler"
---

```ts
type TextStreamHandler = (reader, sender) => void;
```

Defined in: [client-sdk-js/src/types.ts:124](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L124)

Handler called when an incoming text stream is received on a registered topic.

## Parameters

### reader

[`TextStreamReader`](../classes/TextStreamReader)

### sender

[`StreamSenderInfo`](../interfaces/StreamSenderInfo)

## Returns

`void`
