import { lazy } from 'react'

export const OrdersAsync = lazy(async () => await import('./Orders'))
