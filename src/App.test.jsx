import { render, screen } from '@testing-library/react'
import App from './App.jsx'

describe('App', () => {
  it('renders the hero headline', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /discover your next adventure/i })).toBeTruthy()
  })

  it('renders all destination cards', () => {
    render(<App />)
    expect(screen.getAllByRole('article')).toHaveLength(4)
  })
})
