const jwt = require('jsonwebtoken')

const generateToken = (_userId, role) =>
    jwt.sign({ id: _userId, role }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    })

module.exports = generateToken