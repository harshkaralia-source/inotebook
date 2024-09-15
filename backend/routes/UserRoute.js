import express from 'express'
import UserSchema from '../models/User.js'
import { body, validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import fetchUser from '../middlewares/fetchUser.js'

// added dotenv configuration for .env files
dotenv.config()

// fetching jwt string from .env file
const JWT_SECRET = process.env.JWT_SECRET

export const UserRouter = express.Router()

// Route 1 - creating a user "api/user/createuser"
UserRouter.post('/createuser', [

    // validating the fields
    body('email', 'Enter a valid name').isEmail(),
    body('name', 'Enter a valid email').isLength({ min: 3 }),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 })
], async (req, res) => {

    try {
        // checking for validation errors
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        // getting the user schema/model
        const user = UserSchema

        // generating salt for password
        const salt = await bcrypt.genSalt(10)

        // hashing password
        const securePassword = await bcrypt.hash(req.body.password, salt)

        // creating a user
        user.create({

            // setting the fields from request body
            name: req.body.name,
            email: req.body.email,
            password: securePassword
        })

        // sending payload data
        const data = {
            user: {
                id: user.id
            }
        }

        // generating jwt with user data and signing in using secret key
        const authToken = jwt.sign(data, JWT_SECRET)

        // sending the auth token as json response
        res.json({ authToken })

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal server error')
    }
})

// Route 2 - log in a user "api/user/login"
UserRouter.post('/login', [

    // validating the fields
    body('email', 'Enter a valid name').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 })
], async (req, res) => {

    try {

        // checking for validation errors
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        // fetching email and password from request body
        const { email, password } = req.body

        // verifying if user exists
        let user = await UserSchema.findOne({ email })

        // if user does not exist send 400 bad request and message
        if (!user) {
            return res.status(400).json({ error: 'Please try to log in with correct credentials' })
        }

        // comparing passwords
        const passwordCompare = await bcrypt.compare(password, user.password)

        // if password does not match send 400 bad request and message
        if (!passwordCompare) {
            return res.status(400).json({ error: 'Please try to log in with correct credentials' })
        }

        // sending payload data
        const data = {
            user: {
                id: user.id
            }
        }

        // generating jwt with user data and signing in using secret key
        const authToken = jwt.sign(data, JWT_SECRET)

        // sending the auth token as json response
        res.json({ authToken })

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
})

// Route 3 - get logged in user details "api/user/getuser"
UserRouter.post('/getuser', fetchUser, async (req, res) => {

    try {

        // extracting user id from request object
        const userId = req.user.id

        // fetching user information from db except password
        const user = await UserSchema.findById(userId).select('-password')

        // sending user information as a response
        res.send(user)
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
})