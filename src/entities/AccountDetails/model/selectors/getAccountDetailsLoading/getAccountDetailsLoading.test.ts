import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountDetailsLoading } from './getAccountDetailsLoading'

describe('getAccountDetailsLoadingTest', () => {
  it('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      accountDetails: {
        isLoading: true
      }
    }
    expect(getAccountDetailsLoading(state as StateSchema)).toBe(true)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountDetailsLoading(state as StateSchema)).toEqual(false)
  })
})
