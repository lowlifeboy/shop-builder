import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountFirstname } from 'entities/AccountDetails'

describe('getAccountFirstnameTest', () => {
  it('should return data', () => {
    const firstName = 'John'

    const state: DeepPartial<StateSchema> = {
      accountDetails: {
        data: {
          firstName
        }
      }
    }
    expect(getAccountFirstname(state as StateSchema)).toStrictEqual(firstName)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountFirstname(state as StateSchema)).toEqual(undefined)
  })
})
