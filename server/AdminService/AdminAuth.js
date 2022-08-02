const jwt = require('jsonwebtoken')
const Admin = require('../models/admin.model.js')

async function adminAuth (req, res, next) {
  try {
    const adminToken = req.cookies.adminToken

    if (!adminToken) {
      return res.json({ authorized: false, message: 'Unauthorized' })
    }

    const { id } = jwt.verify(adminToken, process.env.JWT_SECRET)

    if ((await Admin.findById(id)) === null) {
      return res.cookie('adminToken', '', {
        httpOnly: true,
        expires: new Date(0)
      }).json({ authorized: false, message: 'Unauthorized' })
    }

    req.adminInfo = jwt.verify(adminToken, process.env.JWT_SECRET)

    next()
  } catch (err) {
    console.error(err)
    res.json({ authorized: false, message: 'Unauthorized' })
  }
}

module.exports = adminAuth
