const mongoose = require('mongoose')
const Account = require('./account.model.js')

const options = { discriminatorKey: 'type' };

const AdminSchema = new mongoose.Schema({
  a: {
    type: String,
    default: ""
  },
  b: {
    type: String,
    default: ""
  },
  c: {
    type: String,
    default: ""
  }
}, options);

// const Admin = mongoose.model('Admin', AdminSchema, 'Admin')
const Admin = Account.discriminator('Admin', AdminSchema, 'Admin')
module.exports = Admin
