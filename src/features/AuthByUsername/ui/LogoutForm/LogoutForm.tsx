import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import cls from './LogoutForm.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import AppButton, { AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { userActions } from 'entities/User'

interface LogoutFormProps {
  className?: string
}

export const LogoutForm = ({ className }: LogoutFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  return (
    <div className={classNames(cls.logoutForm, {}, [className])}>
      <div className={cls.description}>
        <p>{t('areYouSureLogout')}</p>
      </div>

      <div className={cls.form}>
        <AppButton
          theme={AppButtonTheme.ROUNDED}
          onClick={onLogout}
        >
          {t('logout')}
        </AppButton>
      </div>
    </div>
  )
}
