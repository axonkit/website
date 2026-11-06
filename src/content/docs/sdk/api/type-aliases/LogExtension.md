---
title: "LogExtension"
---

```ts
type LogExtension = (level, msg, context) => void;
```

Defined in: [client-sdk-js/src/utils/logger.ts:22](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/logger.ts#L22)

Callback signature for log extensions. Receives the log level, formatted
message, and any additional context passed to the logger call.

## Parameters

### level

[`LogLevel`](../enumerations/LogLevel)

### msg

`string`

### context

`Record`\<`string`, `unknown`\>

## Returns

`void`
