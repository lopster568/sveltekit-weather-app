export type WeatherData = {
	current: {
		condition: {
			text: string;
			icon: string;
		};
		temp_c: number;
		feelslike_c: string;
		wind_kph: string;
		is_day: string;
		humidity: string;
		cloud: string;
		uv: string;
		gust_kph: string;
	};
	location: {
		name: string;
		region: string;
		country: string;
	};
	forecast: {
		forecastday: [
			{
				day: {
					maxtemp_c: number;
					mintemp_c: number;
					condition: {
						text: string;
						icon: string;
					};
                    avghumidity: number;
                    avgtemp_c: number;
                    uv: number;
                    avgvis_km: number;
                    maxwind_kph: number;
				};
                astro: {
                    sunrise: string;
                    sunset: string;
                    moonrise: string;
                    moonset: string;
                };
			}
		];
	};
};
