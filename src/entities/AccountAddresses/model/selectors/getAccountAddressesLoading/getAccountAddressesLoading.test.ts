import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountAddressesLoading } from './getAccountAddressesLoading'

describe('getAccountAddressesLoadingTest', () => {
  it('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      accountAddresses: {
        isLoading: true
      }
    }
    expect(getAccountAddressesLoading(state as StateSchema)).toBe(true)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountAddressesLoading(state as StateSchema)).toEqual(false)
  })
})
