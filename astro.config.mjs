// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://axonkit.dev',
	title: 'AxonKit',
	integrations: [
		starlight({
			title: 'AxonKit',
			customCss: ['./src/styles/custom.css'],
			// The site is dark-only, so use a single dark syntax theme instead of
			// the default light/dark pair that follows the OS preference.
			expressiveCode: { themes: ['starlight-dark'] },
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: true,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/axonkit' },
			],
			editLink: {
				baseUrl: 'https://github.com/axonkit/website/edit/main/',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Quick Start', slug: 'getting-started/quickstart' },
						{ label: 'Concepts', slug: 'getting-started/concepts' },
					],
				},
				{
					label: 'Server',
					items: [
						{ label: 'Architecture', slug: 'server/architecture' },
						{ label: 'Running the Server', slug: 'server/running' },
						{ label: 'Deployment', slug: 'server/deployment' },
					],
				},
				{
					label: 'Protocol',
					items: [
						{ label: 'Connection Flow', slug: 'protocol/connection-flow' },
						{ label: 'Wire Format (AXON/1.0)', slug: 'protocol/wire-format' },
					],
				},
				{
					label: 'Client SDK',
					items: [
						{ label: 'Installation & Quick Start', slug: 'sdk/quickstart' },
						{ label: 'Rooms & Participants', slug: 'sdk/rooms' },
						{ label: 'Tracks & Media', slug: 'sdk/tracks' },
						{ label: 'Data & RPC', slug: 'sdk/data-rpc' },
						{
							label: 'API Reference',
							items: [{ autogenerate: { directory: 'sdk/api' } }],
						},
					],
				},
			],
		}),
	],
});
