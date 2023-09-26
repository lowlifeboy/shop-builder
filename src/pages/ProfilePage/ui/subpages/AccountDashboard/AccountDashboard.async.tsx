import { lazy } from 'react'

export const AccountDashboardAsync = lazy(async () => await import('./AccountDashboard'))
