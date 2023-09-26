import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountWishlistError } from './getAccountWishlistError'

describe('getAccountWishlistErrorTest', () => {
  it('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      accountWishlist: {
        data: [],
        isLoading: false,
        error: 'error'
      }
    }
    expect(getAccountWishlistError(state as StateSchema)).toBe('error')
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountWishlistError(state as StateSchema)).toEqual(undefined)
  })
})
