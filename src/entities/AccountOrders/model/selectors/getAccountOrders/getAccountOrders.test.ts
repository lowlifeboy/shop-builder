import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountOrders } from './getAccountOrders'
import { type AccountOrderSchema } from '../../types/accountOrders'
import { OrderStatus } from 'shared/const/common'

describe('getAccountOrdersTests', () => {
  it('should return 2 orders', () => {
    const orders: AccountOrderSchema[] = [
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

    const state: DeepPartial<StateSchema> = {
      accountOrders: {
        data: orders,
        isLoading: false,
        error: undefined
      }
    }
    expect(getAccountOrders(state as StateSchema)).toStrictEqual(state.accountOrders)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountOrders(state as StateSchema)).toEqual(undefined)
  })
})
