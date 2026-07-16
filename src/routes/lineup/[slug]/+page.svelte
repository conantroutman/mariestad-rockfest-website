<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import SpotifyEmbed from '$lib/components/SpotifyEmbed.svelte';
	import type { PageProps } from './$types';
	import PageHero from '$lib/components/PageHero.svelte';
	import type { Picture } from '@sveltejs/enhanced-img';
	const imageModules = import.meta.glob<Picture>(
		'/src/lineup/images/*.{avif,AVIF,gif,GIF,heif,HEIF,jpeg,JPEG,jpg,JPG,png,PNG,tiff,TIFF,webp,WEBP}',
		{
			eager: true,
			query: {
				enhanced: true,
				w: '1920'
			},
			import: 'default'
		}
	);

	const { data }: PageProps = $props();

	const imageModule = Object.entries(imageModules).find(([_path]) =>
		_path.includes(`/src/lineup/images/${data.artist.metadata.slug}.`)
	)?.[1];
</script>

<svelte:head>
	<title>{data.artist.metadata.title} | Mariestad Rockfest</title>
</svelte:head>

{#if imageModule}
	<PageHero
		imageSrc={imageModule}
		imageAlt={data.artist.metadata.title}
		imageOffset={data.artist.metadata.imageOffset}
		variant="artist"
	/>
{/if}

<section>
	<Container>
		<div class="container">
			<div>
				<h1 class="heading-1">{data.artist.metadata.title}</h1>
				{@render data.artist.content()}
				<div class="social-links">
					{#if data.artist.metadata.facebook}
						<a href={data.artist.metadata.facebook} target="_blank">Facebook</a>
					{/if}
					{#if data.artist.metadata.instagram}
						<a href={data.artist.metadata.instagram} target="_blank">Instagram</a>
					{/if}
				</div>
			</div>
			{#if data.artist.metadata.spotify}
				<SpotifyEmbed spotifyUrl={data.artist.metadata.spotify} />
			{/if}
		</div>
	</Container>
</section>

<style>
	section {
		padding-top: 2rem;
	}

	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		color: white;
	}

	@container (width < 600px) {
		.container {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}

	.social-links {
		display: flex;
		gap: 1rem;
	}

	.social-links:empty {
		display: none;
	}
</style>
