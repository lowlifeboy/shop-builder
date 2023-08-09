import cls from './AppButton.module.scss'

import { classNames } from '../../lib/classNames/classNames'
import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
  PILL = 'pill',
  ROUNDED = 'rounded',
  SHARP = 'sharp'
}

export enum ColorsThemeButton {
  LIGHT = 'light',
  DARK = 'dark'
}

export enum FillThemeButton {
  SOLID = 'solid',
  OUTLINE = 'outline'
}

export enum ButtonSize {
  XL = 'xl',
  L = 'l',
  M = 'm',
  S = 's',
  XS = 'xs'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  children: ReactNode
  theme?: ThemeButton
  colorTheme?: ColorsThemeButton
  fillTheme?: FillThemeButton
  size?: ButtonSize
  disabled?: boolean
  className?: string
}

const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>((
  props,
  ref
) => {
  const {
    className,
    theme = ThemeButton.CLEAR,
    colorTheme = ColorsThemeButton.LIGHT,
    fillTheme = FillThemeButton.SOLID,
    size = ButtonSize.XL,
    disabled = false,
    children,
    onClick,
    ...otherProps
  } = props

  return (
    <button
      ref={ref}
      className={classNames(cls.appButton, { disabled }, [className ?? '', cls[theme], cls[colorTheme], cls[fillTheme], cls[size]])}
      onClick={onClick}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
})

export default AppButton
