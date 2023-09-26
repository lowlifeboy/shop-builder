export interface AccountDetailsSchema {
  id?: string
  firstName: string
  lastName: string
  displayName: string
  email: string
  avatar?: string
}

export interface AccountDetailsState {
  isLoading: boolean
  data?: AccountDetailsSchema
  error?: any
}
