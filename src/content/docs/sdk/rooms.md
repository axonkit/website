---
title: Rooms & Participants
description: Connect to a room, listen to events, and manage participants.
---

The `Room` object is the entry point to AxonKit. It represents a connection to
a room and exposes the participants and tracks within it.

## Connecting

```typescript
import { Room } from '@axonkit/client-sdk-js';

const room = new Room({
  dynacast: true,
  adaptiveStream: true,
});

// The room is taken from the token's room grant, not a separate argument.
await room.connect('https://your-server.com', 'your-jwt-token');
```

`connect` accepts an optional `RoomConnectOptions` for advanced control over
transport and reconnection behavior.

## Room state

| Property | Description |
| --- | --- |
| `room.state` | Current `ConnectionState` |
| `room.name` | Room name from the server |
| `room.sid` | Room session id |
| `room.serverInfo` | Server metadata returned on join |
| `room.localParticipant` | The `LocalParticipant` |
| `room.remoteParticipants` | `Map<identity, RemoteParticipant>` |
| `room.numParticipants` / `room.numPublishers` | Participant counts |
| `room.activeSpeakers` | Participants currently speaking |
| `room.rtt` | Round-trip time estimate |
| `room.metadata` | Room metadata string |

Use `getParticipantByIdentity(identity)` to look up a specific remote
participant, or `getParticipants()` for a flat list.

## Events

Subscribe with the `RoomEvent` enum (camelCase, matching LiveKit):

```typescript
room
  .on(RoomEvent.Connected, () => console.log('connected'))
  .on(RoomEvent.Disconnected, (reason) => console.log('disconnected', reason))
  .on(RoomEvent.Reconnecting, () => console.log('reconnecting'))
  .on(RoomEvent.ParticipantConnected, (p) => console.log(`${p.identity} joined`))
  .on(RoomEvent.ParticipantDisconnected, (p, reason) => console.log(`${p.identity} left`))
  .on(RoomEvent.TrackSubscribed, (track, publication, participant) => {
    document.body.appendChild(track.attach());
  })
  .on(RoomEvent.TrackUnsubscribed, (track, publication, participant) => {
    track.detach();
  })
  .on(RoomEvent.ActiveSpeakersChanged, (speakers) => console.log(speakers));
```

## Connection state

`room.state` is a `ConnectionState` enum: `Disconnected`, `Connecting`,
`Connected`, `Reconnecting`. Watch it to drive UI such as loading spinners or
reconnection banners.

## Disconnecting

```typescript
// stopTracks=true (default) also stops and releases local media tracks.
await room.disconnect();
```

## Groups

Groups provide breakout-room style partitioning of participants:

```typescript
const groups = await room.listGroups();
const group = await room.createGroup('breakout-1');

await room.localParticipant.joinGroup(group.id);
await room.localParticipant.leaveGroup();   // leave the current group
await room.pinParticipant(participantSid);
await room.unpinParticipant(participantSid);
await room.deleteGroup(group.id);
```

`room.groups` exposes the current group list, and
`getGroupParticipants(groupId)` returns the members of a group.

## Room shared state

Room shared state is a server-backed key/value store with offline catch-up:

```typescript
await room.localParticipant.updateRoomState('topic', 'quarterly-review');
await room.localParticipant.deleteRoomState('topic');

// room.sharedState is a ReadonlyMap<string, string> of the current values.
console.log(room.sharedState.get('topic'));
```
