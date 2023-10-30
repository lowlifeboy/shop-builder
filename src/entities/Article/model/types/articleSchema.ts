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

export interface ArticleListBlock {
  data: {
    style: 'ordered' | 'unordered'
    items: string[]
  }
}

export type ArticleBlock = ArticleQuoteBlock | ArticleImageBlock | ArticleHeaderBlock | ArticleParagraphBlock | ArticleListBlock

export default interface ArticleSchema {
  id: string
  title: string
  description: string
  categories: string[]
  author: {
    id: string
    displayName: string
  }
  date: string
  commentsNumber: number
  banner: string
  preview: string
  content: {
    time: number
    blocks: ArticleBlock[]
    version: string
  }
}
