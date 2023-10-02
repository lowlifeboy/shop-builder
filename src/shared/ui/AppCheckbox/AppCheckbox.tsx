import { type ChangeEvent, type InputHTMLAttributes, memo } from 'react'

import cls from './AppCheckbox.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface AppCheckboxProps extends HTMLInputProps {
  checked: boolean
  onChange: (e: ChangeEvent<any>) => any
  text?: string
  className?: string
  showError?: boolean
}

const AppCheckbox = memo((props: AppCheckboxProps) => {
  const {
    checked,
    onChange,
    text,
    className,
    showError,
    ...otherProps
  } = props

  return (
    <label className={classNames(cls.appCheckbox, {}, [className])}>
      <div className={cls.appCheckboxField}>
        <input type="checkbox" checked={checked} onChange={onChange} {...otherProps} />
        <span>{text}</span>
      </div>
      {showError && (
        <div className={cls.errorWrapper}>
          <span className={cls.error}></span>
        </div>
      )}
    </label>
  )
})

export default AppCheckbox
