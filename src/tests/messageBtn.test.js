import { MessageButton } from '../components/MessageButton'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Testando o botão de exibição de mensagem', ()=>{
  it('deve renderizar botãop em tela', () => {
    render(< MessageButton /> );
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
  })

  it('deve mudar mostrar mensagem ao ser pressionado - aparecer', ()=>{
    render(<MessageButton/>)
    const button = screen.getByTestId('button')

    fireEvent.click(button)

    const message = screen.getByTestId('message')

    expect(message).toBeInTheDocument()
    expect(screen.getByText(/botão foi acionado!/i)).toBeInTheDocument()
  })

  it('deve mudar mostrar mensagem ao ser pressionado - desaparecer', ()=>{
    render(<MessageButton/>)
    const button = screen.getByTestId('button')

    fireEvent.click(button)
    const message = screen.getByTestId('message')

    fireEvent.click(button)

    expect(message).not.toBeInTheDocument()
  })
})