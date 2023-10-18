import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticleTextBlockComponent.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface ArticleTextBlockComponentProps {
  className?: string
}

const ArticleTextBlockComponent = memo(({ className }: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
      ArticleTextBlockComponent
    </div>
  )
})

export default ArticleTextBlockComponent
