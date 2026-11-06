# AxonKit Website

The official website and documentation for [AxonKit](https://github.com/axonkit) —
a distributed real-time communication server built on mediasoup and NATS
JetStream.

Built with [Astro](https://astro.build) and
[Starlight](https://starlight.astro.build).

## Project structure

```
.
├── astro.config.mjs          # Starlight configuration (sidebar, branding, etc.)
├── typedoc.json              # TypeDoc config for the SDK API reference
├── scripts/
│   └── generate-api.mjs      # Regenerates the SDK API reference from source
└── src/
    ├── assets/               # Logos and other static assets
    └── content/docs/         # Markdown/MDX documentation
        ├── getting-started/
        ├── server/
        ├── protocol/
        └── sdk/
            └── api/          # Generated TypeDoc API reference
```

## Commands

Run from the project root:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `pnpm install`      | Install dependencies                             |
| `pnpm dev`          | Start the dev server at `localhost:4321`         |
| `pnpm build`        | Build the production site to `./dist/`           |
| `pnpm preview`      | Preview the production build locally             |
| `pnpm docs:api`     | Regenerate the SDK API reference                 |

## SDK API reference

The `src/content/docs/sdk/api/` pages are generated from the client SDK source
with TypeDoc. To regenerate them, check out `client-sdk-js` as a sibling
directory and run:

```bash
pnpm docs:api
```

This runs TypeDoc against `../client-sdk-js/src/index.ts` and post-processes
the output (adds frontmatter and normalizes links).
