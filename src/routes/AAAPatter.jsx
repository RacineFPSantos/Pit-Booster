import React, { useState } from 'react'

import CalcularMedia from '../components/CalcularMedia'

const AAAPatter = () => {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNumber = () => {
    const number = parseFloat(inputValue);

    if (!isNaN(number)) {
      setNumbers([...numbers, number]);
      setInputValue('');
    }
  };

  // Limpa a lista de números
  const handleClearData = () => {
    setNumbers([]); 
  };

  return (
    <div>
      <div>
        <h1>Média de Números</h1>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Digite um número"
        />

        <button style={{ margin: 8 }} onClick={handleAddNumber}>Adicionar</button>
        <button onClick={handleClearData}>Limpar Dados</button> {/* Novo botão para limpar dados */}
      </div>
      <div>
        {numbers.length > 0 && (
          <p>Números adicionados: {numbers.join(', ')}</p>
        )}
        <CalcularMedia numbers={numbers}/>
      </div>
      
    </div>
  )
}

export default AAAPatter