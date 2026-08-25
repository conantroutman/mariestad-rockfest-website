<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { Confetti } from 'svelte-confetti';

	type Props = {
		date: Date;
	};

	let { date }: Props = $props();

	let isMounted = $state(false);

	let timeLeft = $state({ days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 });

	let interval: ReturnType<typeof setInterval>;

	function calculateTime() {
		const target = date.getTime();
		const now = new Date().getTime();
		const difference = target - now;

		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((difference % (1000 * 60)) / 1000);

		timeLeft = { days, hours, minutes, seconds, totalSeconds: difference / 1000 };
	}

	onMount(() => {
		calculateTime();
		interval = setInterval(calculateTime, 1000);
		isMounted = true;
	});

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});
</script>

<div class="wrapper">
	{#if isMounted}
		{#if timeLeft.totalSeconds > 0}
			<div class="container">
				<div class="segment">
					<div class="value">{timeLeft.days}</div>
					<div class="label">Dagar</div>
				</div>
				<div class="segment">
					<div class="value">
						{timeLeft.hours}
					</div>
					<div class="label">Timmar</div>
				</div>
				<div class="segment">
					<div class="value">{timeLeft.minutes}</div>
					<div class="label">Minuter</div>
				</div>
				<div class="segment">
					<div class="value">{timeLeft.seconds}</div>
					<div class="label">Sekunder</div>
				</div>
			</div>
		{:else}
			<div class="countdown-finished">
				<div class="confetti">
					<Confetti x={[-3, 3]} y={[0.25, 0.5]} />
				</div>
				<div>Festivalen har börjat!</div>
			</div>
		{/if}
	{/if}
</div>

<style>
	.wrapper {
		height: 152px;
	}

	.container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 2rem;
		text-align: center;
		width: fit-content;
		margin: 0 auto;
		font-family: var(--font-family-casserole);
		text-transform: uppercase;
	}

	.segment {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		flex: 1;
	}

	.value {
		font-size: 4rem;
	}

	.label {
		font-size: 2rem;
	}

	.countdown-finished {
		font-size: 4rem;
		font-family: var(--font-family-casserole);
		text-transform: uppercase;
		text-align: center;
		display: flex;
		justify-content: center;
		position: relative;
		height: 152px;
	}

	.confetti {
		position: absolute;
	}

	@container (width < 600px) {
		.container {
			gap: 1rem;
		}

		.value {
			font-size: 2rem;
		}

		.label {
			font-size: 1rem;
		}
	}
</style>
