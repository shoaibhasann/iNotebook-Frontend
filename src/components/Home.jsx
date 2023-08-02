import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext.jsx'

function Home() {
    const data = useContext(NoteContext);
  return (
    <div>Home {data}</div>
  )
}

export default Home