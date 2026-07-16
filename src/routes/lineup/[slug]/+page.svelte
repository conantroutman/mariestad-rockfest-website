<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import SpotifyEmbed from '$lib/components/SpotifyEmbed.svelte';
	import type { PageProps } from './$types';
	import PageHero from '$lib/components/PageHero.svelte';
	import type { Picture } from '@sveltejs/enhanced-img';
	import LogoFacebook from '$lib/components/logos/LogoFacebook.svelte';
	import LogoInstagram from '$lib/components/logos/LogoInstagram.svelte';
	import LogoSpotify from '$lib/components/logos/LogoSpotify.svelte';
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

	const hasSocialLinks = $derived(
		Boolean(
			data.artist.metadata.facebook ||
			data.artist.metadata.instagram ||
			data.artist.metadata.spotify
		)
	);
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

				{#if hasSocialLinks}
					<h2>Länkar</h2>
					<div class="social-links">
						{#if data.artist.metadata.facebook}
							<a href={data.artist.metadata.facebook} target="_blank" title="Facebook"
								><LogoFacebook /></a
							>
						{/if}
						{#if data.artist.metadata.instagram}
							<a href={data.artist.metadata.instagram} target="_blank" title="Instagram"
								><LogoInstagram /></a
							>
						{/if}
						{#if data.artist.metadata.spotify}
							<a href={data.artist.metadata.spotify} target="_blank" title="Spotify"
								><LogoSpotify /></a
							>
						{/if}
					</div>
				{/if}
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

	h2 {
		margin-bottom: 1rem;
		margin-top: 2rem;
	}

	.social-links {
		display: flex;
		gap: 1rem;
		margin-top: 0.5rem;
	}

	.social-links:empty {
		display: none;
	}

	.social-links a {
		height: 1.5rem;
		width: 1.5rem;
		transition: opacity 200ms ease-in-out;
	}

	.social-links a:hover {
		opacity: 0.75;
	}
</style>
