import { memo, type ReactNode } from 'react'

import cls from './ArticleParam.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface ArticleParamProps {
  Icon: () => ReactNode
  text: string
  className?: string
}

const ArticleParam = memo(({ Icon, text, className }: ArticleParamProps) => {
  return (
    <div className={classNames(cls.articleParam, {}, [className])}>
      <Icon />
      <span>{text}</span>
    </div>
  )
})

export default ArticleParam
