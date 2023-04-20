import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBack from "@mui/icons-material/ArrowBack";
import styled from "styled-components";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import { getCityData, getHourlyWeatherForecast } from "../api/weather";
import HourlyWeatherChart from "../components/HourlyWeatherChart";
import HourlyWeatherForecast from "../components/HourlyWeatherForecast";

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

const City = () => {
	const { cityName } = useParams();
	let history = useHistory();

	const [hourlyForecastData, sethourlyForecastData] = useState([]);

	const [value, setValue] = useState("1");

	const [isloading, setIsLoading] = useState(false);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const cityDetails = await getCityData({
				location: cityName
			});

			const hourlyForecastResponse = await getHourlyWeatherForecast({
				location: cityDetails.data.location[0].id
			});

			sethourlyForecastData(hourlyForecastResponse.data.hourly);
			setIsLoading(false);
		};
		fetchData();
	}, [cityName]);

	if (isloading) {
		return <div>Loading...</div>;
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
				<div>{cityName}</div>

				<Box mt={2}>Week mood:</Box>

				<TabContext value={value}>
					<StyledBox>
						<TabList onChange={handleChange} aria-label="lab API tabs example">
							<Tab label="Hourly" value="1" />
							<Tab label="7-day forecast" value="2" />
						</TabList>
					</StyledBox>

					<TabPanel value="1">
						<HourlyWeatherChart hourlyForecastData={hourlyForecastData} />

						<HourlyWeatherForecast hourlyForecastData={hourlyForecastData} />
					</TabPanel>
					<TabPanel value="2">Item Two</TabPanel>
				</TabContext>
			</Container>
		</>
	);
};

export default City;
