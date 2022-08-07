import { useContext } from 'react'
import { Navigate, useOutlet } from "react-router-dom";
import EmployeeAuthContext from './EmployeeAuthContext'

const EmployeeProtectedRoute = () => {
  const {employeeLoggedIn} = useContext(EmployeeAuthContext)
  const outlet = useOutlet();

  if (employeeLoggedIn === false) {
    return <Navigate to="/" />;
  }

  return (
    <div>{outlet}</div>
  )
}

export default EmployeeProtectedRoute
