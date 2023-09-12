import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'

import { type StateSchema } from './StateSchema'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'

export default function createReduxStore (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer
  }

  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })

  // @ts-expect-error add unexpected property
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
