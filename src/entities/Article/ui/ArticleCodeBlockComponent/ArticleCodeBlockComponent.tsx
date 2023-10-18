import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticleCodeBlockComponent.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface ArticleCodeBlockComponentProps {
  className?: string
}

const ArticleCodeBlockComponent = memo(({ className }: ArticleCodeBlockComponentProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
      ArticleCodeBlockComponent
    </div>
  )
})

export default ArticleCodeBlockComponent
