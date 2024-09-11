import express from 'express'
import UserSchema from '../models/User.js'

export const UserRouter = express.Router()

// Route 1 - creating a user "api/user/createuser"
UserRouter.post('/createuser', (req, res) => {
    // log the request body to the console
    console.log(req.body)

    // create a new user object using the request data
    const user = new UserSchema(req.body)

    // save the new user object to db
    user.save()

    // sending the request body as a response
    res.send(req.body)
})