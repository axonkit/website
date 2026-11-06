---
title: "TrackProcessor"
---

Defined in: [client-sdk-js/src/track/processor/types.ts:27](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/processor/types.ts#L27)

**`Experimental`**

A track processor transforms a `MediaStreamTrack` before publishing.

Implementors must provide at least `init`, `restart`, and `destroy`.
The SDK calls these methods at the appropriate lifecycle moments.

After `init` (and `restart`), the processor MUST set `processedTrack`
to the transformed output track. The SDK will publish this track instead
of the original.

## Type Parameters

### T

`T` *extends* [`TrackKind`](../enumerations/TrackKind) = [`TrackKind`](../enumerations/TrackKind)

## Properties

### destroy

```ts
destroy: () => Promise<void>;
```

Defined in: [client-sdk-js/src/track/processor/types.ts:48](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/processor/types.ts#L48)

**`Experimental`**

Destroy the processor and release all resources. After calling this,
`processedTrack` should be `undefined`.

#### Returns

`Promise`\<`void`\>

***

### init

```ts
init: (opts) => Promise<void>;
```

Defined in: [client-sdk-js/src/track/processor/types.ts:35](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/processor/types.ts#L35)

**`Experimental`**

Initialize the processor with the given options. After this call,
`processedTrack` must be set.

#### Parameters

##### opts

[`ProcessorOptions`](ProcessorOptions)\<`T`\>

#### Returns

`Promise`\<`void`\>

***

### name

```ts
name: string;
```

Defined in: [client-sdk-js/src/track/processor/types.ts:29](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/processor/types.ts#L29)

**`Experimental`**

Human-readable processor name (for logging/debugging).

***

### processedTrack?

```ts
processedTrack?: MediaStreamTrack;
```

Defined in: [client-sdk-js/src/track/processor/types.ts:54](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/processor/types.ts#L54)

**`Experimental`**

The transformed output track. Must be set after `init` / `restart`.
The SDK publishes this track instead of the original source.

***

### restart

```ts
restart: (opts) => Promise<void>;
```

Defined in: [client-sdk-js/src/track/processor/types.ts:42](https://github.com/axonkit/client-sdk-js/blob/033ad45339abc3801dfbe904f9382613fb0897a8/src/track/processor/types.ts#L42)

**`Experimental`**

Restart the processor (e.g. when the source track changes). The
implementation should release old resources and re-initialize with the
new options.

#### Parameters

##### opts

[`ProcessorOptions`](ProcessorOptions)\<`T`\>

#### Returns

`Promise`\<`void`\>
