import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './AccountOrder.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { type OrderStatus } from 'shared/const/common'
import AppButton, { AppButtonFillTheme, AppButtonSize, AppButtonTheme } from 'shared/ui/AppButton/AppButton'

interface OrderProps {
  id: string
  totalPrice: number
  date: string
  status: OrderStatus
  className?: string
}

const AccountOrder = memo(({ id, totalPrice, date, status, className }: OrderProps) => {
  const { t } = useTranslation()

  const trackOrder = () => {
    console.log('track')
  }

  return (
    <div className={classNames(cls.order, {}, [className])}>
      <div className={cls.orderWrapper}>
        <div className={cls.id}>{`#${id}`}:</div>
        <div className={cls.date}>{date}</div>
        <div className={cls.status}>{t(status)}</div>
        <div className={cls.totalPrice}>{`$${totalPrice}`}</div>
        <AppButton theme={AppButtonTheme.ROUNDED} size={AppButtonSize.S} fillTheme={AppButtonFillTheme.SOLID} onClick={trackOrder}>{t('track')}</AppButton>
      </div>
    </div>
  )
})

export default AccountOrder
