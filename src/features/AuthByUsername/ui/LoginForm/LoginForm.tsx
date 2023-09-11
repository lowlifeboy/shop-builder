import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import cls from './LoginForm.module.scss'

import getLoginStates from '../../model/selectors/getLoginStates/getLoginStates'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

import { classNames } from 'shared/lib/classNames/classNames'
import AppButton, { AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { AppInput, AppInputTheme } from 'shared/ui/AppInput/AppInput'
import AppCheckbox from 'shared/ui/AppCheckbox/AppCheckbox'
import AppErrorText from 'shared/ui/AppErrorText/AppErrorText'
import { loginActions, loginReducer } from 'features/AuthByUsername'
import DynamicModuleLoader, { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = { loginForm: loginReducer }

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const loginForm = useSelector(getLoginStates)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onChangeRememberMe = useCallback((value: boolean) => {
    dispatch(loginActions.setRememberMe(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    if (loginForm) {
      // @ts-expect-error unknown
      dispatch(loginByUsername(loginForm))
    }
  }, [loginForm, dispatch])

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.loginForm, {}, [className])}>
        <div className={cls.description}>
          <p>{t('dontHaveAnAccount')}</p>
          <AppButton onClick={() => {}} theme={AppButtonTheme.CLEAR}>{t('signUp')}</AppButton>
        </div>

        <AppErrorText text={loginForm?.error === 'loginError' ? t('loginError') : ''} />

        <div className={cls.form}>
          <AppInput
            theme={AppInputTheme.UNDERLINED}
            value={loginForm?.username}
            onChange={onChangeUsername}
            placeholder={t('signInUserNamePlaceholder')}
            showError
            autofocus
          />
          <AppInput
            theme={AppInputTheme.UNDERLINED}
            value={loginForm?.password}
            onChange={onChangePassword}
            placeholder={t('signInPasswordPlaceholder')}
            showError
          />
          <div className={cls.row}>
            <AppCheckbox
              checked={!!loginForm?.rememberMe}
              onChange={onChangeRememberMe}
              text={t('rememberMe')}
              showError
            />
            <div className={cls.forgotPasswordWrapper}>
              <AppButton
                onClick={() => {}}
                theme={AppButtonTheme.CLEAR}
              >
                {t('forgotPassword')}
              </AppButton>
            </div>
          </div>
          <AppButton
            theme={AppButtonTheme.ROUNDED}
            onClick={onLoginClick}
            disabled={loginForm?.isLoading}
          >
            {t('signIn')}
          </AppButton>
        </div>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
