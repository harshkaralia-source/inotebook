import express from 'express'
import dotenv from 'dotenv'
import { connectToMongo } from './db.js'

// added dotenv configuration for .env files
dotenv.config()

// connect to mongodb
connectToMongo()

const app = express()
const port = process.env.PORT

// middleware for adding json bodies
app.use(express.json())

// available routes
app.get('/', (req, res) => {
    res.send('Hello Friend')
})

// app listening at port 8000
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})