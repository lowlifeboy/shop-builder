import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CustomImageRenderer.module.scss'
import { type ArticleImageBlock } from 'entities/Article'

const CustomImageRenderer = ({ data }: ArticleImageBlock) => {
  const { caption, stretched, url, withBorder, withBackground } = data

  return url
    ? (
      <div className={
        classNames(
          cls.customImageRenderer,
          {
            [cls.stretched]: stretched,
            [cls.withBorder]: withBorder,
            [cls.withBackground]: withBackground
          },
          []
        )
      }>
        <img src={url} alt={caption}/>
        <p>{caption}</p>
      </div>
      )
    : null
}

export default CustomImageRenderer
