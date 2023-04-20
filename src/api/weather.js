import request from "../utils/request";

const { REACT_APP_WEATHER_API_KEY } = process.env;

export function getCityData(data) {
	return request({
		url: `https://geoapi.qweather.com/v2/city/lookup?key=${REACT_APP_WEATHER_API_KEY}&lang=en`,
		params: data
	});
}

export function getHourlyWeatherForecast(data) {
	return request({
		url: `https://devapi.qweather.com/v7/weather/24h?key=${REACT_APP_WEATHER_API_KEY}&lang=en`,
		params: data
	});
}

export function getWeeklyWeatherForecast(data) {
	return request({
		url: `https://devapi.qweather.com/v7/weather/7d?key=${REACT_APP_WEATHER_API_KEY}&lang=en`,
		params: data
	});
}
