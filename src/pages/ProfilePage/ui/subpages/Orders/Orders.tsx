import { memo } from 'react'
import { useSelector } from 'react-redux'

import cls from './Orders.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { OrderRow } from 'entities/Profile'
import { getProfileOrders } from 'entities/Profile/model/selectors/getProfileOrders/getProfileOrders'

interface OrdersProps {
  className?: string
}

const Orders = memo(({ className }: OrdersProps) => {
  const orders = useSelector(getProfileOrders)

  return (
    <div className={classNames(cls.orders, {}, [className])}>
      {orders.map(({ id, totalPrice, date, status }) => (
        <OrderRow
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

export default Orders
