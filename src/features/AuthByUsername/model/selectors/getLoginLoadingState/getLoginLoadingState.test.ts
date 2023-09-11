import { type DeepPartial } from '@reduxjs/toolkit'

import { type StateSchema } from 'app/providers/StoreProvider'
import getLoginLoadingState from './getLoginLoadingState'

describe('getLoginLoadingStateTest', () => {
  it('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'username',
        password: 'password',
        rememberMe: true,
        isLoading: true,
        error: 'error'
      }
    }
    expect(getLoginLoadingState(state as StateSchema)).toEqual(true)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginLoadingState(state as StateSchema)).toEqual(undefined)
  })
})
