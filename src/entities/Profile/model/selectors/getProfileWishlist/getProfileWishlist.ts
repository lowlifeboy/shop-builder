import { createSelector } from '@reduxjs/toolkit'
import { getProfileData } from '../getProfileData/getProfileData'

export const getProfileWishlist = createSelector(
  getProfileData,
  data => data?.wishlist ?? []
)
