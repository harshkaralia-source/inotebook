import express from 'express'
import fetchUser from '../middlewares/fetchUser.js'
import NoteSchema from '../models/Note.js'
import { body, validationResult } from 'express-validator'

export const NoteRouter = express.Router()

// Route 1 - get all notes "api/notes/fetchallnotes"
NoteRouter.get('/fetchallnotes', fetchUser, async (req, res) => {

    // fetching notes with user id from db
    const notes = await NoteSchema.find({ user: req.user.id })

    // sending all available notes as json response
    res.json(notes)
})

// Route 2 - add a new note "api/notes/addnote"
NoteRouter.post('/addnote', fetchUser, [

    // validating the fields
    body('title', 'Title must be minimum 2 letters').isLength({ min: 2 }),
    body('description', 'Description must be minimum 2 letters').isLength({ min: 3 })
], async (req, res) => {

    try {

        // fetching fields from request body
        const { title, description, tag } = req.body

        // checking for validation errors
        const errors = validationResult(req)

        // send 400 bad request and array of erros as message if any error occur
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        // creating a new note
        const note = new NoteSchema({
            title, description, tag, user: req.user.id
        })

        // saving note in db
        const savedNote = await note.save()

        // sending saved note as a json response
        res.json({ savedNote })

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal server error')
    }
})