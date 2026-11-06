---
title: Running the Server
description: Configuration and command-line flags for the AxonKit server.
---

## Prerequisites

- Go 1.25+
- mediasoup system dependencies (C++ build tools for the mediasoup worker)

A NATS server is optional — when `-nats` is unset, each node starts an embedded
in-process NATS server with JetStream.

## Build & run

```bash
git clone https://github.com/axonkit/axonkit.git
cd axonkit
go mod tidy
make build
```

### Dev mode

```bash
make run
```

Dev mode generates temporary API credentials and enables `GET /dev/token` for
one-click token retrieval during frontend development.

### Production

`-api-key`/`-api-secret` are required outside `-dev` (otherwise the node fails
fast at startup):

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

| Flag | Description |
| --- | --- |
| `-node` | Unique node identifier within the cluster |
| `-cluster` | Cluster name (e.g. `NewYork`) |
| `-region` | Region name (e.g. `US`) |
| `-port` | HTTP/WebRTC listen port (default `7880`) |
| `-api-key` | API credential key (required outside `-dev`) |
| `-api-secret` | API credential secret (required outside `-dev`) |
| `-nats` | External NATS URL; omit to use the embedded server |
| `-dev` | Development mode with temporary credentials and `/dev/token` |

## Development commands

```bash
make fmt    # Format code
make lint   # Run linter
make test   # Run tests with race detector
make all    # Format + lint + build
```
