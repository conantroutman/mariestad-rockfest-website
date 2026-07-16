<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		href: string;
		target?: string;
		children: Snippet;
	};

	let { href, children, target = '_blank' }: Props = $props();
</script>

<a {href} {target}>{@render children()}</a>

<style>
	a {
		font-size: 1.25rem;
		padding: 1rem 2rem;
		cursor: pointer;
		border: 2px solid white;
		color: white;
		text-transform: uppercase;
		transition-property:
			transform background-color,
			color;
		transition-duration: 200ms;
		transition-timing-function: ease;
		text-decoration: none;
		backdrop-filter: blur(10px);
	}

	a:hover {
		background-color: white;
		color: black;
	}

	@media (max-width: 680px) {
		a {
			font-size: 1rem;
		}
	}
</style>
