---
title: "DefaultReconnectPolicy"
---

Defined in: [client-sdk-js/src/room/DefaultReconnectPolicy.ts:36](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/DefaultReconnectPolicy.ts#L36)

Default reconnect policy with exponential back-off and jitter.

## Example

```ts
const policy = new DefaultReconnectPolicy(10);
const delay = policy.nextRetryDelayInMs({ retryCount: 1, elapsedMs: 0 });
```

## Implements

- [`ReconnectPolicy`](../interfaces/ReconnectPolicy)

## Constructors

### Constructor

```ts
new DefaultReconnectPolicy(
   maxRetries?, 
   baseDelay?, 
   maxDelay?
): DefaultReconnectPolicy;
```

Defined in: [client-sdk-js/src/room/DefaultReconnectPolicy.ts:41](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/DefaultReconnectPolicy.ts#L41)

#### Parameters

##### maxRetries?

`number` = `10`

##### baseDelay?

`number` = `300`

##### maxDelay?

`number` = `10_000`

#### Returns

`DefaultReconnectPolicy`

## Methods

### nextRetryDelayInMs()

```ts
nextRetryDelayInMs(context): number | null;
```

Defined in: [client-sdk-js/src/room/DefaultReconnectPolicy.ts:51](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/DefaultReconnectPolicy.ts#L51)

Returns the number of milliseconds to wait before the next reconnect
attempt, or `null` if the policy says to stop trying.

#### Parameters

##### context

[`ReconnectContext`](../interfaces/ReconnectContext)

#### Returns

`number` \| `null`

#### Implementation of

[`ReconnectPolicy`](../interfaces/ReconnectPolicy).[`nextRetryDelayInMs`](../interfaces/ReconnectPolicy#nextretrydelayinms)

***

### reset()

```ts
reset(): void;
```

Defined in: [client-sdk-js/src/room/DefaultReconnectPolicy.ts:61](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/DefaultReconnectPolicy.ts#L61)

Optional hook invoked after a successful (re)connection.

#### Returns

`void`

#### Implementation of

[`ReconnectPolicy`](../interfaces/ReconnectPolicy).[`reset`](../interfaces/ReconnectPolicy#reset)
