const mongoose = require('mongoose')
const Account = require('./account.model.js')

const options = { discriminatorKey: 'type' };

const EmployeeSchema = new mongoose.Schema({
  e: {
    type: String,
    default: ""
  },
  f: {
    type: String,
    default: ""
  },
  g: {
    type: String,
    default: ""
  }
}, options)

// const Employee = mongoose.model('Employee', EmployeeSchema, 'Employee')
const Employee = Account.discriminator('Employee', EmployeeSchema, 'Employee')

module.exports = Employee
