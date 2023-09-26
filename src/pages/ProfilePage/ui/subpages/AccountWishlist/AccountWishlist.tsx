import { memo } from 'react'

import cls from './AccountWishlist.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { AccountWishlistProduct, getAccountWishlistData } from 'entities/AccountWishlist'

interface WishlistProps {
  className?: string
}

const AccountWishlist = memo(({ className }: WishlistProps) => {
  const wishlist = useSelector(getAccountWishlistData)

  return (
    <div className={classNames(cls.wishlist, {}, [className])}>
      {wishlist?.map(({ id, title, price, preview, properties }) => (
        <AccountWishlistProduct
          key={id}
          id={id}
          title={title}
          price={price}
          preview={preview}
          properties={properties}
        />
      ))}
    </div>
  )
})

export default AccountWishlist
