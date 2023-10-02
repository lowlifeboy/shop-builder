import { createSelector } from '@reduxjs/toolkit'
import { getAccountWishlist } from '../getAccountWishlist/getAccountWishlist'

export const getAccountWishlistData = createSelector(
  getAccountWishlist,
  accountWishlist => accountWishlist?.data
)
