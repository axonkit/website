---
title: "AxonError"
---

Defined in: [client-sdk-js/src/protocol/errors.ts:11](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/protocol/errors.ts#L11)

## Extends

- `Error`

## Constructors

### Constructor

```ts
new AxonError(
   code, 
   message, 
   logId?
): AxonError;
```

Defined in: [client-sdk-js/src/protocol/errors.ts:15](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/protocol/errors.ts#L15)

#### Parameters

##### code

[`ErrorCode`](../enumerations/ErrorCode)

##### message

`string`

##### logId?

`string`

#### Returns

`AxonError`

#### Overrides

`Error.constructor`

## Properties

### code

```ts
code: ErrorCode;
```

Defined in: [client-sdk-js/src/protocol/errors.ts:12](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/protocol/errors.ts#L12)

***

### logId?

```ts
logId?: string;
```

Defined in: [client-sdk-js/src/protocol/errors.ts:13](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/protocol/errors.ts#L13)

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

## Methods

### fromStatus()

```ts
static fromStatus(
   status, 
   message, 
   logId?
): AxonError;
```

Defined in: [client-sdk-js/src/protocol/errors.ts:22](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/protocol/errors.ts#L22)

#### Parameters

##### status

`number`

##### message

`string`

##### logId?

`string`

#### Returns

`AxonError`
