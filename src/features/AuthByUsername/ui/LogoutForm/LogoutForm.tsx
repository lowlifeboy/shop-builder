import { memo, useCallback } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import cls from './LogoutForm.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import AppButton, { AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { userActions } from 'entities/User'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export interface LogoutFormProps {
  className?: string
}

const LogoutForm = memo(({ className }: LogoutFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const store = useStore() as ReduxStoreWithManager
  const navigate = useNavigate()

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
    // store.reducerManager.remove('profile')
    dispatch({ type: `@DESTROY ${'profile'} reducer` })
    navigate(RoutePath.main)
  }, [dispatch, navigate])

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
})

export default LogoutForm
