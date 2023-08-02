import NoteContext from "./NoteContext.jsx";
import { useState } from "react";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);
 
  // const host = "http://localhost:8040/api/v1/note";



const getNotes = async () => {
  try {
    const response = await fetch(`${host}`, {
      method: "GET",
      headers: {
        // Authorization: `Bearer ${authToken}`,
      },
      // credentials: "include",
    });

    const data = await response.json();
    console.log(data.notes);
    setNotes(data.notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
  }
};


  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
           Cookie: `${authToken}`,
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const data = await response.json();
      setNotes([...notes, data]);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await fetch(`${host}/${id}`, {
        method: "DELETE",
        headers: {
          Cookie: `${authToken}`,
        },
      });
      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Cookie: `${authToken}`,
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const data = await response.json();
      const updatedNotes = notes.map((note) => (note._id === id ? data : note));
      setNotes(updatedNotes);
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
