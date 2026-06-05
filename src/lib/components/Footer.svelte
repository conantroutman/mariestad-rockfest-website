<script>
	import Container from './Container.svelte';
	import LogoFacebook from './logos/LogoFacebook.svelte';
	import LogoInstagram from './logos/LogoInstagram.svelte';
</script>

<footer>
	<Container>
		<div class="grid">
			<div>
				<h3>Festivalområdet</h3>
				<address>
					<div>Karlsholme Folkets Park</div>
					<div>542 30 Mariestad</div>
					<div>Sverige</div>
				</address>
			</div>
			<div>
				<h3>Kontaktuppgifter</h3>
				<address>
					<div>
						E-post: <a href="mailto:mariestadrockfest@gmail.com">mariestadrockfest@gmail.com</a>
					</div>
				</address>
			</div>
			<div>
				<h3>Följ oss på sociala medier</h3>
				<ul class="socials">
					<li>
						<a href="https://instagram.com/mariestadrockfest" title="Instagram">
							<LogoInstagram />
						</a>
					</li>
					<li>
						<a href="https://www.facebook.com/profile.php?id=61575453290236" title="Facebook">
							<LogoFacebook />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</Container>
</footer>

<style>
	footer {
		background-color: black;
		padding: 2rem 0;
		color: white;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		row-gap: 1.5rem;
	}

	@media (max-width: 680px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	.socials {
		list-style: none;
		padding: 0;
		display: flex;
		gap: 1rem;
	}

	.socials a {
		transition: opacity 200ms ease;
	}

	.socials a:hover {
		opacity: 0.75;
	}

	h3 {
		margin-bottom: 0.5rem;
	}
</style>
