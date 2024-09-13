import mongoose from "mongoose";
import { Schema } from "mongoose";

const NoteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: 'Personal'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

export default mongoose.model('note', NoteSchema)