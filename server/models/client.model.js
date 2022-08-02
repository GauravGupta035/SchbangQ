const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
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
  },
})

const Client = mongoose.model('Client', ClientSchema, 'Client')

module.exports = Client
