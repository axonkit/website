---
title: "ParticipantEvent"
---

Defined in: [client-sdk-js/src/events.ts:345](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L345)

Events emitted by a [Participant](../classes/Participant) instance (local or remote).

## Example

```ts
participant.on(ParticipantEvent.TrackMuted, (publication) => {
  console.log('track muted', publication.trackName);
});
```

## Enumeration Members

### AttributesChanged

```ts
AttributesChanged: "attributesChanged";
```

Defined in: [client-sdk-js/src/events.ts:405](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L405)

The participant's attributes have changed.

args: `(changedAttributes: Record<string, string>, participant: {@link Participant})`

***

### ChatMessage

```ts
ChatMessage: "chatMessage";
```

Defined in: [client-sdk-js/src/events.ts:431](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L431)

A chat message from this participant.

args: `(message: {@link ChatMessage})`

***

### ConnectionQualityChanged

```ts
ConnectionQualityChanged: "connectionQualityChanged";
```

Defined in: [client-sdk-js/src/events.ts:411](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L411)

The connection quality of this participant has changed.

***

### DataReceived

```ts
DataReceived: "dataReceived";
```

Defined in: [client-sdk-js/src/events.ts:424](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L424)

Data received from this participant.

***

### IsSpeakingChanged

```ts
IsSpeakingChanged: "isSpeakingChanged";
```

Defined in: [client-sdk-js/src/events.ts:408](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L408)

The participant's speaking status has changed.

***

### LocalTrackPublished

```ts
LocalTrackPublished: "localTrackPublished";
```

Defined in: [client-sdk-js/src/events.ts:385](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L385)

A local track was published by this participant.

args: `(publication: {@link LocalTrackPublication})`

***

### LocalTrackUnpublished

```ts
LocalTrackUnpublished: "localTrackUnpublished";
```

Defined in: [client-sdk-js/src/events.ts:392](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L392)

A local track was unpublished by this participant.

args: `(publication: {@link LocalTrackPublication})`

***

### MetadataChanged

```ts
MetadataChanged: "metadataChanged";
```

Defined in: [client-sdk-js/src/events.ts:395](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L395)

The participant's metadata has changed.

***

### NameChanged

```ts
NameChanged: "nameChanged";
```

Defined in: [client-sdk-js/src/events.ts:398](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L398)

The participant's display name has changed.

***

### PermissionsChanged

```ts
PermissionsChanged: "permissionsChanged";
```

Defined in: [client-sdk-js/src/events.ts:414](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L414)

The participant's permissions have changed.

***

### TrackMuted

```ts
TrackMuted: "trackMuted";
```

Defined in: [client-sdk-js/src/events.ts:361](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L361)

One of the participant's tracks has been muted.

***

### TrackPublished

```ts
TrackPublished: "trackPublished";
```

Defined in: [client-sdk-js/src/events.ts:351](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L351)

The participant has published a new track.

args: `(publication: {@link TrackPublication})`

***

### TrackStreamStateChanged

```ts
TrackStreamStateChanged: "trackStreamStateChanged";
```

Defined in: [client-sdk-js/src/events.ts:421](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L421)

The stream state of a remote track changed (server paused/resumed forwarding).

args: `(publication: {@link RemoteTrackPublication}, streamState: {@link StreamState})`

***

### TrackSubscribed

```ts
TrackSubscribed: "trackSubscribed";
```

Defined in: [client-sdk-js/src/events.ts:371](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L371)

Subscribed to a new track from this participant.

args: `(track: {@link RemoteTrack}, publication: {@link RemoteTrackPublication})`

***

### TrackUnmuted

```ts
TrackUnmuted: "trackUnmuted";
```

Defined in: [client-sdk-js/src/events.ts:364](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L364)

One of the participant's tracks has been unmuted.

***

### TrackUnpublished

```ts
TrackUnpublished: "trackUnpublished";
```

Defined in: [client-sdk-js/src/events.ts:358](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L358)

The participant has unpublished a track.

args: `(publication: {@link TrackPublication})`

***

### TrackUnsubscribed

```ts
TrackUnsubscribed: "trackUnsubscribed";
```

Defined in: [client-sdk-js/src/events.ts:378](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L378)

Unsubscribed from a track of this participant.

args: `(track: {@link RemoteTrack}, publication: {@link RemoteTrackPublication})`
