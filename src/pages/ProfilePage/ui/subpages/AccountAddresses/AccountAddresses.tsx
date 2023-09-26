import { memo } from 'react'
import { useSelector } from 'react-redux'

import cls from './AccountAddresses.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { AccountAddress, getAccountAddressesData } from 'entities/AccountAddresses'

interface AddressesProps {
  className?: string
}

const AccountAddresses = memo(({ className }: AddressesProps) => {
  const addresses = useSelector(getAccountAddressesData)

  return (
    <div className={classNames(cls.addresses, {}, [className])}>
      <div className={cls.addressesWrapper}>
        {addresses?.map(({ id, name, street, city, country, zip }) => (
          <AccountAddress key={id} name={name} street={street} city={city} country={country} zip={zip} />
        ))}
      </div>
    </div>
  )
})

export default AccountAddresses
