import { useTranslation } from 'react-i18next'

import cls from './ProfilePageHeader.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'

interface ProfilePageHeaderProps {
  className?: string
}

const ProfilePageHeader = memo(({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile')

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <h1>{t('myAccount')}</h1>
    </div>
  )
})

export default ProfilePageHeader
