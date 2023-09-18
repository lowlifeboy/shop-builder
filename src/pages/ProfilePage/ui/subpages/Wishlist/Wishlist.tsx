import { memo } from 'react'

import cls from './Wishlist.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface WishlistProps {
  className?: string
}

const fakeContent = 'Wishlist'

const Wishlist = memo(({ className }: WishlistProps) => {
  return (
    <div className={classNames(cls.wishlist, {}, [className])}>
      {fakeContent}
    </div>
  )
})

export default Wishlist
