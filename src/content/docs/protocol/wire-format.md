---
title: Wire Format (AXON/1.0)
description: The text-based RPC protocol carried over the DataChannel.
---

AxonKit uses a custom text-based protocol, `AXON/1.0`, over the DataChannel for
low-latency bidirectional signaling. It is inspired by the
[NATS wire protocol](https://docs.nats.io/reference/reference-protocols/nats-protocol).

## Frame types

```
REQ <method> <logId>\r\n     -- request
RES <logId> <status>\r\n     -- response
MSG <method> [<logId>]\r\n   -- notification (logId optional)
```

## Frame structure

```
REQ <method> <logId>\r\n
[AXON/1.0\r\n                -- optional headers block
Key: Value\r\n
\r\n]
<body bytes>                 -- JSON or binary payload
```

- **`REQ`** — a request from the client or server, carrying a method and a
  correlation `logId`.
- **`RES`** — a response correlated to a request via `logId`, with a status.
- **`MSG`** — a one-way notification; `logId` is optional.

The optional headers block is delimited by the `AXON/1.0` sentinel and a blank
line, followed by the message body (JSON or raw binary).

## Example methods

The RPC surface covers publishing, subscribing, and participant control, e.g.:

- **Client → Server**: `publish`, `subscribe`, `mute`, ...
- **Server → Client**: `subscription.create`, notifications, ...
