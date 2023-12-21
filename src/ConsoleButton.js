import React from 'react';

const ConsoleButton = ({ prop1 }) => {
  const handleClick = () => {
    console.log('Klickade på komponent 1');
  };

  return (
    <div>
      <h3>{prop1}</h3>
      <p>Klicka på knappen och in i consolen!</p>
      <button onClick={handleClick}>Klicka här</button>
    </div>
  );
};

export default ConsoleButton;
