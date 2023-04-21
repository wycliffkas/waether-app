import getWeeklyWeatherMood from "./getWeeklyWeatherMood";

describe("getWeeklyWeatherMood", () => {
  test("returns 'Amazing' when the conditions are optimal", () => {
    const forecast = [
      { tempMax: 25, humidity: 30 },
      { tempMax: 24, humidity: 32 },
      { tempMax: 26, humidity: 28 },
      { tempMax: 23, humidity: 34 },
      { tempMax: 25, humidity: 31 },
      { tempMax: 27, humidity: 29 },
      { tempMax: 22, humidity: 35 },
    ];

    const mood = getWeeklyWeatherMood(forecast);

    expect(mood).toEqual("Amazing");
  });

  test("returns 'Good' when the temperature is warm and humidity is average", () => {
    const forecast = [
      { tempMax: 20, humidity: 40 },
      { tempMax: 19, humidity: 42 },
      { tempMax: 21, humidity: 38 },
      { tempMax: 18, humidity: 44 },
      { tempMax: 20, humidity: 41 },
      { tempMax: 22, humidity: 39 },
      { tempMax: 17, humidity: 45 },
    ];

    const mood = getWeeklyWeatherMood(forecast);

    expect(mood).toEqual("Good");
  });

  test("returns 'Normal' when the temperature is moderate and humidity is high", () => {
    const forecast = [
      { tempMax: 25, humidity: 60 },
      { tempMax: 24, humidity: 62 },
      { tempMax: 26, humidity: 58 },
      { tempMax: 23, humidity: 64 },
      { tempMax: 25, humidity: 61 },
      { tempMax: 27, humidity: 59 },
      { tempMax: 22, humidity: 65 },
    ];

    const mood = getWeeklyWeatherMood(forecast);

    expect(mood).toEqual("Normal");
  });

  test("returns 'Bad' when the temperature is high and humidity is very high", () => {
    const forecast = [
      { tempMax: 30, humidity: 80 },
      { tempMax: 29, humidity: 82 },
      { tempMax: 31, humidity: 78 },
      { tempMax: 28, humidity: 84 },
      { tempMax: 30, humidity: 81 },
      { tempMax: 32, humidity: 79 },
      { tempMax: 27, humidity: 85 },
    ];

    const mood = getWeeklyWeatherMood(forecast);

    expect(mood).toEqual("Bad");
  });

  test("returns 'Unacceptable' when the temperature is very high and very low", () => {
    const forecast = [
      { tempMax: 35, humidity: 50 },
      { tempMax: 34, humidity: 52 },
      { tempMax: 36, humidity: 48 },
      { tempMax: 33, humidity: 54 },
      { tempMax: 5, humidity: 51 },
      { tempMax: 37, humidity: 49 },
      { tempMax: 4, humidity: 55 },
    ];

    const mood = getWeeklyWeatherMood(forecast);

    expect(mood).toEqual("Unacceptable");
  });
});
