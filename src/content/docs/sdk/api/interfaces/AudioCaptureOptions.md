---
title: "AudioCaptureOptions"
---

Defined in: [client-sdk-js/src/track/options.ts:51](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L51)

Options for capturing audio from a microphone device.

## Properties

### autoGainControl?

```ts
autoGainControl?: ConstrainBoolean;
```

Defined in: [client-sdk-js/src/track/options.ts:55](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L55)

Specifies whether automatic gain control is preferred and/or required.

***

### channelCount?

```ts
channelCount?: ConstrainULong;
```

Defined in: [client-sdk-js/src/track/options.ts:61](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L61)

The channel count or range of channel counts which are acceptable
and/or required.

***

### deviceId?

```ts
deviceId?: ConstrainDOMString;
```

Defined in: [client-sdk-js/src/track/options.ts:67](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L67)

A ConstrainDOMString specifying a device ID or an array of device IDs
which are acceptable and/or required.

***

### echoCancellation?

```ts
echoCancellation?: ConstrainBoolean;
```

Defined in: [client-sdk-js/src/track/options.ts:72](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L72)

Whether or not echo cancellation is preferred and/or required.

***

### latency?

```ts
latency?: ConstrainDouble;
```

Defined in: [client-sdk-js/src/track/options.ts:77](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L77)

The latency or range of latencies which are acceptable and/or required.

***

### noiseSuppression?

```ts
noiseSuppression?: ConstrainBoolean;
```

Defined in: [client-sdk-js/src/track/options.ts:82](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L82)

Whether noise suppression is preferred and/or required.

***

### sampleRate?

```ts
sampleRate?: ConstrainULong;
```

Defined in: [client-sdk-js/src/track/options.ts:98](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L98)

The sample rate or range of sample rates which are acceptable
and/or required.

***

### sampleSize?

```ts
sampleSize?: ConstrainULong;
```

Defined in: [client-sdk-js/src/track/options.ts:104](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L104)

The sample size or range of sample sizes which are acceptable
and/or required.

***

### voiceIsolation?

```ts
voiceIsolation?: ConstrainBoolean;
```

Defined in: [client-sdk-js/src/track/options.ts:92](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L92)

**`Experimental`**

A stronger version of `noiseSuppression`; browser support is not
widespread yet. When set (and supported) the value for
`noiseSuppression` will be ignored.

#### See

https://w3c.github.io/mediacapture-extensions/#voiceisolation-constraint
