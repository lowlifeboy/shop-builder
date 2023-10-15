import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticlesPage.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface ArticlesPageProps {
  className?: string
}

const fakeData = {
  title: 'Articles page'
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.articlesPage, {}, [className])}>
      {fakeData.title}
    </div>
  )
})

export default ArticlesPage
