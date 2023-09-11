import {
  type AnyAction,
  type CombinedState,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject
} from '@reduxjs/toolkit'

import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
  user: UserSchema

  // Async reducers
  loginForm?: LoginSchema
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
