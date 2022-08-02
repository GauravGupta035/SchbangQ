const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

require('dotenv').config()

const app = express()

// middlewares
app.use(express.json())
app.use(cookieParser())

// cors
app.use(cors({
  origin: true,
  credentials: true
}))

// logging middleware
const requestLogger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const log = `${method}:${url}`
  console.log(log)
  next()
}

app.use(requestLogger)

// Links
app.use('/', express.static('./public/build'))
app.use('/static', express.static('public'))

app.use('/api/v1/get', require('./GetService/get.router.js'))

app.use('/api/v1/super', require('./SuperAdminService/superadmin.router.js'))
app.use('/api/v1/admin', require('./AdminService/admin.router.js'))
app.use('/api/v1/employee', require('./EmployeeService/employee.router.js'))
app.use('/api/v1/client', require('./ClientService/client.router.js'))

app.use('*', (req, res) => res.status(404).json({ message: 'link not found' }))

module.exports = app
