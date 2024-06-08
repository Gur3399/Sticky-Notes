import React from 'react';

const AddButton = ({ onClick }) => {
  return (
    <button 
      className="p-2 bg-blue-500 text-white rounded"
      onClick={onClick}
    >
      ADD
    </button>
  );
};

export default AddButton;