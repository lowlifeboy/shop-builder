import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountDetailsError } from './getAccountDetailsError'

describe('getAccountDetailsErrorTest', () => {
  it('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      accountDetails: {
        error: 'error'
      }
    }
    expect(getAccountDetailsError(state as StateSchema)).toBe('error')
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountDetailsError(state as StateSchema)).toEqual(undefined)
  })
})
