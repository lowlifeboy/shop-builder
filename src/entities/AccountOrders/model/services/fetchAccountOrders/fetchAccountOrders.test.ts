import { fetchAccountOrders } from './fetchAccountOrders'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { type AccountOrderSchema } from '../../types/accountOrders'
import { OrderStatus } from 'shared/const/common'

describe('fetchAccountOrdersTest', () => {
  it('success fetch', async () => {
    const resultData: AccountOrderSchema[] = [
      {
        id: '1',
        productId: '1',
        quantity: 2,
        totalPrice: 48,
        date: '2021-01-01',
        status: OrderStatus.DELIVERED
      },
      {
        id: '2',
        productId: '2',
        quantity: 3,
        totalPrice: 39,
        date: '2021-01-02',
        status: OrderStatus.REJECTED
      }
    ]

    const thunk = new TestAsyncThunk(fetchAccountOrders)
    thunk.api.get.mockReturnValue(Promise.resolve(resultData))

    const result = await thunk.callThunk(undefined)

    expect(thunk.api.get).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe(resultData)
  })

  it('error fetch', async () => {
    const thunk = new TestAsyncThunk(fetchAccountOrders)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk(undefined)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('loginError')
  })
})
