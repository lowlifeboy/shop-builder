import { type Product } from 'entities/Product'

export interface AccountWishlistState {
  isLoading: boolean
  data?: Product[]
  error?: any
}
