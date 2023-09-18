import { lazy } from 'react'

export const DashboardAsync = lazy(async () => await import('./Dashboard'))
