import React from 'react';

const InputTag = ({ value, onChange }) => {
  return (
    <form className="mb-4">
      <input 
        className="p-2 border border-gray-300 rounded"
        placeholder='Enter value' 
        value={value}
        onChange={onChange} 
      />
    </form>
  );
}

export default InputTag;
