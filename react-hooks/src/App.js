import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [tech, setTech] = useState([
    'React',
    'React Native'
  ]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  return (
    <>
      <ul>
        {tech.map(t =>
          <li key={t}>{t}</li>
        )}
      </ul>
      <input type="text" value={newTech} onChange={e=>setNewTech(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Add tech</button>
    </>
  );
}

export default App;
