import { useContext } from 'react'
import { Navigate, useOutlet } from "react-router-dom";
import AdminAuthContext from './AdminAuthContext'

const AdminProtectedRoute = () => {
  const { adminLoggedIn, getAdminLoggedIn } = useContext(AdminAuthContext)
  const outlet = useOutlet();

  if (adminLoggedIn === false) {
    return <Navigate to="/admin/login" />;
  } else if (adminLoggedIn === undefined) {
    getAdminLoggedIn()
    return (
      <div className="spinner"></div>
    )
  }

  return (
    <div>{outlet}</div>
  )
}

export default AdminProtectedRoute
