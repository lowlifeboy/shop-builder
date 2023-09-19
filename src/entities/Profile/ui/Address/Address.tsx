import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './Address.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import AppButton, { AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { EditIcon } from 'shared/assets/icons'

interface AddressProps {
  name: string
  street: string
  city: string
  country: string
  zip?: string
  className?: string
}

const Address = memo(({ name, street, city, country, zip, className }: AddressProps) => {
  const { t } = useTranslation()

  const editAddress = () => {
    console.log('editAddress')
  }

  return (
    <div className={classNames(cls.address, {}, [className])}>
      <div className={cls.addressHeader}>
        <h4>{t('billingAddress')}</h4>
        <AppButton theme={AppButtonTheme.CLEAR} onClick={editAddress} className={cls.editButton}>
          <EditIcon />
          <span>{t('edit')}</span>
        </AppButton>
      </div>

      <div className={cls.addressContent}>
        <div className={cls.addressRow}>
          <div className={cls.name}>{name}</div>
        </div>
        <div className={cls.addressRow}>
          <div className={cls.street}>{street}</div>
          <div className={cls.city}>{city}</div>
        </div>
        <div className={cls.addressRow}>
          <div className={cls.country}>{country}</div>
          <div className={cls.zip}>{zip}</div>
        </div>
      </div>
    </div>
  )
})

export default Address
