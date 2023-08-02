import React from "react";
import Notecard from "./Notecard";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Addnote from "./Addnote";

function Notes() {
  const { notes } = useContext(NoteContext);
  return (
    <>
      <Addnote />
      <div>
        <h1 className="text-3xl font-bold text-center ">Your Notes</h1>
        <div className="max-w-[1240px] p-8 m-auto w-full grid grid-cols-1 md:grid-cols-4 gap-6">
          {notes.map((note, index) => (
            <Notecard key={index} note={note} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Notes;
