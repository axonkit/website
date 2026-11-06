---
title: Concepts
description: Core concepts behind AxonKit — SFU, rooms, tracks, simulcast, and routing.
---

This page explains the concepts you will encounter while building with AxonKit.
If you are coming from LiveKit or mediasoup, most terms will feel familiar.

## SFU, not mesh

AxonKit is a **Selective Forwarding Unit (SFU)**. Unlike a mesh or peer-to-peer
architecture, clients do not send media directly to each other. Each client
uploads its media to the server once; the server then forwards a copy to every
subscriber.

This is what makes multi-party calls scale: a publisher's uplink cost stays
constant regardless of how many people are watching.

```
Mesh (P2P)                    SFU (AxonKit)
  A ────── B                    A ──►┐
  │  ╲   ╱  │                        │  Server
  │   ╳   │                    B ◄───┤  forwards
  │  ╱   ╲  │                    C ◄───┘
  C ────── D
```

## Nodes, clusters, regions

AxonKit organizes its runtime into three levels of locality:

- **Node** — a single process running a mediasoup worker and an embedded NATS
  JetStream instance. Nodes serve clients directly.
- **Cluster** — a group of nodes that are topologically close (e.g. the same
  data center). Intra-cluster traffic is preferred.
- **Region** — a geographic grouping of clusters (e.g. `US`, `EU`).

Nodes discover each other automatically via NATS KV, so a new node joins the
topology without static configuration.

## Rooms

A room is the unit of isolation for a session of participants. The room a client
joins is **derived from the JWT token's room grant**, not from a separate room
name argument — this keeps authorization and routing bound to the token.

## Participants

A participant is a client connected to a room. There are two kinds:

- **LocalParticipant** — the participant representing the current client.
- **RemoteParticipant** — everyone else in the room.

Participants expose metadata, a display name, attributes, and the set of tracks
they publish.

## Tracks

A track is a single media stream — an audio track, a video track, or a data
track. Tracks flow through a publication:

- **TrackPublication** wraps a published track and its subscription state.
- Publishing a track makes it available to the room; subscribing downloads it
  from the server.

### Simulcast & SVC

- **Simulcast** encodes a single video source into multiple quality layers
  (spatial layers). Subscribers receive the layer that matches their bandwidth
  and viewport.
- **SVC** (Scalable Video Coding, e.g. VP9/AV1) achieves the same idea with a
  single encoding that can be truncated.

### Dynacast

With **dynacast**, the server pauses simulcast layers (or whole tracks for SVC)
that have no subscribers. Publishers save CPU and bandwidth when nobody is
watching their high-quality layers.

### Adaptive Stream

**Adaptive Stream** lets the client optimize subscriptions based on UI state:
element visibility and rendered size drive which layer to subscribe to, so a
hidden or tiny tile does not consume full resolution.

## Routing: RIB and FIB

When a publisher and a subscriber are on different nodes, AxonKit forwards media
between their mediasoup routers over a **pipe transport**.

- **RIB (Routing Information Base)** advertises the streams a node produces.
- **FIB (Forwarding Information Base)** determines where a subscriber should
  fetch each stream from.

Together they provide dynamic, low-latency routing that prefers local-cluster
traffic and probes RTT for cross-region path selection.

## Signaling: DataChannel RPC

After the initial HTTP join, signaling happens over a DataChannel using the
[AXON/1.0](/protocol/wire-format/) protocol — a text-based request/response
format inspired by the NATS wire protocol.
