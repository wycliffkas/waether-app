import React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const CityList = ({ cities }) => {
	return (
		<List>
			{[...cities].map((city) => (
				<ListItemText key={city}>
					<Link to={`/city/${city}`}>{city}</Link>
				</ListItemText>
			))}
		</List>
	);
};

export default CityList;
