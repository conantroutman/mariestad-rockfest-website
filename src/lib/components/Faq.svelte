<script lang="ts">
	import { Accordion } from 'bits-ui';

	type Item = {
		question: string;
		answer: string;
	};

	type Props = {
		items: Item[];
	};

	const { items }: Props = $props();
</script>

<Accordion.Root type="multiple">
	{#snippet child({ props })}
		<div {...props} class="root">
			{#each items as item (item.question)}
				<Accordion.Item>
					{#snippet child({ props })}
						<div {...props} class="item">
							<Accordion.Header>
								<Accordion.Trigger>
									{#snippet child({ props })}
										<button {...props} class="trigger">
											<span>
												{item.question}
											</span>
											<span class="chevron">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
													class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
													><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
														d="M6 15l6 -6l6 6"
													/></svg
												>
											</span>
										</button>
									{/snippet}
								</Accordion.Trigger>
							</Accordion.Header>
							<Accordion.Content>
								{#snippet child({ props })}
									<div {...props} class="content">
										<div class="content-text">
											{@html item.answer}
										</div>
									</div>
								{/snippet}
							</Accordion.Content>
						</div>
					{/snippet}
				</Accordion.Item>
			{/each}
		</div>
	{/snippet}
</Accordion.Root>

<style>
	.root {
		width: 100%;
	}

	.item {
		border-bottom: 1px solid rgba(255, 255, 255, 0.35);
	}

	.trigger {
		display: flex;
		width: 100%;
		user-select: none;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 0;
		background: none;
		color: white;
		border: none;
		cursor: pointer;
		font-weight: bold;
		text-align: left;
	}

	.trigger[data-state='open'] .chevron {
		transform: rotate(180deg);
	}

	.chevron {
		transition: transform 200ms ease-in-out;
	}

	.content {
		overflow: hidden;
	}

	.content[data-state='open'] {
		animation: 200ms accordion-down ease-in-out;
	}

	.content[data-state='closed'] {
		animation: 200ms accordion-up ease-in-out;
	}

	.content-text {
		padding-bottom: 1.5rem;
	}

	@keyframes accordion-down {
		from {
			height: 0;
		}
		to {
			height: var(--bits-accordion-content-height);
		}
	}

	@keyframes accordion-up {
		from {
			height: var(--bits-accordion-content-height);
		}
		to {
			height: 0;
		}
	}
</style>
