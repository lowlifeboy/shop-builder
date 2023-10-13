import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import cls from './AccountWishlist.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import {
  AccountWishlistProduct,
  fetchAccountWishlist,
  getAccountWishlistData,
  getAccountWishlistLoading,
  getAccountWishlistError
} from 'entities/AccountWishlist'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import PageLoader from 'shared/ui/PageLoader/PageLoader'
import AppErrorText, { TextAlign } from 'shared/ui/AppErrorText/AppErrorText'

interface WishlistProps {
  className?: string
}

const AccountWishlist = memo(({ className }: WishlistProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const wishlist = useSelector(getAccountWishlistData)
  const isLoading = useSelector(getAccountWishlistLoading)
  const error = useSelector(getAccountWishlistError)

  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && !wishlist) {
      void dispatch(fetchAccountWishlist())
    }
  }, [wishlist, dispatch])

  if (isLoading) {
    return (
      <div className={classNames(cls.wishlist, {}, [className])}>
        <div className="loaderWrapper">
          <PageLoader />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.wishlist, {}, [className])}>
        <div className="errorWrapper">
          <AppErrorText text={error} title={t('errorTitle')} align={TextAlign.CENTER} />
        </div>
      </div>
    )
  }

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
