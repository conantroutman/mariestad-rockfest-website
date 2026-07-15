<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import type { PageProps } from './$types';
	import LineupGrid from '$lib/components/LineupGrid.svelte';

	const { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Lineup | Mariestad Rockfest</title>
</svelte:head>

<section>
	<Container>
		<h1 class="heading-1">Lineup 2026</h1>
		<div class="lineup">
			<LineupGrid lineup={data.lineup} />
		</div>
	</Container>
</section>

<style>
	h1 {
		text-align: center;
		margin: auto;
	}

	.lineup {
		margin-top: 4rem;
	}
</style>
