import { memo } from 'react'

import cls from './AppErrorText.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

interface AppErrorTextProps {
  title?: string
  text?: string
  className?: string
  align?: TextAlign
}

const AppErrorText = memo(({ title, text, className, align = TextAlign.LEFT }: AppErrorTextProps) => {
  return (
    <div className={classNames(cls.appError, {}, [className, cls[align]])}>
      {title && <h3 className={cls.appErrorTitle}>{title}</h3>}
      {text && <p className={classNames(cls.appErrorDescription, { [cls.textHighlighted]: !title }, [])}>{text}</p>}
    </div>
  )
})

export default AppErrorText
