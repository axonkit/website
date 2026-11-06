---
title: Connection Flow
description: The end-to-end sequence of a client joining an AxonKit room.
---

A client establishes media and signaling through a two-phase handshake: an
initial HTTP join, followed by a DataChannel RPC channel.

## Sequence

1. Client sends **HTTP POST** `/rtc/join` with token, room info, and optional
   DTLS fingerprints.
2. Server creates transports and signal DataChannels, returns a `JoinResponse`.
3. Client sets up the mediasoup-client device, creates transports, and
   establishes the signal DataChannel.
4. Client sends a `ready` RPC over DataChannel with its RTP capabilities.
5. Server responds with the other participants and begins auto-subscribing to
   their tracks.

## Reconnection & node forwarding

- **Reconnection** — clients reconnect with a `SyncState` to reconcile track
  differences seamlessly.
- **Node forwarding** — `JoinRequest` and `ConnectRequest` support a `nodeId`
  for cross-node request proxying via NATS.
- **Token refresh** — tokens are renewed over DataChannel to avoid reconnection
  on expiry.
