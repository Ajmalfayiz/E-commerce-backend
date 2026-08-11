const express = require('express')
const { login, register } = require('../controllers/authcontroller')
const { registerValidator } = require('../validator/authValidator')
const validateRequest = require('../middlewares/validateMiddleware')

const router = express.Router()

router.post('/register',registerValidator,validateRequest, register)
router.post('/login',login)

module.exports = router