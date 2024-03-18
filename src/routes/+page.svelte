<script>
	import Forecast from '../components/Forecast.svelte';
	import Info from '../components/Info.svelte';
	import Overview from '../components/Overview.svelte';
	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center">
	<Overview {data} />
	<Info data={data.current} />
	<Forecast {data} />
</section>
