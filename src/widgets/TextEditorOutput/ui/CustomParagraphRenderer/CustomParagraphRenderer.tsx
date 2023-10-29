import ReactHtmlParser from 'react-html-parser'

import cls from './CustomParagraphRenderer.module.scss'

interface CustomParagraphRendererProps {
  data: {
    text: string
  }
}

const CustomParagraphRenderer = ({ data }: CustomParagraphRendererProps) => {
  return <p className={cls.customParagraphRenderer}>{ReactHtmlParser(data.text)}</p>
}

export default CustomParagraphRenderer
