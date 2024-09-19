import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'

const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, setNotes } = context
    console.log(notes)

    return (
        <div className='my-3'>
            <h2>Your notes</h2>
            <div className="d-flex gap-4 flex-wrap mt-3">
                {notes.map(note => {
                    return <NoteItem note={note} />
                })}
            </div>
        </div>
    )
}

export default Notes
