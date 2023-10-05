import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountOrdersData } from './getAccountOrdersData'
import { type AccountOrderSchema } from '../../types/accountOrders'
import { OrderStatus } from 'shared/const/common'

describe('getAccountOrdersDataTest', () => {
  it('should return data', () => {
    const data: AccountOrderSchema[] = [
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
        data
      }
    }
    expect(getAccountOrdersData(state as StateSchema)).toStrictEqual(data)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountOrdersData(state as StateSchema)).toEqual(undefined)
  })
})
