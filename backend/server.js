import express from 'express'
import dotenv from 'dotenv'

// added dotenv configuration for .env files
dotenv.config()

const app = express()
const port = process.env.PORT

// middleware for adding json bodies
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Friend')
})

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})