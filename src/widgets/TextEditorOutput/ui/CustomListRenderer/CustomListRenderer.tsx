import { memo } from 'react'

import cls from './CustomListRenderer.module.scss'

import { type ArticleListBlock } from 'entities/Article'
import { classNames } from 'shared/lib/classNames/classNames'

const unorderedListDot = '\u2015'

const OrderedList = memo(({ data }: ArticleListBlock) => {
  return (
    <ol className={classNames(cls.customListRenderer, {}, [cls.ordered])}>
      {data.items.map((item, index) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  )
})

const UnorderedList = memo(({ data }: ArticleListBlock) => {
  return (
    <ul className={cls.customListRenderer}>
      {data.items.map((item, index) => (
        <li key={item}><span>{unorderedListDot}</span> {item}</li>
      ))}
    </ul>
  )
})

const CustomListRenderer = ({ data }: ArticleListBlock) => {
  const { style } = data

  return style === 'ordered' ? <OrderedList data={data} /> : <UnorderedList data={data} />
}

export default CustomListRenderer
