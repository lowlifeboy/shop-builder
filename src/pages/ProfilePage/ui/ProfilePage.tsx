import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import DynamicModuleLoader, { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const initialReducers: ReducersList = { profile: profileReducer }

const ProfilePage = memo(() => {
  const { t } = useTranslation()

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div>
        <h1>{t('myAccount')}</h1>
      </div>
    </DynamicModuleLoader>
  )
})

export default ProfilePage
