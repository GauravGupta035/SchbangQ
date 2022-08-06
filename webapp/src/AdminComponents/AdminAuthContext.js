import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { ApiBaseUrl } from '../config.js'

const AdminAuthContext = createContext()

function AdminAuthContextProvider(props) {
  const [adminLoggedIn, setAdminLoggedIn] = useState(undefined)
  const [adminID, setAdminID] = useState(undefined)
  const [adminName, setAdminName] = useState(undefined)
  const [adminEmail, setAdminEmail] = useState(undefined)

  async function getAdminLoggedIn() {
    const loggedInRes = await axios.get(`${ApiBaseUrl}/admin/verify`)
    setAdminLoggedIn(loggedInRes.data.authorized)
    setAdminID(loggedInRes.data.id)
    setAdminName(loggedInRes.data.name)
    setAdminEmail(loggedInRes.data.email)
  }

  useEffect(() => {
    getAdminLoggedIn()
  }, [])

  return (
    <AdminAuthContext.Provider value={{ adminLoggedIn, adminID, adminName, adminEmail, getAdminLoggedIn }}>
      {props.children}
    </AdminAuthContext.Provider>
  )
}

export default AdminAuthContext
export { AdminAuthContextProvider }
