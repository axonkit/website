---
title: "BackupCodecPolicy"
---

Defined in: [client-sdk-js/src/track/options.ts:328](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L328)

Policy for handling backup codec behaviour when the primary codec is an
advanced codec (VP9 / AV1 / H265).

## Enumeration Members

### PREFER\_REGRESSION

```ts
PREFER_REGRESSION: 0;
```

Defined in: [client-sdk-js/src/track/options.ts:333](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L333)

Codec regression is preferred — the SFU will try to regress codec if
possible but it is not guaranteed.

***

### REGRESSION

```ts
REGRESSION: 2;
```

Defined in: [client-sdk-js/src/track/options.ts:337](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L337)

Always use backup codec only.

***

### SIMULCAST

```ts
SIMULCAST: 1;
```

Defined in: [client-sdk-js/src/track/options.ts:335](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/options.ts#L335)

Multi-codec simulcast: publish both primary and backup codec simultaneously.
