import React, { createContext, useState } from "react";
export const CitiesContext = createContext();

const CityContext = (props) => {
	const [cities, setCities] = useState(
		new Set(["Amsterdam", "New York", "Berlin"])
	);

	const onAddCity = (city) => {
		const capitalizedCity = city.replace(/\b\w/g, function (str) {
			return str.toUpperCase();
		});

		setCities((prevState) => new Set(prevState).add(capitalizedCity.trim()));
	};

	return (
		<CitiesContext.Provider value={{ cities, onAddCity }}>
			{props.children}
		</CitiesContext.Provider>
	);
};

export default CityContext;
