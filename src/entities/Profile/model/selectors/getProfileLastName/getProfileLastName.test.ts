import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileLastName } from './getProfileLastName'

describe('getProfileLastNameTest', () => {
  it('should return lastname', () => {
    const lastName = 'Test Lastname'

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          lastName
        }
      }
    }
    expect(getProfileLastName(state as StateSchema)).toBe(lastName)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileLastName(state as StateSchema)).toEqual('')
  })
})
