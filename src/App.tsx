import React, { useState } from 'react';
import './App.css';
import InputCard from './components/InputCard';
import TitleCard from './components/TitleCard';

function App() {
  const [next, setNext] = useState<number>(0)
  const [gender, setGender] = useState<number>(4)
  return (
    <div className="App">
      <TitleCard />
      <InputCard setNext={setNext} next={next} gender={gender} setGender={setGender} />
    </div>
  );
}

export default App;
