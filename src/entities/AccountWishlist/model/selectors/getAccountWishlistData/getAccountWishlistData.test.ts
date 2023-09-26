import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountWishlistData } from './getAccountWishlistData'

import { type Product } from 'entities/Product'

describe('getAccountWishlistTest', () => {
  it('should return data', () => {
    const data: Product[] = [
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

    const state: DeepPartial<StateSchema> = {
      accountWishlist: {
        data
      }
    }
    expect(getAccountWishlistData(state as StateSchema)).toStrictEqual(data)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountWishlistData(state as StateSchema)).toEqual({})
  })
})
