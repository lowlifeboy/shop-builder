import { useTranslation } from 'react-i18next'

import cls from './LoginForm.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import AppButton, { AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { AppInput, AppInputTheme } from 'shared/ui/AppInput/AppInput'
import AppCheckbox from 'shared/ui/AppCheckbox/AppCheckbox'

interface LoginFormProps {
  className?: string
}

export default function LoginForm ({ className }: LoginFormProps) {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <div className={cls.description}>
        <p>{t('dontHaveAnAccount')}</p>
        <AppButton onClick={() => {}} theme={AppButtonTheme.CLEAR}>{t('signUp')}</AppButton>
      </div>

      <form action="">
        <AppInput
          theme={AppInputTheme.UNDERLINED}
          onChange={() => {}}
          placeholder={t('signInUserNamePlaceholder')}
          showError
          autofocus
        />
        <AppInput
          theme={AppInputTheme.UNDERLINED}
          onChange={() => {}}
          placeholder={t('signInPasswordPlaceholder')}
          showError
        />
        <div className={cls.row}>
          <AppCheckbox checked={false} onChange={() => {}} text={'Remember me'} showError />
          <div className={cls.forgotPasswordWrapper}>
            <AppButton onClick={() => {}} theme={AppButtonTheme.CLEAR}>{t('forgotPassword')}</AppButton>
          </div>
        </div>
        <AppButton theme={AppButtonTheme.ROUNDED} onClick={() => {}}>{t('signIn')}</AppButton>
      </form>
    </div>
  )
}
