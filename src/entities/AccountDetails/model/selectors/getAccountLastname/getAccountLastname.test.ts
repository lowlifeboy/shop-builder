import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountLastname } from 'entities/AccountDetails'

describe('getAccountLastnameTest', () => {
  it('should return data', () => {
    const lastName = 'Dou'

    const state: DeepPartial<StateSchema> = {
      accountDetails: {
        data: {
          lastName
        }
      }
    }
    expect(getAccountLastname(state as StateSchema)).toStrictEqual(lastName)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountLastname(state as StateSchema)).toEqual(undefined)
  })
})
