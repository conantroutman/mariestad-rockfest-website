<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import CtaButton from '$lib/components/CtaButton.svelte';
	import LogoKarlsholme from '$lib/components/logos/LogoKarlsholme.svelte';
	import LogoRenta from '$lib/components/logos/LogoRenta.svelte';
	import LogoStudieframjandet from '$lib/components/logos/LogoStudieframjandet.svelte';
	import LogoVGR from '$lib/components/logos/LogoVGR.svelte';
	import HeroImage from '$lib/assets/hero.png?enhanced';
	import { DATE, TICKETS_URL } from '$lib/constants';
	import LogoSkyltotryck from '$lib/components/logos/LogoSkyltotryck.svelte';
	import LogoMariestadKommun from '$lib/components/logos/LogoMariestadKommun.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import Countdown from '$lib/components/Countdown.svelte';
	import MariestadRockfestLogo from '$lib/components/MariestadRockfestLogo.svelte';
	import type { PageProps } from './$types';
	import Poster from '$lib/components/Poster.svelte';
	import Sponsors from '$lib/components/Sponsors.svelte';

	const { data }: PageProps = $props();

	const TIME_24_HOURS = 86400000;

	const showCountdown = Date.now() > DATE.getMilliseconds() + TIME_24_HOURS;
</script>

<svelte:head>
	<title>Mariestad Rockfest</title>
</svelte:head>

<PageHero imageSrc={HeroImage} imageAlt="Ett band spelar på Jubileumsteatern">
	<div>
		<div class="hero-logo">
			<MariestadRockfestLogo />
		</div>
		<time class="hero-date" datetime={DATE.toISOString()}>
			{DATE.toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' })}
		</time>
	</div>
	{#if showCountdown}
		<Countdown date={DATE} />
	{/if}
	<div class="cta">
		<CtaButton href={TICKETS_URL}>Köp biljetter här</CtaButton>
	</div>
</PageHero>

<Container>
	<Sponsors />
</Container>

<section>
	<Container>
		<h1 class="heading-1">Välkommen till Mariestad Rockfest</h1>
		<div class="info">
			<p>
				För andra året arrangerar Folkparksföreningen i Mariestad en gigantisk musikfest där vi
				firar Mariestads Rockscen! På Mariestad Rockfest möter Då Nu och det riggas upp för dubbla
				scener där lineupen består av rockband där de flesta har rötter i Mariestad. Det blir allt
				från klassisk rock till indie, folk, hårdrock, grunge, metal och punk.
			</p>
			<p>
				Samla dina vänner, dra till Karlsholme och njut av grymt bra musik, hög energi och en rejäl
				dos nostalgi!
			</p>
		</div>
		<Poster />
	</Container>
</section>

<section style:background-color="#0d0d0d">
	<Container>
		<h2 class="heading-2">Lineup</h2>
		<ul class="bands">
			{#each data.lineup as band (band)}
				<li>{band.title}</li>
			{/each}
		</ul>
		<CtaButton href="/lineup" target="_self">Läs mer om banden</CtaButton>
	</Container>
</section>

<section>
	<Container>
		<h2 class="heading-2">Våra partners</h2>
		<div class="logos">
			<LogoKarlsholme />
			<LogoStudieframjandet />
			<LogoMariestadKommun />
			<LogoVGR />
			<LogoRenta />
			<LogoSkyltotryck />
		</div>
	</Container>
</section>

<style>
	section {
		text-align: center;
		padding: 4rem 0;
	}

	@media (max-width: 680px) {
		section {
			padding: 3rem 0;
		}
	}

	:global(.hero > picture) {
		height: 100%;
	}

	.hero-logo {
		max-width: 600px;
	}

	.hero-date {
		color: white;
		text-transform: uppercase;
		text-align: center;
		font-size: 2rem;
		font-weight: 400;
		display: block;
		letter-spacing: 20%;
		line-height: 1;
		margin-top: 0.5rem;
	}

	.cta {
		margin-top: 3rem;
	}

	@media (max-width: 680px) {
		.hero-date {
			font-size: 1.25rem;
		}
	}

	.logos {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 2rem;
		color: white;
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	@media (max-width: 680px) {
		:global(.logos svg) {
			height: 1.5rem;
		}
	}

	.info {
		max-width: 70ch;
		margin: auto;
		margin-bottom: 2rem;
	}

	.bands {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 0.5rem;
		margin: 3rem 0;
		font-family: var(--font-family-casserole);
		text-transform: uppercase;
		font-size: 1.5rem;
	}

	@media (max-width: 680px) {
		.bands {
			grid-template-columns: 1fr;
		}
	}
</style>
