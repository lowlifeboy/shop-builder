import { useTranslation } from 'react-i18next'

import cls from './PageError.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import AppButton, { ButtonSize, ColorsThemeButton, FillThemeButton, ThemeButton } from 'shared/ui/AppButton/AppButton'

interface PageErrorProps {
  className?: string
}

export default function PageError ({ className }: PageErrorProps) {
  const { t } = useTranslation()

  function reloadPage () {
    location.reload()
  }

  return (
    <div data-testid="pageError" className={classNames(cls.pageError, {}, [className ?? ''])}>
      <h1>{t('error')}</h1>
      <p>{t('unexpectedErrorOccurred')}</p>
      <AppButton
        onClick={reloadPage}
        theme={ThemeButton.ROUNDED}
        colorTheme={ColorsThemeButton.LIGHT}
        fillTheme={FillThemeButton.SOLID}
        size={ButtonSize.M}
      >
        {t('reloadPage')}
      </AppButton>
    </div>
  )
}
