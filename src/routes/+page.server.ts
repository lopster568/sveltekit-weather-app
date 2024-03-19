import { WEATHER_API } from '$env/static/private';
import type { PageLoad, PageLoadEvent } from './about/$types';
export const load: PageLoad = async (loadEvent: PageLoadEvent) => {
	const { fetch } = loadEvent;
	const res = await fetch(
		`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API}&q=Gurgaon`
	);
	const data = await res.json();
	return data;
};
