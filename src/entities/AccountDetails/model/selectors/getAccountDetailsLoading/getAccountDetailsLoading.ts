import { createSelector } from '@reduxjs/toolkit'
import { getAccountDetails } from '../getAccountDetails/getAccountDetails'

export const getAccountDetailsLoading = createSelector(
  getAccountDetails,
  accountDetails => accountDetails?.isLoading ?? false
)
