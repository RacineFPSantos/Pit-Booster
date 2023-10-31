import React from 'react'

const CalcularMedia = ({ numbers }) => {
  

  const calculateAverage = (numbers) => {
    if (!numbers || numbers.length === 0) {
      return 0;
    }
    const total = numbers.reduce((sum, num) => sum + num, 0);
    return total / numbers.length;
  };

  const average = calculateAverage(numbers);
  
  return ( <div>A média é: { average }</div> );
}

export default CalcularMedia