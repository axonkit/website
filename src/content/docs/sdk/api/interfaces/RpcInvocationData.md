---
title: "RpcInvocationData"
---

Defined in: [client-sdk-js/src/types.ts:151](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L151)

Data passed to an RPC method handler.

## Properties

### callerIdentity

```ts
callerIdentity: string;
```

Defined in: [client-sdk-js/src/types.ts:155](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L155)

The identity of the caller.

***

### payload

```ts
payload: string;
```

Defined in: [client-sdk-js/src/types.ts:157](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L157)

The payload of the request.

***

### requestId

```ts
requestId: string;
```

Defined in: [client-sdk-js/src/types.ts:153](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L153)

The unique request ID.

***

### responseTimeout

```ts
responseTimeout: number;
```

Defined in: [client-sdk-js/src/types.ts:159](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/types.ts#L159)

The maximum time the caller will wait for a response.
