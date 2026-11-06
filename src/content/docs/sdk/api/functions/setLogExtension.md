---
title: "setLogExtension"
---

```ts
function setLogExtension(handler): void;
```

Defined in: [client-sdk-js/src/utils/logger.ts:54](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/logger.ts#L54)

Set an extension handler that receives all SDK log messages. This can be
used to forward logs to a third-party logging service (e.g. Sentry,
Datadog).

## Parameters

### handler

[`LogExtension`](../type-aliases/LogExtension) \| `undefined`

The extension handler function, or `undefined` to remove.

## Returns

`void`

## Example

```ts
setLogExtension((level, msg, context) => {
  myLoggingService.log({ level: LogLevel[level], message: msg, ...context });
});
```
