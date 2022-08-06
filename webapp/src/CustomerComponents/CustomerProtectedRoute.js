import { useContext } from 'react'
import { Navigate, useOutlet } from "react-router-dom";
import CustomerAuthContext from './CustomerAuthContext'

const CustomerProtectedRoute = () => {
  const {customerLoggedIn} = useContext(CustomerAuthContext)
  const outlet = useOutlet();

  if (customerLoggedIn === false) {
    return <Navigate to="/" />;
  }

  return (
    <div>{outlet}</div>
  )
}

export default CustomerProtectedRoute
