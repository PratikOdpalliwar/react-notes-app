import {nanoid} from nanoid
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import NoteList from './components/NoteList';

function App() {
const [notes, setNotes] = useState([
  { id:nanoid(),
text:"first NOte",
date:"15/04/2021"
  },
  { id:nanoid(),
    text:"first 2",
    date:"16/04/2021"
      },
      { id:nanoid(),
        text:"first 3",
        date:"17/04/2021"
          }
]);


  return (
    <div className="App">
      <div className="header">
        <Header handleToggleDarkMOde={setDarkMode}/>
      </div>

      <div className="search-bar">
        <SearchBar handleSearchNote={setSearchText}/>
      </div>

      <div className="note-list">
        <NoteList/>
      </div>
    </div>
  );
}

export default App;
