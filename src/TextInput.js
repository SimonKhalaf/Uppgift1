import React, { useState } from 'react';

const TextInput = ({ prop2 }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h3>{prop2}</h3>
      <p>Input-värde: {inputValue}</p>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default TextInput;
