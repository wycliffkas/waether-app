import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBack from "@mui/icons-material/ArrowBack";
import styled from "styled-components";

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

const StyledButton = styled(Button)`
	margin: 20px 0 !important;
`;

const City = () => {
	const { cityName } = useParams();
	let history = useHistory();

	return (
		<Container>
			<StyledButton
				variant="outlined"
				startIcon={<ArrowBack />}
				size="small"
				aria-label="add new city"
				onClick={() => history.goBack()}>
				Back
			</StyledButton>
			<div>{cityName}</div>
		</Container>
	);
};

export default City;
