import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileAddresses } from './getProfileAddresses'
import { type Address } from '../../types/profile'

describe('getProfileAddressesTests', () => {
  it('should return 2 addresses', () => {
    const addresses: Address[] = [
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
      profile: {
        form: {
          addresses
        }
      }
    }
    expect(getProfileAddresses(state as StateSchema)).toStrictEqual(addresses)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileAddresses(state as StateSchema)).toEqual([])
  })
})
