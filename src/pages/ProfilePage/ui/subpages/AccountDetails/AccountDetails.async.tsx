import { lazy } from 'react'

export const AccountDetailsAsync = lazy(async () => await import('./AccountDetails'))
