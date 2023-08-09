import { screen } from '@testing-library/react'

import { PageError } from 'widgets/PageError'
import renderWithTranslation from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('PageError', () => {
  test('Test render', () => {
    renderWithTranslation(<PageError />)
    expect(screen.getByTestId('pageError')).toBeInTheDocument()
  })
})
