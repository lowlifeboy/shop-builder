import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountAddressesData } from './getAccountAddressesData'
import { type AccountAddressSchema } from '../../types/accountAddresses'

describe('getAccountAddressesTest', () => {
  it('should return data', () => {
    const data: AccountAddressSchema[] = [
      {
        id: '1',
        name: 'John Dou',
        street: 'Test Street',
        city: 'Test City',
        country: 'Test Country',
        zip: '12333'
      },
      {
        id: '2',
        name: 'John Dou',
        street: 'Test Street 2',
        city: 'Test City 2',
        country: 'Test Country 2',
        zip: '12334'
      }
    ]

    const state: DeepPartial<StateSchema> = {
      accountAddresses: {
        data
      }
    }
    expect(getAccountAddressesData(state as StateSchema)).toStrictEqual(data)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountAddressesData(state as StateSchema)).toEqual({})
  })
})
