const mongoose = require('mongoose')

const Account = require('./account.model.js')

const PostSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Account,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  isPinned: {
    type: Boolean,
    default: false
  },
  tags: {
    type: [String],
    default: []
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: Account
  },
  uploaddate: {
    type: Number,
    default: Date.now()
  },
})

const Post = mongoose.model('Post', PostSchema, 'Post')

module.exports = Post
