import { type StateSchema } from 'app/providers/StoreProvider'
import getLoginErrorState from './getLoginErrorState'

describe('getLoginErrorStateTest', () => {
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
    expect(getLoginErrorState(state as StateSchema)).toEqual('error')
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginErrorState(state as StateSchema)).toEqual(undefined)
  })
})
