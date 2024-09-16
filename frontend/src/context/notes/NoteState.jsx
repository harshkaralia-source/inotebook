import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const obj = {
        "name": "harsh"
    }

    return (
        <NoteContext.Provider value={obj}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState