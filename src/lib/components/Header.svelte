<script lang="ts">
	import MariestadRockfestLogo from './MariestadRockfestLogo.svelte';
	import Navigation from './Navigation.svelte';
</script>

<header>
	<a href="/" class="logo" aria-label="Home"><MariestadRockfestLogo /></a>
	<Navigation />
</header>

<style>
	header {
		height: var(--header-height);
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: white;
		background-color: black;
		padding: 1rem var(--page-gutter);
		position: sticky;
		z-index: 10;
		top: 0;
		right: 0;
		left: 0;
	}

	.logo {
		color: white;
		height: 2rem;
	}
</style>
