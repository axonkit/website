---
title: Data & RPC
description: Send messages, stream files, and call remote methods between participants.
---

Beyond media tracks, AxonKit supports DataChannel-based data exchange: chat
messages, file transfer, incremental streams, and typed RPC.

## Sending a message

```typescript
const lp = room.localParticipant;

// Simple text broadcast to everyone in the room.
const { id } = await lp.sendText('hello', { topic: 'chat' });

// Targeted message.
await lp.sendText('hello', {
  destinationIdentities: ['alice', 'bob'],
});

// Send a chat message with edit/delete support.
const msg = await lp.sendChatMessage('quarterly review at 2pm');
await lp.editChatMessage('quarterly review at 3pm', msg);
await lp.deleteMessage(msg.id);
```

`sendText` returns the message id. Use `topic` to route messages to specific
handlers and `destinationIdentities` to restrict recipients.

## Sending a file

```typescript
const input = document.querySelector('input[type=file]');
const file = input.files[0];

await lp.sendFile(file, {
  onProgress: (p) => console.log(`${Math.round(p * 100)}%`),
});
```

## Streaming bytes or text

For large or unknown-size payloads, open an incremental stream:

```typescript
// Bytes
const writer = await lp.streamBytes({
  name: 'recording.webm',
  mimeType: 'video/webm',
  totalSize: blob.size,
});

for (const chunk of chunks) {
  await writer.write(chunk);
}
await writer.close();

// Text
const textWriter = await lp.streamText({ topic: 'transcript' });
await textWriter.write('first');
await textWriter.write('second');
await textWriter.close();
```

## Receiving streams

Register handlers on the room for incoming streams. Readers are async
iterables, so consume them with `for await` or `readAll()`:

```typescript
room.registerTextStreamHandler('transcript', async (reader, sender) => {
  // reader is an AsyncIterable<string>
  for await (const chunk of reader) {
    console.log(`[${sender.identity}] ${chunk}`);
  }
});

room.registerByteStreamHandler('file', async (reader, sender) => {
  // reader is an AsyncIterable<Uint8Array>; readAll() collects the whole stream.
  const data = await reader.readAll();
  const blob = new Blob([data]);
});
```

Unregister with `unregisterTextStreamHandler` / `unregisterByteStreamHandler`.

## Typed RPC

Call a method on another participant and await a string response:

```typescript
const response = await lp.performRpc({
  destinationIdentity: 'alice',
  method: 'ping',
  payload: JSON.stringify({ at: Date.now() }),
  responseTimeout: 5000, // ms, default 15000
});
```

Handle incoming RPC calls by registering methods on the room:

```typescript
room.registerRpcMethod('ping', async (data) => {
  // data: { requestId, callerIdentity, payload, responseTimeout }
  return JSON.stringify({ pong: true });
});

room.unregisterRpcMethod('ping');
```

The handler returns a string payload that is sent back to the caller.

## Raw data publication

For low-level DataChannel data, `publishData` sends bytes over a dedicated
data track:

```typescript
await lp.publishData(new Uint8Array([1, 2, 3]), {
  name: 'telemetry',
  ordered: true,
});
```

`DataPublishOptions` controls the DataChannel (`name`, `label`, `ordered`,
`maxRetransmits`, `maxPacketLifeTime`) — use `sendText`/`streamBytes` for the
higher-level topic/destination-routed data API above.
