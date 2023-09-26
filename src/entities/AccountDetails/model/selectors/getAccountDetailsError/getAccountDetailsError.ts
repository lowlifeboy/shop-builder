import { createSelector } from '@reduxjs/toolkit'
import { getAccountDetails } from '../getAccountDetails/getAccountDetails'

export const getAccountDetailsError = createSelector(
  getAccountDetails,
  accountDetails => accountDetails?.error
)
