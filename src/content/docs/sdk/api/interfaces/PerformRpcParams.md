---
title: "PerformRpcParams"
---

Defined in: [client-sdk-js/src/types.ts:134](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L134)

Parameters for initiating a P2P RPC call.

## Properties

### destinationIdentity

```ts
destinationIdentity: string;
```

Defined in: [client-sdk-js/src/types.ts:136](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L136)

The `identity` of the destination participant.

***

### method

```ts
method: string;
```

Defined in: [client-sdk-js/src/types.ts:138](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L138)

The method name to call.

***

### payload

```ts
payload: string;
```

Defined in: [client-sdk-js/src/types.ts:140](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L140)

The method payload (typically JSON string).

***

### responseTimeout?

```ts
responseTimeout?: number;
```

Defined in: [client-sdk-js/src/types.ts:145](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L145)

Timeout for receiving a response (milliseconds).

#### Default Value

```ts
15000
```
