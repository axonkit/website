---
title: "MediaDeviceFailure"
---

Defined in: [client-sdk-js/src/utils/deviceFailure.ts:22](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/deviceFailure.ts#L22)

Utility class for determining the type of media device failure from an error
object.

## Example

```ts
try {
  await createLocalAudioTrack();
} catch (e) {
  const failure = MediaDeviceFailure.getFailure(e);
  if (failure === 'PermissionDenied') {
    // show permission dialog
  }
}
```

## Constructors

### Constructor

```ts
new MediaDeviceFailure(): MediaDeviceFailure;
```

#### Returns

`MediaDeviceFailure`

## Methods

### getFailure()

```ts
static getFailure(error): DeviceFailureKind | undefined;
```

Defined in: [client-sdk-js/src/utils/deviceFailure.ts:30](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/deviceFailure.ts#L30)

Determine the failure kind from a caught error.

#### Parameters

##### error

`any`

The error thrown by `getUserMedia` or similar APIs.

#### Returns

[`DeviceFailureKind`](../type-aliases/DeviceFailureKind) \| `undefined`

The categorised failure, or `undefined` if the error is not a
  recognised device failure.
