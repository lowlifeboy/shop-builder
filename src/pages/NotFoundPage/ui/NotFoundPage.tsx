import { useTranslation } from 'react-i18next'

import cls from './NotFoundPage.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import AppButton, { AppButtonFillTheme, AppButtonSize, AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { NotFoundPageIcon } from 'shared/assets/icons'

interface NotFoundPageProps {
  className?: string
}

export default function NotFoundPage ({ className }: NotFoundPageProps) {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.notFoundPage, {}, [className ?? ''])}>
      <NotFoundPageIcon className={cls.notFoundPageIcon} />
      <h1>{t('pageNotFound')}</h1>
      <p>{t('pageNotFoundDescription')}</p>
      <AppButton
        onClick={() => { console.log('test') }}
        theme={AppButtonTheme.ROUNDED}
        fillTheme={AppButtonFillTheme.SOLID}
        size={AppButtonSize.M}
        disabled
      >
        {t('goBackHome')}
      </AppButton>
    </div>
  )
}
