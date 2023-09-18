import { lazy } from 'react'

export const AddressesAsync = lazy(async () => await import('./Addresses'))
