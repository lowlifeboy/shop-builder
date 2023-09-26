import { fetchAccountDetails } from './fetchAccountDetails'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { type AccountDetailsSchema } from '../../types/accountDetails'

describe('fetchAccountDetailsTest', () => {
  it('success fetch', async () => {
    const resultData: AccountDetailsSchema = {
      id: '1',
      firstName: 'Kenny',
      lastName: 'White',
      displayName: 'Kenny White',
      email: 'kennywhite@me.com'
    }

    const thunk = new TestAsyncThunk(fetchAccountDetails)
    thunk.api.get.mockReturnValue(Promise.resolve(resultData))

    const result = await thunk.callThunk(undefined)

    expect(thunk.api.get).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe(resultData)
  })

  it('error fetch', async () => {
    const thunk = new TestAsyncThunk(fetchAccountDetails)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk(undefined)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('loginError')
  })
})
