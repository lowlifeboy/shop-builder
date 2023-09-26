import { type CombinedState, configureStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type To } from '@remix-run/router'
import { type NavigateOptions } from 'react-router/dist/lib/context'

import { type StateSchema, type ThunkExtraArg } from './StateSchema'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { $api } from 'shared/api/api'
import { accountDetailsReducer } from 'entities/AccountDetails'
import { accountAddressesReducer } from 'entities/AccountAddresses'
import { accountOrdersReducer } from 'entities/AccountOrders'
import { accountWishlistReducer } from 'entities/AccountWishlist'

export default function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    accountDetails: accountDetailsReducer,
    accountAddresses: accountAddressesReducer,
    accountOrders: accountOrdersReducer,
    accountWishlist: accountWishlistReducer
  }

  const reducerManager = createReducerManager(rootReducer)

  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg
      }
    })
  })

  // @ts-expect-error add unexpected property
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
