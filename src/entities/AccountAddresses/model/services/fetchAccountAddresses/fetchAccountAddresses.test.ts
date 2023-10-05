import { fetchAccountAddresses } from './fetchAccountAddresses'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { type AccountAddressSchema } from '../../types/accountAddresses'

describe('fetchAccountAddressesTest', () => {
  it('success fetch', async () => {
    const resultData: AccountAddressSchema[] = [
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

    const thunk = new TestAsyncThunk(fetchAccountAddresses)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: resultData }))

    const result = await thunk.callThunk(undefined)

    expect(thunk.api.get).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe(resultData)
  })

  it('error fetch', async () => {
    const thunk = new TestAsyncThunk(fetchAccountAddresses)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk(undefined)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('error')
  })
})
