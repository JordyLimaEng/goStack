import React, { useState, useEffect } from 'react';
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

  //monitora um determinado objeto e quando há alteração executa o comando explicitado
  useEffect(()=>{
    localStorage.setItem('tech',JSON.stringify(tech));
  }, [tech]);

  useEffect(()=>{
    const storageTech = localStorage.getItem('tech');

    if(storageTech){
      setTech(JSON.parse(storageTech));
    }
  }, [])

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
