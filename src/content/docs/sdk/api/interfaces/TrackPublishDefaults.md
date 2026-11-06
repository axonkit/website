---
title: "TrackPublishDefaults"
---

Defined in: [client-sdk-js/src/track/options.ts:402](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L402)

Default parameters applied when publishing a track. These can be set once
on [RoomOptions.publishDefaults](RoomOptions#publishdefaults) and will be used for every subsequent
publish call unless overridden per-track.

## Extended by

- [`TrackPublishOptions`](TrackPublishOptions)

## Properties

### audioPreset?

```ts
audioPreset?: AudioPreset;
```

Defined in: [client-sdk-js/src/track/options.ts:445](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L445)

Which audio preset should be used for publishing audio tracks.

#### Default Value

[AudioPresets.music](../variables/AudioPresets#music)

***

### backupCodec?

```ts
backupCodec?: 
  | boolean
  | {
  codec: "vp8" | "h264";
  encoding?: VideoEncoding;
};
```

Defined in: [client-sdk-js/src/track/options.ts:419](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L419)

Advanced codecs (VP9 / AV1 / H265) are not supported by all browser
clients. When `backupCodec` is set and an incompatible client attempts
to subscribe, the server will automatically publish a secondary track
encoded with the backup codec.

You can customize the encoding parameters of the backup track by
explicitly setting codec and encoding fields.

#### Default Value

`true`

***

### backupCodecPolicy?

```ts
backupCodecPolicy?: BackupCodecPolicy;
```

Defined in: [client-sdk-js/src/track/options.ts:427](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L427)

Policy for deciding whether to send the primary codec at the same time
as the backup codec.

#### See

[BackupCodecPolicy](../enumerations/BackupCodecPolicy)

***

### codecOptions?

```ts
codecOptions?: PublishCodecOptions;
```

Defined in: [client-sdk-js/src/track/options.ts:527](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L527)

Codec-specific options (SDP `fmtp` parameters) forwarded to the
underlying transport layer.

#### See

[PublishCodecOptions](PublishCodecOptions)

***

### degradationPreference?

```ts
degradationPreference?: RTCDegradationPreference;
```

Defined in: [client-sdk-js/src/track/options.ts:482](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L482)

Degradation preference hint for the browser encoder.

***

### dtx?

```ts
dtx?: boolean;
```

Defined in: [client-sdk-js/src/track/options.ts:451](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L451)

DTX (Discontinuous Transmission of audio). Enabled by default for mono
tracks.

***

### forceStereo?

```ts
forceStereo?: boolean;
```

Defined in: [client-sdk-js/src/track/options.ts:463](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L463)

Publish track in stereo mode (or set to `false` to disable). Default is
determined by the capture channel count.

***

### red?

```ts
red?: boolean;
```

Defined in: [client-sdk-js/src/track/options.ts:457](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L457)

RED (Redundant Encoding for audio). Enabled by default for mono tracks.
When using stereo, RED is automatically disabled unless explicitly set.

***

### scalabilityMode?

```ts
scalabilityMode?: ScalabilityMode;
```

Defined in: [client-sdk-js/src/track/options.ts:477](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L477)

Scalability mode for SVC codecs, defaults to `'L3T3_KEY'`.
When an SVC codec is used, simulcast is disabled.

***

### screenShareEncoding?

```ts
screenShareEncoding?: VideoEncoding;
```

Defined in: [client-sdk-js/src/track/options.ts:432](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L432)

Encoding parameters for screen share tracks.

***

### screenShareSimulcastLayers?

```ts
screenShareSimulcastLayers?: VideoPreset[];
```

Defined in: [client-sdk-js/src/track/options.ts:506](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L506)

Custom simulcast layers for screen share tracks.

Note: layers should be ordered from lowest to highest quality.

***

### simulcast?

```ts
simulcast?: boolean;
```

Defined in: [client-sdk-js/src/track/options.ts:471](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L471)

Use simulcast. Defaults to `true`.

When using simulcast, the SDK will publish up to three versions of the
stream at various resolutions.

***

### stopMicTrackOnMute?

```ts
stopMicTrackOnMute?: boolean;
```

Defined in: [client-sdk-js/src/track/options.ts:519](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L519)

For local tracks, stop the underlying `MediaStreamTrack` when the track
is muted (or paused). On some platforms this is necessary to disable the
microphone recording indicator.

Note: when enabled with Bluetooth devices connected, they will
transition between profiles (e.g. HFP to A2DP) causing an audible
difference in playback.

#### Default Value

`false`

***

### videoCodec?

```ts
videoCodec?: "vp8" | "h264" | "vp9" | "av1" | "h265";
```

Defined in: [client-sdk-js/src/track/options.ts:438](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L438)

Video codec, defaults to `'vp8'`. For SVC codecs, auto-enable `'vp8'`
as backup.

***

### videoEncoding?

```ts
videoEncoding?: VideoEncoding;
```

Defined in: [client-sdk-js/src/track/options.ts:406](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L406)

Encoding parameters for camera track.

***

### videoSimulcastLayers?

```ts
videoSimulcastLayers?: VideoPreset[];
```

Defined in: [client-sdk-js/src/track/options.ts:499](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L499)

Up to two additional simulcast layers to publish in addition to the
original track.

When left blank, it defaults to `[VideoPresets.h180, VideoPresets.h360]`.
If an SVC codec is used (VP9 or AV1), this field has no effect.

#### Example

```ts
{
  videoEncoding: { maxBitrate: 1_700_000, maxFramerate: 30 },
  videoSimulcastLayers: [VideoPresets.h540, VideoPresets.h216],
}
```
