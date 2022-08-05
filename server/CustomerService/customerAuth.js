const jwt = require('jsonwebtoken')
const Customer = require('../models/customer.model.js')

async function customerAuth (req, res, next) {
  try {
    const customerToken = req.cookies.customerToken

    if (!customerToken) {
      return res.json({ authorized: false, message: 'Unauthorized' })
    }

    const { id } = jwt.verify(customerToken, process.env.JWT_SECRET)

    if ((await Customer.findById(id)) === null) {
      return res.cookie('customerToken', '', {
        httpOnly: true,
        expires: new Date(0)
      }).json({ authorized: false, message: 'Unauthorized' })
    }

    req.customerInfo = jwt.verify(customerToken, process.env.JWT_SECRET)

    next()
  } catch (err) {
    console.error(err)
    res.json({ authorized: false, message: 'Unauthorized' })
  }
}

module.exports = customerAuth
