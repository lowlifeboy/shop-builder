import { render, screen } from '@testing-library/react'

import AppButton, { AppButtonSize, AppButtonFillTheme, AppButtonTheme } from './AppButton'

describe('AppButton', () => {
  function onClick () {
    console.log('test')
  }

  const text = 'TEST BUTTON'

  test('Test render without not required params', () => {
    render(<AppButton onClick={onClick}>{text}</AppButton>)
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  test('Test render with selected theme', () => {
    render(<AppButton onClick={onClick} theme={AppButtonTheme.PILL}>{text}</AppButton>)
    expect(screen.getByText(text)).toHaveClass(AppButtonTheme.PILL)
  })

  test('Test render with fill theme', () => {
    render(<AppButton onClick={onClick} fillTheme={AppButtonFillTheme.OUTLINE}>{text}</AppButton>)
    expect(screen.getByText(text)).toHaveClass(AppButtonFillTheme.OUTLINE)
  })

  test('Test render with selected size', () => {
    render(<AppButton onClick={onClick} size={AppButtonSize.XS}>{text}</AppButton>)
    expect(screen.getByText(text)).toHaveClass(AppButtonSize.XS)
  })
})
