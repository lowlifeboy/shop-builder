import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from 'features/AuthByUsername'
import { profileReducer } from 'entities/Profile'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer
}

export default function StoreDecorator (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) {
  return function (Story: any) {
    return (
      <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <Story />
      </StoreProvider>
    )
  }
}
