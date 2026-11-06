---
title: "RoomEvent"
---

Defined in: [client-sdk-js/src/events.ts:11](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L11)

Events emitted by a [Room](../classes/Room) instance.

## Example

```ts
room.on(RoomEvent.TrackSubscribed, (track, publication, participant) => {
  // handle new track
});
```

## Enumeration Members

### ActiveDeviceChanged

```ts
ActiveDeviceChanged: "activeDeviceChanged";
```

Defined in: [client-sdk-js/src/events.ts:66](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L66)

The active device for a kind has been switched via
[Room.switchActiveDevice](../classes/Room#switchactivedevice).

args: `(kind: MediaDeviceKind, deviceId: string)`

***

### ActiveSpeakersChanged

```ts
ActiveSpeakersChanged: "activeSpeakersChanged";
```

Defined in: [client-sdk-js/src/events.ts:203](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L203)

Active speakers changed. List of speakers ordered by audio level.
Includes the local participant.

args: `(speakers: {@link Participant}[])`

***

### AudioPlaybackStatusChanged

```ts
AudioPlaybackStatusChanged: "audioPlaybackChanged";
```

Defined in: [client-sdk-js/src/events.ts:245](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L245)

Audio playback status has changed. When `canPlaybackAudio` becomes
`false`, the application should display UI to prompt user interaction,
then call [Room.startAudio](../classes/Room#startaudio).

***

### ChatMessage

```ts
ChatMessage: "chatMessage";
```

Defined in: [client-sdk-js/src/events.ts:252](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L252)

A message has been received or sent (chat, whiteboard, document, etc.).

args: `(message: {@link Message}, participant?: {@link Participant})`

***

### Connected

```ts
Connected: "connected";
```

Defined in: [client-sdk-js/src/events.ts:13](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L13)

Successfully connected to the room.

***

### ConnectionQualityChanged

```ts
ConnectionQualityChanged: "connectionQualityChanged";
```

Defined in: [client-sdk-js/src/events.ts:224](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L224)

The connection quality of a participant has changed.

args: `(quality: {@link ConnectionQuality}, participant: {@link Participant})`

***

### ConnectionStateChanged

```ts
ConnectionStateChanged: "connectionStateChanged";
```

Defined in: [client-sdk-js/src/events.ts:37](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L37)

Whenever the connection state of the room changes.

args: `(state: {@link ConnectionState})`

***

### DataReceived

```ts
DataReceived: "dataReceived";
```

Defined in: [client-sdk-js/src/events.ts:217](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L217)

Data received from a remote participant via a DataChannel.

args: `(payload: Uint8Array, participant?: {@link RemoteParticipant})`

***

### DataTrackPublished

```ts
DataTrackPublished: "dataTrackPublished";
```

Defined in: [client-sdk-js/src/events.ts:129](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L129)

A remote participant has published a new data track.

args: `(dataTrack: {@link DataTrackInfo}, participant: {@link RemoteParticipant})`

***

### DataTrackUnpublished

```ts
DataTrackUnpublished: "dataTrackUnpublished";
```

Defined in: [client-sdk-js/src/events.ts:136](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L136)

A remote participant has unpublished a data track.

args: `(dataTrackSid: string, participant: {@link RemoteParticipant})`

***

### Disconnected

```ts
Disconnected: "disconnected";
```

Defined in: [client-sdk-js/src/events.ts:24](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L24)

Disconnected from the room. This may be triggered by the server, by an
explicit call to [Room.disconnect](../classes/Room#disconnect), or because of a network failure.

args: `(reason?: {@link DisconnectReason})`

***

### GroupCreated

```ts
GroupCreated: "groupCreated";
```

Defined in: [client-sdk-js/src/events.ts:303](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L303)

A new group (breakout room) has been created.

args: `(group: {@link GroupInfo})`

***

### GroupDeleted

```ts
GroupDeleted: "groupDeleted";
```

Defined in: [client-sdk-js/src/events.ts:318](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L318)

A group has been deleted. All participants in the group are
returned to the main room.

args: `(groupId: string)`

***

### GroupParticipantJoined

```ts
GroupParticipantJoined: "groupParticipantJoined";
```

Defined in: [client-sdk-js/src/events.ts:325](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L325)

A participant has joined a group.

args: `(groupId: string, participant: {@link RemoteParticipant} | {@link LocalParticipant})`

***

### GroupParticipantLeft

```ts
GroupParticipantLeft: "groupParticipantLeft";
```

Defined in: [client-sdk-js/src/events.ts:332](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L332)

A participant has left a group (returned to the main room).

args: `(groupId: string, participant: {@link RemoteParticipant} | {@link LocalParticipant})`

***

### GroupUpdated

```ts
GroupUpdated: "groupUpdated";
```

Defined in: [client-sdk-js/src/events.ts:310](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L310)

A group's metadata or participant count has changed.

args: `(group: {@link GroupInfo})`

***

### LocalAudioSilenceDetected

```ts
LocalAudioSilenceDetected: "localAudioSilenceDetected";
```

Defined in: [client-sdk-js/src/events.ts:195](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L195)

When a local audio track is published, the SDK checks whether there is
complete silence on that track and emits this event. This allows
applications to show UI informing users about hardware issues.

***

### LocalTrackPublished

```ts
LocalTrackPublished: "localTrackPublished";
```

Defined in: [client-sdk-js/src/events.ts:180](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L180)

A local track was published successfully.

args: `(publication: {@link LocalTrackPublication}, participant: {@link LocalParticipant})`

***

### LocalTrackUnpublished

```ts
LocalTrackUnpublished: "localTrackUnpublished";
```

Defined in: [client-sdk-js/src/events.ts:188](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L188)

A local track was unpublished. When a user stops sharing their screen
by pressing "End" on the browser UI, this event will also fire.

args: `(publication: {@link LocalTrackPublication}, participant: {@link LocalParticipant})`

***

### MediaDevicesChanged

```ts
MediaDevicesChanged: "mediaDevicesChanged";
```

Defined in: [client-sdk-js/src/events.ts:50](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L50)

When input or output devices on the machine have changed.

***

### MediaDevicesError

```ts
MediaDevicesError: "mediaDevicesError";
```

Defined in: [client-sdk-js/src/events.ts:58](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L58)

When an error occurs while attempting to create a track from a device.
Use [MediaDeviceFailure.getFailure](../classes/MediaDeviceFailure#getfailure) to get the specific reason.

args: `(error: Error)`

***

### MessageDeleted

```ts
MessageDeleted: "messageDeleted";
```

Defined in: [client-sdk-js/src/events.ts:259](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L259)

Messages have been deleted.

args: `(ids: string[], type?: string)`

***

### ParticipantAttributesChanged

```ts
ParticipantAttributesChanged: "participantAttributesChanged";
```

Defined in: [client-sdk-js/src/events.ts:108](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L108)

Participant attributes have changed.

args: `(changedAttributes: Record<string, string>, participant: {@link Participant})`

***

### ParticipantConnected

```ts
ParticipantConnected: "participantConnected";
```

Defined in: [client-sdk-js/src/events.ts:73](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L73)

A remote participant has joined the room.

args: `(participant: {@link RemoteParticipant})`

***

### ParticipantDisconnected

```ts
ParticipantDisconnected: "participantDisconnected";
```

Defined in: [client-sdk-js/src/events.ts:80](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L80)

A remote participant has left the room.

args: `(participant: {@link RemoteParticipant}, reason?: {@link DisconnectReason})`

***

### ParticipantMetadataChanged

```ts
ParticipantMetadataChanged: "participantMetadataChanged";
```

Defined in: [client-sdk-js/src/events.ts:94](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L94)

Participant metadata has changed.

args: `(prevMetadata: string | undefined, participant: {@link Participant})`

***

### ParticipantNameChanged

```ts
ParticipantNameChanged: "participantNameChanged";
```

Defined in: [client-sdk-js/src/events.ts:101](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L101)

Participant's display name has changed.

args: `(name: string, participant: {@link Participant})`

***

### ParticipantPermissionsChanged

```ts
ParticipantPermissionsChanged: "participantPermissionsChanged";
```

Defined in: [client-sdk-js/src/events.ts:238](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L238)

A participant's permissions have changed.

args: `(prevPermissions: ParticipantPermission | undefined, participant: {@link Participant})`

***

### ParticipantUpdated

```ts
ParticipantUpdated: "participantUpdated";
```

Defined in: [client-sdk-js/src/events.ts:87](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L87)

A remote participant's metadata or attributes have been updated.

args: `(participant: {@link RemoteParticipant})`

***

### Reconnected

```ts
Reconnected: "reconnected";
```

Defined in: [client-sdk-js/src/events.ts:30](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L30)

Successfully reconnected to the room after a temporary disconnection.

***

### Reconnecting

```ts
Reconnecting: "reconnecting";
```

Defined in: [client-sdk-js/src/events.ts:27](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L27)

The SDK is attempting to reconnect to the room after a connection interruption.

***

### RecordingStatusChanged

```ts
RecordingStatusChanged: "recordingStatusChanged";
```

Defined in: [client-sdk-js/src/events.ts:231](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L231)

The room's recording status has changed.

args: `(recording: boolean)`

***

### RoomMetadataChanged

```ts
RoomMetadataChanged: "roomMetadataChanged";
```

Defined in: [client-sdk-js/src/events.ts:210](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L210)

Room-level metadata has been updated by the server.

args: `(metadata: string | undefined)`

***

### SignalConnected

```ts
SignalConnected: "signalConnected";
```

Defined in: [client-sdk-js/src/events.ts:16](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L16)

The signal channel to the server has been established (join accepted).

***

### SignalReconnecting

```ts
SignalReconnecting: "signalReconnecting";
```

Defined in: [client-sdk-js/src/events.ts:45](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L45)

When the signal connection to the server has been interrupted. This is
not always noticeable to users. It will resolve with
[RoomEvent.Reconnected](#reconnected) once re-established. If media also fails,
an additional [RoomEvent.Reconnecting](#reconnecting) will be emitted.

***

### StateDeleted

```ts
StateDeleted: "stateDeleted";
```

Defined in: [client-sdk-js/src/events.ts:273](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L273)

A room shared state key has been deleted.

args: `(key: string, participantSid?: string, participantIdentity?: string)`

***

### StateUpdated

```ts
StateUpdated: "stateUpdated";
```

Defined in: [client-sdk-js/src/events.ts:266](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L266)

A room shared state key has been updated.

args: `(key: string, value: string, participantSid?: string, participantIdentity?: string)`

***

### TokenRefreshed

```ts
TokenRefreshed: "tokenRefreshed";
```

Defined in: [client-sdk-js/src/events.ts:281](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L281)

The server has pushed a new refresh token. Applications should persist
this token for reconnection.

args: `(token: string)`

***

### TrackMuted

```ts
TrackMuted: "trackMuted";
```

Defined in: [client-sdk-js/src/events.ts:166](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L166)

A track has been muted. Fires on both remote and local participants.

args: `(publication: {@link TrackPublication}, participant: {@link Participant})`

***

### TrackPublished

```ts
TrackPublished: "trackPublished";
```

Defined in: [client-sdk-js/src/events.ts:115](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L115)

A remote participant has published a new track.

args: `(publication: {@link RemoteTrackPublication}, participant: {@link RemoteParticipant})`

***

### TrackStreamStateChanged

```ts
TrackStreamStateChanged: "trackStreamStateChanged";
```

Defined in: [client-sdk-js/src/events.ts:296](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L296)

The stream state of a remote track has changed (e.g. the server
paused or resumed forwarding media).  This is distinct from
[RoomEvent.TrackMuted](#trackmuted) which indicates the publisher's intent.

args: `(publication: {@link RemoteTrackPublication}, streamState: {@link StreamState}, participant: {@link RemoteParticipant})`

***

### TrackSubscribed

```ts
TrackSubscribed: "trackSubscribed";
```

Defined in: [client-sdk-js/src/events.ts:144](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L144)

Subscribed to a new track from a remote participant. This is the event
where you would typically attach the track to a media element.

args: `(track: {@link RemoteTrack}, publication: {@link RemoteTrackPublication}, participant: {@link RemoteParticipant})`

***

### TrackSubscriptionFailed

```ts
TrackSubscriptionFailed: "trackSubscriptionFailed";
```

Defined in: [client-sdk-js/src/events.ts:151](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L151)

Could not subscribe to a track.

args: `(trackSid: string, participant: {@link RemoteParticipant})`

***

### TrackUnmuted

```ts
TrackUnmuted: "trackUnmuted";
```

Defined in: [client-sdk-js/src/events.ts:173](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L173)

A track has been unmuted. Fires on both remote and local participants.

args: `(publication: {@link TrackPublication}, participant: {@link Participant})`

***

### TrackUnpublished

```ts
TrackUnpublished: "trackUnpublished";
```

Defined in: [client-sdk-js/src/events.ts:122](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L122)

A remote participant has unpublished a track.

args: `(publication: {@link RemoteTrackPublication}, participant: {@link RemoteParticipant})`

***

### TrackUnsubscribed

```ts
TrackUnsubscribed: "trackUnsubscribed";
```

Defined in: [client-sdk-js/src/events.ts:159](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L159)

Unsubscribed from a remote track. The track should be detached from any
media elements at this point.

args: `(track: {@link RemoteTrack}, publication: {@link RemoteTrackPublication}, participant: {@link RemoteParticipant})`

***

### VideoPlaybackStatusChanged

```ts
VideoPlaybackStatusChanged: "videoPlaybackChanged";
```

Defined in: [client-sdk-js/src/events.ts:287](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/events.ts#L287)

Video playback status has changed. Similar to
[RoomEvent.AudioPlaybackStatusChanged](#audioplaybackstatuschanged) but for video.
