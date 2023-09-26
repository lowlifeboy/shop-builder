import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountOrdersError } from './getAccountOrdersError'

describe('getAccountOrdersErrorTest', () => {
  it('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      accountOrders: {
        data: [],
        isLoading: false,
        error: 'error'
      }
    }
    expect(getAccountOrdersError(state as StateSchema)).toBe('error')
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountOrdersError(state as StateSchema)).toEqual(undefined)
  })
})
