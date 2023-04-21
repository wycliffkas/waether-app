# Weather Application

- The application should consist of 2 pages: The main page and the city page
  - The main page should have a selection of a city (for example: Amsterdam, New York, Berlin).
  - The city page should have 2 tabs: hourly weather and 7-day forecast
    - Hourly weather should be displayed as a list and as a chart
- The temperature should be displayed in Celsius
- The app should be extendable (easy to add more cities)

The Hosted version can be found [here](https://jolly-mermaid-6f39b9.netlify.app/).

## Clone application

To Clone the repo locally. In a terminal, run:

```
$ git clone https://github.com/wycliffkas/waether-app.git
```

### Run the application
- Install [Node.js](https://nodejs.org/en/)
- Run `npm install` if you use npm or `yarn` if you use yarn inorder to install the dependencies
- Create a .env file, you can copy the `.env.example` file and add a variable REACT_APP_WEATHER_API_KEY=<weather api key>
- Run `yarn start` to launch the app which will automatically launch the app in the browser.


### Run tests
- Run `yarn test` Launches the test runner in the interactive watch mode.

### Build
- Run `yarn build` Builds the app for production to the build folder.
