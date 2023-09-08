import { type ChangeEvent, type InputHTMLAttributes, memo, useEffect, useRef } from 'react'

import cls from './AppInput.module.scss'

import { classNames } from '../../lib/classNames/classNames'

export enum AppInputTheme {
  CLEAR = 'clear',
  UNDERLINED = 'underlined',
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface AppInputProps extends HTMLInputProps {
  value?: string
  onChange?: (value: string) => void
  type?: string
  theme?: AppInputTheme
  placeholder?: string
  debounceTimeMS?: number
  className?: string
  showError?: boolean
  autofocus?: boolean
}

export const AppInput = memo((props: AppInputProps) => {
  const {
    value,
    onChange,
    type = 'text',
    theme = AppInputTheme.CLEAR,
    placeholder,
    debounceTimeMS,
    className,
    showError,
    autofocus,
    ...otherProps
  } = props

  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autofocus && ref.current) {
      ref.current.focus()
    }
  }, [autofocus])

  function handleChange (event: ChangeEvent<HTMLInputElement>) {
    onChange?.(event.target.value)
  }

  return (
    <div className={classNames(cls.appInput, {}, [className, cls[theme]])}>
      <div className={cls.appInputField}>
        <input ref={ref} type={type} value={value} placeholder={placeholder} onChange={handleChange} {...otherProps} />
      </div>
      {showError && (
        <div className={cls.errorWrapper}>
          <span className={cls.error}></span>
        </div>
      )}
    </div>
  )
})
