import React from 'react'

import cls from './AccountDetails.module.scss'
import { AccountDetailsForm } from 'entities/AccountDetails'

const AccountDetails = () => {
  return (
    <div className={cls.profilePage}>
      <div className={cls.profilePageWrapper}>
        <AccountDetailsForm />
        <div className={cls.emptySpace} />
      </div>
    </div>
  )
}

export default AccountDetails
