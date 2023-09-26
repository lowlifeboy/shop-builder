import { type OrderStatus } from 'shared/const/common'

export interface AccountOrderSchema {
  id: string
  productId: string
  quantity: number
  totalPrice: number
  date: string
  status: OrderStatus
}

export interface AccountOrdersState {
  isLoading: boolean
  data?: AccountOrderSchema[]
  error?: any
}
