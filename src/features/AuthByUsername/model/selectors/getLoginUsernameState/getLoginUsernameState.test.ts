import { type DeepPartial } from '@reduxjs/toolkit'

import { type StateSchema } from 'app/providers/StoreProvider'
import getLoginUsernameState from './getLoginUsernameState'

describe('(getLoginUsernameStateTest', () => {
  it('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'username',
        password: 'password',
        rememberMe: true,
        isLoading: false,
        error: 'error'
      }
    }
    expect(getLoginUsernameState(state as StateSchema)).toEqual('username')
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsernameState(state as StateSchema)).toEqual(undefined)
  })
})
