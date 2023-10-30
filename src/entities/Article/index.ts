export { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById'

export { articleDetailsReducer, articleDetailsActions } from './model/slice/articleDetailsSlice'

export type { ArticleDetailsState } from './model/types/articleDetailsState'
export type {
  default as ArticleSchema,
  ArticleImageBlock,
  ArticleHeaderBlock,
  ArticleParagraphBlock,
  ArticleQuoteBlock,
  ArticleListBlock
} from './model/types/articleSchema'
export { default as ArticleDetails } from './ui/ArticleDetails/ArticleDetails'
