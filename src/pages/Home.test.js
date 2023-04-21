import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CityList from "../components/CityList";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";
import CityContext from "../context/CityContext";

describe("Home Page", () => {
	test("renders Amsterdam in the city list", () => {
		const cities = ["New York", "Berlin", "Amsterdam"];
		render(
			<MemoryRouter>
				<CityList cities={cities} />
			</MemoryRouter>
		);
		const element = screen.getByText("Amsterdam");
		expect(element).toBeInTheDocument();
	});

	test("Should open modal when 'Add City' button is clicked", () => {
		render(
			<CityContext>
				<Home />
			</CityContext>
		);

		const openButton = screen.getByText("Add City");
		fireEvent.click(openButton);

		const modalTitle = screen.getByText(
			"To add a new city, please enter the city name below."
		);
		expect(modalTitle).toBeInTheDocument();
	});

	test("renders Berlin in the city list", () => {
		const cities = ["New York", "Berlin", "Amsterdam"];
		render(
			<MemoryRouter>
				<CityList cities={cities} />
			</MemoryRouter>
		);
		const element = screen.getByText("Berlin");
		expect(element).toBeInTheDocument();
	});

	test("renders New York in the city list", () => {
		const cities = ["New York", "Berlin", "Amsterdam"];
		render(
			<MemoryRouter>
				<CityList cities={cities} />
			</MemoryRouter>
		);
		const element = screen.getByText("New York");
		expect(element).toBeInTheDocument();
	});
});
