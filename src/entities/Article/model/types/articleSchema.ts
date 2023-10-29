export enum ArticleBlockType {
  IMAGE = 'image',
  PARAGRAPH = 'paragraph',
  HEADER = 'header',
  QUOTE = 'quote',
}

export interface ArticleImageBlock {
  data: {
    caption: string
    stretched: boolean
    url: string
    withBorder: boolean
    withBackground: boolean
  }
}

export interface ArticleHeaderBlock {
  data: {
    text: string
    level: number
  }
}

export interface ArticleParagraphBlock {
  data: {
    text: string
  }
}

export interface ArticleQuoteBlock {
  data: {
    caption: string
    text: string
  }
}

export type ArticleBlock = ArticleQuoteBlock | ArticleImageBlock | ArticleHeaderBlock | ArticleParagraphBlock

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
    displayName: string
  }
  date: string
  commentsNumber: number
  banner: string
  preview: string
  blocks: ArticleBlock[]
}
