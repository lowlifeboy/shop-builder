import {
  type AnyAction,
  type CombinedState,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject
} from '@reduxjs/toolkit'
import { type Dispatch } from 'redux'
import { type AxiosInstance } from 'axios'
import { type To } from '@remix-run/router'
import { type NavigateOptions } from 'react-router'

import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUsername'
import { type AccountDetailsState } from 'entities/AccountDetails'
import { type AccountAddressesState } from 'entities/AccountAddresses'
import { type AccountOrdersState } from 'entities/AccountOrders'
import { type AccountWishlistState } from 'entities/AccountWishlist'
import { type ArticleDetailsState } from 'entities/Article'

export interface StateSchema {
  user: UserSchema
  accountDetails: AccountDetailsState
  accountAddresses: AccountAddressesState

  // Async reducers
  loginForm?: LoginSchema
  accountOrders?: AccountOrdersState
  accountWishlist?: AccountWishlistState
  articleDetails?: ArticleDetailsState
}

export type StateSchemaKey = keyof StateSchema

export interface ReducersManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducersManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  extra: ThunkExtraArg
  rejectValue: T
  state: StateSchema
  dispatch?: Dispatch
}
