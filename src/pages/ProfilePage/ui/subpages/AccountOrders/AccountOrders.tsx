import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'

import cls from './AccountOrders.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { AccountOrder, fetchAccountOrders, getAccountOrdersData } from 'entities/AccountOrders'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface AccountOrdersProps {
  className?: string
}

const AccountOrders = memo(({ className }: AccountOrdersProps) => {
  const dispatch = useAppDispatch()

  const orders = useSelector(getAccountOrdersData)

  useEffect(() => {
    if (!orders) {
      void dispatch(fetchAccountOrders())
    }
  }, [orders, dispatch])

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
