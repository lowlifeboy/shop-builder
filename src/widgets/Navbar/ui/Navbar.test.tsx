import { screen } from '@testing-library/react'

import Navbar from './Navbar'
import { navigationDropdownsConfig, searchDropdownConfig } from '../models/mocks'
import componentRender from 'shared/lib/tests/componentRender/componentRender'

describe('Navbar', () => {
  test('Test render', () => {
    componentRender(<Navbar navigationDropdownsConfig={navigationDropdownsConfig} searchDropdownConfig={searchDropdownConfig} />, { route: '' })
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })
})
