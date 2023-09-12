import { type OrderStatus } from 'shared/const/common'

export interface Order {
  id: string
  productId: string
  quantity: number
  totalPrice: number
  date: string
  status: OrderStatus
}

export interface Address {
  id: string
  name: string
  address: string
}

export interface Product {
  id: string
  title: string
  price: number
  preview: string
  properties: {
    size?: string
    color?: string
  }
}

export interface Profile {
  firstName: string
  lastName: string
  displayName: string
  email: string
  avatar: string
  orders: Order[]
  addresses: Address[]
  wishlist: Product[]
}

export interface ProfileSchema {
  isLoading: boolean
  readonly: boolean
  data?: Profile
  error?: any
}
