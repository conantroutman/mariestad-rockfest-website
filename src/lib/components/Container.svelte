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
		padding: 0 var(--page-gutter);
		container-type: inline-size;
	}
</style>
