import React, { useState, useEffect } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Antal klick: ${count}`;

    return () => {
      console.log('Du har klickat på countern!');
    };
  }, [count]);

  const handleButtonClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h3>Klickräknare</h3>
      <p>Antal klick: {count}</p>
      <button onClick={handleButtonClick}>Klicka här</button>
    </div>
  );
};

export default ClickCounter;
