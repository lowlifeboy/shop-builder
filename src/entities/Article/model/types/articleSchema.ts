interface ArticleBlockBase {
  id: string
  type: string
}
export interface ArticleImageBlock extends ArticleBlockBase {
  type: 'image'
  data: {
    caption: string
    stretched: boolean
    url: string
    withBorder: boolean
    withBackground: boolean
  }
}

export interface ArticleHeaderBlock extends ArticleBlockBase {
  type: 'header'
  data: {
    text: string
    level: number
  }
}

export interface ArticleParagraphBlock extends ArticleBlockBase {
  type: 'paragraph'
  data: {
    text: string
  }
}

export interface ArticleQuoteBlock extends ArticleBlockBase {
  type: 'quote'
  data: {
    caption: string
    text: string
  }
}

export interface ArticleListBlock extends ArticleBlockBase {
  type: 'list'
  data: {
    style: 'ordered' | 'unordered'
    items: string[]
  }
}

export interface ArticleDelimiterBlock extends ArticleBlockBase {
  type: 'delimiter'
  // eslint-disable-next-line @typescript-eslint/ban-types
  data: {}
}

export type ArticleBlock = ArticleQuoteBlock | ArticleImageBlock | ArticleHeaderBlock | ArticleParagraphBlock | ArticleListBlock | ArticleDelimiterBlock

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
