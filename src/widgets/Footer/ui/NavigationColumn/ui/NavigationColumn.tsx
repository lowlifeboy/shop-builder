import { memo } from 'react'

import cls from './NavigationColumn.module.scss'

import { type NavigationColumnProps } from '../../../model/types'
import AppLink from 'shared/ui/AppLink/AppLink'

const NavigationColumn = memo(({ title, items }: NavigationColumnProps) => {
  return (
    <div>
      <h3>{title}</h3>

      <ul>
        {items.map(({ path, text }) => (
          <li key={path}>
            <AppLink to={path} className={cls.footerNavLink}>
              {text}
            </AppLink>
          </li>
        ))}
      </ul>
    </div>
  )
})

export default NavigationColumn
