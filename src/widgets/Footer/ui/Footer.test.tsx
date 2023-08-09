import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import { Footer } from 'widgets/Footer'

describe('Footer', () => {
  test('Test render', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
