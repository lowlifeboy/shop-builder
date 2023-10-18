export enum ArticleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT'
}

export interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE
  code: string
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE
  src: string
  title: string
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT
  paragraphs: string[]
  title?: string
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export enum ArticleCategories {
  IT = 'it',
  SCIENCE = 'science',
  OTHER = 'other'
}

export default interface ArticleSchema {
  id: string
  title: string
  description: string
  categories: ArticleCategories[]
  author: {
    id: string
    username: string
  }
  date: string
  commentsNumber: number
  banner: string
  preview: string
  time: number
  blocks: ArticleBlock[]
}
