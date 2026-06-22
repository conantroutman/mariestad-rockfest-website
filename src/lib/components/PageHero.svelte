<script lang="ts">
	import type { Picture } from '@sveltejs/enhanced-img';
	import type { Snippet } from 'svelte';
	import type { EventHandler } from 'svelte/elements';

	type Props = {
		imageSrc: string | Picture;
		imageAlt: string;
		imageOffset?: string | number;
		children?: Snippet;
	};

	const { imageSrc, imageAlt, imageOffset, children }: Props = $props();

	let scrollY: number = $state(0);

	let imageScale: number = $derived(1 + (scrollY * 1) / 3000);

	const handleImageLoad: EventHandler<Event, Element> = (e) => {
		const imageElement = e.target as HTMLImageElement;
		imageElement.dataset.loaded = 'true';
	};
</script>

<svelte:window bind:scrollY />

<div class="container">
	<div class="hero">
		{#if children}
			<div class="children-container">
				{@render children?.()}
			</div>
		{/if}
		<enhanced:img
			src={imageSrc}
			alt={imageAlt}
			style:--scale={imageScale}
			style:--offset={imageOffset}
			onload={handleImageLoad}
			loading="lazy"
			decoding="async"
		/>
	</div>
</div>

<style>
	.container {
		width: 100%;
		container-type: inline-size;
	}

	.hero {
		width: 100%;
		height: 600px;
		position: relative;
		overflow: hidden;
	}

	@container (width < 600px) {
		.hero {
			height: 400px;
		}
	}

	.hero img {
		width: 100%;
		height: 100%;
		position: absolute;
		inset: 0;
		object-fit: cover;
		object-position: center var(--offset, center);
		transform: scale(var(--scale));
		opacity: 0;
		transition: opacity 200ms ease;
	}

	:global(.hero img[data-loaded='true']) {
		opacity: 1;
	}

	.children-container {
		position: absolute;
		inset: 0;
		z-index: 2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 3rem;
		padding: var(--page-gutter);
	}
</style>
