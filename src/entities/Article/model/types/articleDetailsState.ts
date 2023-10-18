import { type ArticleSchema } from 'entities/Article'

export interface ArticleDetailsState {
  isLoading?: boolean
  error?: string
  data?: ArticleSchema
}
