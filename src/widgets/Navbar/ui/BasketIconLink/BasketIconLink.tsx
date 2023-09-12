import cls from './BasketIconLink.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { Link } from 'react-router-dom'
import { BasketIcon } from 'shared/assets/icons'
import { memo } from 'react'

interface BasketIconLinkProps {
  className?: string
}

const itemsQuantity = 2

const BasketIconLink = memo(({ className }: BasketIconLinkProps) => {
  return (
    <Link to={'/basket'} className={classNames(cls.basketIconLink, {}, [className])}>
      <BasketIcon className={cls.basketIcon} />
      <div className={cls.counter}>
        {itemsQuantity}
      </div>
    </Link>
  )
})

export default BasketIconLink
