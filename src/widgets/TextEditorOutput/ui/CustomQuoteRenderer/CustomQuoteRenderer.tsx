import cls from './CustomQuoteRenderer.module.scss'

import { QuoteIcon } from 'shared/assets/icons'

interface CustomQuoteRendererProps {
  data: {
    caption: string
    text: string
  }
}

const CustomQuoteRenderer = ({ data }: CustomQuoteRendererProps) => {
  console.log(data)

  return (
    <div className={cls.customQuoteRenderer}>
      <QuoteIcon />
      <p className={cls.quoteText}>{data.text}</p>
      <p className={cls.quoteAuthor}>— {data.caption}</p>
    </div>
  )
}

export default CustomQuoteRenderer
