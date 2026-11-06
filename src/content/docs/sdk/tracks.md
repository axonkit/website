---
title: Tracks & Media
description: Publish and subscribe to audio, video, and screen-share tracks.
---

Tracks are how media flows through an AxonKit room. Local tracks are published
from the current client; remote tracks are subscribed from other participants.

## Publishing camera & microphone

The `LocalParticipant` provides high-level helpers:

```typescript
const lp = room.localParticipant;

await lp.setCameraEnabled(true);        // publish the default camera
await lp.setMicrophoneEnabled(true);    // publish the default microphone
await lp.setScreenShareEnabled(true);   // publish the screen

// or enable both at once
await lp.enableCameraAndMicrophone();
```

## Publishing custom tracks

```typescript
import { createLocalTracks, createLocalVideoTrack } from '@axonkit/client-sdk-js';

const tracks = await createLocalTracks({ audio: true, video: true });

for (const track of tracks) {
  await lp.publishTrack(track);
}

// unpublish (optionally stopping the underlying source)
await lp.unpublishTrack(tracks[0], true);
```

Factory functions include `createLocalAudioTrack`, `createLocalVideoTrack`,
`createLocalScreenTracks`, and `createLocalTracks`.

## Device management

```typescript
await room.switchActiveDevice('videoinput', deviceId);
await room.switchActiveDevice('audioinput', deviceId);
await room.switchActiveDevice('audiooutput', deviceId);

const current = room.getActiveDevice('videoinput');
```

`lp.lastCameraError` and `lp.lastMicrophoneError` surface the most recent
capture failure (e.g. permission denied).

## Subscribing to remote tracks

Subscriptions are automatic (server-side auto-subscribe), so you mostly react
to events:

```typescript
room.on(RoomEvent.TrackSubscribed, (track, publication, participant) => {
  const el = track.attach();   // returns an HTMLMediaElement
  if (track.kind === 'video') {
    document.getElementById('videos')?.appendChild(el);
  } else {
    el.play();
  }
});

room.on(RoomEvent.TrackUnsubscribed, (track) => {
  track.detach();
});
```

`track.attach()` returns the media element; `track.detach()` removes all
attached elements. A `Track` also exposes:

- `track.isMuted` — whether the track is muted
- `track.streamState` — `Active` or `Paused` (server-side pause)
- `track.currentBitrate` — current bitrate estimate

## Simulcast, dynacast & adaptive stream

These are configured on the `Room` at construction:

```typescript
const room = new Room({
  dynacast: true,       // pause simulcast layers / SVC tracks with no subscribers
  adaptiveStream: true, // adapt subscription to element size & visibility
});
```

- **Dynacast** saves publisher CPU/bandwidth when nobody needs the high layers.
- **Adaptive Stream** requires the video element to be in the DOM with a
  measurable size; it manages the subscription quality automatically.

## Muting without unpublishing

Muting a local track keeps it published but stops its media (the underlying
`MediaStreamTrack.enabled` is toggled and the producer is paused):

```typescript
const [mic] = await createLocalTracks({ audio: true });

mic.mute();   // local tracks only — remote tracks cannot be muted
mic.unmute();
```

`mute()`/`unmute()` live on `LocalTrack`; remote tracks expose the read-only
`isMuted` flag instead.

See [Concepts](/getting-started/concepts/) for the underlying SFU, simulcast,
and dynacast model.
