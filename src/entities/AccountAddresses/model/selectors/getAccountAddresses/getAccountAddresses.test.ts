import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountAddresses } from './getAccountAddresses'
import { type AccountAddressSchema } from '../../types/accountAddresses'

describe('getAccountAddressesTests', () => {
  it('should return 2 addresses', () => {
    const addresses: AccountAddressSchema[] = [
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
        data: addresses,
        isLoading: false,
        error: undefined
      }
    }
    expect(getAccountAddresses(state as StateSchema)).toStrictEqual(state.accountAddresses)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountAddresses(state as StateSchema)).toEqual(undefined)
  })
})
