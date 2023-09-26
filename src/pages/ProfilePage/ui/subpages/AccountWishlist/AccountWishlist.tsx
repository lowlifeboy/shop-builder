import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'

import cls from './AccountWishlist.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { AccountWishlistProduct, fetchAccountWishlist, getAccountWishlistData } from 'entities/AccountWishlist'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface WishlistProps {
  className?: string
}

const AccountWishlist = memo(({ className }: WishlistProps) => {
  const dispatch = useAppDispatch()

  const wishlist = useSelector(getAccountWishlistData)

  useEffect(() => {
    if (!wishlist) {
      void dispatch(fetchAccountWishlist())
    }
  }, [wishlist, dispatch])

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
