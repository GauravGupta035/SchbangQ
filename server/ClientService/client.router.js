const bcrypt = require('bcryptjs')
const router = require('express').Router()
const jwt = require('jsonwebtoken')

const Client = require('../models/client.model.js')
const ClientAuth = require('./ClientAuth.js')

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'fill all the fields' })
    }

    const existingProfile = await Client.findOne({ email: email })

    if (existingProfile) {
      return res.status(400).json({ message: 'Profile already exists' })
    }

    const salt = await bcrypt.genSalt()
    const hashedpassword = await bcrypt.hash(password, salt)

    const newProfile = new Client({
      name: name,
      email: email,
      password: password,
      hashedpassword: hashedpassword
    })

    await newProfile.save()

    res.status(200).json({ message: 'Account Creation Success' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

router.get('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(401).json({ message: 'fill all the fields' })
    }

    const existingProfile = await Client.findOne({ email: email }).select('+password +hashedpassword')

    if (!existingProfile) {
      return res.status(401).json({ message: 'Invalid Email or Password' })
    }

    const isPasswordValid = await bcrypt.compare(password, existingProfile.hashedpassword)

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const clientToken = jwt.sign({
      _id: existingProfile._id,
      name: existingProfile.name,
      email: existingProfile.email
    }, process.env.JWT_SECRET)

    return res.status(200)
      .cookie('clientToken', clientToken, { httpOnly: true })
      .json({ message: 'Login Success' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

router.post('/updatepassword', ClientAuth, async (req, res) => {
  try {
    const { _id } = req.clientInfo
    const { currentPassword, newPassword } = req.body

    if (!currentPassword || !newPassword) {
      return res.status(401).json({ message: 'fill all the fields' })
    }

    const existingProfile = await Client.findById(_id).select('+password +hashedpassword')

    const isPasswordValid = await bcrypt.compare(currentPassword, existingProfile.hashedpassword)

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid Password' })
    }

    const salt = await bcrypt.genSalt()
    const newhashedpassword = await bcrypt.hash(newPassword, salt)

    await Client.findByIdAndUpdate(id, { password: newPassword, hashedpassword: newhashedpassword })

    return res.status(200).json({ message: 'Password Changed' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

router.get('/logout', (req, res) => {
  res.cookie('clientToken', '', {
    httpOnly: true,
    expires: new Date(0)
  }).send()
})

router.get('/verify', ClientAuth, (req, res) => {
  const { _id, name, email } = req.clientInfo

  return res.json({
    authorized: true,
    message: 'Success',
    _id,
    name,
    email
  }).status(200)
})

module.exports = router
