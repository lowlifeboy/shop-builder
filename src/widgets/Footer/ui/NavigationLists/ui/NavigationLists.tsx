import { memo } from 'react'

import cls from './NavigationLists.module.scss'

import { type NavigationColumnProps } from '../../../model/types'
import { NavigationColumn } from '../../NavigationColumn'

const NavigationLists = memo(({ navigation }: { navigation: NavigationColumnProps[] }) => {
  return (
    <ul className={cls.footerNavigationColumns}>
      {navigation.map(({ title, items }) => (
        <li key={title}>
          <NavigationColumn title={title} items={items} />
        </li>
      ))}
    </ul>
  )
})

export default NavigationLists
