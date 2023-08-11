import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import Navbar from './Navbar'
import { navigationDropdownsConfig, searchDropdownConfig } from '../models/mocks'

describe('Navbar', () => {
  test('Test render', () => {
    render(<MemoryRouter><Navbar navigationDropdownsConfig={navigationDropdownsConfig} searchDropdownConfig={searchDropdownConfig} /></MemoryRouter>)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })
})
