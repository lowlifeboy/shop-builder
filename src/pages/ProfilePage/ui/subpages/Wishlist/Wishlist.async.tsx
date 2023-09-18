import { lazy } from 'react'

export const WishlistAsync = lazy(async () => await import('./Wishlist'))
