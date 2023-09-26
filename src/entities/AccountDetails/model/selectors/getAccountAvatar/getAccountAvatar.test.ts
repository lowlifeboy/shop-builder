import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountAvatar } from './getAccountAvatar'

describe('getAccountAvatarTest', () => {
  it('should return data', () => {
    const avatarUrl = 'https://avatars.dicebear.com/api/avataaars/test.svg'

    const state: DeepPartial<StateSchema> = {
      accountDetails: {
        data: {
          avatar: avatarUrl
        }
      }
    }
    expect(getAccountAvatar(state as StateSchema)).toStrictEqual(avatarUrl)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountAvatar(state as StateSchema)).toEqual(undefined)
  })
})
