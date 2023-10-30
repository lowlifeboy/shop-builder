import ReactHtmlParser from 'react-html-parser'

import cls from './CustomParagraphRenderer.module.scss'

import { type ArticleParagraphBlock } from 'entities/Article'

const CustomParagraphRenderer = ({ data }: ArticleParagraphBlock) => {
  return <p className={cls.customParagraphRenderer}>{ReactHtmlParser(data.text)}</p>
}

export default CustomParagraphRenderer
