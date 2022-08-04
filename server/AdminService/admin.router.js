const bcrypt = require('bcryptjs')
const router = require('express').Router()
const jwt = require('jsonwebtoken')

const Account = require('../models/account.model.js')
const Admin = require('../models/admin.model.js')
const Employee = require('../models/employee.model.js')
const AdminAuth = require('./adminAuth.js')

String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(401).json({ message: 'fill all the fields' })
    }

    const existingProfile = await Admin.findOne({ email: email }).select('+hashedpassword')

    if (!existingProfile) {
      return res.status(401).json({ message: 'Invalid Email or Password' })
    }

    const isPasswordValid = await bcrypt.compare(password, existingProfile.hashedpassword)

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const adminToken = jwt.sign({
      _id: existingProfile._id,
      name: existingProfile.name,
      email: existingProfile.email
    }, process.env.JWT_SECRET)

    return res.status(200)
      .cookie('adminToken', adminToken, { httpOnly: true })
      .json({ message: 'Login Success' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

router.post('/updatepassword', AdminAuth, async (req, res) => {
  try {
    const { _id } = req.adminInfo
    const { currentPassword, newPassword } = req.body

    if (!currentPassword || !newPassword) {
      return res.status(401).json({ message: 'fill all the fields' })
    }

    const existingProfile = await Admin.findById(_id).select('+hashedpassword')

    const isPasswordValid = await bcrypt.compare(currentPassword, existingProfile.hashedpassword)

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid Password' })
    }

    const salt = await bcrypt.genSalt()
    const newhashedpassword = await bcrypt.hash(newPassword, salt)

    await Admin.findByIdAndUpdate(_id, { hashedpassword: newhashedpassword })

    return res.status(200).json({ message: 'Password Changed' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

router.get('/logout', (req, res) => {
  res.cookie('adminToken', '', {
    httpOnly: true,
    expires: new Date(0)
  }).send()
})

router.get('/verify', AdminAuth, (req, res) => {
  const { _id, name, email } = req.adminInfo

  return res.json({
    authorized: true,
    message: 'Success',
    _id,
    name,
    email
  }).status(200)
})

router.post('/new/employee', AdminAuth, async (req, res) => {
  try {
    let { firstname, middlename, lastname } = req.body
    const { dateofbirth, gender } = req.body
    const { _id } = req.adminInfo

    if (!firstname || !lastname || !dateofbirth || !gender) {
      return res.status(400).json({ message: 'fill all the fields' })
    }

    const existingProfiles = await Account.find({
      firstname: {
        $regex: firstname,
        $options: 'i'
      }, lastname: {
        $regex: lastname,
        $options: 'i'
      }
    })

    let email = firstname.toLowerCase() + '.' + lastname.toLowerCase() + '@schbangq.inf'
    if (existingProfiles.length) {
      email = firstname.toLowerCase() + '.' + lastname.toLowerCase() + '.' + (existingProfiles.length) + '@schbangq.inf'
    }

    const salt = await bcrypt.genSalt()
    const hashedpassword = await bcrypt.hash('login1234', salt)


    if (middlename) {
      middlename = middlename.toProperCase()
    }

    const newProfile = new Employee({
      firstname: firstname.toProperCase(),
      middlename: middlename,
      lastname: lastname.toProperCase(),
      dateofbirth: dateofbirth,
      gender: gender,
      email: email,
      hashedpassword: hashedpassword,
      accountCreatedBy: _id
    })

    await newProfile.save()

    res.status(200).json({ message: 'Employee Creation Success' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})


module.exports = router
