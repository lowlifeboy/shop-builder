import cls from './AppErrorText.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface AppErrorTextProps {
  text?: string
  className?: string
}

export default function AppErrorText ({ text, className }: AppErrorTextProps) {
  return (
    <div className={classNames(cls.appErrorText, {}, [className])}>
      <p>{text}</p>
    </div>
  )
}
