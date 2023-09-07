import { type ReactNode } from 'react'
import { Provider } from 'react-redux'
import createReduxStore from '../config/store'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export default function StoreProvider ({ children, initialState }: StoreProviderProps) {
  const store = createReduxStore(initialState as StateSchema)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
