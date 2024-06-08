// import React, { useState } from 'react';
// import Note from './Note';
// import AddButton from './AddButton';
// import InputTag from './InputTag';

// const Notes = ({ notes, setNotes }) => {
//     const [inputVal, setInputVal] = useState(" ");
//   const addTodo = () => {
//     setNotes([...notes, {
//       id: notes.length + 1, // dynamic id based on the length of notes
//       text: inputVal
//     }]);
//   };

//   const handleChange = (e)=>{
//     setInputVal(e.target.value)
//   }

//   return (
//     <div className='flex'>
//     <InputTag onChange={handleChange} />
//     <AddButton onClick={addTodo} />
//     <div>
//     {notes.map((data) => (
//         <Note key={data.id} text={data.text} setNotes={setNotes} />
//       ))}

//     </div>
//     </div>
//   );
// }

// export default Notes;


import React, { useState } from 'react';
import Note from './Note';
import AddButton from './AddButton';
import InputTag from './InputTag';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, {
        id: notes.length + 1,
        text: inputValue,
        x:0,
        y:0
      }]);
      setInputValue(''); 
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const updatePosition = (id, x, y)=>{
    setNotes(notes.map(note => note.id === id ? {...note,x,y}: note));

  }

  return (
    <div className="p-4">
      <InputTag value={inputValue} onChange={handleChange} />
      <AddButton onClick={addTodo} />
      <div className="relative mt-4">
        {notes.map((note) => (
          <Note key={note.id} { ...note} updatePosition={updatePosition} />
        ))}
      </div>
    </div>
  );
}

export default Notes;

