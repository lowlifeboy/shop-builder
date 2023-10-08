import { userActions, userReducer } from '../slice/userSlice'
import { type UserSchema } from '../types/userSchema'

describe('userSliceTest', () => {
  it('test set authData', () => {
    const state: DeepPartial<UserSchema> = {}

    expect(userReducer(
      state as UserSchema,
      userActions.setAuthData({ id: '123', username: '123' }))
    ).toEqual({ authData: { id: '123', username: '123' } })
  })

  it('test init authData', () => {
    const state: DeepPartial<UserSchema> = {}

    // const setLSItem = jest.spyOn(Storage.prototype, 'setItem')
    const getLSItem = jest.spyOn(Storage.prototype, 'getItem')

    getLSItem.mockReturnValue(JSON.stringify({ id: '123', username: '123' }))

    expect(userReducer(
      state as UserSchema,
      userActions.initAuthData())
    ).toEqual({ authData: { id: '123', username: '123' } })
  })

  it('test logout', () => {
    const state: DeepPartial<UserSchema> = {
      authData: { id: '123', username: '123' }
    }

    const removeLSItem = jest.spyOn(Storage.prototype, 'removeItem')

    removeLSItem.mockReturnValue(undefined)

    expect(userReducer(
      state as UserSchema,
      userActions.logout())
    ).toEqual({ authData: undefined })
  })
})
