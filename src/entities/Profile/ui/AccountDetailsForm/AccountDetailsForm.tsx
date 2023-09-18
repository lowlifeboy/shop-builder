import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './AccountDetailsForm.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { AppInput, AppInputTheme } from 'shared/ui/AppInput/AppInput'
import AppButton, { AppButtonFillTheme, AppButtonSize, AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { type Profile } from '../../model/types/profile'

interface AccountDetailsFormProps {
  className?: string
  data?: Profile
  readOnly?: boolean
  onEdit?: () => void
  onCancelEdit?: () => void
  onSaveChanges?: () => void
  onChangeFirstname?: (value: string) => void
  onChangeLastname?: (value: string) => void
  onChangeDisplayName?: (value: string) => void
  onChangeEmail?: (value: string) => void
}

const AccountDetailsForm = memo(({
  className,
  data,
  readOnly,
  onEdit,
  onCancelEdit,
  onSaveChanges,
  onChangeFirstname,
  onChangeLastname,
  onChangeDisplayName,
  onChangeEmail
}: AccountDetailsFormProps) => {
  const { t } = useTranslation('profile')

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.profileData}>
        {readOnly && onEdit && (
          <div className={cls.topButtonWrapper}>
            <AppButton
            theme={AppButtonTheme.SHARP}
            fillTheme={AppButtonFillTheme.SOLID}
            size={AppButtonSize.M}
            onClick={onEdit}
          >
            {t('edit')}
          </AppButton>
          </div>
        )}

        {!readOnly && onCancelEdit && onSaveChanges && (
          <div className={cls.topButtonWrapper}>
            <AppButton
              theme={AppButtonTheme.SHARP}
              fillTheme={AppButtonFillTheme.OUTLINE}
              size={AppButtonSize.M}
              onClick={onCancelEdit}
            >
              {t('cancel')}
            </AppButton>

            <AppButton
              theme={AppButtonTheme.SHARP}
              size={AppButtonSize.M}
              onClick={onSaveChanges}
            >
              {t('saveChanges')}
            </AppButton>
          </div>
        )}

        <AppInput
          name="firstName"
          theme={AppInputTheme.OUTLINED}
          value={data?.firstName}
          onChange={onChangeFirstname}
          placeholder={t('enterFirstName')}
          showError
          autofocus={!readOnly}
          disabled={readOnly}
        />

        <AppInput
          name="lastName"
          theme={AppInputTheme.OUTLINED}
          value={data?.lastName}
          onChange={onChangeLastname}
          placeholder={t('enterLastName')}
          showError
          disabled={readOnly}
        />

        <AppInput
          name="displayName"
          theme={AppInputTheme.OUTLINED}
          value={data?.displayName}
          onChange={onChangeDisplayName}
          placeholder={t('enterDisplayName')}
          showError
          disabled={readOnly}
        />

        <AppInput
          name="email"
          theme={AppInputTheme.OUTLINED}
          value={data?.email}
          onChange={onChangeEmail}
          placeholder={t('enterEmail')}
          showError
          disabled={readOnly}
        />

        {!readOnly && onSaveChanges && (
          <AppButton
            theme={AppButtonTheme.SHARP}
            size={AppButtonSize.M}
            onClick={onSaveChanges}
          >
            {t('saveChanges')}
          </AppButton>
        )}
      </div>
    </div>
  )
})

export default AccountDetailsForm
