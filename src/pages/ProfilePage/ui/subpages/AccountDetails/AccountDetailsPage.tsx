import cls from './AccountDetailsPage.module.scss'
import {
  AccountDetailsForm,
  getProfileForm,
  getProfileReadOnly,
  profileActions,
  updateProfileData
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import React, { useCallback } from 'react'

const AccountDetailsPage = () => {
  const dispatch = useAppDispatch()

  const form = useSelector(getProfileForm)
  const readOnly = useSelector(getProfileReadOnly)

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSaveChanges = useCallback(() => {
    void dispatch(updateProfileData())
  }, [dispatch])

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstName: value ?? '' }))
  }, [dispatch])

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastName: value ?? '' }))
  }, [dispatch])

  const onChangeDisplayName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ displayName: value ?? '' }))
  }, [dispatch])

  const onChangeEmail = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ email: value ?? '' }))
  }, [dispatch])

  return (
    <div className={cls.profilePage}>
      <div className={cls.profilePageWrapper}>
        <AccountDetailsForm
          data={form}
          readOnly={readOnly}
          onEdit={onEdit}
          onCancelEdit={onCancelEdit}
          onSaveChanges={onSaveChanges}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeDisplayName={onChangeDisplayName}
          onChangeEmail={onChangeEmail}
        />
        <div className={cls.emptySpace} />
      </div>
    </div>
  )
}

export default AccountDetailsPage
