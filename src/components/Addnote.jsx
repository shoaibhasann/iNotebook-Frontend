import React, {useContext, useState} from 'react';
import NoteContext from '../context/notes/NoteContext';

function Addnote() {
    const { addNote } = useContext(NoteContext);

    const [newNote, setNewNote] = useState({
        title: '',
        description: '',
        tag: ''
    });


    const addOnClick = () => {
        addNote(newNote.title, newNote.description, newNote.tag);
    }

    const onInputChange = (event) => {
        setNewNote({...newNote , [event.target.name]: event.target.value});
    }

  return (
    <div className='p-8'>
      <div
        id="whoobe-1yakq"
        className="bg-white text-base rounded-lg  md:max-w-md shadow m-auto -brown-400 border border-t-8 border-b-8 border-black my-10 flex flex-col"
      >
        <div id="whoobe-pa28x" className="p-4 flex gap-6 flex-col">
          <h3 type="element" className="text-4xl" id="whoobe-ozjao">
            Add Your Note
          </h3>
          <input
            className="p-4 bg-white text-black"
            type="text"
            name="title"
            id="title"
            onChange={onInputChange}
            placeholder="Enter your title"
          />
          <input
            className="p-4 bg-white text-black"
            type="text"
            name="description"
            id="description"
            onChange={onInputChange}
            placeholder="Enter your description"
          />
          <input
            className="p-4 bg-white text-black"
            type="text"
            name="tag"
            id="tag"
            onChange={onInputChange}
            placeholder="Enter your tag"
          />
          <button
            onClick={addOnClick}
            className="bg-slate-950 w-[100px] py-2 text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addnote