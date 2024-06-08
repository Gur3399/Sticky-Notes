import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Notes from './components/Notes'


function App() {
  const [notes, setNotes] = useState([{
    id:1,
    text:"Hello"
  },
  {
    id:2,
    text:"bye"
  }
])

  return (
    <>
       <Notes notes={notes} setNotes={setNotes} />
    </>
  )
}

export default App
