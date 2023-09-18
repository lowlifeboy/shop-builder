import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './Dashboard.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getProfileFirstName } from 'entities/Profile/model/selectors/getProfileFirstName/getProfileFirstName'

interface ProfileDashboardProps {
  className?: string
}

const Dashboard = memo(({ className }: ProfileDashboardProps) => {
  const { t } = useTranslation('profile')

  const firstname = useSelector(getProfileFirstName)

  return (
    <div className={classNames(cls.profileDashboard, {}, [className])}>
      <h3>{t('profileDashboardDescriptionTitle', { firstname })}</h3>
      <p>{t('profileDashboardDescriptionText')}</p>
    </div>
  )
})

export default Dashboard
