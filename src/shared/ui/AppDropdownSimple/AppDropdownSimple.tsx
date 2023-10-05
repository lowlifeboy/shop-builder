import cls from './AppDropdownSimple.module.scss'

import { memo, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArrowDownIcon } from 'shared/assets/icons'

interface AppDropdownSimpleProps {
  title: string
  children?: ReactNode
  className?: string
}

interface AppDropdownSimpleSelectedItemProps {
  title: string
}

const AppDropdownSimpleSelectedItem = memo(({ title }: AppDropdownSimpleSelectedItemProps) => {
  return (
    <div className={cls.appDropdownSimpleSelectedItemWrapper}>
      <div className={cls.appDropdownSimpleSelectedItem}>
        <div>{title}</div>
        <div className={cls.iconWrapper}>
          <ArrowDownIcon />
        </div>
      </div>
    </div>
  )
})

const AppDropdownSimple = memo(({ className, children, title }: AppDropdownSimpleProps) => {
  return (
    <div className={classNames(cls.appDropdownSimple, {}, [className])}>
      <AppDropdownSimpleSelectedItem title={title} />
      <ul className={cls.appDropdownSimpleList}>
        {children}
      </ul>
    </div>
  )
})

export { AppDropdownSimpleSelectedItem, AppDropdownSimple }
