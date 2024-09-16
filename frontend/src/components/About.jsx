import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'

const About = () => {
  const a = useContext(NoteContext)
  return (
    <div>
      <h1>This is about {a.obj}</h1>
    </div>
  )
}

export default About
