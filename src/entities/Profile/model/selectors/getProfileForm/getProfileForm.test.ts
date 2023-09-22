import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'
import { type Profile } from '../../types/profile'

describe('getProfileFormTest', () => {
  it('should return form', () => {
    const form: Profile = {
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
        form
      }
    }
    expect(getProfileForm(state as StateSchema)).toStrictEqual(form)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual({})
  })
})
