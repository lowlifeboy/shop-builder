import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileFirstName } from './getProfileFirstName'

describe('getProfileFirstNameTest', () => {
  it('should return firstname', () => {
    const firstName = 'Test Firstname'

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          firstName
        }
      }
    }
    expect(getProfileFirstName(state as StateSchema)).toBe(firstName)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileFirstName(state as StateSchema)).toEqual('')
  })
})
