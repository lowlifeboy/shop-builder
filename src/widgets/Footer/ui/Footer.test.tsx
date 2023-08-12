import { screen } from '@testing-library/react'

import { Footer } from 'widgets/Footer'
import componentRender from 'shared/lib/tests/componentRender/componentRender'

describe('Footer', () => {
  test('Test render', () => {
    componentRender(<Footer />, { route: '' })
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
