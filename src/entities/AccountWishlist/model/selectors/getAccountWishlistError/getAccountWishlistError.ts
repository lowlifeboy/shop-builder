import { createSelector } from '@reduxjs/toolkit'
import { getAccountWishlist } from '../getAccountWishlist/getAccountWishlist'

export const getAccountWishlistError = createSelector(
  getAccountWishlist,
  accountWishlist => accountWishlist?.error
)
