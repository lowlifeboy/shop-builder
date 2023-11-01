import { memo } from 'react'

import cls from './CustomListRenderer.module.scss'

import { type ArticleListBlock } from 'entities/Article'
import { classNames } from 'shared/lib/classNames/classNames'
import ReactHtmlParser from 'react-html-parser'

const unorderedListDot = '\u2015'

const OrderedList = memo(({ data }: { data: ArticleListBlock }) => {
  return (
    <ol className={classNames(cls.customListRenderer, {}, [cls.ordered])}>
      {data.data.items.map((item, index) => (
        <li key={item}>{ReactHtmlParser(item)}</li>
      ))}
    </ol>
  )
})

const UnorderedList = memo(({ data }: { data: ArticleListBlock }) => {
  return (
    <ul className={cls.customListRenderer}>
      {data.data.items.map((item, index) => (
        <li key={item}><span>{unorderedListDot}</span> {ReactHtmlParser(item)}</li>
      ))}
    </ul>
  )
})

const CustomListRenderer = (props: ArticleListBlock) => {
  const { data: { style } } = props

  return style === 'ordered' ? <OrderedList data={props} /> : <UnorderedList data={props} />
}

export default CustomListRenderer
