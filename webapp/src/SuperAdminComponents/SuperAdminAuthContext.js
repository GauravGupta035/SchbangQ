import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { ApiBaseUrl } from '../config.js'

const SuperAdminAuthContext = createContext()

function SuperAdminAuthContextProvider(props) {
  const [superAdminLoggedIn, setSuperAdminLoggedIn] = useState(undefined)
  const [superAdminID, setSuperAdminID] = useState(undefined)
  const [superAdminName, setSuperAdminName] = useState(undefined)
  const [superAdminEmail, setSuperAdminEmail] = useState(undefined)

  async function getSuperAdminLoggedIn() {
    const loggedInRes = await axios.get(`${ApiBaseUrl}/super/verify`)
    setSuperAdminLoggedIn(loggedInRes.data.authorized)
    setSuperAdminID(loggedInRes.data.id)
    setSuperAdminName(loggedInRes.data.name)
    setSuperAdminEmail(loggedInRes.data.email)
  }

  useEffect(() => {
    getSuperAdminLoggedIn()
  }, [])

  return (
    <SuperAdminAuthContext.Provider value={{ superAdminLoggedIn, superAdminID, superAdminName, superAdminEmail, getSuperAdminLoggedIn }}>
      {props.children}
    </SuperAdminAuthContext.Provider>
  )
}

export default SuperAdminAuthContext
export { SuperAdminAuthContextProvider }
