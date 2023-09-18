import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'

import cls from './ProfileLayout.module.scss'

import { getProfileError, getProfileLoading } from 'entities/Profile'
import PageLoader from 'shared/ui/PageLoader/PageLoader'
import ProfileLayoutContainer from './ProfileLayoutContainer/ProfileLayoutContainer'
import AppErrorText, { TextAlign } from 'shared/ui/AppErrorText/AppErrorText'

const ProfileLayout = () => {
  const { t } = useTranslation()

  const isLoading = useSelector(getProfileLoading)
  const error = useSelector(getProfileError)

  if (isLoading) {
    return (
      <ProfileLayoutContainer>
        <div className={cls.loaderWrapper}>
          <PageLoader />
        </div>
      </ProfileLayoutContainer>
    )
  }

  if (error) {
    return (
      <ProfileLayoutContainer>
        <div className={cls.errorWrapper}>
          <AppErrorText text={t('errorText')} title={t('errorTitle')} align={TextAlign.CENTER} />
        </div>
      </ProfileLayoutContainer>
    )
  }

  return (
    <ProfileLayoutContainer>
      <Outlet />
    </ProfileLayoutContainer>
  )
}

export default ProfileLayout
