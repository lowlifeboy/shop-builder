import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'

export default function StoreDecorator (state: DeepPartial<StateSchema>) {
  return function (Story: any) {
    return (
      <StoreProvider initialState={state}>
        <Story />
      </StoreProvider>
    )
  }
}
