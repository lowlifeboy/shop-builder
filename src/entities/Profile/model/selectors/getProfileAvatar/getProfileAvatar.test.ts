import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileAvatar } from './getProfileAvatar'

describe('getProfileAvatarTest', () => {
  it('should return avatar', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          avatar: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg'
        }
      }
    }
    expect(getProfileAvatar(state as StateSchema)).toBe('https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg')
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileAvatar(state as StateSchema)).toEqual('')
  })
})
