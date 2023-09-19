import { memo } from 'react'

import cls from './Wishlist.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getProfileWishlist } from 'entities/Profile/model/selectors/getProfileWishlist/getProfileWishlist'
import { WishlistProduct } from 'entities/Profile'

interface WishlistProps {
  className?: string
}

const Wishlist = memo(({ className }: WishlistProps) => {
  const wishlist = useSelector(getProfileWishlist)

  return (
    <div className={classNames(cls.wishlist, {}, [className])}>
      {wishlist.map(({ id, title, price, preview, properties }) => (
        <WishlistProduct
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

export default Wishlist
