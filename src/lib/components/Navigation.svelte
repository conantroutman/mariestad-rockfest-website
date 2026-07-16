<script lang="ts">
	import { FACEBOOK_URL, INSTAGRAM_URL, TICKETS_URL } from '$lib/constants';
	import { fade } from 'svelte/transition';
	import IconMenu from './IconMenu.svelte';
	import IconX from './IconX.svelte';
	import LogoFacebook from './logos/LogoFacebook.svelte';
	import LogoInstagram from './logos/LogoInstagram.svelte';
	import { hideScrollbar } from '$lib/actions/hideScrollbar';

	let open = $state(false);

	const navLinks = [
		{
			href: '/lineup',
			label: 'Lineup'
		},
		{
			href: '/info',
			label: 'Info'
		}
	];
</script>

<div class="button-container">
	<button
		class="button"
		onclick={() => (open = !open)}
		aria-haspopup="menu"
		aria-expanded={open}
		aria-label="Menu"
	>
		{#if !open}
			<span class="button-icon" transition:fade aria-hidden="true">
				<IconMenu />
			</span>
		{:else}
			<span class="button-icon" transition:fade aria-hidden="true">
				<IconX />
			</span>
		{/if}
	</button>
</div>

<div class="container" data-state={open ? 'open' : 'closed'} use:hideScrollbar={open}>
	<nav>
		{#each navLinks as link (link.href)}
			<a href={link.href} class="link" onclick={() => (open = !open)}>{link.label}</a>
		{/each}
		<a href={TICKETS_URL} target="_blank" class="tickets">Biljetter</a>
		<div class="socials">
			<a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" title="Instagram">
				<LogoInstagram />
			</a>
			<a href={FACEBOOK_URL} target="_blank" rel="noreferrer" title="Facebook">
				<LogoFacebook />
			</a>
		</div>
	</nav>
</div>

<style>
	.button-container {
		position: relative;
		z-index: 20;
	}

	.button {
		border: none;
		background: none;
		color: white;
		cursor: pointer;
		position: relative;
		height: 2rem;
		width: 2rem;
	}

	.button-icon {
		position: absolute;
		inset: 0;
	}

	.container {
		background-color: black;
		position: fixed;
		inset: 0;
		transition: transform 500ms cubic-bezier(0.87, 0, 0.13, 1);
		container-type: inline-size;
	}

	.container[data-state='open'] {
		transform: translateX(0);
	}

	.container[data-state='closed'] {
		transform: translateX(100%);
	}

	.container[data-state='open'] nav {
		animation: fade-in 300ms ease-in-out;
		animation-delay: 500ms;
		animation-fill-mode: forwards;
	}

	.container[data-state='closed'] nav {
		animation: fade-out 300ms ease-in-out;
		animation-fill-mode: forwards;
	}

	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		gap: 2rem;
		opacity: 0;
	}

	nav a {
		font-size: 4rem;
		text-decoration: none;
		text-transform: uppercase;
		font-weight: 500;
	}

	@container (width < 600px) {
		nav {
			gap: 1rem;
		}

		nav a {
			font-size: 3rem;
		}
	}

	.socials {
		display: flex;
		gap: 2rem;
		height: 4rem;
	}

	@keyframes slide-in {
		from {
			transform: translateX(100%);
		}

		to {
			transform: translateX(0);
		}
	}

	@keyframes slide-out {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(100%);
		}
	}
</style>
