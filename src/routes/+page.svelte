<script lang="ts">
	import Forecast from '../components/Forecast.svelte';
	import Info from '../components/Info.svelte';
	import Overview from '../components/Overview.svelte';
	import type { WeatherData } from '../types/types';
	export let data: WeatherData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center">
	<Overview {data} />
	<Info data={data} />
	<Forecast {data} />
</section>
