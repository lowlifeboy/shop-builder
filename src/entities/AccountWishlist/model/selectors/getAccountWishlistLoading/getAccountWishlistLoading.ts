import { createSelector } from '@reduxjs/toolkit'
import { getAccountWishlist } from '../getAccountWishlist/getAccountWishlist'

export const getAccountWishlistLoading = createSelector(
  getAccountWishlist,
  accountWishlist => accountWishlist?.isLoading ?? false
)
