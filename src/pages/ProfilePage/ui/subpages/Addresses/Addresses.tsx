import { memo } from 'react'
import { useSelector } from 'react-redux'

import cls from './Addresses.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { getProfileAddresses } from 'entities/Profile/model/selectors/getProfileAddresses/getProfileAddresses'
import { AddressRow } from 'entities/Profile'

interface AddressesProps {
  className?: string
}

const Addresses = memo(({ className }: AddressesProps) => {
  const addresses = useSelector(getProfileAddresses)

  return (
    <div className={classNames(cls.addresses, {}, [className])}>
      {addresses.map(({ id, name, street, city, country, zip }) => (
        <AddressRow key={id} name={name} street={street} city={city} country={country} zip={zip} />
      ))}
    </div>
  )
})

export default Addresses
