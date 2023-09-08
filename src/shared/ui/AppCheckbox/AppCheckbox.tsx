import { type ChangeEvent, type InputHTMLAttributes } from 'react'

import cls from './AppCheckbox.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface AppCheckboxProps extends HTMLInputProps {
  checked: boolean
  onChange: (value: boolean) => void
  text?: string
  className?: string
  showError?: boolean
}

export default function AppCheckbox (props: AppCheckboxProps) {
  const {
    checked,
    onChange,
    text,
    className,
    showError,
    ...otherProps
  } = props

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  }

  return (
    <label className={classNames(cls.appCheckbox, {}, [className])}>
      <div className={cls.appCheckboxField}>
        <input type="checkbox" checked={checked} onChange={handleChange} {...otherProps} />
        <span>{text}</span>
      </div>
      {showError && (
        <div className={cls.errorWrapper}>
          <span className={cls.error}></span>
        </div>
      )}
    </label>
  )
}
