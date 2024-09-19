import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const allnotes = [
        {
            "_id": "66e44fa401847bd5454ec785",
            "user": "66e446a7a324d6c86c562412",
            "title": "updated first note title",
            "description": "updated first note description",
            "tag": "Personal",
            "createdAt": "2024-09-13T14:43:48.908Z",
            "__v": 0
        },
        {
            "_id": "66e855a4c09e437baaa60476",
            "user": "66e446a7a324d6c86c562412",
            "title": "second note title",
            "description": "my second note description",
            "tag": "Business",
            "createdAt": "2024-09-16T15:58:28.458Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(allnotes)
    console.log(notes)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState