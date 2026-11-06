---
title: "facingModeFromDeviceLabel"
---

```ts
function facingModeFromDeviceLabel(label): string | undefined;
```

Defined in: [client-sdk-js/src/utils/browser.ts:258](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/browser.ts#L258)

Attempt to determine facing mode from a device label string.
Returns `'user'` for front cameras and `'environment'` for back cameras.

## Parameters

### label

`string`

## Returns

`string` \| `undefined`
