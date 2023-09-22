import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { type Profile } from '../../types/profile'

describe('getProfileDataTest', () => {
  it('should return data', () => {
    const data: Profile = {
      email: 'test@mail.com',
      firstName: 'Test Firstname',
      lastName: 'Test lastname',
      displayName: 'Test Display Name',
      avatar: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
      addresses: [],
      orders: [],
      wishlist: []
    }

    const state: DeepPartial<StateSchema> = {
      profile: {
        data
      }
    }
    expect(getProfileData(state as StateSchema)).toStrictEqual(data)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual({})
  })
})
