import { type ButtonHTMLAttributes, forwardRef, type ReactNode, memo } from 'react'

import cls from './AppButton.module.scss'

import { classNames } from '../../lib/classNames/classNames'

export enum AppButtonTheme {
  CLEAR = 'clear',
  PILL = 'pill',
  ROUNDED = 'rounded',
  SHARP = 'sharp'
}

export enum AppButtonFillTheme {
  SOLID = 'solid',
  OUTLINE = 'outline'
}

export enum AppButtonSize {
  XL = 'xl',
  L = 'l',
  M = 'm',
  S = 's',
  XS = 'xs'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  type?: 'button' | 'submit'
  onClick?: () => void
  theme?: AppButtonTheme
  fillTheme?: AppButtonFillTheme
  size?: AppButtonSize
  disabled?: boolean
  className?: string
}

const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>((
  props,
  ref
) => {
  const {
    className,
    theme = AppButtonTheme.CLEAR,
    fillTheme = AppButtonFillTheme.SOLID,
    size = AppButtonSize.XL,
    disabled = false,
    children,
    onClick,
    type = 'button',
    ...otherProps
  } = props

  return (
    <button
      ref={ref}
      type={type}
      className={classNames(cls.appButton, { [cls.disabled]: disabled }, [className, cls[theme], cls[fillTheme], cls[size]])}
      onClick={onClick}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
})

export default memo(AppButton)
