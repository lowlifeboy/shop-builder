import { screen } from '@testing-library/react'

import Counter from './Counter'
import componentRender from 'shared/lib/tests/componentRender/componentRender'
import { userEvent } from '@storybook/testing-library'

describe('Counter', () => {
  test('Test render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10')
  })

  test('Test increment', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    await userEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('counter-value')).toHaveTextContent('11')
  })

  test('Test decrement', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    await userEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('counter-value')).toHaveTextContent('9')
  })
})
