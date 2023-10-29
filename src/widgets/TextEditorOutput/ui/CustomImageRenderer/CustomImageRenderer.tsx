import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CustomImageRenderer.module.scss'

interface CustomImageRendererProps {
  data: {
    caption: string
    stretched: boolean
    url: string
    withBorder: boolean
    withBackground: boolean
  }
}

const CustomImageRenderer = ({ data }: CustomImageRendererProps) => {
  return data.url
    ? (
      <div className={classNames(cls.customImageRenderer, { [cls.stretched]: data.stretched, [cls.withBorder]: data.withBorder, [cls.withBackground]: data.withBackground }, [])}>
        <img src={data.url} alt={data.caption}/>
        <p>{data.caption}</p>
      </div>
      )
    : null
}

export default CustomImageRenderer
