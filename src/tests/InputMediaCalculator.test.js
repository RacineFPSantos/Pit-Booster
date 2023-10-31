import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AAAPatter from '../routes/AAAPatter';

describe('InputMediaCalculator', () => {
  it('calcula a média corretamente', () => {
    // Arrange
    render(<AAAPatter />);
    const input = screen.getByPlaceholderText('Digite um número');
    const addButton = screen.getByText('Adicionar');

    // Act
    fireEvent.change(input, { target: { value: '1' } });
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: '2' } });
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: '3' } });
    fireEvent.click(addButton);

    // Assert
    const mediaText = screen.getByText((content) => content.includes('A média é: 2'));
    expect(mediaText).toBeInTheDocument();
  });

  it('limpa os dados corretamente', () => {
    // Arrange
    render( <AAAPatter /> );
    const input = screen.getByPlaceholderText('Digite um número');
    const addButton = screen.getByText('Adicionar');
    const clearButton = screen.getByText('Limpar Dados');

    // Act
    fireEvent.change(input, { target: { value: '1' } });
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: '2' } });
    fireEvent.click(addButton);
    fireEvent.click(clearButton); 

    // Assert
    const mediaText = screen.getByText((content) => content.includes('A média é: 0'));
    expect(mediaText).toBeInTheDocument();
  });
});