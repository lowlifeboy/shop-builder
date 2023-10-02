import { createSelector } from '@reduxjs/toolkit'
import { getAccountDetailsData } from 'entities/AccountDetails'

export const getAccountEmail = createSelector(
  getAccountDetailsData,
  accountDetailsData => accountDetailsData?.email
)
