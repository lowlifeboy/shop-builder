import { memo } from 'react'
import { useSelector } from 'react-redux'

import cls from './AccountOrders.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { AccountOrder, getAccountOrdersData } from 'entities/AccountOrders'

interface AccountOrdersProps {
  className?: string
}

const AccountOrders = memo(({ className }: AccountOrdersProps) => {
  const orders = useSelector(getAccountOrdersData)

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
