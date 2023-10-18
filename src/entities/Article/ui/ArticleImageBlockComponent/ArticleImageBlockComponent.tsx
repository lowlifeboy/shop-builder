import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticleImageBlockComponent.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface ArticleImageBlockComponentProps {
  className?: string
}

const ArticleImageBlockComponent = memo(({ className }: ArticleImageBlockComponentProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
      ArticleImageBlockComponent
    </div>
  )
})

export default ArticleImageBlockComponent
