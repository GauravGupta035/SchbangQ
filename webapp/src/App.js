import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Community from "./views/Community/Community";
import LandingPage from "./views/LandingPage/LandingPage";
import PageDoesNotExist from "./views/PageDoesNotExist/PageDoesNotExist";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/community' element={<Community />} />

				<Route path='*' element={<PageDoesNotExist />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
