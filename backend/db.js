import mongoose from 'mongoose'
import dotenv from 'dotenv'

// added dotenv configuration for .env files
dotenv.config()

const MONGO_URI = process.env.MONGO_URI

export const connectToMongo = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('Connected to mongo successfully')
    } catch (error) {
        console.log('Error connecting to db:', error)
    }
}
