import React, { useEffect, useState, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBack from "@mui/icons-material/ArrowBack";
import styled from "styled-components";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import {
	getCityData,
	getHourlyWeatherForecast,
	getWeeklyWeatherForecast
} from "../api/weather";
import HourlyWeatherChart from "../components/HourlyWeatherChart";
import HourlyWeatherForecast from "../components/HourlyWeatherForecast";
import WeeklyWeatherForecast from "../components/WeeklyWeatherForecast";
import getWeeklyWeatherMood from "../utils/getWeeklyWeatherMood";

const Container = styled.div`
	margin: auto;
	max-width: 80%;

	@media only screen and (min-width: 600px) {
		max-width: 60%;
	}

	@media only screen and (min-width: 992px) {
		width: 50%;
	}
`;

const StyledButton = styled(Button)`
	margin: 20px 10px !important;
`;

const StyledBox = styled(Box)`
	border-bottom: 1;
	border-color: divider;
`;

const StyledParagraph = styled.p`
	text-align: center;
	font-size: 16px;
	margin-top: 30px;
`;

const City = () => {
	const { cityName } = useParams();

	let history = useHistory();

	const [hourlyForecastData, setHourlyForecastData] = useState([]);

	const [weeklyForecastData, setWeeklyForecastData] = useState([]);

	const [value, setValue] = useState("1");

	const [isloading, setIsLoading] = useState(false);

	const [error, setError] = useState("");

	const handleTabChange = (event, newValue) => {
		setValue(newValue);
	};

	const fetchWeatherData = useCallback(async () => {
		try {
			setIsLoading(true);

			const cityDetails = await getCityData({
				location: cityName
			});

			const cityId = cityDetails.data.location[0].id;

			const hourlyForecastResponse = await getHourlyWeatherForecast({
				location: cityId
			});

			setHourlyForecastData(hourlyForecastResponse.data.hourly);

			const weeklyForecastResponse = await getWeeklyWeatherForecast({
				location: cityId
			});

			setWeeklyForecastData(weeklyForecastResponse.data.daily);
			setIsLoading(false);
		} catch (error) {
			setError(error.message);
			setIsLoading(false);
		}
	}, [cityName]);

	useEffect(() => {
		fetchWeatherData();
	}, [cityName, fetchWeatherData]);

	const weeklyWeatherMood = getWeeklyWeatherMood(weeklyForecastData);

	if (isloading) {
		return <StyledParagraph>Loading data...</StyledParagraph>;
	}

	if (error) {
		return <div>{`Error:${error}`}</div>;
	}

	return (
		<>
			<StyledButton
				variant="outlined"
				startIcon={<ArrowBack />}
				size="small"
				aria-label="add new city"
				onClick={() => history.goBack()}>
				Back
			</StyledButton>

			<Container>
				<h3>{cityName}</h3>

				<Box mt={3} mb={2}>{`Week mood: ${weeklyWeatherMood}`}</Box>

				<TabContext value={value}>
					<StyledBox>
						<TabList
							onChange={handleTabChange}
							aria-label="lab API tabs example">
							<Tab label="Hourly" value="1" />
							<Tab label="7-day forecast" value="2" />
						</TabList>
					</StyledBox>

					<TabPanel value="1">
						<HourlyWeatherChart hourlyForecastData={hourlyForecastData} />

						<HourlyWeatherForecast hourlyForecastData={hourlyForecastData} />
					</TabPanel>
					<TabPanel value="2">
						<WeeklyWeatherForecast weeklyForecastData={weeklyForecastData} />
					</TabPanel>
				</TabContext>
			</Container>
		</>
	);
};

export default City;
