<script>
	let { children } = $props();
</script>

<div class="container">
	{@render children()}
</div>

<style>
	.container {
		width: 100%;
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 3rem;
		container-type: inline-size;
	}

  @media (max-width: 680px) {
		.container {
			padding: 0 2rem;
		}
	}
</style>
