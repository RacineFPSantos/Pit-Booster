import React from 'react';
import { render } from '@testing-library/react';
import CalcularMedia from '../components/CalcularMedia';

describe('SeuComponente', () => {
  it('calcula a média corretamente', () => {
    // Arrange (Preparação)
    const numbers = [1, 2, 3, 4, 5];

    // Act (Ação)
    const { container } = render( <CalcularMedia numbers={numbers} />);
    const result = container.textContent;
    const cleanResult = result.replace('A média é: ', '');

    // Assert (Verificação)
    const expectedAverage = '3';
    expect(cleanResult).toEqual(expectedAverage);
  });

  it('lida com uma lista vazia', () => {    
    // Arrange (Preparação)
    const emptyList = [];

    // Act (Ação)
    const { container } = render(<CalcularMedia numbers={emptyList} />);
    const result = container.textContent;

    // Assert (Verificação)
    const expectedAverageEmpty = 'A média é: 0';
    expect(result).toEqual(expectedAverageEmpty);    
  });
});