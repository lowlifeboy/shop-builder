import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import cls from './AccountDashboard.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { fetchAccountDetails, getAccountDetailsData } from 'entities/AccountDetails'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ProfileDashboardProps {
  className?: string
}

const AccountDashboard = memo(({ className }: ProfileDashboardProps) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation('profile')

  const data = useSelector(getAccountDetailsData)

  useEffect(() => {
    if (!data) {
      void dispatch(fetchAccountDetails())
    }
  }, [data, dispatch])

  return (
    <div className={classNames(cls.profileDashboard, {}, [className])}>
      <h3>{t('profileDashboardDescriptionTitle', { firstname: data?.firstName })}</h3>
      <p>{t('profileDashboardDescriptionText')}</p>
    </div>
  )
})

export default AccountDashboard
