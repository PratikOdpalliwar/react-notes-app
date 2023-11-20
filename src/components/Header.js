import React from 'react'

const Header = ({handleToggleDarkMOde}) => {
  return (
   <header className="header">
    <div className="header">
        Notes
    </div>

    <button className="btn" onClick={()=>handleToggleDarkMOde(previousDArkMOde => !previousDArkMOde)}>Change UI Font</button>
   </header>
  )
}

export default Header
