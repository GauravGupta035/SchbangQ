import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { ApiBaseUrl } from '../config.js'

const CustomerAuthContext = createContext()

function CustomerAuthContextProvider(props) {
  const [customerLoggedIn, setCustomerLoggedIn] = useState(undefined)
  const [customerID, setCustomerID] = useState(undefined)
  const [customerName, setCustomerName] = useState(undefined)
  const [customerEmail, setCustomerEmail] = useState(undefined)

  async function getCustomerLoggedIn() {
    const loggedInRes = await axios.get(`${ApiBaseUrl}/customer/verify`)
    setCustomerLoggedIn(loggedInRes.data.authorized)
    setCustomerID(loggedInRes.data.id)
    setCustomerName(loggedInRes.data.name)
    setCustomerEmail(loggedInRes.data.email)
  }

  useEffect(() => {
    getCustomerLoggedIn()
  }, [])

  return (
    <CustomerAuthContext.Provider value={{ customerLoggedIn, customerID, customerName, customerEmail, getCustomerLoggedIn }}>
      {props.children}
    </CustomerAuthContext.Provider>
  )
}

export default CustomerAuthContext
export { CustomerAuthContextProvider }
