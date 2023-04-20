import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import moment from "moment";
import "qweather-icons/font/qweather-icons.css";

const WeeklyWeatherForecast = ({ weeklyForecastData }) => {
	const Grid = styled.div`
		display: grid;
		grid-template-columns: auto auto auto;
	`;

	const GridItem = styled.div`
		padding: 10px;
		text-align: left;
	`;

	return (
		<Box>
			<Grid container spacing={2}>
				{weeklyForecastData?.map((weekForecast) => (
					<>
						<GridItem>
							{moment(weekForecast.fxDate).format("ddd, MMM YY")}
						</GridItem>
						<GridItem>
							<i className={`qi-${weekForecast.iconDay}-fill`} />
							{` ${weekForecast.tempMax} / ${weekForecast.tempMin}\u00b0C`}
						</GridItem>
						<GridItem>{weekForecast.textDay}</GridItem>
					</>
				))}
			</Grid>
		</Box>
	);
};

export default WeeklyWeatherForecast;
