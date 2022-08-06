import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { ApiBaseUrl } from '../config.js'

const EmployeeAuthContext = createContext()

function EmployeeAuthContextProvider(props) {
  const [employeeLoggedIn, setEmployeeLoggedIn] = useState(undefined)
  const [employeeID, setEmployeeID] = useState(undefined)
  const [employeeName, setEmployeeName] = useState(undefined)
  const [employeeEmail, setEmployeeEmail] = useState(undefined)

  async function getEmployeeLoggedIn() {
    const loggedInRes = await axios.get(`${ApiBaseUrl}/employee/verify`)
    setEmployeeLoggedIn(loggedInRes.data.authorized)
    setEmployeeID(loggedInRes.data.id)
    setEmployeeName(loggedInRes.data.name)
    setEmployeeEmail(loggedInRes.data.email)
  }

  useEffect(() => {
    getEmployeeLoggedIn()
  }, [])

  return (
    <EmployeeAuthContext.Provider value={{ employeeLoggedIn, employeeID, employeeName, employeeEmail, getEmployeeLoggedIn }}>
      {props.children}
    </EmployeeAuthContext.Provider>
  )
}

export default EmployeeAuthContext
export { EmployeeAuthContextProvider }
