const bcrypt = require('bcryptjs')
const router = require('express').Router()
const jwt = require('jsonwebtoken')

const Employee = require('../models/employee.model.js')
const EmployeeAuth = require('./employeeAuth.js')

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(401).json({ message: 'fill all the fields' })
    }

    const existingProfile = await Employee.findOne({ email: email }).select('+hashedpassword')

    if (!existingProfile) {
      return res.status(401).json({ message: 'Invalid Email or Password' })
    }

    const isPasswordValid = await bcrypt.compare(password, existingProfile.hashedpassword)

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const employeeToken = jwt.sign({
      _id: existingProfile._id,
      name: existingProfile.name,
      email: existingProfile.email
    }, process.env.JWT_SECRET)

    return res.status(200)
      .cookie('employeeToken', employeeToken, { httpOnly: true })
      .json({ message: 'Login Success' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

router.post('/updatepassword', EmployeeAuth, async (req, res) => {
  try {
    const { _id } = req.employeeInfo
    const { currentPassword, newPassword } = req.body

    if (!currentPassword || !newPassword) {
      return res.status(401).json({ message: 'fill all the fields' })
    }

    const existingProfile = await Employee.findById(_id).select('+hashedpassword')

    const isPasswordValid = await bcrypt.compare(currentPassword, existingProfile.hashedpassword)

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid Password' })
    }

    const salt = await bcrypt.genSalt()
    const newhashedpassword = await bcrypt.hash(newPassword, salt)

    await Employee.findByIdAndUpdate(_id, { hashedpassword: newhashedpassword })

    return res.status(200).json({ message: 'Password Changed' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

router.get('/logout', (req, res) => {
  res.cookie('employeeToken', '', {
    httpOnly: true,
    expires: new Date(0)
  }).send()
})

router.get('/verify', EmployeeAuth, (req, res) => {
  const { _id, name, email } = req.employeeInfo

  return res.json({
    authorized: true,
    message: 'Success',
    _id,
    name,
    email
  }).status(200)
})

module.exports = router
