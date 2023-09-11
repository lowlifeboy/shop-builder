import { type ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { type Reducer } from '@reduxjs/toolkit'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
  children?: ReactNode
}

export default function DynamicModuleLoader ({ reducers, removeAfterUnmount, children }: DynamicModuleLoaderProps) {
  const dispatch = useDispatch()
  const store = useStore() as ReduxStoreWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
          store.reducerManager.remove(name)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {children}
    </>
  )
}
