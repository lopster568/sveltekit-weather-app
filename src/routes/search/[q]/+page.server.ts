import { WEATHER_API } from '$env/static/private';
import type { PageLoadEvent } from '../../about/$types';
export const load = async (loadEvent: PageLoadEvent) => {
	const { fetch } = loadEvent;
	const res = await fetch(
		`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API}&q=${loadEvent.params?.q}`
	);
	const data = await res.json();
	return data;
};
