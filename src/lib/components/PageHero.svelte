<script lang="ts">
	import type { Picture } from '@sveltejs/enhanced-img';
	import { onMount, type Snippet } from 'svelte';
	import type { EventHandler } from 'svelte/elements';

	type Props = {
		imageSrc: string | Picture;
		imageAlt: string;
		imageOffset?: string | number;
		children?: Snippet;
		variant?: 'landing' | 'artist';
	};

	const { imageSrc, imageAlt, imageOffset, children, variant = 'landing' }: Props = $props();

	let scrollY: number = $state(0);

	let imageScale: number = $derived(1 + (scrollY * 1) / 3000);

	let imageElement: HTMLImageElement;
	let frame = 0;
	let currentScale = 1;

	const handleImageLoad: EventHandler<Event, Element> = (e) => {
		const imageElement = e.target as HTMLImageElement;
		imageElement.dataset.loaded = 'true';
	};

	function updateScale() {
		const targetScale = 1 + window.scrollY / 3000;

		// Smooth interpolation
		currentScale += (targetScale - currentScale) * 0.08;

		imageElement?.style.setProperty('--scale', currentScale.toString());

		frame = requestAnimationFrame(updateScale);
	}

	function startScrollAnimation() {
		frame = requestAnimationFrame(updateScale);
	}

	onMount(() => {
		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<svelte:window onscroll={startScrollAnimation} />

<div class="container">
	<div
		class="hero"
		class:hero--landing={variant === 'landing'}
		class:hero--artist={variant === 'artist'}
	>
		{#if children}
			<div class="children-container">
				{@render children?.()}
			</div>
		{/if}
		<enhanced:img
			bind:this={imageElement}
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
		height: 55vh;
		position: relative;
		overflow: hidden;
	}

	.hero--landing {
		min-height: 600px;
	}

	.hero--artist {
		aspect-ratio: 16 / 9;
	}

	@container (width < 600px) {
		.hero {
			height: 400px;
		}

		.hero--artist {
			max-height: 300px;
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
		will-change: transform;
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

	@container (width < 600px) {
		.children-container {
			gap: 2rem;
		}
	}
</style>
