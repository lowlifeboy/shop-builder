import { createSelector } from '@reduxjs/toolkit'
import { getAccountOrders } from '../getAccountOrders/getAccountOrders'

export const getAccountOrdersError = createSelector(
  getAccountOrders,
  accountOrders => accountOrders?.error
)
