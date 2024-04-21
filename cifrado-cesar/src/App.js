import React from 'react';
import CaesarCipher from './components/cifrado/cesar';
import './App.css';

function App() {
  return (
    <div className="App">
      <CaesarCipher />
      <footer className="app-footer">
        <p>Creado por Albeiro Burbano - Encuéntrame  en:</p>
        <a href="https://www.freelancer.com/u/Albeiro73?sb=t" target="_blank" rel="noopener noreferrer">Freelancer</a> | 
        <a href="http://www.linkedin.com/in/albeiro-jose-burbano-tobar-759ba4297" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
        <a href="https://github.com/AlbeiroBurbanoTobar/ppi_pl_BurbanoA" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://stackoverflow.com/users/24090991/albeiro-burbano" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
      </footer>
    </div>
  );
}

export default App;
