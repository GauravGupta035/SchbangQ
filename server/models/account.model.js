const mongoose = require('mongoose')

const options = { discriminatorKey: 'type' };

const accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  hashedpassword: {
    type: String,
    required: true,
    select: false
  },
  profilepicURL: {
    type: String,
    default: 'defaults/defaultprofilepic.png'
  }
}, options);

const Account = mongoose.model('Account', accountSchema, 'Account');

module.exports = Account
