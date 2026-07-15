<script lang="ts">
	import type { EventHandler } from 'svelte/elements';
	import { SvelteURL } from 'svelte/reactivity';

	type Props = { spotifyUrl: string };

	const { spotifyUrl }: Props = $props();

	function toEmbedUrl(urlString: string) {
		const url = new SvelteURL(urlString);
		url.pathname = `/embed/${url.pathname}`;
		url.searchParams.append('theme', '0');
		return url.toString();
	}

	const handleLoad: EventHandler<Event, Element> = (e) => {
		const imageElement = e.target as HTMLIFrameElement;
		imageElement.dataset.loaded = 'true';
	};
</script>

<iframe
	title="Spotify"
	data-testid="embed-iframe"
	style="border-radius:12px"
	src={toEmbedUrl(spotifyUrl)}
	width="100%"
	height="352"
	frameBorder="0"
	allowfullscreen={null}
	allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
	loading="lazy"
	data-loaded="false"
	class="spotify-player"
	onload={handleLoad}
></iframe>

<style>
	.spotify-player {
		opacity: 0;
		transition: opacity 200ms ease;
	}

	:global(.spotify-player[data-loaded='true']) {
		opacity: 1;
	}
</style>
