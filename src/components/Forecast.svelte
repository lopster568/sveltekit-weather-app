<script lang="ts">
	export let data: import('../types/types').WeatherData;
	let isDay = Boolean(data.current.is_day);
	export { isDay as Boolean };
</script>

<div>
	<div class="">
		<div
			class={`flex p-4 px-8 items-center text-left backdrop-blur-xl hover:backdrop-blur-lg rounded-xl transition-all ease-in-out ${!isDay ? 'text-white hover:bg-[#3B5370]/60 bg-[#3B5370]/40' : 'text-gray-800 hover:bg-[#A7C053]/60 bg-[#A7C053]/40'}`}
		>
			<h1 class="text-3xl font-bold">Day Forecast</h1>
		</div>
		<div
			class={`grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-8 p-4 px-8 my-4 items-center text-left backdrop-blur-xl  hover:backdrop-blur-lg rounded-xl ${!isDay ? 'text-white hover:bg-[#3B5370]/60 bg-[#3B5370]/40' : 'text-gray-800 hover:bg-[#A7C053]/60 bg-[#A7C053]/40'}`}
		>
			<div
				class="bg-white/40 rounded-3xl flex flex-col md:flex-row text-2xl font-light items-center justify-center px-8"
			>
				<img class="w-24" src={data.forecast.forecastday[0].day.condition.icon} alt="" />
				<h1 class="m-2">{data.forecast.forecastday[0].day.condition.text}</h1>
			</div>
			<div
				class="bg-white/40 h-auto py-4 rounded-3xl flex flex-col md:flex-row text-2xl font-light items-center justify-center px-8"
			>
				<h1 class="text-sm">Max Temp:</h1>
				<h1 class="mx-2">{data.forecast.forecastday[0].day.maxtemp_c}°C</h1>
			</div>
			<div
				class="bg-white/40 h-auto py-4 rounded-3xl flex flex-col md:flex-row text-2xl font-light items-center justify-center px-8"
			>
				<h1 class="text-sm">Min Temp:</h1>
				<h1 class="mx-2">{data.forecast.forecastday[0].day.mintemp_c}°C</h1>
			</div>
			<div
				class="bg-white/40 h-auto py-4 rounded-3xl flex flex-col md:flex-row text-2xl font-light items-center justify-center px-8"
			>
				<h1 class="text-sm">Avg Temp:</h1>
				<h1 class="mx-2">{data.forecast.forecastday[0].day.avgtemp_c}°C</h1>
			</div>
			<div
				class="bg-white/40 h-auto py-4 rounded-3xl flex flex-col md:flex-row text-2xl font-light items-center justify-center px-8"
			>
				<h1 class="text-sm">UV:</h1>
				<h1 class="mx-2">{data.forecast.forecastday[0].day.uv}</h1>
			</div>
			<div
				class="bg-white/40 h-auto py-4 rounded-3xl flex flex-col md:flex-row text-2xl font-light items-center justify-center px-8"
			>
				<h1 class="text-sm">Avg Humidity:</h1>
				<h1 class="mx-2">{data.forecast.forecastday[0].day.avghumidity}</h1>
			</div>
			<div
				class="bg-white/40 h-auto py-4 rounded-3xl flex flex-col md:flex-row text-2xl font-light items-center justify-center px-8"
			>
				<h1 class="text-sm">Max Wind:</h1>
				<h1 class="mx-2">{data.forecast.forecastday[0].day.maxwind_kph}km/h</h1>
			</div>
			<div
				class="bg-white/40 h-auto py-4 rounded-3xl flex flex-col md:flex-row text-2xl font-light items-center justify-center px-8"
			>
				<h1 class="text-sm">Visibility:</h1>
				<h1 class="mx-2">{data.forecast.forecastday[0].day.avgvis_km}km</h1>
			</div>
		</div>
		<div class="my-8">
			<div class={`grid grid-cols-2 md:grid-cols-4 place-content-center gap-8 `}>
				<div
					class="flex py-16 justify-center items-center flex-col text-left backdrop-blur-xl hover:bg-white/20 bg-white/40 hover:backdrop-blur-lg transition-all ease-in-out hover:scale-105 rounded-xl"
				>
					<span class="font-bold text-lg">Sunrise</span>
					<span class=" font-light text-3xl md:text-4xl"
						>{data.forecast.forecastday[0].astro.sunrise}</span
					>
				</div>
				<div
					class="flex py-16 justify-center items-center flex-col text-left backdrop-blur-xl hover:bg-white/20 bg-white/40 hover:backdrop-blur-lg transition-all ease-in-out hover:scale-105 rounded-xl"
				>
					<span class="font-bold text-lg">Sunset</span>
					<span class=" font-light text-3xl md:text-4xl"
						>{data.forecast.forecastday[0].astro.sunset}</span
					>
				</div>
				<div
					class="flex py-16 justify-center items-center flex-col text-left backdrop-blur-xl hover:bg-white/20 bg-white/40 hover:backdrop-blur-lg transition-all ease-in-out hover:scale-105 rounded-xl"
				>
					<span class="font-bold text-lg">Moonrise</span>
					<span class=" font-light text-3xl md:text-4xl"
						>{data.forecast.forecastday[0].astro.moonrise}</span
					>
				</div>
				<div
					class="flex py-16 justify-center items-center flex-col text-left backdrop-blur-xl hover:bg-white/20 bg-white/40 hover:backdrop-blur-lg transition-all ease-in-out hover:scale-105 rounded-xl"
				>
					<span class="font-bold text-lg">Moonset</span>
					<span class=" font-light text-3xl md:text-4xl"
						>{data.forecast.forecastday[0].astro.moonset}</span
					>
				</div>
			</div>
		</div>
	</div>
</div>
