import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountWishlistLoading } from './getAccountWishlistLoading'

describe('getAccountWishlistLoadingTest', () => {
  it('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      accountWishlist: {
        isLoading: true
      }
    }
    expect(getAccountWishlistLoading(state as StateSchema)).toBe(true)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountWishlistLoading(state as StateSchema)).toEqual(false)
  })
})
