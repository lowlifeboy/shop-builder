import cls from './CustomQuoteRenderer.module.scss'

import { QuoteIcon } from 'shared/assets/icons'

import { type ArticleQuoteBlock } from 'entities/Article'

const CustomQuoteRenderer = ({ data }: ArticleQuoteBlock) => {
  return (
    <div className={cls.customQuoteRenderer}>
      <QuoteIcon />
      <p className={cls.quoteText}>{data.text}</p>
      <p className={cls.quoteAuthor}>— {data.caption}</p>
    </div>
  )
}

export default CustomQuoteRenderer
