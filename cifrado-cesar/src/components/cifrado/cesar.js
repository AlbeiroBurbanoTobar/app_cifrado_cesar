import React, { useState } from 'react';
import { encryptWithCaesarCipher } from '../../utils/cesarUtils';
import './cesar.css';

const CaesarCipher = () => {
    const [message, setMessage] = useState('');
    const [shift, setShift] = useState(0);
    const [encryptedMessage, setEncryptedMessage] = useState('N/A');
  
    const handleEncryptClick = () => {
      const encrypted = encryptWithCaesarCipher(message, shift);
      setEncryptedMessage(encrypted);
    };
  
    return (
      <div className="caesar-cipher">
        <h1>Calculadora de cifrado César</h1>
        <label>Mensaje a cifrar</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <label>Cantidad de transformaciones (semilla)</label>
        <input
          type="number"
          value={shift}
          min="1"
          max="25"
          onChange={(e) => setShift(Math.max(1, Math.min(Number(e.target.value), 25)))}
        />
        <button onClick={handleEncryptClick}>Cifrar</button>
        <label>Mensaje cifrado:</label>
        <p>{encryptedMessage}</p>
      </div>
    );
  };
  
  export default CaesarCipher;
