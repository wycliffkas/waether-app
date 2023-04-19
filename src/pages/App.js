import Home from "./Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import City from "./City";

function App() {
	return (
		<div className="App">
			<ToastContainer />
			<Router>
				<Switch>
					<Route path="/city/:cityName">
						<City />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
