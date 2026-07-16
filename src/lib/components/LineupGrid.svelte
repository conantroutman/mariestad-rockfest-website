<script lang="ts">
	import type { LineupArtist } from '$lib/types';
	import LineupCard from './LineupCard.svelte';

	type Props = {
		lineup: LineupArtist[];
	};

	const { lineup }: Props = $props();
</script>

<ul class="grid">
	{#each lineup as artist (artist.slug)}
		<li>
			<LineupCard {artist} />
		</li>
	{/each}
</ul>

<style>
	.grid {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}

	@media (max-width: 35em) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
