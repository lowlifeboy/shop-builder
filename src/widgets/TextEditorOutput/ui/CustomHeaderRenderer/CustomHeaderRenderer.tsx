import ReactHtmlParser from 'react-html-parser'

import cls from './CustomHeaderRenderer.module.scss'
import { type ArticleHeaderBlock } from 'entities/Article'

const renderHeader = ({ data: { text, level } }: ArticleHeaderBlock) => {
  switch (level) {
    case 1:
      return <h1>{ReactHtmlParser(text)}</h1>
    case 2:
      return <h2>{ReactHtmlParser(text)}</h2>
    case 3:
      return <h3>{ReactHtmlParser(text)}</h3>
    case 4:
      return <h4>{ReactHtmlParser(text)}</h4>
    case 5:
      return <h5>{ReactHtmlParser(text)}</h5>
    case 6:
      return <h6>{ReactHtmlParser(text)}</h6>
    default:
      return null
  }
}

const CustomHeaderRenderer = ({ data }: ArticleHeaderBlock) => {
  return <div className={cls.customHeaderRenderer}>{renderHeader({ data })}</div>
}

export default CustomHeaderRenderer
