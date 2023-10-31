import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import {App, LocationDisplay} from '../App'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

test('Renderização da pagina principal', async () => {
  render(<App />, { wrapper: BrowserRouter })
  expect(screen.getByText(/você está na home/i)).toBeInTheDocument()
})

test('Navegação entre as paginas - About -', async () => {
  render(<App />, { wrapper: BrowserRouter })
  const user = userEvent.setup()

  //Fazendo a navegação
  await user.click(screen.getByText(/about/i))
  expect(screen.getByText(/você está na página about/i)).toBeInTheDocument()
});

test('Navegação entre as paginas - AAAPatter -', async () => {
  render(<App />, { wrapper: BrowserRouter })
  const user = userEvent.setup()

  //Fazendo a navegação
  await user.click(screen.getByText(/aaapatter/i))
  expect(screen.getByText(/média de números/i)).toBeInTheDocument()
});

test('Testando rota com erro (404) not found', () => {
  const badRoute = '/some/bad/route'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>,
  )

  // verify navigation to "no match" route
  expect(screen.getByText(/no match/i)).toBeInTheDocument()
})

test('rendering a component that uses useLocation', () => {
  const route = '/some-route'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[route]}>
      <LocationDisplay />
    </MemoryRouter>,
  )

  // verify location display is rendered
  expect(screen.getByTestId('location-display')).toHaveTextContent(route)
})