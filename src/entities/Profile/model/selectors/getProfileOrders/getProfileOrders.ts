import { createSelector } from '@reduxjs/toolkit'
import { getProfileData } from '../getProfileData/getProfileData'

export const getProfileOrders = createSelector(
  getProfileData,
  data => data?.orders ?? []
)
