import { screen } from '@testing-library/react'

import { PageError } from 'widgets/PageError'
import componentRender from 'shared/lib/tests/componentRender/componentRender'

describe('PageError', () => {
  test('Test render', () => {
    componentRender(<PageError />, { route: '' })
    expect(screen.getByTestId('pageError')).toBeInTheDocument()
  })
})
