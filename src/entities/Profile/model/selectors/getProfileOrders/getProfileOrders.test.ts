import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileOrders } from './getProfileOrders'
import { type Order } from '../../types/profile'

describe('getProfileOrdersTest', () => {
  it('should return orders', () => {
    const orders: Order[] = [
      {
        id: '1',
        productId: '1',
        quantity: 1,
        totalPrice: 100,
        date: '2021-01-01',
        // @ts-expect-error equal to enum OrderStatus option
        status: 'delivered'
      },
      {
        id: '2',
        productId: '2',
        quantity: 2,
        totalPrice: 200,
        date: '2021-01-02',
        // @ts-expect-error equal to enum OrderStatus option
        status: 'rejected'
      }
    ]

    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          orders
        }
      }
    }
    expect(getProfileOrders(state as StateSchema)).toStrictEqual(orders)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileOrders(state as StateSchema)).toEqual([])
  })
})
