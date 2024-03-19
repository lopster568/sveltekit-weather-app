<script>
	import github from '$lib/images/github.svg';
	import logo from '$lib/images/logo.png';
</script>

<header class="flex justify-between">
	<div class="corner">
		<a href="/">
			<img src={logo} alt="logo" />
		</a>
	</div>

	<nav>
		<h3 class="p-4 px-12 rounded-lg uppercase font-bold bg-white/20">Weather App</h3>
	</nav>

	<div class="corner">
		<a href="https://github.com/lopster568/sveltekit-weather-app">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
