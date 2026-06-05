<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="https://use.typekit.net/pgv6ukm.css" />
	<title>Mariestad Rockfest</title>
</svelte:head>

<Header />
<main>
	{@render children()}
</main>
<Footer />

<style global>
	:global(body) {
		background-color: black;
	}

	:global(h1, h2, h3, h4, h5, h6, p) {
		color: white;
	}
</style>
