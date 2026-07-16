<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import type { PageProps } from './$types';
	import Faq from '$lib/components/Faq.svelte';
	import Map from '$lib/components/Map.svelte';

	const { data }: PageProps = $props();
</script>

<section>
	<Container size="sm">
		<h1 class="heading-1">Information</h1>
		<Faq items={data.questions} />
		<h2 class="heading-2">Hitta till festivalen</h2>
	</Container>
	<Map />
</section>

<style>
	h1 {
		margin: 2rem 0;
		text-align: center;
	}

	h2 {
		margin: 4rem 0 2rem 0;
		text-align: center;
	}
</style>
