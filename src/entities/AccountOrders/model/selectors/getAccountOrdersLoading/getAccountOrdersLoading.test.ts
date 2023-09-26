import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountOrdersLoading } from './getAccountOrdersLoading'

describe('getAccountOrdersLoadingTest', () => {
  it('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      accountOrders: {
        isLoading: true
      }
    }
    expect(getAccountOrdersLoading(state as StateSchema)).toBe(true)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountOrdersLoading(state as StateSchema)).toEqual(false)
  })
})
