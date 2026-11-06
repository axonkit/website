---
title: "ReconnectPolicy"
---

Defined in: [client-sdk-js/src/room/DefaultReconnectPolicy.ts:14](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/DefaultReconnectPolicy.ts#L14)

Custom reconnection strategy. Provide an implementation via
[RoomOptions.reconnectPolicy](RoomOptions#reconnectpolicy) to control retry behaviour after a
connection interruption.

## Methods

### nextRetryDelayInMs()

```ts
nextRetryDelayInMs(context): number | null;
```

Defined in: [client-sdk-js/src/room/DefaultReconnectPolicy.ts:19](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/DefaultReconnectPolicy.ts#L19)

Returns the number of milliseconds to wait before the next reconnect
attempt, or `null` if the policy says to stop trying.

#### Parameters

##### context

[`ReconnectContext`](ReconnectContext)

#### Returns

`number` \| `null`

***

### reset()?

```ts
reset?(): void;
```

Defined in: [client-sdk-js/src/room/DefaultReconnectPolicy.ts:24](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/DefaultReconnectPolicy.ts#L24)

Optional hook invoked after a successful (re)connection.

#### Returns

`void`
