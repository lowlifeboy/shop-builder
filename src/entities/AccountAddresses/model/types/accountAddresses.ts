export interface AccountAddressSchema {
  id?: string
  name: string
  street: string
  city: string
  country: string
  zip?: string
}

export interface AccountAddressesState {
  isLoading: boolean
  data?: AccountAddressSchema[]
  error?: any
}
