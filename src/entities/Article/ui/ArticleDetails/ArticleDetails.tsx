import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import cls from './ArticleDetails.module.scss'

import AppSkeleton from 'shared/ui/AppSkeleton/AppSkeleton'
import AppErrorText, { TextAlign } from 'shared/ui/AppErrorText/AppErrorText'
import { classNames } from 'shared/lib/classNames/classNames'
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData'
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError'
import { getArticleDetailsLoading } from '../../model/selectors/getArticleDetailsLoading/getArticleDetailsLoading'

interface ArticleDetailsProps {
  id: string
  className?: string
}

const initialReducers = { articleDetails: articleDetailsReducer }

const ArticleDetails = memo(({ id, className }: ArticleDetailsProps) => {
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()

  // const isLoading = true
  const isLoading = useSelector(getArticleDetailsLoading)
  const error = useSelector(getArticleDetailsError)
  const data = useSelector(getArticleDetailsData)

  useEffect(() => {
    void dispatch(fetchArticleById(id))
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
      <>
        <AppSkeleton width={160} height={30} className={cls.tagsList} />
        <AppSkeleton width={900} height={58} className={cls.titleWrapper} />
        <div className={cls.paramsWrapper}>
          <AppSkeleton width={127} height={26} />
          <AppSkeleton width={136} height={26} />
          <AppSkeleton width={119} height={26} />
        </div>
        <AppSkeleton width="100%" height={640} className={cls.bannerWrapper} />
        <AppSkeleton width="100%" height={300} />
      </>
    )
  } else if (error) {
    content = (
      <div className="errorWrapper">
        <AppErrorText text={error} title={t('articleNotFound')} align={TextAlign.CENTER} />
      </div>
    )
  } else {
    content = data?.title
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount >
      <div className={classNames(cls.articleDetails, { [cls.contentCentered]: !!error }, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
})

export default ArticleDetails
