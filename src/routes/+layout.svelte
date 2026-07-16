<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();

	onMount(() => {
		console.log('Created by John Söderberg');
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="https://use.typekit.net/pgv6ukm.css" />
	<title>Mariestad Rockfest</title>
	<meta
		name="description"
		content="Mariestad Rockfest är en gigantisk musikfest där vi firar Mariestads Rockscen! Festivalen äger rum den 5:e September 2026 i Folkets Park på Karlsholme."
	/>
</svelte:head>

<Header />
<main>
	{@render children()}
</main>
<Footer />

<style>
	:global(body) {
		background-color: black;
		background-attachment: fixed;
		background-size: contain;
		position: relative;
	}
</style>
