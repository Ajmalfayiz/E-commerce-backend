const User = require('../models/userModel')
const generateToken = require('../utils/generateToken');

const register = async (req, res) => {
    console.log(req.body);

    try {
        const { name, email, password } = req.body

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            res.status(409);
            throw new Error("An account with this email already exists");
        }


        const user = await User.create({ name, email, passwordHash: password })


        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id, user.role),
        });
        console.log("Testing");

    } catch (error) {
        res.status(500).json({
            success: false
        });
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            res.status(401);
            throw new Error('Invalid email or password')
        }

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id, user.role)
        })
    } catch (error) {
        const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message || 'Server error'
        })

    }
}

module.exports = {
    register,
    login
}

