import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import getLoginPasswordState from './getLoginPasswordState'

describe('getLoginPasswordStateTest', () => {
  it('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'username',
        password: 'password',
        rememberMe: true,
        isLoading: false,
        error: 'error'
      }
    }
    expect(getLoginPasswordState(state as StateSchema)).toEqual('password')
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginPasswordState(state as StateSchema)).toEqual(undefined)
  })
})
