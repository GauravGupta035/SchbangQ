const jwt = require('jsonwebtoken')
const SuperAdmin = require('../models/superadmin.model.js')

async function superAuth (req, res, next) {
  try {
    const superToken = req.cookies.superToken

    if (!superToken) {
      return res.json({ authorized: false, message: 'Unauthorized' })
    }

    const { id } = jwt.verify(superToken, process.env.JWT_SECRET)

    if ((await SuperAdmin.findById(id)) === null) {
      return res.cookie('superToken', '', {
        httpOnly: true,
        expires: new Date(0)
      }).json({ authorized: false, message: 'Unauthorized' })
    }

    req.superInfo = jwt.verify(superToken, process.env.JWT_SECRET)

    next()
  } catch (err) {
    console.error(err)
    res.json({ authorized: false, message: 'Unauthorized' })
  }
}

module.exports = superAuth
