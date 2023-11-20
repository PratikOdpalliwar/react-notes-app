import React, { useState } from 'react'

const AddNote = (handleAddNote) => {
    const [noteText, setNoteText] = useState("");
    const characterLimit = 0;

    const handleChange = (event) =>{
if(characterLimit - event.target.value.length>=0) {
    setNoteText(event.target.value)
}
    }

    const handleSaveClick = () =>{
        if (noteText.trim().length > 0){
            handleAddNote(handleSaveClick);
            setNoteText("");
        }
    }

  return (
   <div className="container">
     <div className="text-area">
        <textarea 
        cols="10" 
        rows="8"
        value={noteText}
        placeholder='Add a new note...'
        onChange={()=>handleChange()}></textarea>
     </div>

     <div className="footer">
        <div className="text-length">
    {characterLimit - noteText.length} Remaining
</div>

<botton className="save"
onclick={()=>handleSaveClick()}>
    save
</botton>
     </div>
   </div>
  )
}

export default AddNote
