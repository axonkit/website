---
title: "RoomEvents"
---

```ts
type RoomEvents = object;
```

Defined in: [client-sdk-js/src/Room.ts:77](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L77)

## Properties

### activeDeviceChanged

```ts
activeDeviceChanged: (kind, deviceId) => void;
```

Defined in: [client-sdk-js/src/Room.ts:152](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L152)

#### Parameters

##### kind

`MediaDeviceKind`

##### deviceId

`string`

#### Returns

`void`

***

### activeSpeakersChanged

```ts
activeSpeakersChanged: (speakers) => void;
```

Defined in: [client-sdk-js/src/Room.ts:142](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L142)

#### Parameters

##### speakers

[`Participant`](../classes/Participant)[]

#### Returns

`void`

***

### audioPlaybackChanged

```ts
audioPlaybackChanged: (canPlayback) => void;
```

Defined in: [client-sdk-js/src/Room.ts:149](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L149)

#### Parameters

##### canPlayback

`boolean`

#### Returns

`void`

***

### chatMessage

```ts
chatMessage: (message, participant?) => void;
```

Defined in: [client-sdk-js/src/Room.ts:158](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L158)

#### Parameters

##### message

[`Message`](../interfaces/Message)

##### participant?

[`Participant`](../classes/Participant)

#### Returns

`void`

***

### connected

```ts
connected: () => void;
```

Defined in: [client-sdk-js/src/Room.ts:78](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L78)

#### Returns

`void`

***

### connectionQualityChanged

```ts
connectionQualityChanged: (quality, participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:145](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L145)

#### Parameters

##### quality

[`ConnectionQuality`](../enumerations/ConnectionQuality)

##### participant

[`Participant`](../classes/Participant)

#### Returns

`void`

***

### connectionStateChanged

```ts
connectionStateChanged: (state) => void;
```

Defined in: [client-sdk-js/src/Room.ts:82](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L82)

#### Parameters

##### state

[`ConnectionState`](../enumerations/ConnectionState)

#### Returns

`void`

***

### dataReceived

```ts
dataReceived: (payload, participant?) => void;
```

Defined in: [client-sdk-js/src/Room.ts:144](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L144)

#### Parameters

##### payload

`Uint8Array`

##### participant?

[`RemoteParticipant`](../classes/RemoteParticipant)

#### Returns

`void`

***

### dataTrackPublished

```ts
dataTrackPublished: (dataTrack, participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:109](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L109)

#### Parameters

##### dataTrack

[`DataTrackInfo`](../interfaces/DataTrackInfo)

##### participant

[`RemoteParticipant`](../classes/RemoteParticipant)

#### Returns

`void`

***

### dataTrackUnpublished

```ts
dataTrackUnpublished: (dataTrackSid, participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:113](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L113)

#### Parameters

##### dataTrackSid

`string`

##### participant

[`RemoteParticipant`](../classes/RemoteParticipant)

#### Returns

`void`

***

### disconnected

```ts
disconnected: (reason?) => void;
```

Defined in: [client-sdk-js/src/Room.ts:79](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L79)

#### Parameters

##### reason?

[`DisconnectReason`](../enumerations/DisconnectReason)

#### Returns

`void`

***

### groupCreated

```ts
groupCreated: (group) => void;
```

Defined in: [client-sdk-js/src/Room.ts:176](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L176)

#### Parameters

##### group

[`GroupInfo`](../interfaces/GroupInfo)

#### Returns

`void`

***

### groupDeleted

```ts
groupDeleted: (groupId) => void;
```

Defined in: [client-sdk-js/src/Room.ts:178](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L178)

#### Parameters

##### groupId

`string`

#### Returns

`void`

***

### groupParticipantJoined

```ts
groupParticipantJoined: (groupId, participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:179](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L179)

#### Parameters

##### groupId

`string`

##### participant

[`Participant`](../classes/Participant)

#### Returns

`void`

***

### groupParticipantLeft

```ts
groupParticipantLeft: (groupId, participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:180](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L180)

#### Parameters

##### groupId

`string`

##### participant

[`Participant`](../classes/Participant)

#### Returns

`void`

***

### groupUpdated

```ts
groupUpdated: (group) => void;
```

Defined in: [client-sdk-js/src/Room.ts:177](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L177)

#### Parameters

##### group

[`GroupInfo`](../interfaces/GroupInfo)

#### Returns

`void`

***

### localAudioSilenceDetected

```ts
localAudioSilenceDetected: () => void;
```

Defined in: [client-sdk-js/src/Room.ts:141](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L141)

#### Returns

`void`

***

### localTrackPublished

```ts
localTrackPublished: (publication, participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:133](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L133)

#### Parameters

##### publication

[`LocalTrackPublication`](../classes/LocalTrackPublication)

##### participant

[`LocalParticipant`](../classes/LocalParticipant)

#### Returns

`void`

***

### localTrackUnpublished

```ts
localTrackUnpublished: (publication, participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:137](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L137)

#### Parameters

##### publication

[`LocalTrackPublication`](../classes/LocalTrackPublication)

##### participant

[`LocalParticipant`](../classes/LocalParticipant)

#### Returns

`void`

***

### mediaDevicesChanged

```ts
mediaDevicesChanged: () => void;
```

Defined in: [client-sdk-js/src/Room.ts:84](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L84)

#### Returns

`void`

***

### mediaDevicesError

```ts
mediaDevicesError: (error) => void;
```

Defined in: [client-sdk-js/src/Room.ts:85](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L85)

#### Parameters

##### error

`Error`

#### Returns

`void`

***

### messageDeleted

```ts
messageDeleted: (ids, type?) => void;
```

Defined in: [client-sdk-js/src/Room.ts:159](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L159)

#### Parameters

##### ids

`string`[]

##### type?

`string`

#### Returns

`void`

***

### participantAttributesChanged

```ts
participantAttributesChanged: (changed, participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:97](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L97)

#### Parameters

##### changed

`Record`\<`string`, `string`\>

##### participant

[`Participant`](../classes/Participant)

#### Returns

`void`

***

### participantConnected

```ts
participantConnected: (participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:86](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L86)

#### Parameters

##### participant

[`RemoteParticipant`](../classes/RemoteParticipant)

#### Returns

`void`

***

### participantDisconnected

```ts
participantDisconnected: (participant, reason?) => void;
```

Defined in: [client-sdk-js/src/Room.ts:87](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L87)

#### Parameters

##### participant

[`RemoteParticipant`](../classes/RemoteParticipant)

##### reason?

[`DisconnectReason`](../enumerations/DisconnectReason)

#### Returns

`void`

***

### participantMetadataChanged

```ts
participantMetadataChanged: (prevMetadata, participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:92](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L92)

#### Parameters

##### prevMetadata

`string` \| `undefined`

##### participant

[`Participant`](../classes/Participant)

#### Returns

`void`

***

### participantNameChanged

```ts
participantNameChanged: (name, participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:96](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L96)

#### Parameters

##### name

`string`

##### participant

[`Participant`](../classes/Participant)

#### Returns

`void`

***

### participantPermissionsChanged

```ts
participantPermissionsChanged: (prevPermissions, participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:154](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L154)

#### Parameters

##### prevPermissions

  \| [`ParticipantPermission`](../interfaces/ParticipantPermission)
  \| `undefined`

##### participant

[`Participant`](../classes/Participant)

#### Returns

`void`

***

### participantUpdated

```ts
participantUpdated: (participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:91](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L91)

#### Parameters

##### participant

[`RemoteParticipant`](../classes/RemoteParticipant)

#### Returns

`void`

***

### reconnected

```ts
reconnected: () => void;
```

Defined in: [client-sdk-js/src/Room.ts:81](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L81)

#### Returns

`void`

***

### reconnecting

```ts
reconnecting: () => void;
```

Defined in: [client-sdk-js/src/Room.ts:80](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L80)

#### Returns

`void`

***

### recordingStatusChanged

```ts
recordingStatusChanged: (recording) => void;
```

Defined in: [client-sdk-js/src/Room.ts:153](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L153)

#### Parameters

##### recording

`boolean`

#### Returns

`void`

***

### roomMetadataChanged

```ts
roomMetadataChanged: (metadata) => void;
```

Defined in: [client-sdk-js/src/Room.ts:143](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L143)

#### Parameters

##### metadata

`string` \| `undefined`

#### Returns

`void`

***

### signalConnected

```ts
signalConnected: () => void;
```

Defined in: [client-sdk-js/src/Room.ts:151](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L151)

#### Returns

`void`

***

### signalReconnecting

```ts
signalReconnecting: () => void;
```

Defined in: [client-sdk-js/src/Room.ts:83](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L83)

#### Returns

`void`

***

### stateDeleted

```ts
stateDeleted: (key, participantSid?, participantIdentity?) => void;
```

Defined in: [client-sdk-js/src/Room.ts:166](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L166)

#### Parameters

##### key

`string`

##### participantSid?

`string`

##### participantIdentity?

`string`

#### Returns

`void`

***

### stateUpdated

```ts
stateUpdated: (key, value, participantSid?, participantIdentity?) => void;
```

Defined in: [client-sdk-js/src/Room.ts:160](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L160)

#### Parameters

##### key

`string`

##### value

`string`

##### participantSid?

`string`

##### participantIdentity?

`string`

#### Returns

`void`

***

### tokenRefreshed

```ts
tokenRefreshed: (token) => void;
```

Defined in: [client-sdk-js/src/Room.ts:181](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L181)

#### Parameters

##### token

`string`

#### Returns

`void`

***

### trackMuted

```ts
trackMuted: (publication, participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:125](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L125)

#### Parameters

##### publication

  \| [`LocalTrackPublication`](../classes/LocalTrackPublication)
  \| [`RemoteTrackPublication`](../classes/RemoteTrackPublication)

##### participant

[`Participant`](../classes/Participant)

#### Returns

`void`

***

### trackPublished

```ts
trackPublished: (publication, participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:101](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L101)

#### Parameters

##### publication

[`RemoteTrackPublication`](../classes/RemoteTrackPublication)

##### participant

[`RemoteParticipant`](../classes/RemoteParticipant)

#### Returns

`void`

***

### trackStreamStateChanged

```ts
trackStreamStateChanged: (publication, streamState, participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:171](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L171)

#### Parameters

##### publication

[`RemoteTrackPublication`](../classes/RemoteTrackPublication)

##### streamState

[`StreamState`](../enumerations/StreamState)

##### participant

[`RemoteParticipant`](../classes/RemoteParticipant)

#### Returns

`void`

***

### trackSubscribed

```ts
trackSubscribed: (track, publication, participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:114](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L114)

#### Parameters

##### track

[`Track`](../classes/Track)

##### publication

[`RemoteTrackPublication`](../classes/RemoteTrackPublication)

##### participant

[`RemoteParticipant`](../classes/RemoteParticipant)

#### Returns

`void`

***

### trackSubscriptionFailed

```ts
trackSubscriptionFailed: (trackSid, participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:119](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L119)

#### Parameters

##### trackSid

`string`

##### participant

[`RemoteParticipant`](../classes/RemoteParticipant)

#### Returns

`void`

***

### trackUnmuted

```ts
trackUnmuted: (publication, participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:129](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L129)

#### Parameters

##### publication

  \| [`LocalTrackPublication`](../classes/LocalTrackPublication)
  \| [`RemoteTrackPublication`](../classes/RemoteTrackPublication)

##### participant

[`Participant`](../classes/Participant)

#### Returns

`void`

***

### trackUnpublished

```ts
trackUnpublished: (publication, participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:105](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L105)

#### Parameters

##### publication

[`RemoteTrackPublication`](../classes/RemoteTrackPublication)

##### participant

[`RemoteParticipant`](../classes/RemoteParticipant)

#### Returns

`void`

***

### trackUnsubscribed

```ts
trackUnsubscribed: (track, publication, participant) => void;
```

Defined in: [client-sdk-js/src/Room.ts:120](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L120)

#### Parameters

##### track

[`Track`](../classes/Track)

##### publication

[`RemoteTrackPublication`](../classes/RemoteTrackPublication)

##### participant

[`RemoteParticipant`](../classes/RemoteParticipant)

#### Returns

`void`

***

### videoPlaybackChanged

```ts
videoPlaybackChanged: (canPlayback) => void;
```

Defined in: [client-sdk-js/src/Room.ts:150](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/Room.ts#L150)

#### Parameters

##### canPlayback

`boolean`

#### Returns

`void`
