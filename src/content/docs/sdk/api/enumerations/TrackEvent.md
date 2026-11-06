---
title: "TrackEvent"
---

Defined in: [client-sdk-js/src/events.ts:444](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L444)

Events emitted by a [Track](../classes/Track) instance.

## Example

```ts
track.on(TrackEvent.Muted, () => {
  console.log('track was muted');
});
```

## Enumeration Members

### AudioPlaybackFailed

```ts
AudioPlaybackFailed: "audioPlaybackFailed";
```

Defined in: [client-sdk-js/src/events.ts:483](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L483)

Audio playback failed, typically due to browser autoplay policy.

args: `(error?: Error)`

***

### AudioPlaybackStarted

```ts
AudioPlaybackStarted: "audioPlaybackStarted";
```

Defined in: [client-sdk-js/src/events.ts:476](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L476)

Audio playback started successfully after calling `attach`.

***

### AudioSilenceDetected

```ts
AudioSilenceDetected: "audioSilenceDetected";
```

Defined in: [client-sdk-js/src/events.ts:522](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L522)

Detected complete silence on an audio track after publishing.
This may indicate a hardware issue.

***

### ElementAttached

```ts
ElementAttached: "elementAttached";
```

Defined in: [client-sdk-js/src/events.ts:470](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L470)

An `HTMLMediaElement` has been attached to this track.

***

### ElementDetached

```ts
ElementDetached: "elementDetached";
```

Defined in: [client-sdk-js/src/events.ts:473](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L473)

An `HTMLMediaElement` has been detached from this track.

***

### Ended

```ts
Ended: "ended";
```

Defined in: [client-sdk-js/src/events.ts:458](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L458)

The track has permanently ended. For local tracks, this typically means
the underlying `MediaStreamTrack` has been stopped.

***

### Muted

```ts
Muted: "muted";
```

Defined in: [client-sdk-js/src/events.ts:449](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L449)

The track has been muted. For local tracks this happens when
`setMuted(true)` is called or the producer is paused.

***

### Restarted

```ts
Restarted: "restarted";
```

Defined in: [client-sdk-js/src/events.ts:461](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L461)

The local track has been restarted with new constraints (e.g. device change).

***

### StreamStateChanged

```ts
StreamStateChanged: "streamStateChanged";
```

Defined in: [client-sdk-js/src/events.ts:530](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L530)

The stream state of this track changed (server paused/resumed forwarding).
Only emitted on remote tracks.

args: `(track: {@link Track}, streamState: {@link StreamState})`

***

### Subscribed

```ts
Subscribed: "subscribed";
```

Defined in: [client-sdk-js/src/events.ts:464](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L464)

Subscribed to a remote track.

***

### TimeSyncUpdate

```ts
TimeSyncUpdate: "timeSyncUpdate";
```

Defined in: [client-sdk-js/src/events.ts:538](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L538)

Fired when a new time-sync update is available for a remote track.
Provides the RTP timestamp and the corresponding local timestamp.

args: `(update: { timestamp: number; rtpTimestamp: number })`

***

### Unmuted

```ts
Unmuted: "unmuted";
```

Defined in: [client-sdk-js/src/events.ts:452](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L452)

The track has been unmuted.

***

### Unsubscribed

```ts
Unsubscribed: "unsubscribed";
```

Defined in: [client-sdk-js/src/events.ts:467](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L467)

Unsubscribed from a remote track.

***

### UpstreamPaused

```ts
UpstreamPaused: "upstreamPaused";
```

Defined in: [client-sdk-js/src/events.ts:513](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L513)

The upstream (publisher to SFU) has been paused by the SFU due to
lack of subscribers.

***

### UpstreamResumed

```ts
UpstreamResumed: "upstreamResumed";
```

Defined in: [client-sdk-js/src/events.ts:516](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L516)

The upstream has resumed after being paused.

***

### VideoDimensionsChanged

```ts
VideoDimensionsChanged: "videoDimensionsChanged";
```

Defined in: [client-sdk-js/src/events.ts:507](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L507)

The dimensions of the video element changed (adaptive stream).

args: `(dimensions: { width: number; height: number }, track: {@link RemoteVideoTrack})`

***

### VideoPlaybackFailed

```ts
VideoPlaybackFailed: "videoPlaybackFailed";
```

Defined in: [client-sdk-js/src/events.ts:493](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L493)

Video playback failed.

args: `(error?: Error)`

***

### VideoPlaybackStarted

```ts
VideoPlaybackStarted: "videoPlaybackStarted";
```

Defined in: [client-sdk-js/src/events.ts:486](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L486)

Video playback started successfully after calling `attach`.

***

### VisibilityChanged

```ts
VisibilityChanged: "visibilityChanged";
```

Defined in: [client-sdk-js/src/events.ts:500](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L500)

The visibility of the video element changed (adaptive stream).

args: `(visible: boolean, track: {@link RemoteVideoTrack})`
