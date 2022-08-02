const mongoose = require('mongoose')

const Account = require('./account.model.js')

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  byUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true
  },
  body: {
    type: String,
    required: true
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: Account
  }
})

const Post = mongoose.model('Post', PostSchema, 'Post')

module.exports = Post
