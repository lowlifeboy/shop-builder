import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileReadOnly } from './getProfileReadOnly'

describe('getProfileReadOnlyTest', () => {
  it('should return readonly', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: false
      }
    }
    expect(getProfileReadOnly(state as StateSchema)).toBe(false)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileReadOnly(state as StateSchema)).toEqual(true)
  })
})
