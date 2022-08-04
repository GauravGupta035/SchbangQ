import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Community from "./views/Community/Community";
import LandingPage from "./views/LandingPage/LandingPage";
import CustomerLogin from "./views/CustomerLogin/CustomerLogin";
import CustomerSignup from "./views/CustomerSignup/CustomerSignup";
import PageDoesNotExist from "./views/PageDoesNotExist/PageDoesNotExist";
import StaffLogin from "./views/StaffLogin/StaffLogin";
import SuperAdminDashboard from "./views/Dashboard/SuperAdminDashboard";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/community' element={<Community />} />

				<Route path='/customerlogin' element={<CustomerLogin />} />
				<Route path='/customersignup' element={<CustomerSignup />} />

				<Route path='/stafflogin' element={<StaffLogin />} />

				<Route path='/superadmindashboard' element={<SuperAdminDashboard />} />

				<Route path='*' element={<PageDoesNotExist />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
