import cls from './BasketIconLink.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { Link } from 'react-router-dom'
import { BasketIcon } from 'shared/assets/icons'
import { getIconColorByTheme } from 'shared/lib/getMainColorByTheme/getIconColorByTheme'
import { Theme } from 'app/providers/ThemeProvider'

interface BasketIconLinkProps {
  theme?: Theme
  className?: string
}

const itemsQuantity = 2

export default function BasketIconLink ({ theme = Theme.LIGHT, className }: BasketIconLinkProps) {
  return (
    <Link to={'/basket'} className={classNames(cls.basketIconLink, {}, [className ?? ''])}>
      <BasketIcon color={getIconColorByTheme(theme)} />
      <div className={cls.counter}>
        {itemsQuantity}
      </div>
    </Link>
  )
}
