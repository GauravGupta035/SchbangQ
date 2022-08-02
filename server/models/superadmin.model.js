const mongoose = require('mongoose')
const Account = require('./account.model.js')

const options = { discriminatorKey: 'type' };

const SuperAdminSchema = new mongoose.Schema({
  i: {
    type: String,
    default: ""
  },
  j: {
    type: String,
    default: ""
  },
  k: {
    type: String,
    default: ""
  }
}, options);

// const SuperAdmin = mongoose.model('SuperAdmin', SuperAdminSchema, 'SuperAdmin')
const SuperAdmin = Account.discriminator('SuperAdmin', SuperAdminSchema, 'SuperAdmin')

module.exports = SuperAdmin
