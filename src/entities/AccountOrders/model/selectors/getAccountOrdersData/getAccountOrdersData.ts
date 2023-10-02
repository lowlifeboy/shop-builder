import { createSelector } from '@reduxjs/toolkit'
import { getAccountOrders } from '../getAccountOrders/getAccountOrders'

export const getAccountOrdersData = createSelector(
  getAccountOrders,
  accountOrders => accountOrders?.data
)
