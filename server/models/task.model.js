const mongoose = require('mongoose')

const Account = require('./account.model.js')

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  priority: {
    type: Integer,
    default: 0
  },
  supervisor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Account,
    required: true
  },
  assignees: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: Account,
    default: []
  },
  tags: {
    type: [String],
    default: []
  },
  uploaddate: {
    type: Number,
    default: Date.now()
  },
  deadlinedate: {
    type: Number,
    default: Date.now()
  }
})

const Task = mongoose.model('Task', TaskSchema, 'Task')

module.exports = Task
