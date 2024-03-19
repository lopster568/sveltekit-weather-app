<script>
	import github from '$lib/images/github.svg';
	import logo from '$lib/images/logo.png';
	import search from '$lib/images/search.png';
	let query = '';
	const searchCity = () => {
		if (query) {
			console.log(query);

			// navigate to the search page
		}
	};
</script>

<header>
	<div class="flex justify-between">
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
	</div>
	<div class="w-full flex justify-center items-center pt-8">
		<input
			type="text"
			placeholder="Search City, State"
			class="text-2xl w-3/5 max-w-xl px-4 py-2 shadow-lg rounded-lg bg-white/80 font-light"
			bind:value={query}
		/>
		<a
			href={`search/${query}`}
			class="h-full bg-white/90 py-2 px-2 rounded-lg mx-2 hover:bg-white active:scale-95"
		>
			<img src={search} class="w-8 h-8 bg-white text-2xl" alt="" />
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
