import { lazy } from 'react'

export const AccountOrdersAsync = lazy(async () => await import('./AccountOrders'))
