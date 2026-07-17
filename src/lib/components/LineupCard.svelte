<script lang="ts">
	import type { LineupArtist } from '$lib/types';
	import type { EventHandler } from 'svelte/elements';
	import type { Picture } from '@sveltejs/enhanced-img';
	const imageModules = import.meta.glob<Picture>(
		'/src/lineup/images/*.{avif,AVIF,gif,GIF,heif,HEIF,jpeg,JPEG,jpg,JPG,png,PNG,tiff,TIFF,webp,WEBP}',
		{
			eager: true,
			query: {
				enhanced: true,
				w: '400'
			},
			import: 'default'
		}
	);
	import UnknownImageModule from '$lib/assets/unknown.png';

	type Props = {
		artist: LineupArtist;
	};

	const { artist }: Props = $props();

	const handleImageLoad: EventHandler<Event, Element> = (e) => {
		const imageElement = e.target as HTMLImageElement;
		imageElement.dataset.loaded = 'true';
	};

	function getImageModule() {
		try {
			const module = Object.entries(imageModules).find(([_path]) =>
				_path.includes(`/src/lineup/images/${artist.slug}.`)
			)?.[1];

			if (typeof module === 'undefined') {
				throw new Error('Image module undefined');
			}

			return module;
		} catch (error) {
			console.error(error);
			return UnknownImageModule;
		}
	}

	const imageModule = getImageModule();
</script>

<a href={`/lineup/${artist.slug}`}>
	<div class="image-container">
		{#if imageModule}
			<enhanced:img
				src={imageModule}
				alt={artist.title}
				class="image"
				style:--image-offset={artist.imageOffset}
				loading="lazy"
				decoding="async"
				data-loaded="false"
				onload={handleImageLoad}
			/>
		{/if}
	</div>
	<div class="name">{artist.title}</div>
</a>

<style>
	a {
		color: white;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		text-decoration: none;
		min-height: 200px;
	}

	.image-container {
		width: 100%;
		overflow: hidden;
		position: relative;
		aspect-ratio: 16 / 9;
	}

	.image {
		position: absolute;
		inset: 0;
		object-fit: cover;
		object-position: center var(--image-offset, center);
		width: 100%;
		height: 100%;
		transition:
			transform 200ms ease,
			opacity 400ms ease;
		opacity: 0;
	}

	:global(.image[data-loaded='true']) {
		opacity: 1;
	}

	a:hover .image {
		transform: scale(1.1);
	}

	.name {
		text-align: center;
		font-family: var(--font-family-casserole);
		text-transform: uppercase;
		font-size: var(--font-scale-400);
	}
</style>
