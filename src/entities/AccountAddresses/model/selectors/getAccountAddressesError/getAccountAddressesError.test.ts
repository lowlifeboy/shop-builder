import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountAddressesError } from './getAccountAddressesError'

describe('getAccountAddressesErrorTest', () => {
  it('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      accountAddresses: {
        error: 'error'
      }
    }
    expect(getAccountAddressesError(state as StateSchema)).toBe('error')
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountAddressesError(state as StateSchema)).toEqual(undefined)
  })
})
