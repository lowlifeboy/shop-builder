import cls from './AppDropdownSimple.module.scss'

import { type ReactNode } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { ArrowDownIcon } from 'shared/assets/icons'
import { getIconColorByTheme } from 'shared/lib/getMainColorByTheme/getIconColorByTheme'
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
  const { theme } = useTheme()

  return (
    <div className={cls.appDropdownSimpleSelectedItemWrapper}>
      <div className={cls.appDropdownSimpleSelectedItem}>
        <div>{title}</div>
        <div className={cls.iconWrapper}>
          <ArrowDownIcon color={getIconColorByTheme(theme)} />
        </div>
      </div>
    </div>
  )
}

export function AppDropdownSimple ({ className, children, title }: AppDropdownSimpleProps) {
  return (
    <div className={classNames(cls.appDropdownSimple, {}, [className ?? ''])}>
      <AppDropdownSimpleSelectedItem title={title} />
      <ul className={cls.appDropdownSimpleList}>
        {children}
      </ul>
    </div>
  )
}
