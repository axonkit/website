---
title: "supportsAV1"
---

```ts
function supportsAV1(): boolean;
```

Defined in: [client-sdk-js/src/utils/browser.ts:100](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/browser.ts#L100)

Check for AV1 support. Safari reports AV1 capability on iPhone 14 but
doesn't actually support it; Firefox supports AV1 decode but SVC
publishing is broken.

## Returns

`boolean`
