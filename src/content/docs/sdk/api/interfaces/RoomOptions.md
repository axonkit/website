---
title: "RoomOptions"
---

Defined in: [client-sdk-js/src/room/options.ts:41](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/options.ts#L41)

Top-level options for a [Room](../classes/Room) instance.

## Properties

### adaptiveStream?

```ts
adaptiveStream?: boolean | AdaptiveStreamSettings;
```

Defined in: [client-sdk-js/src/room/options.ts:47](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/options.ts#L47)

Automatically manage subscribed video quality based on the size and
visibility of attached elements. Pass `true` to enable with defaults
or provide [AdaptiveStreamSettings](AdaptiveStreamSettings) for fine-grained control.

***

### audioCaptureDefaults?

```ts
audioCaptureDefaults?: AudioCaptureOptions;
```

Defined in: [client-sdk-js/src/room/options.ts:79](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/options.ts#L79)

Default capture options used when creating microphone tracks.

***

### disconnectOnPageLeave?

```ts
disconnectOnPageLeave?: boolean;
```

Defined in: [client-sdk-js/src/room/options.ts:69](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/options.ts#L69)

Automatically disconnect from the room when the page is being
unloaded or frozen (`beforeunload` / `pagehide` / `freeze`).

#### Default Value

`true`

***

### dynacast?

```ts
dynacast?: boolean;
```

Defined in: [client-sdk-js/src/room/options.ts:53](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/options.ts#L53)

Enable Dynacast — dynamically pause video layers that have no
subscribers on the server.

***

### lastN?

```ts
lastN?: number;
```

Defined in: [client-sdk-js/src/room/options.ts:111](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/options.ts#L111)

Maximum number of remote participants whose audio/video tracks this
client will receive. `0` (default) means receive all participants.

When set to a positive number, the server will only auto-subscribe
this participant to at most `lastN` publishers' media tracks.

***

### metadata?

```ts
metadata?: string;
```

Defined in: [client-sdk-js/src/room/options.ts:102](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/options.ts#L102)

Room metadata (e.g. meeting topic) sent in the JoinRequest when the
room is auto-created. Only takes effect for the first participant
that causes the room to be created. Maximum size: 64 KB.

***

### publishDefaults?

```ts
publishDefaults?: TrackPublishDefaults;
```

Defined in: [client-sdk-js/src/room/options.ts:85](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/options.ts#L85)

Default publish parameters applied to every track unless overridden
per-track.

***

### reconnectPolicy?

```ts
reconnectPolicy?: ReconnectPolicy;
```

Defined in: [client-sdk-js/src/room/options.ts:61](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/options.ts#L61)

Custom reconnection policy controlling retry delays after a
connection interruption. See [DefaultReconnectPolicy](../classes/DefaultReconnectPolicy).

#### Default Value

`new DefaultReconnectPolicy()`

***

### stopLocalTrackOnUnpublish?

```ts
stopLocalTrackOnUnpublish?: boolean;
```

Defined in: [client-sdk-js/src/room/options.ts:95](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/options.ts#L95)

Automatically stop local tracks when they are unpublished, including
via [LocalParticipant.setCameraEnabled](../classes/LocalParticipant#setcameraenabled) et al. with `false`.
Pass `false` explicitly to [LocalParticipant.unpublishTrack](../classes/LocalParticipant#unpublishtrack) to
keep a track alive across unpublish/republish cycles.

#### Default Value

`true`

***

### videoCaptureDefaults?

```ts
videoCaptureDefaults?: VideoCaptureOptions;
```

Defined in: [client-sdk-js/src/room/options.ts:74](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/room/options.ts#L74)

Default capture options used when creating camera tracks.
