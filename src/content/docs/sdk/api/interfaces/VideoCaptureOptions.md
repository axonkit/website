---
title: "VideoCaptureOptions"
---

Defined in: [client-sdk-js/src/track/options.ts:10](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L10)

Options for capturing video from a camera device.

## Properties

### deviceId?

```ts
deviceId?: ConstrainDOMString;
```

Defined in: [client-sdk-js/src/track/options.ts:15](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L15)

A ConstrainDOMString specifying a device ID or an array of device IDs
which are acceptable and/or required.

***

### facingMode?

```ts
facingMode?: "user" | "environment" | "left" | "right";
```

Defined in: [client-sdk-js/src/track/options.ts:26](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L26)

A facing or an array of facings which are acceptable and/or required.

***

### frameRate?

```ts
frameRate?: ConstrainDouble;
```

Defined in: [client-sdk-js/src/track/options.ts:21](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L21)

A ConstrainDouble specifying the frame rate or range of frame rates
which are acceptable and/or required.

***

### resolution?

```ts
resolution?: VideoResolution;
```

Defined in: [client-sdk-js/src/track/options.ts:31](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L31)

Target capture resolution.
