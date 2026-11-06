---
title: "AudioAnalyserOptions"
---

Defined in: [client-sdk-js/src/utils/browser.ts:19](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/browser.ts#L19)

Options for creating an audio analyser.

## Properties

### fftSize?

```ts
fftSize?: number;
```

Defined in: [client-sdk-js/src/utils/browser.ts:24](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/browser.ts#L24)

FFT size for the analyser node. Must be a power of 2 between 32 and 32768.

#### Default Value

```ts
2048
```

***

### smoothingTimeConstant?

```ts
smoothingTimeConstant?: number;
```

Defined in: [client-sdk-js/src/utils/browser.ts:30](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/browser.ts#L30)

Smoothing constant for the analyser node.

#### Default Value

```ts
0.8
```

***

### useFloat?

```ts
useFloat?: boolean;
```

Defined in: [client-sdk-js/src/utils/browser.ts:36](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/browser.ts#L36)

If `true`, uses float frequency data; otherwise uses byte frequency data.

#### Default Value

```ts
false
```
