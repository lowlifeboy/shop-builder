import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileDisplayName } from './getProfileDisplayName'

describe('getProfileDisplayNameTest', () => {
  it('should return display name', () => {
    const displayName = 'Test DisplayName'

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          displayName
        }
      }
    }
    expect(getProfileDisplayName(state as StateSchema)).toBe(displayName)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileDisplayName(state as StateSchema)).toEqual('')
  })
})
