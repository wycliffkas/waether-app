import React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

const CityList = ({cities}) => {
	return (
		<List>
			{[...cities].map((city) => (
				<ListItemText key={city}>{city}</ListItemText>
			))}
		</List>
	);
};

export default CityList;
