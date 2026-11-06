---
title: "ParticipantEvents"
---

```ts
type ParticipantEvents<TPublication> = object;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:115](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L115)

## Type Parameters

### TPublication

`TPublication` *extends* [`TrackPublication`](../classes/TrackPublication) = [`TrackPublication`](../classes/TrackPublication)

## Properties

### attributesChanged

```ts
attributesChanged: (changedAttributes, participant) => void;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:132](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L132)

#### Parameters

##### changedAttributes

`Record`\<`string`, `string`\>

##### participant

[`Participant`](../classes/Participant)\<`TPublication`\>

#### Returns

`void`

***

### chatMessage

```ts
chatMessage: (message) => void;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:144](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L144)

#### Parameters

##### message

[`Message`](../interfaces/Message)

#### Returns

`void`

***

### connectionQualityChanged

```ts
connectionQualityChanged: (quality) => void;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:137](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L137)

#### Parameters

##### quality

[`ConnectionQuality`](../enumerations/ConnectionQuality)

#### Returns

`void`

***

### dataReceived

```ts
dataReceived: (payload) => void;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:143](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L143)

#### Parameters

##### payload

`Uint8Array`

#### Returns

`void`

***

### isSpeakingChanged

```ts
isSpeakingChanged: (speaking) => void;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:136](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L136)

#### Parameters

##### speaking

`boolean`

#### Returns

`void`

***

### localTrackPublished

```ts
localTrackPublished: (publication) => void;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:122](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L122)

#### Parameters

##### publication

`TPublication`

#### Returns

`void`

***

### localTrackUnpublished

```ts
localTrackUnpublished: (publication) => void;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:123](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L123)

#### Parameters

##### publication

`TPublication`

#### Returns

`void`

***

### metadataChanged

```ts
metadataChanged: (metadata, participant) => void;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:124](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L124)

#### Parameters

##### metadata

`string` \| `undefined`

##### participant

[`Participant`](../classes/Participant)\<`TPublication`\>

#### Returns

`void`

***

### nameChanged

```ts
nameChanged: (name, participant) => void;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:128](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L128)

#### Parameters

##### name

`string` \| `undefined`

##### participant

[`Participant`](../classes/Participant)\<`TPublication`\>

#### Returns

`void`

***

### permissionsChanged

```ts
permissionsChanged: (prevPermissions?) => void;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:138](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L138)

#### Parameters

##### prevPermissions?

[`ParticipantPermission`](../interfaces/ParticipantPermission)

#### Returns

`void`

***

### trackMuted

```ts
trackMuted: (publication) => void;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:118](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L118)

#### Parameters

##### publication

`TPublication`

#### Returns

`void`

***

### trackPublished

```ts
trackPublished: (publication) => void;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:116](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L116)

#### Parameters

##### publication

`TPublication`

#### Returns

`void`

***

### trackStreamStateChanged

```ts
trackStreamStateChanged: (publication, streamState) => void;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:139](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L139)

#### Parameters

##### publication

`TPublication`

##### streamState

[`StreamState`](../enumerations/StreamState)

#### Returns

`void`

***

### trackSubscribed

```ts
trackSubscribed: (track, publication) => void;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:120](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L120)

#### Parameters

##### track

[`Track`](../classes/Track)

##### publication

`TPublication`

#### Returns

`void`

***

### trackUnmuted

```ts
trackUnmuted: (publication) => void;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:119](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L119)

#### Parameters

##### publication

`TPublication`

#### Returns

`void`

***

### trackUnpublished

```ts
trackUnpublished: (publication) => void;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:117](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L117)

#### Parameters

##### publication

`TPublication`

#### Returns

`void`

***

### trackUnsubscribed

```ts
trackUnsubscribed: (track, publication) => void;
```

Defined in: [client-sdk-js/src/participant/Participant.ts:121](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/participant/Participant.ts#L121)

#### Parameters

##### track

[`Track`](../classes/Track)

##### publication

`TPublication`

#### Returns

`void`
