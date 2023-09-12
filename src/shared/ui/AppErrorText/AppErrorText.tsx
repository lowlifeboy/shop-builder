import { memo } from 'react'

import cls from './AppErrorText.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface AppErrorTextProps {
  text?: string
  className?: string
}

const AppErrorText = memo(({ text, className }: AppErrorTextProps) => {
  return (
    <div className={classNames(cls.appErrorText, {}, [className])}>
      <p>{text}</p>
    </div>
  )
})

export default AppErrorText
