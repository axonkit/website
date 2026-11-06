---
title: Introduction
description: What AxonKit is and the problems it solves.
---

AxonKit is a distributed real-time communication server built on
[mediasoup](https://mediasoup.org/) and
[NATS JetStream](https://docs.nats.io/nats-concepts/jetstream). It combines SFU
media processing with intelligent cross-node stream routing, providing a
scalable foundation for video conferencing, live streaming, and multi-modal AI
applications.

## Why AxonKit

Traditional SFUs handle media well within a single node, but scaling beyond one
machine — across regions or clusters — usually means either a bespoke mesh of
forwarders or a full rewrite of the routing layer. AxonKit provides that
routing layer out of the box:

- **Single-node simplicity, multi-node scale.** Run one node for local
  development, or a fleet of nodes that discover each other automatically.
- **Smart media placement.** Streams are routed where subscribers actually
  are, minimizing cross-region hops.
- **A familiar client surface.** The TypeScript SDK mirrors the LiveKit API,
  so teams can adopt it with minimal learning curve.

## Core capabilities

### Media & Signaling

- **mediasoup-based SFU** — WebRTC media processing via mediasoup workers, with
  `WebRtcServer` for efficient port multiplexing.
- **DataChannel RPC** — a custom text-based protocol (`AXON/1.0`) over
  DataChannel for low-latency bidirectional signaling, inspired by the NATS
  wire protocol.
- **Auto-Subscribe** — consumers are created paused, delivered to the client,
  then resumed, avoiding media loss.
- **Dynacast** — dynamically pauses video encodings with no subscribers, saving
  publisher CPU and bandwidth.
- **AdaptiveStream** — client-driven subscription optimization based on UI
  visibility and element size.

### Distributed System

- **Intelligent Routing** — RIB/FIB provide dynamic, low-latency stream routing
  across clusters and regions.
- **Cluster & Region Aware** — prioritizes local-cluster traffic and uses
  real-time RTT probing for cross-region path selection.
- **Self-Healing** — automatic failover with make-before-break path switching.
- **Loop Detection** — path-vector validation prevents routing loops.
- **Node Discovery** — nodes register and discover each other via NATS KV with
  no static configuration.

### Client Management

- **Reconnection** — clients reconnect with `SyncState` to reconcile track
  differences seamlessly.
- **Node Forwarding** — join/connect requests support `nodeId` for cross-node
  proxying via NATS.
- **Heartbeat** — DataChannel ping/pong for accurate participant liveness.
- **Token Refresh** — token renewal over DataChannel avoids reconnection on
  expiry.

## Where to go next

- [Quick Start](/getting-started/quickstart/) — run the server and connect a
  client.
- [Architecture](/server/architecture/) — understand the routing model.
- [Protocol](/protocol/connection-flow/) — dig into the wire format.
