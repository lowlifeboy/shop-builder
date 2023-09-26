import { createSelector } from '@reduxjs/toolkit'
import { getAccountOrders } from '../getAccountOrders/getAccountOrders'

export const getAccountOrdersLoading = createSelector(
  getAccountOrders,
  accountOrders => accountOrders?.isLoading ?? false
)
