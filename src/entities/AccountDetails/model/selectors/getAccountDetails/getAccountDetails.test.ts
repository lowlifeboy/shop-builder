import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountDetails } from './getAccountDetails'
import { type AccountDetailsSchema } from '../../types/accountDetails'

describe('getAccountDetailsTest', () => {
  it('should return data', () => {
    const data: AccountDetailsSchema = {
      id: '1',
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
    expect(getAccountDetails(state as StateSchema)).toStrictEqual(data)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountDetails(state as StateSchema)).toEqual({})
  })
})
