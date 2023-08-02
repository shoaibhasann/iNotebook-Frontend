import NoteContext from "./NoteContext.jsx"
import { useState } from "react";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);

  const addNote = (title, description, tag) => {
       setNotes(notes.concat({
           'title': title,
           'description': description,
           'tag': tag
       }));
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter(() => {
        return notes._id !== id;
    });
    setNotes(newNotes);
  }

    return (
        <NoteContext.Provider value={{notes, setNotes, addNote, deleteNote}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;