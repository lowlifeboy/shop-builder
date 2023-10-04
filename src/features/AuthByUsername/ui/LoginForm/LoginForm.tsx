import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'

import cls from './LoginForm.module.scss'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

import { classNames } from 'shared/lib/classNames/classNames'
import AppButton, { AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { AppInput, AppInputTheme } from 'shared/ui/AppInput/AppInput'
import AppCheckbox from 'shared/ui/AppCheckbox/AppCheckbox'
import AppErrorText from 'shared/ui/AppErrorText/AppErrorText'
import { getLoginErrorState, getLoginLoadingState, loginReducer } from 'features/AuthByUsername'
import DynamicModuleLoader, { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { validationSchema } from '../../model/services/formValidation/loginForm'
import { useSelector } from 'react-redux'
import { ProfileRoutePath, ProfileRoutes } from 'shared/config/routeConfig/routeConfig'
import { useNavigate } from 'react-router-dom'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = { loginForm: loginReducer }

export interface LoginFormState {
  username: string
  password: string
  rememberMe: boolean
}

const initialValues: LoginFormState = {
  username: '',
  password: '',
  rememberMe: false
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const error = useSelector(getLoginErrorState)
  const isLoading = useSelector(getLoginLoadingState)

  const handleSubmit = useCallback((values: LoginFormState) => {
    void dispatch(loginByUsername(values)).then(() => {
      navigate(ProfileRoutePath[ProfileRoutes.PROFILE_DASHBOARD])
    })
  }, [dispatch, navigate])

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true
  })

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <form onSubmit={formik.handleSubmit} className={classNames(cls.loginForm, {}, [className])}>
        <div className={cls.description}>
          <p>{t('dontHaveAnAccount')}</p>
          <AppButton onClick={() => {}} theme={AppButtonTheme.CLEAR}>{t('signUp')}</AppButton>
        </div>

        <AppErrorText text={error === 'loginError' ? t('loginError') : ''} />

        <div className={cls.form}>
          <AppInput
            theme={AppInputTheme.UNDERLINED}
            value={formik.values.username}
            error={formik.errors.username}
            onChange={async (event) => await formik.setFieldValue('username', event.target.value)}
            placeholder={t('signInUserNamePlaceholder')}
            showError
            autofocus
          />
          <AppInput
            theme={AppInputTheme.UNDERLINED}
            value={formik.values.password}
            error={formik.errors.password}
            onChange={async (event) => await formik.setFieldValue('password', event.target.value)}
            placeholder={t('signInPasswordPlaceholder')}
            showError
          />
          <div className={cls.row}>
            <AppCheckbox
              checked={formik.values.rememberMe}
              onChange={async () => await formik.setFieldValue('rememberMe', !formik.values.rememberMe)}
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
            type="submit"
            theme={AppButtonTheme.ROUNDED}
            disabled={isLoading ?? (!formik.values.username || !formik.values.password)}
          >
            {t('signIn')}
          </AppButton>
        </div>
      </form>
    </DynamicModuleLoader>
  )
})

export default LoginForm
