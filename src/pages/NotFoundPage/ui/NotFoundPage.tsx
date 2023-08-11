import { useTranslation } from 'react-i18next'

import cls from './NotFoundPage.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import AppButton, { ButtonSize, FillThemeButton, ThemeButton } from 'shared/ui/AppButton/AppButton'
import NotFoundPageIcon from 'shared/assets/icons/NotFoundPageIcon'
import { getIconColorByTheme } from 'shared/lib/getMainColorByTheme/getIconColorByTheme'
import { useTheme } from 'app/providers/ThemeProvider'

interface NotFoundPageProps {
  className?: string
}

export default function NotFoundPage ({ className }: NotFoundPageProps) {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <div className={classNames(cls.notFoundPage, {}, [className ?? ''])}>
      <NotFoundPageIcon color={getIconColorByTheme(theme)} />
      <h1>{t('pageNotFound')}</h1>
      <p>{t('pageNotFoundDescription')}</p>
      <AppButton
        onClick={() => { console.log('test') }}
        theme={ThemeButton.ROUNDED}
        fillTheme={FillThemeButton.SOLID}
        size={ButtonSize.M}
        disabled
      >
        {t('goBackHome')}
      </AppButton>
    </div>
  )
}
