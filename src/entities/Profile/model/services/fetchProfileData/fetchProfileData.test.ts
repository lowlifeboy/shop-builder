import { fetchProfileData } from './fetchProfileData'
import { type Profile } from '../../types/profile'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

describe('fetchProfileDataTest', () => {
  it('success fetch', async () => {
    const profileResult: Profile = {
      id: '1',
      firstName: 'Kenny',
      lastName: 'White',
      displayName: 'Kenny White',
      email: 'kennywhite@me.com',
      avatar: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg'
    }

    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve(profileResult))

    const result = await thunk.callThunk(undefined)

    console.log('result', result)

    expect(thunk.api.get).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe(profileResult)
  })

  it('error fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk(undefined)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('loginError')
  })
})
