import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileEmail } from './getProfileEmail'

describe('getProfileEmailTest', () => {
  it('should return email', () => {
    const email = 'test@mail.com'

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          email
        }
      }
    }
    expect(getProfileEmail(state as StateSchema)).toBe(email)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileEmail(state as StateSchema)).toEqual('')
  })
})
