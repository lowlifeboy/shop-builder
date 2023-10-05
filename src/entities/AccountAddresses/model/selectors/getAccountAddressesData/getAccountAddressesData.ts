import { createSelector } from '@reduxjs/toolkit'
import { getAccountAddresses } from '../getAccountAddresses/getAccountAddresses'

export const getAccountAddressesData = createSelector(
  getAccountAddresses,
  accountAddresses => accountAddresses?.data
)
