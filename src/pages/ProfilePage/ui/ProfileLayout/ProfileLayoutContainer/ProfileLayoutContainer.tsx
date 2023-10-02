import React, { type ReactNode } from 'react'

import cls from './ProfileLayoutContainer.module.scss'

import ProfilePageHeader from '../../ProfilePageHeader/ProfilePageHeader'
import ProfileSidebar from '../../ProfileSidebar/ProfileSidebar'
import ErrorBoundary from 'shared/lib/errorBoundary/ErrorBoundary'

interface ProfileLayoutContainerProps {
  children?: ReactNode
}

const ProfileLayoutContainer = ({ children }: ProfileLayoutContainerProps) => {
  console.log('ProfileLayoutContainer render')

  return (
    <div className={cls.profileLayoutContainer}>
      <div className={cls.profileLayoutWrapper}>
        <ProfilePageHeader />
        <div className={cls.profileLayoutRow}>
          <ProfileSidebar />
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </div>
      </div>
    </div>
  )
}

export default ProfileLayoutContainer
