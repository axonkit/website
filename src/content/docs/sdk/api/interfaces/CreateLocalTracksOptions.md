---
title: "CreateLocalTracksOptions"
---

Defined in: [client-sdk-js/src/track/options.ts:588](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L588)

Options accepted by [createLocalTracks](../functions/createLocalTracks).

## Properties

### audio?

```ts
audio?: boolean | AudioCaptureOptions;
```

Defined in: [client-sdk-js/src/track/options.ts:594](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L594)

Audio track options. `true` to create with defaults, `false` to skip.

#### Default Value

`true`

***

### video?

```ts
video?: boolean | VideoCaptureOptions;
```

Defined in: [client-sdk-js/src/track/options.ts:601](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L601)

Video track options. `true` to create with defaults, `false` to skip.

#### Default Value

`true`
