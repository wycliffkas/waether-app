import React, { useState, Suspense, useContext } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import AddCityModal from "../components/AddCityModal";
import { toast } from "react-toastify";
import { CitiesContext } from "../context/CityContext";

const CityList = React.lazy(() => import("../components/CityList"));

const Container = styled.div`
	margin: auto;
	width: 80%;

	@media only screen and (min-width: 600px) {
		width: 60%;
	}

	@media only screen and (min-width: 992px) {
		width: 40%;
	}
`;

const StyledDiv = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const Home = () => {
	const { cities, onAddCity } = useContext(CitiesContext);

	const [open, setOpen] = useState(false);

	const [city, setCity] = useState("");

	const handleModalOpen = () => {
		setOpen(true);
	};

	const handleModalClose = () => {
		setOpen(false);
	};

	const handleSaveCity = () => {
		if (city === "") return;
		const capitalizedCity = city.replace(/\b\w/g, function (str) {
			return str.toUpperCase();
		});

		onAddCity(capitalizedCity);

		setOpen(false);
		setCity("");
		toast.success("City successfully added!");
	};

	return (
		<Container>
			<Typography variant="h6" mt={3} align="center">
				Cites
			</Typography>

			<StyledDiv>
				<Button
					variant="outlined"
					startIcon={<AddIcon />}
					onClick={handleModalOpen}
					size="small"
					aria-label="add new city">
					Add City
				</Button>
			</StyledDiv>

			<Suspense fallback={<div>Loading cities...</div>}>
				<CityList cities={cities} />
			</Suspense>

			<AddCityModal
				open={open}
				onModalClose={handleModalClose}
				setCity={setCity}
				onSaveCity={handleSaveCity}
			/>
		</Container>
	);
};

export default Home;
