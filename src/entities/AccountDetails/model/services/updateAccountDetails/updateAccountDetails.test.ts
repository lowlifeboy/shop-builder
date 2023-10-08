import { updateAccountDetails } from './updateAccountDetails'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { type AccountDetailsSchema } from '../../types/accountDetails'

describe('updateAccountDetailsTest', () => {
  it('success update', async () => {
    const data: AccountDetailsSchema = {
      firstName: 'Kenny',
      lastName: 'White',
      displayName: 'Kenny White',
      email: 'kennywhite@me.com'
    }

    const thunk = new TestAsyncThunk(updateAccountDetails)
    thunk.api.put.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk(data)

    expect(thunk.api.put).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe(data)
  })

  it('error update', async () => {
    const data: AccountDetailsSchema = {
      firstName: 'Kenny',
      lastName: 'White',
      displayName: 'Kenny White',
      email: 'kennywhite@me.com'
    }

    const thunk = new TestAsyncThunk(updateAccountDetails)
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk(data)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('error')
  })
})
