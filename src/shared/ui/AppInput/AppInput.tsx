import cls from './AppInput.module.scss'

import { classNames } from '../../lib/classNames/classNames'
import { type ChangeEvent, useEffect, useState } from 'react'
import { useDebounce } from '../../lib/useDebounce/useDebounce'

interface AppInputProps {
  onChange: (value: string) => void
  debounceTimeMS?: number
  className?: string
}

export default function AppInput ({ onChange, debounceTimeMS, className }: AppInputProps) {
  const [value, setValue] = useState<string>('')

  const debouncedValue = useDebounce(value, debounceTimeMS ?? 0)

  function handleChange (event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  useEffect(() => {
    if (value && debouncedValue) {
      onChange(value)
    } else {
      onChange('')
    }
  }, [debouncedValue, onChange, value])

  return (
    <div className={classNames(cls.appInput, {}, [className ?? ''])}>
      <input value={value} type="text" onChange={handleChange} />
    </div>
  )
}
