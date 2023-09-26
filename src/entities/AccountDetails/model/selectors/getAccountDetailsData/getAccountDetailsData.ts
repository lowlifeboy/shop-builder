import { createSelector } from '@reduxjs/toolkit'
import { getAccountDetails } from '../getAccountDetails/getAccountDetails'

export const getAccountDetailsData = createSelector(
  getAccountDetails,
  accountDetails => accountDetails.data
)
