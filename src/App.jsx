import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import NoteState from "./context/notes/NoteState.jsx";
import Notecard from "./components/Notecard.jsx";
import Notes from "./components/Notes.jsx";
import Alert from "./components/Alert.jsx";
import Addnote from "./components/Addnote.jsx";


function App() {
  return (
      <>
<NoteState>
<Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Notes/>} />
        </Routes> 
</Router>
</NoteState>
        </>
  );
}

export default App;
