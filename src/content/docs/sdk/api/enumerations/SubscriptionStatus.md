---
title: "SubscriptionStatus"
---

Defined in: [client-sdk-js/src/participant/Participant.ts:27](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L27)

Subscription status for a remote track publication.

## Enumeration Members

### Desired

```ts
Desired: "desired";
```

Defined in: [client-sdk-js/src/participant/Participant.ts:29](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L29)

The track is desired but not yet subscribed.

***

### Subscribed

```ts
Subscribed: "subscribed";
```

Defined in: [client-sdk-js/src/participant/Participant.ts:31](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L31)

The track is subscribed and a [Track](../classes/Track) is available.

***

### Unsubscribed

```ts
Unsubscribed: "unsubscribed";
```

Defined in: [client-sdk-js/src/participant/Participant.ts:33](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L33)

The track is not subscribed.
