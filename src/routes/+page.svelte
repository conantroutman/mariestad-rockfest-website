<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import CtaButton from '$lib/components/CtaButton.svelte';
	import LogoKarlsholme from '$lib/components/logos/LogoKarlsholme.svelte';
	import LogoRenta from '$lib/components/logos/LogoRenta.svelte';
	import LogoStudieframjandet from '$lib/components/logos/LogoStudieframjandet.svelte';
	import LogoVGR from '$lib/components/logos/LogoVGR.svelte';
	import HeroImage from '$lib/assets/hero.png?enhanced';
	import LogoImage from '$lib/assets/logo.png?enhanced';
	import { DATE, TICKETS_URL } from '$lib/constants';

	const bands = [
		'Secret Gallery',
		'Badmor',
		'Spacedrifter',
		'Vänervind',
		'When',
		'Jonny Stålarz',
		'Dråpslag',
		'Projekt Kirre',
		'Thermality',
		'Kaliber',
		'Steelflight',
		'Rymdsallad',
		'Ättestupan',
		'TBA'
	];
</script>

<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="hero">
	<div class="hero-logo-container">
		<div>
			<enhanced:img src={LogoImage} alt="Mariestad Rockfest" class="hero-logo" />
			<time class="hero-date" datetime={DATE.toISOString()}>
				{DATE.toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' })}
			</time>
		</div>
		<CtaButton href={TICKETS_URL}>Köp biljetter här</CtaButton>
	</div>
	<enhanced:img src={HeroImage} alt="Ett band spelar på Jubileumsteatern" class="hero-image" />
</div>

<section>
	<Container>
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
	</Container>
</section>

<section>
	<Container>
		<h2>Klara band</h2>
		<ul class="bands">
			{#each bands as band (band)}
				<li>{band}</li>
			{/each}
		</ul>
	</Container>
</section>

<section>
	<Container>
		<h2>Våra partners</h2>
		<div class="logos">
			<LogoKarlsholme />
			<LogoStudieframjandet />
			<LogoRenta />
			<LogoVGR />
		</div>
	</Container>
</section>

<style>
	h2 {
		font-family: casserole-flare;
		text-transform: uppercase;
		letter-spacing: 10%;
	}

	h2 {
		font-size: 4rem;
	}

	@media (max-width: 680px) {
		h2 {
			font-size: 3rem;
		}
	}

	section {
		text-align: center;
		padding: 4rem 0;
	}

	.hero {
		width: 100%;
		height: 600px;
		position: relative;
		overflow: hidden;
	}

	:global(.hero > picture) {
		height: 100%;
	}

	.hero-image {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}

	.hero-logo-container {
		position: absolute;
		inset: 0;
		z-index: 2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 3rem;
		padding: 3rem;
	}

	.hero-logo {
		object-fit: contain;
		height: fit-content;
		width: 600px;
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
	}

	.bands {
		color: white;
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 0.5rem;
		margin-top: 2rem;
	}

	@media (max-width: 680px) {
		.bands {
			grid-template-columns: 1fr;
		}
	}
</style>
