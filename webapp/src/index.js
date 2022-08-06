import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SuperAdminAuthContextProvider } from './SuperAdminComponents/SuperAdminAuthContext.js'
import { AdminAuthContextProvider } from './AdminComponents/AdminAuthContext.js'
import { EmployeeAuthContextProvider } from './EmployeeComponents/EmployeeAuthContext.js'
import { CustomerAuthContextProvider } from './CustomerComponents/CustomerAuthContext.js'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<SuperAdminAuthContextProvider>
		<AdminAuthContextProvider>
			<EmployeeAuthContextProvider>
				<CustomerAuthContextProvider>
					<React.StrictMode>
						<App />
					</React.StrictMode>
				</CustomerAuthContextProvider>
			</EmployeeAuthContextProvider>
		</AdminAuthContextProvider>
	</SuperAdminAuthContextProvider>
);
