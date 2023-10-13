import React, { memo, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector, useStore } from 'react-redux'

import ProfileLayoutContainer from './ProfileLayoutContainer/ProfileLayoutContainer'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import DynamicModuleLoader, { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { accountOrdersReducer } from 'entities/AccountOrders'
import { accountWishlistReducer } from 'entities/AccountWishlist'
import { getUserAuthData } from 'entities/User'
import NotAuthPage from 'pages/NotAuthPage/NotAuthPage'

const initialReducers: ReducersList = {
  accountOrders: accountOrdersReducer,
  accountWishlist: accountWishlistReducer
}

const ProfileLayout = memo(() => {
  const store = useStore() as ReduxStoreWithManager

  const isAuth = useSelector(getUserAuthData)

  useEffect(() => {
    return () => {
      store.reducerManager.remove('accountOrders')
      store.reducerManager.remove('accountWishlist')
    }
  }, [store.reducerManager])

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      {isAuth
        ? (
            <ProfileLayoutContainer>
              <Outlet/>
            </ProfileLayoutContainer>
          )
        : <NotAuthPage />}
    </DynamicModuleLoader>
  )
})

export default ProfileLayout
