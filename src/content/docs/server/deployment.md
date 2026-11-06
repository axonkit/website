---
title: Deployment
description: Run AxonKit in production — multi-node clusters, NATS, TLS, and scaling.
---

This guide covers running AxonKit beyond a single dev node. See
[Running the Server](/server/running/) for the basic build and flags.

## Choosing a topology

A production deployment is usually one of:

- **Single node** — for low-traffic or self-hosted single-region use.
- **Multi-node, single cluster** — nodes in one region sharing load behind a
  load balancer.
- **Multi-cluster, multi-region** — nodes across regions with RIB/FIB routing.

Nodes in the same cluster/region discover each other automatically via NATS KV,
so scaling within a region means starting more nodes with matching `-cluster`
and `-region` flags.

## External NATS

Each node starts an embedded NATS JetStream server when `-nats` is unset. For a
fleet, point all nodes at a shared NATS cluster so they share route and node
state:

```bash
./bin/axonkit \
  -node node-nyc-1 \
  -cluster NewYork \
  -region US \
  -nats nats://nats.internal:4222
```

Run NATS as a dedicated, highly-available service in production. All nodes must
reach the same NATS cluster.

## Credentials

Outside `-dev`, `-api-key` and `-api-secret` are required and the node fails
fast if they are missing. Generate strong, per-environment credentials and
inject them via your secret manager:

```bash
./bin/axonkit \
  -api-key "$AXONKIT_API_KEY" \
  -api-secret "$AXONKIT_API_SECRET" \
  ...
```

Clients obtain a signed JWT from your backend using these credentials; the room
grant inside the token controls access.

## TLS and ports

The node serves HTTP and WebRTC on `-port` (default `7880`). Terminate TLS at a
reverse proxy (e.g. Caddy, nginx, or a cloud load balancer) and forward both
HTTP and WebSocket/WebRTC traffic:

```bash
./bin/axonkit -port 7880
```

Because WebRTC requires DTLS-SRTP, ensure your proxy passes UDP (or the
configured ICE candidates) through without breakage; test with a TURN server if
clients sit behind restrictive NATs.

## Load balancing

A load balancer in front of a cluster should:

- Spread `POST /rtc/join` across nodes (they proxy cross-node joins via NATS
  using the request `nodeId` when a participant is already on another node).
- Use sticky sessions if you want a returning participant to reconnect to the
  same node, though `SyncState` reconciliation makes cross-node reconnect
  seamless.

## Scaling and failover

- **Make-before-break** failover switches media paths when an upstream node
  fails, without dropping the stream.
- **Loop detection** (path-vector validation) keeps complex topologies safe.

To grow capacity, add nodes with the same `-cluster`/`-region` and a shared
NATS — no static peer list is required.

## Observability

- Use `make lint` and `make test` (with the race detector) in CI.
- Monitor node health via the HTTP endpoints and your NATS cluster's JetStream
  metrics.
- Track per-participant liveness via the DataChannel heartbeat (ping/pong).

## Containerizing

A minimal production image needs Go 1.25+ and the mediasoup worker's system
dependencies (C++ build tools). Build with `make build` and ship the resulting
`bin/axonkit` binary; the mediasoup worker must be present alongside it.
