import './App.css';
import React from 'react';
import ConsoleButton from './ConsoleButton';
import TextInput from './TextInput';
import ClickCounter from './ClickCounter';

function App() {
  const enProp = 'Värde från huvudkomponenten';
  const enProp2 = 'Skriv något i textfälten';
  return (
    <div className="App">
      <h1>Webbutveckling med React - Laboration 1</h1>
      <hr></hr>
      <ConsoleButton prop1={enProp} />
      <TextInput prop2={enProp2} />
      <ClickCounter/>
    </div>
  );
}

export default App;
