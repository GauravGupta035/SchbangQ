const router = require('express').Router()

router.get('/', async (req, res) => {
  try {
    
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

module.exports = router
