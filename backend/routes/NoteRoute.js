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

// Route 3 - update a note "api/notes/updatenote"
NoteRouter.put('/updatenote/:id', fetchUser, async (req, res) => {

    try {

        // fetching fields from request body
        const { title, description, tag } = req.body

        // create new note object
        const newNote = {}

        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }

        // find the note to be updated
        let note = await NoteSchema.findById(req.params.id)

        // send error message if note does not exist
        if (!note) { return res.status(404).send('Note not found') }

        // if user id does not match note id send error message
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send('You do not have access')
        }

        // finding a existing note to update
        note = await NoteSchema.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })

        // sending updated note as a response
        res.json({ note })

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal server error')
    }
})

// Route 4 - delete a note "api/notes/deletenote"
NoteRouter.delete('/deletenote/:id', fetchUser, async (req, res) => {

    try {

        // find the note to be deleted
        let note = await NoteSchema.findById(req.params.id)

        // send error message if note does not exist
        if (!note) { return res.status(404).send('Note not found') }

        // allow deletion only if user owns the note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send('You do not have access')
        }

        // finding a existing note to update
        note = await NoteSchema.findByIdAndDelete(req.params.id)

        // sending updated note as a response
        res.json({ "Success": "Note has been deleted" })

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal server error')
    }
})
