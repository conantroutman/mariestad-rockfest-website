<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		size?: 'sm' | 'md' | 'lg';
	};

	let { children, size = 'lg' }: Props = $props();
</script>

<div class="container" class:sm={size === 'sm'} class:md={size === 'md'} class:lg={size === 'lg'}>
	{@render children()}
</div>

<style>
	.container {
		width: 100%;
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 var(--page-gutter);
		container-name: container;
		container-type: inline-size;
	}

	.sm {
		max-width: 680px;
	}

	.md {
		max-width: 900px;
	}

	.lg {
		max-width: 1440px;
	}
</style>
