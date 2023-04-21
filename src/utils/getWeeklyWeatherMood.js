/**
 * Determines the weekly weather mood based on maximum daily temperature and daily humidity
 * @param {Array} forecast - An array of objects containing daily forecast data, each object must have 'tempMax' and 'humidity' properties.
 * @returns {string} The weekly weather mood ('Amazing', 'Good', 'Normal', 'Bad', 'Unacceptable')
 */

const getWeeklyWeatherMood = (forecast) => {
	// Extract maximum temperatures and humidities from the input forecast array
	const temps = forecast.map((day) => day.tempMax);
	const humidities = forecast.map((day) => day.humidity);
	// Calculate the maximum and minimum temperature and average humidity
	const maxTemp = Math.max(...temps);
	const minTemp = Math.min(...temps);
	const avgHumidity =
		humidities.reduce((sum, humidity) => sum + humidity, 0) / humidities.length;

	// Determine the weather mood based on the temperature and humidity conditions
	if (maxTemp >= 35 && minTemp <= 5) {
		// If the temperature is very high and also very low, the weather mood is 'Unacceptable'
		return "Unacceptable";
	} else if (maxTemp >= 30 && avgHumidity >= 80) {
		// If the maximum temperature is >= 30°C and the average humidity is >= 80%, the weather mood is 'Bad'
		return "Bad";
	} else if (maxTemp >= 25 && avgHumidity >= 60) {
		// If the maximum temperature is >= 25°C and the average humidity is >= 60%, the weather mood is 'Normal'
		return "Normal";
	} else if (maxTemp >= 20 && avgHumidity >= 40) {
		// If the maximum temperature is >= 20°C and the average humidity is >= 40%, the weather mood is 'Good'
		return "Good";
	} else {
		// If none of the above conditions are met, the weather mood is 'Amazing'
		return "Amazing";
	}
};

export default getWeeklyWeatherMood;
