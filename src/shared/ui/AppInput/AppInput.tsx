import { type ChangeEvent, type InputHTMLAttributes, memo, useEffect, useRef } from 'react'

import cls from './AppInput.module.scss'

import { classNames } from '../../lib/classNames/classNames'

export enum AppInputTheme {
  CLEAR = 'clear',
  UNDERLINED = 'underlined',
  OUTLINED = 'outlined',
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'disabled'>

interface AppInputProps extends HTMLInputProps {
  label?: string
  value?: string
  required?: boolean
  onChange?: (e: ChangeEvent<any>) => any
  type?: string
  theme?: AppInputTheme
  placeholder?: string
  debounceTimeMS?: number
  className?: string
  showError?: boolean
  autofocus?: boolean
  disabled?: boolean
}

export const AppInput = memo((props: AppInputProps) => {
  const {
    label,
    value,
    required,
    onChange,
    type = 'text',
    theme = AppInputTheme.CLEAR,
    placeholder,
    debounceTimeMS,
    className,
    showError,
    autofocus,
    disabled,
    ...otherProps
  } = props

  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autofocus && ref.current) {
      ref.current.focus()
    }
  }, [autofocus])

  return (
    <div className={classNames(cls.appInput, { [cls.disabled]: !!disabled }, [className, cls[theme]])}>
      {label && (
        <label className={cls.label}>
          {`${label}${required ? '*' : ''}`}
        </label>
      )}
      <div className={cls.appInputField}>
        <input
          ref={ref}
          type={type}
          value={value ?? ''}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          {...otherProps}
        />
      </div>
      {showError && (
        <div className={cls.errorWrapper}>
          <span className={cls.error}></span>
        </div>
      )}
    </div>
  )
})
