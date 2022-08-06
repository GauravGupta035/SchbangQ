import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./CSSProperties/spinner.css"
import "./App.scss";
import Community from "./views/Community/Community";
import LandingPage from "./views/LandingPage/LandingPage";
import CustomerLogin from "./views/CustomerLogin/CustomerLogin";
import CustomerSignup from "./views/CustomerSignup/CustomerSignup";
import PageDoesNotExist from "./views/PageDoesNotExist/PageDoesNotExist";
import SuperAdminDashboard from "./views/Dashboard/SuperAdminDashboard";

import AdminProtectedRoute from './AdminComponents/AdminProtectedRoute';
import SuperAdminProtectedRoute from './SuperAdminComponents/SuperAdminProtectedRoute';
import EmployeeProtectedRoute from './EmployeeComponents/EmployeeProtectedRoute';
import CustomerProtectedRoute from './CustomerComponents/CustomerProtectedRoute';
import AdminLogin from './AdminComponents/views/Login/Login';
import SuperLogin from './SuperAdminComponents/views/Login/Login';
import EmployeeLogin from './EmployeeComponents/views/Login/Login';

const App = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/community' element={<Community />} />

				<Route path='/customerlogin' element={<CustomerLogin />} />
				<Route path='/customersignup' element={<CustomerSignup />} />
				{/* 
				<Route path='/stafflogin' element={<StaffLogin />} />

				<Route path='/superadmindashboard' element={<SuperAdminDashboard />} /> */}
				<Route path='/super/login' element={<SuperLogin />} />
				<Route path='/admin/login' element={<AdminLogin />} />
				<Route path='/employee/login' element={<EmployeeLogin />} />
				<Route path='/customer/login' element={<CustomerLogin />} />

				<Route path='/super' element={<SuperAdminProtectedRoute />}>
					<Route path='dashboard' element={<SuperAdminDashboard />} />
				</Route>

				<Route path='/admin' element={<AdminProtectedRoute />}>
					<Route path='dashboard' element={<SuperAdminDashboard />} />
				</Route>

				<Route path='/employee' element={<EmployeeProtectedRoute />}>
					<Route path='dashboard' element={<SuperAdminDashboard />} />
				</Route>

				<Route path='/customer' element={<CustomerProtectedRoute />}>
					<Route path='dashboard' element={<SuperAdminDashboard />} />
				</Route>

				<Route path='*' element={<PageDoesNotExist />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
