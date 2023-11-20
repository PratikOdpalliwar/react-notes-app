import React from 'react'

const SearchBar = ({handleSearchNote}) => {
  return (
   <div className="container">
    <span className="search-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
    <input type="text"
     className="searchbar"
     placeholder='Search for notes...'
     onChange={(event)=>handleSearchNote(event.target.value)} />
   </div>
  )
}

export default SearchBar
