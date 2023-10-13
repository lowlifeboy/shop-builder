import { memo, Suspense } from 'react'

import cls from './NotAuthPage.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import PageLoader from 'shared/ui/PageLoader/PageLoader'
import { LoginFormAsync } from 'features/AuthByUsername/ui/LoginForm/LoginForm.async'

interface NotAuthPageProps {
  className?: string
}

const NotAuthPage = memo(({ className }: NotAuthPageProps) => {
  // const { t } = useTranslation()

  return (
    <div className={classNames(cls.notAuthPage, {}, [className])}>
      <Suspense fallback={<PageLoader />}>
        <LoginFormAsync />
      </Suspense>
    </div>
  )
})

export default NotAuthPage
