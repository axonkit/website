---
title: "ParticipantTrackPermission"
---

Defined in: [client-sdk-js/src/protocol/types.ts:453](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/protocol/types.ts#L453)

## Properties

### allowAll?

```ts
allowAll?: boolean;
```

Defined in: [client-sdk-js/src/protocol/types.ts:459](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/protocol/types.ts#L459)

Grant permission to all tracks. Takes precedence over allowedTrackSids.

***

### allowedTrackSids?

```ts
allowedTrackSids?: string[];
```

Defined in: [client-sdk-js/src/protocol/types.ts:461](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/protocol/types.ts#L461)

List of track sids the target participant can subscribe to.

***

### participantIdentity?

```ts
participantIdentity?: string;
```

Defined in: [client-sdk-js/src/protocol/types.ts:455](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/protocol/types.ts#L455)

The participant identity this permission applies to.

***

### participantSid?

```ts
participantSid?: string;
```

Defined in: [client-sdk-js/src/protocol/types.ts:457](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/protocol/types.ts#L457)

The participant server id this permission applies to.
