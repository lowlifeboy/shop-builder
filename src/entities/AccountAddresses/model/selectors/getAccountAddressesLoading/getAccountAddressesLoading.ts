import { createSelector } from '@reduxjs/toolkit'
import { getAccountAddresses } from '../getAccountAddresses/getAccountAddresses'

export const getAccountAddressesLoading = createSelector(
  getAccountAddresses,
  accountAddresses => accountAddresses?.isLoading ?? false
)
