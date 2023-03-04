
import { useEffect, useState } from 'react';
import './App.css';
import NoteContainer from './components/Notecontainer/NoteContainer';
import Sidebar from './components/Siderbar/Sidebar';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes-app')) || [{
    text: "note",
    time: "3.12AM",
    color: "cyan"
  },
  {

    text: "notez1",
    time: "3.12AM",
    color: "cyan"
  },
  {
    text: "notez2",
    time: "3.12AM",
    color: "cyan"
  },
  {
    text: "notez3",
    time: "3.01AM",
    color: "cyan"
  },
  {
    text: "notez211",
    time: "2.50AM",
    color: "red"
  },]);

  const addNote = (color) => {
    const tempNotes = [...notes]

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id)

    if (index < 0) return;
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id)

    if (index < 0) return
    tempNotes[index].text = text
    setNotes(tempNotes);
  }
  useEffect(() => {
    localStorage.setItem('notes-app', JSON.stringify(notes))
  })


  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer notes={notes} deleteNote={deleteNote} updateText={updateText} />
    </div>
  );
}

export default App;
