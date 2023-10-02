import { createSelector } from '@reduxjs/toolkit'
import { getAccountDetailsData } from 'entities/AccountDetails'

export const getAccountFirstname = createSelector(
  getAccountDetailsData,
  accountDetailsData => accountDetailsData?.firstName
)
