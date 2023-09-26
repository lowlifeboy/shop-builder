import React from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'
import ProfileLayoutContainer from './ProfileLayoutContainer/ProfileLayoutContainer'

const ProfileLayout = () => {
  const { t } = useTranslation()

  // if (isLoading) {
  //   return (
  //     <ProfileLayoutContainer>
  //       <div className={cls.loaderWrapper}>
  //         <PageLoader />
  //       </div>
  //     </ProfileLayoutContainer>
  //   )
  // }
  //
  // if (error) {
  //   return (
  //     <ProfileLayoutContainer>
  //       <div className={cls.errorWrapper}>
  //         <AppErrorText text={t('errorText')} title={t('errorTitle')} align={TextAlign.CENTER} />
  //       </div>
  //     </ProfileLayoutContainer>
  //   )
  // }

  return (
    <ProfileLayoutContainer>
      <Outlet />
    </ProfileLayoutContainer>
  )
}

export default ProfileLayout
