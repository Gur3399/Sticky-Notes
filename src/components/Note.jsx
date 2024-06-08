import React, { useState } from 'react';

const Note = ({id, text, x,y, updatePosition }) => {
    const[isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({x:0, y:0});


    const handleMouseDown = (e) =>{
        setIsDragging(true);
        setOffset({
            x:e.clientX - x,
            y:e.clientY - y
        });


    }
    const handleMouseMove = (e) =>{
        if(isDragging){
            const newX = e.clientX - offset.x;
            const newY = e.clientY - offset.y;
            updatePosition(id, newX, newY )
            
        }
        
    }
    const handleMouseUp = () =>{
        setIsDragging(false)
    }
  return (

    //adding events 
    <div className="absolute w-40 h-40 p-4 bg-yellow-300 border rounded-xl border-black shadow-lg cursor-move"
    style={{left:`${x}px`, top:`${y}px`}}
    onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUp}
    onMouseLeave={handleMouseUp}
     >
     📌 {text}
    </div>
  );
}

export default Note;
