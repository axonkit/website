---
title: "DataPublishOptions"
---

Defined in: [client-sdk-js/src/track/options.ts:568](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L568)

Options for publishing data via a DataChannel.

## Properties

### label?

```ts
label?: string;
```

Defined in: [client-sdk-js/src/track/options.ts:572](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L572)

DataChannel label.

***

### maxPacketLifeTime?

```ts
maxPacketLifeTime?: number;
```

Defined in: [client-sdk-js/src/track/options.ts:578](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L578)

Maximum packet lifetime in milliseconds.

***

### maxRetransmits?

```ts
maxRetransmits?: number;
```

Defined in: [client-sdk-js/src/track/options.ts:576](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L576)

Maximum number of retransmissions.

***

### name?

```ts
name?: string;
```

Defined in: [client-sdk-js/src/track/options.ts:570](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L570)

A human-readable name for the data track.

***

### ordered?

```ts
ordered?: boolean;
```

Defined in: [client-sdk-js/src/track/options.ts:574](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L574)

Whether messages should be delivered in order.
