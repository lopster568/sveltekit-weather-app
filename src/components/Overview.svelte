<script>
	export let data;
	import daytime from '../lib/images/daytime.jpg';
	import nightime from '../lib/images/nighttime.jpg';
</script>

<div class="relative rounded-2xl">
	<img
		src={data.current.is_day ? daytime : nightime}
		class="absolute left-0 w-full top-0 h-64 opacity-50 z-0 object-cover object-bottom"
		alt=""
	/>
	<div class=" z-20 w-full rounded-lg h-64 flex justify-around items-center relative">
		<div class="text-left px-4 flex gap-8">
			<div>
				<img
					src={data.current.condition.icon}
					class="w-24 p-4 bg-white/40 rounded-3xl"
					alt="Svelte Logo"
				/>
			</div>
			<div>
				<h1 class="text-4xl font-bold text-gray-800">
					{data.current.condition.text}, {data.current.temp_c}°C
				</h1>
				<h2>
					Feels like <span class="font-bold text-gray-800">{data.current.feelslike_c}°C</span>
				</h2>
				<h2>Wind <span class="font-bold text-gray-800">{data.current.wind_kph} kph</span></h2>
			</div>
		</div>
		<div class="flex justify-center flex-col items-center">
			<h1 class="text-7xl font-bold">{data.location.name}</h1>
			<h3 class="text-xl font-light">{data.location.region}, {data.location.country}</h3>
		</div>
	</div>
</div>
