import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileLoading } from './getProfileLoading'

describe('getProfileLoadingTest', () => {
  it('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    }
    expect(getProfileLoading(state as StateSchema)).toBe(true)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileLoading(state as StateSchema)).toEqual(false)
  })
})
