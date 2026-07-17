<script lang="ts">
	import poster from '$lib/assets/poster.png?enhanced&format=webp&w=1080&h=1350&aspect=4:5';
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
		width: fit-content;
		object-fit: contain;
		margin: 0 auto;
		background-size: cover;
	}
</style>
