import { type StateSchema } from 'app/providers/StoreProvider'
import getUserAuthData from './getUserAuthData'

describe('getUserAuthDataTests', () => {
  it('should return user auth data', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'admin'
        }
      }
    }
    expect(getUserAuthData(state as StateSchema)).toStrictEqual(state.user?.authData)
  })

  it('should work with empty auth state', () => {
    const state: DeepPartial<StateSchema> = { user: {} }
    expect(getUserAuthData(state as StateSchema)).toEqual(undefined)
  })
})
