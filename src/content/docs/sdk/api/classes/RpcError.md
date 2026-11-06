---
title: "RpcError"
---

Defined in: [client-sdk-js/src/rpc.ts:7](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/rpc.ts#L7)

Specialized error for RPC methods.

When thrown in an RPC handler, the `message` and `code` are sent back to
the caller. Built-in error codes 1001–1999 are reserved.

## Extends

- `Error`

## Constructors

### Constructor

```ts
new RpcError(
   code, 
   message, 
   data?
): RpcError;
```

Defined in: [client-sdk-js/src/rpc.ts:14](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/rpc.ts#L14)

#### Parameters

##### code

`number`

##### message

`string`

##### data?

`string`

#### Returns

`RpcError`

#### Overrides

`Error.constructor`

## Properties

### code

```ts
code: number;
```

Defined in: [client-sdk-js/src/rpc.ts:11](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/rpc.ts#L11)

***

### data?

```ts
data?: string;
```

Defined in: [client-sdk-js/src/rpc.ts:12](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/rpc.ts#L12)

***

### message

```ts
message: string;
```

Defined in: website/node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1075

#### Inherited from

`Error.message`

***

### name

```ts
name: string;
```

Defined in: website/node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1074

#### Inherited from

`Error.name`

***

### stack?

```ts
stack?: string;
```

Defined in: website/node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.stack`

***

### ErrorCode

```ts
static ErrorCode: object;
```

Defined in: [client-sdk-js/src/rpc.ts:20](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/rpc.ts#L20)

#### APPLICATION\_ERROR

```ts
readonly APPLICATION_ERROR: 1500 = 1500;
```

#### CONNECTION\_TIMEOUT

```ts
readonly CONNECTION_TIMEOUT: 1501 = 1501;
```

#### RECIPIENT\_DISCONNECTED

```ts
readonly RECIPIENT_DISCONNECTED: 1503 = 1503;
```

#### RECIPIENT\_NOT\_FOUND

```ts
readonly RECIPIENT_NOT_FOUND: 1401 = 1401;
```

#### REQUEST\_PAYLOAD\_TOO\_LARGE

```ts
readonly REQUEST_PAYLOAD_TOO_LARGE: 1402 = 1402;
```

#### RESPONSE\_PAYLOAD\_TOO\_LARGE

```ts
readonly RESPONSE_PAYLOAD_TOO_LARGE: 1504 = 1504;
```

#### RESPONSE\_TIMEOUT

```ts
readonly RESPONSE_TIMEOUT: 1502 = 1502;
```

#### SEND\_FAILED

```ts
readonly SEND_FAILED: 1505 = 1505;
```

#### UNSUPPORTED\_METHOD

```ts
readonly UNSUPPORTED_METHOD: 1400 = 1400;
```

***

### ErrorMessage

```ts
static ErrorMessage: Record<keyof typeof ErrorCode, string>;
```

Defined in: [client-sdk-js/src/rpc.ts:32](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/rpc.ts#L32)

***

### MAX\_DATA\_BYTES

```ts
static MAX_DATA_BYTES: number = 15360;
```

Defined in: [client-sdk-js/src/rpc.ts:9](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/rpc.ts#L9)

***

### MAX\_MESSAGE\_BYTES

```ts
static MAX_MESSAGE_BYTES: number = 256;
```

Defined in: [client-sdk-js/src/rpc.ts:8](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/rpc.ts#L8)

## Methods

### builtIn()

```ts
static builtIn(key, data?): RpcError;
```

Defined in: [client-sdk-js/src/rpc.ts:45](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/rpc.ts#L45)

Create a built-in error by key name.

#### Parameters

##### key

  \| `"APPLICATION_ERROR"`
  \| `"CONNECTION_TIMEOUT"`
  \| `"RESPONSE_TIMEOUT"`
  \| `"RECIPIENT_DISCONNECTED"`
  \| `"RESPONSE_PAYLOAD_TOO_LARGE"`
  \| `"SEND_FAILED"`
  \| `"UNSUPPORTED_METHOD"`
  \| `"RECIPIENT_NOT_FOUND"`
  \| `"REQUEST_PAYLOAD_TOO_LARGE"`

##### data?

`string`

#### Returns

`RpcError`
