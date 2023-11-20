import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NoteList = ({
    notes,
    handleAddNote,
    handleDeleteButton,
}) => {
  return (
    <div className="container">
        <div className="notes">
            {notes.map((note)=>{
 <Note
 id={note.id}
 text={note.text}
 date={note.text}
 handleDeleteButton={handleDeleteButton}
 />
            })}
            </div>

            <div className="add-note">
                <AddNote handleAddNote={handleAddNote} />
            </div>
    </div>
  )
}

export default NoteList
