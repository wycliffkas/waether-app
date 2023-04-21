import { render } from "@testing-library/react";
import CityContext from "../context/CityContext";
import { CitiesContext } from "../context/CityContext";

describe("CityContext", () => {
	it("contains New York, Berlin, and Amsterdam", () => {
		const expectedValues = new Set(["Amsterdam", "New York", "Berlin"]);
		render(
			<CityContext>
				<CitiesContext.Consumer>
					{({ cities }) => {
						expect(cities).toEqual(expectedValues);
						return null;
					}}
				</CitiesContext.Consumer>
			</CityContext>
		);
	});
});
