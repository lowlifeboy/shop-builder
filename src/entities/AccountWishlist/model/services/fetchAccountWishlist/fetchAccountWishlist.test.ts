import { fetchAccountWishlist } from './fetchAccountWishlist'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { type Product } from 'entities/Product'

describe('fetchAccountWishlistTest', () => {
  it('success fetch', async () => {
    const resultData: Product[] = [
      {
        id: '1',
        title: 'title',
        price: 100,
        preview: 'preview',
        properties: {
          size: 'size',
          color: 'color'
        }
      },
      {
        id: '2',
        title: 'title 2',
        price: 50,
        preview: 'preview 2',
        properties: {
          size: 'size',
          color: 'color'
        }
      }
    ]

    const thunk = new TestAsyncThunk(fetchAccountWishlist)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: resultData }))

    const result = await thunk.callThunk(undefined)

    expect(thunk.api.get).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe(resultData)
  })

  it('error fetch', async () => {
    const thunk = new TestAsyncThunk(fetchAccountWishlist)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk(undefined)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('error')
  })
})
