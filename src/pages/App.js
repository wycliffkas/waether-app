import Home from "./Home";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<div className="App">
      <ToastContainer />
			<Home />
		</div>
	);
}

export default App;
