import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountDisplayName } from 'entities/AccountDetails'

describe('getAccountDisplayNameTest', () => {
  it('should return data', () => {
    const displayName = 'John Dou'

    const state: DeepPartial<StateSchema> = {
      accountDetails: {
        data: {
          displayName
        }
      }
    }
    expect(getAccountDisplayName(state as StateSchema)).toStrictEqual(displayName)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountDisplayName(state as StateSchema)).toEqual(undefined)
  })
})
