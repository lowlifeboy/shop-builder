import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileWishlist } from './getProfileWishlist'
import { type Product } from '../../types/profile'

describe('getProfileWishlistTest', () => {
  it('should return wishlist', () => {
    const wishlist: Product[] = [
      {
        id: '1',
        price: 574,
        title: 'Easy Iron Button Down Oxford Shirt',
        properties: {
          size: 'XS - 4XL',
          color: 'Grey Marl'
        },
        preview: 'https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/315x472/D38591s.jpg'
      },
      {
        id: '2',
        price: 1292,
        title: 'Shower Resistant Duratrek Anorak Jacket',
        properties: {
          size: 'M, XL',
          color: 'Green'
        },
        preview: 'https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G88/shotview-315x472/2029/C82-998s.jpg'
      },
      {
        id: '3',
        price: 1866,
        title: 'Jersey Sleeve Puffer Jacket',
        properties: {
          size: 'XS - 4XL',
          color: 'Navy Blue / Grey'
        },
        preview: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/D45800s.jpg'
      },
      {
        id: '3',
        price: 746,
        title: 'Joggers',
        properties: {
          size: 'XS - XL',
          color: 'Charcoal Grey With Stag Logo'
        },
        preview: 'https://xcdn.next.co.uk/COMMON/Items/Default/Default/Publications/G26/shotview/2089/M50-789s.jpg'
      }
    ]

    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          wishlist
        }
      }
    }
    expect(getProfileWishlist(state as StateSchema)).toStrictEqual(wishlist)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileWishlist(state as StateSchema)).toEqual([])
  })
})
