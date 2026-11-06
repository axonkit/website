---
title: Quick Start
description: Run an AxonKit server and connect your first client.
---

This guide walks through running an AxonKit server locally and connecting the
TypeScript client SDK.

## Prerequisites

- Go 1.25+
- mediasoup system dependencies (C++ build tools for the mediasoup worker)
- Node.js 18+ and pnpm (for the client SDK)

A NATS server is optional: when `-nats` is unset, each node starts an embedded
in-process NATS server with JetStream.

## Build & run the server

```bash
git clone https://github.com/axonkit/axonkit.git
cd axonkit

# Install dependencies
go mod tidy

# Build
make build

# Run in dev mode (generates temporary API credentials and enables GET /dev/token)
make run
```

Outside `-dev` mode, `-api-key`/`-api-secret` are required:

```bash
./bin/axonkit \
  -node node-bj-1 \
  -cluster NewYork \
  -region US \
  -port 7880 \
  -api-key my-api-key \
  -api-secret my-api-secret \
  -nats nats://localhost:4222
```

## Connect a client

Install the SDK:

```bash
pnpm add @axonkit/client-sdk-js
```

Connect with a JWT token — the room is taken from the token's room grant:

```typescript
import {
  Room,
  RoomEvent,
  ConnectionState,
  setLogLevel,
  LogLevel,
} from '@axonkit/client-sdk-js';

setLogLevel(LogLevel.INFO);

const room = new Room({
  dynacast: true,
  adaptiveStream: true,
});

room
  .on(RoomEvent.ParticipantConnected, (participant) => {
    console.log(`${participant.identity} joined`);
  })
  .on(RoomEvent.TrackSubscribed, (track, publication, participant) => {
    const element = track.attach();
    if (track.kind === 'video') {
      document.getElementById('remote-videos')?.appendChild(element);
    } else {
      element.play();
    }
  });

await room.connect('http://localhost:7880', 'your-jwt-token');

await room.localParticipant.setCameraEnabled(true);
await room.localParticipant.setMicrophoneEnabled(true);
```

In dev mode, fetch a token with:

```bash
curl http://localhost:7880/dev/token
```

## Next steps

- [Client SDK quick start](/sdk/quickstart/) for the full API surface.
- [Running the server](/server/running/) for production configuration.
