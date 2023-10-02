import { memo } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import cls from './AccountDashboard.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { getAccountFirstname } from 'entities/AccountDetails'

interface ProfileDashboardProps {
  className?: string
}

const AccountDashboard = memo(({ className }: ProfileDashboardProps) => {
  const { t } = useTranslation('profile')

  const firstname = useSelector(getAccountFirstname)

  return (
    <div className={classNames(cls.profileDashboard, {}, [className])}>
      <h3>{t('profileDashboardDescriptionTitle', { firstname })}</h3>
      <p>{t('profileDashboardDescriptionText')}</p>
    </div>
  )
})

export default AccountDashboard
