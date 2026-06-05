<script lang="ts">
	import { TICKETS_URL } from '$lib/constants';
</script>

<header>
	<h1 class="wordmark"><a href="/">Mariestad Rockfest</a></h1>
	<a href={TICKETS_URL} target="_blank" class="tickets">Biljetter</a>
</header>

<style>
	header {
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

	.wordmark {
		font-family: casserole-flare;
		text-transform: uppercase;
		letter-spacing: 5%;
		text-wrap: nowrap;
	}

	.wordmark a {
		text-decoration: none;
	}

	.tickets {
		display: block;
		text-decoration: none;
		outline: 1px solid white;
		padding: 0.25rem 1rem;
		width: fit-content;
		justify-self: end;
		transition-property:
			transform background-color,
			color;
		transition-duration: 200ms;
		transition-timing-function: ease;
	}

	.tickets:hover {
		background-color: white;
		color: black;
	}

	@media (max-width: 680px) {
		.wordmark {
			font-size: 1.25rem;
		}
	}
</style>
