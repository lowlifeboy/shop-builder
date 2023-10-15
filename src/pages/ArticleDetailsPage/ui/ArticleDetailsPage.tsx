import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticleDetailsPage.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface ArticleDetailsPageProps {
  className?: string
}

const fakeData = {
  title: 'Article details page'
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article')

  return (
    <div className={classNames(cls.articleDetailsPage, {}, [className])}>
      {fakeData.title}
    </div>
  )
})

export default ArticleDetailsPage
