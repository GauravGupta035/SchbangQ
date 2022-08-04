const jwt = require('jsonwebtoken')
const Employee = require('../models/employee.model.js')

async function EmployeeAuth (req, res, next) {
  try {
    const EmployeeToken = req.cookies.EmployeeToken

    if (!EmployeeToken) {
      return res.json({ authorized: false, message: 'Unauthorized' })
    }

    const { _id } = jwt.verify(EmployeeToken, process.env.JWT_SECRET)

    if ((await Employee.findById(_id)) === null) {
      return res.cookie('EmployeeToken', '', {
        httpOnly: true,
        expires: new Date(0)
      }).json({ authorized: false, message: 'Unauthorized' })
    }

    req.EmployeeInfo = jwt.verify(EmployeeToken, process.env.JWT_SECRET)

    next()
  } catch (err) {
    console.error(err)
    res.json({ authorized: false, message: 'Unauthorized' })
  }
}

module.exports = EmployeeAuth
