const jwt = require('jsonwebtoken')
const Client = require('../models/client.model.js')

async function clientAuth (req, res, next) {
  try {
    const clientToken = req.cookies.clientToken

    if (!clientToken) {
      return res.json({ authorized: false, message: 'Unauthorized' })
    }

    const { id } = jwt.verify(clientToken, process.env.JWT_SECRET)

    if ((await Client.findById(id)) === null) {
      return res.cookie('clientToken', '', {
        httpOnly: true,
        expires: new Date(0)
      }).json({ authorized: false, message: 'Unauthorized' })
    }

    req.clientInfo = jwt.verify(clientToken, process.env.JWT_SECRET)

    next()
  } catch (err) {
    console.error(err)
    res.json({ authorized: false, message: 'Unauthorized' })
  }
}

module.exports = clientAuth
