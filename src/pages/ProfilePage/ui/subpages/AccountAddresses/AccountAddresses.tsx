import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'

import cls from './AccountAddresses.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { AccountAddress, fetchAccountAddresses, getAccountAddressesData } from 'entities/AccountAddresses'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface AddressesProps {
  className?: string
}

const AccountAddresses = memo(({ className }: AddressesProps) => {
  const dispatch = useAppDispatch()

  const addresses = useSelector(getAccountAddressesData)

  useEffect(() => {
    if (!addresses) {
      void dispatch(fetchAccountAddresses())
    }
  }, [addresses, dispatch])

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
