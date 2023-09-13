import { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import DynamicModuleLoader, { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

const initialReducers: ReducersList = { profile: profileReducer }

const ProfilePage = memo(() => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()

  useEffect(() => {
    void dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div>
        <h1>{t('myAccount')}</h1>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  )
})

export default ProfilePage
