const mongoose = require('mongoose')
const Account = require('./account.model.js')

const options = { discriminatorKey: 'type' };

const AdminSchema = new mongoose.Schema({
  accountCreatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Account,
    required: true
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

const Admin = Account.discriminator('Admin', AdminSchema, 'Admin')

module.exports = Admin
