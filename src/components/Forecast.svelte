<script>
	export let data;
</script>

<div>
	<div class="">
		<div
			class="flex p-4 px-8 items-center text-left backdrop-blur-xl hover:bg-[#A7C053]/60 bg-[#A7C053]/40 hover:backdrop-blur-lg rounded-xl"
		>
			<h1 class="text-3xl font-bold">Day Forecast</h1>
		</div>
		<div
			class="flex p-4 px-8 my-4 items-center text-left backdrop-blur-xl hover:bg-[#A7C053]/60 bg-[#A7C053]/40 hover:backdrop-blur-lg rounded-xl"
		>
			<div class="bg-white/40 rounded-3xl flex text-2xl font-light items-center justify-center px-8" >
				<img
					class="w-24"
					src={data.forecast.forecastday[0].day.condition.icon}
					alt=""
				/>
				<h1 class="mx-2" >{data.forecast.forecastday[0].day.condition.text}</h1>
			</div>
		</div>
		<div class="my-8">
			<div class="grid grid-cols-4 place-content-center gap-8">
				<div
					class="flex py-16 justify-center items-center flex-col text-left backdrop-blur-xl hover:bg-white/20 bg-white/40 hover:backdrop-blur-lg transition-all ease-in-out hover:scale-105 rounded-xl"
				>
					<span class="font-bold text-3xl">Sunrise</span>
					<span class=" font-light text-4xl text-gray-800"
						>{data.forecast.forecastday[0].astro.sunrise}</span
					>
				</div>
				<div
					class="flex py-16 justify-center items-center flex-col text-left backdrop-blur-xl hover:bg-white/20 bg-white/40 hover:backdrop-blur-lg transition-all ease-in-out hover:scale-105 rounded-xl"
				>
					<span class="font-bold text-3xl">Sunset</span>
					<span class=" font-light text-4xl text-gray-800"
						>{data.forecast.forecastday[0].astro.sunset}</span
					>
				</div>
				<div
					class="flex py-16 justify-center items-center flex-col text-left backdrop-blur-xl hover:bg-white/20 bg-white/40 hover:backdrop-blur-lg transition-all ease-in-out hover:scale-105 rounded-xl"
				>
					<span class="font-bold text-3xl">Moonrise</span>
					<span class=" font-light text-4xl text-gray-800"
						>{data.forecast.forecastday[0].astro.moonrise}</span
					>
				</div>
				<div
					class="flex py-16 justify-center items-center flex-col text-left backdrop-blur-xl hover:bg-white/20 bg-white/40 hover:backdrop-blur-lg transition-all ease-in-out hover:scale-105 rounded-xl"
				>
					<span class="font-bold text-3xl">Moonset</span>
					<span class=" font-light text-4xl text-gray-800"
						>{data.forecast.forecastday[0].astro.moonset}</span
					>
				</div>
			</div>
		</div>
	</div>
</div>
