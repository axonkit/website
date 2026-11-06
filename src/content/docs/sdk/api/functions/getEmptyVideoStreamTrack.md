---
title: "getEmptyVideoStreamTrack"
---

```ts
function getEmptyVideoStreamTrack(width?, height?): MediaStreamTrack;
```

Defined in: [client-sdk-js/src/utils/browser.ts:241](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/utils/browser.ts#L241)

Create a black video `MediaStreamTrack`. Useful as a placeholder when
a real track isn't available.

## Parameters

### width?

`number` = `16`

### height?

`number` = `16`

## Returns

`MediaStreamTrack`
