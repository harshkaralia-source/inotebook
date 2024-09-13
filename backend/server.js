import express from 'express'
import dotenv from 'dotenv'
import { connectToMongo } from './db.js'
import { UserRouter } from './routes/UserRoute.js'
import { NoteRouter } from './routes/NoteRoute.js'

// added dotenv configuration for .env files
dotenv.config()

// connect to mongodb
connectToMongo()

const app = express()
const port = process.env.PORT

// middleware for adding json bodies
app.use(express.json())

// available routes
app.use('/api/user', UserRouter)
app.use('/api/notes', NoteRouter)

// app listening at port 8000
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})
