---
title: Installation & Quick Start
description: Install the AxonKit TypeScript client SDK and connect to a room.
---

The AxonKit client SDK is a JavaScript/TypeScript library for real-time
communication, built on
[mediasoup-client](https://github.com/versatica/mediasoup-client) with a
[LiveKit](https://livekit.io)-compatible API surface.

## Installation

```bash
pnpm add @axonkit/client-sdk-js
```

## Quick Start

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
  dynacast: true,        // pause simulcast layers with no subscribers
  adaptiveStream: true,  // adapt subscription quality to element size/visibility
});

// Subscribe to events before connecting
room
  .on(RoomEvent.ParticipantConnected, (participant) => {
    console.log(`${participant.identity} joined`);
  })
  .on(RoomEvent.ParticipantDisconnected, (participant) => {
    console.log(`${participant.identity} left`);
  })
  .on(RoomEvent.TrackSubscribed, (track, publication, participant) => {
    const element = track.attach();
    if (track.kind === 'video') {
      document.getElementById('remote-videos')?.appendChild(element);
    } else {
      element.play();
    }
  });

// Connect with a JWT token; the room is taken from the token's room grant
await room.connect('https://your-server.com', 'your-jwt-token');

// Publish camera and microphone
await room.localParticipant.setCameraEnabled(true);
await room.localParticipant.setMicrophoneEnabled(true);

// Later
await room.disconnect();
```

## Building from source

```bash
pnpm install
pnpm build
```

Outputs:

- `dist/axonkit-client.esm.js` — ES Module
- `dist/axonkit-client.umd.js` — UMD (for `<script>` tags)
- `dist/index.d.ts` — TypeScript declarations

## Demo

Open `examples/demo/index.html` in a browser after building. Requires a running
[AxonKit server](https://github.com/axonkit/axonkit).

## Full API reference

See the [API Reference](/sdk/api/) for the complete type and method surface.
