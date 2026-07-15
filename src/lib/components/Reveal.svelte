<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		delay?: number;
	};

	const { children, delay }: Props = $props();
</script>

<div class="reveal" style:--delay={`${delay ?? 0}ms`}>
	{@render children()}
</div>

<style>
	.reveal {
		animation: 500ms animate-in ease-in-out;
		animation-delay: var(--delay);
		animation-fill-mode: forwards;
		opacity: 0;
	}

	@keyframes animate-in {
		from {
			opacity: 0;
			transform: translateY(64px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
