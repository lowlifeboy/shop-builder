import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './PageError.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import AppButton, { AppButtonSize, AppButtonFillTheme, AppButtonTheme } from 'shared/ui/AppButton/AppButton'

interface PageErrorProps {
  className?: string
}

const PageError = memo(({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  function reloadPage () {
    location.reload()
  }

  return (
    <div data-testid="pageError" className={classNames(cls.pageError, {}, [className])}>
      <h1>{t('error')}</h1>
      <p>{t('unexpectedErrorOccurred')}</p>
      <AppButton
        onClick={reloadPage}
        theme={AppButtonTheme.ROUNDED}
        fillTheme={AppButtonFillTheme.SOLID}
        size={AppButtonSize.M}
      >
        {t('reloadPage')}
      </AppButton>
    </div>
  )
})

export default PageError
