import { createSelector } from '@reduxjs/toolkit'
import { getAccountDetailsData } from 'entities/AccountDetails'

export const getAccountDisplayName = createSelector(
  getAccountDetailsData,
  accountDetailsData => accountDetailsData?.displayName
)
