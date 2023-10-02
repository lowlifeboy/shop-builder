import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountEmail } from 'entities/AccountDetails'

describe('getAccountEmailTest', () => {
  it('should return data', () => {
    const email = 'john.dou@mail.com'

    const state: DeepPartial<StateSchema> = {
      accountDetails: {
        data: {
          email
        }
      }
    }
    expect(getAccountEmail(state as StateSchema)).toStrictEqual(email)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountEmail(state as StateSchema)).toEqual(undefined)
  })
})
