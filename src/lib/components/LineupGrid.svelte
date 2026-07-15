<script lang="ts">
	import type { LineupArtist } from '$lib/types';
	import { importLinupImages } from '$lib/utils';
	import UnknownImage from '$lib/assets/unknown.png';
	import { onMount } from 'svelte';
	import type { EventHandler } from 'svelte/elements';
	import { SvelteMap } from 'svelte/reactivity';
	import Reveal from './Reveal.svelte';
	import type { Picture } from '@sveltejs/enhanced-img';
	const imageModules = importLinupImages();
	const unknownImageModule = import.meta.glob('/src/lib/assets/unknown.png', {
		eager: true,
		query: { enhanced: true, w: 400 }
	});

	type Props = {
		lineup: LineupArtist[];
	};

	const { lineup }: Props = $props();

	const imageMap = new SvelteMap<string, { default: Picture }>();

	onMount(() => {
		const imageModulesEntries = Object.entries(imageModules);

		lineup.forEach((artist) => {
			const ImageModule = imageModulesEntries.find(([_path]) =>
				_path.includes(`/src/lineup/images/${artist.slug}.`)
			)?.[1] as { default: Picture } | undefined;

			if (ImageModule) {
				imageMap.set(artist.slug, ImageModule);
			} else {
				console.error(`Image missing for ${artist.slug}!`);
				imageMap.set(
					artist.slug,
					unknownImageModule['/src/lib/assets/unknown.png'] as { default: Picture }
				);
			}
		});
	});

	const handleImageLoad: EventHandler<Event, Element> = (e) => {
		const imageElement = e.target as HTMLImageElement;
		imageElement.dataset.loaded = 'true';
	};
</script>

<ul class="grid">
	{#each lineup as artist, index (artist.slug)}
		<li>
			<Reveal delay={index * 200}>
				<a href={`/lineup/${artist.slug}`}>
					<div class="image-container">
						{#if imageMap.has(artist.slug)}
							<enhanced:img
								src={imageMap.get(artist.slug)?.default ?? UnknownImage}
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
			</Reveal>
		</li>
	{/each}
</ul>

<style>
	.grid {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	a {
		color: white;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		text-decoration: none;
		min-height: 200px;
	}

	.image-container {
		height: 200px;
		width: 100%;
		overflow: hidden;
		position: relative;
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
