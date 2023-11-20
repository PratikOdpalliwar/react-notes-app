import React from 'react'

const Note = ({id, text, date, handleDeleteButton}) => {
  return (
    <div className="container">
        <div className="notes">
            <span className="text">{text}</span>
        </div>
        <footer>
            <div className="date">{date}</div>
            <div className="delete-button" onClick={()=>handleDeleteButton(id)}>
            <i class="fa-solid fa-trash"></i>
            </div>
        </footer>
    </div>
  )
}

export default Note
