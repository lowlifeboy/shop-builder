import { createSelector } from '@reduxjs/toolkit'
import { getAccountDetailsData } from '../getAccountDetailsData/getAccountDetailsData'

export const getAccountAvatar = createSelector(
  getAccountDetailsData,
  accountDetailsData => accountDetailsData?.avatar
)
