---
title: "SendFileOptions"
---

Defined in: [client-sdk-js/src/types.ts:75](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L75)

Options when sending a file.

## Properties

### destinationIdentities?

```ts
destinationIdentities?: string[];
```

Defined in: [client-sdk-js/src/types.ts:81](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L81)

Participant identities to send to.

***

### mimeType?

```ts
mimeType?: string;
```

Defined in: [client-sdk-js/src/types.ts:79](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L79)

MIME type override. If omitted, derived from the File object.

***

### onProgress?

```ts
onProgress?: (progress) => void;
```

Defined in: [client-sdk-js/src/types.ts:83](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L83)

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

Defined in: [client-sdk-js/src/types.ts:77](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L77)

Topic identifier.
