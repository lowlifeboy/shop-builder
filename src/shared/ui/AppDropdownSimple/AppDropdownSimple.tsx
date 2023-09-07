import cls from './AppDropdownSimple.module.scss'

import { type ReactNode } from 'react'
import ArrowDownIcon from 'shared/assets/icons/ArrowDownIcon.svg'
import { classNames } from 'shared/lib/classNames/classNames'

interface AppDropdownSimpleProps {
  title: string
  children: ReactNode
  className?: string
}

interface AppDropdownSimpleSelectedItemProps {
  title: string
}

export function AppDropdownSimpleSelectedItem ({ title }: AppDropdownSimpleSelectedItemProps) {
  return (
    <div className={cls.appDropdownSimpleSelectedItemWrapper}>
      <div className={cls.appDropdownSimpleSelectedItem}>
        <div>{title}</div>
        <div className={cls.iconWrapper}>
          <ArrowDownIcon className={cls.arrowDownIcon} />
        </div>
      </div>
    </div>
  )
}

export function AppDropdownSimple ({ className, children, title }: AppDropdownSimpleProps) {
  return (
    <div className={classNames(cls.appDropdownSimple, {}, [className])}>
      <AppDropdownSimpleSelectedItem title={title} />
      <ul className={cls.appDropdownSimpleList}>
        {children}
      </ul>
    </div>
  )
}
