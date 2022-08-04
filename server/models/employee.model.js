const mongoose = require('mongoose')
const Account = require('./account.model.js')

const options = { discriminatorKey: 'type' };

const EmployeeSchema = new mongoose.Schema({
  accountCreatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Account,
    required: true
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

const Employee = Account.discriminator('Employee', EmployeeSchema, 'Employee')

module.exports = Employee
