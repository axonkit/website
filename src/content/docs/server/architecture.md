---
title: Architecture
description: How AxonKit routes media and signaling across nodes.
---

AxonKit organizes its runtime into **nodes**, **clusters**, and **regions**.
Each node runs a mediasoup worker plus an embedded NATS JetStream instance (or
connects to an external NATS server), which acts as the control plane for node
discovery and route advertisement.

## Single-node flow

```
Client (mediasoup-client)
  │
  ├── HTTP POST /rtc/join ──────► AxonKit Node
  │                                  ├── mediasoup Worker/Router/WebRtcServer
  │                                  ├── SendTransport + RecvTransport + DirectTransport
  │                                  └── DataChannel (AXON/1.0 RPC)
  │                                        ├── Client→Server: publish, subscribe, mute, ...
  │                                        └── Server→Client: subscription.create, notifications, ...
  │
  └── (Reconnect / Connect) ───► Same or forwarded node via NATS
```

## Multi-node routing

When a publisher and subscriber live on different nodes, AxonKit forwards the
media over a **pipe transport** between the two mediasoup routers. Route
information is exchanged over NATS:

```
Publisher Node (New York)              Subscriber Node (San Francisco)
  ┌──────────┐                          ┌──────────┐
  │ Producer │ ── RIB Advertise ──►     │   FIB    │
  │          │                          │ Subscribe│
  │  Router  │ ◄── Pipe Transport ────  │  Router  │
  │          │       (media)            │          │
  └──────────┘                          └──────────┘
       │                                      │
    NATS KV                                NATS KV
    (Routes)                              (Routes)
```

### RIB & FIB

- **RIB (Routing Information Base)** advertises which streams a node produces.
- **FIB (Forwarding Information Base)** determines where a subscriber should
  fetch each stream from.

Together they provide dynamic, low-latency stream routing that prefers
local-cluster traffic and uses real-time RTT probing (`LinkDB`) for
cross-region path selection.

### Self-healing & loop detection

- **Make-before-break** failover switches paths without dropping media when an
  upstream node fails.
- **Path-vector validation** prevents routing loops in complex topologies.

## Node discovery

Nodes register and discover each other via NATS KV, so there is no static
configuration required to grow the fleet — new nodes join the topology
automatically.
