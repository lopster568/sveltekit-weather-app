<script lang="ts">
	import type { WeatherData } from '../types/types';
	export let data: WeatherData ;
	let isDay = Boolean(data.current.is_day);
	export { isDay as Boolean };
</script>

<div class="my-8">
	<div class={`grid grid-cols-2 md:grid-cols-4 place-content-center gap-8 ${isDay ? "" : "text-white"}`} >
		<div
			class="flex py-16 justify-center items-center flex-col text-left backdrop-blur-xl hover:bg-white/20 bg-white/40 hover:backdrop-blur-lg transition-all ease-in-out hover:scale-105 rounded-xl"
		>
			<span class="font-bold text-3xl">Humidity</span>
			<span class=" font-light text-4xl">{data.current.humidity}</span>
		</div>
		<div
			class="flex py-16 justify-center items-center flex-col text-left backdrop-blur-xl hover:bg-white/20 bg-white/40 hover:backdrop-blur-lg transition-all ease-in-out hover:scale-105 rounded-xl"
		>
			<span class="font-bold text-3xl">Cloud</span>
			<span class=" font-light text-4xl">{data.current.cloud}</span>
		</div>
		<div
			class="flex py-16 justify-center items-center flex-col text-left backdrop-blur-xl hover:bg-white/20 bg-white/40 hover:backdrop-blur-lg transition-all ease-in-out hover:scale-105 rounded-xl"
		>
			<span class="font-bold text-3xl">UV</span>
			<span class=" font-light text-4xl">{data.current.uv}</span>
		</div>
		<div
			class="flex py-16 justify-center items-center flex-col text-left backdrop-blur-xl hover:bg-white/20 bg-white/40 hover:backdrop-blur-lg transition-all ease-in-out hover:scale-105 rounded-xl"
		>
			<span class="font-bold text-3xl">Gust</span>
			<span class=" font-light text-4xl">{data.current.gust_kph}</span>
		</div>
	</div>
</div>
