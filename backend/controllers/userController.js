const colors = require('colors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const generateToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

// @desc Register new user
// @route POST /api/resgister
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please fill the required fields')
    }

    // const userExists = await User.findOne({email})

    // if(userExists) {
    //     res.status(400)
    //     throw new Error('User already exists')
    // }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        playlists: [],
        following: [],
        tokens: []
    })

    if(user) {
        res.status(201).send({
            _id: user._id,
            name: user.name,
            email: user.email,
            playlists: user.playlists,
            following: user.following,
            tokens: user.tokens
        })
    } else {
        res.status(400).send({})
        throw new Error('Invalid user data')
    }
})

// @desc Register new user
// @route POST /api/post
// @access Public
const loginUser = asyncHandler( async (req, res) => {
    const { email, password } = req.body
    
    if(!email || !password) {
        res.status(400)
        throw new Error('Please fill the required fields')
    }
    //Check for user email
    const user = await User.findOne({email})
    user.tokens.push(generateToken(user.id))

    if(user && (await bcrypt.compare(password, user.password))) {
        await User.findOneAndUpdate({_id: user._id}, {tokens: user.tokens})
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: user.tokens
        })
    } else {
        res.status(400)
        throw new Error('Invalid login credentials')
    }
})

module.exports = {
    registerUser,
    loginUser
}

//When User registers create a Liked Songs playlist