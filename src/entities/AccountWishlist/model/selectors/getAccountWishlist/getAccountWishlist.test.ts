import { type StateSchema } from 'app/providers/StoreProvider'
import { getAccountWishlist } from './getAccountWishlist'

import { type Product } from 'entities/Product'

describe('getAccountWishlistTests', () => {
  it('should return 2 orders', () => {
    const wishlist: Product[] = [
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
        data: wishlist,
        isLoading: false,
        error: undefined
      }
    }
    expect(getAccountWishlist(state as StateSchema)).toStrictEqual(state.accountWishlist)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAccountWishlist(state as StateSchema)).toEqual(undefined)
  })
})
