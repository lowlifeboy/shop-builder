import React, { type ReactNode, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'

import cls from './ProfileLayoutContainer.module.scss'

import ProfilePageHeader from '../../ProfilePageHeader/ProfilePageHeader'
import ProfileSidebar from '../../ProfileSidebar/ProfileSidebar'
import { fetchProfileData } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import ErrorBoundary from 'shared/lib/errorBoundary/ErrorBoundary'
import { getProfileFirstName } from 'entities/Profile/model/selectors/getProfileFirstName/getProfileFirstName'

interface ProfileLayoutContainerProps {
  children?: ReactNode
}

const ProfileLayoutContainer = ({ children }: ProfileLayoutContainerProps) => {
  const dispatch = useAppDispatch()

  const firstname = useSelector(getProfileFirstName)

  const getProfileData = useCallback(() => {
    void dispatch(fetchProfileData())
  }, [dispatch])

  useEffect(() => {
    if (firstname !== undefined) {
      getProfileData()
    }
  }, [firstname, getProfileData])

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
