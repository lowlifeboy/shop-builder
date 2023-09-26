import { lazy } from 'react'

export const AccountAddressesAsync = lazy(async () => await import('./AccountAddresses'))
