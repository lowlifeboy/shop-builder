import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import cls from './AccountOrders.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import {
  AccountOrder,
  fetchAccountOrders,
  getAccountOrdersData,
  getAccountOrdersLoading,
  getAccountOrdersError
} from 'entities/AccountOrders'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import PageLoader from 'shared/ui/PageLoader/PageLoader'
import AppErrorText, { TextAlign } from 'shared/ui/AppErrorText/AppErrorText'

interface AccountOrdersProps {
  className?: string
}

const AccountOrders = memo(({ className }: AccountOrdersProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const orders = useSelector(getAccountOrdersData)
  const isLoading = useSelector(getAccountOrdersLoading)
  const error = useSelector(getAccountOrdersError)

  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && !orders) {
      void dispatch(fetchAccountOrders())
    }
  }, [orders, dispatch])

  if (isLoading) {
    return (
      <div className={classNames(cls.orders, {}, [className])}>
        <div className="loaderWrapper">
          <PageLoader />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.orders, {}, [className])}>
        <div className="errorWrapper">
          <AppErrorText text={t('errorText')} title={t('errorTitle')} align={TextAlign.CENTER} />
        </div>
      </div>
    )
  }

  return (
    <div className={classNames(cls.orders, {}, [className])}>
      {orders?.map(({ id, totalPrice, date, status }) => (
        <AccountOrder
          key={id}
          id={id}
          totalPrice={totalPrice}
          date={date}
          status={status}
        />
      ))}
    </div>
  )
})

export default AccountOrders
