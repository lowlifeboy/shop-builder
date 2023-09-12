import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import cls from './LoginForm.module.scss'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

import { classNames } from 'shared/lib/classNames/classNames'
import AppButton, { AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { AppInput, AppInputTheme } from 'shared/ui/AppInput/AppInput'
import AppCheckbox from 'shared/ui/AppCheckbox/AppCheckbox'
import AppErrorText from 'shared/ui/AppErrorText/AppErrorText'
import { loginActions, loginReducer } from 'features/AuthByUsername'
import DynamicModuleLoader, { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import getLoginUsernameState from '../../model/selectors/getLoginUsernameState/getLoginUsernameState'
import getLoginPasswordState from 'features/AuthByUsername/model/selectors/getLoginPasswordState/getLoginPasswordState'
import getLoginRememberMeState from '../../model/selectors/getLoginRememberMeState/getLoginRememberMeState'
import getLoginLoadingState from '../../model/selectors/getLoginLoadingState/getLoginLoadingState'
import getLoginErrorState from '../../model/selectors/getLoginErrorState/getLoginErrorState'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = { loginForm: loginReducer }

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  // Form states
  const username = useSelector(getLoginUsernameState)
  const password = useSelector(getLoginPasswordState)
  const rememberMe = useSelector(getLoginRememberMeState)
  const isLoading = useSelector(getLoginLoadingState)
  const error = useSelector(getLoginErrorState)

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
    if (username && password && rememberMe !== undefined) {
      void dispatch(loginByUsername({ username, password, rememberMe }))
    }
  }, [dispatch, password, rememberMe, username])

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.loginForm, {}, [className])}>
        <div className={cls.description}>
          <p>{t('dontHaveAnAccount')}</p>
          <AppButton onClick={() => {}} theme={AppButtonTheme.CLEAR}>{t('signUp')}</AppButton>
        </div>

        <AppErrorText text={error === 'loginError' ? t('loginError') : ''} />

        <div className={cls.form}>
          <AppInput
            theme={AppInputTheme.UNDERLINED}
            value={username}
            onChange={onChangeUsername}
            placeholder={t('signInUserNamePlaceholder')}
            showError
            autofocus
          />
          <AppInput
            theme={AppInputTheme.UNDERLINED}
            value={password}
            onChange={onChangePassword}
            placeholder={t('signInPasswordPlaceholder')}
            showError
          />
          <div className={cls.row}>
            <AppCheckbox
              checked={!!rememberMe}
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
            disabled={isLoading ?? (!username || !password)}
          >
            {t('signIn')}
          </AppButton>
        </div>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
