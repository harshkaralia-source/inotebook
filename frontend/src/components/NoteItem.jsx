import React from 'react'
import { PiTrash,  } from "react-icons/pi";
import { FaRegEdit } from "react-icons/fa";

const NoteItem = ({ note }) => {
    return (
        <div className=''>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash w-full"></i>
                    <div className="d-flex gap-2 align-items-start justify-content-end">
                    <PiTrash size={22} />
                    <FaRegEdit size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
