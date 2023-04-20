import React from "react";
import moment from "moment";
import Box from "@mui/material/Box";

const HourlyWeatherForecast = ({ hourlyForecastData }) => {
	return (
		<Box mt={3} ml={4}>
			{hourlyForecastData?.slice(12).map((data) => {
				return (
					<div key={data.fxTime}>{`${moment(data.fxTime).format(
						"hh:mm"
					)}  -  ${parseInt(data.temp)}\u00b0C`}</div>
				);
			})}
		</Box>
	);
};

export default HourlyWeatherForecast;
