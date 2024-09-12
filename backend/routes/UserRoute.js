import express from 'express'
import UserSchema from '../models/User.js'
import { body, validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'

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

        user.create({

            // setting the fields from request body
            name: req.body.name,
            email: req.body.email,
            password: securePassword
        }).then(user => res.json(user)) // sending the created user as json response
            .catch(error => console.log(error)) // logging any potential errors

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Some error occured')
    }
})
