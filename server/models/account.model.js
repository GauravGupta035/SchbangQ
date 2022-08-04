const mongoose = require('mongoose')

const options = { discriminatorKey: 'type' };

const accountSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  middlename: {
    type: String,
    default: ""
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dateofbirth: {
    type: String,
    default: null
  },
  gender: {
    type: String,
    default: null
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
