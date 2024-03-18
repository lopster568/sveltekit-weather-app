<script>
	export let data;
</script>

<div>
	<h1 class="bg-white/30 w-full rounded-lg h-64 flex justify-around items-center">
		<div class="text-left px-4">
			<p class="text-lg text-gray-600">{data.current.condition.text}</p>
			<h1 class="text-4xl font-bold text-gray-800">{data.current.temp_c}°C</h1>
			<h2>Feels like <span class="font-bold text-gray-800">{data.current.feelslike_c}°C</span></h2>
			<h2>Wind <span class="font-bold text-gray-800">{data.current.wind_kph} kph</span></h2>
		</div>
		<div class="flex justify-center flex-col items-center" >
			<img src={data.current.condition.icon} class="w-24" alt="Svelte Logo" />
			<h1 class="text-2xl text-gray-600">{data.location.name}</h1>
			<h3 class="text-xl font-light">{data.location.region}, {data.location.country}</h3>
		</div>
	</h1>
</div>
