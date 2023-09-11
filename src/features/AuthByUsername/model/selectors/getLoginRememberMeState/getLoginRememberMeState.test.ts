import { type DeepPartial } from '@reduxjs/toolkit'

import { type StateSchema } from 'app/providers/StoreProvider'
import getLoginRememberMeState
  from 'features/AuthByUsername/model/selectors/getLoginRememberMeState/getLoginRememberMeState'

describe('getLoginRememberMeStateTest', () => {
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
    expect(getLoginRememberMeState(state as StateSchema)).toEqual(true)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginRememberMeState(state as StateSchema)).toEqual(undefined)
  })
})
