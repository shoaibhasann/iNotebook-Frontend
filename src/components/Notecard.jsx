import React, { useContext } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import NoteContext from "../context/notes/NoteContext";

function Notecard({ note }) {
  const { deleteNote } = useContext(NoteContext);
  return (
    <div className="items-center p-2 flex gap-4 flex-col rounded-lg bg-black shadow-lg ">
      <h1 className="text-2xl break-all text-white font-semibold">
        {note.title}
      </h1>
      <p className="text-lg break-all text-slate-200 font-medium">
        {note.description}
      </p>
      <h5 className="text-white break-all">{note.tag}</h5>
      <div className="flex gap-8 items-center">
        <AiFillEdit className="text-white text-2xl cursor-pointer" />
        <AiFillDelete
          className="text-white cursor-pointer text-2xl"
          onClick={() => deleteNote(note._id)}
        />
      </div>
    </div>
  );
}

export default Notecard;
