import { useContext } from 'react'
import { Navigate, useOutlet } from "react-router-dom";
import SuperAdminAuthContext from './SuperAdminAuthContext'

const SuperAdminProtectedRoute = () => {
  const {superAdminLoggedIn} = useContext(SuperAdminAuthContext)
  const outlet = useOutlet();

  if (superAdminLoggedIn === false) {
    return <Navigate to="/" />;
  }

  return (
    <div>{outlet}</div>
  )
}

export default SuperAdminProtectedRoute
