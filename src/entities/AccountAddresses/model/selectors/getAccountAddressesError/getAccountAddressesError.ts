import { createSelector } from '@reduxjs/toolkit'
import { getAccountAddresses } from '../getAccountAddresses/getAccountAddresses'

export const getAccountAddressesError = createSelector(
  getAccountAddresses,
  accountAddresses => accountAddresses?.error
)
