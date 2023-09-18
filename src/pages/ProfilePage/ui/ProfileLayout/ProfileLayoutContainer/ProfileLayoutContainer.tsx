import { useSelector } from 'react-redux'
import React, { type ReactNode, useLayoutEffect } from 'react'

import cls from './ProfileLayoutContainer.module.scss'

import ProfilePageHeader from '../../ProfilePageHeader/ProfilePageHeader'
import ProfileSidebar from '../../ProfileSidebar/ProfileSidebar'
import { fetchProfileData, getProfileForm } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import ErrorBoundary from 'shared/lib/errorBoundary/ErrorBoundary'

interface ProfileLayoutContainerProps {
  children?: ReactNode
}

const ProfileLayoutContainer = ({ children }: ProfileLayoutContainerProps) => {
  const dispatch = useAppDispatch()

  const form = useSelector(getProfileForm)

  useLayoutEffect(() => {
    if (!form) {
      void dispatch(fetchProfileData())
    }
  }, [form, dispatch])

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
