import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

// added dotenv configuration for .env files
dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET

// middle ware function to fetch and authenticate user
const fetchUser = (req, res, next) => {

    // get user from jwt token and add id to req object
    const token = req.header('auth-token')

    // send error message if token is not valid
    if (!token) {
        res.status(401).send({ error: 'acces denied, please authenticate using valid token' })
    }

    try {

        // verifying jwt token using secret key
        const string = jwt.verify(token, JWT_SECRET)

        // adding user information to request object
        req.user = string.user

        // calling the next function/action
        next()

    } catch (error) {
        res.status(401).send({ error: 'acces denied, please authenticate using valid token' })
    }
}

export default fetchUser