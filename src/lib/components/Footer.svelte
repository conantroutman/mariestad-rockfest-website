<script>
	import Container from './Container.svelte';
	import LogoFacebook from './logos/LogoFacebook.svelte';
	import LogoInstagram from './logos/LogoInstagram.svelte';
	import Logo from '$lib/assets/logo.png?enhanced';
</script>

<footer>
	<Container>
		<div class="logo">
			<enhanced:img src={Logo} alt="Mariestad Rockfest" />
		</div>
		<div class="grid">
			<div>
				<h4>Festivalområdet</h4>
				<address>
					<div>Karlsholme Folkets Park</div>
					<div>542 30 Mariestad</div>
					<div>Sverige</div>
				</address>
			</div>
			<div>
				<h4>Kontaktuppgifter</h4>
				<address>
					<div>
						E-post: <a href="mailto:mariestadrockfest@gmail.com">mariestadrockfest@gmail.com</a>
					</div>
				</address>
			</div>
			<div>
				<h4>Följ oss på sociala medier</h4>
				<ul class="socials">
					<li>
						<a
							href="https://instagram.com/mariestad_rockfest"
							target="_blank"
							rel="noreferrer"
							title="Instagram"
						>
							<LogoInstagram />
						</a>
					</li>
					<li>
						<a
							href="https://www.facebook.com/mariestadrockfest"
							target="_blank"
							rel="noreferrer"
							title="Facebook"
						>
							<LogoFacebook />
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="copyright">© Mariestad Rockfest 2026</div>
	</Container>
</footer>

<style>
	footer {
		background-color: black;
		color: white;
		padding-top: 4rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1.5rem;
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

	h4 {
		margin-bottom: 0.5rem;
	}

	address {
		font-weight: 300;
	}

	.copyright {
		text-align: center;
		font-weight: 200;
		font-size: 0.75rem;
		padding: 1rem 0;
	}

	.logo {
		max-width: 400px;
		margin: 0 auto 2rem auto;
	}

	.logo img {
		width: 100%;
		height: 100%;
	}
</style>
