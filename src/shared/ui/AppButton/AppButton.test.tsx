import { render, screen } from '@testing-library/react'

import AppButton, { ButtonSize, FillThemeButton, ThemeButton } from './AppButton'

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
    render(<AppButton onClick={onClick} theme={ThemeButton.PILL}>{text}</AppButton>)
    expect(screen.getByText(text)).toHaveClass(ThemeButton.PILL)
  })

  test('Test render with fill theme', () => {
    render(<AppButton onClick={onClick} fillTheme={FillThemeButton.OUTLINE}>{text}</AppButton>)
    expect(screen.getByText(text)).toHaveClass(FillThemeButton.OUTLINE)
  })

  test('Test render with selected size', () => {
    render(<AppButton onClick={onClick} size={ButtonSize.XS}>{text}</AppButton>)
    expect(screen.getByText(text)).toHaveClass(ButtonSize.XS)
  })
})
