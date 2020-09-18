import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './App.css';

function App() {

  const [tech, setTech] = useState([
    'React',
    'React Native'
  ]);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  },[newTech,tech]);

  //monitora um determinado objeto e quando há alteração executa o comando explicitado
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, [])

  //só executa quando os valores mudam, para não exagerar nas chamadas
  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t =>
          <li key={t}>{t}</li>
        )}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input type="text" value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>Add tech</button>
    </>
  );
}

export default App;
