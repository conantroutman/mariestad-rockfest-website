<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import type { PageProps } from './$types';
	import Faq from '$lib/components/Faq.svelte';

	const { data }: PageProps = $props();
</script>

<section>
	<Container size="sm">
		<h1>Information</h1>
		<Faq items={data.questions} />
	</Container>
</section>
