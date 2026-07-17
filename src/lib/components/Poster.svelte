<script lang="ts">
	import poster from '$lib/assets/poster.png?enhanced&format=webp';
	import placeholder from '$lib/assets/poster.png?format=webp&inline&w=16&blur=2';
</script>

<enhanced:img
	class="poster"
	src={poster}
	alt="Affisch Mariestad Rockfest 2026"
	loading="lazy"
	decoding="async"
	style:background-image={`url(${placeholder})`}
/>

<style>
	.poster {
		aspect-ratio: 4 / 5;
		height: 100%;
		max-height: 800px;
		width: 100%;
		object-fit: contain;
		margin: 0 auto;
		background-size: cover;
	}
</style>
