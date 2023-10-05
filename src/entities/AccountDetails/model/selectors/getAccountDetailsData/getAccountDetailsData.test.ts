import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountDetailsData } from './getAccountDetailsData'
import { type AccountDetailsSchema } from '../../types/accountDetails'

describe('getAccountDetailsDataTest', () => {
  it('should return data', () => {
    const data: AccountDetailsSchema = {
      email: 'test@mail.com',
      firstName: 'Test Firstname',
      lastName: 'Test lastname',
      displayName: 'Test Display Name'
    }

    const state: DeepPartial<StateSchema> = {
      accountDetails: {
        data
      }
    }
    expect(getAccountDetailsData(state as StateSchema)).toStrictEqual(data)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountDetailsData(state as StateSchema)).toEqual(undefined)
  })
})
