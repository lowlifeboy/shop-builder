export interface ProductProperties {
  size?: string
  color?: string
}

export interface Product {
  id: string
  title: string
  price: number
  preview: string
  properties: ProductProperties
}
