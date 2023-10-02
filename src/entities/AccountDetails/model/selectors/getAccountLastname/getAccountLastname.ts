import { createSelector } from '@reduxjs/toolkit'
import { getAccountDetailsData } from 'entities/AccountDetails'

export const getAccountLastname = createSelector(
  getAccountDetailsData,
  accountDetailsData => accountDetailsData?.lastName
)
